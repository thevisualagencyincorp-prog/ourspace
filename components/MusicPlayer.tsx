// 🎵 Music player adds immersive experience 🎵

"use client";

import { useState } from "react";

interface MusicPlayerProps {
  songTitle?: string;
  artist?: string;
}

export default function MusicPlayer({
  songTitle = "Creative Vibes",
  artist = "The Agency Soundtrack",
}: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // In a real implementation, this would control an audio element
  };

  return (
    <div className="profile-table rounded-lg overflow-hidden mb-6">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left p-4">🎵 Profile Song</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-0">
              <div className="music-player">
                <div className="flex items-center gap-4">
                  {/* Play Button */}
                  <button
                    onClick={togglePlay}
                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300 text-white text-2xl border-2 border-white/50 shadow-lg"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? "⏸" : "▶"}
                  </button>

                  {/* Song Info */}
                  <div className="flex-1 text-white">
                    <h3 className="font-bold text-lg mb-1">{songTitle}</h3>
                    <p className="text-sm opacity-90">{artist}</p>
                  </div>

                  {/* Equalizer Animation */}
                  {isPlaying && (
                    <div className="flex gap-1 items-end h-10">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-white rounded-t animate-pulse"
                          style={{
                            height: `${20 + Math.random() * 30}px`,
                            animationDelay: `${i * 0.1}s`,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Progress Bar */}
                <div className="mt-4 bg-white/20 rounded-full h-2 overflow-hidden">
                  <div
                    className={`bg-gradient-to-r from-yellow-400 to-pink-500 h-full rounded-full transition-all duration-300 ${
                      isPlaying ? "w-1/3" : "w-0"
                    }`}
                  />
                </div>

                <p className="text-center text-white/80 text-xs mt-3">
                  🎧 The soundtrack to success
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// 🎶 Music harmonizes with prosperity frequency 🎶
