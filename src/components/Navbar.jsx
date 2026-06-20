function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-blue-700">
          Kidrove
        </h1>

        <ul className="hidden md:flex gap-8 items-center text-lg font-medium text-gray-700">
          <li>
            <a href="#details" className="hover:text-blue-600 transition">
              Details
            </a>
          </li>

          <li>
            <a href="#outcomes" className="hover:text-blue-600 transition">
              Outcomes
            </a>
          </li>

          <li>
            <a href="#faq" className="hover:text-blue-600 transition">
              FAQ
            </a>
          </li>

          <li>
            <a
              href="#register"
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Enroll
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;