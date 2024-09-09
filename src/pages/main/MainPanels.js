import Data from '../../data.json'
import { useEffect, useRef, useState } from 'react';

export default function MainPanels() {

    const imgRef = useRef(null);
    const [bgGrayHeight, setBgGrayHeight] = useState('auto');

    useEffect(() => {
        const adjustHeight = () => {
            if (imgRef.current) {
                // Get the current width of the window
                const windowWidth = window.innerWidth;
                setBgGrayHeight(`${imgRef.current.offsetHeight}px`);

                // On larger screens, reset height to auto for Flexbox to handle equal heights
                if (windowWidth >= 768) {  // Assuming 768px as the breakpoint for side-by-side layout
                    setBgGrayHeight('auto');
                } else {
                    // On smaller screens, manually set the height
                    setBgGrayHeight(`${imgRef.current.offsetHeight}px`);
                }
            }
        };

        // Adjust the height initially and when the window is resized
        adjustHeight();
        window.addEventListener('resize', adjustHeight);

        // Clean up the event listener
        return () => {
            window.removeEventListener('resize', adjustHeight);
        };
    }, []);

    const renderPanels = Data["panels"].map((panel, index) => {
        return (
            <div key={index} className="row row-cols-1 row-cols-md-2">
                <div className="col">
                    <p className="panels-title py-3 m-0">
                        {panel.title}
                    </p>
                </div>
                <div className="col">
                    <p className="panels-description py-0 py-md-3 m-0">
                        {panel.description}
                    </p>
                </div>
            </div>
        )
    })

    return (
        <section id="panels" className="container mobile-max-width">

            <div className="d-flex flex-column gap-5 gap-md-4 my-5 py-5">
                {renderPanels}
            </div>

            <div className="row row-cols-1 row-cols-md-2 gap-4 gap-md-0">
                <div className="col pe-lg-4 d-flex">
                    <img
                        ref={imgRef}
                        className="img-fluid"
                        src="/images/panels-bg-orange.png"
                        alt="panels-bg-orange"
                    />
                </div>
                <div className="col ps-lg-4 d-flex">
                    <div className="d-flex flex-column justify-content-center gap-4 gap-xl-5 px-4 py-5 px-md-5 text-white" style={{ backgroundColor: "#232323", height: bgGrayHeight }}>
                        <h2 className="panels-bg-title">
                            КАК И ЗА ЧТО НАЧИСЛЯЮТСЯ ЗЕЛЁНЫЕ ПАНЕЛЬКИ?
                        </h2>
                        <hr className="border-white opacity-100 border-2 w-25 my-0" />
                        <p className="panels-bg-text my-0">
                            Панельки Зеленого цвета начисляются согласно Общим правилам компании и Правилам начисления в зависимости от департамента каждого сотрудника.
                        </p>
                        <div>
                            <button className="d-block d-lg-none btn btn-light rounded-3 px-4 pt-0 pb-1 pt-md-1 pb-md-2">
                                <span className="panels-bg-text">
                                    Посмотреть правила
                                </span>
                            </button>
                            <button className="d-none d-lg-block btn btn-outline-light btn-orange rounded-4 px-5 py-3">
                                <span className="panels-bg-text">
                                    Посмотреть правила
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}