function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              Kidrove
            </h2>

            <p className="mt-4 text-gray-400">
              Empowering young minds through AI, Robotics, Coding,
              and Innovation.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li><a href="#details">Workshop Details</a></li>
              <li><a href="#outcomes">Learning Outcomes</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#register">Register</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <p className="text-gray-400">
              📧 info@kidrove.com
            </p>

            <p className="text-gray-400 mt-2">
              📞 +91 98765 43210
            </p>
          </div>

        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-center text-gray-500">
          © 2026 Kidrove. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;