import React from "react";

export default function SingleCartItem({ item }) {
    const [size, setSize] = React.useState(item.size ? item.size : null);
    const [quantity, setQuantity] = React.useState(1);

    const renderSizes = item.sizes?.map((s, index) => {
        return (
            <li key={index} onClick={() => setSize(s)}>
                <p className="font-sm px-3 m-0">
                    {s}
                </p>
            </li>
        )
    });

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    return (
        <article className="cart-item col px-0 px-md-3">
            <img
                src={item.src}
                alt={item.src}
                className='d-block d-md-none object-fit-contain'
                width={250}
                height={340}
                style={{ backgroundColor: "#F2F2F2" }}
            />

            <img
                src={item.src}
                alt={item.src}
                className='d-none d-md-block img-fluid'
                style={{ backgroundColor: "#F2F2F2" }}
            />

            <h3
                className="cart-item-title font-lg font-medium my-3"
                style={{ letterSpacing: "-0.01em" }}>
                {item.title}
            </h3>

            <p className="cart-item-price font-sm font-regular text-uppercase mb-3">
                {item.amount} З.П.
            </p>

            <div className="d-none d-md-block">
                <p hidden={!item.size} className="font-sm text-color-gray mb-3">
                    Размер {item.size}
                </p>
            </div>

            <div hidden={!item.size || !item.sizes}>
                <div className="d-block d-md-none mb-3">
                    <p className="font-sm text-color-gray mb-2">
                        Размер
                    </p>
                    <div className="dropdown">
                        <div className="dropdown-toggle d-flex justify-content-between align-items-center px-3 rounded-3 border border-black" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="font-sm text-color-gray">
                                {size}
                            </span>
                            <svg width='17' height='17' viewBox='0 0 24 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M0.890705 3.36366L10.719 14.833C10.8774 15.0178 11.0739 15.1661 11.2951 15.2678C11.5162 15.3695 11.7567 15.4222 12.0001 15.4222C12.2435 15.4222 12.484 15.3695 12.7051 15.2678C12.9262 15.1661 13.1228 15.0178 13.2812 14.833L23.1095 3.36366C24.0474 2.2689 23.2698 0.577881 21.8284 0.577881H2.16899C0.72758 0.577881 -0.050076 2.2689 0.890705 3.36366Z' fill='#232323' />
                            </svg>
                        </div>
                        <ul className="dropdown-menu border-black rounded-3 overflow-hidden text-color-gray">
                            {renderSizes}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="cart-item-quantity">
                <div className="input-group w-100 border border-1 border-black rounded-3">
                    <button
                        className="btn text-color-gray border-none rounded-start-3 p-0"
                        type="button"
                        onClick={handleDecrease}
                    >
                        -
                    </button>
                    <input
                        type="text"
                        className="form-control text-center border-0 p-0"
                        value={quantity}
                        readOnly
                    />
                    <button
                        className="btn text-color-gray border-none rounded-end-3 p-0"
                        type="button"
                        onClick={handleIncrease}
                    >
                        +
                    </button>
                </div>
            </div>
        </article>
    )
}