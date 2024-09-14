import { useState } from "react";
import Data from '../../data.json'
import SingleProduct from "./SingleProduct";
import ProductFilter from "./ProductFilter";

export default function MainProducts() {
    const [showAll, setShowAll] = useState(false);
    const [categoryFilter, setCategoryFilter] = useState('all');

    const filteredProducts = Data["product"].filter(product => categoryFilter === 'all' || product.category === categoryFilter);

    const renderProducts = filteredProducts.map((product, index) => {
        return (
            <SingleProduct
                key={index}
                src={product.src}
                title={product.title}
                subtitle={product.subtitle}
                amount={product.amount}
                amountExtra={product.amount_extra} />
        );
    });

    const limitedProducts = renderProducts.slice(0, 4);

    return (
        <section id="products" className="container my-5">

            <ProductFilter
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter} />

            {/* Render on mobile with initially 4 products */}
            <div className="d-block d-lg-none">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                    {showAll ? renderProducts : limitedProducts}
                </div>
                {!showAll && filteredProducts.length > 4 && (
                    <div className="text-center">
                        <span
                            className="font-sm font-regular text-decoration-underline"
                            onClick={() => setShowAll(true)}
                            style={{ cursor: "pointer" }}
                        >
                            Увидеть больше
                        </span>
                    </div>
                )}
            </div>

            {/* Render on tables and desktop with all products */}
            <div className="d-none d-lg-block">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                    {renderProducts}
                </div>
            </div>

        </section>
    )
}