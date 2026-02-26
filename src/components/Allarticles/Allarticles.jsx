import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import style from "./Allarticles.module.css";
import postsData from "../../data/posts.json";
const posts = postsData.posts;
import { useOutletContext } from "react-router-dom";
import Blog from "../Blog/Blog";
export default function Allarticles() {
  const { posts, search, setSearch, currentPage, setCurrentPage, error } =
    useOutletContext();
  // pagination
  const postsPerPage = 6;

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);
  const handleReset = () => {
    setSearch("");
    setCurrentPage(1);
  };
  return (
    <div>
      <div
        className="row row-cols-1 row-cols-lg-3 row-cols-md-2 gy-4 
  mt-4"
      >
        {posts.length === 0 ? (
          <div className="col-12 text-center mt-5  d-flex flex-column mx-auto justify-content-center align-items-center">
            <div className="d-flex flex-column mx-auto justify-content-center align-items-center p-5 rounded-4  bg-opacity-75">
              <span className=" no-search-icon rounded-circle  d-flex  justify-content-center align-items-center">
                {" "}
                <i className="fa-regular fa-face-sad-tear fs-1 "></i>
              </span>{" "}
              <h3 className="text-white text-2xl fw-bold  mt-2">
                لا توجد مقالات
              </h3>
              <p className="text-gray-400 text-nowrap mt-2">
                حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
              </p>
              <button
                className="text-decoration-none text-white font-semibold text-sm bg-orange-500 rounded-5 px-3 py-3"
                onClick={handleReset}
              >
                {" "}
                <i class="fa-solid fa-arrow-rotate-right"></i> إعادة تعيين
                الفلاتر{" "}
              </button>
            </div>
          </div>
        ) : (
          currentPosts.map((post) => (
            <div key={post.id} className="col">
              <div
                className="card-allaericles overflow-hidden rounded-5 h-100"
                style={{ width: "25rem" }}
              >
                <div className="position-relative image-wrapper">
                  <img
                    src={post.image}
                    className="card-img-top w-100 "
                    alt={post.title}
                  />
                  <div className="overlay"></div>
                  <span className="position-absolute text-xs font-medium category rounded-4 px-2 py-1">
                    {post.category}
                  </span>
                </div>
                <div className="card-body px-3 ">
                  <div className="d-flex flex-row mt-2 gap-3">
                    <span className="text-gray-500 text-md font-normal ">
                      <i className="fa-regular fa-clock text-gray-400 text-xs font-normal me-1"></i>
                      {post.readTime}
                    </span>
                    <span className=" text-gray-500 text-md font-normal ">
                      <i className=". text-gray-500 text-xs font-normal"></i>{" "}
                      {new Intl.DateTimeFormat("ar-EG", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }).format(new Date(post.date))}
                    </span>
                  </div>
                  <Link
                    className={`text-decoration-none  `}
                    to={`/posts/${post.slug}`}
                  >
                    {" "}
                    <h5
                      className="card-title text-xl
 text-white font-bold
  mt-3 px-2"
                    >
                      {post.title}
                    </h5>
                  </Link>
                  <p
                    className="card-text text-sm mt-3  text-gray-500
 font-normal text-wrap px-2   "
                  >
                    {post.excerpt}
                  </p>
                </div>

                <div className="card-footer mt-3 mb-1 border-t-2 border-gray-400/25   d-flex flex-row justify-content-between align-items-center">
                  <div className="card-footer d-flex flex-row ">
                    <div className={`d-flex flex-row `}>
                      <img
                        src={post.author.avatar}
                        className={`rounded-circle w-100 ms-3 mt-2`}
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "cover",
                        }}
                        alt={post.author.name}
                      />
                    </div>
                    <div className="d-flex flex-column p-0 m-0 ms-3 mt-2">
                      <p className={`text-white text-sm font-medium mb-0 `}>
                        {post.author.name}
                      </p>
                      <p className={`text-gray-500 text-xs font-normal`}>
                        {post.author.role}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-circle  angle-left d-flex justify-content-center align-items-center me-3">
                    <i className="fa-solid fa-angle-left fs-6 text-orange-400  me-1  "></i>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {posts.length > 0 && (
        <>
          <div className="   d-flex justify-content-center gap-2 mt-5">
            <button
              className="btn btn-outline-secondary  my-btn px-3 py-2 text-white  rounded-3"
              disabled={currentPage === 1}
              onClick={() => {
                setCurrentPage(currentPage - 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span className="d-flex justify-center ">
                {" "}
                <i className="fa-solid fa-angle-left"></i>
              </span>
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`btn ${
                  currentPage === index + 1
                    ? "my-btn-active px-3 py-2 text-white rounded-3"
                    : "btn-outline-secondary my-btn px-3 py-2  rounded-3"
                }`}
                onClick={() => {
                  setCurrentPage(index + 1);

                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {index + 1}
              </button>
            ))}

            <button
              className="btn btn-outline-secondary  my-btn px-3 py-2 text-white  rounded-3 "
              disabled={currentPage === totalPages}
              onClick={() => {
                setCurrentPage(currentPage + 1);

                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span className="d-flex justify-center ">
                {" "}
                <i className="fa-solid fa-angle-right"></i>{" "}
              </span>
            </button>
          </div>

          <div className="text-center text-gray-700 mt-3">
            صفحة {currentPage} من {totalPages}
          </div>
        </>
      )}
    </div>
  );
}
