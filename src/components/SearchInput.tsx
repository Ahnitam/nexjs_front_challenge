interface SearchInputProps {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function SearchInput({ label, onChange, value }: SearchInputProps) {
  return (
    <label className="font-bold text-nowrap">
      {label}
      <input
        name="search"
        placeholder="Digite para buscar..."
        type="text"
        value={value}
        className="mx-2 w-96 p-1 border border-gray-600 rounded-md bg-gray-700"
        onChange={(event) => onChange?.(event.target.value)}
      />
    </label>
  );
}
