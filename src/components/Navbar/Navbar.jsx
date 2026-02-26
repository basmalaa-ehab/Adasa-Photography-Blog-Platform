import { NavLink, Link } from "react-router-dom";
import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top ">
        <div className="container px-5 py-0 ">
          <div className="d-flex justify-content-between w-100 align-items-center ">
            <Link className="navbar-brand d-flex flex-row gap-1" to="#">
              <img
                src="/logo-GdqARQRt.png"
                alt="Logo"
                width="48"
                height="48"
                className="rounded-circle object-contain align-text-top"
              />
              <div className="d-flex flex-column">
                <span className={` ${style.adasa}   `}>عدسة</span>
                <p className={`   ${style.worldofadasa}   main-color     `}>
                  عالم التصوير الفوتوغرافي
                </p>
              </div>
            </Link>

            <div className="navlinks   d-flex flex-row gap-3  align-items-center justify-content-center px-3 py-1   rounded-5 ">
              <NavLink
  to="/"
  className={({ isActive }) =>
    `text-decoration-none font text-sm hover:text-white ${isActive ? style.active : ""}`
  }
>
  الرئيسية
</NavLink>

<NavLink
  to="blog"
  
  className={({ isActive }) =>
    `text-decoration-none font text-sm hover:text-white ${isActive ? style.active : ""}`
  }
>
  المدونة
</NavLink>

<NavLink
  to="about"
  className={({ isActive }) =>
    `text-decoration-none font text-sm hover:text-white ${isActive ? style.active : ""}`
  }
>
  من نحن
</NavLink>

            </div>
            <div className="d-flex justify-content-center align-items-center  gap-2">
              <i className="fa-solid fa-magnifying-glass fs-6  searchbutton  d-flex justify-content-center rounded-2 p-4"></i>
              <Link className="text-decoration-none " to="blog">
                {" "}
                <button className="text-white  main-bg py-2 px-4 rounded-5 start-read-button">
                  {" "}
                  ابدأ القراءة{" "}
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
