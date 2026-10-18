const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
      <span className="text-xl font-bold text-rose-500">airbnb</span>
      <div className="flex gap-3 text-xl">
        <span>🌐</span>
        <span>👤</span>
      </div>
    </header>
  );
};

export default Navbar;
