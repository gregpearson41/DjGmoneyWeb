
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Music, Youtube, ExternalLink, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const Media = () => {
  const [ref, isInView] = useInView({
    threshold: 0.2
  });
  const {
    toast
  } = useToast();
  const handleAlbumClick = () => {
    toast({
      title: "🚧 Album Coming Soon!",
      description: "DJ Gmoney's latest mixes will be available soon. Stay tuned!"
    });
  };
  const handleYouTubeClick = () => {
    toast({
      title: "🚧 YouTube Channel",
      description: "Subscribe to DJ Gmoney's YouTube channel for exclusive content and live sets!"
    });
  };
  
  const albumCoverUrl = "https://horizons-cdn.hostinger.com/e4056b58-6a66-4adc-9d39-d1b1f77001b8/ef92b2274f748f8fd610cd4d49b9b2eb.png";

  return (
    <section id="media" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black" ref={ref}>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-500">Media & Music</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Check out my latest mixes, live performances, and exclusive content
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{
            opacity: 0,
            x: -30
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 rounded-lg p-8 border border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-yellow-500/20 rounded-full group-hover:bg-yellow-500/30 transition-colors duration-300">
                <Music className="w-8 h-8 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Latest Albums</h3>
                <p className="text-gray-400">Stream my latest mixes</p>
              </div>
            </div>
            
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative cursor-pointer overflow-hidden rounded-lg mb-2 shadow-xl group/image">
                  <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/40 transition-colors duration-300 z-10 flex items-center justify-center opacity-0 group-hover/image:opacity-100">
                    <ZoomIn className="w-10 h-10 text-white drop-shadow-lg" />
                  </div>
                  <img 
                    className="w-full h-64 object-cover transform group-hover/image:scale-105 transition-transform duration-500"
                    alt="DJ Gmoney Vibes R&B Mixtape album cover art"
                    src={albumCoverUrl} 
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full bg-zinc-900 border-zinc-800 p-1 overflow-hidden">
                <div className="relative w-full flex items-center justify-center bg-black rounded-sm">
                  <img 
                    src={albumCoverUrl} 
                    alt="Vibes R&B Mixtape Full Cover" 
                    className="max-h-[85vh] w-auto object-contain"
                  />
                </div>
              </DialogContent>
            </Dialog>

            <p className="text-gray-400 text-sm mb-6 text-center">Vibes R&B Mixtape - Coming Soon</p>
            <Button onClick={handleAlbumClick} className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold group-hover:scale-105 transition-transform duration-300">
              <Music className="w-5 h-5 mr-2" />
              Listen Now
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
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
          }} className="bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-lg p-8 border border-red-500/30 hover:border-red-500/60 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-red-500/20 rounded-full group-hover:bg-red-500/30 transition-colors duration-300">
                <Youtube className="w-8 h-8 text-red-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">YouTube Channel</h3>
                <p className="text-gray-400">Watch live performances</p>
              </div>
            </div>
            <img className="rounded-lg mb-6 w-full h-64 object-cover shadow-xl" alt="DJ Gmoney performing live" src="https://images.unsplash.com/photo-1695771079402-dfac9a60203f" />
            <Button onClick={handleYouTubeClick} className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold group-hover:scale-105 transition-transform duration-300">
              <Youtube className="w-5 h-5 mr-2" />
              Visit Channel
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Media;
