import { Card, CardContent } from '@/components/ui/card';
import { Car, CircleParking, Zap, Umbrella } from 'lucide-react';

interface StatsBarProps {
  stats: {
    total: number;
    occupied: number;
    available: number;
    evSlots: number;
    coveredSlots: number;
  };
}

export function StatsBar({ stats }: StatsBarProps) {
  const items = [
    {
      label: 'Total Slots',
      value: stats.total,
      icon: CircleParking,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
    },
    {
      label: 'Available',
      value: stats.available,
      icon: CircleParking,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
    },
    {
      label: 'Occupied',
      value: stats.occupied,
      icon: Car,
      color: 'text-rose-400',
      bg: 'bg-rose-500/10',
    },
    {
      label: 'EV Slots',
      value: stats.evSlots,
      icon: Zap,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
    },
    {
      label: 'Covered',
      value: stats.coveredSlots,
      icon: Umbrella,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {items.map((item) => (
        <Card
          key={item.label}
          className="border-border/50 bg-card/50 backdrop-blur"
        >
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${item.bg}`}>
                <item.icon className={`h-5 w-5 ${item.color}`} />
              </div>
              <div>
                <p className="text-2xl font-bold">{item.value}</p>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
