import React, { Component } from 'react';
import { connect } from "react-redux";

class Foo extends Component {
  render() {
    return (
      <div>
        <h2>Foo</h2>
        <p>comments:{this.props.comments.join()}</p>
        <button onClick={this.props.add}>add</button>
        <button onClick={this.props.del}>del</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    add: () => {
      dispatch({ type: 'ADD_COMMENT', comment: Math.floor(Math.random()*100) })
    },
    del:()=>{
      dispatch({ type: 'DELETE_COMMENT', commentIndex: 0 })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Foo);