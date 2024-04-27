import { ComponentProps } from "react";
import { IMaskInput } from "react-imask";

interface FormInputProps extends ComponentProps<"input"> {}

export function FormInput(props: FormInputProps) {
  return <input {...props} className="p-2 border border-gray-300 rounded-md" />;
}

interface FormInputWithLabelProps extends ComponentProps<"input"> {
  label: string;
  mask?: string;
  error?: string;
}

export function FormInputWithLabel({
  label,
  error,
  ...props
}: FormInputWithLabelProps) {
  return (
    <label className="flex flex-col gap-1">
      <span className="flex font-bold items-center justify-between">
        {label} <span className="text-sm text-red-400">{error || ""}</span>
      </span>
      <IMaskInput
        {...(props as any)}
        className="p-2 border border-gray-600 rounded-md bg-gray-700"
      />
    </label>
  );
}
