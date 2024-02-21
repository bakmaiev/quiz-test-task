import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  EmailDescription,
  EmailForm,
  EmailInput,
  EmailPolicy,
  EmailTitle,
  ErrorText,
  InputWrapper,
} from "./EmailPage.styled";
import Button from "../../components/Button/Button";

const EmailPage = () => {
  const { t } = useTranslation("translations");
  const data = t("email", { returnObjects: true });
  const { title, type } = data;
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    email: Yup.string().email(data.errorMessage),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      localStorage.setItem(
        "6",
        JSON.stringify({
          order: "6",
          title: title,
          type: type,
          answer: values.email,
        })
      );
      navigate("/thankyou");
    },
  });

  return (
    <>
      <EmailTitle>{data.title}</EmailTitle>
      <EmailDescription>{data.description ?? null}</EmailDescription>
      <EmailForm onSubmit={formik.handleSubmit}>
        <InputWrapper>
          <EmailInput
            name="email"
            placeholder={data.placeholder}
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.errors.email}
          />
          {formik.errors.email && <ErrorText>{formik.errors.email}</ErrorText>}
        </InputWrapper>
        <EmailPolicy>{data.policy}</EmailPolicy>
        <Button
          button={data.button}
          type="submit"
          disabled={!formik.values.email || formik.errors.email}
        />
      </EmailForm>
    </>
  );
};

export default EmailPage;
