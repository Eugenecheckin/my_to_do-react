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

  const [edit, setEdit] = useState('');

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

  const keyInputHandler = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      if (edit.trim() === '') {
        return;
      }
      const trimedTitle = edit.trim();
      const payload = {
        title: trimedTitle,
        id: selector.id,
        checked: false,
      };
      dispatch({
        type: 'edit-item',
        payload,
      });
      setEdit('');
    }
    if (event.keyCode === 27) {
      setEdit('');
    }
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
          onDoubleClick={() => setEdit(selector.title)}
        >
          {selector.title}
        </label>
        <input
          type="button"
          onClick={buttonClickEvHandler}
        />
      </ContentContainer>
      { edit &&
        (<input
          value={edit}
          type='text'
          onChange={e => setEdit(e.target.value)}
          onKeyDown={keyInputHandler}
          onBlur={e => setEdit('')}
        />)
      }
    </div>
  );
}

export default (Task);
