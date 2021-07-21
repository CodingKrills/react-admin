import React from "react";

const Dashboard = () => {
  return (
    <div class="app-wrapper">
      <div class="app-content pt-3 p-md-3 p-lg-4">
        <div class="container-xl">
          <h1 class="app-page-title">DASHBOARD</h1>

          <div class="row g-4 mb-4">
            <div class="col-6 col-lg-3">
              <div class="app-card app-card-stat shadow-sm h-100">
                <div class="app-card-body p-3 p-lg-4">
                  <h4 class="stats-type mb-1">Total Sales</h4>
                  <div class="stats-figure">$12,628</div>
                  <div class="stats-meta text-success">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-arrow-up"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                      />
                    </svg>{" "}
                    20%
                  </div>
                </div>
                <a class="app-card-link-mask" href="/">Link</a>
              </div>
            </div>

            <div class="col-6 col-lg-3">
              <div class="app-card app-card-stat shadow-sm h-100">
                <div class="app-card-body p-3 p-lg-4">
                  <h4 class="stats-type mb-1">Expenses</h4>
                  <div class="stats-figure">$2,250</div>
                  <div class="stats-meta text-success">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-arrow-down"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                      />
                    </svg>{" "}
                    5%{" "}
                  </div>
                </div>
                <a class="app-card-link-mask" href="/">Link</a>
              </div>
            </div>
            <div class="col-6 col-lg-3">
              <div class="app-card app-card-stat shadow-sm h-100">
                <div class="app-card-body p-3 p-lg-4">
                  <h4 class="stats-type mb-1">Projects</h4>
                  <div class="stats-figure">23</div>
                  <div class="stats-meta">Open</div>
                </div>
                <a class="app-card-link-mask" href="/">Link</a>
              </div>
            </div>
            <div class="col-6 col-lg-3">
              <div class="app-card app-card-stat shadow-sm h-100">
                <div class="app-card-body p-3 p-lg-4">
                  <h4 class="stats-type mb-1">Invoices</h4>
                  <div class="stats-figure">6</div>
                  <div class="stats-meta">New</div>
                </div>
                <a class="app-card-link-mask" href="/">Link</a>
              </div>
            </div>
          </div>
          <div class="row g-4 mb-4">
            <div class="col-12 col-lg-6">
              <div class="app-card app-card-chart h-100 shadow-sm">
                <div class="app-card-header p-3">
                  <div class="row justify-content-between align-items-center">
                    <div class="col-auto">
                      <h4 class="app-card-title">Line Chart Example</h4>
                    </div>
                    <div class="col-auto">
                      <div class="card-header-action">
                        <a href="/">More charts</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="app-card-body p-3 p-lg-4">
                  <div class="mb-3 d-flex">
                    <select class="form-select form-select-sm ml-auto d-inline-flex w-auto">
                      <option value="1" selected>
                        This week
                      </option>
                      <option value="2">Today</option>
                      <option value="3">This Month</option>
                      <option value="3">This Year</option>
                    </select>
                  </div>
                  <div class="chart-container">
                    <canvas id="canvas-linechart"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="app-card app-card-chart h-100 shadow-sm">
                <div class="app-card-header p-3">
                  <div class="row justify-content-between align-items-center">
                    <div class="col-auto">
                      <h4 class="app-card-title">Bar Chart Example</h4>
                    </div>
                    <div class="col-auto">
                      <div class="card-header-action">
                        <a href="/">More charts</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="app-card-body p-3 p-lg-4">
                  <div class="mb-3 d-flex">
                    <select class="form-select form-select-sm ml-auto d-inline-flex w-auto">
                      <option value="1" selected>
                        This week
                      </option>
                      <option value="2">Today</option>
                      <option value="3">This Month</option>
                      <option value="3">This Year</option>
                    </select>
                  </div>
                  <div class="chart-container">
                    <canvas id="canvas-barchart"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row g-4">
            <div class="col-12 col-md-6">
              <div
                class="
                  app-card app-card-basic
                  d-flex
                  flex-column
                  align-items-start
                  shadow-sm
                "
              >
                <div class="app-card-header p-3 border-bottom-0">
                  <div class="row align-items-center gx-3">
                    <div class="col-auto">
                      <div class="app-icon-holder icon-holder-mono">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          class="bi bi-headset"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 1a5 5 0 0 0-5 5v4.5H2V6a6 6 0 1 1 12 0v4.5h-1V6a5 5 0 0 0-5-5z"
                          />
                          <path d="M11 8a1 1 0 0 1 1-1h2v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V8zM5 8a1 1 0 0 0-1-1H2v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8z" />
                          <path
                            fill-rule="evenodd"
                            d="M13.5 8.5a.5.5 0 0 1 .5.5v3a2.5 2.5 0 0 1-2.5 2.5H8a.5.5 0 0 1 0-1h3.5A1.5 1.5 0 0 0 13 12V9a.5.5 0 0 1 .5-.5z"
                          />
                          <path d="M6.5 14a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1z" />
                        </svg>
                      </div>
                    </div>

                    <div class="col-auto">
                      <h4 class="app-card-title">Need more help?</h4>
                    </div>
                  </div>
                </div>

                <div class="app-card-body px-4">
                  <div class="intro mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam aliquet eros vel diam semper mollis.
                  </div>
                  <ul class="list-unstyled">
                    <li>
                      <strong>Tel:</strong> 0800 1234 5678
                    </li>
                    <li>
                      <strong>Email:</strong>
                      <a href="/">support@website.com</a>
                    </li>
                  </ul>
                </div>

                <div class="app-card-footer p-4 mt-auto">
                  <a class="btn app-btn-secondary" href="/">
                    Start Live Chat
                  </a>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div
                class="
                  app-card app-card-basic
                  d-flex
                  flex-column
                  align-items-start
                  shadow-sm
                "
              >
                <div class="app-card-header p-3 border-bottom-0">
                  <div class="row align-items-center gx-3">
                    <div class="col-auto">
                      <div class="app-icon-holder icon-holder-mono">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          class="bi bi-life-preserver"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M14.43 10.772l-2.788-1.115a4.015 4.015 0 0 1-1.985 1.985l1.115 2.788a7.025 7.025 0 0 0 3.658-3.658zM5.228 14.43l1.115-2.788a4.015 4.015 0 0 1-1.985-1.985L1.57 10.772a7.025 7.025 0 0 0 3.658 3.658zm9.202-9.202a7.025 7.025 0 0 0-3.658-3.658L9.657 4.358a4.015 4.015 0 0 1 1.985 1.985l2.788-1.115zm-8.087-.87L5.228 1.57A7.025 7.025 0 0 0 1.57 5.228l2.788 1.115a4.015 4.015 0 0 1 1.985-1.985zM8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm0-5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                          />
                        </svg>
                      </div>
                    </div>

                    <div class="col-auto">
                      <h4 class="app-card-title">Want to upgrade?</h4>
                    </div>
                  </div>
                </div>

                <div class="app-card-body px-4">
                  <div class="intro mb-3">
                    Quisque non nisi odio. Proin at viverra enim. Ut vitae
                    ligula neque. Praesent id ligula ut sem suscipit eleifend id
                    vel ex.
                  </div>
                  <ul class="list-unstyled">
                    <li>
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        class="bi bi-check2 text-primary me-2"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                        />
                      </svg>
                      Phasellus varius vel risus vel aliquam.
                    </li>
                    <li>
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        class="bi bi-check2 text-primary me-2"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                        />
                      </svg>
                      Maecenas varius nulla.
                    </li>
                    <li>
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        class="bi bi-check2 text-primary me-2"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                        />
                      </svg>
                      Lorem ipsum dolor sit amet.
                    </li>
                  </ul>
                </div>

                <div class="app-card-footer p-4 mt-auto">
                  <a class="btn app-btn-primary" href="/">
                    Upgrade Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
