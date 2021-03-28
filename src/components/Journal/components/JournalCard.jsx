import React from 'react';

function JournalCard({ categories, title, desc }) {
  return (
    <article className="card">
      <div className="card-img"></div>
      <div className="desc">
        <div className="category">{categories}</div>
        <h3 className="title">{title}</h3>
        <div className="subtitle">{desc}</div>
      </div>
    </article>
  );
}

export default JournalCard;
