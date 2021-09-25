function Gamebox({ className, state, onClick }) {
  return (
    <span className={`gamebox ${className}`} onClick={onClick}>
      {state}
    </span>
  );
}

export default Gamebox;
