import { Cemjsx } from "cemjs-all"
import arrowBtn from '@svg/icons/arrowBtn.svg'
import sber from '@svg/banks/sber.svg'
import alfa from '@svg/banks/alfa1.png'
import rnkb from '@svg/banks/rnkb.svg'
import vtb from '@svg/banks/vtb.png'
import raiffeisen from '@svg/banks/raiff2.png'


const banks_logo =
{
    'alfa': alfa,
    'sber': sber,
    'rnkb': rnkb,
    'vtb': vtb,
    'raiffeisen': raiffeisen

}

export const display = function () {
    return (
        <main class="banksPage page">
            <div class="wrapper">
                <h2 class="section_title">Банки</h2>

                {/* <div class="main_title_wrap">
                    <a href="/form" onclick={()=>{this.Fn.link}} class="btn btn_default">
                        <span>Подать заявку</span>
                        <img src={arrowBtn}></img>
                    </a>
                </div> */}
                <section class="banksPage_inner">
                    {
                        this.records
                            ?
                            this.records.map((item, index) => {
                                return (
                                    <div class="banksPage_item">
                                        <div class="banksPage_item_img">
                                            <img src={banks_logo[item.logo]}></img>
                                        </div>
                                        <div class="banksPage_item_info">
                                            <h5 class="banksPage_item_title">{item.name}</h5>
                                            <span class="banksPage_item_text">{item.credit[0].nameCredit}</span>
                                            <p class="banksPage_item_text">Срок: <span class="main_text">{item.credit[0].creditTerm}</span></p>
                                            <p class="banksPage_item_text">Процентная ставка: <span class="main_text">{item.credit[0].interestRate}</span></p>
                                            <p class="banksPage_item_text">Сумма кредита: <span class="main_text">{item.credit[0].amountOfCredit}</span></p>
                                            <div class="f-center">
                                                <a href="/form" onclick={()=>{this.Fn.link}} class="btn btn_default">
                                                    <span>Подать заявку</span>
                                                    <img src={arrowBtn}></img>
                                                </a>
                                            </div>
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