"use client";

import { useState } from "react";
import { listings } from "@/data/listings";
import ResultsHeader, { SortOrder } from "./ResultsHeader";
import ListingGrid from "./ListingGrid";
import MapPlaceholder from "./MapPlaceholder";

const CatalogContent = () => {
  const [order, setOrder] = useState<SortOrder>("asc");

  const sorted = [...listings].sort((a, b) =>
    order === "asc"
      ? a.pricePerNight - b.pricePerNight
      : b.pricePerNight - a.pricePerNight
  );

  return (
    <>
      <ResultsHeader
        count={sorted.length}
        order={order}
        onOrderChange={setOrder}
      />
      <div className="lg:grid lg:grid-cols-2">
        <ListingGrid listings={sorted} />
        <MapPlaceholder />
      </div>
    </>
  );
};

export default CatalogContent;