import './Card.css'

const Card = (props) => {
    const classes = 'card '+ props.className
    /* 
        props.children will appear when wrapped with Card tag
    */
    return <div className={classes}>{props.children}</div>
}

export default Card