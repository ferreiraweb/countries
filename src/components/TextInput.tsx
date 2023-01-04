import React, { SyntheticEvent } from "react";
import { getNewId } from "../services/uuid-service";

interface ITextInputProps {
  handleInputOnChange: (e: any) => void;
  value: string | undefined;
  label: string | undefined;
  autofocus?: boolean;
}

export default function TextInput(props: ITextInputProps) {
  const { handleInputOnChange, value = "", label = "", autofocus } = props;
  const id: string = getNewId();

  return (
    <div className="flex flex-col w-full space-y-1">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        name="textInput"
        id={id}
        className="p-2 border-2 rounded-md"
        onChange={(e) => handleInputOnChange(e)}
        value={value}
        autoFocus={autofocus}
      />
    </div>
  );
}
