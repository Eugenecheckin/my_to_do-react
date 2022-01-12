/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContentContainer } from '../styles/Component.style';

function Task({ task }) {
  const selector = useSelector(state => state.tasks.find(element => {
    if (element.id === task.id) {
      return true;
    }
  }));
  const dispatch = useDispatch();

  const CheckBoxClickEvHandler = () => {
    dispatch({
      type: 'set-checked',
      payload: {
        id: selector.id,
        checked: selector.checked,
      },
    });
  };
  const ButtonClickEvHandler = () => {
    dispatch({
      type: 'del-checked',
      payload: {
        id: selector.id,
      },
    });
  };
  const PostEdit = () =>{
    
  }
  return (
    <div className="todo-item">
      <ContentContainer>
        <input
          type="checkbox"
          checked={selector.checked}
          onChange={CheckBoxClickEvHandler}
        />
        <label 
          className="text-item"
          onDoubleClick={PostEdit}
        >
          {selector.title}
        </label>
        <input
          type="button"
          onClick={ButtonClickEvHandler}
        />
      </ContentContainer>
      <input
      />
    </div>
  );
}

export default (Task);
