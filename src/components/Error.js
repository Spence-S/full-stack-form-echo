import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ErrorMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      message: this.props.message,
      items: []
    };
  }

  componentDidMount() {
    this.handleAdd();
  }

  handleAdd() {
    const newItems = this.state.items.concat([
      <div key={'1'} className="error">
        Error: {this.state.message}
      </div>
    ]);
    this.setState({ items: newItems });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      visible: nextProps.visible,
      message: nextProps.message
    });
  }

  componentDidMount = () => {
    //provides event listener for outside component click
    document.addEventListener('click', this.handleOutsideClick, false);
  };

  componentWillUnmount = () => {
    //removes the event listener on unmount
    document.removeEventListener('click', this.handleOutsideClick, false);
  };

  handleOutsideClick = e => {
    if (!ReactDOM.findDOMNode(this).contains(e.target)) {
      this.props.removeError();
      this.setState({ visible: false });
    }
  };

  render() {
    return (
      <div className={this.state.visible ? 'error' : 'hide-error'}>
        Error: {this.state.message}
      </div>
    );
  }
}
