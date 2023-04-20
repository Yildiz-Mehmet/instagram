const Input = ({ label, ...props }) => {
  return (
    <label className="block relative">
      <input
        required={true}
        className="bg-zing-50 border w-full h-[38px] rounded-sm outline-none text-xs focus:border-gray-400 px-2 valid:pt-[10px] peer "
        {...props}
      />

      <small className="absolute top-1/2 left-[9px] text-xs cursor-text pointer-events-none text-gray-500 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">
        {label}
      </small>
      {props?.type === "password" && (
        <div className="absolute right-0 top-0 h-full flex items-center">
          test
        </div>
      )}
    </label>
  );
};
export default Input;
