import Sidebar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center border-b px-8">
          <h2 className="font-semibold">Business Dashboard</h2>
        </header>

        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}