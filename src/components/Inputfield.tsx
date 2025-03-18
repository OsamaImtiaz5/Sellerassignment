import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";

interface InputFieldProps {
  label: string;
  value: string;
  setValue: (value: string) => void;
  error?: string;
  editableIcon?: boolean;
  containerClassName?: string;
  type?: "text" | "url";
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  setValue,
  error,
  editableIcon = true,
  containerClassName = "",
  type = "text",
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const isUrlField = type === "url";
  const splitIndex = isUrlField ? value.indexOf("/") : -1;
  const beforeSlash = splitIndex !== -1 ? value.substring(0, splitIndex + 1) : value;
  const afterSlash = splitIndex !== -1 ? value.substring(splitIndex + 1) : "";

  return (
    <div className="mb-4 w-full">
      <div className="flex justify-between items-center">
        <label htmlFor={label} className="font-medium text-gray-700">{label}</label>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>

      <div className={`relative flex items-center p-3 rounded-md h-[56px] border ${containerClassName}`}>
        <input
          id={label}
          type={type}
          className={`w-full p-2 bg-transparent outline-none ${isUrlField && !isEditing ? "text-transparent" : "text-black"}`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!isEditing && editableIcon && !isUrlField}
          onFocus={() => setIsEditing(true)} 
        
          onKeyDown={(e) => e.key === "Enter" && setIsEditing(false)}
          aria-label={label}
        />

        {isUrlField && !isEditing && (
          <div className="absolute inset-0 flex items-center p-3 text-lg pointer-events-none">
            <span className="text-black">{beforeSlash}</span>
            <span className="text-green-600">{afterSlash}</span>
          </div>
        )}

        {editableIcon && !isUrlField && !isEditing && (
          <button
            className="ml-2 flex items-center bg-gray-100 text-black px-3 py-1 rounded-full text-sm"
            onClick={() => setIsEditing(true)}
          >
            <MdAccountCircle className="mr-1" /> Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;