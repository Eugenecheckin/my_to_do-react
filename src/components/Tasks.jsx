import React, { useState } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';

import { DEL_ALLCHECKED } from '../store/Types';
import Task from './Task';
import { FootContainer, ButtonFlexContainer, StyleButton } from '../styles/Tasks.style';

function Tasks({ posts }) {
  const [count, setCount] = useState('all');
  const selector = useSelector(state => state.tasks.filter(element => element.checked));

  const dispatch = useDispatch();
  const buttonClickEvHandler = () => {
    if (selector.length === 0) {
      return;
    }
    dispatch({
      type: DEL_ALLCHECKED,
      payload: {
        id: selector.map(item => item.id),
      },
    });
  };
  const itemLeft = () => posts.filter(post => {
    if (post.checked === false) {
      return true;
    }
  }).length;
  const isCompletedExist = !!posts.filter((item) => item.checked).length;

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
      }).map(item => (
        <Task
          className="Tast-todo"
          task={item}
          key={item.id}
        />
      ))}
      {!!posts.length && (
        <FootContainer>
          <ButtonFlexContainer>
            <label className="itemLeft">
              {` ${itemLeft()}` }
              {' '}
              items left
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
              {isCompletedExist
                ? (
                  <StyleButton>
                    <button
                      className="clearButton"
                      type="button"
                      onClick={buttonClickEvHandler}
                    >
                      Clear completed
                    </button>
                  </StyleButton>
                ) : <div className="flexDivClear" />}
            </StyleButton>
          </ButtonFlexContainer>
        </FootContainer>
      )}
    </>
  );
}

function mapStateToProps(state) {
  return { posts: state.tasks };
}

export default connect(mapStateToProps, null)(Tasks);
