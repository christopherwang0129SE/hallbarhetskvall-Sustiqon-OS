import { FileText, Download, BarChart3, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuickActions = () => {
  return (
    <div className="bg-card rounded-xl border border-border p-5">
      <h2 className="text-base font-semibold text-foreground mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-3">
        <Button className="h-auto flex-col gap-2 py-4 bg-primary text-primary-foreground hover:bg-primary/90">
          <FileText className="h-5 w-5" />
          <span className="text-sm">Digital Product Passport</span>
        </Button>
        <Button variant="outline" className="h-auto flex-col gap-2 py-4">
          <Download className="h-5 w-5" />
          <span className="text-sm">Download Report</span>
        </Button>
        <Button variant="outline" className="h-auto flex-col gap-2 py-4">
          <BarChart3 className="h-5 w-5" />
          <span className="text-sm">View Analytics</span>
        </Button>
        <Button variant="outline" className="h-auto flex-col gap-2 py-4">
          <Leaf className="h-5 w-5" />
          <span className="text-sm">SDG Progress</span>
        </Button>
      </div>
    </div>
  );
};

export default QuickActions;
