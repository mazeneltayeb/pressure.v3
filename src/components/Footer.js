"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-5 mt-5">
      <Container>
        <Row className="mb-4 text-center">
          <Col md={4} className="mb-3">
            <h5 className="fw-bold mb-3">من نحن</h5>
            <p style={{ lineHeight: "1.8" }}>
              We are a creative web design and development team passionate about
              building modern, responsive websites.
            </p>
          </Col>

          <Col md={4} className="mb-3">
            <h5 className="fw-bold mb-3">تصفح معنا</h5>
            <div className="d-flex f-row justify-content-evenly">
              <ul className="list-unstyled">
              <li><a  href="/" className="text-light text-decoration-none">الرئيسية</a></li>
              <li><a href="/store" className="text-light text-decoration-none">المتجر</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">اتصل بنا</a></li>
              <li><a href="/articles" className="text-light text-decoration-none">المقالات</a></li>
              <li><a href="/about" className="text-light text-decoration-none">من نحن</a></li>

            </ul>
            <ul className="list-unstyled">                            
            {/* <h6 className="fw-bold mb-2">الاسعار</h6> */}
              <li><a  href="/prices/gold" className="text-light text-decoration-none">اسعار الذهب</a></li>
              <li><a href="/prices/currency" className="text-light text-decoration-none">اسعار الصرف</a></li>
              <li><a href="/prices/poultry" className="text-light text-decoration-none">بورصة الدواجن</a></li>
              <li><a href="/prices/materials" className="text-light text-decoration-none">اسعار الخامات</a></li>
              <li><a href="/prices/feeds" className="text-light text-decoration-none">اسعار الاعلاف</a></li>
            </ul>
            </div>
          
          </Col>

          <Col md={4} className="mb-3">
            <h5 className="fw-bold mb-3">Contact</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +20 111 222 3333</p>
          </Col>
        </Row>

        <hr className="border-light" />

        <Row className="text-center">
          <Col>
            <div className="d-flex justify-content-center gap-3 mb-2">
              <a href="#" className="text-light fs-4"><FaFacebook /></a>
              <a href="#" className="text-light fs-4"><FaInstagram /></a>
              <a href="#" className="text-light fs-4"><FaTwitter /></a>
              <a href="#" className="text-light fs-4"><FaLinkedin /></a>
            </div>
            <p className="mb-0">
              © {new Date().getFullYear()} My Website | All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
