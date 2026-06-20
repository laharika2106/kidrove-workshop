function WorkshopDetails() {
  const details = [
    { title: "👦 Age Group", value: "8–14 Years" },
    { title: "📅 Duration", value: "4 Weeks" },
    { title: "💻 Mode", value: "Online" },
    { title: "💰 Fee", value: "₹2,999" },
    { title: "🚀 Start Date", value: "15 July 2026" },
  ];

  return (
    <section id="details" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Workshop Details
        </h2>

        <div className="grid md:grid-cols-5 gap-6">
          {details.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold text-gray-500">
                {item.title}
              </h3>

              <p className="text-2xl font-bold text-blue-600 mt-4">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkshopDetails;