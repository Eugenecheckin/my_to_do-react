/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import { Typography } from '@mui/material';

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
    const payload = this.CheckAll();
    allChecked(payload);
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
      if (title.length === 0) {
        return;
      }
      if (title[0].trim() === '') {
        return;
      }
      const trimedTitle = title[0].trim()
      const payload = {
        title: trimedTitle,
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

  CheckAll = () => {
    const { posts } = this.props;
    if (posts.length === 0) {
      return false;
    }
    if (posts.find(item => item.checked === false) === undefined) {
      return true;
    } return false;
  };

  render() {
    const { title } = this.state;
    return (
      <div>
        <Typography variant="h1">
          todos
        </Typography>
        <input
          type="checkbox"
          checked={this.CheckAll()}
          onChange={this.ClickAllCheckbox}
        />
        <input
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
function mapStateToProps(state) {
  return { posts: state.tasks };
}
export default connect(mapStateToProps, mapDispatchToProps)(Postform);
