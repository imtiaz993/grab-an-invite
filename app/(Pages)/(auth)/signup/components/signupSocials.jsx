import { Google, Facebook, Linkedin, Apple } from "@/icons";

const SignupSocials = () => {
  const icons = [<Google />, <Facebook />, <Linkedin />, <Apple />];

  return (
    <div className="flex gap-5">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="w-14 h-14 rounded-full flex justify-center items-center shadow-sm border-[1px] cursor-pointer"
        >
          {icon}
        </div>
      ))}
    </div>
  );
};

export default SignupSocials;
