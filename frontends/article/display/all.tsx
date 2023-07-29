import { Cemjsx } from "cemjs-all"
import arrowBtn from '@svg/icons/arrowBtn.svg'

export default function () {
    return (
        <div class="article page">
            <div class="wrapper">
                <h1>Полезная информация поступающим в вузы</h1>
                <div class="article_wrapper">
                    <div class="article_list">
                        <div class="article_item">
                            <h2>Всё что абитуриенту нужно знать про образовательный кредит</h2>
                            <p> С каждым годом конкуренция на бюджетные места растет, и многие абитуриенты задумываются о коммерции. Здесь в игру вступает образовательный кредит — реальный шанс поступить в желаемый вуз по контракту и самостоятельно оплачивать обучение, не обременяя родителей. В этом материале рассмотрим, почему с годами актуальность кредита на образование только растет, в чем особенности этого займа и какие риски у такого кредита.</p>
                            <div class="button-date">
                                <a class="btn btn_default" href="/article/everything_an_applicant_needs_to_know_about_an_educational_loan" onclick={this.Fn.link}>
                                    <span>Подробнее</span>
                                    <img src={arrowBtn}></img>
                                </a>
                                <div class="publish_date">28.07.2023</div>
                            </div>
                        </div>
                        <div class="article_item">
                            <h2>Если не поступил на бюджет: как взять образовательный кредит?</h2>
                            <p>Образование в престижном вузе – мечта многих абитуриентов. Однако баллов для бесплатного обучения может не хватить. В таком случае можно выбрать университет попроще либо попытать удачу в следующем году. Впрочем, есть еще один вариант – образовательный кредит с господдержкой всего под 3% годовых. Мы разобрались во всех нюансах.
                            </p>
                            <div class="button-date">
                                <a class="btn btn_default" href="/article/if_you_have_not_enrolled_in_a_budget_form_of_education" onclick={this.Fn.link}>
                                    <span>Подробнее</span>
                                    <img src={arrowBtn}></img>
                                </a>
                                <div class="publish_date">28.07.2023</div>
                            </div>
                        </div>
                        <div class="article_item">
                            <h2>Когда будет понятно, поступил я или нет</h2>
                            <p>Зачисление на бюджет по всем формам обучения в 2023 году проходит в одни и те же сроки. Дополнительный прием вузы могут объявить, если у них останутся незаполненные бюджетные места в вузе. Так когда же станет известно, поступили вы или нет?</p>
                            <div class="button-date">
                                <a class="btn btn_default" href="/article/when_it_will_be_clear_whether_I_did_or_not" onclick={this.Fn.link}>
                                    <span>Подробнее</span>
                                    <img src={arrowBtn}></img>
                                </a>
                                <div class="publish_date">28.07.2023</div>
                            </div>
                        </div>
                        <div class="article_item">
                            <h2>В России появилась возможность подачи документов в вузы через Госключ</h2>
                            <p>Это мобильное приложение, которое позволяет получить и использовать электронную подпись для подписания юридически значимых документов, в том числе документов о зачислении или договоров на платное обучение.</p>
                            <div class="button-date">
                                <a class="btn btn_default" href="/article/in_russia,_there_is_an_opportunity_to_submit_documents_to_universities_through_the_state_key" onclick={this.Fn.link}>
                                    <span>Подробнее</span>
                                    <img src={arrowBtn}></img>
                                </a>
                                <div class="publish_date">28.07.2023</div>
                            </div>
                        </div>
                        <div class="article_item">
                            <h2>Новые правила поступления в вузы России в 2023 году</h2>
                            <p>Новый порядок Минобрнауки РФ регулирует вопросы поступления в бакалавриат, специалитет и магистратуру. Документом предусмотрено, что принимать документы на данные программы могут только заведения, имеющие специальные лицензии.</p>
                            <div class="button-date">
                                <a class="btn btn_default" href="/article/new_rules_for_admission_to_russian_universities_in_2023" onclick={this.Fn.link}>
                                    <span>Подробнее</span>
                                    <img src={arrowBtn}></img>
                                </a>
                                <div class="publish_date">28.07.2023</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
