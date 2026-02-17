// Simple Statistics Card Component
// Shows one piece of statistical information

import { Card, CardContent } from "./ui/card";
import { ReactNode } from "react";

// Props that this component receives
interface StatsCardProps {
  label: string;
  value: string;
  icon: ReactNode;
}

export function StatsCard({ label, value, icon }: StatsCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          {/* Left side - text */}
          <div>
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="text-2xl font-mono mt-1">{value}</p>
          </div>

          {/* Right side - emoji or image icon */}
          <div className="text-4xl">{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
}
