import { Field } from "formik";

const Dropdown = ({ type, options, name, className, placeholder }) => {
  return (
    <Field
      as="select"
      type={type}
      name={name}
      className={
        className
          ? className
          : "mt-5 focus:outline-none border-b border-dark border-opacity-20 pb-1 w-full"
      }
    >
      {placeholder && (
        <option value="" selected="selected">
          {placeholder}
        </option>
      )}
      {options &&
        options.map((item, index) =>
          index === 0 && item === "select" ? (
            <option value="" key={index}>
              {item}
            </option>
          ) : (
            <option value={item} key={index}>
              {item}
            </option>
          )
        )}
    </Field>
  );
};

export default Dropdown;
