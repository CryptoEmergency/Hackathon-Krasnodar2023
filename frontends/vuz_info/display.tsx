import { Cemjsx } from "cemjs-all"
import arrowBtn from '@svg/icons/arrowBtn.svg'
import sber from '@svg/banks/sber.svg'
import alfa from '@svg/banks/alfa1.png'
import rnkb from '@svg/banks/rnkb.svg'
import vtb from '@svg/banks/vtb.png'

import raiffeisen from '@svg/banks/raiff2.png'
import university1 from '@images/universities/1.jpg'
import university2 from '@images/universities/2.jpg'
import university3 from '@images/universities/3.jpg'
import center_invest from '@svg/banks/centr_invest.svg'



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

const banks_logo =
{
    'alfa': alfa,
    'sber': sber,
    'rnkb': rnkb,
    'vtb': vtb,
    'raiffeisen': raiffeisen,
    'center_invest': center_invest

}

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
                    <div class ="banks_section">
                        <h2>Предложения банков</h2>
                        <a href="/form" onclick={this.Fn.link} class="btn btn_default">
                            <span>Подать заявку во все банки</span>
                            <img src={arrowBtn}></img>
                        </a>
                    </div>
                    <section class="bank_offer_inner">
                
                    {
                        this.records
                            ?
                            this.records.map((item, index) => {
                                return (
                                    <div class="bank_offer_item">
                                        <div class="bank_offer_item_img">
                                            <img src={banks_logo[item.logo]}></img>
                                        </div>
                                        <div class="bank_offer_item_info">
                                            <h5 class="bank_offer_item_title">{item.name}</h5>
                                            <span class="bank_offer_item_text">{item.credit[0].nameCredit}</span>
                                            <p class="bank_offer_item_text">Срок: <span class="main_text">{item.credit[0].creditTerm}</span></p>
                                            <p class="bank_offer_item_text">Процентная ставка: <span class="main_text">{item.credit[0].interestRate}</span></p>
                                            <p class="bbank_offer_item_text">Сумма кредита: <span class="main_text">{item.credit[0].amountOfCredit}</span></p>
                                        </div>

                                    </div>
                                )
                            })

                            :
                            null
                    }

                </section>


            </div>
        </main>
    )

}