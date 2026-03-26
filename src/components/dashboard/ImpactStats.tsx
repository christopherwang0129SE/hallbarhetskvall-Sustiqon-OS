import { TreePine, Paintbrush, Recycle, Zap } from "lucide-react";

const stats = [
  { icon: TreePine, label: "Trees Saved", value: "124", change: "+12 this month", color: "text-success" },
  { icon: Paintbrush, label: "Paint Waste Reduced", value: "38 L", change: "↓ 22% vs last month", color: "text-primary" },
  { icon: Recycle, label: "Materials Recycled", value: "1.2 t", change: "+340 kg this quarter", color: "text-info" },
  { icon: Zap, label: "Energy Saved", value: "890 kWh", change: "↓ 15% consumption", color: "text-warning" },
];

const ImpactStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className={`h-10 w-10 rounded-lg bg-secondary flex items-center justify-center ${stat.color}`}>
              <stat.icon className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{stat.value}</p>
          <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
        </div>
      ))}
    </div>
  );
};

export default ImpactStats;
