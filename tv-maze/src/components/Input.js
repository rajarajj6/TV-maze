const Input = (props) => {
  const { placeholder, onChange, value } = props;
  return (
    <input
      className="outline-none pl-2 border-2 border-gray-600"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type="text"
    />
  );
};

export default Input;
