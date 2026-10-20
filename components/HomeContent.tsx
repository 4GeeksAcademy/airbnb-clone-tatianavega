"use client";

import { useEffect, useState } from "react";
import { listings as allListings } from "@/data/listings";
import { Listing } from "@/types/listing";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import ListingGrid from "./ListingGrid";
import LoadingIndicator from "./LoadingIndicator";

const HomeContent = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("todo");
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setListings(allListings);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
      {loading ? <LoadingIndicator /> : <ListingGrid listings={filtered} />}
    </>
  );
};

export default HomeContent;