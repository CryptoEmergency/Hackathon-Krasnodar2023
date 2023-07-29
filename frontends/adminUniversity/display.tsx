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
                                <input class="auth-input" type="text" placeholder="Введите назвнание университета"
                                    oninput={(e) => {
                                        this.Static.university.title = e.target.value
                                        this.init()
                                    }}
                                ></input>
                            </div>
                            <div class="input__univer">
                                <label  class="auth-label">Описание</label>
                                <input class="auth-input" type="text" placeholder="Описание"
                                    oninput={(e) => {
                                        this.Static.university.description = e.target.value
                                        this.init()
                                    }}
                                ></input>
                            </div>
                            <div  class="input__univer">
                                <label  class="auth-label">Город</label>
                                <input class="auth-input" type="text" placeholder="Введите назвнание города"
                                    oninput={(e) => {
                                        this.Static.university.city = e.target.value
                                        this.init()
                                    }}
                                ></input>
                            </div>
                            <div class="input__univer">
                                <label  class="auth-label">Стоимость от</label>
                                <input class="auth-input" type="number" placeholder="Стоимость от"
                                    oninput={(e) => {
                                        this.Static.university.priceFrom = e.target.value
                                        this.init()
                                    }}
                                ></input>
                            </div>
                            {/* <div class="input__univer">
                                <label  class="auth-label">Название факультета</label>
                                <input class="auth-input" type="text" placeholder="Введите назвнание факультета"
                                    onclick={(e) => {
                                        this.Static.university.title = e.target.value
                                        this.init()
                                    }}
                                ></input>
                            </div> */}
                        </div>
                        <button class="btn_enter1" id="btn-enter2"
                            onclick={()=>{
                                let insert = {
                                    insert: this.Static.university
                                }

                                fetch("/api/user/institute/set", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify(insert),
                                })
                                    .then((response) => response.json())
                                    .then((data) => {
                                        console.log(data);
                                    });
                                
                                this.Static.university = {}
                                console.log(this.Static.university)

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
                                <input class="auth-input" type="text" placeholder="Введите назвнание специализации"
                                    oninput={(e) => {
                                        this.Static.specialization.name = e.target.value
                                        this.input()
                                    }}
                                ></input>
                            </div>
                            <div  class="input__univer">
                                <label  class="auth-label">Количество мест</label>
                                <input class="auth-input" type="number" placeholder="Введите количество мест"
                                    oninput={(e) => {
                                        this.Static.specialization.numberOfSeats = e.target.value
                                        this.input()
                                    }}
                                ></input>
                            </div>
                            <div  class="input__univer">
                                <label  class="auth-label">Форма обучения</label>
                                <input class="auth-input" type="text" placeholder="Введите форму обучния"
                                    oninput={(e) => {
                                        this.Static.specialization.formOfEducation = e.target.value
                                        this.input()
                                    }}
                                ></input>
                            </div>
                            <div  class="input__univer">
                                <label  class="auth-label">Время обучения</label>
                                <input class="auth-input" type="number" placeholder="Введите время обучения"
                                    oninput={(e) => {
                                        this.Static.specialization.trainingPeriod = e.target.value
                                        this.input()
                                    }}
                                ></input>
                            </div>
                            <div  class="input__univer">
                                <label  class="auth-label">Стоимость</label>
                                <input class="auth-input" type="number" placeholder="Введите стоимость"
                                    oninput={(e) => {
                                        this.Static.specialization.price = e.target.value
                                        this.input()
                                    }}
                                ></input>
                            </div>
                        </div>
                        <button class="btn_enter1" id="btn-enter2"
                            onclick={()=>{
                                let insert = {
                                    insert: this.Static.specialization
                                }

                                fetch("/api/user/specialization/set", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify(insert),
                                })
                                    .then((response) => response.json())
                                    .then((data) => {
                                        console.log(data);
                                    });
                                
                                this.Static.university = {}
                                console.log(this.Static.university)

                                this.init()

                                this.Static.specialization = {}
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
