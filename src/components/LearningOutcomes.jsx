function LearningOutcomes() {
  const outcomes = [
    "Understand the basics of Artificial Intelligence.",
    "Build simple Robotics projects.",
    "Learn programming using beginner-friendly tools.",
    "Improve logical thinking and problem-solving skills.",
    "Receive a Certificate of Completion after the workshop.",
  ];

  return (
    <section id="outcomes" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Learning Outcomes
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:bg-blue-600 hover:text-white transition duration-300"
            >
              <div className="text-4xl mb-4">🤖</div>

              <p className="text-lg font-medium">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LearningOutcomes;