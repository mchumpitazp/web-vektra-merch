export default function HeaderDesktop() {
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
                                <a className="nav-link pe-0" href="/">
                                    каталог
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ps-md-4 ps-lg-5 pe-0 ms-lg-4 ms-xxl-5" href="/">
                                    faq
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ps-md-4 ps-lg-5 pe-0 ms-lg-4 ms-xxl-5" href="/">
                                    личный кабинет
                                </a>
                            </li>
                            <li className="nav-item px-0">
                                <a className="nav-link ps-md-4 ps-lg-5 pe-0 ms-lg-4 ms-xxl-5" href="/">
                                    корзина (0)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}