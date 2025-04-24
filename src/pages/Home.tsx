import { FC } from 'react';
import GravityParticles from '../components/GravityParticles';

const Home: FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Gravity Particles Background */}
      <GravityParticles />

      {/* Contenido principal con pointer-events-auto para permitir interacción */}
      <div className="container mx-auto px-4 py-16 md:py-32 relative z-10 pointer-events-none">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Existing hero content - con pointer-events-auto para los elementos interactivos */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl pointer-events-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hello, I'm <span className="text-blue-400">Elias Higuera Acosta</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Full Stack Developer
            </p>
            <p className="text-lg text-gray-400 mb-6">
              Specialized in React, Python, Node.js and Cloud Technologies
            </p>
            <p className="text-gray-300 mb-8 max-w-lg">
              I create modern web applications with a focus on clean code, 
              performance, and user experience. With over 2 years of experience 
              in full-stack development, I help businesses bring their ideas to life.
            </p>
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-gray-300">Available for projects</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span className="text-gray-300">Based in Colombia</span>
              </div>
            </div>
            <div className="space-x-4">
              <a 
                href="https://eliashigueraacosta.netlify.app/portfolio" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                View My Work
              </a>
              <a 
                href="https://eliashigueraacosta.netlify.app/contact" 
                className="border border-blue-500 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative w-full md:w-1/2 max-w-lg pointer-events-auto">
            {/* Decorative images grid */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {/* Top two images */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <img 
                  src="https://i.ibb.co/WWdgcCXm/Generated-Image-March-18-2025-1-20-PM-png.jpg" 
                  alt="Workspace" 
                  className="relative rounded-lg w-full h-32 object-cover shadow-lg transform group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="relative group rotate-90 origin-center">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-yellow-500 rounded-lg opacity-40 group-hover:opacity-60 transition-opacity rotate-90"></div>
                <img 
                  src="https://i.ibb.co/Zpm55d4f/Generated-Image-March-18-2025-1-20-PM-png-1.jpg" 
                  alt="Technology" 
                  className="relative rounded-lg w-full h-32 object-cover shadow-lg transform group-hover:scale-105 transition-transform "
                />
              </div>
              
              {/* Bottom centered image */}
              <div className="relative group col-span-2 mx-auto w-1/2 mt-4">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-red-500 rounded-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <img 
                  src="https://i.ibb.co/n81dpsqT/Generated-Image-March-18-2025-1-20-PM-png-2.jpg" 
                  alt="Setup" 
                  className="relative rounded-lg w-full h-32 object-cover shadow-lg transform group-hover:scale-105 transition-transform"
                />
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      {/* Featured Skills Section */}
        <div className="mt-20 pointer-events-auto"> {/* Add pointer-events-auto here */}
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            What I Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg flex flex-col h-full">
              <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
              <p className="text-gray-300 mb-4">
                Crafting modern and responsive user interfaces using React, TypeScript, and 
                Tailwind CSS. Specialized in creating performant SPAs with clean, maintainable code 
                and excellent user experience.
              </p>
              <ul className="text-gray-400 mb-6 list-disc list-inside">
                <li>React & Next.js</li>
                <li>JavaScript</li>
                <li>Tailwind CSS</li>
                <li>Redux & Context API</li>
              </ul>
              <a 
                href="https://github.com/MrMoss12-cmd/frontend-projects/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors text-center"
              >
                View Frontend Projects
              </a>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg flex flex-col h-full">
              <h3 className="text-xl font-bold mb-4">Backend Development</h3>
              <p className="text-gray-300 mb-4">
                Developing robust and scalable server-side applications using Node.js 
                and Express. Experienced in RESTful APIs, database design, and cloud services 
                integration.
              </p>
              <ul className="text-gray-400 mb-6 list-disc list-inside">
                <li>Python & TypeScript</li>
                <li>Django & Node.js</li>
                <li>MongoDB & PostgreSQL</li>
                <li>RESTful APIs</li>
                <li>GCP & Docker</li>
              </ul>
              <a 
                href="https://github.com/MrMoss12-cmd/backend-projects"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors text-center"
              >
                View Backend Projects
              </a>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg flex flex-col h-full">
              <h3 className="text-xl font-bold mb-4">Data Analysis & Visualization</h3>
              <p className="text-gray-300 mb-4">
                Transforming complex data into meaningful insights through advanced 
                analytics and interactive visualizations. Proficient in data processing, 
                statistical analysis, and creating dashboards.
              </p>
              <ul className="text-gray-400 mb-6 list-disc list-inside">
                <li>Python & Pandas</li>
                <li>D3.js & Chart.js</li>
                <li>Power BI</li>
                <li>SQL & Data Mining</li>
              </ul>
              <a 
                href="https://github.com/MrMoss12-cmd/data-projects"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors text-center"
              >
                View Data Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home