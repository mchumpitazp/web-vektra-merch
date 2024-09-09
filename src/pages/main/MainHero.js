export default function MainHero() {
    return (
        <section id='hero' className="container mt-md-5">
            <img id="hero-man" src="/images/hero-man.png" alt="hero-man" />
            <img id="hero-woman" src="/images/hero-woman.png" alt="hero-woman" />

            <div id="hero-text" className="h-100 d-flex flex-column justify-content-start justify-content-md-end pb-5">
                <p className="d-none d-md-block font-md font-medium m-0">
                    SUMMER 24
                </p>
                <p className="d-block d-md-none font-xxs font-medium m-0">
                    SUMMER 24
                </p>
                <h1 className="font-xl font-medium w-75 m-0">
                    МАГАЗИН ДЛЯ СОТРУДНИКОВ «ВЕКТРА»
                </h1>
                <p className="d-block d-md-none align-self-end font-xxs opacity-75 lh-1 pe-5">
                    Создан для тех, кто не
                    <br />
                    боится быть особенным.
                </p>
            </div>
        </section>
    )
}