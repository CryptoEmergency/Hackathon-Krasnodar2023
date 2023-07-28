import { Cemjsx } from "cemjs-all"
import platform from '@svg/platform.svg'
import telegram from '@svg/social/telegram.svg'
import youtube from '@svg/social/youtube.svg'
import github from '@svg/social/github.svg'
import email from '@svg/social/email.svg'

export const display = function () {
    return (
        <footer class="footer">
            <div class="footer_inner">
                <span>Powered by <a target="_blank" href="https://crypto-emergency.com/">Crypto Emergency</a></span>
                <div class="footer_socials">
                    <a class="footer_socials_item" target="_blank" href="https://t.me/FrameworkCemJS">
                        <img src={telegram}></img>
                    </a>
                    <a class="footer_socials_item" target="_blank" href="https://www.youtube.com/@CemJS">
                        <img src={youtube}></img>
                    </a>
                    <a class="footer_socials_item" target="_blank" href="https://github.com/CemJS">
                        <img src={github}></img>
                    </a>
                    <a class="footer_socials_item" target="_blank" href="mailto:support@crypto-emergency">
                        <img src={email}></img>
                    </a>
                    <a class="footer_socials_item" target="_blank" href="https://crypto-emergency.com/" >
                        <img src={platform}></img>
                    </a>
                </div>
                <span>© 2023</span>
            </div>
        </footer>
    )

}