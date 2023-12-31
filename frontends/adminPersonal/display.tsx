import { Cemjsx } from "cemjs-all"

const bank=["Сбербанк", "Альфа-банк", "Совкомбанк"]
const university=["Крипто университет", "МГУ", "БНТУ", "Технический университет"]

export const display = function () {
    return (
        <div class="admin">
            <div class="admin__container">
                <h2>Административная панель</h2>
                <div class="admin__wrapper">
                    <h4 class="title__name">Банки</h4>
                    <ul class="admin-bank_list">
                        {
                            bank.map((item, index) => {
                                return (
                                    <li class="admin-bank_item">
                                        <span class="text__name">{item}</span>
                                        <input 
                                            type="checkbox" 
                                            id={`bank-${index}`}
                                            ref={`${index}`}
                                            checked={this.Ref[index]?.checked}
                                            onclick={() => {
                                                console.log(this.Ref[index])
                                            }}
                                        />
                                        <label for={`bank-${index}`}></label>
                                    </li> 
                                )
                            })
                        }
                    </ul>
                </div>
                <div class="admin__wrapper">
                    <h4 class="title__name">Университеты</h4>
                    <ul class="admin-bank_list">
                        {
                            university.map((item, index) => {
                                return (
                                    <li class="admin-bank_item">
                                        <span class="text__name">{item}</span>
                                        <input 
                                            type="checkbox" 
                                            id={`university-${index}`}
                                            ref={`${index}`}
                                            checked={this.Ref[index]?.checked}
                                            onclick={() => {
                                                console.log(this.Ref[index])
                                            }}
                                        />
                                        <label for={`university-${index}`}></label>
                                    </li> 
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )

}
