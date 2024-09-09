import { useState } from "react";
import Data from '../../data.json'
import SingleProduct from "./SingleProduct";
import ProductFilter from "./ProductFilter";

export default function MainProducts() {
    const [categoryFilter, setCategoryFilter] = useState('all');

    const renderProducts = Data["product"]
        .filter(product => categoryFilter === 'all' || product.category === categoryFilter)
        .map((product, index) => {
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

    return (
        <section id="products" className="container my-5 py-5">

            <ProductFilter
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter} />

            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                {renderProducts}
            </div>

        </section>
    )
}