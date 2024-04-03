import Link from "next/link";
import { signOut } from "next-auth/react";

const ProfileDropdown = ({ data }) => {
  const {
    user: { role },
  } = data;

  const links = [
    { name: "Dashboard", link: `${role}/dashboard` },
    // { name: "Events", link: `${role}/dashboard` },
    // { name: "Requests", link: `${role}/dashboard` },
    // { name: "Invites", link: `${role}/dashboard` },
    // { name: "Profile", link: `${role}/profile` },
  ];

  return (
    <div>
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
  );
};

export default ProfileDropdown;
