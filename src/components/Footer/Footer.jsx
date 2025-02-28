import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <div>
          <img src="/src/assets/footer-icons/tour buddy.png" alt="" />
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1 flex">
              <img className="w-6 h-6" src="/src/assets/images/uk.png" alt="" />
              <h1 className="flex gap-5">English (UK) <span><MdOutlineArrowDropDown></MdOutlineArrowDropDown></span></h1>
            </div>
            <div
              tabIndex={0}
              className="dropdown-content card card-sm bg-base-100 z-1 w-64 shadow-md"
            >
              <div className="card-body">
                <h3>Uk</h3>
                <h3>USA</h3>
                <h3>Bangladesh</h3>
                <h3>India</h3>
                <h3>Pakistan</h3>
                <h3>Argentina</h3>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              <h1 className="flex gap-12">U.S Dollar($) <span><MdOutlineArrowDropDown></MdOutlineArrowDropDown></span></h1>
            </div>
            <div
              tabIndex={0}
              className="dropdown-content card card-sm bg-base-100 z-1 w-64 shadow-md"
            >
              <div className="card-body">
                <h3>GBP</h3>
                <h3>USD</h3>
                <h3>BDT</h3>
                <h3>Rupayya</h3>
                <h3>PKR</h3>
                <h3>PESO</h3>
              </div>
            </div>
          </div>
        </div>

        <div>
          <nav className="flex flex-col">
            <h6 className="footer-title">Payment</h6>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Press Room</a>
            <a className="link link-hover">careers</a>
          </nav>
        </div>
        <div>
          <nav className="flex flex-col">
            <h6 className="footer-title">Help</h6>
            <a className="link link-hover">Contact Us</a>
            <a className="link link-hover">FAQs</a>
            <a className="link link-hover">Terms & conditions</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Sidemap</a>
          </nav>
        </div>
        <div>
          <nav className="flex flex-col">
            <h6 className="footer-title mb-4">Payment methods possible</h6>
            <div className="grid grid-cols-5 mb-4">
                <img src="/src/assets/footer-icons/image 27.png" alt="" />
                <img src="/src/assets/footer-icons/image 28.png" alt="" />
                <img src="/src/assets/footer-icons/image 29.png" alt="" />
                <img src="/src/assets/footer-icons/image 30.png" alt="" />
                <img src="/src/assets/footer-icons/image 31.png" alt="" />
                <img src="/src/assets/footer-icons/image 34.png" alt="" /> 
                <img src="/src/assets/footer-icons/image 33.png" alt="" />
                <img src="/src/assets/footer-icons/image 35.png" alt="" />
                <img src="/src/assets/footer-icons/image 36.png" alt="" />
                <img src="/src/assets/footer-icons/image 37.png" alt="" />
            </div>
            <p>Become a Tour guide for Us</p>
          </nav>
        </div>
      </footer>
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4 flex justify-between">
        
         
          <p>
          Copyright 2025 Tour Buddy. All Rights Reserved
          </p>
          <div className="flex">
            <FaFacebookF></FaFacebookF>
            <FaInstagram></FaInstagram>
            <FaTwitter></FaTwitter>
            <FaPinterest></FaPinterest>
          </div>
       
        
      </footer>
    </div>
  );
};

export default Footer;
