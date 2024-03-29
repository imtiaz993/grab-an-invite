import Link from "next/link";

const ProfileDropdown = () => {
  const links = [
    { name: "Dashboard", link: "/" },
    { name: "Events", link: "/" },
    { name: "Requests", link: "/" },
    { name: "Invites", link: "/" },
    { name: "Profile", link: "/" },
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
          <Link href={"/"} className="font-medium">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
