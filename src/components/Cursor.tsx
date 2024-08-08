import { useEffect, useRef } from 'react';

const Cursor = () => {
    const delay = 2;
    const dot = useRef<HTMLDivElement | null>(null);
    const dotOutline = useRef<HTMLDivElement | null>(null);
    const cursorVisible = useRef(true);
    const cursorEnlarged = useRef(false);
    const cursorClicking = useRef(false);
    const isVideoPlaying = useRef(true);
    const endX = useRef(window.innerWidth / 2);
    const endY = useRef(window.innerHeight / 2);
    const _x = useRef(0);
    const _y = useRef(0);
    const requestRef = useRef<number | null>(null);
    let prevScrollY = window.scrollY;

    useEffect(() => {
        document.addEventListener('mousedown', toggleClick);
        document.addEventListener('mouseup', toggleClick);
        window.addEventListener('mousemove', mouseMoveEvent);
        document.addEventListener('mouseenter', mouseEnterEvent);
        document.addEventListener('mouseleave', mouseLeaveEvent);
        window.addEventListener('scroll', updateCursorPositionOnScroll);

        animateDotOutline();

        const hoverElements = document.querySelectorAll('.cursor-hover');
        hoverElements.forEach((e) => {
            if (e.classList.contains('play-pause')) {
                e.addEventListener('mouseover', mouseOverPlayEvent);
                e.addEventListener('mouseout', mouseOutPlayEvent);
                e.addEventListener('click', togglePlayPause);
            } else {
                e.addEventListener('mouseover', mouseOverEvent);
                e.addEventListener('mouseout', mouseOutEvent);
            }
        });

        return () => {
            document.removeEventListener('mousedown', toggleClick);
            document.removeEventListener('mouseup', toggleClick);
            window.removeEventListener('mousemove', mouseMoveEvent);
            document.removeEventListener('mouseenter', mouseEnterEvent);
            document.removeEventListener('mouseleave', mouseLeaveEvent);
            window.removeEventListener('scroll', updateCursorPosition);

            hoverElements.forEach((e) => {
                e.removeEventListener('mouseover', mouseOverEvent);
                e.removeEventListener('mouseout', mouseOutEvent);
                e.removeEventListener('click', togglePlayPause);
            });

            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, []);

    const toggleCursorVisibility = () => {
        if (dot.current && dotOutline.current) {
            if (cursorVisible.current) {
                dot.current.classList.remove("hide");
                dotOutline.current.classList.remove("hide");
            } else {
                dot.current.classList.add("hide");
                dotOutline.current.classList.add("hide");
            }
        }
    };

    const toggleCursorSize = () => {
        if (dot.current && dotOutline.current) {
            if (cursorEnlarged.current) {
                dot.current.classList.add("hovering");
                dotOutline.current.classList.add("hovering");
            } else {
                dot.current.classList.remove("hovering");
                dotOutline.current.classList.remove("hovering");
            }
        }
    };

    const togglePlayPause = () => {
        if (dot.current) {
            if (isVideoPlaying.current) {
                dot.current.classList.remove("pause");
                dot.current.classList.add("play");
                isVideoPlaying.current = false;
            } else {
                dot.current.classList.remove("play");
                dot.current.classList.add("pause");
                isVideoPlaying.current = true;
            }
        }
    };

    const showPlayPause = () => {
        if (dot.current) {
            if (isVideoPlaying.current) {
                dot.current.classList.add("pause");
                dot.current.classList.remove("play");
            } else {
                dot.current.classList.add("play");
                dot.current.classList.remove("pause");
            }
        }
    };

    const hidePlayPause = () => {
        if (dot.current) {
            dot.current.classList.remove("play");
            dot.current.classList.remove("pause");
        }
    };

    const toggleClick = () => {
        if (dotOutline.current) {
            if (cursorClicking.current) {
                dotOutline.current.classList.remove("clicking");
                cursorClicking.current = false;
            } else {
                dotOutline.current.classList.add("clicking");
                cursorClicking.current = true;
            }
        }
    };

    const mouseOverEvent = () => {
        cursorEnlarged.current = true;
        toggleCursorSize();
    };

    const mouseOutEvent = () => {
        cursorEnlarged.current = false;
        toggleCursorSize();
    };

    const mouseOverPlayEvent = () => {
        cursorEnlarged.current = true;
        toggleCursorSize();
        showPlayPause();
    };

    const mouseOutPlayEvent = () => {
        cursorEnlarged.current = false;
        toggleCursorSize();
        hidePlayPause();
    };

    const mouseEnterEvent = () => {
        cursorVisible.current = true;
        toggleCursorVisibility();
    };

    const mouseLeaveEvent = () => {
        cursorVisible.current = false;
        toggleCursorVisibility();
    };

    const mouseMoveEvent = (e: MouseEvent) => {
        cursorVisible.current = true;
        toggleCursorVisibility();
        endX.current = e.pageX;
        endY.current = e.pageY;
        updateCursorPosition();
    };

    const updateCursorPosition = () => {
        if (dot.current) {
            dot.current.style.top = `${endY.current}px`;
            dot.current.style.left = `${endX.current}px`;

        }
    };

    const animateDotOutline = () => {
        _x.current += (endX.current - _x.current) / delay;
        _y.current += (endY.current - _y.current) / delay;
        if (dotOutline.current) {
            dotOutline.current.style.top = `${_y.current}px`;
            dotOutline.current.style.left = `${_x.current}px`;
        }
        requestRef.current = requestAnimationFrame(animateDotOutline);
    };

    const updateCursorPositionOnScroll = () => {
        if (dot.current && dotOutline.current) {
            const scrollY = window.scrollY;
            const deltaY = scrollY - prevScrollY;
            dot.current.style.top = `${parseInt(dot.current.style.top) + deltaY}px`;
            prevScrollY = scrollY;
            endY.current = parseInt(dot.current.style.top);
        }
    };

    return (
        <>
            <div ref={dotOutline} className="cursor-dot-outline"></div>
            <div ref={dot} className="cursor-dot"></div>
        </>
    );
};

export default Cursor;
