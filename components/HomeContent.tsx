"use client";

import { useState } from "react";
import { listings } from "@/data/listings";
import SearchBar from "./SearchBar";
import ListingGrid from "./ListingGrid";

const HomeContent = () => {
  const [search, setSearch] = useState("");

  const filtered = listings.filter((listing) =>
    listing.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <SearchBar value={search} onChange={setSearch} />
      <ListingGrid listings={filtered} />
    </>
  );
};

export default HomeContent;