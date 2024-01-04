import { useState } from "react";
import { Button, Header, Card } from "../../component";
import { FirstForm, SecondForm, ThirdForm } from "../../container";
import "../../App.css";
import { useFormik } from "formik";
import * as Yup from "Yup";

const FirstPage = () => {
  const [step, setStep] = useState<number>(1);

  const validationSchemaStep1 = Yup.object({
    fullname: Yup.string().required(),
    email: Yup.string().email().required(),
    birth: Yup.date().min(new Date(2001, 0, 1)).required(),
  });
  const validationSchemaStep2 = Yup.object({
    street: Yup.string().required(),
    city: Yup.string().required(),
    state: Yup.string().required(),
    zipcode: Yup.string()
      .matches(/^\d{5}(?:[-\s]\d{4})?$/, "ZipCode invalid")
      .length(5, "Mininum five number")
      .required("ZipCode invalid"),
  });
  const validationSchemaStep3 = Yup.object({
    username: Yup.string().min(4).required(),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Minimum eight characters, at least one letter and one number"
      )
      .required(),
  });

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      birth: "",
      street: "",
      city: "",
      state: "",
      zipcode: "",
      username: "",
      password: "",
    },
    validationSchema:
      step === 1
        ? validationSchemaStep1
        : step === 2
        ? validationSchemaStep2
        : validationSchemaStep3,
    onSubmit: (values) => {
      console.log(values);
      alert("Form Submited");
      location.reload();
    },
  });

  // const { steps, currentStepIndex } = Steps([
  //   <FirstForm formik={formik} />,
  //   <SecondForm formik={formik} />,
  //   <ThirdForm formik={formik} />,
  // ]);

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   if (currentStepIndex === steps.length - 1) return alert("Success");
  //   next();
  // };

  const next = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const isDisabled = () => {
    if (step === 1) {
      return (
        (!formik.values.fullname &&
          !formik.values.email &&
          !formik.values.birth) ||
        Object.keys(formik.errors).length > 0
      );
    } else if (step === 2) {
      return (
        (!formik.values.street &&
          !formik.values.city &&
          !formik.values.state &&
          !formik.values.zipcode) ||
        Object.keys(formik.errors).length > 0
      );
    } else if (step === 3) {
      return (
        (!formik.values.username && !formik.values.password) ||
        Object.keys(formik.errors).length > 0
      );
    }
    return false;
  };
  console.log(isDisabled());
  console.log(formik);

  // Display Form / Main Content
  return (
    <Card className="container flex justify-center items-center h-screen mx-auto">
      <Card className="w-9/12">
        <Header
          title="Please Fill Your Profile"
          className="size-fit font-bold text-3xl mx-auto"
        />

        <Card className="w-6/12 h-fit border-solid border-2 py-3.5 my-3 mx-auto">
          <form onSubmit={formik.handleSubmit}>
            <Card className="flex mx-auto">
              <Card className="w-full my-3.5 mx-3.5">
                {step === 1 && <FirstForm formik={formik} />}
                {step === 2 && <SecondForm formik={formik} />}
                {step === 3 && <ThirdForm formik={formik} />}
              </Card>
            </Card>

            <Card className="flex place-content-between items-center w-full my-3.5 px-3.5">
              <div className="w-1/3">
                {step} / {3}
              </div>

              <Card className="flex justify-item-end gap-2 w-fit">
                {step > 1 && (
                  <Button type="button" onClick={prev} buttonValue="Back" />
                )}
                {step < 3 && (
                  <Button
                    type="button"
                    onClick={next}
                    buttonValue="Next"
                    disabled={isDisabled()}
                  />
                )}
                {step === 3 && (
                  <Button
                    className="bg-green-600 text-white"
                    buttonValue="Submit"
                  />
                )}
              </Card>
            </Card>
          </form>
        </Card>
      </Card>
    </Card>
  );
};

export default FirstPage;
