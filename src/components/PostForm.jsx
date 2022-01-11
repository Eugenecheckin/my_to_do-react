/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import { Input, Typography, Checkbox } from '@mui/material';

import addTodoAction, { setAllChecked } from '../store/Action';

class Postform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  ClickAllCheckbox = () => {
    const { allChecked } = this.props;
    allChecked();
  };

  ChangeInputHandler = (event) => {
    event.persist();
    this.setState(prev => (
      {
        ...prev,
        ...{ [event.target.name]: [event.target.value] },
      }
    ));
  };

  KeyInputHandler = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      const { title } = this.state;
      const payload = {
        title,
        id: new Date().getMilliseconds(),
        checked: false,
      };
      const { addTodo } = this.props;
      addTodo(payload);
      this.setState({ title: '' });
    }
    if (event.keyCode === 27) {
      this.setState({ title: '' });
    }
  };

  render() {
    const { title } = this.state;
    return (
      <div>
        <Typography variant="h1">
          todos
        </Typography>
        <Checkbox
          onChange={this.ClickAllCheckbox}
        />
        <Input
          aria-describedby="input-task__helper"
          className="input-task"
          placeholder="What needs to be done?"
          type="text"
          id="title"
          value={title}
          name="title"
          onChange={this.ChangeInputHandler}
          onKeyDown={this.KeyInputHandler}
        />
      </div>
    );
  }
}
const mapDispatchToProps = { addTodo: addTodoAction, allChecked: setAllChecked };
export default connect(null, mapDispatchToProps)(Postform);