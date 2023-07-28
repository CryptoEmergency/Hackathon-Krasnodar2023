import { Cemjsx } from "cemjs-all"
import logo from '@images/logo/logo.jpg'

export const display = function () {
    return (
        <header class="header header_container">
            <div class="header_inner">
                <div class="header_logo">
                    <a href="/" onclick={this.Fn.link}>
                        <img
                            class="header_logo-img"
                            src={logo}
                        ></img>
                    </a>
                </div>
                <nav>
                    <ul class="header_menu">
                        <li
                            class={["header_menu_item", this.Static.page == "cemjs" ? "header_menu_item-active" : null]}

                        ><a href="/about/" onclick={this.Fn.link}>Cem JS</a>
                        </li>
                        <li
                            class={["header_menu_item", this.Static.page == "examples" ? "header_menu_item-active" : null]}
                        ><a href="https://ya.ru" onclick={this.Fn.link}>Examples</a></li>
                        <li
                            class={["header_menu_item", this.Static.page == "contacts" ? "header_menu_item-active" : null]}
                            onclick={() => {
                                this.Static.page = "contacts"
                                this.init()
                            }}
                        >Contacts</li>
                    </ul>
                </nav>
            </div>
        </header>
    )

}