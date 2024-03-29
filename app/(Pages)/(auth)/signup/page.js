import AuthSlider from "@/components/authSlider";
import SignupWrapper from "./components/signupWrapper";

const Signup = () => {
  return (
    <div>
      <div className="flex">
        <AuthSlider />
        <div className="px-[7%] pt-20 pb-14 w-[50%]">
          <SignupWrapper/>
        </div>
      </div>
    </div>
  );
};

export default Signup;
