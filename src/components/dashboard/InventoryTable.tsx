import { Package, AlertTriangle } from "lucide-react";

const inventory = [
  { name: "Oak Planks (25mm)", stock: 142, unit: "boards", status: "ok" },
  { name: "Pine Dowels (10mm)", stock: 380, unit: "pcs", status: "ok" },
  { name: "Water-based Lacquer", stock: 8, unit: "L", status: "low" },
  { name: "Wood Glue PVA", stock: 24, unit: "L", status: "ok" },
  { name: "Sandpaper (120 grit)", stock: 15, unit: "sheets", status: "low" },
  { name: "Birch Veneer", stock: 45, unit: "m²", status: "ok" },
];

const InventoryTable = () => {
  return (
    <div className="bg-card rounded-xl border border-border p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Package className="h-4 w-4 text-primary" />
          <h2 className="text-base font-semibold text-foreground">Inventory Tracking</h2>
        </div>
        <span className="text-xs text-muted-foreground">{inventory.length} items</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 text-muted-foreground font-medium">Material</th>
              <th className="text-right py-2 text-muted-foreground font-medium">Stock</th>
              <th className="text-right py-2 text-muted-foreground font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.name} className="border-b border-border last:border-0 hover:bg-secondary/50 transition-colors">
                <td className="py-2.5 text-foreground">{item.name}</td>
                <td className="py-2.5 text-right text-foreground font-medium">
                  {item.stock} {item.unit}
                </td>
                <td className="py-2.5 text-right">
                  {item.status === "low" ? (
                    <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-warning/15 text-warning font-medium">
                      <AlertTriangle className="h-3 w-3" /> Low
                    </span>
                  ) : (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-success/15 text-success font-medium">
                      In Stock
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryTable;
