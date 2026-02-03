export interface ParkingSlot {
  slotNo: number;
  isCovered: boolean;
  isEVCharging: boolean;
  isOccupied: boolean;
}

export interface ParkVehicleRequest {
  needsEV: boolean;
  needsCover: boolean;
}

export interface Message {
  id: string;
  type: 'success' | 'error' | 'info';
  text: string;
  timestamp: Date;
}
