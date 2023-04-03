import style from './styles/home.module.css';

const partners = [
    {
        id: 1,
        img: '/images/upwork.png'
    },
    {
        id: 2,
        img: '/images/Fiverr.png'
    },
    {
        id: 3,
        img: '/images/EBay.png'
    },
    {
        id: 4,
        img: '/images/Adobe.png'
    },
    {
        id: 5,
        img: '/images/taboola.png'
    }
]

const Home = () => {
    return (
        <div className={`${style.homePage}`}>
            {/* Navbar of Home page */}
            <nav className={style.navbar}>
                <section className={style.navContent}>
                    <div className={style.logo}>
                        <p><span>D</span>Bank</p>
                    </div>

                    <ul className={style.list}>
                        <li><a href='#'>الرئيسية</a></li>
                        <li><a href='#'>شركائنا</a></li>
                        <li><a href='#'>من نحن؟</a></li>
                    </ul>

                    <div className={style.navButtons}>
                        <button className={`btn ${style.btnLogin}`}>تسجيل الدخول</button>
                        <button className={`btn`}>سجل الأن</button>
                    </div>
                </section>
            </nav>

            {/* Hero section */}
            <section className={style.HeroSection}>
                <article className={style.content}>
                    <header>
                        <h1>الخدمات البنكية<br /> في أي وقت وأي مكان</h1>
                    </header>
                    <p>بوابتك لإدارة معاملاتك المالية بطريقة رقمية</p>
                    <button className={`btn`}>سجل الأن</button>
                </article>
                <section className={style.image}>
                    <img src='/images/Credit card-bro.svg' alt='cridet card' />
                </section>
            </section>

            {/* Partners section */}
            <section className={style.partnersSection}>
                <header>
                    <h1><span>D</span>Bank شريكك المعتمد في التجارة الرقمية</h1>
                </header>
                <section className={style.partners}>
                    {
                        partners.map(e => {
                            return (
                                <section className={style.partner} key={e.id}>
                                    <img src={e.img} alt='partner' />
                                </section>
                            )
                        })
                    }
                </section>
                
            </section>
        </div>
    )
}

export default Home;