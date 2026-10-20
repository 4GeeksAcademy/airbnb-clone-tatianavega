"use client";

import BackLink from "./BackLink";
import { useEffect, useState } from "react";
import { listings } from "@/data/listings";
import { Listing } from "@/types/listing";
import PhotoGallery from "./PhotoGallery";
import ListingHeader from "./ListingHeader";
import HostInfo from "./HostInfo";
import Amenities from "./Amenities";
import BookingCard from "./BookingCard";
import LoadingIndicator from "./LoadingIndicator";

type Props = {
  id: string;
};

const photos = ["bg-gray-200", "bg-gray-300", "bg-gray-400", "bg-gray-300"];

const RoomDetail = ({ id }: Props) => {
  const [listing, setListing] = useState<Listing | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setListing(listings.find((item) => item.id === id) ?? null);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) return <LoadingIndicator />;
  if (!listing) return <p className="p-4">No encontramos esta casa.</p>;

  return (
    <div className="mx-auto max-w-5xl">
      <BackLink />
      <PhotoGallery photos={photos} />
      <div className="lg:grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ListingHeader
            title={listing.title}
            rating={listing.rating}
            reviews={listing.reviews}
            location={listing.location}
          />
          <HostInfo name={listing.hostName} years={listing.hostYears} />
          <Amenities items={listing.amenities} />
        </div>
        <BookingCard
          pricePerNight={listing.pricePerNight}
          maxGuests={listing.maxGuests}
        />
      </div>
    </div>
  );
};

export default RoomDetail;