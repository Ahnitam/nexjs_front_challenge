import { ComponentProps } from "react";

interface FormInputProps extends ComponentProps<"input"> {}

export function FormInput(props: FormInputProps) {
  return <input {...props} className="p-2 border border-gray-300 rounded-md" />;
}
