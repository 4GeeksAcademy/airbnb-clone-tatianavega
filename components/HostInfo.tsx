type Props = {
  name: string;
  years: number;
};

const HostInfo = ({ name, years }: Props) => {
  return (
    <div className="flex items-center gap-3 border-y border-gray-200 px-4 py-4">
      <div className="h-12 w-12 rounded-full bg-gray-300" />
      <div>
        <p className="font-semibold">Anfitrión: {name}</p>
        <p className="text-sm text-gray-500">{years} años anfitrionando</p>
      </div>
    </div>
  );
};

export default HostInfo;