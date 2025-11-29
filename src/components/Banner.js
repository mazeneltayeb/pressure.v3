"use client";
import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

const Banner = () => {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #f8d800, #f1a10a)",
        padding: "80px 20px",
        textAlign: "center",
        color: "#333",
        position: "relative",
      }}
    >
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={8}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
              أسعار اليوم بين يديك ⚡
            </h1>
            <p style={{ fontSize: "1.2rem", margin: "20px 0" }}>
              تابع أحدث أسعار الذهب، العملات، والدواجن محدثة لحظة بلحظة.
            </p>
            <Button
              variant="dark"
              size="lg"
              style={{
                borderRadius: "30px",
                padding: "10px 30px",
                fontWeight: "600",
                marginBottom: "40px",
              }}
            >
              تصفح الأسعار الآن
            </Button>

{/* إعلان */}
<div
  style={{
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    maxWidth: "840px", // ✅ عرض متوسط
    height: "180px", // ✅ ارتفاع متوسط
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <p style={{ margin: 0, color: "#555", fontSize: "1.1rem" }}>
    📢 مساحة إعلان (840x180)
  </p>
</div>


          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
