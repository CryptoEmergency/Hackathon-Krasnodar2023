import { Cemjsx } from "cemjs-all"

export const display = function () {
    return (
        <div class="main__modal">
            <div class="modal__conteiner">
                <div class="title__st">
                    Заявка
                </div>
                <div class="horizontal-line">
                    <div class="horizontal-line_1"></div>
                </div>

                <div class="pole__regis">
                    <label class="auth__label">ФИО</label>
                    <input class="auth__input" type="text" placeholder="Ведите ФИО"
                        oninput={(e) => {
                            this.Static.applications.fullName = e.target.value
                        }}
                    ></input>
                </div>
                <div class="pole__regis">
                    <label class="auth__label">E-mail</label>
                    <div class="error">
                        <span style={this.Static.email?.value.length > 0 && this.Static.email.valid == false ? "display: block" : "display: none"}>Неверный e-mail</span>
                    </div>
                    <input class="auth__input" type="text" placeholder="Ведите e-mail"
                        oninput={(e) => {
                            // console.log("123", this.fn("validateEmail", e.target.value))
                            if (this.fn("validateEmail", e.target.value)) {
                                this.Static.email.valid = true
                            } else {
                                this.Static.email.valid = false
                            }
                            this.Static.applications.mail = e.target.value
                            this.init()
                        }}
                    ></input>
                </div>
                <div class="pole__regis">
                    <label class="auth__label">Телефон</label>
                    <input class="auth__input" type="text" placeholder="Ведите телефон"
                        oninput={(e) => {
                            this.Static.applications.phone = e.target.value
                        }}
                    ></input>
                </div>
                <div class="enter__data_1">
                    <button class="enter__data"
                        onclick={() => {
                            let insert = this.Static.applications
                            this.clearData()
                            this.Fn.initOne({
                                name: "formResponse",
                                data:{data: insert}
                            })
                        }}
                    >
                        Внести данные
                    </button>
                </div>
            </div>
        </div>
    )
}
