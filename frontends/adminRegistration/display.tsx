import { Cemjsx } from "cemjs-all"

export const display = function () {
    return (
        <main class="admin__inner">
            <div class="admin_login">
            <form class="auto-form">
                <h2 class="auth-title">
                    Регистрация
                </h2>
                <div class="auth__direction">
                    <div class="auth__direction_wrapper">
                        <label htmlFor="bank">Банк</label>
                        <input id="bank" name="direction" type="radio" />
                    </div>
                    <div class="auth__direction_wrapper">
                        <label htmlFor="university">Университет</label>
                        <input id="university" name="direction" type="radio" />
                    </div>
                </div>
                <div class="input_login" id="auth-label1">
                    <label class="auth-label" >E-mail</label>
                    <input class="auth-input" type="text" placeholder="Введите Ваш E-mail"></input>
                </div>
                <div  class="input_login" >
                    <label  class="auth-label" >Пароль</label>
                    <input class="auth-input" type="password" placeholder="Введите ваш пароль" 
                
                    ></input>
                </div>
                <div  class="input_login" >
                    <label  class="auth-label" >Подтвердите пароль</label>
                    <input class="auth-input" type="password" placeholder="Введите ваш пароль(повторно)" 
                
                    ></input>
                </div>
                <div class="btn_enter" id='auth-label2'>
                    <button class="btn_enter1">
                        Зарегестрироваться
                    </button>
                </div>
            </form>
            </div>
        </main>
    )

}
