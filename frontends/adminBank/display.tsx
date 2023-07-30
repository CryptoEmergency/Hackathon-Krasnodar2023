import { Cemjsx } from "cemjs-all"
import deleteIcon from "@svg/delete_icon.svg"
import key from "@svg/key.svg"

export const display = function () {
    console.log(this.recordsApplications)
    return (
        <div>
            <div class="admin"
                style={this.Static.bank?.credit.length == 0 ? "height: 100vh" : "height: 100%"}
            >
                <div class="admin__container admin__bank">
                    <div class="admin__bank_keys">
                        <img src={key} 
                            onclick={() => {
                                if (this.Static.count > 0) {
                                    this.fn("makeKey", 32)
                                    this.fn("makeKey", 16)
                                    this.Static.count--
                                    this.Static.key.type = "bank"
                                    this.Static.key.idType = this.records[0]._id
                                    let insert = {
                                        insert: this.Static.key
                                    }
                                    // fetch("/api/user/key/set", {
                                    //     method: "POST",
                                    //     headers: {
                                    //         "Content-Type": "application/json",
                                    //     },
                                    //     body: JSON.stringify(insert),
                                    // })
                                    //     .then((response) => response.json())
                                    //     .then((data) => {
                                    //         console.log(data);
                                    //     });

                                    this.init()
                                }
                            }}
                        />
                        {
                            this.Static.key.secretKey && this.Static.key.api
                            ?
                            <div class="keys">
                                <div>
                                    Secret key: {this.Static.key.secretKey}
                                </div>
                                <div>
                                    API: {this.Static.key.api}
                                </div>
                            </div>
                            :
                            null
                        }
                        
                    </div>
                    
                    <h2 style="padding-bottom:20px">Административная панель</h2>
                    <div class="admin__wrapper">
                        <div class="admin__bank_title">
                            <span class="admin__bank_name">Название банка:</span>
                            <span class="admin__bank_name">{this.records[0].name}</span>
                        </div>
                        <button class="admin__bank_add"
                            onclick={ async() => {
                                this.Static.bank.credit.push({})
                                this.init()
                            }}
                        >
                            <span>Добавить кредит</span>
                        </button>
                        {
                            this.Static.bank.credit?.map((item, i) => {
                                return (
                                    <div class="admin__bank_list">
                                        <img src={deleteIcon} 
                                            onclick={() => {
                                                this.Static.bank.credit.splice(i, 1)
                                                this.init()
                                            }}
                                        />
                                        <div  class="admin__bank_input">
                                            <label  class="auth-label">Название кредита</label>
                                            <input class="auth-input" type="text" placeholder="Введите назвнание кредита"
                                                oninput={(e) => {
                                                    this.Static.bank.credit[i].nameCredit = e.target.value
                                                    this.init()
                                                }}
                                            ></input>
                                        </div>
                                        <div  class="admin__bank_input" >
                                            <label  class="auth-label">Сумма кредита</label>
                                            <input class="auth-input" type="text" placeholder="Введите сумму кредита"
                                                oninput={(e) => {
                                                    this.Static.bank.credit[i].amountOfCredit = e.target.value
                                                    this.init()
                                                }}
                                            ></input>
                                        </div>
                                        <div  class="admin__bank_input" >
                                            <label  class="auth-label">Срок кредита (в месяцах)</label>
                                            <input class="auth-input" type="text" placeholder="Введите срок кредита"
                                                oninput={(e) => {
                                                    this.Static.bank.credit[i].creditTerm = e.target.value
                                                    this.init()
                                                }}
                                            ></input>
                                        </div>
                                        <div  class="admin__bank_input" >
                                            <label  class="auth-label">Ежемесячный платёж</label>
                                            <input class="auth-input" type="text" placeholder="Введите ежемесячный платёж"
                                                oninput={(e) => {
                                                    this.Static.bank.credit[i].monthlyPayment = e.target.value
                                                    this.init()
                                                }}
                                            ></input>
                                        </div>
                                        <div  class="admin__bank_input" >
                                            <label  class="auth-label">Процентная ставка</label>
                                            <input class="auth-input" type="text" placeholder="Введите процентную ставку"
                                                oninput={(e) => {
                                                    this.Static.bank.credit[i].interestRate = e.target.value
                                                    this.init()
                                                }}
                                            ></input>
                                        </div>
                                        <div  class="admin__bank_input" >
                                            <label  class="auth-label">Валюта</label>
                                            <input class="auth-input" type="text" placeholder="Введите валюту"
                                                oninput={(e) => {
                                                    this.Static.bank.credit[i].currency = e.target.value
                                                    this.init()
                                                    console.log(this.Static.bank)
                                                }}
                                            ></input>
                                        </div>
                                        <button class="admin__bank_button"
                                            onclick={() => {
                                                let insert = {
                                                    insert: this.Static.bank
                                                }
                                                fetch("/api/user/Bank/set", {
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
                                                
                                                    this.Static.bank = {
                                                        name: "",
                                                        credit: []
                                                    }
                                                this.init()
                                            }}
                                        >
                                            <span>Добавить</span>
                                        </button>
                                    </div>
                                )
                            })
                        }            
                    </div>
                </div>
            </div>
        </div>
    )
}
