type Props = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBar = ({ value, onChange }: Props) => {
  return (
    <div className="px-4 py-3">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="🔍 Empieza la búsqueda"
        className="w-full rounded-full border border-gray-300 px-5 py-3 shadow-sm outline-none focus:border-rose-500"
      />
    </div>
  );
};

export default SearchBar;