import { connect } from 'react-redux';

import React from 'react';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

function ToDo({ text, id, onBtnClick }) {
  return (
    <li>
      <Link to={`/${id}`}>
        {text}
        <button onClick={onBtnClick}>DELETE</button>
      </Link>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log(ownProps);
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
