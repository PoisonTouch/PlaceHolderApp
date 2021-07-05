
const Modal = props => {

    return (
        <div className = {`modal_wrapper ${props.isOpened ? 'open' : 'close'}`} style={{...props.style}}>
            <div className='modal_body'>
                <div className='modal_close' onClick={props.onModalClose}>×</div>
                <a className='aa' href="/posts">{props.title1}</a>
                <hr></hr>
                <a  className="aa" href="/users">{props.title2}</a>
            </div>
        </div>
    )
}

export default Modal