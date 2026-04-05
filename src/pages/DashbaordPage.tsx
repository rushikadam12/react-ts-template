import { StatCard } from '@/features/dashboard';
import { useDashboard } from '@/features/dashboard/hook/useDashboard';

const DashboardPage = () => {
  const { data, isLoading, isError } = useDashboard();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard title="Users" value={data.length.toString()} />
      <StatCard title="Active" value="980" />
      <StatCard title="Orders" value="320" />
      <StatCard title="Revenue" value="$8,430" />
    </div>
  );
};

export default DashboardPage;
