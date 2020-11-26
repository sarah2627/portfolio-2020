import React from 'react'

import CardInfo from '../components/CardInfo'

export default function Card (props) {

    return (
        <div className="d-inline-block g-card" onMouseOver={(e) => props.click(props.item)}>
            <div className="g-card-image-container">
                {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/>}
                <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc}/>
            </div>
        </div>
    )
}