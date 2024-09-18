export default function HeaderDesktop() {

    const scrollToSection = (section) => {
        const element = document.getElementById(section);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header id="header-desktop" className="d-none d-md-block my-4 my-md-0 mt-md-5 pt-md-4">
            <nav className="navbar navbar-expand">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src="/images/logo.svg" alt="logo" width="150" height="57" />
                    </a>

                    <div className="collapse navbar-collapse justify-content-end" id="navbar-collapsed">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <span
                                    className="nav-link px-0 me-4 me-xxl-5"
                                    onClick={() => scrollToSection("products")}
                                    style={{ cursor: "pointer" }}>
                                    каталог
                                </span>
                            </li>
                            <li className="nav-item">
                                <span
                                    className="nav-link px-0 mx-4 mx-xxl-5"
                                    onClick={() => scrollToSection("faq")}
                                    style={{ cursor: "pointer" }}
                                >
                                    faq
                                </span>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link px-0 ms-4 ms-xxl-5"
                                    href="/login"
                                >
                                    личный кабинет
                                </a>
                            </li>
                            <li className="nav-item px-0">
                                <a
                                    className="nav-link px-0 ms-4 ms-xxl-5"
                                    href="/cart"
                                >
                                    корзина
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}