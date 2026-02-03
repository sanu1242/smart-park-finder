import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Plus } from 'lucide-react';

interface AddSlotFormProps {
  onAddSlot: (slot: { slotNo: number; isCovered: boolean; isEVCharging: boolean }) => boolean;
}

export function AddSlotForm({ onAddSlot }: AddSlotFormProps) {
  const [slotNo, setSlotNo] = useState('');
  const [isCovered, setIsCovered] = useState(false);
  const [isEVCharging, setIsEVCharging] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(slotNo, 10);
    
    if (isNaN(num) || num < 1) {
      return;
    }

    const success = onAddSlot({ slotNo: num, isCovered, isEVCharging });
    
    if (success) {
      setSlotNo('');
      setIsCovered(false);
      setIsEVCharging(false);
    }
  };

  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Plus className="h-5 w-5 text-emerald-500" />
          Add New Slot
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="slotNo">Slot Number</Label>
            <Input
              id="slotNo"
              type="number"
              min="1"
              placeholder="Enter slot number"
              value={slotNo}
              onChange={(e) => setSlotNo(e.target.value)}
              className="bg-background/50"
              required
            />
          </div>
          
          <div className="flex flex-col gap-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="isCovered"
                checked={isCovered}
                onCheckedChange={(checked) => setIsCovered(checked === true)}
              />
              <Label htmlFor="isCovered" className="cursor-pointer">
                Covered Parking
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="isEVCharging"
                checked={isEVCharging}
                onCheckedChange={(checked) => setIsEVCharging(checked === true)}
              />
              <Label htmlFor="isEVCharging" className="cursor-pointer">
                EV Charging
              </Label>
            </div>
          </div>

          <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
            <Plus className="mr-2 h-4 w-4" />
            Add Slot
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
