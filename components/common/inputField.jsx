import { Field } from "formik";

const InputField = ({ type, name, placeholder, label }) => {
  return (
    <div>
      {label && <label htmlFor="">{label}</label>}
      <Field
        type={type}
        name={name}
        placeholder={placeholder ? placeholder : ""}
        className="mt-5 focus:outline-none border-b-[1px] border-dark border-opacity-20 pb-1 w-full"
      />
    </div>
  );
};

export default InputField;
