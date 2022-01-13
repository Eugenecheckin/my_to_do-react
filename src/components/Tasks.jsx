/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';

import Task from './Task';

function Tasks({ posts }) {
  const [count, setCount] = useState('all');
  const selector = useSelector(state => state.tasks.filter(element => element.checked));
  const dispatch = useDispatch();
  const buttonClickEvHandler = () => {
    if (selector.length === 0) {
      return;
    }
    dispatch({
      type: 'del-Allchecked',
      payload: {
        id: selector.map(item => item.id),
      },
    });
  };
  const itemLeft = () => {
    return posts.filter(post => { 
      if (post.checked === false) { 
        return true; 
      } 
    }).length;
  };
  return (
    <>
      {posts.filter(post => {
        if (count === 'all') {
          return true;
        }
        if (count === 'active') {
          if (post.checked === false) {
            return true;
          }
        }
        if (count === 'completed') {
          if (post.checked === true) {
            return true;
          }
        }
      }).map(item =>
        <Task
          task = { item }
          key = { item.id }
        />)}
      <label>
        item left: {' ' + itemLeft() }
      </label>
      <button
        type="button"
        onClick={() => setCount('all')}
      >
        All
      </button>
      <button
        type="button"
        onClick={() => setCount('active')}
      >
        Active
      </button>
      <button
        type="button"
        onClick={() => setCount('completed')}
      >
        Completed
      </button>
      <button
        type="button"
        onClick={buttonClickEvHandler}
      >
        Clear completed
      </button>
    </>
  );
}

function mapStateToProps(state) {
  return { posts: state.tasks };
}

export default connect(mapStateToProps, null)(Tasks);
