"use client";

import { useState } from "react";
import { listings } from "@/data/listings";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import ListingGrid from "./ListingGrid";

const HomeContent = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("todo");

  const filtered = listings.filter((listing) => {
    const matchesSearch = listing.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      category === "todo" || listing.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SearchBar value={search} onChange={setSearch} />
      <CategoryFilter selected={category} onSelect={setCategory} />
      <ListingGrid listings={filtered} />
    </>
  );
};

export default HomeContent;