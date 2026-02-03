import { ParkingSlot } from '@/types/parking';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Car, Zap, Umbrella, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SlotCardProps {
  slot: ParkingSlot;
  onRemoveVehicle: (slotNo: number) => void;
}

export function SlotCard({ slot, onRemoveVehicle }: SlotCardProps) {
  return (
    <Card
      className={cn(
        'border-border/50 transition-all duration-300 hover:scale-[1.02]',
        slot.isOccupied
          ? 'bg-rose-950/30 border-rose-500/30'
          : 'bg-emerald-950/30 border-emerald-500/30'
      )}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">#{slot.slotNo}</span>
            {slot.isOccupied ? (
              <Car className="h-5 w-5 text-rose-400" />
            ) : null}
          </div>
          <Badge
            variant={slot.isOccupied ? 'destructive' : 'default'}
            className={cn(
              slot.isOccupied
                ? 'bg-rose-500/20 text-rose-300 border-rose-500/30'
                : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
            )}
          >
            {slot.isOccupied ? 'Occupied' : 'Available'}
          </Badge>
        </div>

        <div className="flex gap-2 mb-3">
          {slot.isCovered && (
            <Badge variant="outline" className="bg-amber-500/10 text-amber-300 border-amber-500/30">
              <Umbrella className="h-3 w-3 mr-1" />
              Covered
            </Badge>
          )}
          {slot.isEVCharging && (
            <Badge variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-500/30">
              <Zap className="h-3 w-3 mr-1" />
              EV
            </Badge>
          )}
        </div>

        {slot.isOccupied && (
          <Button
            variant="outline"
            size="sm"
            className="w-full border-rose-500/30 text-rose-300 hover:bg-rose-500/20 hover:text-rose-200"
            onClick={() => onRemoveVehicle(slot.slotNo)}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Remove Vehicle
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
