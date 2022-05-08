import React from 'react';
import { connect } from 'react-redux';

function Detail({ toDo }) {
  return <div>{toDo.text}</div>;
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((toDo) => toDo.id === id) };
}

export default connect(mapStateToProps)(Detail);
