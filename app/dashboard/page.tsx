export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Overview</h1>

      <p className="mt-2 text-muted-foreground">
        Here's what's happening with your business.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border p-6">
          <p className="text-sm text-muted-foreground">Total Customers</p>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>

        <div className="rounded-xl border p-6">
          <p className="text-sm text-muted-foreground">Active Leads</p>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>

        <div className="rounded-xl border p-6">
          <p className="text-sm text-muted-foreground">Potential Revenue</p>
          <p className="mt-2 text-3xl font-bold">₹0</p>
        </div>

        <div className="rounded-xl border p-6">
          <p className="text-sm text-muted-foreground">Pending Tasks</p>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
}