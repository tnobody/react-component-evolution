// With the introduction of ES6 classes
// react offers a component base class

class CounterButton extends React.Component {
  handleClick: function() {
    this.setState({
      count: this.state.count + 1
    })
  },
  render() {
    return (
      <button onClick={this.handleClick} value={this.state.count} />
    );
  }
};
