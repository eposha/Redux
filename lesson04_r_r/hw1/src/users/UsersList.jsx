import React from "react";
import { connect } from "react-redux";
import * as userActions from "./userList.actions";
import User from "./User";
import Pagination from "./Pagination";

class UsersList extends React.Component {
  render() {
    const { users, currentPage, goNext, goPrev } = this.props;
    const currentUsersList = users.slice(currentPage, 3 + currentPage);

    return (
      <>
        <Pagination
          goNextPage={goNext}
          goPrevPage={goPrev}
          currentPage={currentPage}
          totalItems={users.length}
          itemsPerPage={currentUsersList.length}
        />
        <ul className="users">
          {currentUsersList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </>
    );
  }
}

const mapState = state => {
  return { users: state.users, currentPage: state.currentPage };
};

const mapDispatch = {
  goNext: userActions.goNext,
  goPrev: userActions.goPrev
};

const connector = connect(mapState, mapDispatch);

const Users = connector(UsersList);

export default Users;
