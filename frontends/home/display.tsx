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
        <main class="home page">
            <div class="wrapper">
                <div class="home_inner">
                    {/* <section class="universities">
                        <h2>Вузы</h2>
                        <div class="universities_wrap">
                            <button class="universities_prev"></button>
                            <button class="universities_next"></button>
                            <div class="universities_carousel">

                            </div>
                        </div>
                    </section>  */}
                    <section class="courses">
                        <h2 class="section_title">Курсы</h2>
                        <div class="courses_wrap">
                            {
                                courses.map((item, index)=>{
                                    return(
                                        <div class={["course", `course_${index}`]}>
                                            <h5 class="course_title">{item.title}</h5>
                                            <span class="course_price">{item.price}</span>
                                            <ul class="course_desc">
                                                <li>{item.direction}</li>
                                                <li>{`${item.lessons} уроков`}</li>
                                                <li>{`${item.tasks} заданий`}</li>
                                            </ul>
                                            <img class="course_img" src={item.img}></img>
                                        </div>
                                    )
                                })
                            }
                            <div class="f-center">
                                <button class="btn btn_default">
                                    <span>Посмотреть все курсы</span>
                                    <img src={arrowBtn}></img>
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )

}