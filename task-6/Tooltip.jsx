import React, { Component } from 'react';

export default class Tooltip extends Component {
  state = { visible: false };

  handleMouseEnter = () => {
    this.setState({ visible: true });
  }

  handleMouseLeave = () => {
    this.setState({ visible: false });
  }

  render() {
    return (
      <span onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        {this.props.children}
        {this.state.visible && <span className="tooltip__text">{this.props.text}</span>}
      </span>
    );
  }
}