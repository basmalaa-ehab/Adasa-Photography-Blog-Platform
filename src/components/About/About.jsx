import React from "react";
import style from "./About.module.css";
import { Link, NavLink } from "react-router-dom";
 
export default function About() {
  return (
    <div>
      <main className={`About-section`}>



        {/* section 1 */}

        <section id="thefirstabout" className={`${style.mtnavbar} bg-grid p-3   pt-5`}>
          <div className="bg-light-orange one"></div>
          <div className="d-flex justify-content-center align-items-center text-white ">
            <div className="welcome-adasa p-3 mt-4 d-flex flex-row justify-content-center align-items-center gap-1 rounded-5">
              <div className="spinner-grow spinner-grow-sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow spinner-grow-sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>

              <span className="regular">من نحن</span>
            </div>
          </div>
          <div className="text-white d-flex flex-column align-items-center text-center p-5">
            <h1 className={`${style.fsh1} mb-2`}>
              {" "}
              مهمتنا هي{" "}
              <span className="art-title">
                {" "}
                الإعلام{" "}
                <span className={`${style.inspiration}   bg-clip-text
`}>والإلهام</span>{" "}
              </span>{" "}
            </h1>

            <p className="mt-4 fs-5 text-wrap font-gray px-5">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية <br />  لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
              المصورين على تنمية مهاراتهم من  <br /> 
      خلال محتوى عالي الجودة.{" "}
            </p>

            <div className="row row-cols-1   text-sm-center text-md-center row-cols-sm-2 row-cols-md-2 row-cols-xl-4  mt-3">
              <div className="col">
                <div
                  className={`${style.herocard} d-flex flex-column align-items-center text-center justify-content-center  `}
                >
                  <i className="fa-solid fa-book main-color fs-4"></i>
                  <span className="art-title fs-4 fw-bold">+2مليون</span>
                  <span className="font-gray">قارئ شهرياً</span>
                </div>
              </div>

              <div className="col">
                <div
                  className={`${style.herocard} d-flex flex-column align-items-center text-center justify-content-center  `}
                >
                  <i className="fa-solid fa-users main-color fs-4"></i>
                  <span className="art-title fs-4 fw-bold">+500</span>
                  <span className="font-gray">مقالة منشورة</span>
                </div>
              </div>

              <div className="col">
                <div
                  className={`${style.herocard} d-flex flex-column align-items-center text-center justify-content-center  `}
                >
                  <i className="fa-solid fa-folder main-color fs-4"></i>
                  <span className="art-title fs-4 fw-bold">+50</span>
                  <span className="font-gray">كاتب خبير</span>
                </div>
              </div>

              <div className="col">
                <div
                  className={`${style.herocard} d-flex flex-column align-items-center text-center   justify-content-center`}
                >
                  <i className="fa-solid fa-pen-nib main-color fs-4"></i>
                  <span className="art-title fs-4 fw-bold">+15</span>
                  <span className="font-gray">تصنيف</span>
                </div>
              </div>
            </div>
          </div>
        </section>
{/* section 2  */}

        <section className={`${style.seondsectionabout} text-center  p-5 `}>
          <h2 className={`fw-bold ${style.ourvalueh1} text-white mt-4`}>
            <span className={`${style.numbericon}`}></span> قيمنا{" "}
            <span className={`${style.numbericon}`}></span>
          </h2>
          <p className={`${style.fontgray} mt-3`}>
            المبادئ التي توجه كل ما نقوم بإنشائه
          </p>
          <div className="container-fluid  w-75">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4  ">
              <div className="col">
                <div
                  className={`${style.aboutcard} mt-5 d-flex flex-column align-items-center g-0 p-0 text-center justify-content-center  `}
                >
                  <i className="fa-solid fa-book main-color fs-4"></i>
                  <span className="text-white fs-5 fw-semibold mt-1">
                    الجودة أولاً
                  </span>
                  <span className="font-gray fs14 mt-1">
                    محتوى مدروس ومكتوب بخبرة
                  </span>
                </div>
              </div>

              <div className="col  ">
                <div
                  className={`${style.aboutcard} mt-5 d-flex flex-column align-items-center text-center justify-content-center  `}
                >
                  <i className="fa-solid fa-users main-color fs-4"></i>
                  <span className=" text-white fs-5 fw-semibold mt-1">
                    تركيز عملي
                  </span>
                  <span className="font-gray fs14 mt-1">
                    {" "}
                    أمثلة واقعية يمكنك تطبيقها اليوم
                  </span>
                </div>
              </div>

              <div className="col">
                <div
                  className={`${style.aboutcard}  mt-5 d-flex flex-column align-items-center text-center justify-content-center  `}
                >
                  <i className="fa-solid fa-folder main-color fs-4"></i>
                  <span className="text-white fs-5 fw-semibold  mt-1">
                    المجتمع
                  </span>
                  <span className="font-gray fs14 mt-1">
                    {" "}
                    تعلم مع آلاف المصورين
                  </span>
                </div>
              </div>

              <div className="col">
                <div
                  className={`${style.aboutcard} mt-5 d-flex flex-column align-items-center text-center   justify-content-center`}
                >
                  <i className="fa-solid fa-pen-nib main-color fs-4"></i>
                  <span className="text-white fs-5 fw-semibold mt-1">
                    دائماً محدث
                  </span>
                  <span className="font-gray fs14 mt-1">
                    أحدث الاتجاهات وأفضل الممارسات
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* section 3  */}
        <section className={`${style.sectionthree} p-5`}>
         <div className="titlethree   d-flex  flex-column align-items-center gap-2 g-2  justify-content-center text-center">
        
         <div className="welcome-adasa  d-flex flex-row justify-content-center text-center align-items-center gap-3 rounded-5">
          
           <div className=" d-flex flex-row justify-content-center text-center align-items-center">
             <div className="spinner-grow spinner-grow-sm" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow spinner-grow-sm" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>

            <span className="regular fle">فريقنا</span></div>
          </div>
          <h2 className={`text-white mt-1`}>تعرف على كتابنا</h2>

           <p className={`${style.fontgray} mt-3`}>
فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.

          </p>
         </div>

{/* 
<div className="container">
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
<div className={`${style.item} rounded-3 w-25 p-5 text-center py-2  `}>
  <div className={`imgwrapper position-relative`}>
    <img className={`${style.imgabout} position-relative rounded-circle mt-2`} src="" alt="" />
<span className={`${style.checkicon}  position-absolute`}><i className={`${style.icon}  fa-solid fa-check`}></i></span>
  </div>
  <h3 className="fs-5 text-white fw-bold mt-2">title</h3>
  <p className="main-color fs14">job</p>
  <div className="d-flex flex-row justify-content-center gap-4">
<a  to="#thefirstabout" >
<i className={`fa-brands fa-x text-white ${style.brandicon}`}></i>
</a>
<a href="#thefirstabout">
<i className={`fa-brands fa-github text-white ${style.brandicon}`}></i>
</a>
<a  href="#thefirstabout">
<i className={`fa-brands fa-linkedin text-white ${style.brandicon}`}></i>
</a>
  </div>
</div>
  </div>
</div> */}



        </section>
      </main>
    </div>
  );
}
