import React from "react";
import ImageCarousel from "./ImageCarousel";

export default function ProductDetail({ title, description, images, price, sizes = null, setShowDetail }) {
    const [size, setSize] = React.useState(sizes ? sizes[0] : null);

    const renderSizes = sizes?.map((s, index) => {
        return (
            <li key={index} onClick={() => setSize(s)}>
                <p className="font-sm px-3 m-0">
                    {s}
                </p>
            </li>
        )
    });

    images = [
        {
            src: "/products/Rectangle 197.png",
            alt: "demo-1"
        },
        {
            src: "/products/Rectangle 198.png",
            alt: "demo-2"
        }
    ];

    const carouselImages = [
        'https://via.placeholder.com/800x400?text=Image+1',
        'https://via.placeholder.com/800x400?text=Image+2',
        'https://via.placeholder.com/800x400?text=Image+3',
        'https://via.placeholder.com/800x400?text=Image+4',
        'https://via.placeholder.com/800x400?text=Image+5',
        'https://via.placeholder.com/800x400?text=Image+6',
        'https://via.placeholder.com/800x400?text=Image+7',
        'https://via.placeholder.com/800x400?text=Image+8',
        'https://via.placeholder.com/800x400?text=Image+9',
        'https://via.placeholder.com/800x400?text=Image+10',
    ];

    const renderImages = images.map((image, index) => {
        return (
            <img
                key={index}
                className="object-fit-contain"
                style={{ backgroundColor: "#F2F2F2" }}
                height={180}
                width={250}
                src={image.src}
                alt={image.alt} />
        )
    })

    return (
        <section className="product-detail mt-4 mt-md-5 mb-5">

            <div className="container mb-3 mb-md-5">
                <div className="d-flex justify-content-start justify-content-md-end">
                    <div
                        className="d-inline-flex justify-content-start align-items-center text-color-gray gap-2 ms-2"
                        onClick={() => setShowDetail(false)}
                        style={{ cursor: "pointer" }}
                    >
                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.646446 3.64645C0.451184 3.84171 0.451184 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659729 4.53553 0.464467C4.34027 0.269204 4.02369 0.269205 3.82843 0.464467L0.646446 3.64645ZM11 3.5L1 3.5L1 4.5L11 4.5L11 3.5Z" fill="#999999" />
                        </svg>
                        <p className="font-xxs font-regular m-0">
                            Все товары
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mobile-width-250 px-0 px-md-auto pb-5">
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col">
                        <div className="d-flex d-md-none flex-column gap-3 my-4">
                            {renderImages}
                        </div>
                        <div className="d-none d-md-block">
                            <ImageCarousel images={carouselImages} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex flex-column">
                            <h2
                                className="order-1 order-md-1 font-lg font-medium mb-3"
                                style={{ letterSpacing: "-0.01em" }}>
                                {title}
                            </h2>
                            <p className="order-2 order-md-3 font-sm font-regular text-uppercase mb-3 mt-md-5 pt-md-5">
                                {price} З.П.
                            </p>
                            <div className="order-3 order-md-4">
                                <p hidden={sizes === null} className="font-sm text-color-gray mb-2">
                                    Размер
                                </p>
                                <div className="d-flex flex-column flex-md-row gap-2 gap-md-4">
                                    <div hidden={sizes === null} className="dropdown">
                                        <div className="dropdown-toggle d-flex justify-content-between align-items-center px-3 rounded-3 border border-black" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="font-sm text-color-gray">
                                                {size}
                                            </span>
                                            <svg width='17' height='17' viewBox='0 0 24 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                <path d='M0.890705 3.36366L10.719 14.833C10.8774 15.0178 11.0739 15.1661 11.2951 15.2678C11.5162 15.3695 11.7567 15.4222 12.0001 15.4222C12.2435 15.4222 12.484 15.3695 12.7051 15.2678C12.9262 15.1661 13.1228 15.0178 13.2812 14.833L23.1095 3.36366C24.0474 2.2689 23.2698 0.577881 21.8284 0.577881H2.16899C0.72758 0.577881 -0.050076 2.2689 0.890705 3.36366Z' fill='#232323' />
                                            </svg>
                                        </div>
                                        <ul className="dropdown-menu border-black rounded-3 overflow-hidden text-color-gray">
                                            {renderSizes}
                                        </ul>
                                    </div>

                                    <button className="btn btn-dark btn-add rounded-3 p-0 mt-1 mt-md-0">
                                        <p className="font-xxs font-regular m-0">
                                            Добавить в корзину
                                        </p>
                                    </button>
                                </div>
                                <div className="d-none d-md-flex justify-content-end mt-5 mt-xl-0">
                                    <div className="d-inline-flex justify-content-start align-items-center text-color-gray gap-2"
                                        onClick={() => setShowDetail(false)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.646446 3.64645C0.451184 3.84171 0.451184 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659729 4.53553 0.464467C4.34027 0.269204 4.02369 0.269205 3.82843 0.464467L0.646446 3.64645ZM11 3.5L1 3.5L1 4.5L11 4.5L11 3.5Z" fill="#999999" />
                                        </svg>
                                        <p className="font-xxs font-regular m-0">
                                            Вернуться назад
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="order-4 order-md-2 mt-5 text-color-gray" style={{ letterSpacing: "-0.01em" }}>
                                <div className="font-xs font-regular d-block d-lg-none" style={{ lineHeight: "15px" }}>
                                    <p>Футболка «Ценности» — это манифест наших идей и ценностей, выраженный через уникальный дизайн. Вдохновленная изометрической геометрией и абстрактной формой буквы V, она становится символом нашей компании — смелой, инновационной и всегда стремящейся к новым высотам. Оранжевый и белый цвета символизируют нашу яркость и чёткость в достижении целей. Носите эту футболку с гордостью, ведь она не только украшение вашего стиля, но и выражение вашей принадлежности к команде, которая движет мир вперёд.</p>
                                    <p>Материал: 100% хлопок</p>
                                </div>
                                <div className="font-lg font-regular d-none d-lg-block" style={{ lineHeight: "25px" }}>
                                    <p>Футболка «Ценности» — это манифест наших идей и ценностей, выраженный через уникальный дизайн. Вдохновленная изометрической геометрией и абстрактной формой буквы V, она становится символом нашей компании — смелой, инновационной и всегда стремящейся к новым высотам. Оранжевый и белый цвета символизируют нашу яркость и чёткость в достижении целей. Носите эту футболку с гордостью, ведь она не только украшение вашего стиля, но и выражение вашей принадлежности к команде, которая движет мир вперёд.</p>
                                    <p>Материал: 100% хлопок</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}