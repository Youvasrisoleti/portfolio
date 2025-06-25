import React from 'react';
import { Download, FileText, Eye } from 'lucide-react';

const Resume: React.FC = () => {
  const resumePath = '/Youvasri_Resume.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Youvasri_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resume
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download my complete resume or view it online to see my full experience, 
            education, and qualifications.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
              <FileText className="text-white" size={32} />
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Soleti Youvasri - Full Stack Developer
          </h3>
          <p className="text-gray-600 mb-6">
            Computer Science Student | Passionate about Web Development
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={handleDownload}
              className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download size={20} />
              <span>Download PDF</span>
            </button>
            <button
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/1hhEdQ-8eMgFCwtnjI92PiTZpogHSfO9t/view?usp=sharing',
                  '_blank'
                )
              }
              className="flex items-center justify-center space-x-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              <Eye size={20} />
              <span>View Online</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-bold text-gray-900 mb-3">What's Included</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Complete work experience</li>
              <li>• Educational background</li>
              <li>• Technical skills & certifications</li>
              <li>• Project highlights</li>
              <li>• Contact information</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-bold text-gray-900 mb-3">Format Details</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• PDF format for compatibility</li>
              <li>• ATS-friendly layout</li>
              <li>• Professional design</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-bold text-gray-900 mb-3">Quick Stats</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Internship at IIT Ropar - 8 weeks</li>
              <li>• Multiple internships</li>
              <li>• Open to opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
