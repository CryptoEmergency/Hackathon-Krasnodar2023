import { Cemjsx } from "cemjs-all"

const courses = [
    {
        title: 'Веб дизайнер',
        price: '199 ₽',
        direction: 'Дизайн',
        lessons: 10,
        tasks: 12
    },
    {
        title: 'Интернет-маркетолог',
        price: '215 ₽',
        direction: 'Фото и видео',
        lessons: 19,
        tasks: 14
    },
    {
        title: 'Видеосъмка и видеомонтаж',
        price: '115 ₽',
        direction: 'Дизайн',
        lessons: 10,
        tasks: 12
    },
    {
        title: 'Frontend-разработчик',
        price: '119 ₽',
        direction: 'Программирование',
        lessons: 20,
        tasks: 30
    },
    {
        title: 'Бизнес-аналитик',
        price: '119 ₽',
        direction: 'Управление',
        lessons: 3,
        tasks: 9
    },
    {
        title: 'Правильное питание',
        price: '216 ₽',
        direction: 'Питание',
        lessons: 5,
        tasks: 7
    },
    {
        title: 'Разработчик игр на Unreal Engine',
        price: '99 ₽',
        direction: 'Игры',
        lessons: 2,
        tasks: 5
    },
    {
        title: 'Детская психология',
        price: '216 ₽',
        direction: 'Психология',
        lessons: 2,
        tasks: 5
    },
]

export const display = function () {
    return (
        <main class="home page">
            <div class="wrapper">
                <div class="home_inner">
                    {/* <section class="universities">
                        <h2>Вузы</h2>
                        <div class="universities-wrap">
                            <button class="universities_prev"></button>
                            <button class="universities_next"></button>
                            <div class="universities_carousel">

                            </div>
                        </div>
                    </section>  */}
                    <section class="courses">

                    </section>
                </div>
            </div>
        </main>
    )

}