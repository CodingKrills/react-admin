import React from "react";

const AddProduct = () => {
  return (
    <div class="app-wrapper">
      <div class="app-content pt-3 p-md-3 p-lg-4">
        <div class="container-xl">
          <div class="row g-3 mb-4 align-items-center justify-content-between">
            <div class="col-auto">
              <h1 class="app-page-title mb-3">Add Products</h1>
            </div>
            <div class="card p-5 shadow-sm">
              {/*  */}
              <div class="auth-form-container text-start">
                <form class="auth-form login-form">
                  <div class="email mb-3">
                    <label class="">Email</label>
                    <input
                      name="signin-email"
                      type="email"
                      class="form-control signin-email"
                      placeholder="Email address"
                      required="required"
                    />
                  </div>
                  <div class="password mb-3">
                    <label>Password</label>
                    <input
                      name="signin-password"
                      type="password"
                      class="form-control signin-password"
                      placeholder="Password"
                      required="required"
                    />
                  </div>
                  <div class="text-center">
                    <button
                      type="submit"
                      class="btn app-btn-primary w-100 theme-btn mx-auto shadow"
                    >
                      Log In
                    </button>
                  </div>
                </form>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
