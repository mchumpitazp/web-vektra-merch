export default function PersonStar({ personName, personImage }) {
    return (
        <div className="col d-flex flex-column justify-content-center align-items-center">
            <div className="position-relative">
                <figure className="rounded-circle mb-1">
                    <img
                        className="img-fluid"
                        height={120}
                        width={120}
                        src={personImage}
                        alt={personImage} />
                </figure>
                <div className="position-absolute bottom-0 left-0" style={{ transform: 'translate(-20px, 20px)' }}>
                    <svg width="75" height="75" viewBox="0 0 75 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M75 21.1248L73.604 18.1288L39.1568 34.3436L39.0913 0L35.8004 0.00633388L35.8659 34.3537L1.39472 18.1288L0 21.1248L33.6195 36.9493L0 52.7739L1.39472 55.7698L35.876 39.5399L35.9402 74L39.2311 73.9937L39.1631 37.9932L75 21.1248Z" fill="currentColor" />
                    </svg>
                </div>
            </div>
            <span className="font-lg font-medium">
                {personName}
            </span>
        </div>
    )
}