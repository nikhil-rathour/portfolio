import { useState, useEffect, useRef } from 'react';
import { Music, Pause } from 'lucide-react';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('/1.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.6;

    // Cleanup function
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        // Handle autoplay restrictions
        console.error("Audio playback failed:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className="group flex items-center justify-center w-7 h-7 rounded-full bg-gray-800/40 border border-gray-600/30 hover:bg-gray-700/50 transition-all duration-300 shadow-md"
      >
        {isPlaying ? (
          <Pause className="w-3 h-3 text-cyan-300" />
        ) : (
          <Music className="w-3 h-3 text-gray-300 group-hover:text-cyan-300" />
        )}
      </button>
      
      {/* Music playing animation */}
      {isPlaying && (
        <div className="absolute -top-2 -right-1 flex items-end h-3 space-x-0.5">
          <div className="w-0.5 h-1 bg-cyan-400 animate-musicBar1"></div>
          <div className="w-0.5 h-2 bg-purple-400 animate-musicBar2"></div>
          <div className="w-0.5 h-3 bg-pink-400 animate-musicBar3"></div>
          <div className="w-0.5 h-1 bg-cyan-400 animate-musicBar4"></div>
        </div>
      )}
    </div>
  );
};

export default BackgroundMusic;