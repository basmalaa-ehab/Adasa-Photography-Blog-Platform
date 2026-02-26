import React from "react";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div>
      <div className="col-12 text-center mt-5 bg-grid  d-flex flex-column mx-auto justify-content-center align-items-center">
        <div className="bg-light-orange three"></div>

        <div className="d-flex flex-column mx-auto justify-content-center align-items-center p-5 rounded-4  bg-opacity-75">
          <h1 className="text-white error  mt-2">404</h1>
          <span className=" no-search-icon rounded-circle  d-flex  justify-content-center align-items-center">
            {" "}
            <i className="fa-regular fa-face-sad-tear fs-1 "></i>
          </span>{" "}
          <h4 className="text-white text-2xl fw-bold  mt-2">
            عفواً! الصفحة غير موجودة
          </h4>
          <p className="text-gray-400 text-nowrap mt-2">
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار
            الصحيح.
          </p>
          <div className="d-flex flex-row gap-2 mt-5 z-10 ">
            <button className=" main-bg text-white   rounded-5 py-3 px-4 fs-6 fw-semibold explore-more-btn ">
              <Link className="text-decoration-none text-white link" to="/">
                <i className="fa-solid fa-home"></i>
                الذهاب للرئيسية
              </Link>
            </button>

            <button className="  text-white btn-know-more rounded-5 py-3 px-4 fs-6 fw-semibold">
              {" "}
              <Link
                className="text-decoration-none text-white link "
                to="/blog"
              >
                <i className="fa-solid fa-book info-icon "></i> تصفح المقالات
              </Link>
            </button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
