import React from "react";

const Spotify = () => {
  return (
    <>
      <div className="  w-full max-w-4xl mx-auto my-8">
        <div className="relative rounded-xl overflow-hidden shadow-lg bg-black/80">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/artist/1g3tps1FqLNflYsQ1bheZo?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Spotify;
