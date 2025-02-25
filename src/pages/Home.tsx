import { FC } from 'react'

const Home: FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16 md:py-32">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-blue-400">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer | Web Designer | Tech Enthusiast
          </p>
          <div className="space-x-4">
            <a 
              href="/portfolio" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              View My Work
            </a>
            <a 
              href="/contact" 
              className="border border-blue-500 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Featured Skills Section */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            What I Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
              <p className="text-gray-300">
                Creating responsive and interactive user interfaces using modern technologies.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Backend Development</h3>
              <p className="text-gray-300">
                Building robust and scalable server-side applications.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-bold mb-4">UI/UX Design</h3>
              <p className="text-gray-300">
                Designing intuitive and beautiful user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home