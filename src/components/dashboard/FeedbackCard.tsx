import { MessageCircle, TrendingDown } from "lucide-react";

const insights = [
  { text: "2.3L of lacquer was wasted in Station B yesterday — consider adjusting spray nozzle pressure.", type: "warning" as const },
  { text: "Team achieved 5 consecutive days below VOC threshold. Keep it up! 🎉", type: "success" as const },
  { text: "Energy consumption dropped 8% since switching to LED curing lamps.", type: "info" as const },
];

const typeStyles = {
  warning: "border-l-warning bg-warning/5",
  success: "border-l-success bg-success/5",
  info: "border-l-info bg-info/5",
};

const FeedbackCard = () => {
  return (
    <div className="bg-card rounded-xl border border-border p-5">
      <div className="flex items-center gap-2 mb-4">
        <MessageCircle className="h-4 w-4 text-primary" />
        <h2 className="text-base font-semibold text-foreground">Insights & Feedback</h2>
      </div>
      <div className="space-y-3">
        {insights.map((insight, i) => (
          <div
            key={i}
            className={`border-l-3 rounded-r-lg p-3 text-sm text-foreground ${typeStyles[insight.type]}`}
          >
            {insight.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackCard;
