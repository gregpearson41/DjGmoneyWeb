
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Facebook, Instagram, Youtube, Music } from 'lucide-react'; 
import { useToast } from '@/components/ui/use-toast';

const socialLinks = [
  { icon: Facebook, name: 'Facebook', color: 'hover:bg-blue-600' },
  { icon: Instagram, name: 'Instagram', color: 'hover:bg-pink-600' },
  { icon: Youtube, name: 'YouTube', color: 'hover:bg-red-600' }
];

const Social = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { toast } = useToast();

  const handleSocialClick = (platform) => {
    const links = {
    Instagram: 'https://www.instagram.com/djgmoney',
    Facebook: 'https://www.facebook.com/',
    Youtube: 'https://www.youtube.com/@djgmoney',
  };


  const url = links[platform];

  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  } else {
    console.warn(`No link defined for platform: ${platform}`);
  }
  };

  return (
    <section id="social" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-500">Connect With Me</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay updated with my latest mixes, upcoming events, and exclusive content
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {socialLinks.map((social, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSocialClick(social.name)}
              className={`p-6 bg-gray-800 rounded-full border-2 border-yellow-500/30 ${social.color} hover:border-yellow-500 transition-all duration-300 group`}
            >
              <social.icon className="w-8 h-8 text-yellow-500 group-hover:text-white transition-colors duration-300" />
            </motion.button>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 text-gray-400"
        >
          Let's connect so that you don't miss a thing!
        </motion.p>
      </div>
    </section>
  );
};

export default Social;
