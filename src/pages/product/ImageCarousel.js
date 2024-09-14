import React, { useState } from 'react';

export default function ImageCarousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Helper to get the previous and next 2 images
    const getThumbnails = () => {
        const prev1 = (currentIndex - 2 + images.length) % images.length;
        const prev2 = (currentIndex - 1 + images.length) % images.length;
        const next1 = (currentIndex + 1) % images.length;
        const next2 = (currentIndex + 2) % images.length;
        return [images[prev1], images[prev2], images[next1], images[next2]];
    };

    const thumbnails = getThumbnails();

    return (
        <div className="container">

            {/* Main Image Container*/}
            <div className="position-relative">

                {/* Main Image */}
                <div className="row">
                    <div className="col-12">
                        <img
                            src={images[currentIndex]}
                            alt="Main"
                            className="w-100 object-fit-contain"
                            style={{ backgroundColor: "#F2F2F2" }}
                            height={560}
                        />
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    className="carousel-control-prev position-absolute top-50 translate-middle-y start-0"
                    onClick={prevImage}
                >
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6923 3.25375L5.27621 7.89489C5.18896 7.9697 5.11892 8.0625 5.0709 8.16692C5.02288 8.27134 4.99802 8.38491 4.99802 8.49985C4.99802 8.61478 5.02288 8.72836 5.0709 8.83278C5.11892 8.9372 5.18896 9.03 5.27621 9.10481L10.6923 13.7459C11.2093 14.1889 12.0078 13.8216 12.0078 13.141L12.0078 3.85739C12.0078 3.17672 11.2093 2.8095 10.6923 3.25375Z" fill="#232323" />
                    </svg>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button
                    className="carousel-control-next position-absolute top-50 translate-middle-y end-0"
                    onClick={nextImage}
                >
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="black" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.30769 13.7462L11.7238 9.10506C11.811 9.03025 11.8811 8.93745 11.9291 8.83303C11.9771 8.72861 12.002 8.61503 12.002 8.5001C12.002 8.38517 11.9771 8.27159 11.9291 8.16717C11.8811 8.06275 11.811 7.96995 11.7238 7.89514L6.30769 3.25401C5.79065 2.81102 4.99215 3.17833 4.99215 3.85897V13.1426C4.99215 13.8233 5.79065 14.1905 6.30769 13.7462Z" fill="#000" />
                    </svg>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Thumbnail Images */}
            <div className="row row-cols-4 mt-3">
                <div className="col">
                    <img
                        src={thumbnails[0]}
                        alt="Prev 2"
                        className="w-100 object-fit-contain"
                        style={{ backgroundColor: "#F2F2F2" }}
                        height={125}
                    />
                </div>
                <div className="col">
                    <img
                        src={thumbnails[1]}
                        alt="Prev 1"
                        className="w-100 object-fit-contain"
                        style={{ backgroundColor: "#F2F2F2" }}
                        height={125}
                    />
                </div>
                <div className="col">
                    <img
                        src={thumbnails[2]}
                        alt="Next 1"
                        className="w-100 object-fit-contain"
                        style={{ backgroundColor: "#F2F2F2" }}
                        height={125}
                    />
                </div>
                <div className="col">
                    <img
                        src={thumbnails[3]}
                        alt="Next 2"
                        className="w-100 object-fit-contain"
                        style={{ backgroundColor: "#F2F2F2" }}
                        height={125}
                    />
                </div>
            </div>
        </div>
    );
};