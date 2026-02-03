import { useState, useCallback } from 'react';
import { ParkingSlot, Message } from '@/types/parking';

// Seed data
const initialSlots: ParkingSlot[] = [
  { slotNo: 1, isCovered: true, isEVCharging: true, isOccupied: false },
  { slotNo: 2, isCovered: true, isEVCharging: false, isOccupied: false },
  { slotNo: 3, isCovered: false, isEVCharging: true, isOccupied: false },
  { slotNo: 4, isCovered: false, isEVCharging: false, isOccupied: false },
  { slotNo: 5, isCovered: true, isEVCharging: true, isOccupied: true },
];

export function useParkingLot() {
  const [slots, setSlots] = useState<ParkingSlot[]>(initialSlots);
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = useCallback((type: Message['type'], text: string) => {
    const newMessage: Message = {
      id: crypto.randomUUID(),
      type,
      text,
      timestamp: new Date(),
    };
    setMessages((prev) => [newMessage, ...prev].slice(0, 10));
  }, []);

  const addSlot = useCallback((slot: Omit<ParkingSlot, 'isOccupied'>) => {
    if (slots.some((s) => s.slotNo === slot.slotNo)) {
      addMessage('error', `Slot #${slot.slotNo} already exists`);
      return false;
    }
    
    setSlots((prev) => 
      [...prev, { ...slot, isOccupied: false }].sort((a, b) => a.slotNo - b.slotNo)
    );
    addMessage('success', `Slot #${slot.slotNo} added successfully`);
    return true;
  }, [slots, addMessage]);

  const parkVehicle = useCallback((needsEV: boolean, needsCover: boolean) => {
    // Find the nearest available matching slot (lowest slot number)
    const availableSlot = slots
      .filter((slot) => {
        if (slot.isOccupied) return false;
        if (needsEV && !slot.isEVCharging) return false;
        if (needsCover && !slot.isCovered) return false;
        return true;
      })
      .sort((a, b) => a.slotNo - b.slotNo)[0];

    if (!availableSlot) {
      addMessage('error', 'No slot available');
      return null;
    }

    setSlots((prev) =>
      prev.map((slot) =>
        slot.slotNo === availableSlot.slotNo
          ? { ...slot, isOccupied: true }
          : slot
      )
    );
    
    addMessage(
      'success',
      `Vehicle parked in Slot #${availableSlot.slotNo}${needsEV ? ' (EV)' : ''}${needsCover ? ' (Covered)' : ''}`
    );
    return availableSlot.slotNo;
  }, [slots, addMessage]);

  const removeVehicle = useCallback((slotNo: number) => {
    const slot = slots.find((s) => s.slotNo === slotNo);
    
    if (!slot) {
      addMessage('error', `Slot #${slotNo} not found`);
      return false;
    }
    
    if (!slot.isOccupied) {
      addMessage('info', `Slot #${slotNo} is already empty`);
      return false;
    }

    setSlots((prev) =>
      prev.map((s) =>
        s.slotNo === slotNo ? { ...s, isOccupied: false } : s
      )
    );
    
    addMessage('success', `Vehicle removed from Slot #${slotNo}`);
    return true;
  }, [slots, addMessage]);

  const stats = {
    total: slots.length,
    occupied: slots.filter((s) => s.isOccupied).length,
    available: slots.filter((s) => !s.isOccupied).length,
    evSlots: slots.filter((s) => s.isEVCharging).length,
    coveredSlots: slots.filter((s) => s.isCovered).length,
  };

  return {
    slots,
    messages,
    stats,
    addSlot,
    parkVehicle,
    removeVehicle,
  };
}
