import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ImpactStats from "@/components/dashboard/ImpactStats";
import AirQualityCard from "@/components/dashboard/AirQualityCard";
import GamificationCard from "@/components/dashboard/GamificationCard";
import IoTSensorsCard from "@/components/dashboard/IoTSensorsCard";
import InventoryTable from "@/components/dashboard/InventoryTable";
import QuickActions from "@/components/dashboard/QuickActions";
import GoalsCard from "@/components/dashboard/GoalsCard";
import FeedbackCard from "@/components/dashboard/FeedbackCard";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen overflow-auto">
        <DashboardHeader />
        <main className="flex-1 p-6 space-y-6">
          {/* Impact Stats Row */}
          <ImpactStats />

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - 2/3 */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AirQualityCard />
                <GamificationCard />
              </div>
              <IoTSensorsCard />
              <InventoryTable />
            </div>

            {/* Right Column - 1/3 */}
            <div className="space-y-6">
              <QuickActions />
              <GoalsCard />
              <FeedbackCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
