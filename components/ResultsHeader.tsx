export type SortOrder = "asc" | "desc";

type Props = {
  count: number;
  order: SortOrder;
  onOrderChange: (order: SortOrder) => void;
};

const ResultsHeader = ({ count, order, onOrderChange }: Props) => {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <p className="font-semibold">{count} resultados</p>
      <select
        value={order}
        onChange={(e) => onOrderChange(e.target.value as SortOrder)}
        className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
      >
        <option value="asc">Precio: menor a mayor</option>
        <option value="desc">Precio: mayor a menor</option>
      </select>
    </div>
  );
};

export default ResultsHeader;