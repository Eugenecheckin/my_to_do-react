import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StyleTask, StyleTaskContainer } from '../styles/Task.style';
import { SET_CHECKED, EDIT_ITEM, DEL_CHECKED } from '../store/Types';

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
      type: SET_CHECKED,
      payload: {
        id: selector.id,
        checked: selector.checked,
      },
    });
  };
  const buttonClickEvHandler = () => {
    dispatch({
      type: DEL_CHECKED,
      payload: {
        id: selector.id,
      },
    });
  };

  const labelDobleClick = () => {
    setEdit(prev => ({ ...prev, title: selector.title, done: true }));
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
        type: EDIT_ITEM,
        payload,
      });
      setEdit(prev => ({ ...prev, title: '', done: false }));
    }
    if (event.keyCode === 27) {
      setEdit(prev => ({ ...prev, title: '', done: false }));
    }
  };
  return (
    <StyleTaskContainer>
      <StyleTask checkEdit={selector.checked} delId={`${selector.id}-del`}>
        <div className="check-todo-conteiner">
          <input
            id={`${task.id}-del`}
            className="check-todo"
            type="checkbox"
            checked={selector.checked}
            onChange={checkBoxClickEvHandler}
          />
          {!edit.done && (
          <label
            className="labelCheck"
            htmlFor={`${task.id}`}
          />
          )}
        </div>
        <label
          className="text-todo"
          onDoubleClick={labelDobleClick}
          onBlur={() => setEdit({ title: '', done: false })}
        >
          {selector.title}
        </label>
        <div className="remove-todo-conteiner" onClick={buttonClickEvHandler}>
          <label className="label-del">×</label>
        </div>
      </StyleTask>

      { edit.done
        && (
        <input
          autoFocus
          className="edit-input"
          value={edit.title}
          type="text"
          onChange={e => setEdit(prev => ({ ...prev, title: e.target.value }))}
          onKeyDown={keyInputHandler}
          onBlur={() => setEdit({ title: '', done: false })}
        />
        )}
    </StyleTaskContainer>
  );
}

export default (Task);
