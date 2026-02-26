import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, NavLink } from "react-router-dom";
import style from "./Home.module.css";
import home1 from "../../assets/photo-1500835556837-99ac94a94552.jfif";
import home2 from "../../assets/photo-1507003211169-0a1dd7228f2d (2).jfif";
import home3 from "../../assets/photo-1507003211169-0a1dd7228f2d (1).jfif";
import home4 from "../../assets/photo-1500648767791-00dcc994a43e (1).jfif";
import home5 from "../../assets/photo-1506905925346-21bda4d32df4.jfif";
import home6 from "../../assets/photo-1472099645785-5658abf4ff4e (1).jfif";
import featuredPosts from "../FeaturedArticles/FeaturedArticles";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value.includes("@")) {
      setError(
        `Please include an @ in the email address. "${value}" is missing an @`,
      );
    } else {
      setError("");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value && !emailRegex.test(value)) {
      setError(`Please Enter a valid email address. "${value}" is not valid `);
    } else {
      setError("");
    }
  };

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email && !emailRegex.test(email)) {
      setError(`Please enter a valid email address. "${email}" is not valid`);
    } else {
      setError("");
      const section = document.getElementById("hero-section");
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* hero section */}

      <section
        id="hero-section"
        className={`${style.mtnavbar} bg-grid p-3  pt-5`}
      >
        <div className="bg-light-orange one"></div>
        <div className="bg-light-orange two"></div>
        <div className="bg-light-orange three"></div>
        <div className="d-flex justify-content-center align-items-center text-white ">
          <div className="welcome-adasa p-3 mt-4 d-flex flex-row justify-content-center align-items-center gap-1 rounded-5">
            <div className="spinner-grow spinner-grow-sm" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow spinner-grow-sm" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>

            <span className="regular"> مرحباً بك في عدسة</span>
          </div>
        </div>
        <div className="text-white d-flex flex-column align-items-center text-center p-5">
          <h1 className="fs-h1 mb-2">
            اكتشف <span className="art-title">فن</span>
          </h1>
          <h1 className="fs-h1">التصوير الفوتوغرافي</h1>

          <p className="mt-4 fs-4 font-gray">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>

          <div className="d-flex flex-row gap-2 mt-5 z-10 ">
            <button className=" main-bg text-white   rounded-5 py-3 px-4 fs-6 fw-semibold explore-more-btn ">
              <Link className="text-decoration-none text-white link" to="blog">
                استكشف المقالات <i className="fa-solid fa-arrow-left"></i>
              </Link>
            </button>

            <button className="  text-white btn-know-more rounded-5 py-3 px-4 fs-6 fw-semibold">
              {" "}
              <Link
                className="text-decoration-none text-white link "
                to="blog"
              >
                <i className="fa-solid fa-circle-info info-icon "></i> اعرف
                المزيد{" "}
              </Link>
            </button>
          </div>

          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-5 mt-3">
            <div className="col">
              <div
                className={`${style.herocard} transition-transform duration-300 hover:scale-102 hover:shadow-lg d-flex flex-column align-items-center text-center justify-content-center  `}
              >
                <i className="fa-solid fa-book main-color fs-4"></i>
                <span className="art-title fs-4 fw-bold">+50</span>
                <span className="font-gray">مقالة</span>
              </div>
            </div>

            <div className="col">
              <div
                className={`${style.herocard} transition-transform duration-300 hover:scale-102 hover:shadow-lg d-flex flex-column align-items-center text-center justify-content-center  `}
              >
                <i className="fa-solid fa-users main-color fs-4"></i>
                <span className="art-title fs-4 fw-bold">+100</span>
                <span className="font-gray">قارئ</span>
              </div>
            </div>

            <div className="col">
              <div
                className={`${style.herocard} transition-transform duration-300 hover:scale-102 hover:shadow-lg d-flex flex-column align-items-center text-center justify-content-center  `}
              >
                <i className="fa-solid fa-folder main-color fs-4"></i>
                <span className="art-title fs-4 fw-bold">4</span>
                <span className="font-gray">تصنيفات</span>
              </div>
            </div>

            <div className="col">
              <div
                className={`${style.herocard} transition-transform duration-300 hover:scale-102 hover:shadow-lg d-flex flex-column align-items-center text-center   justify-content-center`}
              >
                <i className="fa-solid fa-pen-nib main-color fs-4"></i>
                <span className="art-title fs-4 fw-bold">6</span>
                <span className="font-gray">كاتب</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 2 */}

      <section className="sectiontwohome p-5 ">
        <div className="container">
          <div className="title">
            <div className="welcome-adasa  mt-5 d-flex flex-row justify-content-center align-items-center gap-1 rounded-5">
              <div className="spinner-grow spinner-grow-sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow spinner-grow-sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>

              <span className="regular p-0">مميز </span>
            </div>
            <h2
              className=" text-white section2-h2
