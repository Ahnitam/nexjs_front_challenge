interface SearchInputProps {
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function SearchInput({ label }: SearchInputProps) {
  return (
    <label className="font-bold text-nowrap">
      {label}
      <input
        name="search"
        type="text"
        className="mx-2 w-96 p-1 border border-gray-600 rounded-md bg-gray-700"
      />
    </label>
  );
}
