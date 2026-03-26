import { Wind, Droplets, Thermometer } from "lucide-react";

const sensors = [
  { icon: Wind, label: "VOC Level", value: "42 ppb", status: "Clean", statusColor: "bg-success text-success-foreground" },
  { icon: Droplets, label: "Relative Humidity", value: "52%", status: "Optimal", statusColor: "bg-info text-info-foreground" },
  { icon: Thermometer, label: "Temperature", value: "21°C", status: "Normal", statusColor: "bg-success text-success-foreground" },
];

const AirQualityCard = () => {
  return (
    <div className="bg-card rounded-xl border border-border p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-foreground">Air Quality</h2>
        <span className="text-xs px-2.5 py-1 rounded-full bg-success/15 text-success font-medium">
          ● Clean
        </span>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Real-time readings from factory air quality sensors.
      </p>
      <div className="space-y-3">
        {sensors.map((s) => (
          <div key={s.label} className="flex items-center justify-between py-2 border-b border-border last:border-0">
            <div className="flex items-center gap-2.5">
              <s.icon className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-foreground">{s.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-foreground">{s.value}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${s.statusColor}`}>{s.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirQualityCard;
