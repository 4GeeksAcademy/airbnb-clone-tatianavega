import Link from "next/link";
import { Listing } from "@/types/listing";

type Props = {
  listing: Listing;
};

const ListingCard = ({ listing }: Props) => {
  return (
    <Link href={`/rooms/${listing.id}`}>
      <article className="flex flex-col gap-2">
        <div className="aspect-square w-full rounded-xl bg-gray-200" />
        <div>
          <h3 className="font-semibold">{listing.title}</h3>
          <p className="text-sm text-gray-500">{listing.location}</p>
          <p className="text-sm">
            ${listing.pricePerNight.toLocaleString("es-CO")} COP por noche
          </p>
          <p className="text-sm">⭐ {listing.rating}</p>
        </div>
      </article>
    </Link>
  );
};

export default ListingCard;