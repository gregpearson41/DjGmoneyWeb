import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Greg@Djgmoney.com',
      href: 'mailto:Greg@Djgmoney.com',
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(240) NOT-GREG',
      href: 'tel:+15551234567',
      description: 'Seriously Thats my booking number lol'
    }
  ];

  return (
    <section id="contact" className="py-10 px-4 bg-blackrelative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-500">Contact</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to make your event unforgettable? Get in touch and let's start planning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-zinc-900/50 p-8 rounded-lg border border-zinc-800 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors">
                  <item.icon className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                  {item.href ? (
                    <a 
                      href={item.href}
                      className="text-xl font-semibold text-white hover:text-blue-400 transition-colors block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-xl font-semibold text-white">{item.value}</p>
                  )}
                  <p className="text-sm text-gray-500 mt-2">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 md:p-12 rounded-lg text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Music For Every Occasion
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're planning a wedding, corporate event, or private party, I'm here to make it extraordinary. Reach out today to discuss your vision.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-6 text-lg"
          >
            <a href="mailto:Greg@Djgmoney.com">
              <Send className="mr-2 h-5 w-5" />
              Send Email
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;