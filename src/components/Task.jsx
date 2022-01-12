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

  const [edit, setEdit] = useState({ title: '', done: '' });

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
    <div className="todo-item">
      <ContentContainer>
        <input
          type="checkbox"
          checked={selector.checked}
          onChange={checkBoxClickEvHandler}
        />
        <label
          className="text-item"
          onDoubleClick={labelDobleClick}
        >
          {selector.title}
        </label>
        <input
          type="button"
          onClick={buttonClickEvHandler}
        />
      </ContentContainer>
      { edit.done &&
        (<input
          value={edit.title}
          type='text'
          onChange={e => setEdit(prev=> ({...prev, title: e.target.value}))}
          onKeyDown={keyInputHandler}
          onBlur={e => setEdit('')}
        />)
      }
    </div>
  );
}

export default (Task);
