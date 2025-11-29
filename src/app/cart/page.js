"use client";
import { useState, useEffect } from "react";
import { Container, Table, Button, Card, Row, Col, Alert, InputGroup, Form } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // جلب محتويات السلة من localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(cart);
  }, []);

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cartItems.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeItem = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    if (confirm("هل تريد تفريغ السلة بالكامل؟")) {
      setCartItems([]);
      localStorage.setItem('cart', '[]');
    }
  };

  // الحسابات
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // const sendWhatsAppOrder = () => {
  //   if (cartItems.length === 0) {
  //     alert("السلة فارغة! أضف بعض المنتجات أولاً.");
  //     return;
  //   }

  //   // تحضير نص الطلب
  //   const orderDetails = cartItems.map(item =>
  //     `• ${item.name} - ${item.quantity} قطعة - ${item.price * item.quantity} ج.م`
  //   ).join('\n');

  //   const message = `🎯 طلب جديد\n\n${orderDetails}\n\n💰 الإجمالي: ${totalPrice} ج.م\n📦 عدد القطع: ${totalItems}`;

  //   // ترميز الرسالة للواتساب
  //   const encodedMessage = encodeURIComponent(message);
  //   const phoneNumber = "201002955430"; // ⬅️ غير برقمك الحقيقي
    
  //   window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  // };

  
  const sendWhatsAppOrder = () => {
    if (cartItems.length === 0) {
      alert("السلة فارغة! أضف بعض المنتجات أولاً.");
      return;
    }

    // تحضير نص الطلب
    const orderDetails = cartItems.map(item =>
      `• ${item.name}  \n[${item.quantity} قطعة ] \n${item.price * item.quantity} ج.م`
    ).join('\n');

    const message = `🎯 طلب جديد\n\n${orderDetails}\n\n💰 الإجمالي: ${totalPrice} ج.م\n📦 عدد القطع: ${totalItems}`;

    // ترميز الرسالة للواتساب
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "201002955430"; // ⬅️ غير برقمك الحقيقي
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };
  if (cartItems.length === 0) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <h2>🛒 سلة التسوق</h2>
          <Alert variant="info" className="mt-4">
            <h4>السلة فارغة</h4>
            <p>لم تقم بإضافة أي منتجات إلى السلة بعد.</p>
            <Button variant="primary" onClick={() => router.push('/store')}>
              ابدأ التسوق
            </Button>
          </Alert>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>🛒 سلة التسوق</h2>
        <Button variant="outline-danger" onClick={clearCart}>
          🗑️ تفريغ السلة
        </Button>
      </div>

      <Row>
        <Col lg={8}>
          <Card className="shadow-sm">
            <Card.Header>
              <h5 className="mb-0">المنتجات المختارة</h5>
            </Card.Header>
            <Card.Body>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>الصورة</th>
                    <th>المنتج</th>
                    <th>السعر</th>
                    <th>الكمية</th>
                    <th>المجموع</th>
                    <th>إجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img
                          src={item.image || "https://via.placeholder.com/50"}
                          alt={item.name}
                          style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "6px" }}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.price} ج.م</td>
                      <td>
                        <InputGroup style={{ width: "120px" }}>
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </Button>
                          <Form.Control
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                            min="1"
                            className="text-center"
                          />
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </InputGroup>
                      </td>
                      <td>{item.price * item.quantity} ج.م</td>
                      <td>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                        >
                          🗑️
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="shadow-sm sticky-top" style={{ top: "100px" }}>
            <Card.Header>
              <h5 className="mb-0">ملخص الطلب</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <span>عدد القطع:</span>
                <strong>{totalItems} قطعة</strong>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>الإجمالي:</span>
                <strong className="h5 text-success">{totalPrice} ج.م</strong>
              </div>
              
              <Button 
                variant="success" 
                size="lg" 
                className="w-100 mb-2"
                onClick={sendWhatsAppOrder}
              >
                📱 طلب عبر واتساب
              </Button>
              
              <Button 
                variant="outline-primary" 
                className="w-100"
                onClick={() => router.push('/store')}
              >
                ➕ متابعة التسوق
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}