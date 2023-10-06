const Input = (props) => {
  const { type, placeholder, name } = props;
  return <input type={type} className="text-sm border round w-full py-2 px-3 text-slate-700 placeholder:opacity-50" placeholder={placeholder} name={name} />;
};

export default Input;
