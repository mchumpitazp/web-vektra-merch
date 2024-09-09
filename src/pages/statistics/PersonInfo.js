import PersonStar from "./PersonStar";


export default function PersonInfo({ colors, personName, personImage, greenCards, yellowCards, isLast }) {
    const totalCards = greenCards + yellowCards;
    const classPaddingBottom = isLast ? 'pb-4 pb-md-5' : '';
    const stylePaddingBottom = isLast ? 'auto' : '110px';

    return (
        <article
            className={`${colors} rounded-5 px-5 pt-4 pt-md-5 ${classPaddingBottom}`}
            style={{ marginTop: '-80px', paddingBottom: stylePaddingBottom }}>
            <div className="row">
                <div className="col-6 col-md-2 col-md-2 col-xl-2 my-3 my-md-0">
                    <PersonStar
                        personName={personName}
                        personImage={personImage} />
                </div>
                <div className="col-12 col-md-5 col-lg-5 col-xl-4 my-3 my-md-0">
                    <div className="font-lg font-bold">
                        <div className="d-flex justify-content-between">
                            <span className="text-uppercase">зелёные карточки</span>
                            <span>{greenCards}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span className="text-uppercase">жёлтые карточки</span>
                            <span>{yellowCards}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span className="text-uppercase">зелёные карточки</span>
                            <span>0</span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3 col-xl-3 offset-md-1 offset-lg-2 offset-xl-3 mt-5 mt-md-0">
                    <div className="d-flex flex-md-column justify-content-between">
                        <span className="font-lg font-bold text-uppercase pt-3 pt-md-0">
                            баланс
                        </span>
                        <span className="font-xxl font-bold">
                            {totalCards} З.П.
                        </span>
                    </div>
                </div>
            </div>
        </article>
    )
}