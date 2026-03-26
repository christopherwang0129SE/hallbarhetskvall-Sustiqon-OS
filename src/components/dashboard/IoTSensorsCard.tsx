import { Activity } from "lucide-react";

const patterns = [
  { label: "Paint Usage", current: "4.2 L/hr", trend: "↓ 8%", barWidth: 42 },
  { label: "Wood Dust (PM2.5)", current: "18 µg/m³", trend: "↓ 12%", barWidth: 30 },
  { label: "Humidity", current: "52%", trend: "→ stable", barWidth: 52 },
  { label: "Noise Level", current: "72 dB", trend: "↓ 3%", barWidth: 60 },
  { label: "Energy Draw", current: "14.8 kW", trend: "↓ 5%", barWidth: 48 },
];

const IoTSensorsCard = () => {
  return (
    <div className="bg-card rounded-xl border border-border p-5">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="h-4 w-4 text-primary" />
        <h2 className="text-base font-semibold text-foreground">Connected IoT Systems</h2>
        <span className="ml-auto text-xs text-muted-foreground">5 sensors active</span>
      </div>
      <div className="space-y-3">
        {patterns.map((p) => (
          <div key={p.label}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-foreground">{p.label}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-foreground">{p.current}</span>
                <span className="text-xs text-muted-foreground">{p.trend}</span>
              </div>
            </div>
            <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${p.barWidth}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IoTSensorsCard;
