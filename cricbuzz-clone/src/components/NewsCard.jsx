import React from "react";

function NewsCard({ title, desc }) {
  return (
    <div className="news-card">
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

export default NewsCard;