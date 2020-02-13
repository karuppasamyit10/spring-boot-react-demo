import React, { Component } from "react";
import PropTypes from "prop-types";
import { AppWrapper } from "../public/AppWrapper";
import { PATH } from "../../utils/Constants";
import { Link } from "react-router-dom";

class shippingSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    prop: PropTypes
  };

  componentDidMount() {
    document.title = "Auto Harasow | Shipping Schedule";
  }

  render() {
    return (
      <React.Fragment>
        <section class="breadcrumb_wrap">
          <div class="container">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <Link to={PATH.DASHBOARD}>Home</Link>
                </li>
                <li class="breadcrumb-item">
                  <Link to={PATH.ABOUT_US}>About Us</Link>
                </li>
                <li class="breadcrumb-item">
                  <Link to={PATH.WHAT_WE_DO}>What we do</Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Container Shipping
                </li>
              </ol>
            </nav>
          </div>
        </section>

        <section class="container_shipping">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <div class="sidelinks">
                  <div class="slhead text-center medium head3">Shipping</div>
                  <ul class="sllinks medium">
                    <li class="active">
                      <Link to={PATH.SHIPPING_SCHDULE}>
                        Shipping Schedule
                        <span>
                          <i class="fas fa-chevron-right"></i>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to={PATH.SHIPPING_PHOTOS}>
                        Shipping Photos
                        <span>
                          <i class="fas fa-chevron-right"></i>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to={PATH.SHIPPING_TRANSPORT_TYPES}>
                        Types of Shipping
                        <span>
                          <i class="fas fa-chevron-right"></i>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-9">
                <div class="head1 medium">Shipping Schedule</div>

                <div class="shipbanner mt-4">
                  <div class="head1 white">
                    Check the fastest shipping schedule to your port!
                  </div>
                  <div class="para1 white">
                    You can search shipping schedules by the arrival port. We
                    hope you check the fastest shipping schedule and book on the
                    fast vessel.
                  </div>
                  <div class="para2">
                    * The results for the last three months will be shown.
                  </div>
                </div>
                <div class="dotspacer"></div>
                <div class="ship_filter">
                  <div class="row align-items-end">
                    <div class="col-lg-5 col-md-4 col-sm-6">
                      <div class="form-group row mb-0">
                        <label
                          for="shipDeparture"
                          class="col-lg-5 col-form-label text-center"
                        >
                          Departure :
                        </label>
                        <div class="col-lg-7">
                          <select
                            name="shipDeparture"
                            id="shipDeparture"
                            class="form-control"
                          >
                            <option value="0" selected>
                              Select
                            </option>
                            <option value="">S.Korea</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-5 col-md-4 col-sm-6">
                      <div class="form-group row mb-0">
                        <label
                          for="shipDeparture"
                          class="col-lg-5 col-form-label text-center"
                        >
                          Arrival :
                        </label>
                        <div class="col-lg-7">
                          <select
                            name="shipDeparture"
                            id="shipDeparture"
                            class="form-control"
                          >
                            <option value="0" selected>
                              Select
                            </option>
                            <option value="">India</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-12">
                      <div class="btn-wrap text-center">
                        <input
                          type="submit"
                          class="btn btn-primary btn-block"
                          value="Search"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="dotspacer"></div>
                <div class="row py-4">
                  <div class="col-lg-5">
                    <div class="para1 grey">
                      Search Result : <span class="bold">0</span> schedules
                      found
                    </div>
                  </div>
                  <div class="col-lg-7">
                    <div class="para1 grey">
                      * Schedules are subject to be changed with or without
                      notice.
                    </div>
                  </div>
                </div>
                <div class="spacer1"></div>
                <div class="table-responsive">
                  <table class="table table-bordered table-hover">
                    <thead class="thead-light">
                      <tr>
                        <th>Vessel Name &amp; Voy No.</th>
                        <th>Vessel Type</th>
                        <th>Line</th>
                        <th>Port of Loading</th>
                        <th>Port of Destination</th>
                        <th>Estimated time of departure</th>
                        <th>Estimated time of arrival</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>VIKING EMERALD V.014</td>
                        <td>Ro-Ro</td>
                        <td></td>
                        <td>
                          <strong>S.Korea</strong>
                          <br />
                          Masan
                        </td>
                        <td>
                          <strong>Myanmar</strong>
                          <br />
                          Yangon
                        </td>
                        <td>2020.02.07</td>
                        <td>2020.03.03</td>
                      </tr>
                      <tr>
                        <td>VIKING EMERALD V.014</td>
                        <td>Ro-Ro</td>
                        <td></td>
                        <td>
                          <strong>S.Korea</strong>
                          <br />
                          Masan
                        </td>
                        <td>
                          <strong>Myanmar</strong>
                          <br />
                          Yangon
                        </td>
                        <td>2020.02.07</td>
                        <td>2020.03.03</td>
                      </tr>
                      <tr>
                        <td>VIKING EMERALD V.014</td>
                        <td>Ro-Ro</td>
                        <td></td>
                        <td>
                          <strong>S.Korea</strong>
                          <br />
                          Masan
                        </td>
                        <td>
                          <strong>Myanmar</strong>
                          <br />
                          Yangon
                        </td>
                        <td>2020.02.07</td>
                        <td>2020.03.03</td>
                      </tr>

                      <tr>
                        <td colspan="7">
                          We are very sorry. There's no available data at the
                          moment.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="spacer1"></div>
      </React.Fragment>
    );
  }
}

export default AppWrapper(shippingSchedule, null, null);
