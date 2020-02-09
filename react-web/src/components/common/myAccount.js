import React, { Component } from "react";
import { Spinner } from "react-activity";
import "react-activity/dist/react-activity.css";
import { connect } from "react-redux";
import store from "store";
import { AppWrapper } from "../public/AppWrapper";
import {
  logInUser,
  userRegistration,
  getProfileInfo
} from "../../actions/userAction";
import { getVehicleMasterData } from "../../actions/searchAction";
import { showNotification } from "../../actions/NotificationAction";
import { PATH } from "../../utils/Constants";
import { Link } from "react-router-dom";

class myAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      confirmPassword: "",
      email: "",
      mobile: "",
      firstName: "",
      lastName: "",
      city: "",
      country: null,
      mobileNumber: "",
      zipCode: "",
      preview: [],
      countryList: [],
      error: {
        userName: "",
        password: "",
        confirmPassword: "",
        email: "",
        mobile: "",
        name: "",
        country: "",
        city: ""
      },
      token: {},
      isdisable: false,
      profileDetails: {}
    };
    this.userNameRef = React.createRef();
    this.passwordRef = React.createRef();
    this.emailRef = React.createRef();
    this.confirmPasswordRef = React.createRef();
    this.mobileRef = React.createRef();
    this.nameRef = React.createRef();
  }

  componentDidMount() {
    document.title = "Auto Harasow | Registration";
    this.getProfileInfo();
    this.getVehicleMasterData();
  }


  getVehicleMasterData = () => {
    this.props.getVehicleMasterData({}, response => {
      if (response && response.response_code === 0) {
        this.setState({ countryList: response.response.countryList });
      }
    });
  };

  getProfileInfo = () => {
    this.props.getProfileInfo({}, response => {
      console.log(response);
      if (response && response.response_code === 0) {
        this.handleSetProfileInfo(response.response);
      }
    });
  };

  handleSetProfileInfo = profile => {
    const {
      userName,
      email,
      mobile_number,
      firstName,
      lastName,
      city,
      country,
      zipCode,
      address,
      photo
    } = profile;
    let img = [photo];
    this.setState({
      userName,
      email,
      mobileNumber: mobile_number,
      firstName,
      lastName,
      city,
      country,
      zipCode,
      address,
      preview: img
    });
  };

  removePhoto = index => {
    let preview = this.state.preview ? this.state.preview : [];
    let files = this.state.files ? this.state.files : [];
    files.splice(index, 1);
    preview.splice(index, 1);
    this.setState({ preview, files });
  };

  handleImageRead = e => {
    e.preventDefault();
    let preview = [];
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      preview.push(reader.result);
      this.setState({
        preview: preview
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  handleOnChange = e => {
    let { target } = e;
    let { name, value } = target;
    if (name === "image") {
      this.handleImageRead(e);
    }
    if (name === "mobileNumber") {
      value = value.replace(/[^0-9]/g, "");
    }
    this.setState({ [name]: value }, () => {
      this.handleRemoveError();
    });
  };

  onChangeCountry = e => {
    this.setState({ country: e.target.value }, () => {});
  }
  handleRemoveError = () => {
    let {
      userName,
      password,
      error,
      confirmPassword,
      email,
      name,
      mobileNumber,
      country,
      city
    } = this.state;
    if (userName) {
      this.userNameRef.current.classList.remove("error");
      error.userName = "";
      this.setState({ error: error });
    }
    if (email) {
      this.emailRef.current.classList.remove("error");
      error.email = "";
      this.setState({ error: error });
    }
    if (password) {
      this.passwordRef.current.classList.remove("error");
      error.password = "";
      this.setState({ error: error });
    }
    if (confirmPassword) {
      this.confirmPasswordRef.current.classList.remove("error");
      error.confirmPassword = "";
      this.setState({ error: error });
    }
    if (name) {
      this.nameRef.current.classList.remove("error");
      error.name = "";
      this.setState({ error: error });
    }
    if (mobileNumber) {
      this.mobileRef.current.classList.remove("error");
      error.mobileNumber = "";
      this.setState({ error: error });
    }
    if (country) {
      this.mobileRef.current.classList.remove("error");
      error.country = "";
      this.setState({ error: error });
    }
    if (city) {
      this.mobileRef.current.classList.remove("error");
      error.city = "";
      this.setState({ error: error });
    }
  };

  handleValidate = () => {
    let {
      userName,
      password,
      error,
      confirmPassword,
      email,
      firstName,
      lastName,
      mobileNumber,
      country,
      city
    } = this.state;
    if (!userName) {
      this.userNameRef.current.focus();
      this.userNameRef.current.classList.add("error");
      error.userName = "Enter user name";
      this.setState({ error: error });
      return false;
    }
    if (!email || !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      this.emailRef.current.focus();
      this.emailRef.current.classList.add("error");
      error.email = "Enter Valid Email";
      this.setState({ error: error });
      return false;
    }
    if (!password) {
      this.passwordRef.current.focus();
      this.passwordRef.current.classList.add("error");
      error.password = "Enter Password";
      this.setState({ error: error });
      return false;
    }
    if (!confirmPassword) {
      this.confirmPasswordRef.current.focus();
      this.confirmPasswordRef.current.classList.add("error");
      error.confirmPassword = "Enter Confirm Password";
      this.setState({ error: error });
      return false;
    }
    if (confirmPassword !== password) {
      this.confirmPasswordRef.current.focus();
      this.confirmPasswordRef.current.classList.add("error");
      error.confirmPassword = "Confirm Password and password mismatch";
      this.setState({ error: error });
      return false;
    }
    if (!firstName) {
      this.firstNameRef.current.focus();
      this.firstNameRef.current.classList.add("error");
      error.name = "Enter name";
      this.setState({ error: error });
      return false;
    }
    if (!lastName) {
      this.lastNameRef.current.focus();
      this.lastNameRef.current.classList.add("error");
      error.name = "Enter name";
      this.setState({ error: error });
      return false;
    }
    if (!mobileNumber) {
      this.mobileRef.current.focus();
      this.mobileRef.current.classList.add("error");
      error.mobileNumber = "Enter mobile";
      this.setState({ error: error });
      return false;
    }
    if (!country) {
      this.mobileRef.current.focus();
      this.mobileRef.current.classList.add("error");
      error.country = "Choose Country";
      this.setState({ error: error });
      return false;
    }
    if (!city) {
      this.mobileRef.current.focus();
      this.mobileRef.current.classList.add("error");
      error.city = "Enter City";
      this.setState({ error: error });
      return false;
    }
    return true;
  };

  submit = () => {
    console.log(this.state.userName, this.state.password);
    let {
      userName,
      password,
      email,
      confirmPassword,
      mobileNumber,
      firstName,
      lastName,
      zipCode,
      address,
      city,
      country,
      preview
    } = this.state;
    let inputObject = {
      userName,
      password,
      email,
      confirmPassword,
      mobileNumber,
      firstName,
      lastName,
      zipCode,
      address,
      city,
      country: country,
      photo: preview && preview.length ? preview[0] : null
    };
    let submit = this.handleValidate();
    if (submit) {
      this.setState({ isdisable: true });
      this.props.registration(inputObject, response => {
        if (response && response.response_code === 0) {
          this.setState({ isdisable: false });
          this.props.showNotification("sucessfully registered", "success");
          this.props.history.push(PATH.SIGIN);
        } else if (response && response.response_code > 0) {
          this.setState({ isdisable: false });
          this.props.showNotification(response.response_message, "error");
        }
      });
    }
  };

  render() {
    return (
      <section class="">
        <div class="container">
          <div class="row">
            <div class="col-md-9 form-wrap">
              <h1 class="form-header">MY ACCOUNT</h1>
              <form class="row no-gutters form-rows">
                <div class="col-lg-12">
                  <div class="form-group row no-gutters align-items-center">
                    <label class="col-md-3 bold form-left">User Name</label>
                    <div class="col-md-9 form-right">
                      <input
                        type="text"
                        ref={this.userNameRef}
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="userName"
                        value={this.state.userName}
                        onChange={e => {
                          this.handleOnChange(e);
                        }}
                      />
                      <p style={{ color: "red" }}>
                        {this.state.error["userName"]
                          ? this.state.error["userName"]
                          : ""}
                      </p>
                    </div>
                  </div>
                  <div class="form-group row no-gutters align-items-center">
                    <label class="col-md-3 bold form-left">First Name</label>
                    <div class="col-md-9 form-right">
                      <input
                        type="text"
                        class="form-control"
                        class="form-control"
                        ref={this.firstNameRef}
                        id="nameInput"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={e => {
                          this.handleOnChange(e);
                        }}
                      />
                      <p style={{ color: "red" }}>
                        {this.state.error["firstName"]
                          ? this.state.error["firstName"]
                          : ""}
                      </p>
                    </div>
                  </div>
                  <div class="form-group row no-gutters align-items-center">
                    <label class="col-md-3 bold form-left">Last Name</label>
                    <div class="col-md-9 form-right">
                      <input
                        type="text"
                        class="form-control"
                        class="form-control"
                        ref={this.lastNameRef}
                        id="nameInput"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={e => {
                          this.handleOnChange(e);
                        }}
                      />
                      <p style={{ color: "red" }}>
                        {this.state.error["lastName"]
                          ? this.state.error["lastName"]
                          : ""}
                      </p>
                    </div>
                  </div>
                  <div class="form-group row no-gutters align-items-center">
                    <label class="col-md-3 bold form-left">Email</label>
                    <div class="col-md-9 form-right">
                      <input
                        type="text"
                        class="form-control"
                        value=""
                        type="email"
                        ref={this.emailRef}
                        class="form-control"
                        id="exampleInputEmail2"
                        aria-describedby="emailHelp"
                        name="email"
                        value={this.state.email}
                        onChange={e => {
                          this.handleOnChange(e);
                        }}
                      />
                      <p style={{ color: "red" }}>
                        {this.state.error["email"]
                          ? this.state.error["email"]
                          : ""}
                      </p>
                    </div>
                  </div>
                  <div class="form-group row no-gutters align-items-center">
                    <label class="col-md-3 bold form-left">Mobile</label>
                    <div class="col-md-9 form-right">
                      <input
                        class="form-control"
                        type="text"
                        ref={this.mobileRef}
                        id="exampleInputPassword2"
                        // placeholder="enter password"
                        name="mobileNumber"
                        pattern="[0-9]"
                        maxLength="10"
                        value={this.state.mobileNumber}
                        onChange={e => {
                          this.handleOnChange(e);
                        }}
                      />
                      <p style={{ color: "red" }}>
                        {this.state.error["mobileNumber"]
                          ? this.state.error["mobileNumber"]
                          : ""}
                      </p>
                    </div>
                  </div>
                  <div class="form-group row no-gutters align-items-center">
                    <label class="col-md-3 bold form-left">Country</label>
                    <div class="col-md-9 form-right">
                      <select
                        class="form-control"
                        value={this.state.country}
                        onChange={this.onChangeCountry}
                      >
                        <option value={null} selected>
                          Select Country
                        </option>
                        {this.state.countryList &&
                        this.state.countryList.length ? (
                          this.state.countryList.map(countryList => {
                            return (
                              <option value={countryList.country}>
                                {countryList.country}
                              </option>
                            );
                          })
                        ) : (
                          <option value="">Loading...</option>
                        )}
                      </select>
                    </div>
                  </div>
                  <div class="form-group row no-gutters align-items-center">
                    <label class="col-md-3 bold form-left">City</label>
                    <div class="col-md-9 form-right">
                      <input
                        type="text"
                        class="form-control"
                        class="form-control"
                        id="cityInput"
                        name="city"
                        value={this.state.city}
                        onChange={e => {
                          this.handleOnChange(e);
                        }}
                      />
                      <p style={{ color: "red" }}>
                        {this.state.error["city"]
                          ? this.state.error["city"]
                          : ""}
                      </p>
                    </div>
                  </div>
                  <div class="form-group row no-gutters align-items-center">
                    <label class="col-md-3 bold form-left">Zip Code</label>
                    <div class="col-md-9 form-right">
                      <input
                        type="text"
                        class="form-control"
                        class="form-control"
                        id="cityInput"
                        name="zipCode"
                        value={this.state.zipCode}
                        onChange={e => {
                          this.handleOnChange(e);
                        }}
                      />
                      <p style={{ color: "red" }}>
                        {this.state.error["zipCode"]
                          ? this.state.error["zipCode"]
                          : ""}
                      </p>
                    </div>
                  </div>
                  <div class="form-group row no-gutters align-items-center">
                    <label class="col-md-3 bold form-left">Address</label>
                    <div class="col-md-9 form-right">
                      <input
                        type="text"
                        class="form-control"
                        class="form-control"
                        id="cityInput"
                        name="address"
                        value={this.state.address}
                        onChange={e => {
                          this.handleOnChange(e);
                        }}
                      />
                      <p style={{ color: "red" }}>
                        {this.state.error["address"]
                          ? this.state.error["address"]
                          : ""}
                      </p>
                    </div>
                  </div>

                  <div class="form-group row no-gutters align-items-center">
                    <label class="col-md-3 bold form-left">Terms of Use</label>
                    <div class="col-md-9 form-right checkboxwrap">
                      <input type="checkbox" class="form-check-input" />
                      <label class="form-check-label">
                        I agree with <a href="javascript:;">Terms of Use</a>
                      </label>
                    </div>
                  </div>

                  <div class="row mb-4 mt-3">
                    <div class="col-12">
                      <div class="form-grop">
                        <label class="label bold">File Upload</label>
                        <div class="custom-file">
                          <input
                            type="file"
                            class="custom-file-input"
                            id="customFile"
                            name="image"
                            onChange={e => {
                              this.handleOnChange(e);
                            }}
                          />
                          <label class="custom-file-label" for="customFile">
                            Choose file
                          </label>
                        </div>
                      </div>
                      <div class="imgpreview row no-gutters">
                        {this.state.preview && this.state.preview.length
                          ? this.state.preview.map((item, index) => {
                              return (
                                <div class="prevfile col">
                                  <button
                                    class="removefile"
                                    onClick={() => {
                                      this.removePhoto(index);
                                    }}
                                  >
                                    <i class="fas fa-times-circle"></i>
                                  </button>
                                  <img src={item} class="img-fluid" alt="" />
                                </div>
                              );
                            })
                          : " "}
                      </div>
                    </div>
                  </div>

                  <div class="form-group text-center mt-5 plain">
                    <button
                      type="button"
                      class="btn btn-primary btn-lg"
                      onClick={() => this.submit()}
                      disabled={this.state.isdisable ? "disabled" : null}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        {this.state.isdisable ? <Spinner color="#FFF" /> : null}
                        Register
                      </div>
                      Complete
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      // <div className="custom">
      //   <div className="container">
      //     <div className="row justify-content-center">
      //       <div className="col-10 col-sm-7 col-lg-5 login-bg-white login-sec">
      //         <h2 className="text-center" style={{ color: "#555" }}>
      //           ACCOUNT REGISTRATION
      //         </h2>
      //         <div class="form-group">
      //           <label for="exampleInputEmail1" style={{ color: "#555" }}>
      //             Username
      //           </label>
      //           <input
      //             type="email"
      //             ref={this.userNameRef}
      //             class="form-control"
      //             id="exampleInputEmail1"
      //             aria-describedby="emailHelp"
      //             // placeholder="enter username"
      //             name="userName"
      //             value={this.state.userName}
      //             onChange={e => {
      //               this.handleOnChange(e);
      //             }}
      //           />
      //           <p style={{ color: "red" }}>
      //             {this.state.error["userName"]
      //               ? this.state.error["userName"]
      //               : ""}
      //           </p>
      //         </div>

      //         <div class="form-group">
      //           <label for="exampleInputEmail2" style={{ color: "#555" }}>
      //             Email
      //           </label>
      //           <input
      //             type="email"
      //             ref={this.emailRef}
      //             class="form-control"
      //             id="exampleInputEmail2"
      //             aria-describedby="emailHelp"
      //             // placeholder="enter username"
      //             name="email"
      //             value={this.state.email}
      //             onChange={e => {
      //               this.handleOnChange(e);
      //             }}
      //           />
      //           <p style={{ color: "red" }}>
      //             {this.state.error["email"] ? this.state.error["email"] : ""}
      //           </p>
      //         </div>

      //         <div class="form-group">
      //           <label for="exampleInputPassword1" style={{ color: "#555" }}>
      //             Password
      //           </label>
      //           <input
      //             type="password"
      //             class="form-control"
      //             ref={this.passwordRef}
      //             id="exampleInputPassword1"
      //             // placeholder="enter password"
      //             name="password"
      //             value={this.state.password}
      //             onChange={e => {
      //               this.handleOnChange(e);
      //             }}
      //           />
      //           <p style={{ color: "red" }}>
      //             {this.state.error["password"]
      //               ? this.state.error["password"]
      //               : ""}
      //           </p>
      //         </div>

      //         <div class="form-group">
      //           <label for="exampleInputPassword1" style={{ color: "#555" }}>
      //             Confirm Password
      //           </label>
      //           <input
      //             type="password"
      //             class="form-control"
      //             ref={this.confirmPasswordRef}
      //             id="exampleInputPassword2"
      //             // placeholder="enter password"
      //             name="confirmPassword"
      //             value={this.state.confirmPassword}
      //             onChange={e => {
      //               this.handleOnChange(e);
      //             }}
      //           />
      //           <p style={{ color: "red" }}>
      //             {this.state.error["confirmPassword"]
      //               ? this.state.error["confirmPassword"]
      //               : ""}
      //           </p>
      //         </div>

      //         <div class="form-group">
      //           <label for="exampleInputPassword1" style={{ color: "#555" }}>
      //             Full Name
      //           </label>
      //           <input
      //             type="text"
      //             class="form-control"
      //             ref={this.nameRef}
      //             id="nameInput"
      //             // placeholder="enter password"
      //             name="name"
      //             value={this.state.name}
      //             onChange={e => {
      //               this.handleOnChange(e);
      //             }}
      //           />
      //           <p style={{ color: "red" }}>
      //             {this.state.error["name"] ? this.state.error["name"] : ""}
      //           </p>
      //         </div>

      //         <div class="form-group">
      //           <label for="exampleInputPassword1" style={{ color: "#555" }}>
      //             Mobile
      //           </label>
      //           <input
      //             type="text"
      //             class="form-control"
      //             ref={this.mobileRef}
      //             id="exampleInputPassword2"
      //             // placeholder="enter password"
      //             name="mobile"
      //             pattern="[0-9]"
      //             maxLength="10"
      //             value={this.state.mobile}
      //             onChange={e => {
      //               this.handleOnChange(e);
      //             }}
      //           />
      //           <p style={{ color: "red" }}>
      //             {this.state.error["mobile"] ? this.state.error["mobile"] : ""}
      //           </p>
      //         </div>

      //         <div className="text-center">
      //           <button
      //             onClick={() => this.submit()}
      //             className="btn btn-primary mt-5 text-center login100-form-btn"
      //             disabled={this.state.isdisable ? "disabled" : null}
      //           >
      //             <div
      //               style={{
      //                 display: "flex",
      //                 alignItems: "center",
      //                 justifyContent: "center"
      //               }}
      //             >
      //               {this.state.isdisable ? <Spinner color="#FFF" /> : null}
      //               Register
      //             </div>
      //           </button>
      //         </div>
      //         <div className="text-center mt-3 mb-3">
      //           <Link to={PATH.INDEX}>Back to signin</Link>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

myAccount.propTypes = {};

const mapDispatchToProps = dispatch => {
  return {
    logInUser: (username, password, callback) => {
      dispatch(logInUser(username, password, callback));
    },
    registration: (inputObject, callback) => {
      dispatch(userRegistration(inputObject, callback));
    },
    getVehicleMasterData: (params, callback) => {
      dispatch(getVehicleMasterData(params, callback));
    },
    getProfileInfo: (params, callback) => {
      dispatch(getProfileInfo(params, callback));
    },
    showNotification: (message, type) => {
      dispatch(showNotification(message, type));
    }
  };
};

export default connect(null, mapDispatchToProps)(myAccount);
