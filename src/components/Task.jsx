/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable jsx-quotes */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleTask, StyleEdit, StyleTaskContainer } from '../styles/Task.style';

function Task({ task }) {
  const selector = useSelector(state => state.tasks.find(element => {
    if (element.id === task.id) {
      return true;
    }
  }));
  const dispatch = useDispatch();

  const [edit, setEdit] = useState({ title: '', done: false });

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

  const labelDobleClick = () => {
    setEdit(prev=> ({ ...prev, title: selector.title, done: true }));
  };

  const keyInputHandler = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      const templeteEdit = edit.title;
      if (templeteEdit.trim() === '') {
        buttonClickEvHandler();
      }
      const trimedTitle = templeteEdit.trim();
      const payload = {
        title: trimedTitle,
        id: selector.id,
        checked: false,
      };
      dispatch({
        type: 'edit-item',
        payload,
      });
      setEdit(prev=> ({ ...prev, title: '', done: false }));
    }
    if (event.keyCode === 27) {
      setEdit(prev=> ({ ...prev, title: '', done: false }));
    }
  };
  return (
    <StyleTaskContainer>
      <StyleTask>
        <input
          className="check-todo"
          type="checkbox"
          checked={selector.checked}
          onChange={checkBoxClickEvHandler}
        />
        <label
          className="text-todo"
          onDoubleClick={labelDobleClick}
          onBlur={() => setEdit({ title: '', done: false })}
        >
          {selector.title}
        </label>
        <input
          className="remove-todo"
          type="button"
          onClick={buttonClickEvHandler}
        />
      </StyleTask>
      <StyleEdit>
      { edit.done &&
        (<input
          className='edit-input'
          value={edit.title}
          type='text'
          onChange={e => setEdit(prev=> ({ ...prev, title: e.target.value }))}
          onKeyDown={keyInputHandler}
          onBlur={() => setEdit({ title: '', done: false })}
        />)}
      </StyleEdit>
    </StyleTaskContainer>
  );
}

export default (Task);
