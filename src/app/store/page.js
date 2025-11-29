
// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { Container, Row, Col, Card, Button, Spinner, Alert } from "react-bootstrap";
// import AdSlot from "@/components/AdSlot";
// import { supabase } from "/lib/supabaseClient";

// export default function StorePage() {
//   const [products, setProducts] = useState(null);
//   const [user, setUser] = useState(null);
//   const [loadingAuth, setLoadingAuth] = useState(true);

//   useEffect(() => {
//     // التحقق من حالة المستخدم
//     async function checkAuth() {
//       try {
//         const { data: { user } } = await supabase.auth.getUser();
//         setUser(user);
//       } catch (error) {
//         console.error("Error checking auth:", error);
//       } finally {
//         setLoadingAuth(false);
//       }
//     }

//     checkAuth();
//   }, []);

//   useEffect(() => {
//     async function fetchProducts() {
//       const res = await fetch("/api/products");
//       const data = await res.json();
//       setProducts(data);
//     }
//     fetchProducts();
//   }, []);

//   if (!products || loadingAuth)
//     return (
//       <div className="text-center py-5">
//         <Spinner animation="border" variant="success" />
//         <p className="mt-2">جاري التحميل...</p>
//       </div>
//     );

//   return (
//     <Container className="py-5">
//       <AdSlot width="80%" height="120px" label="إعلان أسفل الصفحة" />

//       <h1 className="text-center mb-4">🛒 متجر الأعلاف والخامات</h1>

//       {/* رسالة للمستخدمين غير المسجلين */}
//       {!user && (
//         <Alert variant="warning" className="text-center mb-4">
//           <strong>ملاحظة:</strong> سجل الدخول لرؤية أسعار المنتجات وتفاصيل الطلب
//         </Alert>
//       )}

//       <Row>
//         {products.map((product) => (
//           <Col md={4} lg={3} key={product.id} className="mb-4">
//             <Card className="h-100 shadow-sm">
//               <Card.Img
//                 variant="top"
//                 src={
//                   (product.images && product.images[0]) ||
//                   product.image ||
//                   "https://via.placeholder.com/300x200?text=No+Image"
//                 }
//                 style={{
//                   height: "200px",
//                   objectFit: "cover",
//                   borderTopLeftRadius: "10px",
//                   borderTopRightRadius: "10px",
//                 }}
//               />
//               <Card.Body className="d-flex flex-column">
//                 <Card.Title className="text-center">{product.name}</Card.Title>
//                 <Card.Text className="text-center text-muted flex-grow-1">
//                   {product.description?.length > 60
//                     ? product.description.slice(0, 60) + "..."
//                     : product.description}
//                 </Card.Text>
                
//                 {/* عرض السعر فقط للمستخدمين المسجلين */}
//                 {user ? (
//                   <h5 className="text-success text-center mb-3">
//                     {Number(product.price).toLocaleString()} جنيه
//                   </h5>
//                 ) : (
//                   <h5 className="text-warning text-center mb-3">
//                     سجل الدخول لرؤية السعر
//                   </h5>
//                 )}
                
//                 <div className="d-flex justify-content-evenly">
//                   <Link href={`/store/${product.id}`}>
//                     <Button variant="outline-success">عرض التفاصيل</Button>
//                   </Link>
                  
//                   {/* زر الطلب - يختلف حسب حالة المستخدم */}
//                   {user ? (
//                     <Link href={`/store/${product.id}`}>
//                       <Button variant="success">اطلب الآن</Button>
//                     </Link>
//                   ) : (
//                     <Button 
//                       variant="outline-warning"
//                       onClick={() => {
//                         // يمكنك إضافة وظيفة تسجيل الدخول هنا
//                         window.location.href = '/auth/signin';
//                       }}
//                     >
//                       سجل الدخول للطلب
//                     </Button>
//                   )}
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       {/* 📢 مساحة إعلان */}
//       <div
//         style={{
//           backgroundColor: "#f8f9fa",
//           padding: "20px",
//           textAlign: "center",
//           borderRadius: "10px",
//           marginTop: "40px",
//         }}
//       >
//         <p>📢 مساحة إعلان (728x90)</p>
//       </div>
//     </Container>
//   );
// }




// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { Container, Row, Col, Card, Button, Spinner, Alert } from "react-bootstrap";
// import AdSlot from "@/components/AdSlot";
// import { supabase } from "/lib/supabaseClient";

// export default function StorePage() {
//   const [products, setProducts] = useState(null);
//   const [user, setUser] = useState(null);
//   const [loadingAuth, setLoadingAuth] = useState(true);

//   useEffect(() => {
//     // التحقق من حالة المستخدم
//     async function checkAuth() {
//       try {
//         const { data: { user } } = await supabase.auth.getUser();
//         setUser(user);
//       } catch (error) {
//         console.error("Error checking auth:", error);
//       } finally {
//         setLoadingAuth(false);
//       }
//     }

//     checkAuth();
//   }, []);

//   useEffect(() => {
//     async function fetchProducts() {
//       const res = await fetch("/api/products");
//       const data = await res.json();
//       setProducts(data);
//     }
//     fetchProducts();
//   }, []);

//   if (!products || loadingAuth)
//     return (
//       <div className="text-center py-5">
//         <Spinner animation="border" variant="success" />
//         <p className="mt-2">جاري التحميل...</p>
//       </div>
//     );

//   return (
//     <Container className="py-5">
//       <AdSlot width="80%" height="120px" label="إعلان أسفل الصفحة" />

//       <h1 className="text-center mb-4">🛒 متجر الأعلاف والخامات</h1>

//       {/* رسالة للمستخدمين غير المسجلين */}
//       {!user && (
//         <Alert variant="warning" className="text-center mb-4">
//           <strong>ملاحظة:</strong> سجل الدخول لرؤية أسعار المنتجات وتفاصيل الطلب
//         </Alert>
//       )}

//       <Row>
//         {products.map((product) => (
//           <Col md={4} lg={3} key={product.id} className="mb-4">
//             <Card className="h-100 shadow-sm">
//               <Card.Img
//                 variant="top"
//                 src={
//                   (product.images && product.images[0]) ||
//                   product.image ||
//                   "https://via.placeholder.com/300x200?text=No+Image"
//                 }
//                 style={{
//                   height: "200px",
//                   objectFit: "cover",
//                   borderTopLeftRadius: "10px",
//                   borderTopRightRadius: "10px",
//                 }}
//               />
//               <Card.Body className="d-flex flex-column">
//                 <Card.Title className="text-center">{product.name}</Card.Title>
//                 <Card.Text className="text-center text-muted flex-grow-1">
//                   {product.description?.length > 60
//                     ? product.description.slice(0, 60) + "..."
//                     : product.description}
//                 </Card.Text>
                
//                 {/* عرض السعر فقط للمستخدمين المسجلين */}
//                 {user ? (
//                   <h5 className="text-success text-center mb-3">
//                     {Number(product.price).toLocaleString()} جنيه
//                   </h5>
//                 ) : (
//                   <h5 className="text-warning text-center mb-3">
//                     سجل الدخول لرؤية السعر
//                   </h5>
//                 )}
                
//                 <div className="d-flex justify-content-evenly">
//                   <Link href={`/store/${product.id}`}>
//                     <Button variant="outline-success">عرض التفاصيل</Button>
//                   </Link>
                  
//                   {/* زر الطلب - يختلف حسب حالة المستخدم */}
//                   {user ? (
//                     <Link href={`/store/${product.id}`}>
//                       <Button variant="success">اطلب الآن</Button>
//                     </Link>
//                   ) : (
//                     <Button 
//                       variant="outline-warning"
//                       onClick={() => {
//                         // يمكنك إضافة وظيفة تسجيل الدخول هنا
//                         window.location.href = '/auth/signin';
//                       }}
//                     >
//                       سجل الدخول للطلب
//                     </Button>
//                   )}
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       {/* 📢 مساحة إعلان */}
//       <div
//         style={{
//           backgroundColor: "#f8f9fa",
//           padding: "20px",
//           textAlign: "center",
//           borderRadius: "10px",
//           marginTop: "40px",
//         }}
//       >
//         <p>📢 مساحة إعلان (728x90)</p>
//       </div>
//     </Container>
//   );
// }

////////////////////////////////////////////////////////////////////////
// "use client";
// import React, { useEffect, useState } from "react";
// import { 
//   Container, 
//   Row, 
//   Col, 
//   Card, 
//   Button, 
//   Form, 
//   Badge, 
//   Modal, 
//   InputGroup,
//   Spinner,
//   Alert 
// } from "react-bootstrap";

// // 🔥 كومبوننت إضافة للسلة
// function AddToCartButton({ product }) {
//   const [showModal, setShowModal] = useState(false);
//   const [quantity, setQuantity] = useState(1);

//   const addToCart = () => {
//     const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
//     const existingItemIndex = currentCart.findIndex(item => item.id === product.id);
    
//     if (existingItemIndex > -1) {
//       currentCart[existingItemIndex].quantity += quantity;
//     } else {
//       currentCart.push({
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         image: product.images?.[0] || "",
//         quantity: quantity
//       });
//     }
    
//     localStorage.setItem('cart', JSON.stringify(currentCart));
//     alert(`✅ تم إضافة ${quantity} من ${product.name} إلى السلة`);
//     setShowModal(false);
//     setQuantity(1);
//   };

//   return (
//     <>
//       <Button 
//         variant="success" 
//         className="w-100"
//         onClick={() => setShowModal(true)}
//       >
//         🛒 اطلب الآن
//       </Button>

//       <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>إضافة إلى السلة</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="text-center mb-3">
//             <img 
//               src={product.images?.[0] || "https://via.placeholder.com/100"} 
//               alt={product.name}
//               style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px" }}
//             />
//             <h6 className="mt-2">{product.name}</h6>
//             <p className="text-success h5">{product.price} ج.م</p>
//           </div>

//           <Form.Group>
//             <Form.Label>الكمية المطلوبة</Form.Label>
//             <InputGroup>
//               <Button 
//                 variant="outline-secondary"
//                 onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
//               >
//                 -
//               </Button>
//               <Form.Control
//                 type="number"
//                 value={quantity}
//                 onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
//                 min="1"
//                 className="text-center"
//               />
//               <Button 
//                 variant="outline-secondary"
//                 onClick={() => setQuantity(prev => prev + 1)}
//               >
//                 +
//               </Button>
//             </InputGroup>
//           </Form.Group>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             إلغاء
//           </Button>
//           <Button variant="success" onClick={addToCart}>
//             🛒 إضافة إلى السلة
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default function StorePage() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("الكل");
//   const [loading, setLoading] = useState(true);
//   const [sortBy, setSortBy] = useState("newest");

