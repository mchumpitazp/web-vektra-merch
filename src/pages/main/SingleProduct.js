import React from "react";
import ProductDetail from "../product/ProductDetail";

export default function SingleProduct(props) {
    const [showDetail, setShowDetail] = React.useState(false);

    return (
        <>
            <article className="col">
                <div className="single-product">
                    <img
                        className="single-product-image"
                        src={props.src}
                        alt={props.src}
                        onClick={() => setShowDetail(true)}
                        style={{ cursor: "pointer" }}
                    />

                    <div className="d-flex flex-column gap-2 gap-md-3 mt-2 mt-md-3">
                        <p className="font-lg font-medium m-0">
                            {props.title}
                        </p>
                        {
                            props.subtitle &&
                            <p className="font-xs font-regular lh-1 opacity-50 m-0" style={{ whiteSpace: 'pre-line' }}>
                                <small>{props.subtitle}</small>
                            </p>
                        }
                        <p className="font-xs font-regular m-0">
                            {props.amount}&nbsp;З.П.
                            {
                                props.amountExtra &&
                                <span>
                                    &nbsp;/&nbsp;{props.amountExtra}&nbsp;З.П.
                                </span>
                            }
                        </p>
                    </div>
                </div>
            </article>

            <div className={`modal p-0 fade ${showDetail ? 'show d-block' : ''}`} tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-scrollable modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-body">
                            <ProductDetail
                                title={props.title}
                                price={props.amount}
                                setShowDetail={setShowDetail}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}