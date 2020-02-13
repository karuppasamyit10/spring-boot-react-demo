import React, { Component } from "react";
import PropTypes from "prop-types";
import { AppWrapper } from "../public/AppWrapper";
import { PATH } from "../../utils/Constants";
import { Link } from "react-router-dom";

class RoVessel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <React.Fragment>
        <div class="row no-gutters">
          <div class="col-12">
            <img
              src={require("../../assets/img/about/what-we-do/image.png")}
              class="img-fluid w-100"
              alt=""
            />
            <div class="head3 mt-3">Container Vessel Shipping</div>
            <p class="para1 mt-2">
              Container vessel shipping is cheaper way to ship many units of
              cars. And also inland countries have to ship vehicles by container
              so that they can track it to their country. Shoring work and
              container trucking work needed.
            </p>
          </div>
        </div>
        <hr />

        <div class="row no-gutters">
          <div class="col-12">
            <div class="head2 bold green text-center">How to Calculate</div>
            <div class="greybox text-center mt-3">
              <div class="row">
                <div class="col-md-3">
                  <div class="calcgrid">
                    <div class="icon">
                      <img
                        src={require("../../assets/img/about/what-we-do/icon_ship.png")}
                        alt=""
                      />
                    </div>
                    <p class="para1 mt-2">
                      Shipping fee to put items into container
                    </p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="calcgrid">
                    <div class="icon">
                      <img
                        src={require("../../assets/img/about/what-we-do/icon_ship.png")}
                        alt=""
                      />
                    </div>
                    <p class="para1 mt-2">
                      Inland tracking fee to transport and portyard
                    </p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="calcgrid">
                    <div class="icon">
                      <img
                        src={require("../../assets/img/about/what-we-do/icon_ship.png")}
                        alt=""
                      />
                    </div>
                    <p class="para1 mt-2">
                      Ocean Freight to ship the item to your country's port
                    </p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="calcgrid">
                    <div class="icon">
                      <img
                        src={require("../../assets/img/about/what-we-do/icon_ship.png")}
                        alt=""
                      />
                    </div>
                    <p class="para1 mt-2">
                      Other charges (THC, Wharfage, Loading fee, etc)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="row no-gutters">
          <div class="col-12 text-center">
            <div class="head2 bold green ">What's CBM?</div>
            <p class="para1 mt-2">
              Ro-RO freight is calculated by CBM. CBM(cubic meter, ㎥) is the
              volume of a cube with edges one metre in length. It is commonly
              used in international shipping business. Check out CBM of cars,
              buses and excavators!
            </p>
            <p class="para1 mt-2 bold text-center">
              Cubic meter ( CBM ) = (W) 1m X (L) 1m X (H) 1m
            </p>
          </div>
          <div class="col-12 text-center mt-4">
            <img
              src={require("../../assets/img/about/what-we-do/icon_ship.png")}
              class="img-fluid"
              alt=""
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RoVessel;
