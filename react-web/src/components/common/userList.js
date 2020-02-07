import React, { Component } from "react";
import PropTypes from "prop-types";
import { AppWrapper } from "../public/AppWrapper";
import { PATH } from "../../utils/Constants";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { showNotification } from "../../actions/NotificationAction";
import { getuserList, deleteSavedSearch , changeMemberShip} from "../../actions/searchAction";
import ReactPaginate from "react-paginate";

class userList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      limit: 5,
      todosPerPage: 5,
      offset: 1,
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
    this.getuserList();
  }

  getuserList = () => {
    const { search, pageNo, itemsPerPage } = this.state;
    const params = {
      search,
      pageNo,
      itemsPerPage
    };
    // let formData = new FormData();
    // formData.append("search", search);
    // formData.append("itemsPerPage", itemsPerPage);
    // formData.append("pageNo", pageNo);
    this.props.getuserList(params, response => {
      console.log(response);
      if (response && response.response_code === 0) {
        const { totalRecords, userList } = response.response;
        this.setState({ total: totalRecords , userList: userList });
      }
    });
  };

  handlePageClick = data => {
    let selected = data.selected;
    let offset = Math.ceil(selected + 1);
    this.setState({ offset: offset }, () => {
      this.getuserList();
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
        this.getuserList();
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

  changeMemberShip = (userId, membershipTypeId) => {
    const params = {
      userId,
      membershipTypeId
    };
    this.props.changeMemberShip(params, response => {
      console.log(response);
    });
  };

  render() {
    const { userList,total, todosPerPage } = this.state;
    const pageDisplayCount = Math.ceil(total / todosPerPage);
    return (
      <React.Fragment>
        <section class="">
          <div class="container">
            <div class="row">
              <div class="col-md-9 form-wrap">
                <h1 class="form-header">User List</h1>
                <p class="lead">List of approved users.</p>
                <div class="row no-gutters">
                  <div class="col-12">
                    <div class="table-responsive">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>test</td>
                            <td>email@gmail.com</td>
                            <td>+91 896789789</td>
                            <td>
                              <div
                                class=""
                                role="group"
                                aria-label="Basic example"
                              >
                                <button
                                  type="button"
                                  class="btn btn-info btn-sm mr-2"
                                  onClick={()=>{this.changeMemberShip(1,1)}}
                                >
                                  BASIC
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-secondary btn-sm mr-2"
                                  onClick={()=>{this.changeMemberShip(1,2)}}
                                >
                                  SILVER
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-warning btn-sm mr-2"
                                  onClick={()=>{this.changeMemberShip(1,3)}}
                                >
                                  GOLD
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-success btn-sm mr-2"
                                  onClick={()=>{this.changeMemberShip(1,4)}}
                                >
                                  VIP
                                </button>
                              </div>
                            </td>
                          </tr>
                          {userList && userList.length ? (
                            userList.map((list, index) => {
                              return (
                                <tr>
                                  <th scope="row">{index + 1}</th>
                                  <td>
                                    {list.vehicleName ? list.vehicleName : ""}
                                  </td>
                                  <td>
                                    357 Great Deals out of 7,942 listings
                                    starting at $1,100
                                  </td>
                                  <td>USD 970</td>
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
                                      <button
                                        type="button"
                                        class="btn btn-danger"
                                        onClick={() => {
                                          this.deleteSavedSearch(
                                            list.vehicleId,
                                            list.savedSearchId
                                          );
                                        }}
                                      >
                                        Delete
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
                  </div>
                </div>
                {pageDisplayCount > 1 ? (
                    <div className="totalresults py-3 mt-3">
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <span className="bold">
                            {this.state.offset} - {pageDisplayCount}
                          </span>{" "}
                          out of <span className="bold">{pageDisplayCount}</span>{" "}
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
        </section>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {

    getuserList: (params, callback) => {
      dispatch(getuserList(params, callback));
    },
    deleteSavedSearch: (params, callback) => {
      dispatch(deleteSavedSearch(params, callback));
    },
    changeMemberShip: (params, callback) => {
      dispatch(changeMemberShip(params, callback));
    },
    showNotification: (message, type) => {
      dispatch(showNotification(message, type));
    }
  };
};
export default connect(null, mapDispatchToProps)(userList);