//   // جلب المنتجات والفئات
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
        
//         // جلب المنتجات
//         const productsRes = await fetch("/api/products");
//         const productsData = await productsRes.json();
//         setProducts(productsData);
//         setFilteredProducts(productsData);

//         // جلب الفئات
//         const categoriesRes = await fetch("/api/categories");
//         const categoriesData = await categoriesRes.json();
//         setCategories(categoriesData);
        
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // فلترة وترتيب المنتجات
//   useEffect(() => {
//     let filtered = products;

//     // الفلترة حسب الفئة
//     if (selectedCategory !== "الكل") {
//       filtered = filtered.filter((product) => product.category === selectedCategory);
//     }

//     // الترتيب
//     if (sortBy === "price-low") {
//       filtered = [...filtered].sort((a, b) => a.price - b.price);
//     } else if (sortBy === "price-high") {
//       filtered = [...filtered].sort((a, b) => b.price - a.price);
//     } else if (sortBy === "newest") {
//       filtered = [...filtered].sort((a, b) => b.id - a.id);
//     }

//     setFilteredProducts(filtered);
//   }, [selectedCategory, sortBy, products]);

//   if (loading) {
//     return (
//       <Container className="py-5 text-center">
//         <Spinner animation="border" variant="success" />
//         <p className="mt-3">جارٍ تحميل المتجر...</p>
//       </Container>
//     );
//   }

//   return (
//     <Container className="py-5">
//       <h1 className="text-center mb-4">🛍️ متجرنا</h1>

//       {/* 🔹 أدوات الفلترة والترتيب */}
//       <div className="row justify-content-between mb-4">
//         <div className="col-md-4 mb-3">
//           <Form.Select
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             className="shadow-sm"
//           >
//             <option value="الكل">📂 كل المنتجات</option>
//             {categories.map((category) => (
//               <option key={category.id} value={category.name}>
//                 {category.name}
//               </option>
//             ))}
//           </Form.Select>
//         </div>

//         <div className="col-md-4 mb-3">
//           <Form.Select
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//             className="shadow-sm"
//           >
//             <option value="newest">🆕 الأحدث</option>
//             <option value="price-low">💰 السعر: من الأقل للأعلى</option>
//             <option value="price-high">💰 السعر: من الأعلى للأقل</option>
//           </Form.Select>
//         </div>
//       </div>

//       {/* 🔹 مؤشر النتائج */}
//       <div className="text-center mb-4">
//         <p className="text-muted">
//           {selectedCategory === "الكل" 
//             ? `عرض ${filteredProducts.length} منتج`
//             : `عرض ${filteredProducts.length} منتج في فئة "${selectedCategory}"`
//           }
//         </p>
//       </div>

//       {/* 🔹 شبكة المنتجات */}
//       <Row>
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <Col lg={3} md={4} sm={6} key={product.id} className="mb-4">
//               <Card className="shadow-sm h-100 product-card">
//                 {/* صورة المنتج */}
//                 {product.images && product.images[0] && (
//                   <Card.Img
//                     variant="top"
//                     src={product.images[0]}
//                     style={{ 
//                       height: "200px", 
//                       objectFit: "cover",
//                       cursor: "pointer"
//                     }}
//                     alt={product.name}
//                     onClick={() => window.location.href = `/store/${product.id}`}
//                   />
//                 )}
                
//                 <Card.Body className="d-flex flex-column">
//                   {/* الفئة */}
//                   {product.category && (
//                     <div className="mb-2">
//                       <Badge bg="outline-primary" text="dark" className="border">
//                         {product.category}
//                       </Badge>
//                     </div>
//                   )}
                  
//                   <Card.Title className="flex-grow-1" style={{ fontSize: "1.1rem" }}>
//                     {product.name}
//                   </Card.Title>
                  
//                   <Card.Text className="text-muted flex-grow-1" style={{ fontSize: "0.9rem" }}>
//                     {product.description?.slice(0, 80) || "لا يوجد وصف..."}
//                   </Card.Text>
                  
//                   <div className="d-flex justify-content-between align-items-center mt-auto">
//                     <span className="h5 text-success mb-0">
//                       {product.price} ج.م
//                     </span>
//                     <Button 
//                       variant="primary" 
//                       size="sm"
//                       href={`/store/${product.id}`}
//                     >
//                       عرض المنتج
//                     </Button>
//                   </div>

//                   {/* 🔥 زر إضافة للسلة في الكارت */}
//                   <div className="mt-3">
//                     <AddToCartButton product={product} />
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))
//         ) : (
//           <Col className="text-center py-5">
//             <Alert variant="warning">
//               <h4>📭 لا توجد منتجات</h4>
//               <p>
//                 {selectedCategory === "الكل" 
//                   ? "لا توجد منتجات متاحة حالياً"
//                   : `لا توجد منتجات في فئة "${selectedCategory}"`
//                 }
//               </p>
//               {selectedCategory !== "الكل" && (
//                 <Button 
//                   variant="outline-primary" 
//                   onClick={() => setSelectedCategory("الكل")}
//                 >
//                   عرض كل المنتجات
//                 </Button>
//               )}
//             </Alert>
//           </Col>
//         )}
//       </Row>

//       {/* 🔹 إعلان أسفل الصفحة */}
//       <div className="text-center mt-5 p-4 bg-light rounded">
//         <h5>🚀 تسوق الآن واحصل على أفضل العروض!</h5>
//         <p className="text-muted">تشكيلة واسعة من المنتجات بأسعار منافسة</p>
//         <Button variant="success" href="/cart">
//           🛒 عرض سلة التسوق
//         </Button>
//       </div>
//     </Container>
//   );
// }

// /////////////////////////////////////
// "use client";
// import React, { useEffect, useState } from "react";
// import { 
//   Container, 
//   Row, 
//   Col, 
//   Card, 
//   Button, 
//   Form, 
//   Badge, 
//   Modal, 
//   InputGroup,
//   Spinner,
//   Alert 
// } from "react-bootstrap";
// import { useRouter } from "next/navigation";

// // 🔥 كومبوننت إضافة للسلة
// function AddToCartButton({ product, isLoggedIn }) {
//   const [showModal, setShowModal] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const router = useRouter();

//   const addToCart = () => {
//     const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
//     const existingItemIndex = currentCart.findIndex(item => item.id === product.id);
    
//     if (existingItemIndex > -1) {
//       currentCart[existingItemIndex].quantity += quantity;
//     } else {
//       currentCart.push({
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         image: product.images?.[0] || "",
//         quantity: quantity
//       });
//     }
    
//     localStorage.setItem('cart', JSON.stringify(currentCart));
//     alert(`✅ تم إضافة ${quantity} من ${product.name} إلى السلة`);
//     setShowModal(false);
//     setQuantity(1);
//   };

//   const handleAddToCartClick = () => {
//     if (!isLoggedIn) {
//       alert("⚠️ يرجى تسجيل الدخول لإضافة المنتجات إلى السلة");
//       router.push("/auth/signin");
//       return;
//     }
//     setShowModal(true);
//   };

//   return (
//     <>
//       <Button 
//         variant="success" 
//         className="w-100"
//         onClick={handleAddToCartClick}
//       >
//         🛒 {isLoggedIn ? "اطلب الآن" : "سجل الدخول للطلب"}
//       </Button>

//       {isLoggedIn && (
//         <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//           <Modal.Header closeButton>
//             <Modal.Title>إضافة إلى السلة</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <div className="text-center mb-3">
//               <img 
//                 src={product.images?.[0] || "https://via.placeholder.com/100"} 
//                 alt={product.name}
//                 style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px" }}
//               />
//               <h6 className="mt-2">{product.name}</h6>
//               <p className="text-success h5">{product.price} ج.م</p>
//             </div>

//             <Form.Group>
//               <Form.Label>الكمية المطلوبة</Form.Label>
//               <InputGroup>
//                 <Button 
//                   variant="outline-secondary"
//                   onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
//                 >
//                   -
//                 </Button>
//                 <Form.Control
//                   type="number"
//                   value={quantity}
//                   onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
//                   min="1"
//                   className="text-center"
//                 />
//                 <Button 
//                   variant="outline-secondary"
//                   onClick={() => setQuantity(prev => prev + 1)}
//                 >
//                   +
//                 </Button>
//               </InputGroup>
//             </Form.Group>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={() => setShowModal(false)}>
//               إلغاء
//             </Button>
//             <Button variant="success" onClick={addToCart}>
//               🛒 إضافة إلى السلة
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       )}
//     </>
//   );
// }

// export default function StorePage() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("الكل");
//   const [loading, setLoading] = useState(true);
//   const [sortBy, setSortBy] = useState("newest");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // التحقق من حالة تسجيل الدخول
//   useEffect(() => {
//     const checkAuth = () => {
//       // هنا يمكنك استخدام أي طريقة للتحقق من تسجيل الدخول
//       // مثل التحقق من token في localStorage أو context
//       const token = localStorage.getItem('authToken');
//       const user = localStorage.getItem('user');
//       setIsLoggedIn(!!(token && user));

      
//     };

//     checkAuth();
    
//     // الاستماع للتغيرات في localStorage
//     const handleStorageChange = () => checkAuth();
//     window.addEventListener('storage', handleStorageChange);
    
//     return () => window.removeEventListener('storage', handleStorageChange);
//   }, []);

//   // جلب المنتجات والفئات
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
        
//         // جلب المنتجات
//         const productsRes = await fetch("/api/products");
//         const productsData = await productsRes.json();
//         setProducts(productsData);
//         setFilteredProducts(productsData);

//         // جلب الفئات
//         const categoriesRes = await fetch("/api/categories");
//         const categoriesData = await categoriesRes.json();
//         setCategories(categoriesData);
        
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // فلترة وترتيب المنتجات
//   useEffect(() => {
//     let filtered = products;

//     // الفلترة حسب الفئة
//     if (selectedCategory !== "الكل") {
//       filtered = filtered.filter((product) => product.category === selectedCategory);
//     }

//     // الترتيب
//     if (sortBy === "price-low") {
//       filtered = [...filtered].sort((a, b) => a.price - b.price);
//     } else if (sortBy === "price-high") {
//       filtered = [...filtered].sort((a, b) => b.price - a.price);
//     } else if (sortBy === "newest") {
//       filtered = [...filtered].sort((a, b) => b.id - a.id);
//     }

