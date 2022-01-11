/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';

import Task from './Task';

function Tasks({ posts }) {
  const [count, setCount] = useState('all');
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
    </>
  );
}

function mapStateToProps(state) {
  return { posts: state.tasks };
}

export default connect(mapStateToProps, null)(Tasks);
