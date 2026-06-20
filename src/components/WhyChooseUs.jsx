function WhyChooseUs() {
  const features = [
    {
      title: "Expert Mentors",
      description: "Learn from experienced AI & Robotics professionals.",
      icon: "👨‍🏫",
    },
    {
      title: "Hands-on Projects",
      description: "Build real AI and Robotics projects every week.",
      icon: "🤖",
    },
    {
      title: "Live Online Classes",
      description: "Interactive sessions with doubt clearing and activities.",
      icon: "💻",
    },
    {
      title: "Certificate",
      description: "Receive a certificate after successfully completing the workshop.",
      icon: "🏆",
    },
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose This Workshop?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
            >
              <div className="text-5xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;