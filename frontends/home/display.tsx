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

import arrowPrev from '@svg/icons/arrowPrev.svg'
import arrowNext from '@svg/icons/arrowNext.svg'

import laptop from '@svg/iconEffect/laptop.svg'
import brain from '@svg/iconEffect/brain.svg'

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

const universe = [
    {
        alt: 'Санкт-Петербургский государственный университет промышленных технологий и дизайна',
    },
    {
        alt: 'Московский государственный университет имени М.В. Ломоносова (МГУ)',
    },
    {
        alt: 'Санкт-Петербургский государственный университет (СПбГУ)',
    },
    {
        alt: 'Национальный исследовательский университет "Высшая школа экономики" (НИУ ВШЭ)',
    },
    {
        alt: 'Московский физико-технический институт (МФТИ)',
    },
    {
        alt: ' Московский институт физики и технологии (МИФИ)',
    },
    {
        alt: 'Новосибирский государственный университет (НГУ)',
    },
    {
        alt: 'Уральский федеральный университет (УрФУ)',
    },
    {
        alt: 'Казанский федеральный университет (КФУ)',
    },
    {
        alt: 'Сибирский федеральный университет (СФУ)',
    },
    {
        alt: 'Российский государственный гуманитарный университет (РГГУ)',
    },
    {
        alt: 'Санкт-Петербургский политехнический университет (СПбПУ)',
    },
    {
        alt: 'Московский государственный технический университет имени Н.Э. Баумана (МГТУ им. Баумана)',
    },
    {
        alt: 'Санкт-Петербургский государственный университет аэрокосмического приборостроения (СПбГУАП)',
    },
]

const banks = [
    {
        title: 'Банк ЦЕНТР-ИНВЕСТ',
    },
    {
        title: 'Сбербанк',
    },
    {
        title: 'ВТБ',
    },
    {
        title: 'Газпромбанк',
    },
    {
        title: 'Альфа-Банк',
    },
    {
        title: 'Россельхозбанк',
    },
    {
        title: 'Райффайзенбанк',
    },
    {
        title: 'Банк Москвы',
    },
    {
        title: 'Банк Возрождение',
    },
    {
        title: 'Банк Уралсиб',
    },
    {
        title: 'Банк Открытие',
    },
    {
        title: 'Банк Санкт-Петербург',
    },
    {
        title: 'Банк Зенит',
    },
]

let isDragging = false;
let startX, startScrollLeft;
let x1 = null;
let y1 = null;

export const display = function () {
    return (
        <main class="home">
            
            <section class="main">
                <div class="main_desc">
                    <h1 class="main_title">Учись, подбор лучших условий для обучения!</h1>
                </div>
            </section>
          
            <section class="about">
                <div class="wrapper">
                    <h2 class="section_title">Финансовая онлайн платформа для абитуриентов</h2>
                    <div class="about_inner">
                        <div class="about_item">
                            <div>
                                <img></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="wrapper title_wrap">
                <div class="circle_effect lightPink">
                    <img src={brain}></img>
                </div>
                <h2 class="section_title universeTitle">Высшие учебные заведения России</h2>
            </div>
            <section class="universities">
                <div class="wrapper">
                    <div class="universities_wrap">
                        <button 
                            class="btn universities_prev"
                            onclick={()=>{
                                this.Ref.universeCarousel.scrollLeft -= this.Ref.universeSlide.offsetWidth + 35;
                            }}
                        >
                            <img src={arrowPrev}></img>
                        </button>
                        <button 
                            class="btn universities_next"
                            onclick={()=>{
                                this.Ref.universeCarousel.scrollLeft += this.Ref.universeSlide.offsetWidth + 35;
                            }}
                        >
                            <img src={arrowNext}></img>
                        </button>
                        <div 
                            class="universities_carousel"
                            ref="universeCarousel"
                            onmousedown={(e) => {
                                isDragging = true;
                                startX = e.pageX;
                                startScrollLeft = this.Ref.universeCarousel.scrollLeft;

                            }}
                            onmousemove={(e) => {
                                if (!isDragging) return;
                                e.preventDefault();
                                this.Ref.universeCarousel.scrollLeft = startScrollLeft - (e.pageX - startX);
                            }}
                            onmouseup={(e) => {
                                isDragging = false;
                            }}
                            ontouchstart={(e) => {
                                console.log('=d004e1=', e)
                                const firstTouch = e.touches[0];
                                x1 = firstTouch.clientX;
                                y1 = firstTouch.clientY;
                            }}
                            ontouchmove={(e) => {
                                if (!x1 || !y1) return false;
                                let x2 = e.touches[0].clientX;
                                let y2 = e.touches[0].clientY;
                                let xDiff = x2 - x1;
                                let yDiff = y2 - y1;

                                if (Math.abs(xDiff) > Math.abs(yDiff)) {
                                    if (xDiff > 0) {
                                        this.Ref.universeCarousel.scrollLeft -= this.Ref.universeSlide.offsetWidth + 35;
                                    }
                                    else {
                                        this.Ref.universeCarousel.scrollLeft += this.Ref.universeSlide.offsetWidth + 35;
                                    }
                                }
                                x1 = null;
                                y1 = null;
                            }}
                        >
                            {
                                universe.map((item, index)=>{
                                return(
                                    <div class={["universities_item", `universities_item_${index}`]} ref="universeSlide"></div>
                                )
                                }) 
                            }
                        </div>
                    </div>
                </div>
                
            </section> 
            <section class="banks">
                <div class="wrapper">
                    <div class="banks_inner">
                        {
                            banks.map((item, index)=>{
                                return(
                                    <div class="banks_item btn btn_default">{item.title}</div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <section class="courses">
                <div class="wrapper">
                    <h2 class="section_title">Курсы повышения квалицикации</h2>
                    <div class="courses_wrap">
                        <div class="circle_effect green">
                            <img src={laptop}></img>
                        </div>
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
                            {/* <div class="circle_effect fiolet">
                                <img src={laptop}></img>
                            </div> */}

                            <button class="btn btn_default">
                                <span>Посмотреть все курсы</span>
                                <img src={arrowBtn}></img>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
          
          
        </main>
    )

}