import { Target } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const goals = [
  { label: "Reduce VOC emissions by 30%", progress: 72, deadline: "Dec 2026" },
  { label: "Zero paint waste days this quarter", progress: 45, deadline: "Mar 2026" },
  { label: "100% renewable energy usage", progress: 88, deadline: "Jun 2026" },
];

const GoalsCard = () => {
  return (
    <div className="bg-card rounded-xl border border-border p-5">
      <div className="flex items-center gap-2 mb-4">
        <Target className="h-4 w-4 text-primary" />
        <h2 className="text-base font-semibold text-foreground">Team Goals</h2>
      </div>
      <div className="space-y-4">
        {goals.map((goal) => (
          <div key={goal.label}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm text-foreground">{goal.label}</span>
              <span className="text-sm font-bold text-primary">{goal.progress}%</span>
            </div>
            <Progress value={goal.progress} className="h-2 mb-1" />
            <p className="text-xs text-muted-foreground">Target: {goal.deadline}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalsCard;
