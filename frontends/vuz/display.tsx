import { Cemjsx } from "cemjs-all"
import arrowBtn from '@svg/icons/arrowBtn.svg'
import university1 from '@images/universities/1.jpg'
import university2 from '@images/universities/2.jpg'
import university3 from '@images/universities/3.jpg'


const universitiesCards =[
    {
        id: 1,
        title: "Санкт-Петербургский реставрационно-строительный институт",
        city: "Санкт-Петербург",
        price_from: "100 000",
        programms_number: "16",
        desc: "Дизайн; реставрация и ещё 9 направлений",
        picture: university1,
        bank: "ЦЕНТР-ИНВЕСТ"
    },
    {
        id: 2,
        title: "Санкт-Петербургский филиал Национального исследовательского университета «Высшая школа экономики»",
        city: "Санкт-Петербург",
        price_from: "360 000",
        programms_number: "43",
        desc: "Дизайн; реставрация и ещё 9 направлений",
        picture: university2,
        bank: "Тинькоф"
    },
    {
        id: 3,
        title: "Московский технический университет связи и информатики",
        city: "Санкт-Петербург",
        price_from: "80 000",
        programms_number: "16",
        desc: "Дизайн; реставрация и ещё 9 направлений",
        picture: university3,
        bank: "Райффайзен"
    },
    {
        id: 1,
        title: "Санкт-Петербургский реставрационно-строительный институт",
        city: "Санкт-Петербург",
        price_from: "100 000",
        programms_number: "16",
        desc: "Дизайн; реставрация и ещё 9 направлений",
        picture: university1,
        bank: "ЦЕНТР-ИНВЕСТ"
    },
    {
        id: 2,
        title: "Санкт-Петербургский филиал Национального исследовательского университета «Высшая школа экономики»",
        city: "Санкт-Петербург",
        price_from: "360 000",
        programms_number: "43",
        desc: "Дизайн; реставрация и ещё 9 направлений",
        picture: university2,
        bank: "Сбербанк"
    },
    {
        id: 3,
        title: "Московский технический университет связи и информатики",
        city: "Санкт-Петербург",
        price_from: "80 000",
        programms_number: "16",
        desc: "Дизайн; реставрация и ещё 9 направлений",
        picture: university3,
        bank: "Альфа Банк"
    },
    
    
]

export const display = function () {
    return (
        <main class="home page">
            <div class="wrapper">
                <h2 class="section_vusi">Вузы</h2>
                    <section class="univer">
                        <div class="universities_list">
                            {
                            universitiesCards.map((item, index)=>{
                            return(
                                <div class="university_item">
                                    <a href=""><img src={item.picture}></img></a>
                                    <div class="item_about">
                                        <span>{item.city}</span>
                                        <a>{item.title}</a>
                                        <span>Специальностей:{item.programms_number}</span>
                                        <div class= "price-offer">
                                            <p>от {item.price_from}р/год</p>
                                            <p>Лучшее предложение от банка <span>{item.bank}</span></p>
                                        </div>
                                        
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