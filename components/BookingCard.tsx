"use client";

import { useState } from "react";

type Props = {
  pricePerNight: number;
  maxGuests: number;
};

const BookingCard = ({ pricePerNight, maxGuests }: Props) => {
  const [guests, setGuests] = useState(1);

  return (
    <aside className="m-4 rounded-xl border border-gray-200 p-4 shadow-sm">
      <p className="text-xl font-semibold">
        ${pricePerNight.toLocaleString("es-CO")} COP
        <span className="text-sm font-normal text-gray-500"> por noche</span>
      </p>

      <div className="my-4 flex items-center justify-between">
        <span>Huéspedes</span>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setGuests(guests - 1)}
            disabled={guests <= 1}
            className="h-8 w-8 rounded-full border border-gray-400 disabled:opacity-30"
          >
            −
          </button>
          <span>{guests}</span>
          <button
            onClick={() => setGuests(guests + 1)}
            disabled={guests >= maxGuests}
            className="h-8 w-8 rounded-full border border-gray-400 disabled:opacity-30"
          >
            +
          </button>
        </div>
      </div>

      <button className="w-full rounded-lg bg-rose-500 py-3 font-semibold text-white">
        Reserva
      </button>
    </aside>
  );
};

export default BookingCard;