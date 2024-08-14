import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Switcher from "../../components/Swithcer";

const Layout = () => {
  let { pathname } = useLocation();
  return (
    <div>

      <nav className="header flex justify-around py-[20px] bg-rose-200 dark:bg-slate-800 dark:text-[#fff]">
        <div className="mt-[10px]">
          <h1 className="text-[40px] font-mono font-bold">Wag & Bone</h1>
        </div>
        <div className="flex w-[500px] justify-around">
          <div className="all flex">
            <ul className="flex justify-around w-[300px] items-center font-medium">
              <Link to="/" className="dark:text-[#fff]">
                <li style={{ color: pathname == "/" ? "white" : "black" }}>
                  About Us
                </li>
              </Link>
              <Link to="/Courses" className="dark:text-[#fff]">
                <li style={{ color: pathname == "/Courses" ? "white" : "black" }}>
                  Courses
                </li>
              </Link>
              <Link to="/Blog" className="dark:text-[#fff]">
                <li style={{ color: pathname == "/Blog" ? "white" : "black" }}>
                  Blog
                </li>
              </Link>
              <Link to="/contact" className="dark:text-[#fff]">
                <li style={{ color: pathname == "/contact" ? "white" : "black" }}>
                  Contact
                </li>
              </Link>
            </ul>
          </div>

          <div className="m-auto">
            <Switcher />
          </div>
          <div className="justify-center flex flex-col">
            <button className="px-[20px] py-[8px] font-bold text-center text-[#fff] bg-[#0b0b45] rounded-[4px]">
              Get consultation
            </button>
          </div>
        </div>
      </nav>

      <div>
        <Outlet />
      </div>

      <footer className="bg-[#0b0b45] dark:bg-slate-900 dark:text-[#fff]">
        <section className="flex text-[#fff] justify-around px-[30px] py-[70px]">
          <div className="flex flex-col gap-3">
            <h1 className="font-mono text-[30px]">Wag & Bone</h1>
            <p className="text-[10px] w-[260px]">Turkey hypoallergenic recipe and also Gelert country choice grain free hypoallergenic salmon and sweet potato.</p>
          </div>

          <div className="flex flex-col gap-4">
            <ul className="one">
              <Link to="/">
                <li className=" mt-[3px] text-[13px]">About Us</li>
              </Link>
              <Link to="/Courses">
                <li className=" mt-[3px] text-[13px]">Courses</li>
              </Link>
              <Link to="/Blog">
                <li className=" mt-[3px] text-[13px]">Blog</li>
              </Link>
              <Link to="/Contact">
                <li className=" mt-[3px] text-[13px]">Contacts</li>
              </Link>
            </ul>
            <button className="px-[20px] py-[8px] font-bold text-center text-[#fff] bg-[#1f1fbc] rounded-[4px]">
              Get consultation
            </button>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col ">
              <h1 className="text-[13px]">Subscribe to our sites and learn more</h1>
              <div className="flex gap-3 pt-[5px]">
                <img className="w-[25px]" src="src/img/instagram(1).png" alt="Instagram Icon" />
                <img className="w-[25px]" src="src/img/facebook.png" alt="facebook Icon" />
                <img className="w-[25px]" src="src/img/twitter.png" alt="twitter Icon" />
              </div>
            </div>
            <div>
              <h1 className="text-[13px]">We are always at your service. Good luck</h1>
              <div className="flex pt-[7.5px]">
                <input className="bg-[#0b0b45] border-[2px] rounded-l-md outline-none text-[15px] w-[200px] h-[37px] dark:bg-slate-800 dark:text-[#fff]" type="text" name="" id="" placeholder=" Email..." />
                <div className=" border-[2px] border-l-white py-[4px] px-[10px] items-center flex rounded-r-md">
                  <img className="w-[20px] h-[17px] text-[#fff]" src="src/img/right(1).png" alt="" />
                </div>
              </div>
            </div>
          </div>

        </section>
      </footer>

    </div>
  );
};

export default Layout;
