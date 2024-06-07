const Button = (props) => {
  const { children, classname = "bg-black" } = props;
  return (
    <button className={`h-10 px-7 font-bold rounded-md mt-6 ${classname} text-white`} type="submit">
      {children}
    </button>
  );
};

export default Button;
