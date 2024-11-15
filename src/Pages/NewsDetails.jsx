import React from "react";
import Navbar from "../components/Navbar";
import RightNavbar from "../components/LayoutComponent/RightNavbar";
import Header from "../components/Header";
import { Link, useLoaderData } from "react-router-dom";
import NewsDetailsCart from "../components/NewsDetailsCart";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  //   console.log(news);
  return (
    <div>
      <header>
        <Header></Header>
        <div></div>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-10">
          <h1 className="font-semibold">Dragon News</h1>
          {/* <div className="border rounded-lg shadow-lg overflow-hidden mb-6">
            <div className="w-full">
                <img src={news.imageUrl} alt="News" className="w-full h-auto" />
            </div>
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{news.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{date} | Tags: {tags.join(', ')}</p>
                <p className="text-gray-700 mb-4">{content}</p>
                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                    ← All news in this category
                </button>
            </div>
        </div> */}
          <div className="card bg-base-100 w-full shadow-xl">
            <figure className="px-10 pt-10">
              <img src={news.image_url} className="rounded-xl" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{news?.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions">
                <Link
                  to={`/category/${news?.category_id}`}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  ← All news in this category
                </Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-2">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