//     setFilteredProducts(filtered);
//   }, [selectedCategory, sortBy, products]);

//   if (loading) {
//     return (
//       <Container className="py-5 text-center">
//         <Spinner animation="border" variant="success" />
//         <p className="mt-3">جارٍ تحميل المتجر...</p>
//       </Container>
//     );
//   }

//   return (
//     <Container className="py-5">
//       <h1 className="text-center mb-4">🛍️ متجرنا</h1>

//       {/* 🔹 تنبيه للزوار */}
//       {!isLoggedIn && (
//         <Alert variant="warning" className="text-center mb-4">
//           <strong>🔒 للاطلاع على الأسعار وإتمام الطلبات</strong>
//           <br />
//           يرجى <a href="/login" className="alert-link">تسجيل الدخول</a> أو <a href="/register" className="alert-link">إنشاء حساب جديد</a>
//         </Alert>
//       )}

//       {/* 🔹 أدوات الفلترة والترتيب */}
//       <div className="row justify-content-between mb-4">
//         <div className="col-md-4 mb-3">
//           <Form.Select
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             className="shadow-sm"
//           >
//             <option value="الكل">📂 كل المنتجات</option>
//             {categories.map((category) => (
//               <option key={category.id} value={category.name}>
//                 {category.name}
//               </option>
//             ))}
//           </Form.Select>
//         </div>

//         <div className="col-md-4 mb-3">
//           <Form.Select
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//             className="shadow-sm"
//           >
//             <option value="newest">🆕 الأحدث</option>
//             <option value="price-low">💰 السعر: من الأقل للأعلى</option>
//             <option value="price-high">💰 السعر: من الأعلى للأقل</option>
//           </Form.Select>
//         </div>
//       </div>

//       {/* 🔹 مؤشر النتائج */}
//       <div className="text-center mb-4">
//         <p className="text-muted">
//           {selectedCategory === "الكل" 
//             ? `عرض ${filteredProducts.length} منتج`
//             : `عرض ${filteredProducts.length} منتج في فئة "${selectedCategory}"`
//           }
//         </p>
//       </div>

//       {/* 🔹 شبكة المنتجات */}
//       <Row>
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <Col lg={3} md={4} sm={6} key={product.id} className="mb-4">
//               <Card className="shadow-sm h-100 product-card">
//                 {/* صورة المنتج */}
//                 {product.images && product.images[0] && (
//                   <Card.Img
//                     variant="top"
//                     src={product.images[0]}
//                     style={{ 
//                       height: "200px", 
//                       objectFit: "cover",
//                       cursor: "pointer"
//                     }}
//                     alt={product.name}
//                     onClick={() => window.location.href = `/store/${product.id}`}
//                   />
//                 )}
                
//                 <Card.Body className="d-flex flex-column">
//                   {/* الفئة */}
//                   {product.category && (
//                     <div className="mb-2">
//                       <Badge bg="outline-primary" text="dark" className="border">
//                         {product.category}
//                       </Badge>
//                     </div>
//                   )}
                  
//                   <Card.Title className="flex-grow-1" style={{ fontSize: "1.1rem" }}>
//                     {product.name}
//                   </Card.Title>
                  
//                   <Card.Text className="text-muted flex-grow-1" style={{ fontSize: "0.9rem" }}>
//                     {product.description?.slice(0, 80) || "لا يوجد وصف..."}
//                   </Card.Text>
                  
//                   <div className="d-flex justify-content-between align-items-center mt-auto">
//                     {isLoggedIn ? (
//                       <span className="h5 text-success mb-0">
//                         {product.price} ج.م
//                       </span>
//                     ) : (
//                       <span className="h5 text-warning mb-0">
//                         🔒 سجل الدخول
//                       </span>
//                     )}
//                     <Button 
//                       variant="primary" 
//                       size="sm"
//                       href={`/store/${product.id}`}
//                     >
//                       عرض المنتج
//                     </Button>
//                   </div>

//                   {/* 🔥 زر إضافة للسلة في الكارت */}
//                   <div className="mt-3">
//                     <AddToCartButton product={product} isLoggedIn={isLoggedIn} />
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))
//         ) : (
//           <Col className="text-center py-5">
//             <Alert variant="warning">
//               <h4>📭 لا توجد منتجات</h4>
//               <p>
//                 {selectedCategory === "الكل" 
//                   ? "لا توجد منتجات متاحة حالياً"
//                   : `لا توجد منتجات في فئة "${selectedCategory}"`
//                 }
//               </p>
//               {selectedCategory !== "الكل" && (
//                 <Button 
//                   variant="outline-primary" 
//                   onClick={() => setSelectedCategory("الكل")}
//                 >
//                   عرض كل المنتجات
//                 </Button>
//               )}
//             </Alert>
//           </Col>
//         )}
//       </Row>

//       {/* 🔹 إعلان أسفل الصفحة */}
//       <div className="text-center mt-5 p-4 bg-light rounded">
//         <h5>🚀 تسوق الآن واحصل على أفضل العروض!</h5>
//         <p className="text-muted">تشكيلة واسعة من المنتجات بأسعار منافسة</p>
//         {isLoggedIn ? (
//           <Button variant="success" href="/cart">
//             🛒 عرض سلة التسوق
//           </Button>
//         ) : (
//           <div>
//             <Button variant="success" href="/login" className="me-2">
//               🔓 تسجيل الدخول
//             </Button>
//             <Button variant="outline-primary" href="/register">
//               📝 إنشاء حساب
//             </Button>
//           </div>
//         )}
//       </div>
//     </Container>
//   );
// }


// "use client";
// import React, { useEffect, useState } from "react";
// import { 
//   Container, 
//   Row, 
//   Col, 
//   Card, 
//   Button, 
//   Form, 
//   Badge, 
//   Modal, 
//   InputGroup,
//   Spinner,
//   Alert 
// } from "react-bootstrap";
// import { useRouter } from "next/navigation";

// // 🔥 كومبوننت إضافة للسلة
// function AddToCartButton({ product, isLoggedIn }) {
//   const [showModal, setShowModal] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const router = useRouter();

//   const addToCart = () => {
//     const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
//     const existingItemIndex = currentCart.findIndex(item => item.id === product.id);
    
//     if (existingItemIndex > -1) {
//       currentCart[existingItemIndex].quantity += quantity;
//     } else {
//       currentCart.push({
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         image: product.images?.[0] || "",
//         quantity: quantity
//       });
//     }
    
//     localStorage.setItem('cart', JSON.stringify(currentCart));
//     alert(`✅ تم إضافة ${quantity} من ${product.name} إلى السلة`);
//     setShowModal(false);
//     setQuantity(1);
//   };

//   const handleAddToCartClick = () => {
//     if (!isLoggedIn) {
//       alert("⚠️ يرجى تسجيل الدخول لإضافة المنتجات إلى السلة");
//       router.push("/auth/signin");
//       return;
//     }
//     setShowModal(true);
//   };

//   return (
//     <>
//       <Button 
//         variant="success" 
//         className="w-100"
//         onClick={handleAddToCartClick}
//       >
//         🛒 {isLoggedIn ? "اطلب الآن" : "سجل الدخول للطلب"}
//       </Button>

//       {isLoggedIn && (
//         <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//           <Modal.Header closeButton>
//             <Modal.Title>إضافة إلى السلة</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <div className="text-center mb-3">
//               <img 
//                 src={product.images?.[0] || "https://via.placeholder.com/100"} 
//                 alt={product.name}
//                 style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px" }}
//               />
//               <h6 className="mt-2">{product.name}</h6>
//               <p className="text-success h5">{product.price} ج.م</p>
//             </div>

//             <Form.Group>
//               <Form.Label>الكمية المطلوبة</Form.Label>
//               <InputGroup>
//                 <Button 
//                   variant="outline-secondary"
//                   onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
//                 >
//                   -
//                 </Button>
//                 <Form.Control
//                   type="number"
//                   value={quantity}
//                   onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
//                   min="1"
//                   className="text-center"
//                 />
//                 <Button 
//                   variant="outline-secondary"
//                   onClick={() => setQuantity(prev => prev + 1)}
//                 >
//                   +
//                 </Button>
//               </InputGroup>
//             </Form.Group>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={() => setShowModal(false)}>
//               إلغاء
//             </Button>
//             <Button variant="success" onClick={addToCart}>
//               🛒 إضافة إلى السلة
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       )}
//     </>
//   );
// }

// // دالة للتحقق من تسجيل الدخول
// const checkAuthStatus = () => {
//   if (typeof window === 'undefined') return false;
  
//   const token = localStorage.getItem('authToken');
//   const user = localStorage.getItem('user');
//   return !!(token && user);
// };

// export default function StorePage() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("الكل");
//   const [loading, setLoading] = useState(true);
//   const [sortBy, setSortBy] = useState("newest");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // التحقق من حالة تسجيل الدخول مع تحديث مستمر
//   useEffect(() => {
//     const checkAuth = () => {
//       const loggedIn = checkAuthStatus();
//       setIsLoggedIn(loggedIn);
//     };

//     // التحقق أول مرة
//     checkAuth();

//     // الاستماع للتغيرات في localStorage
//     const handleStorageChange = () => {
//       checkAuth();
//     };

//     // الاستماع للتغيرات في localStorage من نفس التبويب
//     window.addEventListener('storage', handleStorageChange);
    
//     // أيضًا نفحص كل ثانية للتأكد من التحديثات من نفس التبويب
//     const interval = setInterval(checkAuth, 1000);

//     return () => {
//       window.removeEventListener('storage', handleStorageChange);
//       clearInterval(interval);
//     };
//   }, []);

//   // أيضًا نفحص حالة التسجيل عند عودة المستخدم للصفحة
//   useEffect(() => {
//     const handleVisibilityChange = () => {
//       if (!document.hidden) {
//         setIsLoggedIn(checkAuthStatus());
//       }
//     };

//     document.addEventListener('visibilitychange', handleVisibilityChange);
//     return () => {
//       document.removeEventListener('visibilitychange', handleVisibilityChange);
//     };
//   }, []);

//   // جلب المنتجات والفئات
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
        
//         // جلب المنتجات
//         const productsRes = await fetch("/api/products");
//         const productsData = await productsRes.json();
//         setProducts(productsData);
//         setFilteredProducts(productsData);

//         // جلب الفئات
//         const categoriesRes = await fetch("/api/categories");
//         const categoriesData = await categoriesRes.json();
//         setCategories(categoriesData);
        
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // فلترة وترتيب المنتجات
//   useEffect(() => {
//     let filtered = products;

