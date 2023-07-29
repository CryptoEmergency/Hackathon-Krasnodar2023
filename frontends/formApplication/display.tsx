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
                    <input class="auth__input" type="text" placeholder="Ведите ФИО"></input>
                </div>
                <div class="pole__regis">
                    <label class="auth__label">E-mail</label>
                    <input class="auth__input" type="text" placeholder="Ведите e-mail"></input>
                </div>
                <div class="pole__regis">
                    <label class="auth__label">Телефон</label>
                    <input class="auth__input" type="text" placeholder="Ведите телефон"></input>
                </div>
                <div class="enter__data_1">
                    <button class="enter__data">
                        Внести данные
                    </button>
                </div>               
            </div>
        </div>
    )
}
