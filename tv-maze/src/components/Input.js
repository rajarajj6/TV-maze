const Input = (props) => {
  const { placeholder, onChange, value } = props;
  return (
    <input
      className="outline-none pl-2 border-2 border-white rounded-xl bg-black h-10 w-96 text-white"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type="text"
    />
  );
};

export default Input;
