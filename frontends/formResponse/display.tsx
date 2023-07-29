import { Cemjsx } from "cemjs-all"
import sber from '@images/sberbank.png'
import alfa from '@svg/banks/alfa1.png'
import rnkb from '@svg/banks/rnkb.svg'

export const display = function () {
    console.log(this.Static.time)
    return (
        <div class="main__modal">
            <div class="modal__conteiner">
                <div class="title__st">
                    <span>Ожидание ответа</span>
                    <div class="spinner"></div>
                </div>
                
                <div class="horizontal-line">
                    <div class="horizontal-line_1"></div>
                </div>

                <div class="modal__bank">
                    <div class="modal__bank_item">
                        <span>Сбербанк</span>
                        <img src={sber} />
                    </div>
                    <div class="modal__bank">
                        <span>Ожидаем ответа</span>
                        <div class="spinner"></div>
                    </div>
                </div>

                

            </div>
        </div>
    )
}
