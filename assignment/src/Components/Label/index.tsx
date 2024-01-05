import { ReactNode } from "react";

interface Props extends React.HtmlHTMLAttributes<HTMLParagraphElement> {
  label: ReactNode;
}

const Label = ({ label, ...props }: Props) => {
  return (
    <p {...props} className={`${props.className} mt-3.5`}>
      {label}
    </p>
  );
};

export default Label;
