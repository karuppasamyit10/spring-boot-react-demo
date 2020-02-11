import React, { Component } from "react";
import PropTypes from "prop-types";
import { AppWrapper } from "../public/AppWrapper";
import { PATH } from "../../utils/Constants";
import { Link } from "react-router-dom";
import { showNotification } from "../../actions/NotificationAction";
import {
  getSavedSearchList,
  deleteSavedSearch,
  getWaitingApprovalList
} from "../../actions/searchAction";
import ReactPaginate from "react-paginate";

import { getMyProductList } from "../../actions/userAction";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      limit: 5,
      todosPerPage: 5,
      offset: 0,
      isModelOpen: 0,
      pageNo: 1,
      itemsPerPage: 5,
      total: 0,

      search: ""
    };
  }

  static propTypes = {
    prop: PropTypes
  };

  componentDidMount() {
    document.title = "Auto Harasow | Saved Search";
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    this.getMyProductList();
  }

  getMyProductList = () => {
    const { search, pageNo, itemsPerPage } = this.state;
    const params = {
      pageNo,
      itemsPerPage
    };
    this.props.getMyProductList(params, response => {
      console.log(response);
      if (response && response.response_code === 0) {
        const { totalRecords, vehicleDetailList } = response.response;
        this.setState({ total: totalRecords, userList: vehicleDetailList });
      }
    });
  };

  handlePageClick = data => {
    let selected = data.selected;
    let pageNo = Math.ceil(selected + 1);
    let offset = Math.ceil(selected * this.state.todosPerPage);
    this.setState({ offset: offset, pageNo }, () => {
      this.getApprovalList();
    });
  };
  deleteSavedSearch = (vehicleId, savedSearchId) => {
    let formData = new FormData();
    formData.append("vehicleId", vehicleId);
    formData.append("savedSearchId", savedSearchId);
    let data = {
      vehicleId: vehicleId,
      savedSearchId: savedSearchId
    };
    this.props.deleteSavedSearch(data, response => {
      console.log(response);
      if (response && response.response_code === 0) {
        this.props.showNotification("deleted successfully", "success");
        this.getSavedSearchList();
      } else {
        this.props.showNotification(response.response_message, "error");
      }
    });
  };

  searchDetails = vehicleId => {
    this.props.history.push({
      pathname: PATH.SEARCH_DETAIL,
      state: {
        vehicleId: vehicleId
      }
    });
  };

  render() {
    const { userList, total, todosPerPage, offset } = this.state;
    const pageDisplayCount = Math.ceil(total / todosPerPage);

    return (
      <React.Fragment>
        <section class="breadcrumb_wrap">
          <div class="container">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <Link to={PATH.DASHBOARD}>Home</Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Product List
                </li>
              </ol>
            </nav>
          </div>
        </section>

        <section class="register-wrap spacerTop">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <div class="sidelinks">
                  <div class="slhead text-center medium head3">My Account</div>
                  <ul class="sllinks medium">
                    <li class="active">
                      <a href="#">
                        Saved Searches{" "}
                        <span>
                          <i class="fas fa-chevron-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Saved Listings{" "}
                        <span>
                          <i class="fas fa-chevron-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Financing
                        <span>
                          <i class="fas fa-chevron-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Inbox
                        <span>
                          <i class="fas fa-chevron-right"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-9 form-wrap">
                <h1 class="form-header">Product List</h1>
                <p class="lead">List of my products</p>
                <div class="row no-gutters">
                  <div class="col-12">
                    <div class="table-responsive">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Car Model</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {userList && userList.length ? (
                            userList.map((list, index) => {
                              return (
                                <tr style={{ cursor: "pointer" }}>
                                  <th scope="row">{offset + index + 1}</th>
                                  <td
                                    onClick={() => {
                                      this.searchDetails(list.vehicleId);
                                    }}
                                  >
                                    {list.vehicleName ? list.vehicleName : ""}
                                  </td>
                                  <td>
                                    {list.modelDetail} {list.conditionType}
                                  </td>
                                  <td>{list.price}</td>
                                  <td>
                                    <div
                                      class="btn-group"
                                      role="group"
                                      aria-label="Basic example"
                                    >
                                      <button
                                        type="button"
                                        class="btn btn-primary"
                                        onClick={() => {
                                          this.searchDetails(list.vehicleId);
                                        }}
                                      >
                                        View
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })
                          ) : (
                            <tr className="text-center">
                              <td colspan="12">No items found</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                    {pageDisplayCount > 1 ? (
                      <div className="totalresults py-3 mt-3">
                        <div className="row align-items-center">
                          <div className="col-md-6">
                            <span className="bold">
                              {this.state.pageNo} - {pageDisplayCount}
                            </span>{" "}
                            out of{" "}
                            <span className="bold">{pageDisplayCount}</span>{" "}
                            listings
                          </div>
                          <div className="col-md-6">
                            <ReactPaginate
                              previousLabel={"previous"}
                              nextLabel={"next"}
                              breakLabel={"..."}
                              breakClassName={"break-me"}
                              pageCount={pageDisplayCount}
                              marginPagesDisplayed={2}
                              pageRangeDisplayed={5}
                              onPageChange={this.handlePageClick}
                              containerClassName={
                                "pagination justify-content-end"
                              }
                              subContainerClassName={"page-item"}
                              activeClassName={"page-item active"}
                              pageLinkClassName={"page-link"}
                              nextLinkClassName={"page-link"}
                              previousLinkClassName={"page-link"}
                              nextClassName={"page-item"}
                              previousClassName={"page-item"}
                              disabledClassName={"disabled"}
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSavedSearchList: (params, callback) => {
      dispatch(getSavedSearchList(params, callback));
    },
    deleteSavedSearch: (params, callback) => {
      dispatch(deleteSavedSearch(params, callback));
    },
    showNotification: (message, type) => {
      dispatch(showNotification(message, type));
    },
    getWaitingApprovalList: (params, callback) => {
      dispatch(getWaitingApprovalList(params, callback));
    },
    getMyProductList: (params, callback) => {
      dispatch(getMyProductList(params, callback));
    }
  };
};

export default AppWrapper(ProductList, null, mapDispatchToProps);
