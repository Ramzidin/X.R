"use script";

let pageBtn = document.querySelectorAll('header a'),
    page = document.querySelector('.page')

const pageHTMLcodes = [
    ``,
    `
        <div class="page_first_info">
            <div class="page_name">
                About
            </div>
            <div class="info">
                <img src="/static/img/gl.jpg" alt="">
                <div class="about_info">
                    <div class="title_info">
                        Learn More About Me
                    </div>
                    <div class="job_flag">
                        Full Stack & Office developer
                        <svg id="polygon" width="100px" height="60px">
                            <polygon points="100,0 0,30 100,60" style="fill: black"/>
                        </svg>
                    </div>
                    <p class="text_first">My full name is Kholmatov Ramzidin son of Todzhidin.
                        I have three years of experience in these fields.
                        The rest of the information <i class="fa-solid fa-angles-down"></i></p>
                    <div class="my_info">
                        <div class="box_my_info">
                            <i class="fa-solid fa-chevron-right"></i>
                            <text>Birthday:</text>
                            <p>28.09.2006</p>
                        </div>
                        <div class="box_my_info">
                            <i class="fa-solid fa-chevron-right"></i>
                            <text>Phone:</text>
                            <p>+998 (99) 227 09 28</p>
                        </div>
                        <div class="box_my_info">
                            <i class="fa-solid fa-chevron-right"></i>
                            <text>City:</text>
                            <p>Tashkent, Uzbekistan</p>
                        </div>
                        <div class="box_my_info">
                            <i class="fa-solid fa-chevron-right"></i>
                            <text>Age:</text>
                            <p>16</p>
                        </div>
                        <div class="box_my_info">
                            <i class="fa-solid fa-chevron-right"></i>
                            <text>Degree:</text>
                            <p>Middle</p>
                        </div>
                        <div class="box_my_info">
                            <i class="fa-solid fa-chevron-right"></i>
                            <text>Email:</text>
                            <p>xolmatovalatoy@gmail.com</p>
                        </div>
                    </div>
                    <p class="text_second">My interests are sports, music, history and of course web programming. I love my job and when given assignments, I try to make them more ideal. I think you will be happy to work with me ) Try it if you don't believe it ; )</p>
                </div>
            </div>
            <div class="skills">
                <div class="small_name">
                    skills
                </div>
                <div class="input_boxs_main">
                    <div class="absolute_box_for_input_boxes"></div>
                    <div class="input_boxs">
                        <div class="range_box">
                            <div class="range_info">
                                <text>Html</text>
                                <text>70%</text>
                            </div>
                            <div class="range">
                                <div class="range_value"></div>
                            </div>
                        </div>
                        <div class="range_box">
                            <div class="range_info">
                                <text>css</text>
                                <text>70%</text>
                            </div>
                            <div class="range">
                                <div class="range_value"></div>
                            </div>
                        </div>
                        <div class="range_box">
                            <div class="range_info">
                                <text>javascript</text>
                                <text>70%</text>
                            </div>
                            <div class="range">
                                <div class="range_value"></div>
                            </div>
                        </div>
                        <div class="range_box">
                            <div class="range_info">
                                <text>python</text>
                                <text>70%</text>
                            </div>
                            <div class="range">
                                <div class="range_value"></div>
                            </div>
                        </div>
                        <div class="range_box">
                            <div class="range_info">
                                <text>word</text>
                                <text>70%</text>
                            </div>
                            <div class="range">
                                <div class="range_value"></div>
                            </div>
                        </div>
                        <div class="range_box">
                            <div class="range_info">
                                <text>Excel & power p.</text>
                                <text>70%</text>
                            </div>
                            <div class="range">
                                <div class="range_value"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="results">
                    <div class="result_box">
                        <div class="result_box_img">
                            <i class="fa-regular fa-smile"></i>
                        </div>
                        <div class="result_box_number">256</div>
                        <div class="result_box_name">
                            Happy Clients
                        </div>
                    </div>
                    <div class="result_box">
                        <div class="result_box_img">
                            <i class="fa-solid fa-diagram-project"></i>
                        </div>
                        <div class="result_box_number">256</div>
                        <div class="result_box_name">
                            Projects
                        </div>
                    </div>
                    <div class="result_box">
                        <div class="result_box_img">
                            <i class="fa-solid fa-headset"></i>
                        </div>
                        <div class="result_box_number">256</div>
                        <div class="result_box_name">
                            Hours Of Support
                        </div>
                    </div>
                    <div class="result_box">
                        <div class="result_box_img">
                            <i class="fa-solid fa-award"></i>
                        </div>
                        <div class="result_box_number">256</div>
                        <div class="result_box_name">
                            Awards
                        </div>
                    </div>
                </div>
                <div class="testimonials">
                    <div class="testimonials_name">testimonials</div>
                    <div class="comment_main_box">
                        <div class="box">
                            <div class="commentary">

                                <p><i class="fa-solid fa-quote-left"></i>Very nice! The way of work is strictly not to stop working, no matter how happy
                                    you are <i class="fa-solid fa-quote-right"></i></p>

                            </div>
                            <div class="user">
                                <div class="user_img"><img src="" alt=""></div>
                                <div class="user_name">
                                    Sara Wilsson
                                </div>
                                <div class="user_job">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="box">
                            <div class="commentary">

                                <p><i class="fa-solid fa-quote-left"></i>Very nice! The way of work is strictly not to stop working, no matter how happy
                                    you are <i class="fa-solid fa-quote-right"></i></p>

                            </div>
                            <div class="user">
                                <div class="user_img"><img src="" alt=""></div>
                                <div class="user_name">
                                    Sara Wilsson
                                </div>
                                <div class="user_job">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="box">
                            <div class="commentary">

                                <p><i class="fa-solid fa-quote-left"></i>Very nice! The way of work is strictly not to stop working, no matter how happy
                                    you are <i class="fa-solid fa-quote-right"></i></p>

                            </div>
                            <div class="user">
                                <div class="user_img"><img src="" alt=""></div>
                                <div class="user_name">
                                    Sara Wilsson
                                </div>
                                <div class="user_job">
                                    Designer
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `,
    `
        <div class="page_first_info">
            <div class="page_name">
                Resume
            </div>
            <div class="resume">
                <div class="title_info">
                    CHECK MY RESUME
                </div>
                <div class="resume_boxes">
                    <div class="resume_box">
                        <div class="resume_box_name">
                            Summary
                        </div>
                        <div class="resume_box_info">
                            <div class="resume_box_line">
                                <div class="line_circle"></div>
                            </div>
                            <div class="flag_and_info">
                                <div class="resume_flag">
                                    <div class="for_space_between">
                                        <div class="flag_circle"></div>
                                        Ramzidin X.
                                    </div>
                                    <svg width="40px" height="40px" style="fill: black">
                                        <polygon points="40,0 0,20 40,40"/>
                                    </svg>
                                </div>
                                <div class="resume_info_box">
                                    <p>A web developer with 1 year of experience in creating modern and trendy,
                                        user-friendly and easy-to-manage websites, and a stable MC Office developer
                                        with user-friendly features.</p>
                                    <div class="summary_info">
                                        <div class="summary_info_box">
                                            <div class="summary_circle"></div>
                                            Bostanlik dist. Yakkatut vil. Khojakurgan st. 191
                                        </div>
                                        <div class="summary_info_box">
                                            <div class="summary_circle"></div>
                                            +998 (99) 227 09 28
                                        </div>
                                        <div class="summary_info_box">
                                            <div class="summary_circle"></div>
                                            xolmatovzalatoy@gmail.com
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="resume_box">
                        <div class="resume_box_name">
                            Education
                        </div>
                        <div class="resume_box_info">
                            <div class="resume_box_line">
                                <div class="line_circle"></div>
                            </div>
                            <div class="flag_and_info">
                                <div class="resume_flag">
                                    <div class="for_space_between">
                                        <div class="flag_circle"></div>
                                        A graduate of the web program. course
                                    </div>
                                    <svg width="40px" height="40px" style="fill: black">
                                        <polygon points="40,0 0,20 40,40"/>
                                    </svg>
                                </div>
                                <div class="resume_info_box">
                                    <div class="education_box">
                                        2022-2023
                                    </div>
                                    <em>Gennis Campus educational center Gazalkent branch </em>
                                    <p>This training course lasted almost 7 months for me and I started working here
                                        after completing the course.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>`,
    `
<div class="page_first_info">
            <div class="page_name">
                Services
            </div>
            <div class="services">
                <div class="title_info">
                    my services
                </div>
                <div class="services_boxes">
                    <div class="services_box">
                    <img src="/static/img/figma.png" alt="" class="figma absolute">
                        <div class="services_box_info">
                            <div class="box_img">
                                <div class="restangle"><i class="fa-brands fa-figma"></i></div>
                            </div>
                            <text>Crating in Figma</text>
                            <p>Create web application templates in Figma and adapt them to any device</p>
                        </div>
                    </div>
                    <div class="services_box">
                        <img src="/static/img/html5.png" alt="" class="html absolute">
                        <img src="/static/img/css3.png" alt="" class="css absolute">
                        <img src="/static/img/javascript.png" alt="" class="javascript absolute">
                        <img src="/static/img/python.png" alt="" class="python absolute">
                        <div class="services_box_info">
                            <div class="box_img">
                                <div class="restangle"><i class="fa-solid fa-code"></i></div>
                            </div>
                            <text>Wep apps</text>
                            <p>Creating, testing and improving web applications</p>
                        </div>
                    </div>
                    <div class="services_box">
                    <img src="/static/img/ms-word.png" alt="" class="word absolute">
                    <img src="/static/img/ms-powerpoint.png" alt="" class="powerpoint absolute">
                    <img src="/static/img/ms-excel.png" alt="" class="excel absolute">
                        <div class="services_box_info">
                            <div class="box_img">
                                <div class="restangle"><img src="/static/img/Microsoft%20365.png" alt=""></div>
                            </div>
                            <text>MS Office creator</text>
                            <p>MS Office ning Word, Excel va PowerPoint dasturlarida turli hujjatlar, jadvallar va
                                taqdimotlar yaratish</p>
                        </div>
                    </div>
                    <div class="services_box">
                    <img src="/static/img/adobe_premiere.png" alt="" class="premiere absolute">
                    <img src="/static/img/adobe_photoshop.png" alt="" class="photoshop absolute">
                        <div class="services_box_info">
                            <div class="box_img">
                                <div class="restangle"><i class="fa-regular fa-image"></i></div>
                            </div>
                            <text>Basic designer</text>
                            <p>Beginner clipmaker and artist. Some video editing and photo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`,
    `
        <div class="page_first_info">
            <div class="page_name">
                Portfolio
            </div>
            <div class="portfolio">
                <div class="title_info">
                    my works
                </div>
                <div class="portfolio_box">
                    <div class="after_portfolio"></div><div class="before_portfolio"></div>
                    <div class="portfolio_filter_box">
                        <div class="filter_btn">
                            All
                        </div>
                        <div class="filter_btn">
                            Web
                        </div>
                        <div class="filter_btn">
                            Video
                        </div>
                    </div>
                    <div class="project_box">
                        <img src="/static/img/gl.jpg" alt="">
                        <div class="project_links">
                            <a href="#" class="site_link"><i class="fa-solid fa-arrow-up-right-from-square"></i> visit site</a>
                            <a href="#" class="view_project">View the project</a>
                            <div class="project_name_none" style="display: none">Instagram</div>
                        </div>
                    </div>
                    <div class="project_box">
                        <img src="/static/img/gl.jpg" alt="">
                        <div class="project_links">
                            <a href="#" class="site_link"><i class="fa-solid fa-arrow-up-right-from-square"></i> visit site</a>
                            <a href="#" class="view_project">View the project</a>
                            <div class="project_name_none" style="display: none">CarHUB</div>
                        </div>
                    </div>
                    <div class="project_box">
                        <img src="/static/img/gl.jpg" alt="">
                        <div class="project_links">
                            <a href="#" class="site_link"><i class="fa-solid fa-arrow-up-right-from-square"></i> visit site</a>
                            <a href="#" class="view_project">View the project</a>
                            <div class="project_name_none" style="display: none">MusicMAX</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    `
<div class="page_first_info">
            <div class="page_name">
                Contact
            </div>
            <div class="contact">
                <div class="title_info">
                    CONTACT ME
                </div>
                <div class="contact_box">
                    <div class="my_links">
                        <div class="link_box">
                            <div class="link_img">
                                <img src="/static/img/pin.png" alt="">
                            </div>
                            <div class="link_info">
                                <text>My address</text>
                                <p>191 Khokhakurgan Street, Toshkent reg.</p>
                            </div>
                        </div>
                        <div class="link_box">
                            <div class="link_img">
                                <img src="/static/img/share.png" alt="">
                            </div>
                            <div class="link_info">
                                <text>Social Profiles</text>
                                <div class="link_icons_box">
                                    <div class="contact_social_box">
                                        <i class="fa-brands fa-telegram"></i>
                                    </div>
                                    <div class="contact_social_box">
                                        <i class="fa-brands fa-telegram"></i>
                                    </div>
                                    <div class="contact_social_box">
                                        <i class="fa-brands fa-telegram"></i>
                                    </div>
                                    <div class="contact_social_box">
                                        <i class="fa-brands fa-telegram"></i>
                                    </div>
                                    <div class="contact_social_box">
                                        <i class="fa-brands fa-telegram"></i>
                                    </div>
                                    <div class="contact_social_box">
                                        <i class="fa-brands fa-telegram"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="link_box">
                            <div class="link_img">
                                <img src="/static/img/envelope.png" alt="">
                            </div>
                            <div class="link_info">
                                <text>Email Me</text>
                                <p>xolmatovzalatoy@gmail.com</p>
                            </div>
                        </div>
                        <div class="link_box">
                            <div class="link_img">
                                <img src="/static/img/phone.png" alt="">
                            </div>
                            <div class="link_info">
                                <text>Call Me</text>
                                <p>+998 (99) 227 09 28</p>
                            </div>
                        </div>
                    </div>
                    <form class="send_message" method="post" action="#">
                        <input type="text" class="input_small" name="name" placeholder="Your Name">
                        <input type="text" class="input_small" name="email" placeholder="Your Email">
                        <input type="text" class="input_big" name="subject" placeholder="Subject">
                        <div class="textarea">
                            <textarea name="message" cols="30" rows="10" placeholder="Message"></textarea>
                            <button class="send_message_btn">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `
]

pageBtn[0].style.color = 'var(--primary-color)'

pageBtn.forEach((a, index) => {
    a.addEventListener('click', () => {
        pageBtn.forEach(link => {
            link.style.color = '#ddd'
        })
        a.style.color = 'var(--primary-color)'
        editStyleInEditPageHome(index)
        if (index === 0) {
            page.innerHTML = `
                <div class="page_sections" style="opacity: 1;"> 
                    <div class="social_profiles">
            <div class="profile_box">
                <a href="https://t.me/star_none" target="_blank"><i class="fa-brands fa-telegram"></i></a>
            </div>
            <div class="profile_box">
                <a href="https://t.me/star_none" target="_blank"><i class="fa-brands fa-facebook"></i></a>
            </div>
            <div class="profile_box">
                <a href="https://t.me/star_none" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            </div>
            <div class="profile_box">
                <a href="https://t.me/star_none" target="_blank"><i class="fa-brands fa-twitter"></i></a>
            </div>
            <div class="profile_box">
                <a href="https://t.me/star_none" target="_blank"><i class="fa-brands fa-github"></i></a>
            </div>
            <div class="profile_box">
                <a href="https://t.me/star_none" target="_blank"><i class="fa-brands fa-google"></i></a>
            </div>
        </div>
                </div>  
            `
        } else {
            editPage(index)
            if (index === 4) {
                let btn = document.querySelectorAll('.filter_btn'),
                    project_pages = document.querySelectorAll('.view_project')
                btn[0].style.background = 'var(--primary-color)'
                btn.forEach(button => {
                    button.addEventListener('click', () => {
                        btn.forEach(l => {
                            l.style.background = '#363636'
                        })
                        let after = document.querySelector('.after_portfolio'),
                            before = document.querySelector('.before_portfolio')
                        after.style.animationPlayState = 'play'
                        before.style.animationPlayState = 'play'
                        button.style.background = 'var(--primary-color)'
                    })
                })
                project_pages.forEach((site, index) => {
                    site.addEventListener('click', () => {
                        let name_site = document.querySelectorAll('.project_name_none')[index]
                        edit_page_for_project(name_site.innerHTML)
                    })
                })
            }
        }
    })
})

function editPage(index) {
    page.innerHTML += `
        <div class="page_sections">
            ${pageHTMLcodes[index]}
        </div>
    `
    let sectionPage1 = document.querySelectorAll('.page_sections')[0],
        sectionPage2 = document.querySelectorAll('.page_sections')[1]
    sectionPage1.style.animationName = 'pageToPageV2'
    if (sectionPage2) {
        sectionPage2.style.animationName = 'pageToPageV1'
        sectionPage1.remove()
    }

    let page2 = document.querySelector('.page')
    page2.classList.remove('height')
}

function edit_page_for_project(name) {
    page.innerHTML += `
            ${project_page}
    `
    let sectionPage1 = document.querySelectorAll('.page_sections')[0],
        sectionPage2 = document.querySelectorAll('.page_sections')[1],
        page1 = document.querySelector('.page')
    sectionPage1.style.animationName = 'pageToPageV2'
    if (sectionPage2) {
        sectionPage2.style.animationName = 'pageToPageV1'
        sectionPage1.remove()
    }
    page1.classList.add('height')
    sectionPage1.style.animationName = 'pageToPageV1'

    let title_name = document.querySelector('.title_info p')
    title_name.innerHTML = name

}

function editStyleInEditPageHome(index) {
    let header = document.querySelector('header'),
        navLogo = document.querySelectorAll('header div')[0],
        plusBox = document.querySelectorAll('header div')[1],
        navLink = document.querySelectorAll('header div')[2]

    if (index === 0) {
        header.className = 'headerA'
        navLogo.className = 'nav_logo100'
        navLink.className = 'nav_linkV1'
        plusBox.className = 'plus_boxB'
    } else {
        header.className = 'headerF'
        navLogo.className = 'nav_logo60'
        navLink.className = 'nav_linkV2'
        plusBox.className = 'plus_boxN'
    }
}

const project_page =
    `
        <div class="page_sections padding">
            <div class="page_first_info padding2">
                <div class="page_name">
                    Portfolio
                </div>
                <div class="portfolio height">
                    <div class="title_info" style="text-transform: none;display: flex;align-items: center;gap: 15px">
                        <p style="font-size: inherit; font-family: inherit; color: inherit;"></p>
                        <a href="#" class="site_link hover_link" style="align-self: flex-start">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i> visit site
                    </a>
                    </div>
                    <div class="resume_boxes">
                        <div class="project_info_box">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/hGIW2fDb0jg"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                        </div>
                        <div class="project_info_box">
                            <p class="codepen" data-height="564" data-default-tab="html,result"
                               data-slug-hash="jOmaBQK"
                               data-user="gayane-gasparyan"
                               style="height: 100%; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
                            <span>See the Pen <a href="https://codepen.io/gayane-gasparyan/pen/jOmaBQK">
                              Magic Card</a> by Gayane Gasparyan (<a href="https://codepen.io/gayane-gasparyan">@gayane-gasparyan</a>)
                              on <a href="https://codepen.io">CodePen</a>.</span>
                            </p>
                            <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="project_page_absolute" style="display: none;">
        </div>
`
