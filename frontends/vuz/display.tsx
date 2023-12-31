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
        <main class="univer page">
            <div class="wrapper">
                <div class="main_title_wrap">
                    <h2 class="section_title">Вузы</h2>
                    <a href="/form" onclick={this.Fn.link} class="btn btn_default">
                        <span>Подать заявку</span>
                        <img src={arrowBtn}></img>
                    </a>
                </div>
                    <div class="univer_list">
                        {
                            universitiesCards.map((item, index)=>{
                                return(
                                    <div class="univer_item">
                                        <div class="univer_item_img">
                                            <a href="/vuz_info" onclick={this.Fn.link} ><img src={item.picture}></img></a>
                                        </div>
                                        <div class="univer_item_info">
                                            <a href="/vuz_info" onclick={this.Fn.link}>
                                                <h5 class="univer_item_title">{item.title}</h5>
                                                </a>
                                            <div class="f-col2">
                                                <span>{item.city}</span>
                                                <span>Специальностей: {item.programms_number}</span>
                                            </div>
                                            <div class="offer">
                                                <p> от  <span class="main_text">{item.price_from}</span> р/год</p>
                                                <p>Лучшее предложение от банка <a href="/banks" onclick={this.Fn.link}><span class="main_text">{item.bank}</span></a></p>
                                            </div>
                                        </div>
                
                                    </div>
                                  
                                )
                            })
                        }
                    </div>
            </div>
        </main>
    )

}