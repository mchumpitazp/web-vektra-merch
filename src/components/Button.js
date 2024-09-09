export default function Button({ button, extraClass, isFullWidth, isHoverDark, isSubmit }) {

    const btnHoverColor = isHoverDark ? 'btn-outline-dark' : 'btn-outline-light';

    return (
        <button
            type={isSubmit ? 'submit' : ''}
            className={`${extraClass} btn btn-orange ${btnHoverColor} rounded-4 px-5 py-3 py-md-2 ${isFullWidth ? 'w-100' : ''}`}>
            <span className="font-md font-regular">
                {button}
            </span>
        </button>
    )
}