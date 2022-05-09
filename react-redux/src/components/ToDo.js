import { connect } from 'react-redux';
import Detail from '../routes/Detail';

import React from 'react';
import { remove } from '../store';
import { Switch, Route, Link } from 'react-router-dom';

function ToDo({ text, id, onBtnClick }) {
  return (
    <>
      <li>
        <Link to={`/${id}`}>{text}</Link>
        <button onClick={onBtnClick}>DELETE</button>
      </li>

      <Switch>
        <Route path="/:id" exact component={Detail}></Route>
      </Switch>
    </>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log(ownProps);
  return {
    onBtnClick: () => dispatch(remove(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
