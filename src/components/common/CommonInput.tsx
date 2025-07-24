import React from "react";
interface IPROPS {
  lableFor?: string;
  lable?: string;
  inputType: string;
  inputId: string;
  Placeholder?: string;
  className?: string;
  inputClassName?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CommonInput: React.FC<IPROPS> = ({
  lableFor,
  lable,
  inputType,
  inputId,
  Placeholder,
  className,
  inputClassName,
  value,
  onChange,
}) => {
  return (
    <div className={`flex w-full flex-col gap-2.5 ${className}`}>
      <label
        htmlFor={lableFor}
        className="dark:text-light-white text-gray text-xs leading-[144%] font-semibold sm:text-sm md:text-base"
      >
        {lable}
      </label>
      <input
        type={inputType}
        id={inputId}
        value={value}
        onChange={onChange}
        placeholder={Placeholder}
        className={`${inputClassName} dark:!text-gray border-gray sm:bg-light !bg-sky dark:border-light-white sm:dark:placeholder:!text-light-white !w-full rounded py-2.5 ps-[15px] text-sm leading-[144%] font-semibold outline-none sm:rounded-[0px] sm:border-b sm:!bg-transparent sm:text-sm md:text-base lg:ps-[2px] xl:text-xl`}
      />
    </div>
  );
};

export default CommonInput;
