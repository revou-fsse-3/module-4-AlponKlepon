import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...props }: InputProps) => {
  return (
    <input
      required
      {...props}
      className={`${props.className}block border-neutral-500 border w-full h-10`}
    />
  );
};

export default Input;
