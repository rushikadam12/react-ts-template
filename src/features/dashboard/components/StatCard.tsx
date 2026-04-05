type Props = {
  title: string;
  value: string;
};

export const StatCard = ({ title, value }: Props) => {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm border">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-2xl font-semibold mt-2">{value}</h2>
    </div>
  );
};
