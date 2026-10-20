import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
      <Link href="/" className="text-xl font-bold text-rose-500">
        airbnb
      </Link>
      <div className="flex items-center gap-4 text-xl">
        <Link href="/catalog" className="text-sm font-medium">
          Catálogo
        </Link>
        <span>🌐</span>
        <span>👤</span>
      </div>
    </header>
  );
};

export default Navbar;