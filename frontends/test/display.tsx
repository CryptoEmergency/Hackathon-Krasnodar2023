import { Cemjsx } from "cemjs-all"
import arrowBtn from '@svg/icons/arrowBtn.svg'

export const display = function () {
    return (
        <main class="test page">
            <div class="wrapper">
                <h2 class="section_title">Тест</h2>
                <p class="text">Пройдите тест на профориентацию с одним правильным ответом.</p>
                <div class="test_inner">
                    <div class="test_item">
                        <h5 class="test_item_title">Мне хотелось бы в своей профессиональной деятельности:</h5>
                        <div class="answers">
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer1" type="radio" name="want"></input>
                                        <label for="answer1"></label>
                                    </div>
                                    <span>Общаться с самыми разными людьми</span>
                                </div>
                            </div>
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer2" type="radio" name="want"></input>
                                        <label for="answer2"></label>
                                    </div>
                                    <span>Снимать фильмы, писать книги, рисовать, выступать на сцене и т.д</span>
                                </div>
                            </div>
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer3" type="radio" name="want"></input>
                                        <label for="answer3"></label>
                                    </div>
                                    <span>Заниматься расчетами, вести документацию</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="test_item">
                        <h5 class="test_item_title">В книге или кинофильме меня больше всего привлекает:</h5>
                        <div class="answers">
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer4" type="radio" name="cinema"></input>
                                        <label for="answer4"></label>
                                    </div>
                                    <span>Возможность следить за ходом мыслей автора</span>
                                </div>
                            </div>
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer5" type="radio" name="cinema"></input>
                                        <label for="answer5"></label>
                                    </div>
                                    <span>Художественная форма, мастерство писателя или режиссера</span>
                                </div>
                            </div>
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer6" type="radio" name="cinema"></input>
                                        <label for="answer6"></label>
                                    </div>
                                    <span>Сюжет, действия героев</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="test_item">
                        <h5 class="test_item_title">Меня больше обрадует Нобелевская премия:</h5>
                        <div class="answers">
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer7" type="radio" name="prize"></input>
                                        <label for="answer7"></label>
                                    </div>
                                    <span>За общественную деятельность</span>
                                </div>
                            </div>
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer8" type="radio" name="prize"></input>
                                        <label for="answer8"></label>
                                    </div>
                                    <span>В области наук</span>
                                </div>
                            </div>
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer9" type="radio" name="prize"></input>
                                        <label for="answer9"></label>
                                    </div>
                                    <span>В области искусства</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="test_item">
                        <h5 class="test_item_title">Я скорее соглашусь стать:</h5>
                        <div class="answers">
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer10" type="radio" name="stay"></input>
                                        <label for="answer10"></label>
                                    </div>
                                    <span>Главным механиком</span>
                                </div>
                            </div>
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer11" type="radio" name="stay"></input>
                                        <label for="answer11"></label>
                                    </div>
                                    <span>Начальником экспедиции</span>
                                </div>
                            </div>
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer12" type="radio" name="stay"></input>
                                        <label for="answer12"></label>
                                    </div>
                                    <span>Главным бухгалтером</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="test_item">
                        <h5 class="test_item_title">Будущее людей определяют:</h5>
                        <div class="answers">
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer13" type="radio" name="future"></input>
                                        <label for="answer13"></label>
                                    </div>
                                    <span>Взаимопонимание между людьми</span>
                                </div>
                            </div>
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer14" type="radio" name="future"></input>
                                        <label for="answer14"></label>
                                    </div>
                                    <span>Научные открытия</span>
                                </div>
                            </div>
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer15" type="radio" name="future"></input>
                                        <label for="answer15"></label>
                                    </div>
                                    <span>Развитие производства</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="test_item">
                        <h5 class="test_item_title">Если я стану руководителем, то в первую очередь займусь:</h5>
                        <div class="answers">
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer16" type="radio" name="director"></input>
                                        <label for="answer16"></label>
                                    </div>
                                    <span>Созданием дружного, сплоченного коллектива</span>
                                </div>
                            </div>
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer17" type="radio" name="director"></input>
                                        <label for="answer17"></label>
                                    </div>
                                    <span>Разработкой новых технологий обучения</span>
                                </div>
                            </div>
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer18" type="radio" name="director"></input>
                                        <label for="answer18"></label>
                                    </div>
                                    <span>Работой с документами</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="test_item">
                        <h5 class="test_item_title">На технической выставке меня больше привлечёт:</h5>
                        <div class="answers">
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer21" type="radio" name="technical"></input>
                                        <label for="answer21"></label>
                                    </div>
                                    <span>Внутреннее устройство экспонатов</span>
                                </div>
                            </div>
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer22" type="radio" name="technical"></input>
                                        <label for="answer22"></label>
                                    </div>
                                    <span>Их практическое применение</span>
                                </div>
                            </div>
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer23" type="radio" name="technical"></input>
                                        <label for="answer23"></label>
                                    </div>
                                    <span>Внешний вид экспонатов (цвет, форма)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="test_item">
                        <h5 class="test_item_title">В людях я ценю, прежде всего:</h5>
                        <div class="answers">
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer24" type="radio" name="people"></input>
                                        <label for="answer24"></label>
                                    </div>
                                    <span>Дружелюбие и отзывчивость</span>
                                </div>
                            </div>
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer25" type="radio" name="people"></input>
                                        <label for="answer25"></label>
                                    </div>
                                    <span>Смелость и выносливость</span>
                                </div>
                            </div>
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer26" type="radio" name="people"></input>
                                        <label for="answer26"></label>
                                    </div>
                                    <span>Обязательность и аккуратность</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="test_item">
                        <h5 class="test_item_title">В свободное время мне хотелось бы:</h5>
                        <div class="answers">
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer27" type="radio" name="freedom"></input>
                                        <label for="answer27"></label>
                                    </div>
                                    <span>Ставить различные опыты, эксперименты</span>
                                </div>
                            </div>
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer28" type="radio" name="freedom"></input>
                                        <label for="answer28"></label>
                                    </div>
                                    <span>Писать стихи, сочинять музыку или рисовать</span>
                                </div>
                            </div>
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer29" type="radio" name="freedom"></input>
                                        <label for="answer29"></label>
                                    </div>
                                    <span>Тренироваться</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="test_item">
                        <h5 class="test_item_title">В заграничных поездках меня скорее заинтересует:</h5>
                        <div class="answers">
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer30" type="radio" name="trip"></input>
                                        <label for="answer30"></label>
                                    </div>
                                    <span>Возможность знакомства с историей и культурой другой страны</span>
                                </div>
                            </div>
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer31" type="radio" name="trip"></input>
                                        <label for="answer31"></label>
                                    </div>
                                    <span>Экстремальный туризм (альпинизм, виндсерфинг, горные лыжи)</span>
                                </div>
                            </div>
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer32" type="radio" name="trip"></input>
                                        <label for="answer32"></label>
                                    </div>
                                    <span>Деловое общение</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="test_item">
                        <h5 class="test_item_title">Если бы в моей школе было всего три кружка, я бы выбрал:</h5>
                        <div class="answers">
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer33" type="radio" name="hobby"></input>
                                        <label for="answer33"></label>
                                    </div>
                                    <span>Технический</span>
                                </div>
                            </div>
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer34" type="radio" name="hobby"></input>
                                        <label for="answer34"></label>
                                    </div>
                                    <span>Музыкальный</span>
                                </div>
                            </div>
                            <div class="answers_item">
                                <div class="answers_version">
                                    <div class="radio">
                                        <input id="answer35" type="radio" name="hobby"></input>
                                        <label for="answer35"></label>
                                    </div>
                                    <span>Спортивный</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="f-center">
                    <a href="/vuz/recommendation " onclick={this.Fn.link} class="btn btn_default">
                        <span>Получить ответ</span>
                        <img src={arrowBtn}  ></img>
                    </a>
                </div>
            </div>
        </main>
    )

}