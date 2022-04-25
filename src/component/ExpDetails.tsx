import React from 'react'

const ExpDetails = ({...detail}) => {
    return(
        <div>
            <div className='details' id={detail.id}>
                <h3>{detail.role} @<a href={detail.link}>{detail.office}</a></h3>
                <p>{detail.date}</p>
                <ul>
                    <li>{detail.li1}</li>
                    <li>{detail.li2}</li>
                    <li>{detail.li3}</li>
                </ul>
            </div>
        </div>
    )
}

export default ExpDetails