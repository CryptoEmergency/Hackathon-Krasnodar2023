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
        <main class="univer_info page">
            <div class="wrapper">
                <div class="univer_info_title_wrap">
                    <div class="logo">
                        <img src={university1} alt="logo" />
                    </div>
                    <div class='title_about'>
                        <h2 >
                            Санкт-Петербургский реставрационно-строительный институт
                        </h2>
                        <span>Город: Санкт-Петербург</span>
                        <a href="/form" onclick={this.Fn.link} class="btn btn_default hello" >
                            <span>Подать заявку</span>
                            <img src={arrowBtn}></img>
                        </a>
                    </div>
                </div>
                <div class="univer_info_content_wrap">
                    {/* <div class='content_item'> */}
                        <div class="desc">
                            <h2>Об учебном заведении</h2>
                            <p >
                            Институт осуществляет обучение дипломированных бакалавров по 14 направлениям, подготовку магистров и аспирантов, проводятся курсы повышения квалификации.
                            Сегодня это динамично развивающийся ВУЗ, поставивший своей задачей объединить как новейшие тенденции в российском высшем образовании, так и традиции, проверенные временем.
                            </p>
                        
                        </div>
                        <div class ="contacts">
                            <h2>Контакты</h2>
                            <p>
                                <a href="http://pk.aumsu.ru/">http://pk.aumsu.ru/</a>
                                <p>
                                    ул.Кавалергардская, д.7
                                    <br />
                                    8 (812) 500-51-72
                                    <br />
                                    г. Новороссийск, пр. Ленина, д. 93
                                </p>
                            </p>

                        </div>
                    </div>
                {/* </div> */}
            </div>
        </main>
    )

}