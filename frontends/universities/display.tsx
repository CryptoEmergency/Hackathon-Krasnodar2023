import { Cemjsx } from "cemjs-all"
import arrowBtn from '@svg/icons/arrowBtn.svg'


const universitiesCards =[
    {
        id: 1,
        title: "Санкт-Петербургский реставрационно-строительный институт",
        city: "Санкт-Петербург",
        price_from: "100 000",
        programms_number: "16",
        desc: "Дизайн; реставрация и ещё 9 направлений",
        picture: {}
    },
    {
        id: 2,
        title: "Санкт-Петербургский филиал Национального исследовательского университета «Высшая школа экономики»",
        city: "Санкт-Петербург",
        price_from: "360 000",
        programms_number: "43",
        desc: "Дизайн; реставрация и ещё 9 направлений",
        picture: {}
    },
    {
        id: 3,
        title: "Московский технический университет связи и информатики",
        city: "Санкт-Петербург",
        price_from: "80 000",
        programms_number: "16",
        desc: "Дизайн; реставрация и ещё 9 направлений",
        picture: {}
    },
]

export const display = function () {
    return (
        <main class="home page">
            <div class="wrapper">
                <h2 class="section_title">Вузы</h2>
                    <section class="univer">
                        <div class="universities_list">
                            {
                            universitiesCards.map((item, index)=>{
                            return(
                                <div class="universities_item">
                                    <img src={item.picture}></img>
                                    <div class="item_about">
                                        <h2>{item.title}</h2>
                                        <span>{item.city}</span>
                                        <p>{item.price_from}</p>
                                        <a href="">{item.programms_number}</a>
                                    </div>

                                </div>
                            )
                            })
                            }
                        </div>
                </section> 
            </div>
        </main>
    )

}