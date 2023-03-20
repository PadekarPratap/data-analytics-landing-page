import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaReact,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-gray-500 container mx-auto grid lg:grid-cols-3 py-5 px-8 gap-6">
      <div>
        <div>
          <h1 className="text-parrotGreen text-4xl font-bold">REACT.</h1>
          <p className="text-sm text-white pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            optio perferendis ducimus doloribus saepe, similique cum, est
            assumenda blanditiis sequi modi minima nihil culpa alias amet quidem
            odit. Asperiores dolores sit ex impedit doloremque explicabo.
          </p>
        </div>
        <div className="flex justify-between w-[75%] mt-8 text-gray-400">
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaReact size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between gap-3 md:gap-10 mt-10">
        <div>
            <h4 className="text-lg text-gray-700">Solutions</h4>
            <ul>
                <li className=" py-2 text-sm text-gray-200">Analytics</li>
                <li className=" py-2 text-sm text-gray-200">Marketing</li>
                <li className=" py-2 text-sm text-gray-200">Commerce</li>
                <li className=" py-2 text-sm text-gray-200">Insights</li>
            </ul>
        </div>
        <div>
            <h4 className="text-lg text-gray-700">Support</h4>
            <ul>
                <li className=" py-2 text-sm text-gray-200">Pricing</li>
                <li className=" py-2 text-sm text-gray-200">Documentation</li>
                <li className=" py-2 text-sm text-gray-200">Guides</li>
                <li className=" py-2 text-sm text-gray-200">API Status</li>
            </ul>
        </div>
        <div>
            <h4 className="text-lg text-gray-700">Company</h4>
            <ul>
                <li className=" py-2 text-sm text-gray-200">About</li>
                <li className=" py-2 text-sm text-gray-200">Blog</li>
                <li className=" py-2 text-sm text-gray-200">Jobs</li>
                <li className=" py-2 text-sm text-gray-200">Press</li>
                <li className=" py-2 text-sm text-gray-200">Partners</li>
            </ul>
        </div>
        <div>
            <h4 className="text-lg text-gray-700">Legal</h4>
            <ul>
                <li className=" py-2 text-sm text-gray-200">Claim</li>
                <li className=" py-2 text-sm text-gray-200">Privacy</li>
                <li className=" py-2 text-sm text-gray-200">Terms & Cond.</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