//     // الفلترة حسب الفئة
//     if (selectedCategory !== "الكل") {
//       filtered = filtered.filter((product) => product.category === selectedCategory);
//     }

//     // الترتيب
//     if (sortBy === "price-low") {
//       filtered = [...filtered].sort((a, b) => a.price - b.price);
//     } else if (sortBy === "price-high") {
//       filtered = [...filtered].sort((a, b) => b.price - a.price);
//     } else if (sortBy === "newest") {
//       filtered = [...filtered].sort((a, b) => b.id - a.id);
//     }

//     setFilteredProducts(filtered);
//   }, [selectedCategory, sortBy, products]);

//   // دالة لتحديث الصفحة بعد تسجيل الدخول
//   const refreshPage = () => {
//     window.location.reload();
//   };

//   if (loading) {
//     return (
//       <Container className="py-5 text-center">
//         <Spinner animation="border" variant="success" />
//         <p className="mt-3">جارٍ تحميل المتجر...</p>
//       </Container>
//     );
//   }

//   return (
//     <Container className="py-5">
//       <h1 className="text-center mb-4">🛍️ متجرنا</h1>

//       {/* 🔹 تنبيه للزوار */}
//       {!isLoggedIn && (
//         <Alert variant="warning" className="text-center mb-4">
//           <strong>🔒 للاطلاع على الأسعار وإتمام الطلبات</strong>
//           <br />
//           يرجى <a href="/auth/signin" className="alert-link">تسجيل الدخول</a> أو <a href="/register" className="alert-link">إنشاء حساب جديد</a>
//         </Alert>
//       )}

//       {/* 🔹 زر تحديث الصفحة بعد تسجيل الدخول */}
//       {isLoggedIn && (
//         <Alert variant="success" className="text-center mb-4">
//           <strong>✅ تم تسجيل الدخول بنجاح!</strong>
//           <br />
//           يمكنك الآن رؤية الأسعار وإضافة المنتجات إلى السلة
//           <div className="mt-2">
//             <Button variant="outline-success" size="sm" onClick={refreshPage}>
//               🔄 تحديث الصفحة
//             </Button>
//           </div>
//         </Alert>
//       )}

//       {/* 🔹 أدوات الفلترة والترتيب */}
//       <div className="row justify-content-between mb-4">
//         <div className="col-md-4 mb-3">
//           <Form.Select
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             className="shadow-sm"
//           >
//             <option value="الكل">📂 كل المنتجات</option>
//             {categories.map((category) => (
//               <option key={category.id} value={category.name}>
//                 {category.name}
//               </option>
//             ))}
//           </Form.Select>
//         </div>

//         <div className="col-md-4 mb-3">
//           <Form.Select
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//             className="shadow-sm"
//           >
//             <option value="newest">🆕 الأحدث</option>
//             <option value="price-low">💰 السعر: من الأقل للأعلى</option>
//             <option value="price-high">💰 السعر: من الأعلى للأقل</option>
//           </Form.Select>
//         </div>
//       </div>

//       {/* 🔹 مؤشر النتائج */}
//       <div className="text-center mb-4">
//         <p className="text-muted">
//           {selectedCategory === "الكل" 
//             ? `عرض ${filteredProducts.length} منتج`
//             : `عرض ${filteredProducts.length} منتج في فئة "${selectedCategory}"`
//           }
//         </p>
//       </div>

//       {/* 🔹 شبكة المنتجات */}
//       <Row>
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <Col lg={3} md={4} sm={6} key={product.id} className="mb-4">
//               <Card className="shadow-sm h-100 product-card">
//                 {/* صورة المنتج */}
//                 {product.images && product.images[0] && (
//                   <Card.Img
//                     variant="top"
//                     src={product.images[0]}
//                     style={{ 
//                       height: "200px", 
//                       objectFit: "cover",
//                       cursor: "pointer"
//                     }}
//                     alt={product.name}
//                     onClick={() => window.location.href = `/store/${product.id}`}
//                   />
//                 )}
                
//                 <Card.Body className="d-flex flex-column">
//                   {/* الفئة */}
//                   {product.category && (
//                     <div className="mb-2">
//                       <Badge bg="outline-primary" text="dark" className="border">
//                         {product.category}
//                       </Badge>
//                     </div>
//                   )}
                  
//                   <Card.Title className="flex-grow-1" style={{ fontSize: "1.1rem" }}>
//                     {product.name}
//                   </Card.Title>
                  
//                   <Card.Text className="text-muted flex-grow-1" style={{ fontSize: "0.9rem" }}>
//                     {product.description?.slice(0, 80) || "لا يوجد وصف..."}
//                   </Card.Text>
                  
//                   <div className="d-flex justify-content-between align-items-center mt-auto">
//                     {isLoggedIn ? (
//                       <span className="h5 text-success mb-0">
//                         {product.price} ج.م
//                       </span>
//                     ) : (
//                       <span className="h5 text-warning mb-0">
//                         🔒 سجل الدخول
//                       </span>
//                     )}
//                     <Button 
//                       variant="primary" 
//                       size="sm"
//                       href={`/store/${product.id}`}
//                     >
//                       عرض المنتج
//                     </Button>
//                   </div>

//                   {/* 🔥 زر إضافة للسلة في الكارت */}
//                   <div className="mt-3">
//                     <AddToCartButton product={product} isLoggedIn={isLoggedIn} />
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))
//         ) : (
//           <Col className="text-center py-5">
//             <Alert variant="warning">
//               <h4>📭 لا توجد منتجات</h4>
//               <p>
//                 {selectedCategory === "الكل" 
//                   ? "لا توجد منتجات متاحة حالياً"
//                   : `لا توجد منتجات في فئة "${selectedCategory}"`
//                 }
//               </p>
//               {selectedCategory !== "الكل" && (
//                 <Button 
//                   variant="outline-primary" 
//                   onClick={() => setSelectedCategory("الكل")}
//                 >
//                   عرض كل المنتجات
//                 </Button>
//               )}
//             </Alert>
//           </Col>
//         )}
//       </Row>

//       {/* 🔹 إعلان أسفل الصفحة */}
//       <div className="text-center mt-5 p-4 bg-light rounded">
//         <h5>🚀 تسوق الآن واحصل على أفضل العروض!</h5>
//         <p className="text-muted">تشكيلة واسعة من المنتجات بأسعار منافسة</p>
//         {isLoggedIn ? (
//           <Button variant="success" href="/cart">
//             🛒 عرض سلة التسوق
//           </Button>
//         ) : (
//           <div>
//             <Button variant="success" href="/auth/signin" className="me-2">
//               🔓 تسجيل الدخول
//             </Button>
//             <Button variant="outline-primary" href="/register">
//               📝 إنشاء حساب
//             </Button>
//           </div>
//         )}
//       </div>
//     </Container>
//   );
// }

// "use client";
// import React, { useEffect, useState } from "react";
// import { 
//   Container, 
//   Row, 
//   Col, 
//   Card, 
//   Button, 
//   Form, 
//   Badge, 
//   Modal, 
//   InputGroup,
//   Spinner,
//   Alert 
// } from "react-bootstrap";
// import { useRouter } from "next/navigation";
// import { createClientComponentClient } from '/lib/supabaseClient';

// // 🔥 كومبوننت إضافة للسلة
// function AddToCartButton({ product, isLoggedIn }) {
//   const [showModal, setShowModal] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const router = useRouter();
//   const supabase = createClientComponentClient();

//   const addToCart = async () => {
//     if (!isLoggedIn) {
//       router.push("/login");
//       return;
//     }

//     try {
//       // جلب بيانات المستخدم
//       const { data: { user } } = await supabase.auth.getUser();
      
//       if (!user) {
//         router.push("/login");
//         return;
//       }

//       // جلب السلة الحالية من Supabase
//       const { data: currentCart, error: fetchError } = await supabase
//         .from('cart')
//         .select('*')
//         .eq('user_id', user.id);

//       if (fetchError) throw fetchError;

//       // البحث عن المنتج في السلة
//       const existingItem = currentCart?.find(item => item.product_id === product.id);

//       if (existingItem) {
//         // تحديث الكمية إذا المنتج موجود
//         const { error: updateError } = await supabase
//           .from('cart')
//           .update({ quantity: existingItem.quantity + quantity })
//           .eq('id', existingItem.id);

//         if (updateError) throw updateError;
//       } else {
//         // إضافة منتج جديد للسلة
//         const { error: insertError } = await supabase
//           .from('cart')
//           .insert({
//             user_id: user.id,
//             product_id: product.id,
//             product_name: product.name,
//             product_price: product.price,
//             product_image: product.images?.[0] || "",
//             quantity: quantity
//           });

//         if (insertError) throw insertError;
//       }

//       alert(`✅ تم إضافة ${quantity} من ${product.name} إلى السلة`);
//       setShowModal(false);
//       setQuantity(1);
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       alert('❌ حدث خطأ في إضافة المنتج إلى السلة');
//     }
//   };

//   const handleAddToCartClick = () => {
//     if (!isLoggedIn) {
//       alert("⚠️ يرجى تسجيل الدخول لإضافة المنتجات إلى السلة");
//       router.push("/login");
//       return;
//     }
//     setShowModal(true);
//   };

//   return (
//     <>
//       <Button 
//         variant="success" 
//         className="w-100"
//         onClick={handleAddToCartClick}
//       >
//         🛒 {isLoggedIn ? "اطلب الآن" : "سجل الدخول للطلب"}
//       </Button>

//       {isLoggedIn && (
//         <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//           <Modal.Header closeButton>
//             <Modal.Title>إضافة إلى السلة</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <div className="text-center mb-3">
//               <img 
//                 src={product.images?.[0] || "https://via.placeholder.com/100"} 
//                 alt={product.name}
//                 style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px" }}
//               />
//               <h6 className="mt-2">{product.name}</h6>
//               <p className="text-success h5">{product.price} ج.م</p>
//             </div>

//             <Form.Group>
//               <Form.Label>الكمية المطلوبة</Form.Label>
//               <InputGroup>
//                 <Button 
//                   variant="outline-secondary"
//                   onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
//                 >
//                   -
//                 </Button>
//                 <Form.Control
//                   type="number"
//                   value={quantity}
//                   onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
//                   min="1"
//                   className="text-center"
//                 />
//                 <Button 
//                   variant="outline-secondary"
//                   onClick={() => setQuantity(prev => prev + 1)}
//                 >
//                   +
//                 </Button>
//               </InputGroup>
//             </Form.Group>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={() => setShowModal(false)}>
//               إلغاء
//             </Button>
//             <Button variant="success" onClick={addToCart}>
//               🛒 إضافة إلى السلة
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       )}
//     </>
//   );
// }

