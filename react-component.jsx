// In the first days of react we used a factory
// function to create component classes

var CounterButton = React.createClass({
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
});
