import { Cemjsx } from "cemjs-all"
import logo from '@svg/logo.svg'

export const display = function () {
    return (
        <header class="header">
            <div class="wrapper">
                <div class="header_inner">
                    <a href="/" onclick={this.Fn.link} class="header_logo">
                        <img src={logo}></img>
                    </a>
                    <div class="header_menu">
                        <div
                            class="menu_icon"
                            ref="burger"
                            // onclick={() => {
                            //     this.Static.menuShow = !this.Static.menuShow
                            //     this.Ref.menu.classList.toggle('active')
                            //     this.Ref.burger.classList.toggle('active')
                            //     console.log(this.Static.menuShow);
                            //     this.init();
                            // }}
                        >
                            <span></span>
                        </div>
                        <nav>
                            <ul class="header_menu_list">
                                <li class="header_menu_list_item">Вузы</li>
                                <li class="header_menu_list_item">Банки</li>
                                <li class="header_menu_list_item">Программы</li>
                                <li class="header_menu_list_item">Тесты</li>
                                <li class="header_menu_list_item">Абиетурентам</li>
                                <li class="header_menu_list_item">Статьи</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </header>
        // <header class="header header_container">
        //     <div class="header_inner">
        //         <div class="header_logo">
        //             <a href="/" onclick={this.Fn.link}>
        //                 <img
        //                     class="header_logo-img"
        //                     src={logo}
        //                 ></img>
        //             </a>
        //         </div>
        //         <nav>
        //             <ul class="header_menu">
        //                 <li
        //                     class={["header_menu_item", this.Static.page == "cemjs" ? "header_menu_item-active" : null]}

        //                 ><a href="/about/" onclick={this.Fn.link}>Cem JS</a>
        //                 </li>
        //                 <li
        //                     class={["header_menu_item", this.Static.page == "examples" ? "header_menu_item-active" : null]}
        //                 ><a href="https://ya.ru" onclick={this.Fn.link}>Examples</a></li>
        //                 <li
        //                     class={["header_menu_item", this.Static.page == "contacts" ? "header_menu_item-active" : null]}
        //                     onclick={() => {
        //                         this.Static.page = "contacts"
        //                         this.init()
        //                     }}
        //                 >Contacts</li>
        //             </ul>
        //         </nav>
        //     </div>
        // </header>
    )

}