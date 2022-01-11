/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Checkbox } from '@mui/material';
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
  return (
    <div className="todo-item">
      <ContentContainer>
        <Checkbox
          checked={selector.checked}
          onChange={CheckBoxClickEvHandler}
        />
        <label className="text-item">
          {selector.title}
        </label>
        <Button
          onClick={ButtonClickEvHandler}
        >
          &times;
        </Button>
      </ContentContainer>
    </div>
  );
}

export default (Task);
