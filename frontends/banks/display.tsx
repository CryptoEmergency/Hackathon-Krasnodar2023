import { Cemjsx } from "cemjs-all"
import arrowBtn from '@svg/icons/arrowBtn.svg'
import sber from '@svg/banks/sber.svg'
// import alfa from '@svg/banks/alfa.png'
import rnkb from '@svg/banks/rnkb.svg'
import vtb from '@svg/banks/vtb.png'
import raiffeisen from '@svg/banks/raiff.png'

// const universitiesCards =[
//     {
//         id: 1,
//         title: "Санкт-Петербургский реставрационно-строительный институт",
//         city: "Санкт-Петербург",
//         price_from: "100 000",
//         programms_number: "16",
//         desc: "Дизайн; реставрация и ещё 9 направлений",
//         picture: university1,
//         bank: "ЦЕНТР-ИНВЕСТ"
//     },
//     {
//         id: 2,
//         title: "Санкт-Петербургский филиал Национального исследовательского университета «Высшая школа экономики»",
//         city: "Санкт-Петербург",
//         price_from: "360 000",
//         programms_number: "43",
//         desc: "Дизайн; реставрация и ещё 9 направлений",
//         picture: university2,
//         bank: "Тинькоф"
//     },
//     {
//         id: 3,
//         title: "Московский технический университет связи и информатики",
//         city: "Санкт-Петербург",
//         price_from: "80 000",
//         programms_number: "16",
//         desc: "Дизайн; реставрация и ещё 9 направлений",
//         picture: university3,
//         bank: "Райффайзен"
//     },
//     {
//         id: 1,
//         title: "Санкт-Петербургский реставрационно-строительный институт",
//         city: "Санкт-Петербург",
//         price_from: "100 000",
//         programms_number: "16",
//         desc: "Дизайн; реставрация и ещё 9 направлений",
//         picture: university1,
//         bank: "ЦЕНТР-ИНВЕСТ"
//     },
//     {
//         id: 2,
//         title: "Санкт-Петербургский филиал Национального исследовательского университета «Высшая школа экономики»",
//         city: "Санкт-Петербург",
//         price_from: "360 000",
//         programms_number: "43",
//         desc: "Дизайн; реставрация и ещё 9 направлений",
//         picture: university2,
//         bank: "Сбербанк"
//     },
//     {
//         id: 3,
//         title: "Московский технический университет связи и информатики",
//         city: "Санкт-Петербург",
//         price_from: "80 000",
//         programms_number: "16",
//         desc: "Дизайн; реставрация и ещё 9 направлений",
//         picture: university3,
//         bank: "Альфа Банк"
//     },


// ]

const banks_logo=[
    {
        'sber' : sber
    },
    // {
    //     'alfa' :alfa
    // },
    {
        'rnkb' :  rnkb
    },
    {
        'vtb' :vtb
    },
    {
        'raiffeisen' : raiffeisen
    },
]

export const display = function () {
    console.log(this.records)
    return (
        <main class="home page">
            <div class="wrapper">
                <h2 class="section_banks">Банки</h2>
                <section class="banks">
                    <div class="banks_list">
                        <div class="logo">
                           
                        </div>
                        {
                            this.records
                                ?
                                this.records.map((item, index) => {
                                    // console.log(index)
                                    return (
                                        
                                        <div class="bank_item">
                
                                            <a href=""><img src={sber}></img></a>
                                    <div class="item_about">
                                        <a>{item.credit[0].nameCredit}</a>
                                        <a>{item.name}</a>
                                        <a>Валюта: {item.credit[0].currency}</a>
                                        <a>Срок: {item.credit[0].creditTerm}</a>
                                        <a>Процентная ставка: {item.credit[0].interestRate}</a>
                                        <a>Сумма кредита: {item.credit[0].amountOfCredit}</a>
                
                                    </div>

                                    </div>
                                    )
                                })

                                :
                                null
                        }

                    </div>
                </section>
            </div>
        </main>
    )

}