"
            >
              مقالات مختارة
            </h2>
            <div className="d-flex flex-row justify-content-between align-items-center ">
              <p
                className="text-base font-medium text-gray-50 
"
              >
                محتوى منتقى لبدء رحلة تعلمك
              </p>

              <NavLink
                className={`me-5 px-4 py-2 rounded-4 main-bg text-white text-decoration-none text-nowrap d-inline-flex align-items-center`}
                to="blog"
              >
                عرض الكل <i className="fa-solid fa-angle-left fs-6 "></i>
              </NavLink>
            </div>
          </div>

          <div className="content">
            <div className="row row-cols-1 row-col-md-1 row-cols-lg-1 gy-4  ">
              <div className="col content-details flex-row d-flex">
                <div
                  className="image-wrapper overflow-hidden position-relative object-cover"
                  style={{ width: "50%" }}
                >
                  <img
                    src={home1}
                    className="w-100"
                    alt="golden our photography"
                  />
                  <span className="badge rounded-3 px-3 py-1 ">
                    {" "}
                    <i
                      className="fa-solid fa-star text-xs
"
                    ></i>{" "}
                    مميز{" "}
                  </span>
                </div>

                <div className="col d-flex flex-column card-home">
                  <div className="card-body px-3 ">
                    <div className="d-flex flex-row mt-5 gap-3">
                      <div className=" px-4 py-1 rounded-4  angle-left d-flex justify-content-center align-items-center text-sm font-normal ">
                        اضاءه
                      </div>
                      <span className="text-gray-500 text-md font-normal ">
                        <i className="fa-regular fa-clock text-gray-400  font-normal me-1">
                          {" "}
                        </i>
                        8 دقائق للقراءه
                      </span>
                    </div>
                    <Link className={`text-decoration-none  `} to="">
                      {" "}
                      <h5
                        className=" text-xl
   text-white font-bold content-title
   mt-3 px-2"
                      >
                        إتقان تصوير الساعة الذهبية: دليل شامل{" "}
                      </h5>
                    </Link>
                    <p
                      className="card-text text-sm mt-3  text-gray-500
   font-normal text-wrap px-2   "
                    >
                      تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح
                      احترافية حول الإضاءة والتكوين.
                    </p>
                  </div>

                  <div className="card-footer-home pb-3  d-flex flex-row justify-content-between align-items-center">
                    <div className="card-footer d-flex flex-row ">
                      <div className={`d-flex flex-row `}>
                        <img
                          src={home2}
                          className={`rounded-circle w-100 ms-3 mt-2`}
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                          }}
                          alt="golden hours "
                        />
                      </div>
                      <div className="d-flex flex-column p-0 m-0 ms-3 mt-2">
                        <p className={`text-white text-sm font-medium mb-0 `}>
                          سالم أحمد
                        </p>
                        <p className={`text-gray-500 text-xs font-normal`}>
                          ١٥ يناير ٢٠٢٦
                        </p>
                      </div>
                    </div>

                    <div className="rounded-circle px-4 py-1 font-medium  main-color d-flex justify-content-center align-items-center ">
                      <span> اقرا المقال</span>
                      <i className="fa-solid fa-arrow-left fs-6 "></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col content-details flex-row d-flex">
                <div
                  className="image-wrapper overflow-hidden position-relative"
                  style={{ width: "50%" }}
                >
                  <img
                    src={home3}
                    className="w-100"
                    alt="golden our photography"
                  />
                  <span className="badge rounded-3 px-3 py-1 ">
                    {" "}
                    <i
                      className="fa-solid fa-star text-xs
