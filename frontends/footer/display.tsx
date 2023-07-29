import { Cemjsx } from "cemjs-all"
import telegram from '@svg/socials/telegram.svg'
import insta from '@svg/socials/insta.svg'
import facebook from '@svg/socials/facebook.svg'
import vk from '@svg/socials/vk.svg'
import youtube from '@svg/socials/youtube.svg'

const socials = [
    {
        alt: 'Telegram',
        src: telegram
    },
    {
        alt: 'Vkontakte',
        src: vk
    },
    {
        alt: 'Youtube',
        src: youtube
    },
]

export const display = function () {
    return (
        <footer class="footer">
            <div class="wrapper">
                <div class="footer_inner">
                    <div class="footer_social">
                        <div class="footer_logo">
                            <img></img>
                        </div>
                        <div class="footer_social_wrap">
                            {
                                socials.map((item, index)=>{
                                    return(
                                        <a class="footer_social_item" href="#">
                                            <img src={item.src} alt={item.alt}></img>
                                        </a>
                                    )
                                })
                            }
                        </div>
                        
                    </div>
                    <div class="footer_general">
                        <span class="footer_subtitle">Основное</span>
                        <div class="footer_general_wrap">
                            <a href="#">Вузы</a>
                            <a href="#">Банки</a>
                            <a href="#">Абиетурентам</a>
                        </div>
                    </div>
                    <div class="footer_interesting">
                        <span class="footer_subtitle">Интересно</span>
                        <div class="footer_interesting_wrap">
                            <a>Статьи</a>
                            <a>Тест на профориентацию</a>
                            <a>Программы</a>
                        </div>
                    </div>
                    <div class="footer_contacts">
                        <span class="footer_subtitle">Контакты</span>
                        <div class="footer_contacts_wrap">
                            <a class="footer_contacts_item" href="mailto:example@gmsal.com">
                                {/* <img src={email}></img> */}
                                <span>uchim.support@info.com</span>
                            </a>
                            <a class="footer_contacts_item" href="tel:+74952294280">
                                {/* <img src={phone}></img> */}
                                <span>+74952294280</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )

}