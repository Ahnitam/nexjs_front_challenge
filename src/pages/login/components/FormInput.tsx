interface FormInputProps {
  type: string;
  placeholder: string;
}

export function FormInput({ type, placeholder }: FormInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="p-2 border border-gray-300 rounded-md"
    />
  );
}
