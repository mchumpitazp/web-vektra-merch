export default function MainFooter() {
    return (
        <footer id='footer' className="container py-5 mb-5">

            <div id="footer-text" className="mobile-max-width py-4">
                <div className="d-flex justify-content-between pb-5">
                    <div>
                        <h3 className="font-md font-medium">
                            Задайте нам любой вопрос по телефону <br className="d-none d-md-block" /> или напишите письмо
                        </h3>
                        <div className="d-flex gap-2 my-4">
                            <a href="https://instagram.com/vektra.life" target="_blank" rel="noopener noreferrer">
                                <img src="/icons/instagram.svg" alt="icon-instagram" />
                            </a>
                            <a href="https://vk.com/vektrapro" target="_blank" rel="noopener noreferrer">
                                <img src="/icons/vk.svg" alt="icon-vk" />
                            </a>
                            <a href="https://ok.ru/vektrapro" target="_blank" rel="noopener noreferrer">
                                <img src="/icons/ok.svg" alt="icon-ok" />
                            </a>
                            <a href="https://t.me/s/vektra_pro" target="_blank" rel="noopener noreferrer">
                                <img src="/icons/telegram.svg" alt="icon-telegram" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCqd3W29T3otRJPQ04srdXCQ" target="_blank" rel="noopener noreferrer">
                                <img src="/icons/youtube.svg" alt="icon-youtube" />
                            </a>
                            <a href="https://dzen.ru/vektrapro" target="_blank" rel="noopener noreferrer">
                                <img src="/icons/dzen.svg" alt="icon-dzen" />
                            </a>
                        </div>
                        <a className="text-decoration-none text-black font-xs" href="mailto:assist.vektra@gmail.com">
                            assist.vektra@gmail.com
                        </a>
                    </div>
                    <div className="d-none d-md-block">
                        <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_277_454)">
                                <path d="M75 21.6248L73.604 18.6288L39.1568 34.8436L39.0913 0.5L35.8004 0.506334L35.8659 34.8537L1.39472 18.6288L0 21.6248L33.6195 37.4493L0 53.2739L1.39472 56.2698L35.876 40.0399L35.9402 74.5L39.2311 74.4937L39.1631 38.4932L75 21.6248Z" fill="#FF6600" />
                            </g>
                            <defs>
                                <clipPath id="clip0_277_454">
                                    <rect width="75" height="74" fill="white" transform="translate(0 0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-center py-5">
                    <div>
                        <p className="font-xs m-0">
                            8 (937) 668 41 10
                        </p>
                        <p className="font-xs m-0">
                            Елена, HR директор
                        </p>
                    </div>
                    <div className="d-block d-md-none">
                        <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_277_454)">
                                <path d="M75 21.6248L73.604 18.6288L39.1568 34.8436L39.0913 0.5L35.8004 0.506334L35.8659 34.8537L1.39472 18.6288L0 21.6248L33.6195 37.4493L0 53.2739L1.39472 56.2698L35.876 40.0399L35.9402 74.5L39.2311 74.4937L39.1631 38.4932L75 21.6248Z" fill="#FF6600" />
                            </g>
                            <defs>
                                <clipPath id="clip0_277_454">
                                    <rect width="75" height="74" fill="white" transform="translate(0 0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <p className="font-xs m-0">
                        Самара, Академика Павлова, 35, 3 этаж
                    </p>
                    <img
                        className="d-none d-md-block"
                        src="/images/coordinates.png"
                        alt="coordinates"
                        width={200}
                        height={20} />
                </div>
            </div>
        </footer>
    )
}