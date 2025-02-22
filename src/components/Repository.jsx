import React from 'react';

const GitHubRepos = () => {
  const repos = [
    {
      id: 1,
      name: 'expense-tracker',
      description: 'An expense tracker application built using ReactJS, Tailwind CSS and Firebase!',
      link: 'https://github.com/SarojWasti/expense-tracker',
      demo: 'https://expensetracker-56e23.web.app',
      language: ['ReactJs','Tailwind CSS', 'Firebase'],
    },
    {
      id: 2,
      name: 'country-guesser',
      description: 'A simple and fun country guesser game.',
      link: 'https://github.com/SarojWasti/country-guesser',
      demo: 'https://sarojwasti.github.io/country-guesser/',
      language: ['HTML', 'JavaScript'],
    },
    {
      id: 3,
      name: 'portfolio-website',
      description: 'My single page portfolio website designed using ReactJS and Tailwind CSS.',
      link: 'https://github.com/SarojWasti/sarojwasti.github.io',
      demo: 'https://sarojwasti.github.io/',
      language: ['JavaScript', 'Tailwind CSS'],
    },
    {
      id: 4,
      name: 'books-management',
      description: 'A library management system developed using Python and SQLite storing books and users information. ',
      link: 'https://github.com/SarojWasti/library-management-system',
      language: ['Python', 'SQLite'],
    },
  ];

  return (
    <div className="container">
      <h1 className="text-4xl font-bold mb-8">PROJECTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-transparent hover:border-orange-500 hover:shadow-lg transition-all duration-300"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">
                <a
                  href={repo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center justify-between text-gray-900"
                >
                  {repo.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{repo.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {repo.language.map((lang, index) => (
                    <span
                      key={index}
                      className="font-medium text-gray-700 bg-gray-200 px-3 py-1 rounded-full"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
                {repo.demo && (
                  <a
                    href={repo.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-primary hover:bg-orange-700 text-sm px-3 py-1 rounded-md transition duration-300"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubRepos;
