import { LayoutDashboard, Package, Wind, Trophy, BarChart3, FileText, Cpu, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", id: "overview" },
  { icon: Wind, label: "Air Quality", id: "air" },
  { icon: Cpu, label: "IoT Sensors", id: "iot" },
  { icon: Package, label: "Inventory", id: "inventory" },
  { icon: Trophy, label: "Achievements", id: "achievements" },
  { icon: Target, label: "Goals", id: "goals" },
  { icon: BarChart3, label: "Reports", id: "reports" },
  { icon: FileText, label: "DPP", id: "dpp" },
];

const Sidebar = () => {
  const [active, setActive] = useState("overview");

  return (
    <aside className="w-60 bg-sidebar text-sidebar-foreground flex flex-col min-h-screen">
      <div className="p-5 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-sidebar-primary flex items-center justify-center">
            <span className="text-sidebar-primary-foreground text-sm font-bold">S</span>
          </div>
          <span className="font-semibold text-lg">Sustiqon</span>
        </div>
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
              active === item.id
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
            )}
          >
            <item.icon className="h-4.5 w-4.5" />
            {item.label}
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-sidebar-border">
        <p className="text-xs text-sidebar-foreground/50">v1.0 · Sustiqon OS</p>
      </div>
    </aside>
  );
};

export default Sidebar;
