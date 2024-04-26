import { ComponentProps } from "react";

interface FormInputProps extends ComponentProps<"input"> {}

export function FormInput(props: FormInputProps) {
  return <input {...props} className="p-2 border border-gray-300 rounded-md" />;
}

interface FormInputWithLabelProps extends ComponentProps<"input"> {
  label: string;
}

export function FormInputWithLabel({
  label,
  ...props
}: FormInputWithLabelProps) {
  return (
    <label className="flex flex-col gap-1">
      <span className="font-bold">{label}</span>
      <input
        {...props}
        className="p-2 border border-gray-600 rounded-md bg-gray-700"
      />
    </label>
  );
}
