import Data from '../../data.json'

export default function ProductFilter({ categoryFilter, setCategoryFilter }) {

    const changeCategory = (e, filter) => {
        setCategoryFilter(filter)
        document.querySelectorAll('#products .product-category').forEach((item) => {
            item.classList.remove('active');
        });
        e.target.classList.add('active');
    }

    const renderCategories = Data["product-category"].map((category, index) => {
        const active = categoryFilter === category.filter ? 'active' : '';

        return (
            <span
                key={index}
                className={`product-category ${active}`}
                onClick={(e) => changeCategory(e, category.filter)}
                role="button">
                {category.title}
            </span>
        );
    });

    const renderCategoriesMobile = Data["product-category"].map((category, index) => {
        const active = categoryFilter === category.filter ? 'active' : '';

        return (
            <li key={index}>
                <span
                    className={`product-category-mobile dropdown-item px-1 py-2 ${active}`}
                    onClick={(e) => changeCategory(e, category.filter)} role="button">
                    {category.title}
                </span>
            </li>
        );
    });

    return (
        <div className="mb-5">
            <div id="product-filter-desktop" className="d-none d-md-flex justify-content-between flex-wrap row-gap-2 column-gap-4">
                {renderCategories}
            </div>

            <div id="product-filter-mobile" className="d-block d-md-none dropdown pb-2">
                <div className="dropdown-toggle d-flex justify-content-between align-items-center px-1 pb-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="product-category-mobile">
                        {Data["product-category"].find(c => c.filter === categoryFilter).title}
                    </span>
                    <svg width='24' height='16' viewBox='0 0 24 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M0.890705 3.36366L10.719 14.833C10.8774 15.0178 11.0739 15.1661 11.2951 15.2678C11.5162 15.3695 11.7567 15.4222 12.0001 15.4222C12.2435 15.4222 12.484 15.3695 12.7051 15.2678C12.9262 15.1661 13.1228 15.0178 13.2812 14.833L23.1095 3.36366C24.0474 2.2689 23.2698 0.577881 21.8284 0.577881H2.16899C0.72758 0.577881 -0.050076 2.2689 0.890705 3.36366Z' fill='#232323' />
                    </svg>
                </div>
                <ul className="dropdown-menu w-100 border-0">
                    {renderCategoriesMobile}
                </ul>
            </div>
        </div>
    )
}