// export default function StorePage() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("الكل");
//   const [loading, setLoading] = useState(true);
//   const [sortBy, setSortBy] = useState("newest");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);
  
//   const supabase = createClientComponentClient();
//   const router = useRouter();

//   // التحقق من حالة تسجيل الدخول مع Supabase
//   useEffect(() => {
//     const getAuthStatus = async () => {
//       try {
//         const { data: { session } } = await supabase.auth.getSession();
//         setIsLoggedIn(!!session);
//         setUser(session?.user || null);
//       } catch (error) {
//         console.error('Error getting auth status:', error);
//         setIsLoggedIn(false);
//         setUser(null);
//       }
//     };

//     getAuthStatus();

//     // الاستماع لتغيرات حالة المصادقة
//     const { data: { subscription } } = supabase.auth.onAuthStateChange(
//       async (event, session) => {
//         setIsLoggedIn(!!session);
//         setUser(session?.user || null);
        
//         // إذا تم تسجيل الدخول، نحدث الصفحة تلقائياً
//         if (event === 'SIGNED_IN') {
//           setTimeout(() => {
//             window.location.reload();
//           }, 1000);
//         }
//       }
//     );

//     return () => subscription.unsubscribe();
//   }, [supabase]);

//   // جلب المنتجات والفئات
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
        
//         // جلب المنتجات من Supabase
//         const { data: productsData, error: productsError } = await supabase
//           .from('products')
//           .select('*')
//           .eq('is_active', true);

//         if (productsError) throw productsError;
        
//         setProducts(productsData || []);
//         setFilteredProducts(productsData || []);

//         // جلب الفئات من Supabase
//         const { data: categoriesData, error: categoriesError } = await supabase
//           .from('categories')
//           .select('*')
//           .eq('is_active', true);

//         if (categoriesError) throw categoriesError;
        
//         setCategories(categoriesData || []);
        
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [supabase]);

//   // فلترة وترتيب المنتجات
//   useEffect(() => {
//     let filtered = products;

//     // الفلترة حسب الفئة
//     if (selectedCategory !== "الكل") {
//       filtered = filtered.filter((product) => product.category === selectedCategory);
//     }

//     // الترتيب
//     if (sortBy === "price-low") {
//       filtered = [...filtered].sort((a, b) => a.price - b.price);
//     } else if (sortBy === "price-high") {
//       filtered = [...filtered].sort((a, b) => b.price - a.price);
//     } else if (sortBy === "newest") {
//       filtered = [...filtered].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
//     }

//     setFilteredProducts(filtered);
//   }, [selectedCategory, sortBy, products]);

//   if (loading) {
//     return (
//       <Container className="py-5 text-center">
//         <Spinner animation="border" variant="success" />
//         <p className="mt-3">جارٍ تحميل المتجر...</p>
//       </Container>
//     );
//   }

//   return (
//     <Container className="py-5">
//       <h1 className="text-center mb-4">🛍️ متجرنا</h1>

//       {/* 🔹 تنبيه للزوار */}
//       {!isLoggedIn && (
//         <Alert variant="warning" className="text-center mb-4">
//           <strong>🔒 للاطلاع على الأسعار وإتمام الطلبات</strong>
//           <br />
//           يرجى <a href="/login" className="alert-link">تسجيل الدخول</a> أو <a href="/register" className="alert-link">إنشاء حساب جديد</a>
//         </Alert>
//       )}

//       {/* 🔹 رسالة ترحيب للمستخدم المسجل */}
//       {isLoggedIn && user && (
//         <Alert variant="success" className="text-center mb-4">
//           <strong>🎉 أهلاً بعودتك، {user.email}!</strong>
//           <br />
//           يمكنك الآن رؤية الأسعار وإضافة المنتجات إلى السلة
//         </Alert>
//       )}

//       {/* 🔹 أدوات الفلترة والترتيب */}
//       <div className="row justify-content-between mb-4">
//         <div className="col-md-4 mb-3">
//           <Form.Select
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             className="shadow-sm"
//           >
//             <option value="الكل">📂 كل المنتجات</option>
//             {categories.map((category) => (
//               <option key={category.id} value={category.name}>
//                 {category.name}
//               </option>
//             ))}
//           </Form.Select>
//         </div>

//         <div className="col-md-4 mb-3">
//           <Form.Select
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//             className="shadow-sm"
//           >
//             <option value="newest">🆕 الأحدث</option>
//             <option value="price-low">💰 السعر: من الأقل للأعلى</option>
//             <option value="price-high">💰 السعر: من الأعلى للأقل</option>
//           </Form.Select>
//         </div>
//       </div>

//       {/* 🔹 مؤشر النتائج */}
//       <div className="text-center mb-4">
//         <p className="text-muted">
//           {selectedCategory === "الكل" 
//             ? `عرض ${filteredProducts.length} منتج`
//             : `عرض ${filteredProducts.length} منتج في فئة "${selectedCategory}"`
//           }
//         </p>
//       </div>

//       {/* 🔹 شبكة المنتجات */}
//       <Row>
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <Col lg={3} md={4} sm={6} key={product.id} className="mb-4">
//               <Card className="shadow-sm h-100 product-card">
//                 {/* صورة المنتج */}
//                 {product.images && product.images[0] && (
//                   <Card.Img
//                     variant="top"
//                     src={product.images[0]}
//                     style={{ 
//                       height: "200px", 
//                       objectFit: "cover",
//                       cursor: "pointer"
//                     }}
//                     alt={product.name}
//                     onClick={() => window.location.href = `/store/${product.id}`}
//                   />
//                 )}
                
//                 <Card.Body className="d-flex flex-column">
//                   {/* الفئة */}
//                   {product.category && (
//                     <div className="mb-2">
//                       <Badge bg="outline-primary" text="dark" className="border">
//                         {product.category}
//                       </Badge>
//                     </div>
//                   )}
                  
//                   <Card.Title className="flex-grow-1" style={{ fontSize: "1.1rem" }}>
//                     {product.name}
//                   </Card.Title>
                  
//                   <Card.Text className="text-muted flex-grow-1" style={{ fontSize: "0.9rem" }}>
//                     {product.description?.slice(0, 80) || "لا يوجد وصف..."}
//                   </Card.Text>
                  
//                   <div className="d-flex justify-content-between align-items-center mt-auto">
//                     {isLoggedIn ? (
//                       <span className="h5 text-success mb-0">
//                         {product.price} ج.م
//                       </span>
//                     ) : (
//                       <span className="h5 text-warning mb-0">
//                         🔒 سجل الدخول
//                       </span>
//                     )}
//                     <Button 
//                       variant="primary" 
//                       size="sm"
//                       href={`/store/${product.id}`}
//                     >
//                       عرض المنتج
//                     </Button>
//                   </div>

//                   {/* 🔥 زر إضافة للسلة في الكارت */}
//                   <div className="mt-3">
//                     <AddToCartButton product={product} isLoggedIn={isLoggedIn} />
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))
//         ) : (
//           <Col className="text-center py-5">
//             <Alert variant="warning">
//               <h4>📭 لا توجد منتجات</h4>
//               <p>
//                 {selectedCategory === "الكل" 
//                   ? "لا توجد منتجات متاحة حالياً"
//                   : `لا توجد منتجات في فئة "${selectedCategory}"`
//                 }
//               </p>
//               {selectedCategory !== "الكل" && (
//                 <Button 
//                   variant="outline-primary" 
//                   onClick={() => setSelectedCategory("الكل")}
//                 >
//                   عرض كل المنتجات
//                 </Button>
//               )}
//             </Alert>
//           </Col>
//         )}
//       </Row>

//       {/* 🔹 إعلان أسفل الصفحة */}
//       <div className="text-center mt-5 p-4 bg-light rounded">
//         <h5>🚀 تسوق الآن واحصل على أفضل العروض!</h5>
//         <p className="text-muted">تشكيلة واسعة من المنتجات بأسعار منافسة</p>
//         {isLoggedIn ? (
//           <div>
//             <Button variant="success" href="/cart" className="me-2">
//               🛒 عرض سلة التسوق
//             </Button>
//             <Button 
//               variant="outline-secondary" 
//               onClick={() => supabase.auth.signOut()}
//             >
//               🚪 تسجيل الخروج
//             </Button>
//           </div>
//         ) : (
//           <div>
//             <Button variant="success" href="/login" className="me-2">
//               🔓 تسجيل الدخول
//             </Button>
//             <Button variant="outline-primary" href="/register">
//               📝 إنشاء حساب
//             </Button>
//           </div>
//         )}
//       </div>
//     </Container>
//   );
// }

// "use client";
// import React, { useEffect, useState } from "react";
// import { 
//   Container, 
//   Row, 
//   Col, 
//   Card, 
//   Button, 
//   Form, 
//   Badge, 
//   Modal, 
//   InputGroup,
//   Spinner,
//   Alert 
// } from "react-bootstrap";
// import { useRouter } from "next/navigation";
// import { createClient } from '/lib/supabaseClient';

// // إنشاء Supabase client
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// );

// // 🔥 كومبوننت إضافة للسلة
// function AddToCartButton({ product, isLoggedIn, user }) {
//   const [showModal, setShowModal] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const router = useRouter();

//   const addToCart = async () => {
//     if (!isLoggedIn || !user) {
//       router.push("/login");
//       return;
//     }

//     try {
//       // جلب السلة الحالية من Supabase
//       const { data: currentCart, error: fetchError } = await supabase
//         .from('cart')
//         .select('*')
//         .eq('user_id', user.id)
//         .eq('product_id', product.id);

//       if (fetchError) throw fetchError;

//       if (currentCart && currentCart.length > 0) {
//         // تحديث الكمية إذا المنتج موجود
//         const { error: updateError } = await supabase
//           .from('cart')
//           .update({ quantity: currentCart[0].quantity + quantity })
//           .eq('id', currentCart[0].id);

//         if (updateError) throw updateError;
//       } else {
//         // إضافة منتج جديد للسلة
//         const { error: insertError } = await supabase
//           .from('cart')
//           .insert({
//             user_id: user.id,
//             product_id: product.id,
//             product_name: product.name,
//             product_price: product.price,
//             product_image: product.images?.[0] || "",
//             quantity: quantity
//           });

//         if (insertError) throw insertError;
//       }

//       alert(`✅ تم إضافة ${quantity} من ${product.name} إلى السلة`);
//       setShowModal(false);
//       setQuantity(1);
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       alert('❌ حدث خطأ في إضافة المنتج إلى السلة');
//     }
//   };

