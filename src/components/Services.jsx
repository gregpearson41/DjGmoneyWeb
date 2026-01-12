import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Heart, Briefcase, Home, Flame } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Weddings',
    description: 'Make your special day unforgettable with carefully curated music that sets the perfect mood for every moment, from ceremony to reception.',
    features: ['Custom playlists', 'Ceremony music', 'Reception entertainment', 'Special requests']
  },
  {
    icon: Briefcase,
    title: 'Corporate Events',
    description: 'Professional entertainment for conferences, holiday parties, product launches, and team-building events that leave a lasting impression.',
    features: ['Professional setup', 'Background music', 'Interactive entertainment']
  },
  {
    icon: Home,
    title: 'Backyard Parties',
    description: 'Transform your backyard into the ultimate party destination with high-energy music and a vibrant atmosphere for all ages.',
    features: ['Outdoor sound systems', 'Party lighting', 'Flexible setups', 'All-ages entertainment']
  },
  {
    icon: Flame,
    title: 'BBQs & Celebrations',
    description: 'Break out your fans and grills. So add some flavor to your cookout and outdoor celebrations with the perfect soundtrack that keeps your guests entertained all day.',
    features: ['Casual atmosphere', 'Diverse music selection', 'Interactive DJ sets', 'Guest requests welcome']
  }
];

const Services = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="py-20 px-4 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-500">Services</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional DJ services tailored to make your event extraordinary
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 group"
            >
              <service.icon className="w-12 h-12 text-yellow-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-3 text-yellow-500">{service.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;