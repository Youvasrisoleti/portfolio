import React from 'react';
import { Code, Heart, Lightbulb, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: 'Clean Code',
      description: 'Writing maintainable, efficient, and scalable code that follows best practices.'
    },
    {
      icon: <Lightbulb className="text-orange-500" size={24} />,
      title: 'Problem Solving',
      description: 'Passionate about tackling complex challenges with creative and innovative solutions.'
    },
    {
      icon: <Users className="text-green-500" size={24} />,
      title: 'Collaboration',
      description: 'Strong team player who values communication and knowledge sharing.'
    },
    {
      icon: <Heart className="text-red-500" size={24} />,
      title: 'Continuous Learning',
      description: 'Always eager to learn new technologies and improve existing skills.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know more about my journey, values, and what drives me as a developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="About Alex"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              My Story
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                I'm Youvasri Soleti, a passionate Computer Science student and aspiring Full Stack Developer 
                with a love for creating digital solutions that make a difference. My journey 
                into programming started in my 2nd year of Bachelors degree  when I built my first website, and 
                I've been hooked ever since.
              </p>
              <p>
                Currently pursuing my Bachelor's degree in Computer Science, I've gained 
                hands-on experience through internships, freelance projects, and personal 
                coding adventures. I enjoy working with modern web technologies and am 
                always exploring new frameworks and tools.
              </p>
              <p>
                When I'm not coding, you can find me reading quotes for inspiration, 
                reading tech blogs. I believe in the power 
                of technology to solve real-world problems and create positive impact.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {highlight.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {highlight.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;