//   const handleAddToCartClick = () => {
//     if (!isLoggedIn) {
//       alert("⚠️ يرجى تسجيل الدخول لإضافة المنتجات إلى السلة");
//       router.push("/login");
//       return;
//     }
//     setShowModal(true);
//   };

//   return (
//     <>
//       <Button 
//         variant="success" 
//         className="w-100"
//         onClick={handleAddToCartClick}
//       >
//         🛒 {isLoggedIn ? "اطلب الآن" : "سجل الدخول للطلب"}
//       </Button>

//       {isLoggedIn && (
//         <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//           <Modal.Header closeButton>
//             <Modal.Title>إضافة إلى السلة</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <div className="text-center mb-3">
//               <img 
//                 src={product.images?.[0] || "https://via.placeholder.com/100"} 
//                 alt={product.name}
//                 style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px" }}
//               />
//               <h6 className="mt-2">{product.name}</h6>
//               <p className="text-success h5">{product.price} ج.م</p>
//             </div>

//             <Form.Group>
//               <Form.Label>الكمية المطلوبة</Form.Label>
//               <InputGroup>
//                 <Button 
//                   variant="outline-secondary"
//                   onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
//                 >
//                   -
//                 </Button>
//                 <Form.Control
//                   type="number"
//                   value={quantity}
//                   onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
//                   min="1"
//                   className="text-center"
//                 />
//                 <Button 
//                   variant="outline-secondary"
//                   onClick={() => setQuantity(prev => prev + 1)}
//                 >
//                   +
//                 </Button>
//               </InputGroup>
//             </Form.Group>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={() => setShowModal(false)}>
//               إلغاء
//             </Button>
//             <Button variant="success" onClick={addToCart}>
//               🛒 إضافة إلى السلة
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       )}
//     </>
//   );
// }

// export default function StorePage() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("الكل");
//   const [loading, setLoading] = useState(true);
//   const [sortBy, setSortBy] = useState("newest");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);
  
//   const router = useRouter();

//   // التحقق من حالة تسجيل الدخول مع Supabase
//   useEffect(() => {
//     const getAuthStatus = async () => {
//       try {
//         const { data: { session } } = await supabase.auth.getSession();
//         setIsLoggedIn(!!session);
//         setUser(session?.user || null);
//       } catch (error) {
//         console.error('Error getting auth status:', error);
//         setIsLoggedIn(false);
//         setUser(null);
//       }
//     };

//     getAuthStatus();

//     // الاستماع لتغيرات حالة المصادقة
//     const { data: { subscription } } = supabase.auth.onAuthStateChange(
//       async (event, session) => {
//         setIsLoggedIn(!!session);
//         setUser(session?.user || null);
        
//         // إذا تم تسجيل الدخول، نحدث الصفحة تلقائياً
//         if (event === 'SIGNED_IN') {
//           setTimeout(() => {
//             window.location.reload();
//           }, 1000);
//         }
//       }
//     );

//     return () => subscription.unsubscribe();
//   }, []);

//   // جلب المنتجات والفئات
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
        
//         // جلب المنتجات من Supabase
//         const { data: productsData, error: productsError } = await supabase
//           .from('products')
//           .select('*')
//           .eq('is_active', true);

//         if (productsError) throw productsError;
        
//         setProducts(productsData || []);
//         setFilteredProducts(productsData || []);

//         // جلب الفئات من Supabase
//         const { data: categoriesData, error: categoriesError } = await supabase
//           .from('categories')
//           .select('*')
//           .eq('is_active', true);

//         if (categoriesError) throw categoriesError;
        
//         setCategories(categoriesData || []);
        
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // فلترة وترتيب المنتجات
//   useEffect(() => {
//     let filtered = products;

//     // الفلترة حسب الفئة
//     if (selectedCategory !== "الكل") {
//       filtered = filtered.filter((product) => product.category === selectedCategory);
//     }

//     // الترتيب
//     if (sortBy === "price-low") {
//       filtered = [...filtered].sort((a, b) => a.price - b.price);
//     } else if (sortBy === "price-high") {
//       filtered = [...filtered].sort((a, b) => b.price - a.price);
//     } else if (sortBy === "newest") {
//       filtered = [...filtered].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
//     }

//     setFilteredProducts(filtered);
//   }, [selectedCategory, sortBy, products]);

//   if (loading) {
//     return (
//       <Container className="py-5 text-center">
//         <Spinner animation="border" variant="success" />
//         <p className="mt-3">جارٍ تحميل المتجر...</p>
//       </Container>
//     );
//   }

//   return (
//     <Container className="py-5">
//       <h1 className="text-center mb-4">🛍️ متجرنا</h1>

//       {/* 🔹 تنبيه للزوار */}
//       {!isLoggedIn && (
//         <Alert variant="warning" className="text-center mb-4">
//           <strong>🔒 للاطلاع على الأسعار وإتمام الطلبات</strong>
//           <br />
//           يرجى <a href="/login" className="alert-link">تسجيل الدخول</a> أو <a href="/register" className="alert-link">إنشاء حساب جديد</a>
//         </Alert>
//       )}

//       {/* 🔹 رسالة ترحيب للمستخدم المسجل */}
//       {isLoggedIn && user && (
//         <Alert variant="success" className="text-center mb-4">
//           <strong>🎉 أهلاً بعودتك، {user.email}!</strong>
//           <br />
//           يمكنك الآن رؤية الأسعار وإضافة المنتجات إلى السلة
//         </Alert>
//       )}

//       {/* 🔹 أدوات الفلترة والترتيب */}
//       <div className="row justify-content-between mb-4">
//         <div className="col-md-4 mb-3">
//           <Form.Select
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             className="shadow-sm"
//           >
//             <option value="الكل">📂 كل المنتجات</option>
//             {categories.map((category) => (
//               <option key={category.id} value={category.name}>
//                 {category.name}
//               </option>
//             ))}
//           </Form.Select>
//         </div>

//         <div className="col-md-4 mb-3">
//           <Form.Select
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//             className="shadow-sm"
//           >
//             <option value="newest">🆕 الأحدث</option>
//             <option value="price-low">💰 السعر: من الأقل للأعلى</option>
//             <option value="price-high">💰 السعر: من الأعلى للأقل</option>
//           </Form.Select>
//         </div>
//       </div>

//       {/* 🔹 مؤشر النتائج */}
//       <div className="text-center mb-4">
//         <p className="text-muted">
//           {selectedCategory === "الكل" 
//             ? `عرض ${filteredProducts.length} منتج`
//             : `عرض ${filteredProducts.length} منتج في فئة "${selectedCategory}"`
//           }
//         </p>
//       </div>

//       {/* 🔹 شبكة المنتجات */}
//       <Row>
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <Col lg={3} md={4} sm={6} key={product.id} className="mb-4">
//               <Card className="shadow-sm h-100 product-card">
//                 {/* صورة المنتج */}
//                 {product.images && product.images[0] && (
//                   <Card.Img
//                     variant="top"
//                     src={product.images[0]}
//                     style={{ 
//                       height: "200px", 
//                       objectFit: "cover",
//                       cursor: "pointer"
//                     }}
//                     alt={product.name}
//                     onClick={() => window.location.href = `/store/${product.id}`}
//                   />
//                 )}
                
//                 <Card.Body className="d-flex flex-column">
//                   {/* الفئة */}
//                   {product.category && (
//                     <div className="mb-2">
//                       <Badge bg="outline-primary" text="dark" className="border">
//                         {product.category}
//                       </Badge>
//                     </div>
//                   )}
                  
//                   <Card.Title className="flex-grow-1" style={{ fontSize: "1.1rem" }}>
//                     {product.name}
//                   </Card.Title>
                  
//                   <Card.Text className="text-muted flex-grow-1" style={{ fontSize: "0.9rem" }}>
//                     {product.description?.slice(0, 80) || "لا يوجد وصف..."}
//                   </Card.Text>
                  
//                   <div className="d-flex justify-content-between align-items-center mt-auto">
//                     {isLoggedIn ? (
//                       <span className="h5 text-success mb-0">
//                         {product.price} ج.م
//                       </span>
//                     ) : (
//                       <span className="h5 text-warning mb-0">
//                         🔒 سجل الدخول
//                       </span>
//                     )}
//                     <Button 
//                       variant="primary" 
//                       size="sm"
//                       href={`/store/${product.id}`}
//                     >
//                       عرض المنتج
//                     </Button>
//                   </div>

//                   {/* 🔥 زر إضافة للسلة في الكارت */}
//                   <div className="mt-3">
//                     <AddToCartButton product={product} isLoggedIn={isLoggedIn} user={user} />
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))
//         ) : (
//           <Col className="text-center py-5">
//             <Alert variant="warning">
//               <h4>📭 لا توجد منتجات</h4>
//               <p>
//                 {selectedCategory === "الكل" 
//                   ? "لا توجد منتجات متاحة حالياً"
//                   : `لا توجد منتجات في فئة "${selectedCategory}"`
//                 }
//               </p>
//               {selectedCategory !== "الكل" && (
//                 <Button 
//                   variant="outline-primary" 
//                   onClick={() => setSelectedCategory("الكل")}
//                 >
//                   عرض كل المنتجات
//                 </Button>
//               )}
//             </Alert>
//           </Col>
//         )}
//       </Row>

//       {/* 🔹 إعلان أسفل الصفحة */}
//       <div className="text-center mt-5 p-4 bg-light rounded">
//         <h5>🚀 تسوق الآن واحصل على أفضل العروض!</h5>
//         <p className="text-muted">تشكيلة واسعة من المنتجات بأسعار منافسة</p>
//         {isLoggedIn ? (
//           <div>
//             <Button variant="success" href="/cart" className="me-2">
//               🛒 عرض سلة التسوق
//             </Button>
//             <Button 
//               variant="outline-secondary" 
//               onClick={() => supabase.auth.signOut()}
//             >
//               🚪 تسجيل الخروج
//             </Button>
//           </div>
//         ) : (
//           <div>
//             <Button variant="success" href="/login" className="me-2">
//               🔓 تسجيل الدخول
//             </Button>
//             <Button variant="outline-primary" href="/register">
//               📝 إنشاء حساب
//             </Button>
//           </div>
//         )}
//       </div>
//     </Container>
//   );
// }


