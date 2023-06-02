import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";


export const Cards = ({dataCards}) => {
    const [liked, setLiked] = useState(false)

    const onClickLike = (name) => {
        dataCards.forEach((card, index) => {
            if(card.name === name) {
                if (!liked) {
                    card.likes +=1
                    card.liked = true
                    setLiked(true)
                } else {
                    card.likes -=1
                    card.liked = false
                    setLiked(false)
                }
                dataCards[index] = card
                return [...dataCards]
            }

        })
    }

    return dataCards.map(card =>
        <div className="blog__item" key={card.name}>
            <div className={`blog__item_subtitle ${card.colorClassname}`}>{card.subtitle}</div>
            <div className="blog__item_title">{card.title}</div>
            <div className="blog__item_text">
                {card.description}
            </div>

            <div className="blog__item_add">

                <div className="blog__item_add_block_left">
                    <img src={card.img} alt=""/>
                    <div className="blog__item_add_block_left_name">{card.name}</div>
                </div>

                <div className="blog__item_add_block_right">
                    <i className="fa fa-heart-o" aria-hidden="true"
                       onClick={() => onClickLike(card.name)}
                       style={{color: `${card?.liked ? 'red' : ''}`}}
                    >
                        <FontAwesomeIcon icon={faHeart} />
                    </i>
                    <div className="blog__item_add_block_right_num"  style={{color: `${card?.liked ? 'red' : ''}`}}>{card.likes}</div>
                </div>

            </div>

        </div>
    )
}