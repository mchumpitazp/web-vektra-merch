export default function MainHowItWorks() {
    return (
        <section id="how-it-works" className="container mt-5 py-0 pt-md-5">
            <h2 className="font-xl font-medium text-uppercase mb-3 mb-md-4">
                Как это работает?
            </h2>

            <div className="row gap-2 gap-md-0">
                <div className="col-12 col-md-6">
                    <div className="row">
                        <div className="col-9 col-md-6">
                            <p className="font-xs font-bold text-color-orange">
                                У каждого подарка своя стоимость, которая указана под ним.
                            </p>
                        </div>
                        <div className="col-9 col-md-6">
                            <p className="font-xs font-regular">
                                Эта цифра — наша внутренняя валюта Зелёные панельки (З.П.), которые необходимо накопить, чтобы забрать желанный приз
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="row">
                        <div className="col-0 col-md-2 col-lg-3"></div>
                        <div className="col-3 col-md-3 col-lg-2">
                            <svg width="75" height="74" viewBox="0 0 75 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M75 21.1248L73.604 18.1288L39.1568 34.3436L39.0913 0L35.8004 0.00633388L35.8659 34.3537L1.39472 18.1288L0 21.1248L33.6195 36.9493L0 52.7739L1.39472 55.7698L35.876 39.5399L35.9402 74L39.2311 73.9937L39.1631 37.9932L75 21.1248Z" fill="#FF6600" />
                            </svg>
                        </div>
                        <div className="col-9 col-md-7 col-lg-7">
                            <p className="font-md font-medium">
                                Мы придумали магазин подарков для нашей команды, здесь собраны различные призы и не только:
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}