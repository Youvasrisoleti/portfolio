import React from 'react';
import { TimelineItem } from '../types/portfolio';
import { MapPin, Calendar } from 'lucide-react';

interface TimelineProps {
  items: TimelineItem[];
  title: string;
}

const Timeline: React.FC<TimelineProps> = ({ items, title }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
        {title}
      </h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-200"></div>
        
        {items.map((item, index) => (
          <div key={item.id} className={`relative flex items-center mb-12 ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}>
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 border-4 border-white rounded-full shadow-md z-10"></div>
            
            {/* Content */}
            <div className={`ml-12 md:ml-0 md:w-1/2 ${
              index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
            }`}>
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
                <div className="flex items-center mb-2 text-sm text-gray-500">
                  <Calendar size={16} className="mr-1" />
                  <span>{item.period}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <div className="flex items-center mb-3 text-blue-600">
                  <MapPin size={16} className="mr-1" />
                  <span className="font-medium">{item.organization}</span>
                </div>
                <p className="text-gray-700 mb-4">
                  {item.description}
                </p>
                {item.achievements && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;