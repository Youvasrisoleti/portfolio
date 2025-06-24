import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <img
            src="https://media.istockphoto.com/id/994751270/photo/portrait-young-asian-businesswoman-holding-tablet-smartphone-in-formal-suit-in-office-with.jpg?s=612x612&w=0&k=20&c=EaYoCuTyMKl2_U6z5oFoT0j1U3xj1ZHA9mew2G6_WSs="
            alt="Soleti Youvasri"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-blue-600">Soleti Youvasri</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Full Stack Developer & Computer Science Student
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Passionate about creating innovative web solutions and learning cutting-edge technologies. 
            Currently pursuing my degree while building amazing projects and gaining real-world experience.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/YouvasriSoleti"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/youvasri-soleti-746757289"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:soletiyouvasri@gmail.com"
            className="flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium"
          >
            Get In Touch
          </button>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="text-blue-600" size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;