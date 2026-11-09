
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Music, Play, Pause, Volume2, VolumeX, Headphones } from 'lucide-react';
import { hapticFeedback } from '@/utils/hapticFeedback';

interface MusicTrack {
  title: string;
  artist: string;
  url: string;
  spotifyId: string;
  type: string;
  mood: 'healing' | 'dark' | 'space' | 'calm' | 'epic' | 'meditative' | 'spiritual';
  timeOfDay?: 'morning' | 'afternoon' | 'evening' | 'night';
}

const musicTracks: MusicTrack[] = [
  {
    title: "Interstellar Main Theme",
    artist: "Hans Zimmer",
    url: "https://open.spotify.com/embed/track/6790lLyykAbxSpHKcVhyX5",
    spotifyId: "6790lLyykAbxSpHKcVhyX5",
    type: "cinematic",
    mood: "epic",
    timeOfDay: "evening"
  },
  {
    title: "Tibetan Healing Chants",
    artist: "Monks of Tibet",
    url: "https://open.spotify.com/embed/track/7ouMYWpwJ8MyGY1FALA9oN",
    spotifyId: "7ouMYWpwJ8MyGY1FALA9oN",
    type: "chant",
    mood: "healing",
    timeOfDay: "morning"
  },
  {
    title: "Forest Whispers",
    artist: "Nature Collective",
    url: "https://open.spotify.com/embed/track/4uLU6hMCjMI75M1A2tKUQC",
    spotifyId: "4uLU6hMCjMI75M1A2tKUQC",
    type: "ambient",
    mood: "calm",
    timeOfDay: "afternoon"
  },
  {
    title: "Rain Meditation",
    artist: "Peaceful Mind",
    url: "https://open.spotify.com/embed/track/6DqaZ8BQNepxYgRa4hbFD1",
    spotifyId: "6DqaZ8BQNepxYgRa4hbFD1",
    type: "ambient",
    mood: "meditative",
    timeOfDay: "evening"
  },
  {
    title: "Cornfield Chase",
    artist: "Hans Zimmer",
    url: "https://open.spotify.com/embed/track/0YP6WjOFbkv5PnCtyfTIDc",
    spotifyId: "0YP6WjOFbkv5PnCtyfTIDc",
    type: "cinematic",
    mood: "space",
    timeOfDay: "night"
  },
  {
    title: "Om Mani Padme Hum",
    artist: "Sacred Chants",
    url: "https://open.spotify.com/embed/track/7bfHtY2m4jVOJRdMOKoJNd",
    spotifyId: "7bfHtY2m4jVOJRdMOKoJNd",
    type: "chant",
    mood: "spiritual",
    timeOfDay: "morning"
  },
  {
    title: "EMDR Bilateral Sounds",
    artist: "Therapeutic Audio",
    url: "https://open.spotify.com/embed/track/1A0UkNy5tfI4K8DdJ5tFNH",
    spotifyId: "1A0UkNy5tfI4K8DdJ5tFNH",
    type: "therapeutic",
    mood: "healing",
    timeOfDay: "afternoon"
  }
];

export default function EnhancedMusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedMood, setSelectedMood] = useState<string>('all');
  const [autoSuggest, setAutoSuggest] = useState(true);

  // Auto-suggest based on time of day
  useEffect(() => {
    if (autoSuggest) {
      const hour = new Date().getHours();
      let timeOfDay: 'morning' | 'afternoon' | 'evening' | 'night';
      
      if (hour >= 5 && hour < 12) timeOfDay = 'morning';
      else if (hour >= 12 && hour < 17) timeOfDay = 'afternoon';
      else if (hour >= 17 && hour < 21) timeOfDay = 'evening';
      else timeOfDay = 'night';

      const suggestedTrack = musicTracks.findIndex(track => track.timeOfDay === timeOfDay);
      if (suggestedTrack !== -1) {
        setCurrentTrack(suggestedTrack);
      }
    }
  }, [autoSuggest]);

  const getMoodColor = (mood: string) => {
    const colors = {
      epic: 'text-purple-600 bg-purple-100',
      dark: 'text-red-600 bg-red-100',
      healing: 'text-green-600 bg-green-100',
      calm: 'text-blue-600 bg-blue-100',
      meditative: 'text-indigo-600 bg-indigo-100',
      space: 'text-gray-600 bg-gray-100',
      spiritual: 'text-yellow-600 bg-yellow-100'
    };
    return colors[mood as keyof typeof colors] || 'text-slate-600 bg-slate-100';
  };

  const filteredTracks = selectedMood === 'all' 
    ? musicTracks 
    : musicTracks.filter(track => track.mood === selectedMood);

  return (
    <>
      {/* Floating Music Player */}
      <div className="fixed bottom-6 left-6 z-50">
        <Card className="bg-white/90 backdrop-blur-md border-green-200 shadow-xl rounded-2xl overflow-hidden">
          <CardContent className="p-4">
            {!isExpanded ? (
              // Compact Player with Now Playing
              <div className="flex items-center space-x-3">
                <div className="flex flex-col min-w-0">
                  <p className="text-sm font-medium text-slate-700 truncate">
                    {musicTracks[currentTrack].title}
                  </p>
                  <div className="flex items-center space-x-2">
                    <p className="text-xs text-slate-500 truncate">
                      {musicTracks[currentTrack].artist}
                    </p>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${getMoodColor(musicTracks[currentTrack].mood)}`}>
                      {musicTracks[currentTrack].mood}
                    </span>
                  </div>
                </div>
                
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setIsExpanded(true)}
                  className="rounded-full hover:bg-green-100"
                  aria-label="Expand music player"
                >
                  <Headphones className="h-4 w-4 text-green-600" />
                </Button>
              </div>
            ) : (
              // Expanded Player with Full Controls
              <div className="w-80">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-slate-800">VOYCE Soundscape</h3>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => setIsExpanded(false)}
                    className="rounded-full hover:bg-green-100"
                    aria-label="Collapse music player"
                  >
                    <Music className="h-4 w-4 text-green-600" />
                  </Button>
                </div>
                
                {/* Mood Filter */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-slate-700 mb-2">Mood</p>
                  <div className="flex flex-wrap gap-2">
                    {['all', 'healing', 'calm', 'epic', 'dark', 'space', 'meditative', 'spiritual'].map((mood) => (
                      <button
                        key={mood}
                        onClick={() => setSelectedMood(mood)}
                        className={`text-xs px-3 py-1 rounded-full transition-colors ${
                          selectedMood === mood 
                            ? 'bg-green-500 text-white' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {mood.charAt(0).toUpperCase() + mood.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Current Track Spotify Player */}
                <div className="mb-4">
                  <iframe
                    src={`${musicTracks[currentTrack].url}?utm_source=generator&theme=0`}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-xl"
                  ></iframe>
                </div>
                
                {/* Track List */}
                <div className="max-h-40 overflow-y-auto space-y-1">
                  {filteredTracks.map((track, index) => {
                    const originalIndex = musicTracks.indexOf(track);
                    return (
                      <div
                        key={originalIndex}
                        onClick={() => setCurrentTrack(originalIndex)}
                        className={`p-2 rounded-lg cursor-pointer transition-colors ${
                          originalIndex === currentTrack 
                            ? 'bg-green-100 border border-green-200' 
                            : 'hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-slate-700 truncate">{track.title}</p>
                            <p className="text-xs text-slate-500 truncate">{track.artist}</p>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${getMoodColor(track.mood)}`}>
                            {track.type}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
