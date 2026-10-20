type Props = {
  items: string[];
};

const Amenities = ({ items }: Props) => {
  return (
    <section className="px-4 py-4">
      <h2 className="mb-3 text-lg font-semibold">Lo que ofrece este lugar</h2>
      <ul className="grid grid-cols-2 gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm">
            <span>✔️</span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Amenities;