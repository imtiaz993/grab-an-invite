import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { ArrowDown } from "@/icons/index";

const ProfileDropdown = ({ data }) => {
  const {
    user: { role },
  } = data;
  const profileDropdownRef = useRef(null);
  const [profileMenu, setProfileMenu] = useState(false);

  const links = [
    { name: "Dashboard", link: `${role}/dashboard` },
    // { name: "Events", link: `${role}/dashboard` },
    // { name: "Requests", link: `${role}/dashboard` },
    // { name: "Invites", link: `${role}/dashboard` },
    // { name: "Profile", link: `${role}/profile` },
  ];

  const handleClickOutside = (event) => {
    if (
      profileDropdownRef.current &&
      !profileDropdownRef.current.contains(event.target)
    ) {
      setProfileMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div
      className="font-bold flex items-center gap-3 relative cursor-pointer select-none"
      ref={profileDropdownRef}
    >
      <div
        onClick={() => setProfileMenu((prev) => !prev)}
        className="font-bold flex items-center gap-3 relative cursor-pointer select-none"
      >
        <p className="capitalize">{data.user.name}</p>
        <ArrowDown />
      </div>
      {profileMenu && (
        <div className="absolute top-12 right-0">
          <div className="text-dark bg-white rounded-lg w-44">
            <ul className="p-4 pt-0">
              {links.map((link, index) => (
                <li key={index} className="font-medium pt-4">
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>

            <div className="p-4 border-t-[#1D1D1D33] border-t">
              <p onClick={async () => await signOut()} className="font-medium">
                Logout
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
