import { ParkingSlot } from '@/types/parking';
import { SlotCard } from './SlotCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LayoutGrid } from 'lucide-react';

interface SlotListProps {
  slots: ParkingSlot[];
  onRemoveVehicle: (slotNo: number) => void;
}

export function SlotList({ slots, onRemoveVehicle }: SlotListProps) {
  if (slots.length === 0) {
    return (
      <Card className="border-border/50 bg-card/50 backdrop-blur">
        <CardContent className="p-8 text-center text-muted-foreground">
          No parking slots available. Add some slots to get started.
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <LayoutGrid className="h-5 w-5 text-purple-500" />
          All Parking Slots ({slots.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {slots.map((slot) => (
            <SlotCard
              key={slot.slotNo}
              slot={slot}
              onRemoveVehicle={onRemoveVehicle}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
