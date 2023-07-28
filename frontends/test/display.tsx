import { Cemjsx } from "cemjs-all"


export const display = function () {
    return (
        <main class="test page">
            <div class="wrapper">
                <h2 class="section_title">Тест</h2>
                <p class="text">Пройдите тест на профориентацию с одним правильным ответом</p>
                <div class="test_inner">
                    <div class="test_item">
                        <h5 class="test_item_title">Мне хотелось бы в своей профессиональной деятельности:</h5>
                        <div class="answers">
                            <div class="answers_item">
                                <div class="radio">
                                    <input id="answer1" type="radio" name="radio"></input>
                                    <label for="answer1"></label>
                                </div>
                                <span>Общаться с самыми разными людьми</span>
                            </div>
                            <div class="answers_item">
                                
                                <span>Снимать фильмы, писать книги, рисовать, выступать на сцене и т.д</span>
                            </div>
                            <div class="answers_item">
                                
                                <span>Заниматься расчетами, вести документацию</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )

}