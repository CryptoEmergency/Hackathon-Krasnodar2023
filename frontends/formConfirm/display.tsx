import { Cemjsx } from "cemjs-all"

export const display = function () {
    return (
        <div class="modal-confirm modal-confirm_open">
            <div class="modal-confirm___background"></div>
            <div class="modal-confirm__container">
                <p>Ваши данные переданы сотруднику банка.</p>
                <p class="modal-confirm__text">Мы скоро свяжемся в вами.</p>
                <div class="modal-confirm__link">
                    <a href="/"
                        onclick={this.Fn.link}
                    >Вернуться на главную</a>
                </div>
            </div>
        </div>
    )
}
