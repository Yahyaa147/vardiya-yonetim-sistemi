"use client";
import { useEffect, useState } from "react";

type Shift = { 
  id: number; 
  title: string; 
  assigned_to: string; 
  start_time: string; 
  end_time: string 
};

export default function Home() {
  const [shifts, setShifts] = useState<Shift[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/shifts")
      .then((res) => res.json())
      .then((data) => setShifts(data))
      .catch(() => setShifts([]));
  }, []);

  return (
    <main className="p-8 container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Vardiya Sistemi</h1>
      <div data-testid="shift-list" className="grid gap-4 md:grid-cols-2">
        {shifts.map((s) => (
          <div 
            key={s.id} 
            className="border p-4 rounded shadow bg-white hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-blue-600">{s.title}</h2>
            <p className="text-gray-700 mt-2">👤 {s.assigned_to}</p>
            <p className="text-sm text-gray-500 mt-1">
              🕒 {new Date(s.start_time).toLocaleTimeString()} - {new Date(s.end_time).toLocaleTimeString()}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
