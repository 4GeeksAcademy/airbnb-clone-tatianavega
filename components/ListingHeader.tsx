type Props = {
  title: string;
  rating: number;
  reviews: number;
  location: string;
};

const ListingHeader = ({ title, rating, reviews, location }: Props) => {
  return (
    <div className="px-4 py-4">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="mt-1 text-sm">
        ⭐ {rating} · {reviews} reseñas · {location}
      </p>
    </div>
  );
};

export default ListingHeader;