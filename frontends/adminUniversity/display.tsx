import { Cemjsx } from "cemjs-all"
import deleteIcon from "@svg/delete_icon.svg"

export const display = function () {
    return (
        <div>
            <div class="admin__univer"
                style={this.Static.university?.bankCredit.length == 0 ? "height: 100vh" : "height: 100%"}
            >
                <div class="admin__container">
                    <h2>Административная панель</h2>
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
                            <div>
                                <button class="admin__univer_button"
                                    onclick={() => {
                                        this.Static.university.bankCredit.push({})
                                        console.log(this.Static.university)
                                        this.init()
                                    }}
                                >
                                    <span>Добавить кредит</span>
                                </button>
                                {
                                    this.Static.university.bankCredit?.map((item, i) => {
                                        return (
                                            <div class="admin__univer_credit">
                                                <img src={deleteIcon}
                                                onclick={() => {
                                                    this.Static.university.bankCredit.splice(i, 1)
                                                    this.init()
                                                }}
                                            />
                                                <div class="input__univer">
                                                    <label  class="auth-label">Название банка</label>
                                                    <input class="auth-input" type="text" placeholder="Название банка"
                                                        oninput={(e) => {
                                                            this.Static.university.bankCredit[i].nameBank = e.target.value
                                                            this.init()
                                                        }}
                                                    ></input>
                                                </div>
                                                <div  class="input__univer">
                                                    <label  class="auth-label">Ставка</label>
                                                    <input class="auth-input" type="text" placeholder="Ставка"
                                                        oninput={(e) => {
                                                            this.Static.university.bankCredit[i].percent = e.target.value
                                                            this.init()
                                                        }}
                                                    ></input>
                                                </div>
                                                <div class="input__univer">
                                                    <label  class="auth-label">Ежемесячный платеж</label>
                                                    <input class="auth-input" type="number" placeholder="Ежемесячный платеж"
                                                        oninput={(e) => {
                                                            this.Static.university.bankCredit[i].monthlyPayment = e.target.value
                                                            this.init()
                                                        }}
                                                    ></input>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
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
                </div>
        </div>
    )

}
