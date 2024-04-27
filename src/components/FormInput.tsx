import { ComponentProps } from "react";
import { IMaskInput } from "react-imask";

interface FormInputProps extends ComponentProps<"input"> {}

export function FormInput(props: FormInputProps) {
  return (
    <IMaskInput
      {...(props as any)}
      className="p-2 border border-gray-600 rounded-md bg-gray-700"
    />
  );
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
    <label className="flex flex-col gap-1 w-full">
      <span className="flex font-bold items-center justify-between">
        {label} <span className="text-xs text-red-400">{error || ""}</span>
      </span>
      <FormInput
        {...(props as any)}
        className="p-2 border border-gray-600 rounded-md bg-gray-700"
      />
    </label>
  );
}
