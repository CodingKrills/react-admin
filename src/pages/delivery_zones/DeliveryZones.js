import React from "react";

import bin from "../../icons/bin.svg";
import edit from "../../icons/edit.svg";

const DeliveryZones = () => {
  return (
    <div class="app-wrapper">
      <div class="app-content pt-3 p-md-3 p-lg-4">
        <div class="container-xl">
          <h1 class="app-page-title">DeliveryZones</h1>
          {/*  */}
          <div class="card">
            <div className="row">
              <div class="col-md-10">
                <div class="card-body">
                  This is some text within a card body.
                </div>
              </div>
              <div class="col-md-2 float-right">
                <button
                  type="button"
                  class="btn btn-light"
                  style={{ marginLeft: "0em", marginTop: "5%" }}
                >
                  <img src={edit} alt="edit" width="20" />
                </button>
                <button
                  type="button"
                  class="btn btn-light"
                  style={{ marginLeft: "1em", marginTop: "5%" }}
                >
                  <img src={bin} alt="bin" width="20" />
                </button>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default DeliveryZones;
