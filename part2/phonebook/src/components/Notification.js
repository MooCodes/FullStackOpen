const Notification = (props) => {
    if (props.message === null) {
        return null
    }

    return (
        <div className={props.message.class}>
            {props.message.msg}
        </div>
    )
}

export default Notification