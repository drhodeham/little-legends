import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionCreators from '../../_redux/actions';
import Header from '../../organisms/Header';
import '../../style.css';

class App extends Component {
  render() {
    const { text, setText } = this.props;
    return (
      <div className="app">
        <Header text={text} onClick={() => setText('OOF')}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    text: state.text,
  }
}

export default connect(mapStateToProps, ActionCreators)(App);
