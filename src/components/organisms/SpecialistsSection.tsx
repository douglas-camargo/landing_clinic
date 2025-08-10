import { Award, Star, Calendar } from 'lucide-react';
import SpecialistCard from '../molecules/SpecialistCard';
import { specialists, specialistStats } from '../../data';

export default function SpecialistsSection() {
  return (
    <section 
      id="specialists" 
      className="py-20 bg-gray-50"
      aria-labelledby="specialists-heading"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 
            id="specialists-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Nuestros Especialistas Médicos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Médicos altamente calificados con formación internacional y años de experiencia en las mejores instituciones médicas del mundo
          </p>
        </header>

        <div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
          aria-label="Lista de especialistas médicos certificados"
        >
          {specialists.map((doctor, index) => (
            <div key={index} role="listitem">
              <SpecialistCard {...doctor} />
            </div>
          ))}
        </div>

        {/* Additional info */}
        <aside 
          className="mt-16 text-center"
          role="complementary"
          aria-label="Información sobre la calidad de nuestros especialistas"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir nuestros especialistas?
            </h3>
            <div 
              className="grid md:grid-cols-3 gap-8"
              role="list"
              aria-label="Ventajas de nuestros especialistas"
            >
              <div className="text-center" role="listitem">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{specialistStats[0].value}</h4>
                <p className="text-gray-600">{specialistStats[0].label}</p>
              </div>
              <div className="text-center" role="listitem">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{specialistStats[1].value}</h4>
                <p className="text-gray-600">{specialistStats[1].label}</p>
              </div>
              <div className="text-center" role="listitem">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <Calendar className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{specialistStats[2].value}</h4>
                <p className="text-gray-600">{specialistStats[2].label}</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}