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
        info: 'Этот специалист отвечает за внешний вид веб-страниц и соблюдение логики в интерфейсах. Он создаёт новые сайты и занимается обновлением устаревших решений, поэтому профессия веб-дизайнера остаётся одной из самых востребованных в сферах digital и IT.'
    },
    {
        title: 'Интернет-маркетолог',
        price: '215 ₽',
        direction: 'Фото и видео',
        lessons: 19,
        tasks: 14,
        img: internetMarketer, 
        info: 'Интернет-маркетолог — универсальный и высокооплачиваемый специалист. Он владеет всеми каналами продвижения, запускает рекламные кампании и привлекает клиентов для любого бизнеса. Интернет-маркетолог, который специализируется на одном из каналов, ещё более востребован и может вести несколько проектов сразу.'
    },
    {
        title: 'Видеосъмка и видеомонтаж',
        price: '115 ₽',
        direction: 'Фото и видео',
        lessons: 10,
        tasks: 12, 
        img: video,
        info: 'Это универсальный специалист, который умеет работать с видео разных жанров и форматов — от рекламных роликов до репортажей и документальных фильмов. Он занимается стилизацией, цветокоррекцией, визуальными эффектами и даже саунд-дизайном. Хороший режиссёр монтажа нужен на YouTube-проектах, телевидении, в рекламных агентствах и кинокомпаниях. Задача этого курса — помочь вам стать таким специалистом.'
    },
    {
        title: 'Frontend-разработчик',
        price: '119 ₽',
        direction: 'Программирование',
        lessons: 20,
        tasks: 30,
        img: frontend,
        info: 'Фронтендеры разрабатывают то, что мы видим на экранах смартфонов и компьютеров. Делают так, чтобы дизайн-макет стал работающим сервисом или сайтом. Для этого они пишут код на HTML, CSS, JavaScript и TypeScript, а для упрощения работы используют React и другие библиотеки.'
    },
    {
        title: 'Бизнес-аналитик',
        price: '119 ₽',
        direction: 'Управление',
        lessons: 3,
        tasks: 9,
        img: analyst,
        info: 'Аналитик данных извлекает смыслы из цифр и значений: он видит тенденции, прогнозирует события и помогает компании понимать клиентов, оптимизировать процессы и расти. Специалисты, которые умеют полезно использовать данные, нужны рынку. Исследование кадровой компания Ancor за сентябрь 2023 года показало, что 45% российских компаний ищут себе в команду аналитиков.'
    },
    {
        title: 'Правильное питание',
        price: '216 ₽',
        direction: 'Питание',
        lessons: 5,
        tasks: 7,
        img: food,
        info: 'Полноценный отдых, сон и сбалансированное питание помогают чувствовать себя лучше. Еда — базовая потребность, которую наш мозг старается закрывать, не задумываясь. Но для того, чтобы питаться правильно, нужно развивать осознанность и сохранять мотивацию.'
    },
    {
        title: 'Разработчик игр на Unreal Engine',
        price: '99 ₽',
        direction: 'Игры',
        lessons: 2,
        tasks: 5,
        img: game,
        info: 'Геймдизайнер создаёт структуру игры. Он продумывает идею, правила, игровой процесс и решает, какие эмоции вызовет сюжет у игроков. Вы с нуля освоите принципы геймдизайна и научитесь работать с популярными движками Unity и Unreal Engine. Узнаете, как удерживать интерес игроков и монетизировать игры. А мы поможем вам начать карьеру в игровой индустрии.'
    },
    {
        title: 'Детская психология',
        price: '216 ₽',
        direction: 'Психология',
        lessons: 2,
        tasks: 5,
        img: psychology,
        info: 'Детский психолог проводит психодиагностическую работу, помогает детям и подросткам с нарушениями развития, поведенческими и невротическими расстройствами, проблемами в отношениях с родителями и сверстниками. Цель программы профессиональной переподготовки – дать теоретические знания и практические инструменты, научить слушателя применять их в работе детского психолога.'
    },
]


export const display = function () {
    return (
        <main class="courses coursePage">
            <div class="wrapper">
                <h2 class="section_title">Курсы повышения квалицикации</h2>
                <div class="courses_wrap coursePage_wrap">
                    {
                        courses.map((item, index)=>{
                            return(
                                <div class={["course", `course_${index}`]}>
                                    {/* <div class="popup_wrapper">
                                        <div class="item_popup">
                                            <span class="popup_button">+</span>
                                            <div class="popup_content">
                                                <p>{item.info}</p>
                                            </div>
                                        </div>
                                    </div> */}
                                    <h5 class="course_title">{item.title}</h5>
                                    <p class="course_desc">{item.info}</p>
                                    <span class="course_price">{item.price}</span>
                                    <ul class="course_desc">
                                        <li>{item.direction}</li>
                                        <li>{`${item.lessons} уроков`}</li>
                                        <li>{`${item.tasks} заданий`}</li>
                                    </ul>
                                    <a class="btn btn_default btn_circle">
                                        <img src={arrowBtn}></img>
                                    </a>
                                    <img class="course_img" src={item.img}></img>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </main>
    )

}