import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const Gallery = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="gallery" className="py-20 px-4 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-500">Event Gallery</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Memorable moments from weddings, corporate events, and celebrations
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-lg group cursor-pointer"
          >
            <img 
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              alt="Wedding reception with dancing guests"
             src="https://images.unsplash.com/photo-1600547224355-10c6482872ca" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative overflow-hidden rounded-lg group cursor-pointer"
          >
            <img 
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              alt="Corporate event with professional setup"
             src="https://images.unsplash.com/photo-1680157203258-2eacc582262a" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative overflow-hidden rounded-lg group cursor-pointer"
          >
            <img 
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              alt="Outdoor backyard party at sunset"
             src="https://images.unsplash.com/photo-1691181835736-2baa3716e1a9" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative overflow-hidden rounded-lg group cursor-pointer"
          >
            <img 
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              alt="BBQ celebration with crowd"
             src="https://images.unsplash.com/photo-1562589726-bb3f466144da" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative overflow-hidden rounded-lg group cursor-pointer"
          >
            <img 
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              alt="DJ equipment and turntables close-up"
             src="https://images.unsplash.com/photo-1650631071308-57ffcc7c773e" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative overflow-hidden rounded-lg group cursor-pointer"
          >
            <img 
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              alt="Party crowd with hands in the air"
             src="https://images.unsplash.com/photo-1683781533171-5f6c46afe435" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="relative overflow-hidden rounded-lg group cursor-pointer"
          >
            <img 
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              alt="DJ performing at night event"
             src="https://images.unsplash.com/photo-1577648674937-f3851cfbfad8" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="relative overflow-hidden rounded-lg group cursor-pointer"
          >
            <img 
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              alt="Celebration with confetti and lights"
             src="https://images.unsplash.com/photo-1432042927273-e1e0a9261da2" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;