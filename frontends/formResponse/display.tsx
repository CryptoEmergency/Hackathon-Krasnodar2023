import { Cemjsx } from "cemjs-all"
import sber from '@images/sberbank.png'
import alfa from '@svg/banks/alfa1.png'
import raiffeisen from '@svg/banks/raiff2.png'
import agree from '@svg/agree.svg'
import rejection from '@svg/rejection.svg'

export const display = function () {
    return (
        <div class="main__modal">
            <div class="modal__conteiner">
                <div class="title__st">
                    <span>Ожидание ответа</span>
                </div>
                
                <div class="horizontal-line">
                    <div class="horizontal-line_1"></div>
                </div>

                <div class="modal__bank">
                    <div class="modal__bank_item">
                        <span>Сбербанк</span>
                        <img class="modal__bank_logo" src={sber} />
                    </div>
                    {
                        this.Static.sber.active
                        ?
                        <img class="modal__bank_img" src={rejection} />
                        :
                        <div class="spinner spinner_pending"></div>
                    }
                </div>

                <div class="modal__bank">
                    <div class="modal__bank_item">
                        <span>Альфа-Банк</span>
                        <img class="modal__bank_logo" src={alfa} />
                    </div>
                    {
                        this.Static.alfa.active
                        ?
                        <img class="modal__bank_img" src={agree} />
                        :
                        <div class="spinner spinner_pending"></div>
                    }
                    
                </div>

                <div class="modal__bank">
                    <div class="modal__bank_item">
                        <span>Райффайзенбанк</span>
                        <img class="modal__bank_logo" src={raiffeisen} />
                    </div>
                    {
                        this.Static.raiffeisen.active
                        ?
                        <img class="modal__bank_img" src={rejection} />
                        :
                        <div class="spinner spinner_pending"></div>
                    }
                </div>
            </div>
        </div>
    )
}
