import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Headline extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { header, desc } = this.props;
    if (!header) return null;
    return (
      <div data-test="headline">
        <h1 data-test="header">{header}</h1>
        <p data-test="desc">{desc}</p>
      </div>
    );
  }
}

Headline.proptype = {
  header: PropTypes.string,
  desc: PropTypes.string,
};
