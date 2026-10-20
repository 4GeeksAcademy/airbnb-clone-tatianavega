"use client";

import { useState } from "react";

type Props = {
  photos: string[];
};

const PhotoGallery = ({ photos }: Props) => {
  const [index, setIndex] = useState(0);

  const previous = () =>
    setIndex((current) => (current === 0 ? photos.length - 1 : current - 1));
  const next = () =>
    setIndex((current) => (current === photos.length - 1 ? 0 : current + 1));

  return (
    <div className="relative">
      <div
        className={`flex aspect-[4/3] w-full items-center justify-center text-gray-600 lg:rounded-xl ${photos[index]}`}
      >
        Foto {index + 1}
      </div>
      <button
        onClick={previous}
        className="absolute left-3 top-1/2 rounded-full bg-white px-3 py-1 shadow"
      >
        ←
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 rounded-full bg-white px-3 py-1 shadow"
      >
        →
      </button>
      <span className="absolute bottom-3 right-3 rounded-md bg-black/60 px-2 py-1 text-xs text-white">
        {index + 1}/{photos.length}
      </span>
    </div>
  );
};

export default PhotoGallery;