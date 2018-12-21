import React, { Component } from "react";
import { connect } from "react-redux";
import { initComments } from "../redux/commenReducer";

class Bar extends Component {
  render() {
    return (
      <div>
        <h2>Bar</h2>
        <p>async load data comments:{this.props.comments.join()}</p>
        <button onClick={this.props.add}>add</button>
        <button onClick={this.props.del}>del</button>
      </div>
    );
  }
  componentDidMount() {
    if (!this.props.comments.length) {
      this.props.initComments();
    }
  }
  // asyncLoadData(store) {
  //   store.dispatch(initComments());
  // }
}
const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};
const mapDispatchToProps = dispatch => {
  return {
    add: () => {
      dispatch({
        type: "ADD_COMMENT",
        comment: Math.floor(Math.random() * 100)
      });
    },
    del: () => {
      dispatch({ type: "DELETE_COMMENT", commentIndex: 0 });
    },
    initComments: () => {
      dispatch(initComments());
    }
  };
};

Bar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Bar);

Bar.asyncLoadData = store => {
  return store.dispatch(initComments());
};
export default Bar;
