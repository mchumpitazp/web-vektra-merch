export default function HeaderBack() {
    return (
        <header className="container header-back py-2 py-md-4">
            <nav className="navbar h-100">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src="/images/logo.svg" alt="logo" width="150" height="57" />
                    </a>
                    <a href="/" className="header-back-btn text-decoration-none" >
                        <span className='font-xs font-regular text-uppercase text-black'>
                            назад
                        </span>
                    </a>
                </div>
            </nav>
        </header>
    )
}