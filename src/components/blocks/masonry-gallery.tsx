"use client"
import Masonry from "@/components/Masonry";

export const MasonryGallery = () => {
    const items = [
        {
            id: "1",
            img: "/gallery/3.png",
            url: "/gallery/3.png",
            height: 400,
        },
        {
            id: "2",
            img: "/gallery/1.png",
            url: "/gallery/1.png",
            height: 250,
        },
        {
            id: "3",
            img: "/gallery/2.png",
            url: "/gallery/2.png",
            height: 600,
        },
        {
            id: "4",
            img: "/gallery/4.png",
            url: "/gallery/4.png",
            height: 400,
        },
        {
            id: "5",
            img: "/gallery/6.png",
            url: "/gallery/6.png",
            height: 600,
        },
        {
            id: "6",
            img: "/gallery/7.png",
            url: "/gallery/7.png",
            height: 600,
        },
        {
            id: "7",
            img: "/gallery/5.png",
            url: "/gallery/5.png",
            height: 600,
        },
        {
            id: "8",
            img: "/gallery/8.png",
            url: "/gallery/8.png",
            height: 600,
        },
        {
            id: "9",
            img: "/gallery/9.png",
            url: "/gallery/9.png",
            height: 600,
        },
        // ... more items
    ];

    return (
        <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
        />
    )
};