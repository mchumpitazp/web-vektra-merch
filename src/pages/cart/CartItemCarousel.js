import React from "react";
import SingleCartItem from './SingleCartItem';

export default function CartItemCarousel({ items }) {

    // Carousel functionality
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(getItemsPerPage());

    function getItemsPerPage() {
        if (window.innerWidth >= 1200) return 2; // Extra-large screens
        if (window.innerWidth >= 768) return 1;  // Medium screens
        return 1;  // Default for smaller screens
    }

    // Handle resizing
    React.useEffect(() => {
        const handleResize = () => {
            setItemsPerPage(getItemsPerPage());
        };

        window.addEventListener('resize', handleResize);

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + items.length) % items.length);
    };

    // Compute visible items
    const visibleItems = items.slice(currentIndex, currentIndex + itemsPerPage);

    // Handle wrapping around for full visibility
    const adjustedVisibleItems = [
        ...visibleItems,
        ...items.slice(0, Math.max(0, currentIndex + itemsPerPage - items.length))
    ];


    return (
        <div className='row'>
            <div
                className="col-1 h-100 p-2" //className="carousel-control-prev position-absolute translate-middle-y start-0"
                style={{ cursor: "pointer", marginTop: "150px" }}
                onClick={handlePrev}
            >
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6923 3.25375L5.27621 7.89489C5.18896 7.9697 5.11892 8.0625 5.0709 8.16692C5.02288 8.27134 4.99802 8.38491 4.99802 8.49985C4.99802 8.61478 5.02288 8.72836 5.0709 8.83278C5.11892 8.9372 5.18896 9.03 5.27621 9.10481L10.6923 13.7459C11.2093 14.1889 12.0078 13.8216 12.0078 13.141L12.0078 3.85739C12.0078 3.17672 11.2093 2.8095 10.6923 3.25375Z" fill="#232323" />
                </svg>
                <span className="visually-hidden">Previous</span>
            </div>

            <div className='col-10'>
                <div className="">
                    <div className='row row-cols-md-1 row-cols-lg-2 justify-content-center'>
                        {adjustedVisibleItems.map((item, index) => (
                            <SingleCartItem
                                key={index}
                                item={item} />
                        ))}
                    </div>
                </div>
            </div>

            <div
                className="col-1 h-100 p-2" //className="carousel-control-next position-absolute translate-middle-y end-0"
                style={{ cursor: "pointer", marginTop: "150px" }}
                onClick={handleNext}
            >
                <svg width="17" height="17" viewBox="0 0 17 17" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.30769 13.7462L11.7238 9.10506C11.811 9.03025 11.8811 8.93745 11.9291 8.83303C11.9771 8.72861 12.002 8.61503 12.002 8.5001C12.002 8.38517 11.9771 8.27159 11.9291 8.16717C11.8811 8.06275 11.811 7.96995 11.7238 7.89514L6.30769 3.25401C5.79065 2.81102 4.99215 3.17833 4.99215 3.85897V13.1426C4.99215 13.8233 5.79065 14.1905 6.30769 13.7462Z" fill="#000" />
                </svg>
                <span className="visually-hidden">Next</span>
            </div>
        </div>
    )
}