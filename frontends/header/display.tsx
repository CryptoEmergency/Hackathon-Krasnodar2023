import { Cemjsx } from "cemjs-all"
import logo from '@svg/logo.svg'
import search from '@svg/icons/search.svg'
import close from '@svg/icons/close.svg'

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
                                <li class="header_menu_list_item">
                                    <a href="#">Вузы</a>
                                </li>
                                <li class="header_menu_list_item">
                                    <a href="#">Банки</a>
                                </li>
                                <li class="header_menu_list_item">
                                    <a href="#">Программы</a>
                                </li>
                                <li class="header_menu_list_item">
                                    <a href="#">Тесты</a>
                                </li>
                                <li class="header_menu_list_item">
                                    <a href="#">Абиетурентам</a>
                                </li>
                                <li class="header_menu_list_item">
                                    <a href="#">Статьи</a>
                                </li>
                            </ul>
                        </nav>
                        <div class="header_details">
                            <div class="header_icon">
                                <img src={search}></img>
                            </div>
                            <div class="header_education">
                                <span 
                                    class={["header_education_item", 
                                    this.Static.education == 'СПО' ? "header_education_item_active" : null]}
                                    onclick={()=>{
                                        this.Static.education = 'СПО';
                                        this.init();
                                    }}
                                >
                                    СПО
                                </span>
                                <span 
                                    class={["header_education_item", 
                                    this.Static.education == 'Высшее' ? "header_education_item_active" : null]}
                                    onclick={()=>{
                                        this.Static.education = 'Высшее';
                                        this.init();
                                    }}
                                >
                                    Высшее
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header_search_box">
                    <div class="search_box">
                        <div class="dropdown">
                            <span>Выбрать вуз</span>
                            
                        </div>
                        <input type="search">Что Вас интересует ?</input>
                    </div>
                    <button class="btn btn_close">
                        <img src={close}></img>
                    </button>
                </div>
            </div>
        </header>
    )

}