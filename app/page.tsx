import Navbar from "@/components/Navbar";
import ListingGrid from "@/components/ListingGrid";
import { listings } from "@/data/listings";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <ListingGrid listings={listings} />
    </main>
  );
};

export default HomePage;
