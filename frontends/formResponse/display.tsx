import { Cemjsx } from "cemjs-all"
import sber from '@images/sberbank.png'
import alfa from '@svg/banks/alfa1.png'
import raiffeisen from '@svg/banks/raiff2.png'
import centr_invest from '@svg/banks/centr_invest.svg'
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
                    <div>
                        <span class="modal_span">Банк Центр-инвест</span>
                        <img class="modal__bank_logo" src={centr_invest} />
                        </div>
                            {
                                this.Static.centr.approved
                                ?
                                <button class="modal__bank_approved"
                                    onclick={() => {
                                        this.Static.data.bank = "Банк Центр-инвест"

                                        let insert = {
                                            insert: this.Static.data
                                        }
                                    
                                        fetch("/api/open/applications/set", {
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
                                    
                                        this.clearData()
                                        this.Fn.initOne({
                                            name: "formConfirm"
                                        })
                                    }}
                                >
                                    <span>подтвердить</span>
                                </button>
                                :
                                null
                            }
                            {
                                this.Static.centr.active
                                ?
                                <img class="modal__bank_img" src={this.Static.centr.approved ? agree : rejection} />
                                :
                                <div class="spinner spinner_pending"></div>
                            }
                        </div>
                </div>
                <div class="modal__bank">
                    <div class="modal__bank_item">
                        <span class="modal_span">Сбербанк</span>
                        <img class="modal__bank_logo" src={sber} />
                    </div>
                    {
                        this.Static.sber.approved
                        ?
                        <button class="modal__bank_approved"
                            onclick={() => {
                                this.Static.data.bank = "Сбербанк"
                                
                                let insert = {
                                    insert: this.Static.data
                                }

                                fetch("/api/open/applications/set", {
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

                                this.clearData()
                                this.Fn.initOne({
                                    name: "formConfirm"
                                })
                            }}
                        >
                            <span>подтвердить</span>
                        </button>
                        :
                        null
                    }
                    {
                        this.Static.sber.active
                        ?
                        <img class="modal__bank_img" src={this.Static.sber.approved ? agree : rejection} />
                        :
                        <div class="spinner spinner_pending"></div>
                    }
                </div>

                <div class="modal__bank">
                    <div class="modal__bank_item">
                        <span class="modal_span">Альфа-Банк</span>
                        <img class="modal__bank_logo" src={alfa} />
                    </div>
                    {
                        this.Static.alfa.approved
                        ?
                        <button class="modal__bank_approved"
                            onclick={() => {
                                this.Static.data.bank = "Альфа-Банк"

                                let insert = {
                                    insert: this.Static.data
                                }

                                fetch("/api/open/applications/set", {
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

                                this.clearData()
                                this.Fn.initOne({
                                    name: "formConfirm"
                                })
                            }}
                        >
                            <span>подтвердить</span>
                        </button>
                        :
                        null
                    }
                    {
                        this.Static.alfa.active
                        ?
                        <img class="modal__bank_img" src={this.Static.alfa.approved ? agree : rejection} />
                        :
                        <div class="spinner spinner_pending"></div>
                    }
                    
                </div>

                <div class="modal__bank">
                    <div class="modal__bank_item">
                        <span class="modal_span">Райффайзенбанк</span>
                        <img class="modal__bank_logo" src={raiffeisen} />
                    </div>
                    {
                        this.Static.raiffeisen.approved
                        ?
                        <button class="modal__bank_approved"
                            onclick={() => {
                                this.Static.data.bank = "Райффайзенбанк"
                                
                                let insert = {
                                    insert: this.Static.data
                                }
                                
                                console.log(insert)
                                fetch("/api/open/applications/set", {
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

                                this.clearData()
                                this.Fn.initOne({
                                    name: "formConfirm"
                                })
                            }}
                        >
                            <span>подтвердить</span>
                        </button>
                        :
                        null
                    }
                    {
                        this.Static.raiffeisen.active
                        ?
                        <img class="modal__bank_img" src={this.Static.raiffeisen.approved ? agree : rejection} />
                        :
                        <div class="spinner spinner_pending"></div>
                    }
                </div>
            </div>
        </div>
    )
}
