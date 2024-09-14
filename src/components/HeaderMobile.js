import { useState, useEffect, useRef } from 'react';

export default function HeaderMobile() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const btnBackRef = useRef(null);

    const scrollToSection = (section) => {
        setIsMenuOpen(false);
        setTimeout(() => {
            const element = document.getElementById(section);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            const scrollTimeout = setTimeout(() => {
                document.body.style.position = 'fixed';
                document.body.style.top = '0';
                document.body.style.left = '0';
                document.body.style.right = '0';
                document.body.style.bottom = '0';
                document.body.style.overflow = 'hidden';
            }, 200); // wait in case is scrolling to top
            return () => clearTimeout(scrollTimeout);
        } else {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.bottom = '';
            document.body.style.overflow = '';
        }
    }, [isMenuOpen]);

    return (
        <header id="header-mobile" className="d-block d-md-none m-auto">
            <nav className="navbar navbar-expand-md h-100">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src="/images/logo.svg" alt="logo" width="150" height="57" />
                    </a>

                    <button
                        className="navbar-toggler border-0"
                        type="button"
                        onClick={toggleMenu}
                        aria-controls="navbar-collapsed"
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation"
                    >
                        {isMenuOpen ? (
                            <span ref={btnBackRef} className='font-xs font-regular text-uppercase'>
                                назад
                            </span>
                        ) : (
                            <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23 15.3333H11.5V12.7778H23V15.3333ZM23 8.94444H0V6.38889H23V8.94444ZM23 2.55556H0V0H23V2.55556Z" fill="#232323" />
                            </svg>
                        )}
                    </button>

                    <div
                        className={`navbar-collapse ${isMenuOpen ? 'show full-screen-menu' : 'collapse'}`}
                        id="navbar-collapsed"
                        style={{ display: isMenuOpen ? 'flex' : 'none' }}  // Conditionally set display property
                    >
                        <div className='h-100'>
                            <ul className="navbar-nav mt-4">
                                <li className="nav-item">
                                    <span
                                        className="nav-link"
                                        onClick={() => scrollToSection("products")}
                                        style={{ cursor: "pointer" }}
                                    >
                                        каталог
                                    </span>
                                </li>
                                <li><hr /></li>
                                <li className="nav-item">
                                    <span
                                        className="nav-link"
                                        onClick={() => scrollToSection("faq")}
                                        style={{ cursor: "pointer" }}
                                    >
                                        faq
                                    </span>
                                </li>
                                <li><hr /></li>
                                <li className="nav-item">
                                    <span
                                        className="nav-link"
                                        onClick={() => scrollToSection("")}
                                        style={{ cursor: "pointer" }}
                                    >
                                        личный кабинет
                                    </span>
                                </li>
                                <li><hr /></li>
                                <li className="nav-item px-0">
                                    <a
                                        className="nav-link"
                                        href='/cart'
                                    >
                                        корзина
                                    </a>
                                </li>
                            </ul>
                            <div className='mt-5'>
                                <svg className='mt-4' viewBox="0 0 430 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2197.28 0L2137.33 59.8997H2081.91L2021.96 0H1777.52L1717.57 59.8997H1662.15L1599.19 0H1356.36L1296.41 59.8997H1241.07L1181.11 0H936.675L876.719 59.8997H821.376L761.42 0H516.985L456.96 59.8997H401.546L338.586 0H95.7583L35.8025 59.8997H-19.541L-79.4969 0H-323.932L-383.887 59.8997H-439.231L-499.187 0H-743.621L-803.577 59.8997H-859.061L-922.021 0H-1164.78L-1224.73 59.8997H-1280.15L-1340.1 0H-1584.54L-1644.49 59.8997H-1699.84L-1759.79 0H-2004.23L-2064.18 59.8997H-2095V71H-2059.57L-1999.62 11.1003H-1764.41L-1704.45 71H-1639.88L-1579.93 11.1003H-1344.65L-1284.69 71H-1220.19L-1160.24 11.1003H-926.423L-863.463 71H-798.965L-739.009 11.1003H-503.799L-443.843 71H-379.275L-319.32 11.1003H-84.1089L-24.1531 71H40.4146L100.37 11.1003H334.183L397.144 71H461.572L521.527 11.1003H756.808L816.764 71H881.331L941.287 11.1003H1176.5L1236.45 71H1301.02L1360.98 11.1003H1594.72L1657.68 71H1722.18L1782.13 11.1003H2017.41L2077.37 71H2141.94L2201.89 11.1003H2342V0H2197.28Z" fill="#F2F2F2" />
                                </svg>
                                <svg className='mt-4' viewBox="0 0 430 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2342 0V11.0413H2284.35L2224.39 71H1979.96L1920 11.0413H1864.66L1804.7 71H1560.27L1500.31 11.0413H1444.9L1384.95 71H1140.51L1080.55 11.0413H1025.21L965.255 71H720.821L660.865 11.0413H605.521L545.566 71H301.131L241.175 11.0413H185.762L125.806 71H-118.629L-178.584 11.0413H-233.928L-293.884 71H-538.318L-598.274 11.0413H-653.618L-713.574 71H-958.008L-1017.96 11.0413H-1073.38L-1133.33 71H-1377.77L-1437.72 11.0413H-1493.07L-1553.02 71H-1797.46L-1857.41 11.0413H-1912.83L-1972.78 71H-2095V59.9587H-1977.32L-1917.37 0H-1852.8L-1792.85 59.9587H-1557.63L-1497.68 0H-1433.11L-1373.16 59.9587H-1137.95L-1077.92 0H-1013.42L-953.466 59.9587H-718.186L-658.23 0H-593.662L-533.707 59.9587H-298.496L-238.54 0H-173.972L-114.017 59.9587H121.194L181.15 0H245.717L305.673 59.9587H540.954L600.909 0H665.477L725.433 59.9587H960.643L1020.6 0H1085.17L1145.12 59.9587H1380.4L1440.36 0H1504.93L1564.88 59.9587H1800.09L1860.05 0H1924.62L1984.57 59.9587H2219.78L2279.74 0H2342Z" fill="#F2F2F2" />
                                </svg>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}