import { Header, Input, Label } from "../../component";

const SecondForm = ({ formik }: { formik: any }) => {
  const { touched, errors } = formik;
  return (
    <>
      <Header title="Address Information" className="font-bold text-xl" />
      <Label label="Street:" />
      <Input
        type="text"
        name="street"
        value={formik.values.street}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {errors.street && touched.street ? (
        <small className="text-red-600">{errors.street}</small>
      ) : null}

      <Label label="City:" />
      <Input
        type="text"
        name="city"
        value={formik.values.city}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {errors.city && touched.city ? (
        <small className="text-red-600">{errors.city}</small>
      ) : null}

      <Label label="State:" />
      <Input
        type="text"
        name="state"
        value={formik.values.state}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {errors.state && touched.state ? (
        <small className="text-red-600">{errors.state}</small>
      ) : null}

      <Label label="Zip Code:" />
      <Input
        type="number"
        name="zipcode"
        value={formik.values.zipcode}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {errors.zipcode && touched.zipcode ? (
        <small className="text-red-600">{errors.zipcode}</small>
      ) : null}
    </>
  );
};

export default SecondForm;
