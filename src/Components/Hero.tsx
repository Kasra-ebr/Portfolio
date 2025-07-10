
function Hero() {
  return (
    <section id="home" className="home-section min-h-screen flex items-center pt-20 bg-gray-900 overflow-hidden">
      <div className="home-content max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="home-inner flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Text Section */}
          <div className="text-section w-full md:w-1/2 text-center md:text-left">
            <h1 className="main-title text-4xl md:text-6xl font-bold mb-6 text-gray-100">
              Hi, I'm <span className="highlight-text gradient-text">Kasra Ebrahimi</span>
            </h1>
            <h2 className="subtitle text-2xl md:text-3xl mb-6 typewriter text-gray-100">
              Front End Developer & UI/UX Designer
            </h2>
            <p className="description text-gray-400 mb-8 text-lg">
              I create beautiful, functional digital experiences that solve real problems and deliver value.
            </p>
            <div className="cta-buttons flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
              <a
                href="#contact"
                className="text-gray-100 cta-button bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="text-gray-100 cta-button border border-blue-400 px-6 py-3 rounded-lg font-medium hover:bg-blue-900 hover:bg-opacity-30 transition"
              >
                View Work
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="image-section w-full md:w-1/2 flex justify-center">
            <div className="image-wrapper relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
              <div className="profile-image w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <img
                  src="https://via.placeholder.com/150?text="
                  className="profile-img w-[90%] h-[90%] rounded-full object-cover border-4 border-gray-900"
                />
              </div>
              <div className="code-icon absolute -bottom-5 -right-5 bg-gray-800 rounded-full p-3 shadow-xl">
                <div className="icon-wrapper w-12 h-12 sm:w-14 sm:h-14 bg-blue-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-code text-xl text-white"></i>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;