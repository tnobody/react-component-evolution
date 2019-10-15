// A real popular approach to define components
// is the functional component pattern

const CounterButton = ({count, onIncrement}) => {
    return (
      <button onClick={onIncrement} value={count} />
    );
};
