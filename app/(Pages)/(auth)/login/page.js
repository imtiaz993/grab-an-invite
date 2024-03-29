import AuthSlider from "@/components/authSlider";
import FormLogin from "./components/formLogin";
import SocialLogin from "./components/socialLogin";

const Login = () => {
  return (
    <div>
      <div className="flex">
        <AuthSlider />
        <div className="px-[7%] pt-16 pb-14 w-[50%]">
          <FormLogin />
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
