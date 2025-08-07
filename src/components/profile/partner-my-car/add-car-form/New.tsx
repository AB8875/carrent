"use client";
import React from "react";
import Select from "react-select";
import Label from "@/components/common/Label";

interface Option {
  label: string;
  value: string;
}

interface FieldProps {
  field: {
    name: string;
    labelName: string;
    placeholder: string;
    options: Option[];
    isMulti?: boolean;
  };
  formData: { [key: string]: any };
  setFormData: React.Dispatch<React.SetStateAction<{ [key: string]: any }>>;
}

export const New: React.FC<FieldProps> = ({ field, formData, setFormData }) => {
  const handleChange = (selected: any) => {
    setFormData((prev) => ({
      ...prev,
      [field.name]: field.isMulti
        ? selected?.map((option: Option) => option.value)
        : selected?.value || "",
    }));
  };

  const getValue = () => {
    const value = formData[field.name];
    if (field.isMulti && Array.isArray(value)) {
      return field.options.filter((opt) => value.includes(opt.value));
    }
    return field.options.find((opt) => opt.value === value) || null;
  };
  return (
    <div>
      <Label
        className="text-base md:text-lg lg:text-xl"
        title={field.labelName}
      />
      <Select
        isMulti={field.isMulti}
        isSearchable={true}
        name={field.name}
        options={field.options}
        placeholder={field.placeholder}
        value={getValue()}
        onChange={handleChange}
        className="mt-2 text-sm"
        classNamePrefix="react-select"
        styles={{
          control: (base) => ({
            ...base,
            borderRadius: "10px",
            padding: "2px 4px",
            backgroundColor: "#fff",
            borderColor: "#d1d5db",
          }),
          menu: (base) => ({
            ...base,
            zIndex: 999,
          }),
        }}
      />
    </div>
  );
};
