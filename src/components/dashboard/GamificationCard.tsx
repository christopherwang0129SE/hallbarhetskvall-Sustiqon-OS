import { Flame, Award, Star, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const badges = [
  { icon: "🌱", label: "Eco Starter", earned: true },
  { icon: "♻️", label: "Waste Warrior", earned: true },
  { icon: "🎯", label: "Goal Crusher", earned: true },
  { icon: "🏆", label: "Green Champion", earned: false },
  { icon: "⭐", label: "Perfect Week", earned: false },
];

const GamificationCard = () => {
  return (
    <div className="bg-card rounded-xl border border-border p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-foreground">Team Achievements</h2>
        <div className="flex items-center gap-1 text-accent">
          <Flame className="h-4 w-4" />
          <span className="text-sm font-bold">12 day streak!</span>
        </div>
      </div>

      {/* Current milestone */}
      <div className="bg-secondary rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Monthly Milestone</span>
          </div>
          <span className="text-sm font-bold text-primary">78%</span>
        </div>
        <Progress value={78} className="h-2" />
        <p className="text-xs text-muted-foreground mt-2">Reduce paint waste by 25L — 19.5L / 25L achieved</p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {badges.map((badge) => (
          <div
            key={badge.label}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-opacity ${
              badge.earned
                ? "bg-secondary border-border text-foreground"
                : "bg-muted border-border text-muted-foreground opacity-50"
            }`}
            title={badge.label}
          >
            <span>{badge.icon}</span>
            {badge.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamificationCard;
