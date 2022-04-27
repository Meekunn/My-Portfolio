import './expdetail.scss'

const ExpDetail = ({...detail}) => {
    return(
        <>
            <div className="exp-content" id={detail.id}>
                <h4>{detail.role}</h4>
                <h5><a href={detail.link} target="_blank">{detail.office}</a></h5>
                <p>{detail.date}</p>
                <ul>
                    <li>{detail.li1}</li>
                    <li>{detail.li2}</li>
                    <li>{detail.li3}</li>
                </ul>
            </div>
        </>
    )
}

export default ExpDetail