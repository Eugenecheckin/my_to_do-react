/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable prefer-template */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import Task from './Task';
import { StyleButton, ButtonFlexContainer, FootContainer } from '../styles/Task.style';

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
          className="Tast-todo"
          task={item}
          key={item.id}
        />)}
      <FootContainer>
      <ButtonFlexContainer>
      <label>
        item left: {' ' + itemLeft() }
      </label>
      <ButtonFlexContainer>
      <StyleButton>
      <button
        className={`${count === 'all' && 'activeButton'}`}
        type="button"
        onClick={() => setCount('all')}
      >
        All
      </button>
      </StyleButton>
      <StyleButton>
      <button
        className={`${count === 'active' && 'activeButton'}`}
        type="button"
        onClick={() => setCount('active')}
      >
        Active
      </button>
      </StyleButton>
      <StyleButton>
      <button
        className={`${count === 'completed' && 'activeButton'}`}
        type="button"
        onClick={() => setCount('completed')}
      >
        Completed
      </button>
      </StyleButton>
      </ButtonFlexContainer>
      <StyleButton>
      <button
        className="clearButton"
        type="button"
        onClick={buttonClickEvHandler}
      >      
        Clear completed
      </button>
      </StyleButton>
      </ButtonFlexContainer>
      </FootContainer> 
    </>
  );
}

function mapStateToProps(state) {
  return { posts: state.tasks };
}

export default connect(mapStateToProps, null)(Tasks);
