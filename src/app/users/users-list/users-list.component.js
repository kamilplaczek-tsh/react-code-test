import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import UserListElement from './user-list-element/user-list-element.component';
import Placeholder from './placeholder/placeholder.component';
import './users-list.css';

class UsersList extends Component {
  // normally, we would keep the data in redux store
  state = {
    data: [],
    currentPage: 1,
    totalPages: 1,
  };

  componentDidMount() {
    this.fetchUsers(this.state.currentPage);
  }

  pageSize = 5;

  hasNextPage = () => this.state.currentPage < this.state.totalPages;

  fetchUsers = (page) => {
    fetch(`https://reqres.in/api/users?per_page=${this.pageSize}&page=${page}`)
      .then(response => response.json())
      .then((usersData) => {
        this.setState({
          data: [...this.state.data, ...usersData.data],
          totalPages: usersData.total_pages,
          currentPage: usersData.page,
        });
      });
  };

  loadMore = (page) => {
    // here normally we would dispatch an action
    if (this.hasNextPage()) {
      this.fetchUsers(page);
    }
  };

  render() {
    const items = this.state.data.map(user => <UserListElement key={user.id} user={user} />);
    return (
      <div className="users-list__container">
        <InfiniteScroll
          pageStart={1}
          loadMore={this.loadMore}
          hasMore={this.hasNextPage()}
          useWindow={false}
          threshold={50}
          loader={<Placeholder key="users-list-placeholder" />}
        >
          {items}
        </InfiniteScroll>
      </div>
    );
  }
}

export default UsersList;
