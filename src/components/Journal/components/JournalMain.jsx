import React from 'react';
import { useSelector } from 'react-redux';
import JournalCard from './JournalCard';
import { Link } from 'react-router-dom';

function JournalMain() {
  const articles = useSelector((state) => state.layouts.journal.articles);

  return (
    <div className="contents">
      <div className="articles">
        {articles.map(({ categories, title, desc, path }, idx) => {
          return (
            <Link to={path}>
              <JournalCard title={title} desc={desc} categories={categories} />
            </Link>
          );
        })}
      </div>
      <div className="more-btn txt-bold">Load More</div>
    </div>
  );
}

export default JournalMain;
