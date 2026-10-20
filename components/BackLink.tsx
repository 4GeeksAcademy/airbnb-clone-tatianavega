import Link from "next/link";

const BackLink = () => {
  return (
    <Link
      href="/catalog"
      className="inline-block px-4 pt-4 text-sm font-medium underline"
    >
      ← Volver al catálogo
    </Link>
  );
};

export default BackLink;