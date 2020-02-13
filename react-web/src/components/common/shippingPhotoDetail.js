import React, { Component } from "react";
import PropTypes from "prop-types";
import { AppWrapper } from "../public/AppWrapper";
import { PATH } from "../../utils/Constants";
import { Link } from "react-router-dom";

class shippingPhotoDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    prop: PropTypes
  };

  componentDidMount() {
    document.title = "Auto Harasow | Shipping Photo Detail";
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
                      <Link to={PATH.SHIPPING_SCHDULE}>
                        Shipping Schedule
                        <span>
                          <i class="fas fa-chevron-right"></i>
                        </span>
                      </Link>
                    </li>
                    <li class="active">
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
                <div class="head1 medium">Shipping Photos</div>

                <div class="spacer1"></div>
                <div class="photohead">
                  <div class="row align-items-end">
                    <div class="col-md-8">
                      <div class="head2 grey">Latest Yard Photos</div>
                    </div>
                    <div class="col-md-4">
                      <div class="para2 grey">2020 - 01 - 21</div>
                    </div>
                  </div>
                </div>
                <div class="dotspacer"></div>
                <div class="spacer1"></div>
                <div class="photodetailbox">
                  <div class="row no-gutters justify-content-center">
                    <div class="col-md-12">
                      <img
                        src={require("../../assets/img/LP202001210000515042560.jpg")}
                        class="w-100"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="spacer1"></div>
                  <div class="head2">What Have Changed in 2019</div>
                  <div class="para1 mt-3">
                    Autowini has enhanced the whole process of the car checking
                    with regional requirements and customers' preferences. We
                    hired more technicians, developed our quality standards, and
                    standardized work papers.
                  </div>
                </div>
                <div class="dotspacer"></div>
                <div class="spacer1"></div>
                <div class="photodetailbox">
                  <div class="row no-gutters justify-content-center">
                    <div class="col-md-12">
                      <img
                        src={require("../../assets/img/LP202001210000515042560.jpg")}
                        class="w-100"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="spacer1"></div>
                  <div class="head2">What Have Changed in 2019</div>
                  <div class="para1 mt-3">
                    Autowini has enhanced the whole process of the car checking
                    with regional requirements and customers' preferences. We
                    hired more technicians, developed our quality standards, and
                    standardized work papers.
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

export default AppWrapper(shippingPhotoDetail, null, null);