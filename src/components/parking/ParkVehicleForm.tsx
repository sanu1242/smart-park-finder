import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Car } from 'lucide-react';

interface ParkVehicleFormProps {
  onParkVehicle: (needsEV: boolean, needsCover: boolean) => number | null;
}

export function ParkVehicleForm({ onParkVehicle }: ParkVehicleFormProps) {
  const [needsEV, setNeedsEV] = useState(false);
  const [needsCover, setNeedsCover] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onParkVehicle(needsEV, needsCover);
  };

  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Car className="h-5 w-5 text-blue-500" />
          Park Vehicle
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="needsCover"
                checked={needsCover}
                onCheckedChange={(checked) => setNeedsCover(checked === true)}
              />
              <Label htmlFor="needsCover" className="cursor-pointer">
                Needs Covered Parking
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="needsEV"
                checked={needsEV}
                onCheckedChange={(checked) => setNeedsEV(checked === true)}
              />
              <Label htmlFor="needsEV" className="cursor-pointer">
                Needs EV Charging
              </Label>
            </div>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            <Car className="mr-2 h-4 w-4" />
            Find & Park
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
