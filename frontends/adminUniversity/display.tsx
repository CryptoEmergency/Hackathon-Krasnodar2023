import { Cemjsx } from "cemjs-all"

export const display = function () {
    return (
        <div class="admin">
            <div class="admin__container">
                <h2>Административная панель</h2>
                <div  class="input_login" id="auth-label1">
                        <label  class="auth-label" >Название университета</label>
                        <input class="auth-input" type="text" placeholder="Введите назвнание университета"></input>
                    </div>
                    <div  class="input_login" id="auth-label1">
                        <label  class="auth-label" >Город</label>
                        <input class="auth-input" type="text" placeholder="Введите назвнание города"></input>
                    </div>
                    <div  class="input_login" id="auth-label2">
                        <label  class="auth-label" >Название факультета</label>
                        <input class="auth-input" type="text" placeholder="Введите назвнание факультета"></input>
                    </div>
                    <div class="btn_enter_3" id='auth-label2'>
                    <button class="btn_enter1"
                    
                    onclick={()=>{
                        this.Static.faculty.push({})
                        this.init()
                    }}

                    
                    >
                        Внести данные
                    </button>
                    {
                        this.Static.faculty.map((index,item)=>{
                            return(
                                <div>
                    <div  class="input_login" id="auth-label1">
                        <label  class="auth-label" >Специализация</label>
                        <input class="auth-input" type="text" placeholder="Введите назвнание специализации"></input>
                    </div>
                    <div  class="input_login" id="auth-label1">
                        <label  class="auth-label" >Количество мест</label>
                        <input class="auth-input" type="number" placeholder="Введите количество мест"></input>
                    </div>
                    <div  class="input_login" id="auth-label1">
                        <label  class="auth-label" >Форма обучения</label>
                        <input class="auth-input" type="text" placeholder="Введите форму обучния"></input>
                    </div>
                    <div  class="input_login" id="auth-label1">
                        <label  class="auth-label" >Время обучения</label>
                        <input class="auth-input" type="number" placeholder="Введите время обучения"></input>
                    </div>
                    <div  class="input_login" id="auth-label1">
                        <label  class="auth-label" >Стоимость</label>
                        <input class="auth-input" type="number" placeholder="Введите стоимость"></input>
                    </div>
                    </div>
                         ) })
                    }
                </div>   
                    {/* <div  class="input_login" id="auth-label1">
                        <label  class="auth-label" >Специализация</label>
                        <input class="auth-input" type="text" placeholder="Введите назвнание специализации"></input>
                    </div>
                    <div  class="input_login" id="auth-label1">
                        <label  class="auth-label" >Количество мест</label>
                        <input class="auth-input" type="number" placeholder="Введите количество мест"></input>
                    </div>
                    <div  class="input_login" id="auth-label1">
                        <label  class="auth-label" >Форма обучения</label>
                        <input class="auth-input" type="text" placeholder="Введите форму обучния"></input>
                    </div>
                    <div  class="input_login" id="auth-label1">
                        <label  class="auth-label" >Время обучения</label>
                        <input class="auth-input" type="number" placeholder="Введите время обучения"></input>
                    </div>
                    <div  class="input_login" id="auth-label1">
                        <label  class="auth-label" >Стоимость</label>
                        <input class="auth-input" type="number" placeholder="Введите стоимость"></input>
                    </div> */}

            </div>
        </div>
    )

}
