import { Cemjsx } from "cemjs-all"

const bank=["Сбербанк", "Альфа-банк", "Совкомбанк"]
const university=["Крипто университет", "МГУ", "БНТУ", "Технический университет"]

export const display = function () {
    return (
        <div class="admin">
            <div class="admin__container">
                <h2>Административная панель</h2>
                <div class="c__wrapper">
                    <h4>Банки</h4>
                    <ul class="admin__bank_list">
                        {
                            bank.map((item, index) => {
                                return (
                                    <li class="admin-bank_item">
                                        <span>{item}</span>
                                        <input 
                                            type="checkbox" 
                                            ref={`${index}`}
                                            checked={this.Ref[index]?.checked}
                                            onclick={() => {
                                                console.log(this.Ref[index])
                                            }}
                                        />
                                        <label></label>
                                    </li> 
                                )
                            })
                        }
                    </ul>
                </div>
                <div class="admin__wrapper">
                    <h4>Университеты</h4>
                </div>
            </div>
        </div>
    )

}
