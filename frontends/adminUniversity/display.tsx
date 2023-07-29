import { Cemjsx } from "cemjs-all"
import iconDelete from "@svg/delete_icon.svg"
export const display = function () {
    return (
        <div class="admin__univer">
            <div class="admin__container">
                <h2>Административная панель</h2>
                <div class="admin__buttons">
                    <button 
                        class={["admin__button", this.Static.button == "university" ? "admin__button_active" : ""]}
                        onclick={() => {
                            this.Static.button = "university"
                        }}
                    >
                        <span>Университет</span>
                    </button>
                    <button
                        class={["admin__button", this.Static.button == "speciality" ? "admin__button_active" : ""]}
                        onclick={() => {
                            this.Static.button = "speciality"
                        }}
                    >
                        <span>Специальность</span>
                    </button>
                </div>
                {
                    this.Static.button == "university"
                    ?
                    <div>
                        <div class="admin__univer_wrapper">
                            <div class="input__univer">
                                <label  class="auth-label">Название университета</label>
                                <input class="auth-input" type="text" placeholder="Введите назвнание университета"></input>
                            </div>
                            <div class="input__univer">
                                <label  class="auth-label">Описание</label>
                                <input class="auth-input" type="text" placeholder="Описание"></input>
                            </div>
                            <div  class="input__univer">
                                <label  class="auth-label">Город</label>
                                <input class="auth-input" type="text" placeholder="Введите назвнание города"></input>
                            </div>
                            <div class="input__univer">
                                <label  class="auth-label">Стоимость</label>
                                <input class="auth-input" type="number" placeholder="Стоимость"></input>
                            </div>
                            <div class="input__univer">
                                <label  class="auth-label">Название факультета</label>
                                <input class="auth-input" type="text" placeholder="Введите назвнание факультета"></input>
                            </div>
                        </div>
                        <button class="btn_enter1" id="btn-enter2"
                            onclick={()=>{
                                this.Static.university.push({})
                                this.init()
                            }}
                        >
                            Внести данные
                        </button>
                    </div>
                    :
                    <div>
                        <div class="admin__univer_wrapper"> 
                            <div  class="input__univer">                                
                                <label  class="auth-label">Специализация</label>
                                <input class="auth-input" type="text" placeholder="Введите назвнание специализации"></input>
                            </div>
                            <div  class="input__univer">
                                <label  class="auth-label">Количество мест</label>
                                <input class="auth-input" type="number" placeholder="Введите количество мест"></input>
                            </div>
                            <div  class="input__univer">
                                <label  class="auth-label">Форма обучения</label>
                                <input class="auth-input" type="text" placeholder="Введите форму обучния"></input>
                            </div>
                            <div  class="input__univer">
                                <label  class="auth-label">Время обучения</label>
                                <input class="auth-input" type="number" placeholder="Введите время обучения"></input>
                            </div>
                            <div  class="input__univer">
                                <label  class="auth-label">Стоимость</label>
                                <input class="auth-input" type="number" placeholder="Введите стоимость"></input>
                            </div>
                        </div>
                        <button class="btn_enter1" id="btn-enter2"
                            onclick={()=>{
                                this.Static.university.push({})
                                this.init()
                            }}
                        >
                            Внести данные
                        </button>
                    </div>
                }
            </div>
        </div>
    )

}
