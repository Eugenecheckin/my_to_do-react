import React from 'react';
import { connect } from 'react-redux';

import { LogoWraper, Header } from '../styles/Component.style';

import addTodoAction, { setAllChecked } from '../store/Action';

class Postform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      allChecked: false,
    };
  }

  clickAllCheckbox = () => {
    const { allChecked } = this.props;
    const payload = this.checkAll();
    allChecked(payload);
    this.setState({ allChecked: !this.state.allChecked });
  };

  changeInputHandler = (event) => {
    event.persist();
    this.setState(prev => (
      {
        ...prev,
        ...{ [event.target.name]: [event.target.value] },
      }
    ));
  };

  keyInputHandler = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      const { title } = this.state;
      if (title.length === 0) {
        return;
      }
      if (title[0].trim() === '') {
        return;
      }
      const trimedTitle = title[0].trim();
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

  checkAll = () => {
    const { posts } = this.props;
    if (posts.length === 0) {
      return false;
    }
    if (posts.find(item => item.checked === false) === undefined) {
      return true;
    }
    return false;
  };

  hasTask = () => {
    const { posts } = this.props;
    if (posts.length === 0) {
      return false;
    }
    return true;
  };

  render() {
    const { title } = this.state;
    return (
      <div>
        <LogoWraper>
          todos
        </LogoWraper>
        <Header checkAll={this.checkAll()} hasTask={this.hasTask()}>
          <input
            className="checkAll"
            id="check-all"
            type="checkbox"
            checked={this.checkAll()}
            onChange={this.clickAllCheckbox}
          />
          <label
            className="labelAll"
            htmlFor="check-all">
            ❯
          </label>
          <input
            autoFocus
            aria-describedby="input-task__helper"
            className="input-task"
            placeholder="What needs to be done?"
            type="text"
            id="title"
            value={title}
            name="title"
            onChange={this.changeInputHandler}
            onKeyDown={this.keyInputHandler}
          />
        </Header>
      </div>
    );
  }
}
const mapDispatchToProps = { addTodo: addTodoAction, allChecked: setAllChecked };
function mapStateToProps(state) {
  return { posts: state.tasks };
}
export default connect(mapStateToProps, mapDispatchToProps)(Postform);
