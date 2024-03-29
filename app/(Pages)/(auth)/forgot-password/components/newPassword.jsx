import { Form, Formik } from "formik";
import InputField from "@/components/common/InputField";
import CustomButton from "@/components/common/customButton";

const NewPassword = () => {
  return (
    <div>
      <Formik>
        <Form>
          <div className="   w-full mt-16">
            <label className="block font-medium text-dark opacity-60">
              New Password
            </label>
            <InputField type="password" name="newPassword" />
          </div>
          <div className="   w-full mt-10">
            <label className="block font-medium text-dark opacity-60">
              Confirm Password
            </label>
            <InputField type="password" name="confirmPassword" />
          </div>
          <div className="text-dark opacity-60 font-medium mt-10 ">
            Your new password must be different from previous used password.
          </div>
          <div className="flex justify-center w-full mt-16">
            <CustomButton width="w-44" text="Login Now" onClick={() => {}} />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default NewPassword;
