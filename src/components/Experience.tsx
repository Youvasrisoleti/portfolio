import React from 'react';
import Timeline from './Timeline';
import { experience } from '../data/portfolio';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Timeline items={experience} title="Experience" />
      </div>
    </section>
  );
};

export default Experience;