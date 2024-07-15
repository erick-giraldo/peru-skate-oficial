import React from 'react';

interface YouTubePlayerProps {
  videoId: string;
  width?: number;
  height?: number;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId, width = 640, height = 360 }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  
  return (
    <div className="flex justify-center items-center">
      <iframe
        className="rounded-lg shadow-lg"
        width={width}
        height={height}
        src={embedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubePlayer;