"
                    ></i>{" "}
                    مميز{" "}
                  </span>
                </div>

                <div className="col d-flex flex-column card-home">
                  <div className="card-body px-3 ">
                    <div className="d-flex flex-row mt-5 gap-3">
                      <div className=" px-4 py-1 rounded-4  angle-left d-flex justify-content-center align-items-center text-sm font-normal ">
                        بورتريه
                      </div>
                      <span className="text-gray-500 text-md font-normal ">
                        <i className="fa-regular fa-clock text-gray-400  font-normal me-1">
                          {" "}
                        </i>
                        6 دقائق للقراءه
                      </span>
                    </div>
                    <Link className={`text-decoration-none  `} to="">
                      {" "}
                      <h5
                        className=" text-xl
   text-white font-bold  content-title
    mt-3 px-2"
                      >
                        أسرار تصوير البورتريه: كيف تلتقط روح الشخصية{" "}
                      </h5>
                    </Link>
                    <p
                      className="card-text text-sm mt-3  text-gray-500
   font-normal text-wrap px-2   "
                    >
                      اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن
                      شخصية الموضوع الحقيقية.
                    </p>
                  </div>

                  <div className="card-footer-home   pb-3 d-flex flex-row justify-content-between align-items-center">
                    <div className="card-footer d-flex flex-row ">
                      <div className={`d-flex flex-row `}>
                        <img
                          src={home4}
                          className={`rounded-circle w-100 ms-3 mt-2`}
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                          }}
                          alt="golden hours "
                        />
                      </div>
                      <div className="d-flex flex-column p-0 m-0 ms-3 mt-2">
                        <p className={`text-white text-sm font-medium mb-0 `}>
                          محمد علي
                        </p>
                        <p className={`text-gray-500 text-xs font-normal`}>
                          ١٢ يناير ٢٠٢٦
                        </p>
                      </div>
                    </div>

                    <div className="rounded-circle  px-4 py-1 font-medium  main-color d-flex justify-content-center align-items-center ">
                      <span> اقرا المقال</span>
                      <i className="fa-solid fa-arrow-left fs-6 "></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col content-details flex-row d-flex mb-5 pb-5">
                <div
                  className="image-wrapper overflow-hidden position-relative"
                  style={{ width: "50%" }}
                >
                  <img
                    src={home5}
                    className="w-100"
                    alt="golden our photography"
                  />
                  <span className="badge rounded-3 px-3 py-1 ">
                    {" "}
                    <i
                      className="fa-solid fa-star text-xs
