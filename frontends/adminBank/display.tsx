import { Cemjsx } from "cemjs-all"
import deleteIcon from "@svg/delete_icon.svg"

export const display = function () {
    return (
        <div class="admin">
            <div class="admin__container admin__bank">
                <h2 style="padding-bottom:20px">Административная панель</h2>
                <div class="admin__wrapper">
                    <div class="admin__bank_input white">
                        <label  class="auth-label">Название банка</label>
                        <input class="auth-input" type="text" placeholder="Введите назвнание банка"></input>
                    </div>
                    <button class="admin__bank_add"
                        onclick={() => {
                            this.Static.credit.push({})
                            this.init()
                            console.log(this.Static.credit)
                        }}
                    >
                        <span>Добавить кредит</span>
                    </button>
                    {
                        this.Static.credit.map((item, i) => {
                            return (
                                <div class="admin__bank_list">
                                    <img src={deleteIcon} 
                                        onclick={() => {
                                            this.Static.credit.splice(i, 1)
                                            this.init()
                                        }}
                                    />
                                    <div  class="admin__bank_input">
                                        <label  class="auth-label">Название кредита</label>
                                        <input class="auth-input" type="text" placeholder="Введите назвнание кредита"></input>
                                    </div>
                                    <div  class="admin__bank_input" >
                                        <label  class="auth-label">Сумма кредита</label>
                                        <input class="auth-input" type="number" placeholder="Введите сумму кредита"></input>
                                    </div>
                                    <div  class="admin__bank_input" >
                                        <label  class="auth-label">Срок кредита (в месяцах)</label>
                                        <input class="auth-input" type="number" placeholder="Введите срок кредита"></input>
                                    </div>
                                    <div  class="admin__bank_input" >
                                        <label  class="auth-label">Ежемесячный платёж</label>
                                        <input class="auth-input" type="number" placeholder="Введите ежемесячный платёж"></input>
                                    </div>
                                    <div  class="admin__bank_input" >
                                        <label  class="auth-label">Процентная ставка</label>
                                        <input class="auth-input" type="number" placeholder="Введите процентную ставку"></input>
                                    </div>
                                    <div  class="admin__bank_input" >
                                        <label  class="auth-label">Валюта</label>
                                        <input class="auth-input" type="text" placeholder="Введите валюту"></input>
                                    </div>      
                                </div>
                            )
                        })
                    }            
                </div>
            </div>
        </div>
    )
}
