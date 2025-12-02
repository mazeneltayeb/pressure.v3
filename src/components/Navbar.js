

"use client";
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown, Badge, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "/lib/supabaseClient"; 

export default function NavigationBar() {
  const [totalItems, setTotalItems] = useState(0);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔥 جلب بيانات المستخدم
  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();

    // الاستماع لتغييرات حالة المصادقة
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  // 🔥 تحديث السلة
  useEffect(() => {
    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const itemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
      setTotalItems(itemsCount);
    };

    updateCart();
    const interval = setInterval(updateCart, 1000);

    return () => clearInterval(interval);
  }, []);

  // 🔥 تسجيل الخروج
  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

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
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} href="/">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/">الرئيسية</Nav.Link>
            <Nav.Link as={Link} href="/about">من نحن</Nav.Link>
            <Nav.Link as={Link} href="/contact">اتصل بنا</Nav.Link>
            <Nav.Link as={Link} href="/articles">المقالات</Nav.Link>

            <NavDropdown title="الأسعار" id="prices-dropdown">
              <NavDropdown.Item as={Link} href="/prices/gold">أسعار الذهب</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/prices/currency">أسعار الصرف</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/prices/poultry">بورصة الدواجن</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/prices/materials">أسعار الخامات</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/prices/feeds">اسعار الاعلاف</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} href="/store">المتجر</Nav.Link>
          </Nav>

          {/* 🔥 أزرار المستخدم والسلة */}
          <Nav className="ms-3 d-flex align-items-center">
            {!loading && (
              user ? (
                // 🔥 المستخدم مسجل الدخول - تظهر السلة وأزرار البروفايل
                <>
                  {/* زر السلة */}
                  <Nav.Link as={Link} href="/cart" className="position-relative mx-2">
                    🛒 السلة
                    {totalItems > 0 && (
                      <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle">
                        {totalItems}
                      </Badge>
                    )}
                  </Nav.Link>

                  {/* زر البروفايل وتسجيل الخروج */}
                  <Nav.Link as={Link} href="/profile" className="text-dark mx-2">
                    👤 {user.email?.split('@')[0]}
                  </Nav.Link>
                  <Button 
                    variant="outline-secondary" 
                    onClick={handleSignOut}
                    size="sm"
                    className="me-2"
                  >
                    🚪 تسجيل الخروج
                  </Button>
                </>
              ) : (
                // 🔥 المستخدم غير مسجل الدخول - تظهر فقط أزرار التسجيل
                <>
                  <Button 
                    variant="success" 
                    href="/auth/signin" 
                    onClick={handleSignin}
                    size="sm"
                    className="me-2"
                    as={Link}
                  >
                    🔓 تسجيل الدخول
                  </Button>
                  <Button 
                    variant="outline-primary" 
                    href="/registration" 
                    size="sm"
                    as={Link}
                  >
                    📝 إنشاء حساب
                  </Button>
                </>
              )
            )}
          </Nav>

          {/* اللغة */}
          <div className="me-3">
            <Image
              src="/egypt-flag.png"
              alt="AR"
              width={32}
              height={20}
              style={{ cursor: "pointer", marginRight: "10px" }}
            />
            <Image
              src="/usa-flag.png"
              alt="EN"
              width={32}
              height={20}
              style={{ cursor: "pointer" }}
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}