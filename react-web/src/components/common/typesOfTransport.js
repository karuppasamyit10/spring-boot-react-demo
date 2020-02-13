import React, { Component } from "react";
import PropTypes from "prop-types";
import { AppWrapper } from "../public/AppWrapper";
import { PATH } from "../../utils/Constants";
import { Link } from "react-router-dom";
import RoVessel from "./RoVessel";
import ContainerVessel from "./ContainerVessel";

class typesOfTransport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 1
    };
  }

  static propTypes = {
    prop: PropTypes
  };

  componentDidMount() {
    document.title = "Auto Harasow | Types Of Transport";
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

        <section class="about_wrap transport_harasow">
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
                    <li>
                      <Link to={PATH.SHIPPING_PHOTOS}>
                        Shipping Photos
                        <span>
                          <i class="fas fa-chevron-right"></i>
                        </span>
                      </Link>
                    </li>
                    <li class="active">
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
                <div class="head1 medium">Auto Harasow Transport</div>
                <div class="spacer1"></div>
                <div class="row">
                  <div class="col-12 text-center">
                    <div class="head1">
                      How to <span class="green bold">Transport</span> My Car,
                      Bus, Truck or Equipment?
                    </div>
                    <div class="head3">
                      You can ship your vehicle in a container or Ro-Ro vessel.
                      But which option is better? You can compare and choose
                      which is cheaper and convenient for you.
                    </div>
                  </div>
                </div>
                <div class="spacer1"></div>
                <div class="row">
                  <div class="col-12">
                    <ul class="nav nav-pills nav-fill switch_shipping">
                      <li class="nav-item">
                        <a
                          class="nav-link active medium"
                          href="#"
                          onClick={() => {
                            this.setState({ tab: 1 });
                          }}
                        >
                          Ro-Ro vessel shipping
                        </a>
                      </li>
                      <li class="nav-item ">
                        <a
                          class="nav-link medium"
                          href="#"
                          onClick={() => {
                            this.setState({ tab: 2 });
                          }}
                        >
                          Container vessel shipping
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="spacer1"></div>
                {this.state.tab === 1 ? <RoVessel /> : <ContainerVessel />}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default AppWrapper(typesOfTransport, null, null);
