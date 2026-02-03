import { useParkingLot } from '@/hooks/useParkingLot';
import { AddSlotForm } from '@/components/parking/AddSlotForm';
import { ParkVehicleForm } from '@/components/parking/ParkVehicleForm';
import { SlotList } from '@/components/parking/SlotList';
import { OutputPanel } from '@/components/parking/OutputPanel';
import { StatsBar } from '@/components/parking/StatsBar';
import { CircleParking } from 'lucide-react';

const Index = () => {
  const { slots, messages, stats, addSlot, parkVehicle, removeVehicle } = useParkingLot();

  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <header className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-blue-600">
            <CircleParking className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Smart Parking System
            </h1>
            <p className="text-muted-foreground text-sm">
              Automated parking slot management
            </p>
          </div>
        </header>

        {/* Stats */}
        <StatsBar stats={stats} />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar - Forms */}
          <div className="lg:col-span-1 space-y-6">
            <AddSlotForm onAddSlot={addSlot} />
            <ParkVehicleForm onParkVehicle={parkVehicle} />
            <OutputPanel messages={messages} />
          </div>

          {/* Main - Slot List */}
          <div className="lg:col-span-3">
            <SlotList slots={slots} onRemoveVehicle={removeVehicle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
