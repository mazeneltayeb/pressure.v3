"use client";
import React from "react";
import LatestArticles from "@/components/LatestArticles";
import PricesSection from "@/components/PricesSection";
import Banner from "@/components/Banner";
import AdSlot from "@/components/AdSlot";

import { Button, Container, Row, Col, Card } from "react-bootstrap";

export default function Home() {
  return (
   <main>
  <Banner />

  <section id="articles" style={{ padding: "40px 20px" }}>
    <LatestArticles />
  </section>

  {/* إعلان داخل الصفحة */}
  <AdSlot width="90%" height="150px" label="إعلان منتصف الصفحة" />

  <PricesSection />

  {/* إعلان سفلي عادي */}
  <AdSlot width="80%" height="120px" label="إعلان أسفل الصفحة" />

  {/* إعلان متحرك */}
 
</main>
  );
}
