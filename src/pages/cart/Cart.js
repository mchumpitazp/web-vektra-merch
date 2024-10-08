import React from 'react';
import Data from '../../data.json'
import HeaderBack from "../../components/HeaderBack";
import SingleCartItem from './SingleCartItem';
import CartItemCarousel from './CartItemCarousel';

export default function Cart() {
    let total = 0;

    const renderCartItems = Data["cart"].map((item, index) => {
        total = total + item.amount;
        return (
            <SingleCartItem key={index} item={item} />
        )
    });

    return (
        <section id="cart" className='pb-5 mb-lg-5'>
            <HeaderBack />

            <div id="cart-container" className="container mobile-max-width py-5">

                <div className='d-flex justify-content-between align-items-end mb-5 mobile-width-250 mx-auto'>
                    <h2>
                        <svg id="cart-title" width="229" height="37" viewBox="0 0 229 37" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.61719 23.6191V37H0.523438V0.4375H6.61719V13.8184L17.1543 0.4375H24.8984L10.502 18.7188L24.8984 37H17.1543L6.61719 23.6191ZM39.6128 37C34.5685 37 30.2606 35.2142 26.689 31.6426C23.1174 28.071 21.3316 23.763 21.3316 18.7188C21.3316 13.6745 23.1174 9.36654 26.689 5.79492C30.2606 2.22331 34.5685 0.4375 39.6128 0.4375C44.6571 0.4375 48.965 2.22331 52.5366 5.79492C56.1083 9.36654 57.8941 13.6745 57.8941 18.7188C57.8941 23.763 56.1083 28.071 52.5366 31.6426C48.965 35.2142 44.6571 37 39.6128 37ZM39.6128 30.9062C42.9813 30.9062 45.8504 29.7214 48.2202 27.3516C50.607 24.9648 51.8003 22.0872 51.8003 18.7188C51.8003 15.3503 50.607 12.4811 48.2202 10.1113C45.8504 7.72461 42.9813 6.53125 39.6128 6.53125C36.2443 6.53125 33.3667 7.72461 30.98 10.1113C28.6102 12.4811 27.4253 15.3503 27.4253 18.7188C27.4253 22.0872 28.6102 24.9648 30.98 27.3516C33.3667 29.7214 36.2443 30.9062 39.6128 30.9062ZM74.1319 0.4375C77.0772 0.4375 79.5909 1.47852 81.6729 3.56055C83.7549 5.64258 84.7959 8.15625 84.7959 11.1016V14.1484C84.7959 17.0938 83.7549 19.6074 81.6729 21.6895C79.5909 23.7715 77.0772 24.8125 74.1319 24.8125H66.5147V37H60.4209V0.4375H74.1319ZM78.7022 11.1016C78.7022 9.83203 78.2536 8.75716 77.3565 7.87695C76.4763 6.97982 75.4014 6.53125 74.1319 6.53125H66.5147V18.7188H74.1319C75.4014 18.7188 76.4763 18.2786 77.3565 17.3984C78.2536 16.5013 78.7022 15.418 78.7022 14.1484V11.1016ZM97.9869 37C95.0416 37 92.5279 35.959 90.4459 33.877C88.3638 31.7949 87.3228 29.2812 87.3228 26.3359H93.4166C93.4166 27.6055 93.8567 28.6888 94.7369 29.5859C95.634 30.4661 96.7173 30.9062 97.9869 30.9062H101.034C102.303 30.9062 103.378 30.4661 104.258 29.5859C105.155 28.6888 105.604 27.6055 105.604 26.3359C105.604 25.0664 105.155 23.9915 104.258 23.1113C103.378 22.2142 102.303 21.7656 101.034 21.7656H93.4166V15.6719H97.9869C99.2564 15.6719 100.331 15.2318 101.211 14.3516C102.109 13.4544 102.557 12.3711 102.557 11.1016C102.557 9.83203 102.109 8.75716 101.211 7.87695C100.331 6.97982 99.2564 6.53125 97.9869 6.53125C96.7173 6.53125 95.634 6.97982 94.7369 7.87695C93.8567 8.75716 93.4166 9.83203 93.4166 11.1016H87.3228C87.3228 8.15625 88.3638 5.64258 90.4459 3.56055C92.5279 1.47852 95.0416 0.4375 97.9869 0.4375C100.932 0.4375 103.446 1.47852 105.528 3.56055C107.61 5.64258 108.651 8.15625 108.651 11.1016C108.651 13.4375 107.999 15.4941 106.696 17.2715C107.356 17.6947 107.982 18.2025 108.575 18.7949C110.657 20.877 111.698 23.3906 111.698 26.3359C111.698 29.2812 110.657 31.7949 108.575 33.877C106.493 35.959 103.979 37 101.034 37H97.9869ZM150.787 0.4375V37H144.693V8.15625L121.969 37H114.225V0.4375H120.318V29.2812L143.043 0.4375H150.787ZM159.408 21.7656V37H153.314V0.4375H159.408V15.6719H183.783V0.4375H189.877V37H183.783V21.7656H159.408ZM192.403 18.7188C192.403 13.6745 194.189 9.36654 197.761 5.79492C201.332 2.22331 205.64 0.4375 210.685 0.4375C215.729 0.4375 220.037 2.22331 223.609 5.79492C227.18 9.36654 228.966 13.6745 228.966 18.7188V37H222.872V30.9062H198.497V37H192.403V18.7188ZM222.872 24.8125V18.7188C222.872 15.3503 221.679 12.4811 219.292 10.1113C216.922 7.72461 214.053 6.53125 210.685 6.53125C207.316 6.53125 204.439 7.72461 202.052 10.1113C199.682 12.4811 198.497 15.3503 198.497 18.7188V24.8125H222.872Z" />
                        </svg>
                    </h2>
                    <a href="/" className="d-none d-md-block text-decoration-none">
                        <svg width="22" height="8" viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.646446 3.64645C0.451185 3.84171 0.451185 4.15829 0.646446 4.35356L3.82843 7.53554C4.02369 7.7308 4.34027 7.7308 4.53553 7.53554C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976312 4.7308 0.65973 4.53553 0.464468C4.34027 0.269205 4.02369 0.269205 3.82843 0.464468L0.646446 3.64645ZM22 3.5L1 3.5L1 4.5L22 4.5L22 3.5Z" fill="#232323" />
                        </svg>
                        <span className='font-xs font-regular text-uppercase text-black ms-2'>
                            назад
                        </span>
                    </a>
                </div>

                <div className='row row-cols-1 row-cols-md-2'>
                    <div className='col-12 d-block d-md-none'>
                        <div className='row row-gap-5 mobile-width-250 mx-auto'>
                            {renderCartItems}
                        </div>
                    </div>

                    <div className='col-6 d-none d-md-block'>
                        <CartItemCarousel items={Data["cart"]} />
                    </div>

                    <div className='col-12 col-md-5 offset-md-1 col-lg-4 offset-lg-2 col-xl-3 offset-xxl-3 pb-5'>

                        <div id='cart-total-lines' className='d-block d-md-none' style={{ marginTop: '100px', marginBottom: '250px' }}>
                            <hr id='cart-total-line-1' style={{ marginTop: '0px' }} />
                            <hr id='cart-total-line-2' style={{ marginTop: '30px' }} />
                            <hr id='cart-total-line-3' style={{ marginTop: '60px' }} />
                        </div>

                        <div id='cart-total' className='d-flex flex-column justify-content-between h-100'>
                            <p className='d-none d-md-block font-lg font-medium m-0'>
                                Для того, чтобы осуществить заказ, необходимо войти в личный кабинет
                            </p>
                            <div>
                                <p className='font-lg font-medium mb-0'>
                                    Итого:
                                </p>
                                <div className='d-flex justify-content-between align-items-end mb-5'>
                                    <p className='font-xs font-medium mb-1'>
                                        {Data["cart"].length} товара
                                    </p>
                                    <p className='font-lg font-medium mb-0'>
                                        {total} З.П.
                                    </p>
                                </div>
                                <button className='d-block d-md-none btn btn-orange btn-outline-light px-4 py-3 rounded-4'>
                                    <span className='font-md font-regular'>
                                        Перейти к оформлению
                                    </span>
                                </button>
                                <button className='d-none d-md-block btn btn-orange btn-outline-dark w-100 py-2 py-xl-3 rounded-4'>
                                    <span className='font-md font-regular'>
                                        Перейти к оформлению
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}