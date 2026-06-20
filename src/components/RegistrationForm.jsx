import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      setMessage("Please fill all fields.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);

        setFormData({
          name: "",
          email: "",
          phone: "",
        });
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error(error);
      setMessage("Unable to connect to backend.");
    }

    setLoading(false);
  };

  return (
    <section
      id="register"
      className="py-20 bg-gradient-to-r from-indigo-700 to-blue-600"
    >
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl p-10">

        <h2 className="text-4xl font-bold text-blue-700 text-center mb-8">
          Register Now
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
          >
            {loading ? "Submitting..." : "Register Now"}
          </button>

        </form>

        {message && (
          <p className="text-center mt-5 text-lg font-semibold text-green-600">
            {message}
          </p>
        )}

      </div>
    </section>
  );
}

export default RegistrationForm;