// "use client";
// import React, { useEffect, useState } from "react";
// import { 
//   Container, 
//   Row, 
//   Col, 
//   Card, 
//   Button, 
//   Form, 
//   Badge, 
//   Modal, 
//   InputGroup,
//   Spinner,
//   Alert 
// } from "react-bootstrap";
// import { useRouter } from "next/navigation";
// import { supabase } from '/lib/supabaseClient';

// // 🔥 كومبوننت إضافة للسلة
// function AddToCartButton({ product, isLoggedIn, user }) {
//   const [showModal, setShowModal] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const router = useRouter();

//   const addToCart = async () => {
//     if (!isLoggedIn || !user) {
//       router.push("/login");
//       return;
//     }

//     try {
//       // جلب السلة الحالية من Supabase
//       const { data: currentCart, error: fetchError } = await supabase
//         .from('cart')
//         .select('*')
//         .eq('user_id', user.id)
//         .eq('product_id', product.id);

//       if (fetchError) throw fetchError;

//       if (currentCart && currentCart.length > 0) {
//         // تحديث الكمية إذا المنتج موجود
//         const { error: updateError } = await supabase
//           .from('cart')
//           .update({ quantity: currentCart[0].quantity + quantity })
//           .eq('id', currentCart[0].id);

//         if (updateError) throw updateError;
//       } else {
//         // إضافة منتج جديد للسلة
//         const { error: insertError } = await supabase
//           .from('cart')
//           .insert({
//             user_id: user.id,
//             product_id: product.id,
//             product_name: product.name,
//             product_price: product.price,
//             product_image: product.images?.[0] || "",
//             quantity: quantity
//           });

//         if (insertError) throw insertError;
//       }

//       alert(`✅ تم إضافة ${quantity} من ${product.name} إلى السلة`);
//       setShowModal(false);
//       setQuantity(1);
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       alert('❌ حدث خطأ في إضافة المنتج إلى السلة');
//     }
//   };

//   const handleAddToCartClick = () => {
//     if (!isLoggedIn) {
//       alert("⚠️ يرجى تسجيل الدخول لإضافة المنتجات إلى السلة");
//       router.push("/login");
//       return;
//     }
//     setShowModal(true);
//   };

//   return (
//     <>
//       <Button 
//         variant="success" 
//         className="w-100"
//         onClick={handleAddToCartClick}
//       >
//         🛒 {isLoggedIn ? "اطلب الآن" : "سجل الدخول للطلب"}
//       </Button>

//       {isLoggedIn && (
//         <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//           <Modal.Header closeButton>
//             <Modal.Title>إضافة إلى السلة</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <div className="text-center mb-3">
//               <img 
//                 src={product.images?.[0] || "https://via.placeholder.com/100"} 
//                 alt={product.name}
//                 style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px" }}
//               />
//               <h6 className="mt-2">{product.name}</h6>
//               <p className="text-success h5">{product.price} ج.م</p>
//             </div>

//             <Form.Group>
//               <Form.Label>الكمية المطلوبة</Form.Label>
//               <InputGroup>
//                 <Button 
//                   variant="outline-secondary"
//                   onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
//                 >
//                   -
//                 </Button>
//                 <Form.Control
//                   type="number"
//                   value={quantity}
//                   onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
//                   min="1"
//                   className="text-center"
//                 />
//                 <Button 
//                   variant="outline-secondary"
//                   onClick={() => setQuantity(prev => prev + 1)}
//                 >
//                   +
//                 </Button>
//               </InputGroup>
//             </Form.Group>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={() => setShowModal(false)}>
//               إلغاء
//             </Button>
//             <Button variant="success" onClick={addToCart}>
//               🛒 إضافة إلى السلة
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       )}
//     </>
//   );
// }

// export default function StorePage() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("الكل");
//   const [loading, setLoading] = useState(true);
//   const [sortBy, setSortBy] = useState("newest");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);
  
//   const router = useRouter();

//   // التحقق من حالة تسجيل الدخول مع Supabase
//   useEffect(() => {
//     const getAuthStatus = async () => {
//       try {
//         const { data: { session } } = await supabase.auth.getSession();
//         setIsLoggedIn(!!session);
//         setUser(session?.user || null);
//       } catch (error) {
//         console.error('Error getting auth status:', error);
//         setIsLoggedIn(false);
//         setUser(null);
//       }
//     };

//     getAuthStatus();

//     // الاستماع لتغيرات حالة المصادقة
//     const { data: { subscription } } = supabase.auth.onAuthStateChange(
//       async (event, session) => {
//         setIsLoggedIn(!!session);
//         setUser(session?.user || null);
        
//         // إذا تم تسجيل الدخول، نحدث الصفحة تلقائياً
//         if (event === 'SIGNED_IN') {
//           setTimeout(() => {
//             window.location.reload();
//           }, 1000);
//         }
//       }
//     );

//     return () => subscription.unsubscribe();
//   }, []);

//   // جلب المنتجات والفئات
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
        
//         // جلب المنتجات من Supabase
//         const { data: productsData, error: productsError } = await supabase
//           .from('products')
//           .select('*')
//           .eq('is_active', true);

//         if (productsError) throw productsError;
        
//         setProducts(productsData || []);
//         setFilteredProducts(productsData || []);

//         // جلب الفئات من Supabase
//         const { data: categoriesData, error: categoriesError } = await supabase
//           .from('categories')
//           .select('*')
//           .eq('is_active', true);

//         if (categoriesError) throw categoriesError;
        
//         setCategories(categoriesData || []);
        
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // فلترة وترتيب المنتجات
//   useEffect(() => {
//     let filtered = products;

//     // الفلترة حسب الفئة
//     if (selectedCategory !== "الكل") {
//       filtered = filtered.filter((product) => product.category === selectedCategory);
//     }

//     // الترتيب
//     if (sortBy === "price-low") {
//       filtered = [...filtered].sort((a, b) => a.price - b.price);
//     } else if (sortBy === "price-high") {
//       filtered = [...filtered].sort((a, b) => b.price - a.price);
//     } else if (sortBy === "newest") {
//       filtered = [...filtered].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
//     }

//     setFilteredProducts(filtered);
//   }, [selectedCategory, sortBy, products]);

//   if (loading) {
//     return (
//       <Container className="py-5 text-center">
//         <Spinner animation="border" variant="success" />
//         <p className="mt-3">جارٍ تحميل المتجر...</p>
//       </Container>
//     );
//   }

//   return (
//     <Container className="py-5">
//       <h1 className="text-center mb-4">🛍️ متجرنا</h1>

//       {/* 🔹 تنبيه للزوار */}
//       {!isLoggedIn && (
//         <Alert variant="warning" className="text-center mb-4">
//           <strong>🔒 للاطلاع على الأسعار وإتمام الطلبات</strong>
//           <br />
//           يرجى <a href="/login" className="alert-link">تسجيل الدخول</a> أو <a href="/register" className="alert-link">إنشاء حساب جديد</a>
//         </Alert>
//       )}

//       {/* 🔹 رسالة ترحيب للمستخدم المسجل */}
//       {isLoggedIn && user && (
//         <Alert variant="success" className="text-center mb-4">
//           <strong>🎉 أهلاً بعودتك، {user.email}!</strong>
//           <br />
//           يمكنك الآن رؤية الأسعار وإضافة المنتجات إلى السلة
//         </Alert>
//       )}

//       {/* 🔹 أدوات الفلترة والترتيب */}
//       <div className="row justify-content-between mb-4">
//         <div className="col-md-4 mb-3">
//           <Form.Select
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             className="shadow-sm"
//           >
//             <option value="الكل">📂 كل المنتجات</option>
//             {categories.map((category) => (
//               <option key={category.id} value={category.name}>
//                 {category.name}
//               </option>
//             ))}
//           </Form.Select>
//         </div>

//         <div className="col-md-4 mb-3">
//           <Form.Select
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//             className="shadow-sm"
//           >
//             <option value="newest">🆕 الأحدث</option>
//             <option value="price-low">💰 السعر: من الأقل للأعلى</option>
//             <option value="price-high">💰 السعر: من الأعلى للأقل</option>
//           </Form.Select>
//         </div>
//       </div>

//       {/* 🔹 مؤشر النتائج */}
//       <div className="text-center mb-4">
//         <p className="text-muted">
//           {selectedCategory === "الكل" 
//             ? `عرض ${filteredProducts.length} منتج`
//             : `عرض ${filteredProducts.length} منتج في فئة "${selectedCategory}"`
//           }
//         </p>
//       </div>

//       {/* 🔹 شبكة المنتجات */}
//       <Row>
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <Col lg={3} md={4} sm={6} key={product.id} className="mb-4">
//               <Card className="shadow-sm h-100 product-card">
//                 {/* صورة المنتج */}
//                 {product.images && product.images[0] && (
//                   <Card.Img
//                     variant="top"
//                     src={product.images[0]}
//                     style={{ 
//                       height: "200px", 
//                       objectFit: "cover",
//                       cursor: "pointer"
//                     }}
//                     alt={product.name}
//                     onClick={() => window.location.href = `/store/${product.id}`}
//                   />
//                 )}
                
//                 <Card.Body className="d-flex flex-column">
//                   {/* الفئة */}
//                   {product.category && (
//                     <div className="mb-2">
//                       <Badge bg="outline-primary" text="dark" className="border">
//                         {product.category}
//                       </Badge>
//                     </div>
//                   )}
                  
//                   <Card.Title className="flex-grow-1" style={{ fontSize: "1.1rem" }}>
//                     {product.name}
//                   </Card.Title>
                  
//                   <Card.Text className="text-muted flex-grow-1" style={{ fontSize: "0.9rem" }}>
//                     {product.description?.slice(0, 80) || "لا يوجد وصف..."}
//                   </Card.Text>
                  
//                   <div className="d-flex justify-content-between align-items-center mt-auto">
//                     {isLoggedIn ? (
//                       <span className="h5 text-success mb-0">
//                         {product.price} ج.م
//                       </span>
//                     ) : (
//                       <span className="h5 text-warning mb-0">
//                         🔒 سجل الدخول
//                       </span>
//                     )}
//                     <Button 
//                       variant="primary" 
//                       size="sm"
//                       href={`/store/${product.id}`}
//                     >
//                       عرض المنتج
//                     </Button>
//                   </div>

