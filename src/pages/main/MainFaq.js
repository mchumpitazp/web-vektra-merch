import Data from '../../data.json'

export default function MainFaq() {

    const renderFAQ = Data["faqs"].map((faq, index) => {
        return (
            <article key={index} className={`col ${index % 2 === 0 ? 'pe-lg-4' : 'ps-lg-4'}`}>
                <div className="d-flex flex-column gap-3 gap-lg-4 mb-5">
                    <hr className="m-0" />
                    <h3 className="font-md font-regular m-0">
                        {faq.question}
                    </h3>
                    <p className="font-xs font-regular m-0 opacity-75">
                        {faq.answer}
                    </p>
                </div>
            </article>
        )
    })

    return (
        <section id='faq' className="container mobile-max-width my-5 py-5">
            <div className="row row-cols-1 row-cols-md-2">
                {renderFAQ}
            </div>
        </section>
    )
}