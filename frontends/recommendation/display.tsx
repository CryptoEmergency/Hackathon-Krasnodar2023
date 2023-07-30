import { Cemjsx } from "cemjs-all"
import arrowBtn from '@svg/icons/arrowBtn.svg'
import sber from '@svg/banks/sber.svg'
import alfa from '@svg/banks/alfa1.png'
import rnkb from '@svg/banks/rnkb.svg'
import vtb from '@svg/banks/vtb.png'
import raiffeisen from '@svg/banks/raiff2.png'
import center_invest from '@svg/banks/centr_invest.svg'

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

const banks_logo =
{
    'alfa': alfa,
    'sber': sber,
    'rnkb': rnkb,
    'vtb': vtb,
    'raiffeisen': raiffeisen,
    'center_invest': center_invest
}

const slicedArray = universitiesCards.slice(2)


export const display = function () {
    return (
        <main class="recommendation page">
            <div class="wrapper">
                <div class="main_title_wrap">
                    <h2 class="section_title">Вам рекомендованы следующие университеты:</h2>
                    <a href="/form" onclick={this.Fn.link} class="btn btn_default">
                        <span>Подать заявку</span>
                        <img src={arrowBtn}></img>
                    </a>
                </div>
                <div class = "recommendation_univer">
                    <div class="recommendation_univer_list">
                            {
                                slicedArray.map((item, index)=>{
                                    return(
                                        <div class="recommendation_univer_item">
                                            <div class="recommendation_univer_item_img">
                                            <a href="/vuz_info" onclick={this.Fn.link}><img src={item.picture}></img></a>
                                            </div>
                                            <div class="recommendation_univer_item_info">
                                                <a href="/vuz_info" onclick={this.Fn.link}><h5 class="recommendation_univer_item_title">{item.title}</h5></a>
                                                <div class="f-col2">
                                                    <span>{item.city}</span>
                                                    <span>Специальностей: {item.programms_number}</span>
                                                </div>
                                                <div>
                                                    <p> от <span class="main_text">{item.price_from}</span> р/год</p>
                                                    <p>Лучшее предложение от банка <span class="main_text">{item.bank}</span></p>
                                                </div>
                                            </div>
                    
                                        </div>
                                    
                                    )
                                })
                            }
                    </div>
                </div>
                <h2>Предложения банков</h2>
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