"
                    ></i>{" "}
                    مميز{" "}
                  </span>
                </div>

                <div className="col d-flex flex-column card-home">
                  <div className="card-body px-3 ">
                    <div className="d-flex flex-row mt-5 gap-3">
                      <div className=" px-5 py-2 text-nowrap rounded-4  angle-left d-flex justify-content-center align-items-center text-sm font-normal ">
                        مناظر طبيعيه
                      </div>
                      <span className="text-gray-500 text-md font-normal ">
                        <i className="fa-regular fa-clock text-gray-400  font-normal me-1">
                          {" "}
                        </i>
                        10 دقائق للقراءه
                      </span>
                    </div>
                    <Link className={`text-decoration-none  `} to="">
                      {" "}
                      <h5
                        className=" text-xl
   text-white font-bold
    mt-3 px-2  content-title"
                      >
                        دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف{" "}
                      </h5>
                    </Link>
                    <p
                      className="card-text text-sm mt-3  text-gray-500
   font-normal text-wrap px-2   "
                    >
                      استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط
                      جمال الطبيعة بعدستك.
                    </p>
                  </div>

                  <div className="card-footer-home pb-3   d-flex flex-row justify-content-between align-items-center">
                    <div className="card-footer d-flex flex-row ">
                      <div className={`d-flex flex-row `}>
                        <img
                          src={home6}
                          className={`rounded-circle w-100 ms-3 mt-2`}
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                          }}
                          alt="golden hours "
                        />
                      </div>
                      <div className="d-flex flex-column p-0 m-0 ms-3 mt-2">
                        <p className={`text-white text-sm font-medium mb-0 `}>
                          إبراهيم حسن
                        </p>
                        <p className={`text-gray-500 text-xs font-normal`}>
                          ١٠ يناير ٢٠٢٦
                        </p>
                      </div>
                    </div>

                    <div className="rounded-circle  px-4 py-1 font-medium  main-color d-flex justify-content-center align-items-center ">
                      <span> اقرا المقال</span>
                      <i className="fa-solid fa-arrow-left fs-6 "></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 3 */}
      <section className={`${style.seondsectionabout} text-center  p-5 `}>
        <div
          className={`${style.blog} mt-4 px-2 d-flex flex-row     justify-content-center align-items-center gap-1 rounded-5`}
        >
          <div className="spinner-grow spinner-grow-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>

          <span className="main-color ">التصنيفات</span>
        </div>
        <div className={`fw-bold ${style.ourvalueh1} text-white mt-4`}>
          <h2 className={`${style.numbericon}  section2-h2 `}>
            {" "}
            استكشف حسب الموضوع{" "}
          </h2>{" "}
          <span className={`${style.numbericon}`}></span>
        </div>
        <p className={`${style.fontgray} text-lg text-gray-400 mt-3`}>
          اعثر على محتوى مصمم حسب اهتماماتك
        </p>
        <div className="container-fluid  w-75">
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4  gx-4  ">
            <div className="col">
              <Link className="text-decoration-none" to="/blog/lights">
                <div
                  className={`${style.aboutcard} mt-5 d-flex flex-column align-items-start px-4 py-3  justify-content-center  `}
                >
                  
                  <div className="d-flex justify-content-between w-100 align-items-center flex-row">
                    <span className={`${style.categoryicon}`}>
                      <i className="fa-solid fa-gear main-color "></i>
                    </span>

                    <div
                      className={`rounded-circle  ${style.angleleft} d-flex justify-content-center align-items-center me-3    `}
                    >
                      <i className="fa-solid fa-angle-left fs-6 text-orange  "></i>
                    </div>
                  </div>

                  <span className="text-white fs-5 fw-semibold mt-1">
                    إضاءة{" "}
                  </span>
                  <span className="font-gray fs14 mt-1">3 مقالة </span>
                </div>
              </Link>
            </div>

            <div className="col  ">
              <Link className="text-decoration-none" to="/blog/portrait">
                <div
                  className={`${style.aboutcard} mt-5 d-flex flex-column align-items-start p-4 py-3  justify-content-center `}
                >
                  <div className="d-flex justify-content-between w-100 align-items-center flex-row">
                    <span className={`${style.categoryicon}`}>
                      <i className="fa-solid fa-user main-color "></i>
                    </span>

                    <div
                      className={`rounded-circle  ${style.angleleft} d-flex justify-content-center align-items-center me-3    `}
                    >
                      <i className="fa-solid fa-angle-left fs-6 text-orange  "></i>
                    </div>
                  </div>

                  <span className=" text-white fs-5 fw-semibold mt-1">
                    بورتريه{" "}
                  </span>
                  <span className="font-gray fs14 mt-1"> 3 مقالة</span>
                </div>
              </Link>
            </div>

            <div className="col">
              <Link className="text-decoration-none" to="/blog/landscapes">
                <div
                  className={`${style.aboutcard}  mt-5 d-flex flex-column align-items-start p-4 py-3  justify-content-center  `}
                >
                  <div className="d-flex justify-content-between w-100 align-items-center flex-row">
                    <span className={`${style.categoryicon}`}>
                      <i className="fa-solid fa-mountain main-color "></i>
                    </span>

                    <div
                      className={`rounded-circle  ${style.angleleft} d-flex justify-content-center align-items-center me-3    `}
                    >
                      <i className="fa-solid fa-angle-left fs-6 text-orange  "></i>
                    </div>
                  </div>

                  <span className="text-white fs-5 fw-semibold  mt-1">
                    مناظر طبيعية{" "}
                  </span>
                  <span className="font-gray fs14 mt-1"> 2 مقالة</span>
                </div>
              </Link>
            </div>

            <div className="col">
              <Link className="text-decoration-none" to="/blog/technologies">
                <div
                  className={`${style.aboutcard} mt-5 d-flex flex-column align-items-start p-4 py-3  justify-content-center`}
                >
                  <div className="d-flex justify-content-between w-100 align-items-center flex-row">
                    <span className={`${style.categoryicon}`}>
                      <i className="fa-solid fa-sliders main-color "></i>
                    </span>

                    <div
                      className={`rounded-circle  ${style.angleleft} d-flex justify-content-center align-items-center me-3    `}
                    >
                      <i className="fa-solid fa-angle-left fs-6 text-orange  "></i>
                    </div>
                  </div>

                  <span className="text-white fs-5 fw-semibold mt-1">
                    تقنيات{" "}
                  </span>
                  <span className="font-gray fs14 mt-1">5 مقالة</span>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link className="text-decoration-none" to="/blog/equipment">
                <div
                  className={`${style.aboutcard} mt-5 d-flex flex-column align-items-start p-4 py-3  justify-content-center `}
                >
                  <div className="d-flex justify-content-between w-100 align-items-center flex-row">
                    <span className={`${style.categoryicon}`}>
                      <i className="fa-solid fa-gear main-color "></i>
                    </span>

                    <div
                      className={`rounded-circle  ${style.angleleft} d-flex justify-content-center align-items-center me-3    `}
                    >
                      <i className="fa-solid fa-angle-left fs-6 text-orange  "></i>
                    </div>
                  </div>
                  <span className="text-white fs-5 fw-semibold mt-1">
                    معدات{" "}
                  </span>
                  <span className="font-gray fs14 mt-1">3 مقالة</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* section 4 */}

      <section className="section-four-home   p-5">
        <div className="container">
          <div className="title">
            <div className="welcome-adasa  mt-5 d-flex flex-row justify-content-center align-items-center gap-1 rounded-5">
              <div className="spinner-grow spinner-grow-sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow spinner-grow-sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>

              <span className="regular p-0">الأحدث </span>
            </div>
            <h2
              className=" text-white section2-h2  mt-2
