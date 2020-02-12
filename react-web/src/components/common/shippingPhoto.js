import React, { Component } from "react";
import PropTypes from "prop-types";
import { AppWrapper } from "../public/AppWrapper";
import { PATH } from "../../utils/Constants";
import { Link } from "react-router-dom";

class shippingPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    prop: PropTypes
  };

  componentDidMount() {
    document.title = "Auto Harasow | Shipping Photo";
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
                    <li>
                      <a href="shipping-schedule.html">
                        Shipping Schedule
                        <span>
                          <i class="fas fa-chevron-right"></i>
                        </span>
                      </a>
                    </li>
                    <li class="active">
                      <a href="shipping-photos.html">
                        Shipping Photos
                        <span>
                          <i class="fas fa-chevron-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="ro-ro-vessel.html">
                        Types of Shipping
                        <span>
                          <i class="fas fa-chevron-right"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-9">
                <div class="head1 medium">Shipping Photos</div>

                <div class="spacer1"></div>
                <div class="ship_filter">
                  <div class="row align-items-end">
                    <div class="col-lg-5 col-md-4 col-sm-6">
                      <div class="form-group row mb-0">
                        <div class="col-lg-12">
                          <select
                            name="shipDeparture"
                            id="shipDeparture"
                            class="form-control"
                          >
                            <option value="0" selected>
                              All
                            </option>
                            <option value="">Today’s Shipping</option>
                            <option value="">Ready for Shipment</option>
                            <option value="">Yard Photos</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-5 col-md-4 col-sm-6">
                      <div class="form-group row mb-0">
                        <div class="col-lg-12">
                          <input
                            type="text"
                            class="form-control"
                            value=""
                            placeholder="Title"
                          />
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
                <div class="spacer1"></div>
                <div class="row py-3">
                  <div class="col-12">
                    <ul class="nav nav-pills nav-fill switch_shipping">
                      <li class="nav-item">
                        <a class="nav-link medium active" href="#">
                          Today’s Shipping
                        </a>
                      </li>
                      <li class="nav-item ">
                        <a class="nav-link  medium" href="#">
                          Ready for Shipment
                        </a>
                      </li>
                      <li class="nav-item ">
                        <a class="nav-link medium" href="#">
                          Yard Photos
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="dotspacer"></div>
                <div class="spacer1"></div>
                <div class="photogrids">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="photobox">
                        <a href="shipping-photos-detail.html" class="d-block">
                          <img
                            src="assets/img/LP202001210000515042560.jpg"
                            class="img-fluid"
                            alt=""
                          />
                          <div class="caption">
                            <div class="head2 bold">Latest Yard Photos</div>
                            <div class="text-right para2">2020 - 01 - 21</div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="photobox">
                        <a href="shipping-photos-detail.html" class="d-block">
                          <img
                            src={require('../../assets/img/LP202001210000515042560.jpg')}
                            class="img-fluid"
                            alt=""
                          />
                          <div class="caption">
                            <div class="head2 bold">Latest Yard Photos</div>
                            <div class="text-right para2">2020 - 01 - 21</div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="photobox">
                        <a href="shipping-photos-detail.html" class="d-block">
                          <img
                            src={require('../../assets/img/LP202001210000515042560.jpg')}
                            class="img-fluid"
                            alt=""
                          />
                          <div class="caption">
                            <div class="head2 bold">Latest Yard Photos</div>
                            <div class="text-right para2">2020 - 01 - 21</div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="photobox">
                        <a href="shipping-photos-detail.html" class="d-block">
                          <img
                           src={require('../../assets/img/LP202001210000515042560.jpg')}
                            class="img-fluid"
                            alt=""
                          />
                          <div class="caption">
                            <div class="head2 bold">Latest Yard Photos</div>
                            <div class="text-right para2">2020 - 01 - 21</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
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

export default AppWrapper(shippingPhoto, null, null);
