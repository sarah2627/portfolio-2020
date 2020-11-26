import React from 'react'

import Card from '../components/Card'
import TitleHomePage from '../components/TitleHomePage'

import MatelasCosme from '../assets/images/matelas-cosme.jpg'

export default class Carousel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            titlePart : {
                domainWeb: 'Web',
                domainAudiovisuel: 'Audiovisuel'
            },
            items: [
                {
                    id: 0,
                    title: 'Cosme Literie',
                    subTitle: 'Creation of their new website',
                    imgSrc: MatelasCosme,
                    link: 'https://www.cosme-literie.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Cosme Literie 2',
                    subTitle: 'Creation of their new website',
                    imgSrc: MatelasCosme,
                    link: 'https://www.cosme-literie.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Cosme Literie 3',
                    subTitle: 'Creation of their new website',
                    imgSrc: MatelasCosme,
                    link: 'https://www.cosme-literie.com/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Cosme Literie 3',
                    subTitle: 'Creation of their new website',
                    imgSrc: MatelasCosme,
                    link: 'https://www.cosme-literie.com/',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items]

        items[id].selected = items[id].selected ? false : true

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false
            }
        })

        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item = {item} click = {(e => this.handleCardClick(item.id, e))} key = {item.id} />
        })
    }

    render() {
        return (
            <div>
                <TitleHomePage titlePart={this.state.titlePart.domainWeb}/>
                <div className="container-carousel">
                    <div className="carousel">
                        {this.makeItems(this.state.items)}
                    </div>
                </div>
                <TitleHomePage titlePart={this.state.titlePart.domainAudiovisuel}/>
            </div>
        )
    }
}