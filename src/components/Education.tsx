import React from 'react';
import Timeline from './Timeline';
import { education } from '../data/portfolio';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Timeline items={education} title="Education" />
      </div>
    </section>
  );
};

export default Education;