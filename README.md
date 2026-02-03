# 🚗 Smart Parking Lot System

## 📌 Objective
The Smart Parking Lot System is a full-stack web application designed to manage and allocate parking slots automatically based on vehicle requirements. The system focuses on efficient slot allocation, clean UI handling, and correct business logic as per the assignment requirements.

---

## 🛠 Tech Stack
- **Frontend:** Next.js
- **Backend:** Node.js (API Routes)
- **Database:** PostgreSQL (Prisma ORM) / In-memory state (based on implementation)
- **Styling:** CSS / Tailwind CSS
- **Deployment:** Vercel

---

## 📊 Data Model
Each parking slot contains the following fields:

| Field Name      | Type    | Description |
|----------------|---------|-------------|
| slotNo         | Number  | Unique slot number |
| isCovered      | Boolean | Covered parking or not |
| isEVCharging   | Boolean | EV charging support |
| isOccupied     | Boolean | Slot occupancy status |

---

## ✅ Features Implemented

### 1. Add Parking Slot
- Users can add new parking slots using a form
- Prevents invalid inputs and duplicate slot numbers

### 2. View All Slots
- Displays all parking slots
- Shows EV, Covered, and Occupied status clearly

### 3. Park Vehicle
- Function: `ParkVehicle(needsEV, needsCover)`
- Automatically assigns the **nearest available matching slot**
- Displays **“No slot available”** if no suitable slot exists

### 4. Remove Vehicle
- Frees an occupied slot
- Updates UI and system state instantly

---

## 🖥 Mandatory UI Screens
- Add Slot Form  
- Slot Listing Screen  
- Park / Remove Vehicle Screen  
- Output Display Panel  

---

## ⚠ Error Handling
- Invalid inputs handled gracefully
- No available slot scenario handled properly
- Clear user feedback via output panel

---

## Live Demo
👉 https://smart-park-finder.vercel.app/

## Demo Video
👉 https://your-demo-video-link-here