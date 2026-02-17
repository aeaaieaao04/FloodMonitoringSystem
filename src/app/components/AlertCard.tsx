// Simple Alert Card Component
// Shows one alert message

import { Card, CardContent } from "./ui/card";
import { AlertCircle } from "lucide-react";

// Props that this component receives
interface AlertCardProps {
  title: string;
  message: string;
  type: string;
}

export function AlertCard({ title, message, type }: AlertCardProps) {
  // Choose color and style based on alert type
  let borderColor = "border-blue-500";
  let iconColor = "text-blue-500";
  let bgColor = "bg-blue-50";

  if (type === "warning") {
    borderColor = "border-yellow-500";
    iconColor = "text-yellow-500";
    bgColor = "bg-yellow-50";
  } else if (type === "danger") {
    borderColor = "border-red-500";
    iconColor = "text-red-500";
    bgColor = "bg-red-50";
  }

  return (
    <Card className={`border-l-4 ${borderColor} ${bgColor}`}>
      <CardContent className="pt-6">
        <div className="flex gap-3">
          {/* Alert icon */}
          <AlertCircle className={`h-5 w-5 ${iconColor} mt-0.5`} />
          
          {/* Alert content */}
          <div className="flex-1">
            <h4 className="font-medium mb-1">{title}</h4>
            <p className="text-sm text-muted-foreground">{message}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
