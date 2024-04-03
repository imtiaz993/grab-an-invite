import { Field } from "formik";
import { months, years } from "@/constants/calandar";
import InputField from "@/components/common/InputField";
import Dropdown from "@/components/common/dropdown";

const SignupFormSecond = () => {
  return (
    <div>
      <div className="flex gap-10 mt-14">
        <div className=" w-full">
          <label className="block font-medium text-dark opacity-60">
            First Name*
          </label>
          <InputField type="text" name="firstName" />
        </div>
        <div className="   w-full">
          <label className="block font-medium text-dark opacity-60">
            Last Name*
          </label>
          <InputField type="text" name="lastName" />
        </div>
      </div>
      <div className="   w-full mt-10">
        <label className="block font-medium text-dark opacity-60">
          Address*
        </label>
        <InputField type="text" name="address" />
      </div>
      <div className="flex gap-10 mt-10">
        <div className="  w-full">
          <label className="block font-medium text-dark opacity-60">
            City*
          </label>
          <InputField type="text" name="city" />
        </div>
        <div className="   w-full">
          <label className="block font-medium text-dark opacity-60">
            State*
          </label>
          <InputField type="text" name="state" />
        </div>
      </div>
      <div className="   w-full mt-10">
        <label className="block font-medium text-dark opacity-60">
          Country*
        </label>
        <InputField type="text" name="country" />
      </div>
      <div className="text-dark opacity-85 font-medium mt-10">
        Date Of Birth*
      </div>
      <div className="flex gap-10 mt-5">
        <div className="  w-full">
          <label className="block font-medium text-dark opacity-60">
            Month*
          </label>
          <Dropdown type="text" name="dobMonth" options={months} />
        </div>
        <div className="   w-full">
          <label className="block font-medium text-dark opacity-60">
            Year*
          </label>
          <Dropdown type="text" name="dobYear" options={years} />
        </div>
      </div>
      <div className="flex mt-10">
        <Field
          type="checkbox"
          name="checktc"
          id="checktc"
          className="accent-secondary w-5 h-5 mr-1 bg-secondary cursor-pointer"
        />
        <label htmlFor="checktc" className=" cursor-pointer">
          I agree to terms and conditions checkbox.
        </label>
      </div>
      <div className="flex mt-5">
        <Field
          type="checkbox"
          name="check_share_data"
          id="check_share_data"
          className="accent-secondary w-5 h-5 mr-1 cursor-pointer"
        />
        <label htmlFor="check_share_data" className=" cursor-pointer">
          I agree to share my data with other parties.
        </label>
      </div>
    </div>
  );
};

export default SignupFormSecond;
