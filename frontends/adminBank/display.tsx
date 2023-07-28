import { Cemjsx } from "cemjs-all"

export const display = function () {
    return (
        <div class="admin">
            <div class="admin__container">
                <h2 style="padding-bottom:20px">Административная панель</h2>
                <div class="admin__wrapper">
                <div  class="input_login" id="auth-label1">
                        <label  class="auth-label" >Название банка</label>
                        <input class="auth-input" type="text" placeholder="Введите назвнание банка"></input>
                    </div>
                    <div  class="input_login" id="auth-label1">
                        <label  class="auth-label" >Название кредита</label>
                        <input class="auth-input" type="text" placeholder="Введите назвнание кредита"></input>
                    </div>
                    <div  class="input_login" >
                        <label  class="auth-label" >Сумма кредита</label>
                        <input class="auth-input" type="number" placeholder="Введите сумму кредита"></input>
                    </div>
                    <div  class="input_login" >
                        <label  class="auth-label" >Срок кредита (в месяцах)</label>
                        <input class="auth-input" type="number" placeholder="Введите срок кредита"></input>
                    </div>
                    <div  class="input_login" >
                        <label  class="auth-label" >Ежемесячный платёж</label>
                        <input class="auth-input" type="number" placeholder="Введите ежемесячный платёж"></input>
                    </div>
                    <div  class="input_login" >
                        <label  class="auth-label" >Процентная ставка</label>
                        <input class="auth-input" type="number" placeholder="Введите процентную ставку"></input>
                    </div>
                    <div  class="input_login" >
                        <label  class="auth-label" >Валюта</label>
                        <input class="auth-input" type="text" placeholder="Введите валюту"></input>
                    </div>      
                    <div class="btn_enter_2" id='auth-label2'>
                    <button class="btn_enter1">
                        Внести данные
                    </button>
                </div>              
                </div>
                
            </div>
        </div>
    )
}
