import { FC } from 'react'
import SkillCard from '../components/SkillCard'
import { getSkillsByCategory } from '../data/skills'

const About: FC = () => {
  // Get frontend skills first, as they're usually most relevant
  const frontendSkills = getSkillsByCategory('frontend');
  const backendSkills = getSkillsByCategory('backend');
  const toolsSkills = getSkillsByCategory('tools');

  const allSkills = [...frontendSkills, ...backendSkills, ...toolsSkills];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Introduction Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <p className="text-gray-600 leading-relaxed">
              Hello! I'm [Your Name], a passionate web developer based in [Your Location]. 
              I specialize in creating responsive and user-friendly web applications 
              using modern technologies. With a strong foundation in both frontend and 
              backend development, I strive to build efficient and scalable solutions.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              When I'm not coding, you can find me [Your Interests/Hobbies]. 
              I'm always eager to learn new technologies and take on challenging projects.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="/path/to/your-photo.jpg" 
              alt="Your Name" 
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allSkills.map((skill) => (
            <SkillCard
              category={skill.category}
              key={skill.id}
              title={skill.title}
              icon={skill.icon}
              level={skill.level}
              description={skill.description}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default About