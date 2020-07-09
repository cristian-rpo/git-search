import React from "react";
import Cookies from "universal-cookie";
import FormSignIn from "./FormSignIn";

const SigIn = () => {
  const cookies = new Cookies();
  const setCookies = () => {
    const form = document.getElementsByTagName("input");
    cookies.set("userName", form.namedItem("name").value, { path: "/" });
    cookies.set("userLastName", form.namedItem("lastname").value, {
      path: "/",
    });
    cookies.set("userMail", form.namedItem("email").value, { path: "/" });
    cookies.set("userDocument", form.namedItem("document").value, {
      path: "/",
    });
    cookies.set("userBirth", form.namedItem("dateOfBirth").value, {
      path: "/",
    });
    cookies.set("githubUser", form.namedItem("githubUser").value, {
      path: "/",
    });
  };
  return (
    <div className="signin-container">
      <FormSignIn action={setCookies} />
    </div>
  );
};

export default SigIn;
