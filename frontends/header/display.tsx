import { Cemjsx } from "cemjs-all"
import logo from '@images/logo.jpg'
import search from '@svg/icons/search.svg'
import searchWhite from '@svg/icons/searchWhite.svg'
import close from '@svg/icons/close.svg'

const universe = [
    {
        name: 'Вузы',
    },
    {
        name: 'Бакалавриат',
    },
    {
        name: 'Магистратура',
    },
    {
        name: 'Программы',
    },
    {
        name: 'Специальности',
    },
]



export const display = function () {

    const linkClose = (e) => {
        this.Ref.menu.classList.toggle('active')
        this.Ref.burger.classList.toggle('active')
        this.Fn.link(e)
    }

    return (
        <header class="header">
            <div class="wrapper">
                <div class="header_inner">

                    <a href="/" onclick={this.Fn.link} class="header_logo">
                        <img src={logo}></img>
                    </a>

                    <div
                        class="header_icon"
                        onclick={() => {
                            // this.Static.search = !this.Static.search;
                            // this.init();
                        }}>
                        <img src={search}></img>
                    </div>

                    <div
                        class="menu_icon"
                        ref="burger"
                        onclick={() => {
                            // this.Static.menuShow = !this.Static.menuShow
                            this.Ref.menu.classList.toggle('active')
                            this.Ref.burger.classList.toggle('active')
                            // this.init();
                        }}
                    >
                        <span></span>
                    </div>

                    <div class="header_menu" ref="menu">

                        <nav>
                            <ul class="header_menu_list">
                                <li class="header_menu_list_item">
                                    <a href="/vuz" onclick={(e) => {
                                        linkClose(e)
                                    }}>Вузы</a>
                                </li>
                                <li class="header_menu_list_item">
                                    <a href="/banks" onclick={(e) => {
                                        linkClose(e)
                                    }}>Банки</a>
                                </li>
                                <li class="header_menu_list_item">
                                    <a href="/courses" onclick={(e) => {
                                        linkClose(e)
                                    }}>Повышение квалификации</a>
                                </li>
                                <li class="header_menu_list_item">
                                    <a href="/test" onclick={(e) => {
                                        linkClose(e)
                                    }}>Подобрать вуз</a>
                                </li>
                                <li class="header_menu_list_item">
                                    <a href="/article" onclick={(e) => {
                                        linkClose(e)
                                    }}>Абитуриентам</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>
            <div class={["header_search_box", this.Static.search ? "header_search_box_active" : null]}>
                <div class="wrapper">
                    <div class="header_search_box_inner">
                        <div class="search_box">
                            <input
                                type="search"
                                placeholder="Что Вас интересует ?"
                                class="header_input_search"
                            ></input>
                            <button class="btn search_blue">
                                <img src={searchWhite}></img>
                            </button>
                        </div>
                        <button
                            class="btn btn_close"
                            onclick={() => {
                                this.Static.search = !this.Static.search;
                                this.init();
                            }}
                        >
                            {/* <img src={close}></img> */}
                            X
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )

}