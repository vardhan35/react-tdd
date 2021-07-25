import React, { Component } from "react";
import PropTypes from "prop-types";

class ListItem extends Component {
  render() {
    const { title, discription } = this.props;
    if (!title) {
      return null;
    }
    return (
      <div data-test="listItem">
        <h1 data-test="listTitle">{title}</h1>
        <p data-test="listDiscription">{discription}</p>
      </div>
    );
  }
}

ListItem.propTypes = {
  title: PropTypes.string,
  discription: PropTypes.string,
};
export default ListItem;
