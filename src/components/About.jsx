import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Music2, Headphones, Award } from 'lucide-react';

import djPic from '../assets/images/DjPic.png';

const About = () => {
  const [ref, isInView] = useInView({
    threshold: 0.2
  });
  return <section id="about" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-500">About DJ Gmoney</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
          <img src={djPic} alt="Description of my image" />
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">DJ G-Money (aka Greg) is a high-energy, crowd-pleasing DJ based in Washington, DC, with roots in the industry dating back to 1996. From intimate private parties to large-scale events, he brings experience, versatility, and an infectious energy that turns any gathering into a memorable experience.

In your search for the right DJ, you’ll quickly discover that DJ G-Money is not your average performer. He’s part of a select group of DJs who truly entertain—engaging the crowd, reading the room, and creating an atmosphere that goes beyond simply playing tracks.

While many DJs play music exceptionally well, Greg elevates the experience through live remixing, seamless transitions, and real-time interaction with the audience. If your goal is a fun, energetic, and unforgettable event, DJ G-Money is the DJ you want behind the decks.</p>
            <p className="text-gray-300 text-lg leading-relaxed">Performance highlights include:

Country club and upscale private events
(Oak Creek, Newton White Mansion, Oxon Hill Manor)

Various Washington, DC nightlife venues

Ronald Reagan Building & International Trade Center

Numerous private and corporate events throughout the DC area</p>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <Music2 className="w-12 h-12 mx-auto mb-3 text-yellow-500" />
                <p className="text-2xl font-bold text-yellow-500">10+</p>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
              <div className="text-center">
                <Headphones className="w-12 h-12 mx-auto mb-3 text-yellow-500" />
                <p className="text-2xl font-bold text-yellow-500">100+</p>
                <p className="text-gray-400 text-sm">Events Performed</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 mx-auto mb-3 text-yellow-500" />
                <p className="text-2xl font-bold text-yellow-500">99.999%</p>
                <p className="text-gray-400 text-sm">Satisfaction Rate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default About;