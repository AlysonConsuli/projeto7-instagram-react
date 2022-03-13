import { Storie } from './Storie';

const stories = [{ img: "img/9gag.png", name: "9gag" }, { img: "img/dota2.jpg", name: "Dota 2" },
{ img: "img/valorant.png", name: "Valorant" }, { img: "img/driven.png", name: "Driven" },
{ img: "img/ai.png", name: "Responde aí" }, { img: "img/vasco.png", name: "Vasco" },
{ img: "img/barked.png", name: "Barked" }, { img: "img/nike.png", name: "Nike" }]

export const Stories = () => {
    return (
        <div className="containerStories">

            {stories.map(storie => {
                const { img, name } = storie
                return <Storie img={img} name={name} />
            })
            }
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    )
}