"use client";
import React from "react";
import { Container } from "react-bootstrap";

export default function About() {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">من نحن</h1>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        نحن موقع متخصص في عرض أحدث أخبار الزراعة، والتقنيات الحديثة المستخدمة في
        الزراعة المستدامة، بالإضافة إلى متابعة يومية لأسعار الذهب، الصرف، وبورصة
        الدواجن.
      </p>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        هدفنا هو تزويد المزارعين والمستثمرين بمصدر موثوق وسهل الاستخدام للحصول
        على أحدث البيانات والمقالات الزراعية، مع إمكانية متابعة الأسواق
        الاقتصادية ذات العلاقة بالزراعة.
      </p>
      

    </Container>
  );
}
