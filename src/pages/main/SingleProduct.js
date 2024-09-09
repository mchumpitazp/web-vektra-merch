export default function SingleProduct(props) {
    return (
        <article className="col">
            <div className="single-product">
                <img
                    className="single-product-image"
                    src={props.src}
                    alt={props.src} />

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
    );
}