
const Modal = props => {

    return (
        <div className = {`modal_wrapper ${props.isOpened ? 'open' : 'close'}`} style={{...props.style}}>
            <div className='modal_body'>
                <a>{props.title1}</a>
                <a>{props.title2}</a>
            </div>
        </div>
    )
}

export default Modal