import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function MyForm() {
  const formik = useFormik({
    initialValue: {
      name: "",
      email: "",
      company: "",
    },
  });
  return (
    <form>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
      </div>

      <div className="form-control">
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="form-control">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default MyForm;
