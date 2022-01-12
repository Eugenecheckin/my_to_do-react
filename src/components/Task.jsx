/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContentContainer } from '../styles/Component.style';

function Task({ task }) {
  const selector = useSelector(state => state.tasks.find(element => {
    if (element.id === task.id) {
      return true;
    }
  }));
  const dispatch = useDispatch();

  const [edit, setCount] = useState(false);

  const checkBoxClickEvHandler = () => {
    dispatch({
      type: 'set-checked',
      payload: {
        id: selector.id,
        checked: selector.checked,
      },
    });
  };
  const buttonClickEvHandler = () => {
    dispatch({
      type: 'del-checked',
      payload: {
        id: selector.id,
      },
    });
  };
  return (
    <div className="todo-item">
      <ContentContainer>
        <input
          type="checkbox"
          checked={selector.checked}
          onChange={checkBoxClickEvHandler}
        />
        <label 
          className="text-item"
          onDoubleClick={() => setCount(true)}
        >
          {selector.title}
        </label>
        <input
          type="button"
          onClick={buttonClickEvHandler}
        />
      </ContentContainer>
      { edit && <input />}
    </div>
  );
}

export default (Task);
