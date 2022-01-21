const Button = ({ className, text, ...rest }) => {
  return (
    <div
      className={`px-6 py-2 text-lg font-medium rounded-3xl
      bg-emerald-600 hover:bg-emerald-700 transition-colors text-white cursor-pointer ${className}`}
      {...rest}
    >
      {text}
    </div>
  );
};

export default Button;
