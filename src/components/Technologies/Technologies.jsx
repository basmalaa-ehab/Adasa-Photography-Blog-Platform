import React from 'react'
import postsData from "../../data/posts.json";
import { Link } from "react-router-dom";
export default function Technologies() {
  const filteredPosts = postsData.posts.filter(post => post.category === "تقنيات");

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
      {filteredPosts.map(post => (
            <div className="col" >
          <div className="card-allaericles overflow-hidden rounded-5 h-100" style={{ width: "25rem" }}>
            <div className="position-relative image-wrapper">
          <img src={post.image} className="card-img-top w-100 " alt={post.title} />
          <div className="overlay"></div>
          <span className="position-absolute text-xs font-medium category rounded-4 px-2 py-1">{post.category}</span>
            </div>
                      <div className="card-body px-3 ">
                        <div className="d-flex flex-row mt-2 gap-3">
          <span className="text-gray-500 text-md font-normal "><i className="fa-regular fa-clock text-gray-400 text-xs font-normal me-1"></i>{post.readTime}</span>
          <span className=" text-gray-500 text-md font-normal "><i className=". text-gray-500 text-xs font-normal"></i>  {new Intl.DateTimeFormat("ar-EG", {
                day: "numeric",
                month: "long",
                year: "numeric"
              }).format(new Date(post.date))}</span>
                        </div>
                        <Link className={`text-decoration-none  `} to={`/posts/${post.slug}`}>
                          {" "}
                          <h5
                            className="card-title text-xl
           text-white font-bold
           hover:!text-orange-700 mt-3 px-2"
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
          
                      <div className="card-footer mt-3 mb-1 border-t-2 border-gray-400/25   d-flex flex-row justify-content-between align-items-center" >
                        <div className="card-footer d-flex flex-row ">
                          <div className={`d-flex flex-row `}>
                            <img
                              src={post.author.avatar}
                              className={`rounded-circle w-100 ms-3 mt-2`}     style={{ width: "40px", height: "40px", objectFit: "cover" }}
          
                              alt={post.author.name}
                            />
                          </div>
                          <div className="d-flex flex-column p-0 m-0 ms-3 mt-2">
                            <p       className={`text-white text-sm font-medium mb-0 `}>{post.author.name}</p>
                            <p     className={`text-gray-500 text-xs font-normal`}>{post.author.role}</p>
                          </div>
                        </div>
          
                        <div className="rounded-circle  angle-left d-flex justify-content-center align-items-center me-3 mt-2"  >
                          <i className="fa-solid fa-angle-left fs-6 "></i>
                        </div>
                      </div>
                    </div>
                  </div>
      ))}
    </div>
  );
}
