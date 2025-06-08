import { projects } from '../data/portfolioData';
import { Code, ExternalLink, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<'before' | 'after'>('after');
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-4">
            {t('projects.title')}
          </h2>
          <div className="w-20 h-1 bg-secondary-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-6 p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-dark flex items-center">
                    <Code className="h-5 w-5 text-primary-600 mr-2" />
                    {t(`projects.${project.id}.title`)}
                  </h3>
                  <p className="text-gray-700">
                    {t(`projects.${project.id}.description`)}
                  </p>
                  
                  {project.improvements && (
                    <div className="space-y-2">
                      <h4 className="font-medium text-dark">{t('projects.improvements')}:</h4>
                      <ul className="space-y-1">
                        {project.improvements.map((improvement, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <ArrowRight className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0" />
                            {t(`projects.${project.id}.improvements.${index}`)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs font-medium bg-primary-50 text-primary-700 px-3 py-1 rounded-full"
                      >
                        {t(`projects.${project.id}.technologies.${index}`)}
                      </span>
                    ))}
                  </div>
                </div>

                {project.beforeImage && project.afterImage && (
                  <div className="space-y-4">
                    <div className="flex justify-center gap-4 mb-4">
                      <button
                        onClick={() => setSelectedImage('before')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          selectedImage === 'before'
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {t('projects.before')}
                      </button>
                      <button
                        onClick={() => setSelectedImage('after')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          selectedImage === 'after'
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {t('projects.after')}
                      </button>
                    </div>
                    <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                      <img
                        src={selectedImage === 'before' ? project.beforeImage : project.afterImage}
                        alt={`${t(`projects.${project.id}.title`)} - ${selectedImage === 'before' ? t('projects.before') : t('projects.after')}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {selectedImage === 'before' ? t('projects.before') : t('projects.after')}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {project.link && (
                <div className="border-t border-gray-200 p-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-800 font-medium flex items-center text-sm"
                  >
                    {t('projects.viewProject')} <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};