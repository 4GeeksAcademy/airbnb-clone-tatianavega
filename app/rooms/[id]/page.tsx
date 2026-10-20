import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import RoomDetail from "@/components/RoomDetail";
import LoadingIndicator from "@/components/LoadingIndicator";

type Props = {
  params: Promise<{ id: string }>;
};

const RoomContent = async ({ params }: Props) => {
  const { id } = await params;
  return <RoomDetail id={id} />;
};

const RoomPage = ({ params }: Props) => {
  return (
    <main>
      <Navbar />
      <Suspense fallback={<LoadingIndicator />}>
        <RoomContent params={params} />
      </Suspense>
    </main>
  );
};

export default RoomPage;