"
            >
              أحدث المقالات{" "}
            </h2>
            <div className="d-flex flex-row justify-content-between align-items-center ">
              <p
                className="text-base font-medium text-gray-50 mt-2
"
              >
                محتوى جديد طازج من المطبعة{" "}
              </p>

              <NavLink
                className={`me-5 px-4 py-2 rounded-4 main-bg text-white text-decoration-none text-nowrap d-inline-flex align-items-center`}
                to="/blog"
              >
                عرض جميع المقالات
                <i className="fa-solid fa-arrow-left fs-6 "></i>
              </NavLink>
            </div>
          </div>

          <div
            className="row row-cols-1 row-cols-lg-3 row-cols-md-2 gy-4  mb-5
  mt-4"
          >
            {featuredPosts.map((post) => (
              <div className="col"   key={post.id}>
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
            ))}
          </div>
        </div>
      </section>

      {/* section 5  */}

      <section className="section-five-home ">
        <div className="container ">
        <div className=" w-4xl mx-auto py-4 rounded-4 px-0  dark-gray d-flex flex-column justify-content-center align-items-center">
            <span className="envelope mt-4 d-flex text-white fs-4 rounded-4 justify-content-center align-items-center">
            <i className="fa-regular fa-envelope"></i>
          </span>
          <h2 className={`text-white fw-bold text-4xl mt-4  mb-2`}>
            {" "}
            اشترك في{" "}
            <span className="art-title">
              {" "}
              نشرتنا{" "}
              <span
                className={`${style.inspiration}   bg-clip-text
`}
              >
                {" "}
                الإخبارية{" "}
              </span>{" "}
            </span>{" "}
          </h2>
          <p className="fw-normal p mt-2  text-lg ">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
            الإلكتروني
          </p>

          <div className="row g-2 align-items-center mt-3">
            <div className="col col-sm-12 col-md-9 ">
              <input
                type="email"
                className="searchinput bloglink py-3 text-right px-2  w-md rounded-3 "
                placeholder="أدخل بريدك الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit();
                  }
                }}
              />

     {error && (
  <div
    className="alert alert-light px-5 d-flex align-items-center justify-content-end py-0"
    role="alert"
  
  >
    <span className="me-2 text-nowrap ">{error}</span>
   <i class="fa-solid fa-exclamation   text-amber-600 px-3 py-1 rounded-3 fs-4 icon-error"></i>
  </div>
)}
            </div>

            <div className="col  col-sm-12 col-md-3 d-flex align-items-center ">
              <button
                className="subscribe-now fw-normal fw-semibold text-base ms-3  text-decoration-none text-white py-3 px-3 rounded-3 text-center"
                onClick={handleSubmit}
              >
                اشترك الآن
              </button>
            </div>
          </div>

          <div className="d-flex flex-row justify-between gap-6 align-items-center mt-3 pb-5">
            <div className="d-flex flex-row justify-content-caenter gap-1 align-items-center">
              <img src={home2} className="rounded-circle w-100 " alt="user" />
              <img src={home4} className="rounded-circle w-100 " alt="user" />
              <img src={home6} className="rounded-circle w-100 " alt="user" />
            </div>

            <span className="text-gray-600 fw-normal text-sm">
              انضم لـ <span className="fw-medium text-white ">+10,000 </span>
              مصور
            </span>

            <span className="text-gray-600 fw-normal  text-sm">بدون إزعاج</span>
            <span className="text-gray-600  fw-normal text-sm">
              إلغاء الاشتراك في أي وقت
            </span>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
