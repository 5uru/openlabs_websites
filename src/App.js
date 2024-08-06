import React, { useState } from 'react';
import Alert from './components/Alert';

const Section = ({ title, children }) => (
    <div className="mb-16">
      <h2 className="text-2xl font-light mb-4 text-gray-800">{title}</h2>
      {children}
    </div>
);

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  return (
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-sans">
        <header className="bg-white shadow-sm py-4 px-6 sticky top-0 z-10">
          <nav className="max-w-4xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-light text-blue-600">OpenLabs</h1>
            <div className="space-x-6">
              {['about', 'mission', 'join'].map((section) => (
                  <button
                      key={section}
                      onClick={() => setActiveSection(section)}
                      className={`text-sm uppercase tracking-wide ${
                          activeSection === section ? 'text-blue-600' : 'text-gray-500 hover:text-gray-800'
                      } transition-colors duration-200`}
                  >
                    {section}
                  </button>
              ))}
            </div>
          </nav>
        </header>
        <main className="flex-grow container max-w-3xl mx-auto px-6 py-12">
          {activeSection === 'about' && (
              <Section title="About OpenLabs">
                <p className="mb-4">
                  OpenLabs is a student-run club dedicated to promoting open source software and collaborative development.
                  We believe in the power of shared knowledge and community-driven innovation.
                </p>
                <p>
                  Our club provides a platform for students to engage with open source projects, learn from industry
                  professionals, and contribute to the global open source community.
                </p>
              </Section>
          )}
          {activeSection === 'mission' && (
              <Section title="Our Mission">
                <ul className="space-y-2 list-disc list-inside">
                  <li>Foster a culture of open source collaboration among students</li>
                  <li>Provide hands-on experience with real-world open source projects</li>
                  <li>Develop technical and soft skills essential for collaborative development</li>
                  <li>Bridge the gap between academic learning and industry practices</li>
                  <li>Contribute meaningfully to the global open source community</li>
                </ul>
              </Section>
          )}
          {activeSection === 'join' && (
              <Section title="Join OpenLabs">
                <p className="mb-4">
                  We welcome students from all disciplines who are passionate about open source and collaborative
                  development. No prior experience is necessary – just bring your enthusiasm and willingness to learn!
                </p>
                <p className="mb-4">To join OpenLabs:</p>
                <ol className="list-decimal list-inside space-y-2 mb-6">
                  <li>Attend our next general meeting</li>
                  <li>Sign up for our mailing list</li>
                  <li>Join our online community platform</li>
                </ol>
                <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
                    onClick={() => alert('Contact form coming soon!')}
                >
                  Contact Us
                </button>
              </Section>
          )}
          <Alert className="mt-8">
            <p>Stay tuned for our upcoming events and workshops!</p>
          </Alert>
        </main>
        <footer className="bg-white py-6 text-center text-gray-500 text-sm">
          <p>&copy; 2024 OpenLabs. All rights reserved.</p>
          <p className="mt-1">Committed to open source collaboration and innovation.</p>
        </footer>
      </div>
  );
};

export default App;