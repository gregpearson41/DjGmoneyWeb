import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Disc, Music2, Calendar, Mic2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AlbumsPage = () => {
  const albums = [
       {
      id: 1,
      title: "Summer Vibes Vol. 1",
      artist: "DJ Gmoney",
      status: "Coming Soon",
      releaseDate: "Summer 2026",
      cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop",
      genre: "House / Pop"
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-900/20 via-black to-black pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <Link to="/">
            <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-white/10 gap-2">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Music2 className="w-6 h-6 text-yellow-500" />
            <span className="font-bold text-xl tracking-tight">DJ Gmoney</span>
          </div>
        </header>

        {/* Page Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            Studio Work
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay Tuned in as we prepare new music and exclusive content for release.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {albums.map((album, index) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800 shadow-lg hover:shadow-2xl hover:border-yellow-500/30 transition-all duration-300 group"
            >
              {/* Album Art */}
              <div className="relative aspect-square overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                <img 
                  src={album.cover} 
                  alt={album.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-xs font-bold text-yellow-500 rounded-full border border-yellow-500/20">
                    {album.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">
                    {album.title}
                  </h3>
                  <p className="text-sm text-gray-400 flex items-center gap-1">
                    <Mic2 className="w-3 h-3" /> {album.artist}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 flex items-center gap-2">
                      <Disc className="w-4 h-4" /> Genre
                    </span>
                    <span className="text-gray-300">{album.genre}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> Release
                    </span>
                    <span className="text-gray-300">{album.releaseDate}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumsPage;