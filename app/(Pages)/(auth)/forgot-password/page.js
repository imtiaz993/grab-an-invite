import AuthSlider from "@/components/authSlider";
import Wrapper from "./components/wrapper";

const ForgotPassword = () => {
  return (
    <div>
      <div className="flex">
        <AuthSlider />
        <div className="px-[7%] pt-52 pb-14 w-[50%] min-h-svh">
          <Wrapper/>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
