import React from "react";
import { Link } from "react-router-dom";

const FormSignIn = ({ action }) => {
  return (
    <form
      className="signin-form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h1 className="title">Sign In</h1>
      <div className="form-group d-flex  justify-content-between">
        <div>
          <label htmlFor="Name">Name</label>
          <input
            className="form-control"
            id="name"
            defaultValue="Cristian"
            required
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name</label>
          <input
            className="form-control"
            id="lastname"
            defaultValue="Restrepo"
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          required
          className="form-control"
          id="email"
          defaultValue="cristianrestrepo@gmail.com"
          type="email"
        />
      </div>
      <div className="form-group d-flex justify-content-between">
        <div>
          <label htmlFor="document">Document</label>
          <input
            required
            className="form-control "
            id="document"
            defaultValue="1023123202"
            type="number"
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date Of Birth</label>
          <input
            required
            className="form-control"
            id="dateOfBirth"
            type="date"
            defaultValue="2000-09-27"
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="githubUser">GitHub User</label>
        <input
          className="form-control"
          id="githubUser"
          defaultValue="cristian-rpo"
        />
      </div>
      <Link to="/search">
        <button type="submit" className="btn" onClick={action}>
          Submit
        </button>
      </Link>
    </form>
  );
};

export default FormSignIn;
