import React from "react";
import style from "./Blog.module.css";
import { NavLink, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import posts from "../data/posts.json";
// import BlogPosts from "./BlogPosts";
// import postsData from "../../data/posts.json";
// import Blogview from "../Blogview";
import postsData from "../../data/posts.json";
import { useState } from "react";

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);

  // search state
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const filteredPosts = postsData.posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase())),
  );

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    const results = postsData.posts.filter(
      (post) =>
        post.title.toLowerCase().includes(value.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(value.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(value.toLowerCase()),
        ),
    );

    if (results.length === 0) {
      setError(`
    
      `);
      setCurrentPage(1);
    } else {
      setError("");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && search.trim() === "") {
    }
  };

  return (
    <div>
      <main>
        <section className={`${style.mtnavbar} bg-grid p-3  pt-5`}>
          <div className="bg-light-orange three"></div>
          <div className="d-flex justify-content-center align-items-center text-white ">
            <div
              className={`${style.blog} p-3 mt-4 d-flex flex-row justify-content-center align-items-center gap-1 rounded-5`}
            >
              <div className="spinner-grow spinner-grow-sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>

              <span className="main-color">
                <i className="fa-solid fa-book"></i> مدونتنا
              </span>
            </div>
          </div>
          <div className="text-white d-flex flex-column align-items-center text-center p-5">
            <h1 className={`${style.blogfsh1}   mb-2`}>
              استكشف <span className="art-title">مقالاتنا</span>
            </h1>

            <p className="mt-4 fs-4 font-gray">
              اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
            </p>
          </div>
        </section>
        <section className="">
          <div>
            <div className="bg-black w-100 d-flex flex-row justify-content-between myborder  ">
              <div
                className={`position-relative search-wrapper text-white p-4`}
              >
                <input
                  type="search"
                  className={`${style.searchinput} bloglink  px-3 rounded-3`}
                  placeholder="ابحث في المقالات..."
                  onKeyDown={handleKeyDown}
                  value={search}
                  onChange={handleSearch}
                />

                <i
                  className={`   fa-solid fa-magnifying-glass ${style.searchicon} d-flex  position-absolute`}
                ></i>
              </div>

              <div className="   d-flex flex-row gap-3 me-5 align-items-center justify-content-center ">
                <NavLink
                  to="/blog"
                  end
                  className={({ isActive }) =>
                    `text-decoration-none bloglink p-2 rounded-3 font-medium    ${isActive ? style.active : ""}`
                  }
                >
                  جميع المقالات
                </NavLink>

                <NavLink
                  to="lights"
                  className={({ isActive }) =>
                    `text-decoration-none  bloglink p-2 rounded-3 font-medium    ${isActive ? style.active : ""}`
                  }
                >
                  إضاءة
                </NavLink>

                <NavLink
                  to="portrait"
                  className={({ isActive }) =>
                    `text-decoration-none bloglink p-2 rounded-3 font-medium    ${isActive ? style.active : ""}`
                  }
                >
                  بورتريه
                </NavLink>

                <NavLink
                  to="landscapes"
                  className={({ isActive }) =>
                    `text-decoration-none bloglink p-2 rounded-3 font-medium   ${isActive ? style.active : ""}`
                  }
                >
                  مناظر طبيعية
                </NavLink>

                <NavLink
                  to="technologies"
                  className={({ isActive }) =>
                    `text-decoration-none  bloglink p-2 rounded-3 font-medium    ${isActive ? style.active : ""}`
                  }
                >
                  تقنيات
                </NavLink>

                <NavLink
                  to="equipment"
                  className={({ isActive }) =>
                    `text-decoration-none  bloglink p-2 rounded-3 font-medium   ${isActive ? style.active : ""}`
                  }
                >
                  معدات
                </NavLink>
              </div>
            </div>
            <div className={` p-4 bg-black `}>
              <div className="container">
                <div
                  className={`d-flex justify-content-between align-items-center   `}
                  style={{ paddingTop: "30px" }}
                >
                  <div>
                    <p className={`font-gray`}>
                      عرض <span className={`fw-semibold text-white`}>28</span>{" "}
                      مقالات
                    </p>
                  </div>

                  <div>
                    <div
                      className={`  grid rounded-3 px-2 py-2   d-flex flex-row gap-3`}
                    >
                      <button>
                        <i
                          className={`fa-solid fa-table fs-4 text-orange-600  `}
                        ></i>
                      </button>
                      <button>
                        <i className={`fa-solid fa-bars fs-4 font-gray `}></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="container mt-4">
                  <Outlet
                    context={{
                      posts: filteredPosts,
                      search,
                      setSearch,
                      currentPage,
                      setCurrentPage,
                      error,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
