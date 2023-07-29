import { Cemjsx } from "cemjs-all"

export const display = function () {
    return (
        <div class="modal-confirm modal-confirm_open">
            <div class="modal-confirm___background"></div>
            <div class="modal-confirm__container">
                <p>Ваш Secret key. Сохраните его.</p>
                <div class="modal-confirm__link">
                    <button
                        onclick={() => {
                            this.clearData()
                        }}
                    >закрыть</button>
                </div>
            </div>
        </div>
    )
}
