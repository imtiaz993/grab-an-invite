import Link from "next/link";
import { Form, Formik } from "formik";
import InputField from "@/components/common/InputField";
import CustomButton from "@/components/common/customButton";

const Verify = ({ setIsVerified }) => {
  return (
    <div>
      <Formik>
        <Form>
          <div className="   w-full mt-10">
            <label className="block font-medium text-dark opacity-60">
              Your Email
            </label>
            <InputField type="text" name="email" />
          </div>
          <div className="text-dark opacity-60 font-medium pt-8 ">
            Enter your email address and we’ll send a verification code to reset
            your password.
          </div>
          <div className="flex flex-col items-center mt-14">
            <CustomButton
              width="w-44"
              text="Verify Account"
              onClick={() => {
                setIsVerified(true);
              }}
            />
            <Link href="/login" className="font-bold  text-secondary mt-5">
              Back to Login
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Verify;
