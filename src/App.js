import React, { Component } from "react";
import Header from "./components/Header";
import Headline from "./components/HeadLine";
import ListItem from "./components/ListItem";
import SharedButton from "./components/Button";
import { fetchposts } from "./redux/actions";
import { connect } from "react-redux";
class App extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }
  fetch() {
    this.props.fetchposts();
  }
  render() {
    const { posts } = this.props;
    const configButton = {
      buttonText: "Get posts",
      emitEvent: this.fetch,
    };
    return (
      <div data-test="appComponent">
        <Header />
        <Headline header="Hello" desc="hello world" />
        <SharedButton {...configButton} />
        {posts.length > 0 && (
          <div>
            {posts.map((post, index) => {
              const { title, body } = post;
              const configlistItem = {
                title,
                discription: body,
              };
              return <ListItem key={index} {...configlistItem} />;
            })}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
export default connect(mapStateToProps, { fetchposts })(App);
