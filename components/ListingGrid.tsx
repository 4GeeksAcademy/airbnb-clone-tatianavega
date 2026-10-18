import { Listing } from "@/types/listing";
import ListingCard from "./ListingCard";

type Props = {
  listings: Listing[];
};

const ListingGrid = ({ listings }: Props) => {
  return (
    <section className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-4">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </section>
  );
};

export default ListingGrid;
