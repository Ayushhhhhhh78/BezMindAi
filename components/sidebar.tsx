import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Target,
  CheckSquare,
  Bot,
} from "lucide-react";

export default function Sidebar() {
  const links = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Customers",
      href: "/dashboard/customers",
      icon: Users,
    },
    {
      name: "Leads",
      href: "/dashboard/leads",
      icon: Target,
    },
    {
      name: "Tasks",
      href: "/dashboard/tasks",
      icon: CheckSquare,
    },
    {
      name: "AI Assistant",
      href: "/dashboard/assistant",
      icon: Bot,
    },
  ];

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-background p-6">
      <h1 className="text-2xl font-bold">BizMind AI</h1>

      <nav className="mt-10 flex flex-col gap-2">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              <Icon size={20} />
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}