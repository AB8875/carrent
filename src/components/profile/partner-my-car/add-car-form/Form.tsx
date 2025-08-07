import React from "react";

import Label from "@/components/common/Label";
import { New } from "./New";
import { CarFormData } from "@/types/carFrom.Types";
import {
  labelData,
  selectData,
  typeData,
} from "@/components/helper/partner/Helper";
interface FormProps {
  formData: CarFormData;
  setFormData: React.Dispatch<React.SetStateAction<CarFormData>>;
}

const Form: React.FC<FormProps> = ({ formData, setFormData }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-[70px]">
      <h1 className="border-primary max-w-[200px] border-b-[2px] text-xl leading-[144%] font-semibold sm:max-w-[235px] sm:text-2xl md:max-w-[290px] md:text-3xl lg:max-w-[320px] lg:text-[34px] 2xl:max-w-[380px] 2xl:text-[40px]">
        Add Your Car Details
      </h1>
      <div>
        <form
          className="dark:bg-gray bg-sky-600 px-5 py-5 sm:rounded-[12px] sm:py-7 md:px-7 md:py-9 lg:px-8 lg:py-[60px] xl:px-12.5"
          action="details"
        >
          <div className="grid w-full grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:gap-x-20">
            <div>
              <Label
                className="text-base md:text-lg lg:text-xl"
                title="Car Number"
              />
              <input
                className="mt-2 w-full rounded-[10px] bg-white px-4 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-800 dark:bg-gray-800 dark:text-white dark:placeholder:text-white"
                type="text"
                name="carNumber"
                value={formData.carNumber ?? ""}
                onChange={handleInputChange}
                placeholder="Enter Car Number"
              />
            </div>
            {selectData.map((field) => (
              <New
                key={field.name}
                field={field}
                formData={formData}
                setFormData={setFormData}
              />
            ))}
          </div>

          <div className="mt-8 grid w-full grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 md:gap-y-8 lg:gap-x-16 xl:gap-x-20">
            {labelData.map((item, index) => (
              <div key={index}>
                <Label
                  className="text-base md:text-lg lg:text-xl"
                  title={item.label}
                />
                <input
                  className="mt-2 w-full rounded-[10px] bg-white px-4 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-800 dark:bg-gray-800 dark:text-white dark:placeholder:text-white"
                  type={item.type}
                  name={item.htmlFor}
                  value={(formData as any)[item.htmlFor] ?? ""}
                  onChange={handleInputChange}
                  placeholder={item.placeholder}
                />
              </div>
            ))}

            <New
              key={typeData.name}
              field={typeData}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        </form>

        {/* <div className="mt-10 flex items-center gap-5 md:gap-[30px]">
          <button
            className="text-primary bg-gray rounded-md px-4 py-2 text-sm font-semibold sm:px-5 sm:text-base md:px-6 md:py-3 md:text-xl"
            type="submit"
          >
            Save
          </button>
          <button className="text-gray hover:bg-gray border-gray hover:text-primary rounded-md border px-4 py-2 text-sm font-semibold duration-200 sm:px-5 sm:text-base md:px-6 md:py-3 md:text-xl">
            Cancel
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Form;
