// Simple Water Level Card Component
// Shows water level information for one location

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

// Props that this component receives
interface WaterLevelCardProps {
  locationName: string;
  currentLevel: number;
  maxLevel: number;
  status: string;
}

export function WaterLevelCard({
  locationName,
  currentLevel,
  maxLevel,
  status,
}: WaterLevelCardProps) {
  // Calculate percentage for progress bar
  const percentage = (currentLevel / maxLevel) * 100;

  // Choose color based on status
  let statusColor = "bg-green-500";
  let badgeClass = "bg-green-500 text-white";

  if (status === "Warning") {
    statusColor = "bg-yellow-500";
    badgeClass = "bg-yellow-500 text-black";
  } else if (status === "Danger") {
    statusColor = "bg-red-500";
    badgeClass = "bg-red-500 text-white";
  } else if (status === "Safe") {
    statusColor = "bg-green-500";
    badgeClass = "bg-green-500 text-white";
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{locationName}</CardTitle>
          <Badge className={badgeClass}>{status}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        {/* Water level numbers */}
        <div className="space-y-2">
          <p className="text-3xl font-mono">{currentLevel}m</p>
          <p className="text-sm text-muted-foreground">
            Max Level: {maxLevel}m
          </p>

          {/* Progress bar showing water level */}
          <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
            <div
              className={`h-4 rounded-full ${statusColor}`}
              style={{ width: `${percentage}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground text-right">
            {percentage.toFixed(0)}% of max capacity
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
