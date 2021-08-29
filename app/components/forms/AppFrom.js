import React from "react";
import { Formik } from "formik";
import AppTextInput from "./AppTextInput";
import ErrorMessage from "../ErrorMessage";
import * as Yup from "yup";
import AppButton from "../AppButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function AppFrom(props) {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
        <>
          <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
            placeholder="Email"
            icon={require("../../assets/emailblack.png")}
            onChangeText={handleChange("email")}
            onBlur={() => setFieldTouched("email")}
          />
          <ErrorMessage error={errors.email} visible={touched.email} />
          <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="password"
            secureTextEntry
            placeholder="Password"
            icon={require("../../assets/emailblack.png")}
            onChangeText={handleChange("password")}
            onBlur={() => setFieldTouched("password")}
          />
          <ErrorMessage error={errors.password} visible={touched.password} />
          <AppButton title="Login" onPress={handleSubmit} />
        </>
      )}
    </Formik>
  );
}

export default AppFrom;
