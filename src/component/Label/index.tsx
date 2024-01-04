interface Props {
  label: string;
}

const Label = ({ label }: Props) => {
  return <p className="mt-3.5">{label}</p>;
};

export default Label;
