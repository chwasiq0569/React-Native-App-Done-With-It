import { Formik } from "formik";
import React from "react";
import AppTextInput from "./components/forms/AppTextInput";
import Screen from "./components/Screen";
import ErrorMessage from "./components/ErrorMessage";
import AppButton from "./components/AppButton";
import * as Yup from "yup";
import AppFormPicker from "./components/AppFormPicker";
import { StyleSheet } from "react-native";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(1000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

function ListingsEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              maxLength={255}
              placeholder="Title"
              onChangeText={handleChange("title")}
            />
            <AppTextInput
              maxLength={8}
              placeholder="Price"
              keyboardType="numeric"
              onChangeText={handleChange("price")}
            />
            <AppFormPicker
              items={categories}
              name="category"
              placeholder="Category"
            />
            <AppTextInput
              maxLength={255}
              multiline
              numberOfLines={3}
              placeholder="Description"
              onChangeText={handleChange("description")}
            />
            <AppButton title="Post" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingsEditScreen;