//                   {/* 🔥 زر إضافة للسلة في الكارت */}
//                   <div className="mt-3">
//                     <AddToCartButton product={product} isLoggedIn={isLoggedIn} user={user} />
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))
//         ) : (
//           <Col className="text-center py-5">
//             <Alert variant="warning">
//               <h4>📭 لا توجد منتجات</h4>
//               <p>
//                 {selectedCategory === "الكل" 
//                   ? "لا توجد منتجات متاحة حالياً"
//                   : `لا توجد منتجات في فئة "${selectedCategory}"`
//                 }
//               </p>
//               {selectedCategory !== "الكل" && (
//                 <Button 
//                   variant="outline-primary" 
//                   onClick={() => setSelectedCategory("الكل")}
//                 >
//                   عرض كل المنتجات
//                 </Button>
//               )}
//             </Alert>
//           </Col>
//         )}
//       </Row>

//       {/* 🔹 إعلان أسفل الصفحة */}
//       <div className="text-center mt-5 p-4 bg-light rounded">
//         <h5>🚀 تسوق الآن واحصل على أفضل العروض!</h5>
//         <p className="text-muted">تشكيلة واسعة من المنتجات بأسعار منافسة</p>
//         {isLoggedIn ? (
//           <div>
//             <Button variant="success" href="/cart" className="me-2">
//               🛒 عرض سلة التسوق
//             </Button>
//             <Button 
//               variant="outline-secondary" 
//               onClick={() => supabase.auth.signOut()}
//             >
//               🚪 تسجيل الخروج
//             </Button>
//           </div>
//         ) : (
//           <div>
//             <Button variant="success" href="/login" className="me-2">
//               🔓 تسجيل الدخول
//             </Button>
//             <Button variant="outline-primary" href="/register">
//               📝 إنشاء حساب
//             </Button>
//           </div>
//         )}
//       </div>
//     </Container>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Button, 
  Form, 
  Badge, 
  Modal, 
  InputGroup,
  Spinner,
  Alert 
} from "react-bootstrap";
import { useRouter } from "next/navigation";
import { supabase } from '/lib/supabaseClient';

// 🔥 كومبوننت إضافة للسلة
function AddToCartButton({ product, isLoggedIn }) {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  const addToCart = () => {
    if (!isLoggedIn) {
      alert("⚠️ يرجى تسجيل الدخول لإضافة المنتجات إلى السلة");
      router.push("/auth/signin");
      return;
    }

    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItemIndex = currentCart.findIndex(item => item.id === product.id);
    
    if (existingItemIndex > -1) {
      currentCart[existingItemIndex].quantity += quantity;
    } else {
      currentCart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images?.[0] || "",
        quantity: quantity
      });
    }
    
    localStorage.setItem('cart', JSON.stringify(currentCart));
    alert(`✅ تم إضافة ${quantity} من ${product.name} إلى السلة`);
    setShowModal(false);
    setQuantity(1);
  };

  const handleAddToCartClick = () => {
    if (!isLoggedIn) {
      alert("⚠️ يرجى تسجيل الدخول لإضافة المنتجات إلى السلة");
      router.push("auth/signin");
      return;
    }
    setShowModal(true);
  };

  return (
    <>
      <Button 
        variant="success" 
        className="w-100"
        onClick={handleAddToCartClick}
      >
        🛒 {isLoggedIn ? "اطلب الآن" : "سجل الدخول للطلب"}
      </Button>

      {isLoggedIn && (
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>إضافة إلى السلة</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-center mb-3">
              <img 
                src={product.images?.[0] || "https://via.placeholder.com/100"} 
                alt={product.name}
                style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px" }}
              />
              <h6 className="mt-2">{product.name}</h6>
              <p className="text-success h5">{product.price} ج.م</p>
            </div>

            <Form.Group>
              <Form.Label>الكمية المطلوبة</Form.Label>
              <InputGroup>
                <Button 
                  variant="outline-secondary"
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                >
                  -
                </Button>
                <Form.Control
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1"
                  className="text-center"
                />
                <Button 
                  variant="outline-secondary"
                  onClick={() => setQuantity(prev => prev + 1)}
                >
                  +
                </Button>
              </InputGroup>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              إلغاء
            </Button>
            <Button variant="success" onClick={addToCart}>
              🛒 إضافة إلى السلة
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default function StorePage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("newest");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // التحقق من حالة تسجيل الدخول
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setIsLoggedIn(!!session);
      } catch (error) {
        console.error('Error checking auth:', error);
        setIsLoggedIn(false);
      }
    };

    checkAuth();

    // الاستماع لتغيرات حالة المصادقة
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setIsLoggedIn(!!session);
        
        // إذا تم تسجيل الدخول، نحدث الصفحة تلقائياً
        if (event === 'SIGNED_IN') {
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  // جلب المنتجات والفئات - نفس الكود القديم
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // جلب المنتجات
        const productsRes = await fetch("/api/products");
        const productsData = await productsRes.json();
        setProducts(productsData);
        setFilteredProducts(productsData);

        // جلب الفئات
        const categoriesRes = await fetch("/api/categories");
        const categoriesData = await categoriesRes.json();
        setCategories(categoriesData);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // فلترة وترتيب المنتجات - نفس الكود القديم
  useEffect(() => {
    let filtered = products;

    // الفلترة حسب الفئة
    if (selectedCategory !== "الكل") {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    // الترتيب
    if (sortBy === "price-low") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortBy === "newest") {
      filtered = [...filtered].sort((a, b) => b.id - a.id);
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, sortBy, products]);

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" variant="success" />
        <p className="mt-3">جارٍ تحميل المتجر...</p>
      </Container>
    );
  }
 const handleSignin = async () => {
    try {
        // حفظ الصفحة الحالية قبل تسجيل الخروج
        sessionStorage.setItem("prevPage", window.location.href);
        
        await supabase.auth.signOut();
        setUser(null);
        
   
        
    } catch (error) {
        console.error('Error signing out:', error);
    }
};
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">🛍️ متجرنا</h1>

      {/* 🔹 تنبيه للزوار */}
      {!isLoggedIn && (
        <Alert variant="warning" className="text-center mb-4">
          <strong>🔒 للاطلاع على الأسعار وإتمام الطلبات</strong>
          <br />
          يرجى <a href="/auth/signin" className="alert-link">تسجيل الدخول</a> أو <a href="/register" className="alert-link">إنشاء حساب جديد</a>
        </Alert>
      )}

      {/* 🔹 رسالة ترحيب للمستخدم المسجل */}
      {isLoggedIn && (
        <Alert variant="success" className="text-center mb-4">
          <strong>🎉 أهلاً بعودتك!</strong>
          <br />
          يمكنك الآن رؤية الأسعار وإضافة المنتجات إلى السلة
        </Alert>
      )}

      {/* 🔹 أدوات الفلترة والترتيب */}
      <div className="row justify-content-between mb-4">
        <div className="col-md-4 mb-3">
          <Form.Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="shadow-sm"
          >
            <option value="الكل">📂 كل المنتجات</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </Form.Select>
        </div>

        <div className="col-md-4 mb-3">
          <Form.Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="shadow-sm"
          >
            <option value="newest">🆕 الأحدث</option>
            <option value="price-low">💰 السعر: من الأقل للأعلى</option>
            <option value="price-high">💰 السعر: من الأعلى للأقل</option>
          </Form.Select>
        </div>
      </div>

      {/* 🔹 مؤشر النتائج */}
      <div className="text-center mb-4">
        <p className="text-muted">
          {selectedCategory === "الكل" 
            ? `عرض ${filteredProducts.length} منتج`
            : `عرض ${filteredProducts.length} منتج في فئة "${selectedCategory}"`
          }
        </p>
      </div>

      {/* 🔹 شبكة المنتجات */}
      <Row>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Col lg={3} md={4} sm={6} key={product.id} className="mb-4">
              <Card className="shadow-sm h-100 product-card">
                {/* صورة المنتج */}
                {product.images && product.images[0] && (
                  <Card.Img
                    variant="top"
                    src={product.images[0]}
                    style={{ 
                      height: "200px", 
                      objectFit: "cover",
                      cursor: "pointer"
                    }}
                    alt={product.name}
                    onClick={() => window.location.href = `/store/${product.id}`}
                  />
                )}
                
                <Card.Body className="d-flex flex-column">
                  {/* الفئة */}
                  {product.category && (
                    <div className="mb-2">
                      <Badge bg="outline-primary" text="dark" className="border">
                        {product.category}
                      </Badge>
                    </div>
                  )}
                  
                  <Card.Title className="flex-grow-1" style={{ fontSize: "1.1rem" }}>
                    {product.name}
                  </Card.Title>
                  
                  <Card.Text className="text-muted flex-grow-1" style={{ fontSize: "0.9rem" }}>
                    {product.description?.slice(0, 80) || "لا يوجد وصف..."}
                  </Card.Text>
                  
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    {isLoggedIn ? (
                      <span className="h5 text-success mb-0">
                        {product.price} ج.م
                      </span>
                    ) : (
                      <span className="h5 text-warning mb-0">
                        🔒 سجل الدخول
                      </span>
                    )}
                    <Button 
                      variant="primary" 
                      size="sm"
                      href={`/store/${product.id}`}
                    >
                      عرض المنتج
                    </Button>
                  </div>

                  {/* 🔥 زر إضافة للسلة في الكارت */}
                  <div className="mt-3">
                    <AddToCartButton product={product} isLoggedIn={isLoggedIn} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col className="text-center py-5">
            <Alert variant="warning">
              <h4>📭 لا توجد منتجات</h4>
              <p>
                {selectedCategory === "الكل" 
                  ? "لا توجد منتجات متاحة حالياً"
                  : `لا توجد منتجات في فئة "${selectedCategory}"`
                }
              </p>
              {selectedCategory !== "الكل" && (
                <Button 
                  variant="outline-primary" 
                  onClick={() => setSelectedCategory("الكل")}
                >
                  عرض كل المنتجات
                </Button>
              )}
            </Alert>
          </Col>
        )}
      </Row>

      {/* 🔹 إعلان أسفل الصفحة */}
      <div className="text-center mt-5 p-4 bg-light rounded">
        <h5>🚀 تسوق الآن واحصل على أفضل العروض!</h5>
        <p className="text-muted">تشكيلة واسعة من المنتجات بأسعار منافسة</p>
        {isLoggedIn ? (
          <div>
            <Button variant="success" href="/cart" className="me-2">
              🛒 عرض سلة التسوق
            </Button>
            <Button 
              variant="outline-secondary" 
              onClick={() => supabase.auth.signOut()}
            >
              🚪 تسجيل الخروج
            </Button>
          </div>
        ) : (
          <div>
            <Button onClick={handleSignin} variant="success" href="/auth/signin" className="me-2">
              🔓 تسجيل الدخول
            </Button>
            <Button variant="outline-primary" href="/register">
              📝 إنشاء حساب
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
}