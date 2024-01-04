import { Header, Input, Label } from "../../component";

const ThirdForm = ({ formik }: { formik: any }) => {
  const { touched, errors } = formik;
  return (
    <>
      <Header title="Account Information" className="font-bold text-xl" />
      <Label label="Username:" />
      <Input
        type="text"
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {errors.username && touched.username ? (
        <small className="text-red-600">{errors.username}</small>
      ) : null}

      <Label label="Password:" />
      <Input
        type="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {errors.password && touched.password ? (
        <small className="text-red-600">{errors.password}</small>
      ) : null}
    </>
  );
};

export default ThirdForm;
