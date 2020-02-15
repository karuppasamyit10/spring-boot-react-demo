import React, { Component } from "react";
import PropTypes from "prop-types";
import { AppWrapper } from "../public/AppWrapper";
import { PATH } from "../../utils/Constants";
import { Link } from "react-router-dom";

class howToUseHgs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    prop: PropTypes
  };

  componentDidMount() {
    document.title = "Auto Harasow | How To Use Hgs";
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
                  <Link to={PATH.HOW_TO_ORDER}>How to order</Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  How to use H.G.S
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
                  <div class="slhead text-center medium head3">
                    Buy It Safely
                  </div>
                  <ul class="sllinks medium">
                    <li class="active">
                      <Link to={PATH.HOW_TO_USE_HGS}>
                        How to use H.G.S.
                        <span>
                          <i class="fas fa-chevron-right"></i>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to={PATH.PAYMENT}>
                        Payment
                        <span>
                          <i class="fas fa-chevron-right"></i>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to={PATH.FAQ}>
                        FAQ
                        <span>
                          <i class="fas fa-chevron-right"></i>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to={PATH.CONTACT_STAFF}>
                        Contact our staff
                        <span>
                          <i class="fas fa-chevron-right"></i>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-9">
                <div class="head1 medium">Buy It Safely</div>
                <div class="row mt-5">
                  <div class="col-12">
                    <div class="head2 mb-3 bold text-center">
                      What is “Buy it Safely!”(B.I.S) ?
                    </div>
                    <p class="para1">
                      “Buy it Safely!” is harasow's Safe Payment & Shipping
                      Service whereby harasow acts as a third party between the
                      buyer and seller in order to make the purchase 100% safe
                      and easy for the buyer. harasow keeps your money, ships
                      the item on time and takes care of your online transaction
                      throughout the whole process safely all at a low cost!
                    </p>
                  </div>
                </div>
                <div class="dotspacer"></div>

                <div class="row mt-4">
                  <div class="col-md-12 text-center">
                    <img
                      src={require("../../assets/img/about/how-to-order/bis_img_75.png")}
                      class="img-fluid"
                      alt=""
                    />
                    <p class="head3 bold">How to Use H.G.S.</p>
                    <p class="para1">
                      We deliver our items on time with an all-in-one order
                      tracking system.
                    </p>
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col-md-6 text-center">
                    <a href="javascript:;" class="btn btn-primary btm-sm">
                      Part 1: How to send an inquiry and get a quotation?
                    </a>
                  </div>
                  <div class="col-md-6 text-center">
                    <a href="#part2" class="btn btn-primary btm-sm">
                      Part 2: How to track my order & shipping status?
                    </a>
                  </div>
                </div>

                <div class="dotspacer"></div>
                <div class="row mt-4">
                  <div class="col-md-12 text-center">
                    <p class="head3 bold">
                      Part 1. How to send an inquiry and get a quotation ?
                    </p>
                    <p class="para1">
                      There are 4 steps to inquire and confirm items here. You
                      can check all the inquiries at{" "}
                      <a href="javascript:;" class="btn btn-link">
                        My Inquiry List
                      </a>
                    </p>
                    <img
                      src={require("../../assets/img/about/how-to-order/bis_inquiry_step.jpg")}
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div class="dotspacer"></div>
                <div class="row mt-4">
                  <div class="col-md-12 text-center">
                    <div class="row no-gutters parts align-items-center mb-4">
                      <div class="col numbers bold text-center">01</div>
                      <div class="col">
                        <div class="head3 bold">Ask for Quotation</div>
                        <p class="para1 mb-0">
                          Choose your car and send an inquiry! You will receive
                          reply within 1 business day.
                        </p>
                      </div>
                    </div>
                    <img
                      src={require("../../assets/img/about/how-to-order/bis_step01_img_1.jpg")}
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div class="dotspacer"></div>
                <div class="row mt-4">
                  <div class="col-md-12 text-center">
                    <div class="row no-gutters parts align-items-center mb-4">
                      <div class="col numbers bold text-center">02</div>
                      <div class="col">
                        <div class="head3 bold">Receive Quotation</div>
                        <p class="para1 mb-0">
                          Check your email inbox and see the quotation from
                          Harasow.
                        </p>
                      </div>
                    </div>
                    <img
                      src={require("../../assets/img/about/how-to-order/bis_step02_img.jpg")}
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div class="dotspacer"></div>
                <div class="row mt-4">
                  <div class="col-md-12 text-center">
                    <div class="row no-gutters parts align-items-center mb-4">
                      <div class="col numbers bold text-center">03</div>
                      <div class="col">
                        <div class="head3 bold">Confirm Purchase</div>
                        <p class="para1 mb-0">
                          Make your decision and confirm to purchase by clicking
                          “Confirm to Buy” button. harasow will check and book
                          an item!
                        </p>
                      </div>
                    </div>
                    <img
                      src={require("../../assets/img/about/how-to-order/bis_step03_img_1.jpg")}
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div class="dotspacer"></div>
                <div class="row mt-4">
                  <div class="col-md-12 text-center">
                    <div class="row no-gutters parts align-items-center mb-4">
                      <div class="col numbers bold text-center">04</div>
                      <div class="col">
                        <div class="head3 bold">Track My Order</div>
                        <p class="para1 mb-0">
                          harasow Confirmed your order, you can track your
                          process!
                        </p>
                      </div>
                    </div>
                    <img
                      src={require("../../assets/img/about/how-to-order/bis_step04_img.jpg")}
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div class="row mt-4" id="part2">
                  <div class="col-12">
                    <div class="head2 medium">How to cancel your order?</div>
                    <div class="greybox mt-4">
                      <p class="para1">
                        In order to cancel your order, please contact harasow
                        staff by
                      </p>
                      <p class="para1">Email : bis@harasow.com</p>
                    </div>
                  </div>
                </div>
                <div class="dotspacer"></div>
                <div class="row mt-4">
                  <div class="col-md-12 text-center">
                    <p class="head3 bold">
                      Part 2. How to track my order & shipping status ?
                    </p>
                    <p class="para1">
                      There are 10 steps to purchasing your order, which you can
                      check to see every step of your transaction, once you have
                      confirmed an item for purchase.{" "}
                      <a href="javascript:;" class="btn btn-link">
                        Track My Order
                      </a>
                    </p>
                    <img
                      src={require("../../assets/img/about/how-to-order/booking_step.jpg")}
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div class="dotspacer"></div>
                <div class="row mt-4">
                  <div class="col-md-12 text-center">
                    <div class="row no-gutters parts align-items-center mb-4">
                      <div class="col numbers bold text-center">01</div>
                      <div class="col">
                        <div class="head3 bold">Item booking</div>
                        <p class="para1 mb-0">
                          After your order has been confirmed by harasow staff,
                          your item will be booked and secured for 2 business
                          days not to be sold to any other customer.
                        </p>
                      </div>
                    </div>
                    <img
                      src={require("../../assets/img/about/how-to-order/track_02.jpg")}
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col-12">
                    <div class="head2 medium">Remarks</div>
                    <div class="greybox mt-4 mb-4">
                      <p class="para1">
                        “Remark” will be appeared when harasow staff update any
                        information. After you check updated information, Do not
                        forget to click “Check” button. Remark will be
                        disappeared.
                      </p>
                    </div>
                    <div class="text-center">
                      <img
                        src={require("../../assets/img/about/how-to-order/track_03_1.jpg")}
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="dotspacer"></div>
                <div class="row mt-4">
                  <div class="col-md-12 text-center">
                    <div class="row no-gutters parts align-items-center mb-4">
                      <div class="col numbers bold text-center">02</div>
                      <div class="col">
                        <div class="head3 bold">Fill In Consignee</div>
                        <p class="para1 mb-0">
                          Fill in your Consignee Full Information to put on
                          Proforma Invoice.
                        </p>
                      </div>
                    </div>
                    <img
                      src={require("../../assets/img/about/how-to-order/track_04.jpg")}
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div class="dotspacer"></div>
                <div class="row mt-4">
                  <div class="col-md-12 text-center">
                    <div class="row no-gutters parts align-items-center mb-4">
                      <div class="col numbers bold text-center">03</div>
                      <div class="col">
                        <div class="head3 bold">Check Proforma Invoice</div>
                        <p class="para1 mb-0">
                          harasow will issue a proforma invoice with final price
                          and bank account details, then upload it in your order
                          information and send by email too. You can see and
                          download it here!
                        </p>
                      </div>
                    </div>
                    <img
                      src={require("../../assets/img/about/how-to-order/track_05.jpg")}
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div class="dotspacer"></div>
                <div class="row mt-4">
                  <div class="col-md-12 text-center">
                    <div class="row no-gutters parts align-items-center mb-4">
                      <div class="col numbers bold text-center">04</div>
                      <div class="col">
                        <div class="head3 bold">Upload Transfer Receipt</div>
                        <p class="para1 mb-0">
                          Transfer the total amount in the invoice to the
                          Autwoini’s bank account within valid date of proforma
                          invoice. Upload your transfer receipt here!
                        </p>
                      </div>
                    </div>
                    <img
                      src={require("../../assets/img/about/how-to-order/track_06.jpg")}
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div class="dotspacer"></div>
                <div class="row mt-4">
                  <div class="col-md-12 text-center">
                    <div class="row no-gutters parts align-items-center">
                      <div class="col numbers bold text-center">05</div>
                      <div class="col">
                        <div class="head3 bold">Payment Received</div>
                        <p class="para1 mb-0">
                          Your payment has been confirmed by harasow's bank.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="dotspacer"></div>
                <div class="row mt-4">
                  <div class="col-md-12 text-center">
                    <div class="row no-gutters parts align-items-center mb-4">
                      <div class="col numbers bold text-center">06</div>
                      <div class="col">
                        <div class="head3 bold">Check Shipping Schedule</div>
                        <p class="para1 mb-0">
                          harasow will check the fastest shipping schedule and
                          update it on your order page! Soon the item will be
                          booked on the fastest vessel. However shipping
                          schedule is subject to change according to the
                          shipping company’s condition so harasow will notify a
                          new schedule when it’s changed.
                        </p>
                      </div>
                    </div>
                    <img
                      src={require("../../assets/img/about/how-to-order/track_08.jpg")}
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div class="dotspacer"></div>
                <div class="row mt-4">
                  <div class="col-md-12 text-center">
                    <div class="row no-gutters parts align-items-center mb-4">
                      <div class="col numbers bold text-center">07</div>
                      <div class="col">
                        <div class="head3 bold">Check Draft B / L</div>
                        <p class="para1 mb-0">
                          After ship departure, Shipping company will issue
                          DRAFT B/L. harasow will upload it in order page. Check
                          DRAFT B/L carefully. If there is any mistake on your
                          consignee and an item information or want to change
                          consignee, you can request to amend B/L.
                        </p>
                      </div>
                    </div>
                    <img
                      src={require("../../assets/img/about/how-to-order/track_09.jpg")}
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div class="dotspacer"></div>
                <div class="row mt-4">
                  <div class="col-md-12 text-center">
                    <div class="row no-gutters parts align-items-center mb-4">
                      <div class="col numbers bold text-center">08</div>
                      <div class="col">
                        <div class="head3 bold">Check Tracking Number</div>
                        <p class="para1 mb-0">
                          Track your document delivery and cargo by using below
                          information. If you click Tracking no and B/L no, you
                          can connect directly with tracking system.
                        </p>
                      </div>
                    </div>
                    <img
                      src={require("../../assets/img/about/how-to-order/track_11.jpg")}
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div class="dotspacer"></div>
                <div class="row mt-4">
                  <div class="col-md-12 text-center">
                    <div class="row no-gutters parts align-items-center mb-4">
                      <div class="col numbers bold text-center">09</div>
                      <div class="col">
                        <div class="head3 bold">Write a Review</div>
                        <p class="para1 mb-0">
                          Did you pick up your vehicle from the port? Share your
                          experience and get Bonus from Harasow!
                        </p>
                      </div>
                    </div>
                    <img
                      src={require("../../assets/img/about/how-to-order/track_12.jpg")}
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div class="dotspacer"></div>
                <div class="row mt-4">
                  <div class="col-md-12 text-center">
                    <div class="row no-gutters parts align-items-center">
                      <div class="col numbers bold text-center">10</div>
                      <div class="col">
                        <div class="head3 bold">Complete</div>
                        <p class="para1 mb-0">
                          You’ve got the item successfully! Your order has been
                          completed!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="dotspacer"></div>
                <div class="row mt-4">
                  <div class="col-12">
                    <div class="head2 medium">Need Help?</div>
                    <div class="greybox mt-4">
                      <p class="para1">
                        If you have any further questions, contact us at any
                        time! We are here to support you.
                      </p>
                      <p class="para1">Email : bis@harasow.com</p>
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

export default AppWrapper(howToUseHgs, null, null);
