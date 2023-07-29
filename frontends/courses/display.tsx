import { Cemjsx } from "cemjs-all"
import arrowBtn from '@svg/icons/arrowBtn.svg'
import desing from '@svg/courses/designer.svg'
import game from '@svg/courses/game.svg'
import analyst from '@svg/courses/analyst.svg'
import internetMarketer from '@svg/courses/internetMarketer.svg'
import video from '@svg/courses/video.svg'
import frontend from '@svg/courses/frontend.svg'
import food from '@svg/courses/food.svg'
import psychology from '@svg/courses/psychology.svg'
import laptop from '@svg/iconEffect/laptop.svg'

const courses = [
    {
        title: 'Веб дизайнер',
        price: '199 ₽',
        direction: 'Дизайн',
        lessons: 10,
        tasks: 12,
        img: desing,
    },
    {
        title: 'Интернет-маркетолог',
        price: '215 ₽',
        direction: 'Фото и видео',
        lessons: 19,
        tasks: 14,
        img: internetMarketer, 
    },
    {
        title: 'Видеосъмка и видеомонтаж',
        price: '115 ₽',
        direction: 'Фото и видео',
        lessons: 10,
        tasks: 12, 
        img: video,
    },
    {
        title: 'Frontend-разработчик',
        price: '119 ₽',
        direction: 'Программирование',
        lessons: 20,
        tasks: 30,
        img: frontend,
    },
    {
        title: 'Бизнес-аналитик',
        price: '119 ₽',
        direction: 'Управление',
        lessons: 3,
        tasks: 9,
        img: analyst,
    },
    {
        title: 'Правильное питание',
        price: '216 ₽',
        direction: 'Питание',
        lessons: 5,
        tasks: 7,
        img: food,
    },
    {
        title: 'Разработчик игр на Unreal Engine',
        price: '99 ₽',
        direction: 'Игры',
        lessons: 2,
        tasks: 5,
        img: game,
    },
    {
        title: 'Детская психология',
        price: '216 ₽',
        direction: 'Психология',
        lessons: 2,
        tasks: 5,
        img: psychology
    },
]


export const display = function () {
    return (
        <main class="coursePage">
            <div class="wrapper">
                <h2>Курсы повышения квалификации</h2>
                <div class="coursePage_inner">
                    {
                        courses.map((item, index)=>{
                            return(
                                <div class="coursePage_item">
                                    <h5 class="coursePage_item_title">{item.title}</h5>
                                    <span></span>
                                    <ul>
                                        <li>{item.direction}</li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div> 
                            )
                        })
                    }
                    
                </div>
            </div>
        </main>
    )

}