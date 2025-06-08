import { education, certifications } from '../data/portfolioData';
import { GraduationCap, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Education = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-4">
            {t('education.title')}
          </h2>
          <div className="w-20 h-1 bg-secondary-500 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-dark mb-6 flex items-center">
              <GraduationCap className="mr-2 text-primary-600" /> {t('education.degrees')}
            </h3>
            <div className="relative border-l-2 border-primary-200 pl-8 ml-4">
              {education.map((edu, index) => (
                <div 
                  key={edu.id} 
                  className="relative mb-10"
                >
                  <div className="absolute -left-12 mt-1.5 w-8 h-8 bg-white border-2 border-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-semibold">{edu.year.substring(2)}</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-dark mb-2">{t(`education.${edu.id}.degree`)}</h4>
                    <p className="text-gray-600">{t(`education.${edu.id}.institution`)}</p>
                    <p className="text-sm text-primary-700 mt-2 font-medium">{edu.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-dark mb-6 flex items-center">
              <Award className="mr-2 text-primary-600" /> {t('education.certifications')}
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-lg p-5 shadow-sm hover:shadow-md transition-all hover:transform hover:translate-x-1"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-dark">{t(`education.certificationsList.${index}.title`)}</h4>
                      <p className="text-gray-600 text-sm mt-1">{t(`education.certificationsList.${index}.issuer`)}</p>
                    </div>
                    <span className="text-sm bg-primary-50 text-primary-700 px-3 py-1 rounded-full font-medium">
                      {t(`education.certificationsList.${index}.date`)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};