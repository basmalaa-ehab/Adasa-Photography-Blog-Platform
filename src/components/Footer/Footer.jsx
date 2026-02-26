import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
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
      <footer className="mybordertop">
        <div className="container w-75 pt-4">
          <div className="row row-cols-1 row-cold-md-1 row-cols-lg-4 ">
            <div className="col ">
              <div className="d-flex flex-column justify-content-center align-items-start py-3 text-start ">
                <div className="d-flex justify-center align-items-center flex-row gap-3">
                  <span className="text-white font-bold text-base rounded-3 px-3 py-2 bg-orange-500  d-flex justify-content-center align-items-center">
                    ع
                  </span>
                  <span className="font-bold text-xl text-white">عدسة</span>
                </div>
                <p className="text-wrap text-sm font-normal text-gray-400 mt-3">
                  مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                  المحترفين ونصائح عملية لتطوير مهاراتكم.
                </p>
                <div className="links mt-3 d-flex justify-center align-items-center flex-row gap-3 ">
                  <a
                    target="_blank"
                    href="https://x.com/adasah"
                    className="px-2 py-2  brands d-flex- justify-content-center align-items-center rounded-3"
                  >
                    <i className="fa-brands fa-x text-xl font-normal "></i>
                  </a>

                  <a
                    target="_blank"
                    href="https://github.com/adasah"
                    className="px-2 py-2  brands d-flex- justify-content-center align-items-center rounded-3"
                    to=""
                  >
                    <i className="fa-brands fa-github text-xl font-normal text-gray-400"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/@adasah"
                    className="px-2 py-2  brands d-flex- justify-content-center align-items-center rounded-3"
                    to=""
                  >
                    <i className="fa-brands fa-linkedin text-xl font-normal text-gray-400"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/adasah?_l=en_US"
                    className="px-2 py-2  brands d-flex- justify-content-center align-items-center rounded-3"
                    to=""
                  >
                    <i className="fa-brands fa-youtube text-xl font-normal text-gray-400"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col ">
              <div className="item d-flex flex-column mt-4 ms-5">
                <h3 className="text-white fs-6 font-bold position-relative ms-5 ">
                  استكشف <span className={`numbericon ms-3 footer-link`}></span>
                </h3>

                <Link
                  className="  ms-3 footer-link text-sm font-normal text-decoration-none mt-2"
                  to="/"
                >
                  <span  className=" text-gray-500"   >       <i className="fa-solid fa-angle-left text-xs text-orange-400  me-3 footer-icon "></i>      الرئيسية              
      </span>
                </Link>
                <Link
                  className=" footer-link  ms-3   text-sm font-normal text-decoration-none mt-2"
                  to="blog"
                >
                  <span  className=" text-gray-500">         <i className="fa-solid fa-angle-left text-xs text-orange-400  me-3 footer-icon "></i>      المدونة
</span>
                </Link>
                <Link
                  className=" footer-link  text-sm font-normal  ms-3 text-decoration-none mt-2"
                  to="about"
                >
                  <span  className=" text-gray-500"   >      <i className="fa-solid fa-angle-left text-xs text-orange-400  me-3 footer-icon "></i>       من نحن      </span>
                </Link>
              </div>
            </div>


            
            <div className="col ">
              <div className="item d-flex flex-column mt-4 ms-5">
                <h3 className="text-white fs-6 font-bold position-relative ms-5 ">
                  التصنيفات <span className={`numbericon ms-3`}></span>
                </h3>

                <Link
                  className="footer-link  text-start ms-3   text-sm font-normal text-decoration-none mt-2"
                  to="/blog/lights"
                >
                  <span  className=" text-gray-500"   >      <i className="fa-solid fa-angle-left text-xs text-orange-400 me-3 footer-icon "></i>          إضاءة</span>
                </Link>
                <Link
                  className=" footer-link text-sm font-normal ms-3  text-start  text-decoration-none mt-2"
                  to="/blog/portrait"
                >
                  <span  className=" text-gray-500">      <i className="fa-solid fa-angle-left text-xs text-orange-400  me-3 footer-icon "></i>        بورتريه
</span>
                </Link>
                <Link
                  className=" footer-link  text-sm font-normal ms-3  text-start text-decoration-none mt-2"
                  to="/blog/landscapes"
                >
                  <span  className=" text-gray-500" >       <i className="fa-solid fa-angle-left text-xs text-orange-400  me-3 footer-icon "></i>   مناظر طبيعية
</span>
                </Link>
                <Link
                  className=" footer-link  text-sm font-normal ms-3  text-start text-decoration-none mt-2"
                  to="/blog/technologies"
                >
                  <span  className=" text-gray-500" >       <i className="fa-solid fa-angle-left text-xs text-orange-400  me-3 footer-icon "></i>   تقنيات</span>
                </Link>
              </div>
            </div>


<div className="col">
  <div className="item  d-flex flex-column mt-4 ms-5">
       <h3 className="text-white fs-6 font-bold position-relative ms-5 ">
                  ابقى على اطلاع <span className={`numbericon ms-3`}></span>
                </h3>
 <p className="text-wrap text-sm font-normal text-gray-400 mt-3">
                اشترك للحصول على أحدث المقالات والتحديثات.


                </p>




<div className="d-flex flex-column justify-content-center ">
  
 <div className=" ">
              <input
                type="email"
                className="searchinput bloglink py-3 text-right px-2  w-100 rounded-3 "
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
    className="alert alert-light w-100 d-flex align-items-center justify-content-end py-0"
    role="alert"
  
  >
    <span className="me-2 text-wrap ">{error}</span>
      <i class="fa-solid fa-exclamation   text-amber-600 px-3 py-1 rounded-3 fs-4 icon-error"></i>

  </div>
)}
            </div>

            <div className=" d-flex align-items-center mt-3">
              <button
                className="subscribe-now fw-normal fw-semibold w-xl text-base ms-3  text-decoration-none text-white py-3 px-9 rounded-5 text-center"
                onClick={handleSubmit}
              >
                اشترك 
              </button>
            </div>


</div>




  </div>
</div>


          </div>
     

        </div>
             
<div className=" mt-3 mybordertop w-100">
<div className=" container mt-3 d-flex justify-content-between">
  <div><p>© 2026 عدسة. صنع بكل  <i className="fa-solid fa-heart main-color"></i>جميع الحقوق محفوظة.</p>
</div>
<div>
  <a  className="  ms-3 footer-link text-sm font-normal text-decoration-none mt-2" href="#"><span className=" text-gray-500">سياسة الخصوصية
</span> 
</a>
  <a  className="  ms-3 footer-link text-sm font-normal text-decoration-none mt-2" href="#"><span className=" text-gray-500">شروط الخدمة</span> 
</a>
</div>
</div>




</div>
      </footer>
    </div>
  );
}
