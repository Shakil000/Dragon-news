import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCart from "./NewsCart";

const CategoryNews = () => {
  const { data: allNews } = useLoaderData();
  // console.log(allNews);
  return (
    <div>
        <h1 className="font-semibold mb-3">Dragon News Home</h1>
      <h1 className="font-semibold text-green-400">এই {allNews.category_name} ক্যাটাগরিতে {allNews.length} টি সংবাদ পাওয়া গেছে</h1>
      <div>
        {
            allNews.map((allNewses,i) => <NewsCart key={i} allNewses={allNewses}></NewsCart>)
        }
      </div>
    </div>
  );
};

export default CategoryNews;
