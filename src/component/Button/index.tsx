import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends ButtonProps {
  buttonValue: string;
}

const Button = ({ buttonValue, ...props }: Props) => {
  return (
    <button
      {...props}
      className={`${props.className} rounded-lg px-3 py-2 bg-red-100`}
    >
      {buttonValue}
    </button>
  );
};

export default Button;
