"use client";
import React from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">اتصل بنا</h1>
      <Form style={{ maxWidth: "600px", margin: "0 auto" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>الاسم الكامل</Form.Label>
          <Form.Control type="text" placeholder="اكتب اسمك هنا" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>البريد الإلكتروني</Form.Label>
          <Form.Control type="email" placeholder="example@email.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>الرسالة</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="اكتب رسالتك هنا..." />
        </Form.Group>

        <div className="text-center">
          <Button variant="success" type="submit">
            إرسال
          </Button>
        </div>
      </Form>
    </Container>
  );
}
