"use client";
import React, { useEffect, useState } from "react";
import { Card , Button } from "react-bootstrap";

const LatestArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch("/api/articles");
        const data = await res.json();
        // بنعرض آخر 3 مقالات فقط
        setArticles(data.slice(-3).reverse());
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <section className="latest-articles-section">
      <div className="container">
        <h2 className="text-center mb-4">أحدث المقالات</h2>
        <div className="row">
          {articles.map((article) => (
            <div key={article.id} className="col-md-4 mb-4">
              <Card className="article-card shadow-sm border-0 h-100">
                <Card.Img
                  variant="top"
                  src={article.coverImage}
                  alt={article.title}
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.description}</Card.Text>
                  {/* <a href={article.link} className="btn btn-primary">
                    اقرأ المزيد
                  </a> */}
                  <Button variant="success" href={`/articles/${article.id}`}>
                  اقرأ المزيد
                </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
