type Props = {
  selected: string;
  onSelect: (id: string) => void;
};

const categories = [
  { id: "todo", label: "Todo", icon: "🏠" },
  { id: "playa", label: "Playa", icon: "🏖️" },
  { id: "mansiones", label: "Mansiones", icon: "🏰" },
  { id: "tendencias", label: "Tendencias", icon: "🔥" },
];

const CategoryFilter = ({ selected, onSelect }: Props) => {
  return (
    <div className="flex gap-3 overflow-x-auto px-4 pb-3">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelect(category.id)}
          className={`flex shrink-0 flex-col items-center gap-1 border-b-2 px-3 pb-2 text-sm ${
            selected === category.id
              ? "border-black font-semibold text-black"
              : "border-transparent text-gray-500"
          }`}
        >
          <span className="text-2xl">{category.icon}</span>
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;