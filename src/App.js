import React, { Component } from "react";
import Header from "./components/Header";
import Headline from "./components/HeadLine";
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Headline header="Hello" desc="hello world" />
      </div>
    );
  }
}
