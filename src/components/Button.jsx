function Button({ children, onClick, red }) {
  return (
    <button onClick={onClick} className={red ? "btn btn-red" : "btn"}>
      {children}
    </button>
  );
}

export default Button;
