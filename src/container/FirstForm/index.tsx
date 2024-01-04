import { Header, Input, Label } from "../../component";

const FirstForm = ({ formik }: { formik: any }) => {
  const { touched, errors, values, handleChange, handleBlur } = formik;
  return (
    <>
      <Header title="Personal Information" className="font-bold text-xl" />
      <Label label="Full Name:" />
      <Input
        type="text"
        name="fullname"
        value={values.fullname}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.fullname && touched.fullname ? (
        <small className="text-red-600">{errors.fullname}</small>
      ) : null}

      <Label label="E-mail:" />
      <Input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.email && touched.email ? (
        <small className="text-red-600">{errors.email}</small>
      ) : null}
      <Label label="Date of Birth:" />
      <Input
        type="date"
        name="birth"
        value={values.birth}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.birth && touched.birth ? (
        <small className="text-red-600">{errors.birth}</small>
      ) : null}
    </>
  );
};

export default FirstForm;
