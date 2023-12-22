import { HTMLAttributes } from "react";

type HeadingLevel = HTMLAttributes<HTMLHeadingElement>;

interface Props extends HeadingLevel {
  title?: string;
}

const Header = ( {title, ...headingLevel}: Props) => {
  return <h1 {...headingLevel}>{title}</h1>;
};

export default Header;
