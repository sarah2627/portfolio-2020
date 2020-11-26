import React from 'react'

import Hero from '../components/Hero'
import Content from '../components/Content'

export default function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title}/>
            <Content>
                <p> Passionnée du domaine du multimédia, je me suis tout naturellement orientée vers le secteur de la création au sein d'un DUT MMI après avoir obtenu mon bac. Grâce à mon implication et mon travail, j'ai ensuite pu intégrer l'école d'ingénieurs IMAC situé à côté de Paris. Spécialisé dans le pôle web pour ma troisième année, j’ai pu créer de nombreuses réalisations pour divers projets scolaires, professionnels et personnels. ✨ </p>

                <p> Attentive, curieuse et appliquée, je sais donner le meilleur de moi-même dans ce que j’aime. Ce que j'aime, allier à la fois mes compétences techniques et artistiques afin de créer des interfaces efficaces, propres et optimisées. 💻 </p>

                <p> C'est pourquoi je suis à la recherche de mon stage de fin d'étude d'école d'ingénieurs pour une durée de 6 mois en tant qu'intégratrice web / développeuse web front-end. 🚀 </p>
            </Content>
        </div>
    )
}