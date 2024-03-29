import { Google, Facebook, Linkedin, Apple } from "@/icons";

const SocialLogin = () => {
  const icons = [
    { icon: <Google />, label: "Continue with google" },
    { icon: <Facebook />, label: "Continue with facebook" },
    { icon: <Linkedin />, label: "Continue with linkedin" },
    { icon: <Apple />, label: "Continue with apple" },
  ];

  return (
    <div className="mt-16 text-dark">
      {icons.map((item, index) => (
        <div
          key={index}
          className="border-[1px] mb-7 rounded-full h-14 items-center flex justify-center border-dark border-opacity-40 cursor-pointer"
        >
          {item.icon}
          <p className="ml-3">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default SocialLogin;
