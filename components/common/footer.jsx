import React from "react";
import Link from "next/link";
import {
  Call,
  Email,
  FacbookSimple,
  InstagramSimple,
  LinkedinSimple,
  TwitterSimple,
} from "../../icons";

const Footer = () => {
  const socialIcons = [
    <InstagramSimple />,
    <FacbookSimple />,
    <TwitterSimple />,
    <LinkedinSimple />,
  ];
  const pageLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Industry", link: "/" },
    { name: "Events type", link: "/" },
    { name: "Blogs", link: "/" },
  ];

  const privacyLinks = [
    { name: "Privacy Statement", link: "/" },
    { name: "Terms and Conditions", link: "/" },
    { name: "Site Map", link: "/" },
  ];

  return (
    <div className=" pt-16 w-full bg-primary text-white">
      <div className="px-[9.3%] pb-9 flex">
        <div className="w-full">
          <img src="/images/logo-footer.png" alt="Logo" className="w-3/4" />
          <h6 className="mt-12 opacity-60 mr-1 w-full">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h6>
          <div className="mt-8 flex gap-6">
            {socialIcons.map((icon, index) => (
              <div
                key={index}
                className="w-11 h-11 flex items-center justify-center bg-white rounded-full"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div>
            <h2 className="text-2xl font-semibold">Useful Links</h2>
            <ul>
              {pageLinks.map((link, index) => (
                <li key={index} className="mt-4">
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div>
            <h2 className="text-2xl font-semibold">Contact Info...</h2>
            <div className="flex gap-4 mt-4">
              <div className="w-11 h-11 flex justify-center items-center border-[1px] rounded-full border-[#339DFD]">
                <Call />
              </div>
              <div className="font-medium">
                <h6>Call Us</h6>
                <h2>(678) 000-0000</h2>
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <div className="w-11 h-11 flex justify-center items-center border-[1px] rounded-full border-[#339DFD]">
                <Email />
              </div>
              <div className="font-medium">
                <h6>Email</h6>
                <h2>example123@gmail.com</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 pb-7 border-t border-[#FFFFFF33]">
        <p className="text-center ">
          {privacyLinks.map((link, index) => (
            <React.Fragment key={index}>
              <Link href={link.link}>{link.name}</Link>{" "}
              {index < privacyLinks.length - 1 ? " | " : ""}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Footer;
