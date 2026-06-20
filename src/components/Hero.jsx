function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-500 text-white py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>

          <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">
            Summer Workshop 2026
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            AI & Robotics
            <br />
            Summer Workshop
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Unlock your child's creativity with Artificial Intelligence and Robotics.
            Learn coding, build exciting projects, and explore future technologies
            in an engaging 4-week online workshop.
          </p>

          <a
            href="#register"
            className="inline-block mt-8 bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
          >
            Enroll Now →
          </a>

          <div className="flex gap-10 mt-10">
            <div>
              <h2 className="text-3xl font-bold">500+</h2>
              <p>Students</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">50+</h2>
              <p>Projects</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">100%</h2>
              <p>Online</p>
            </div>
          </div>

        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=80"
            alt="AI Robotics"
            className="rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;