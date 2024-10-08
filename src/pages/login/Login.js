import Button from "../../components/Button";
import HeaderBack from "../../components/HeaderBack";

export default function Login() {
    return (
        <section id="login">
            <HeaderBack />

            <div id="login-container" className="row row-cols-1 row-cols-lg-2 m-0">
                <div id="login-message" className="col p-0">
                    <div className="w-100 position-relative d-flex flex-column justify-content-center align-items-center">
                        <div id="message-text-container" className="p-xxl-5">
                            <div id="message-text" className="ps-1">
                                <p className="font-medium m-0 mb-2">
                                    Привет! 👋🏻
                                </p>
                                <p className="font-medium m-0">
                                    Войди в свой ЛК, узнай, сколько у тебя панелек. Выбирай из каталога желаемое и заказывай! 🧡
                                </p>
                            </div>
                        </div>
                        <svg id="message-box" className="p-xxl-5" viewBox="0 0 517 372" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_282_286" fill="white">
                                <path fillRule="evenodd" clipRule="evenodd" d="M43.5919 0C19.5168 0 0 19.5168 0 43.592V285.091C0 309.166 19.5168 328.683 43.5919 328.683H56.6692L56.6693 371.403L105.998 328.683H473.408C497.483 328.683 517 309.166 517 285.091V43.5919C517 19.5168 497.483 0 473.408 0H43.5919Z" />
                            </mask>
                            <path fillRule="evenodd" clipRule="evenodd" d="M43.5919 0C19.5168 0 0 19.5168 0 43.592V285.091C0 309.166 19.5168 328.683 43.5919 328.683H56.6692L56.6693 371.403L105.998 328.683H473.408C497.483 328.683 517 309.166 517 285.091V43.5919C517 19.5168 497.483 0 473.408 0H43.5919Z" fill="white" />
                            <path d="M56.6692 328.683H57.541V327.811H56.6692V328.683ZM56.6693 371.403H55.7975L55.7975 373.312L57.24 372.062L56.6693 371.403ZM105.998 328.683V327.811H105.673L105.427 328.024L105.998 328.683ZM0.871838 43.592C0.871838 19.9983 19.9983 0.871838 43.5919 0.871838V-0.871838C19.0353 -0.871838 -0.871838 19.0353 -0.871838 43.592H0.871838ZM0.871838 285.091V43.592H-0.871838V285.091H0.871838ZM43.5919 327.811C19.9983 327.811 0.871838 308.685 0.871838 285.091H-0.871838C-0.871838 309.648 19.0353 329.555 43.5919 329.555V327.811ZM56.6692 327.811H43.5919V329.555H56.6692V327.811ZM57.5411 371.403L57.541 328.683H55.7974L55.7975 371.403H57.5411ZM105.427 328.024L56.0985 370.744L57.24 372.062L106.569 329.342L105.427 328.024ZM473.408 327.811H105.998V329.555H473.408V327.811ZM516.128 285.091C516.128 308.685 497.002 327.811 473.408 327.811V329.555C497.965 329.555 517.872 309.648 517.872 285.091H516.128ZM516.128 43.5919V285.091H517.872V43.5919H516.128ZM473.408 0.871838C497.002 0.871838 516.128 19.9983 516.128 43.5919H517.872C517.872 19.0353 497.965 -0.871838 473.408 -0.871838V0.871838ZM43.5919 0.871838H473.408V-0.871838H43.5919V0.871838Z" fill="#232323" mask="url(#path-1-inside-1_282_286)" />
                        </svg>
                        <div id="login-message-lines">
                            <hr id="login-message-line-1" />
                            <hr id="login-message-line-2" />
                            <hr id="login-message-line-3" />
                        </div>
                    </div>
                </div>

                <div id="login-form" className="col p-0">
                    <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                        <div id="login-form-container">
                            <svg id="login-form-header" viewBox="0 0 248 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.8984 45H18.8047V14.5312H11.1875V34.3359C11.1875 37.2812 10.1465 39.7949 8.06445 41.877C5.98242 43.959 3.46875 45 0.523438 45V38.9062C1.79297 38.9062 2.86784 38.4661 3.74805 37.5859C4.64518 36.6888 5.09375 35.6055 5.09375 34.3359V8.4375H24.8984V45ZM63.9878 8.4375V45H57.8941V16.1562L35.1695 45H27.4253V8.4375H33.5191V37.2812L56.2437 8.4375H63.9878ZM84.7959 26.7188V8.4375H90.8897V45H84.7959V32.8125C79.7517 32.8125 75.4437 31.0267 71.8721 27.4551C68.3005 23.8835 66.5147 19.5755 66.5147 14.5312V8.4375H72.6084V14.5312C72.6084 17.8997 73.7933 20.7773 76.1631 23.1641C78.5498 25.5339 81.4274 26.7188 84.7959 26.7188ZM99.5103 29.7656V45H93.4166V8.4375H99.5103V23.6719H123.885V8.4375H129.979V45H123.885V29.7656H99.5103ZM138.6 38.9062C139.869 38.9062 140.944 38.4661 141.824 37.5859C142.721 36.6888 143.17 35.6055 143.17 34.3359V31.2891C143.17 30.0195 142.721 28.9447 141.824 28.0645C140.944 27.1673 139.869 26.7188 138.6 26.7188V38.9062ZM156.881 45H150.787V8.4375H156.881V45ZM149.264 34.3359C149.264 37.2812 148.223 39.7949 146.141 41.877C144.059 43.959 141.545 45 138.6 45H132.506V8.4375H138.6V20.625C141.545 20.625 144.059 21.666 146.141 23.748C148.223 25.8301 149.264 28.3438 149.264 31.2891V34.3359ZM195.97 8.4375V45H189.877V16.1562L167.152 45H159.408V8.4375H165.502V37.2812L188.226 8.4375H195.97ZM176.927 6.91406C175.455 6.91406 174.194 6.39779 173.144 5.36523C172.112 4.31576 171.595 3.05469 171.595 1.58203V0.820312H174.642V1.58203C174.642 2.22526 174.862 2.76693 175.302 3.20703C175.759 3.64714 176.301 3.86719 176.927 3.86719H178.451C179.077 3.86719 179.61 3.64714 180.05 3.20703C180.507 2.76693 180.736 2.22526 180.736 1.58203V0.820312H183.783V1.58203C183.783 3.05469 183.258 4.31576 182.209 5.36523C181.176 6.39779 179.923 6.91406 178.451 6.91406H176.927ZM6.61719 93.6191V107H0.523438V70.4375H6.61719V83.8184L17.1543 70.4375H24.8984L10.502 88.7188L24.8984 107H17.1543L6.61719 93.6191ZM27.4253 88.7188C27.4253 83.6745 29.2111 79.3665 32.7827 75.7949C36.3543 72.2233 40.6623 70.4375 45.7066 70.4375C50.7508 70.4375 55.0588 72.2233 58.6304 75.7949C62.202 79.3665 63.9878 83.6745 63.9878 88.7188V107H57.8941V100.906H33.5191V107H27.4253V88.7188ZM57.8941 94.8125V88.7188C57.8941 85.3503 56.7007 82.4811 54.314 80.1113C51.9442 77.7246 49.0751 76.5312 45.7066 76.5312C42.3381 76.5312 39.4605 77.7246 37.0737 80.1113C34.704 82.4811 33.5191 85.3503 33.5191 88.7188V94.8125H57.8941ZM80.2256 100.906C81.4952 100.906 82.57 100.466 83.4502 99.5859C84.3474 98.6888 84.7959 97.6055 84.7959 96.3359V93.2891C84.7959 92.0195 84.3474 90.9447 83.4502 90.0645C82.57 89.1673 81.4952 88.7188 80.2256 88.7188H72.6084V100.906H80.2256ZM90.8897 96.3359C90.8897 99.2812 89.8487 101.795 87.7666 103.877C85.6846 105.959 83.1709 107 80.2256 107H66.5147V70.4375H87.8428V76.5312H72.6084V82.625H80.2256C83.1709 82.625 85.6846 83.666 87.7666 85.748C89.8487 87.8301 90.8897 90.3438 90.8897 93.2891V96.3359ZM129.979 70.4375V107H123.885V78.1562L101.161 107H93.4166V70.4375H99.5103V99.2812L122.235 70.4375H129.979ZM138.6 91.7656V107H132.506V70.4375H138.6V85.6719H162.975V70.4375H169.068V107H162.975V91.7656H138.6ZM208.158 70.4375V76.5312H177.689V85.6719H202.064V91.7656H177.689V100.906H208.158V107H171.595V70.4375H208.158ZM247.247 70.4375V76.5312H232.013V107H225.919V76.5312H210.685V70.4375H247.247Z" fill="#232323" />
                            </svg>
                            <form className="mt-5 w-100">
                                <div className="mb-3">
                                    <label htmlFor="login-email"
                                        className="form-label font-lg font-regular">
                                        Email
                                    </label>
                                    <input type="email"
                                        className="form-control p-3 border-dark rounded-4"
                                        id="login-email"
                                        placeholder="Введите свой email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="login-password"
                                        className="form-label font-lg font-regular">
                                        Пароль
                                    </label>
                                    <input type="password"
                                        className="form-control p-3 border-dark rounded-4"
                                        id="login-password"
                                        placeholder="Введите пароль" />
                                </div>
                                <Button
                                    button="Войти"
                                    extraClass="mt-3"
                                    isHoverDark={true}
                                    isFullWidth={true}
                                    isSubmit={true} />
                            </form>
                        </div>
                        <div id="login-form-lines">
                            <hr id="login-form-line-1" />
                            <br />
                            <hr id="login-form-line-2" />
                            <hr id="login-form-line-3" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}