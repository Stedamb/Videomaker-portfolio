import { useState, useRef } from "react";
import { header } from "../data/header";

const Header = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const vidRef = useRef<HTMLVideoElement | null>(null);

    const playPauseVideo = () => {
        if (vidRef.current) {
            isPlaying ? vidRef.current.pause() : vidRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    const muteUnmuteVideo = () => {
        if (vidRef.current) {
            vidRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleVideoClick = () => {
        playPauseVideo();
    };

    return (
        <div className="container-xl lazyload">
            <video ref={vidRef}
                className="cursor-hover play-pause rounded-xl"
                autoPlay
                muted
                loop
                onClick={handleVideoClick}>
                <source src={header.source} type="video/mp4" />
                Sorry, your browser doesn't support videos.
            </video>
            <div className="absolute bottom-3 right-4" onClick={muteUnmuteVideo}>
                <img src="/audio.svg" width="40px" className={isMuted ? 'hidden' : ''} />
                <img src="/mute.svg" width="40px" className={isMuted ? ' ' : 'hidden'} />
            </div>
        </div>
    );
};

export default Header;
