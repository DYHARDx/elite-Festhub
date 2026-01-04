// Website Data with all festivals
        const websitesData = [
            // Hindu Festivals
            {
                id: 1,
                title: "Lohri",
                description: "Celebrated on 13 January (Monday) marking the end of winter and arrival of longer days.",
                category: "hindu",
                image: "https://www.abhibus.com/blog/wp-content/uploads/2023/12/Lohri-Festival-2024-Date-History-Celebration-696x385.jpg",
                views: "12.5K",
                link: "#"
            },
            {
                id: 2,
                title: "Makar Sankranti",
                description: "Celebrated on 14 January (Tuesday) marking the transition of the Sun into Capricorn.",
                category: "hindu",
                image: "https://www.zettafarms.com/wp-content/uploads/2024/01/10082065-scaled.jpg",
                views: "15.2K",
                link: "#"
            },
            {
                id: 3,
                title: "Vasant Panchami",
                description: "Celebrated on 2 February (Sunday) dedicated to Goddess Saraswati, the deity of knowledge.",
                category: "hindu",
                image: "https://www.hindustantimes.com/ht-img/img/2024/02/11/550x309/FK0q_CVaIAEd6rA_1674553945278_1707658780708.jpg",
                views: "9.7K",
                link: "#"
            },
            {
                id: 4,
                title: "Maha Shivaratri",
                description: "Celebrated on 26 February (Wednesday) honoring Lord Shiva with night-long prayers.",
                category: "hindu",
                image: "https://www.haridwarrudraksha.com/cdn/shop/articles/Maha_shivratri_banner_98980e61-b6bb-4479-8e44-acc504adc9c3_1100x.png?v=1739877220",
                views: "14.3K",
                link: "#"
            },
            {
                id: 5,
                title: "Holi",
                description: "Festival of colors celebrated on 14 March (Friday) after Holika Dahan on 13 March.",
                category: "hindu",
                image: "https://codegyan.in/articles/images/post/10d4392822b9bf1da90c7f060c6a0157.webp",
                views: "22.1K",
                link: "#"
            },
            {
                id: 6,
                title: "Ugadi/Gudi Padwa",
                description: "New Year celebration on 30 March (Sunday) for many Indian communities.",
                category: "hindu",
                image: "https://c.ndtvimg.com/2022-12/acsj3n4g_gudi-padwa_625x300_26_December_22.jpg?downsize=773:435",
                views: "8.9K",
                link: "#"
            },
            {
                id: 7,
                title: "Ram Navami",
                description: "Celebrated on 6 April (Sunday) marking the birth of Lord Rama.",
                category: "hindu",
                image: "https://s.calendarr.com/upload/9a/60/ram-navami.jpg?auto_optmize=low",
                views: "11.4K",
                link: "#"
            },
            {
                id: 8,
                title: "Hanuman Jayanti",
                description: "Celebrated on 12 April (Saturday) marking the birth of Lord Hanuman.",
                category: "hindu",
                image: "https://images.indianexpress.com/2025/04/Happy-Hanuman-Jayanti-2025-Wishes-.jpg?w=640",
                views: "10.8K",
                link: "#"
            },
            {
                id: 9,
                title: "Vaisakhi/Baisakhi",
                description: "Harvest festival celebrated on 14 April (Monday) marking the new year in many regions.",
                category: "hindu",
                image: "https://cdn.abhibus.com/2024/04/Baisakhi-2024-Date-History-Celebration-696x385.jpg",
                views: "9.5K",
                link: "#"
            },
            {
                id: 10,
                title: "Akshaya Tritiya",
                description: "Celebrated on 30 April (Wednesday) considered auspicious for new beginnings.",
                category: "hindu",
                image: "https://images.goodreturns.in/webp/img/2025/04/akshayatritiya600-1745977432.jpg",
                views: "7.6K",
                link: "#"
            },
            {
                id: 11,
                title: "Buddha Purnima",
                description: "Celebrated on 12 May (Monday) marking the birth of Gautama Buddha.",
                category: "hindu",
                image: "https://i0.wp.com/theunstumbled.com/wp-content/uploads/2025/05/Buddha-Purnima-2025.jpg?w=1200&ssl=1",
                views: "6.3K",
                link: "#"
            },
            {
                id: 12,
                title: "Savitri Vrat",
                description: "Celebrated on 26 May (Monday) by married women for their husbands' longevity.",
                category: "hindu",
                image: "https://janmatnews.com/uploads/images/202505/image_870x_68317a205e784.webp",
                views: "5.8K",
                link: "#"
            },
            {
                id: 13,
                title: "Ratha Yatra",
                description: "Puri's famous chariot festival on 27 June (Friday) honoring Lord Jagannath.",
                category: "hindu",
                image: "https://www.iskconbangalore.org/wp-content/uploads/2022/08/ratha-yatra-2025.jpg",
                views: "8.2K",
                link: "#"
            },
            {
                id: 14,
                title: "Guru Purnima",
                description: "Celebrated on 10 July (Thursday) honoring spiritual and academic teachers.",
                category: "hindu",
                image: "https://www.kreditbee.in/blog/content/images/size/w2000/2024/08/Blog-Image_Aug_22_Guru-Purnima-2024.png",
                views: "7.1K",
                link: "#"
            },
            {
                id: 15,
                title: "Hariyali Teej",
                description: "Celebrated on 27 July (Sunday) by women for marital bliss and happiness.",
                category: "hindu",
                image: "https://images.news18.com/ibnlive/uploads/2021/08/1628613709_hariyali-teej4.png?impolicy=website&width=0&height=0",
                views: "6.9K",
                link: "#"
            },
            {
                id: 16,
                title: "Nag Panchami",
                description: "Celebrated on 29 July (Tuesday) worshiping serpent deities.",
                category: "hindu",
                image: "https://c.ndtvimg.com/2024-08/ragbgh9g_lord-shiva_625x300_05_August_24.jpg?im=FitAndFill,algorithm=dnn,width=773,height=435",
                views: "5.4K",
                link: "#"
            },
            {
                id: 17,
                title: "Varalakshmi Vrat",
                description: "Celebrated on 8 August (Friday) worshiping Goddess Lakshmi for prosperity.",
                category: "hindu",
                image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/varalakshmi-vratham-design-template-6820fc20677c558df821220283534905_screen.jpg?ts=1660231834",
                views: "7.8K",
                link: "#"
            },
            {
                id: 18,
                title: "Raksha Bandhan",
                description: "Celebrated on 9 August (Saturday) honoring the brother-sister bond.",
                category: "hindu",
                image: "https://www.livehindustan.com/lh-img/smart/img/2024/08/16/1200x900/raksha_bandhan_wishes_2024_1723801778427_1723801778673.jpg",
                views: "13.5K",
                link: "#"
            },
            {
                id: 19,
                title: "Hartalika Teej",
                description: "Celebrated on 26 August (Tuesday) by women for marital bliss.",
                category: "hindu",
                image: "https://www.thestatesman.com/wp-content/uploads/2024/09/Hartalika-Teej-2024-jpg.webp",
                views: "6.2K",
                link: "#"
            },
            {
                id: 20,
                title: "Ganesh Chaturthi",
                description: "Celebrated on 27 August (Wednesday) honoring Lord Ganesha's birth.",
                category: "hindu",
                image: "https://img.jagranjosh.com/images/2024/September/592024/ganesh-chaturthi.webp",
                views: "16.3K",
                link: "#"
            },
            {
                id: 21,
                title: "Onam",
                description: "Kerala's harvest festival on 5 September (Friday) celebrating King Mahabali.",
                category: "hindu",
                image: "https://images.news18.com/ibnlive/uploads/2025/01/onam-2025-dates-history-rituals-2025-01-f28d6f8d3d3fb20165983d774bde15df-16x9.jpg?impolicy=website&width=400&height=225",
                views: "9.1K",
                link: "#"
            },
            {
                id: 22,
                title: "Sharad Navratri",
                description: "Nine-night festival beginning 22 September (Monday) worshiping Goddess Durga.",
                category: "hindu",
                image: "https://www.dwsjewellery.com/upload/StaticImages/Sharad%20Navratri%20Parana1638318148242632736.jpg",
                views: "14.7K",
                link: "#"
            },
            {
                id: 23,
                title: "Durga Puja",
                description: "Celebrated 30 September (Tuesday) to 2 October (Thursday) honoring Goddess Durga.",
                category: "hindu",
                image: "https://navi.com/blog/wp-content/uploads/2023/02/Durga-Puja-Holiday.jpg",
                views: "18.2K",
                link: "#"
            },
            {
                id: 24,
                title: "Karva Chauth",
                description: "Celebrated on 10 October (Friday) by married women for their husbands' longevity.",
                category: "hindu",
                image: "https://content.vinaybajrangi.com/img/content/49_Karwa%20chauth.webp",
                views: "12.9K",
                link: "#"
            },
            {
                id: 25,
                title: "Diwali",
                description: "Festival of lights on 20 October (Monday) with Dhanteras on 18 October (Saturday).",
                category: "hindu",
                image: "https://img.etimg.com/thumb/msid-114784619,width-300,height-225,imgsize-1565828,resizemode-75/top-50-diwali-wishes.jpg",
                views: "25.7K",
                link: "#"
            },
            {
                id: 26,
                title: "Govardhan Puja",
                description: "Celebrated on 22 October (Wednesday) honoring Lord Krishna's lifting of Govardhan Hill.",
                category: "hindu",
                image: "https://media.assettype.com/outlookindia/2024-10-14/r2wmo26k/Picture1.png?w=600&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0",
                views: "8.4K",
                link: "#"
            },
            {
                id: 27,
                title: "Bhai Dooj",
                description: "Celebrated on 23 October (Thursday) honoring the brother-sister bond.",
                category: "hindu",
                image: "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2024/11/02/1567774-image-7.jpg?im=Resize=(700,400)",
                views: "9.6K",
                link: "#"
            },
            {
                id: 28,
                title: "Chhath Puja",
                description: "Celebrated on 28 October (Tuesday) worshiping the Sun God for prosperity.",
                category: "hindu",
                image: "https://assets.thehansindia.com/h-upload/2024/11/04/1494430-happychhathpuja.webp",
                views: "11.3K",
                link: "#"
            },
            {
                id: 29,
                title: "Dev Deepavali",
                description: "Celebrated in Varanasi on 5 November (Wednesday) as the festival of lights of the gods.",
                category: "hindu",
                image: "https://assets.ganeshaspeaks.com/wp-content/uploads/2020/11/dev-diwali-21-750.webp",
                views: "7.5K",
                link: "#"
            },

            // Muslim Festivals
            {
                id: 30,
                title: "Eid-ul-Fitr",
                description: "Celebrated around 31 March (Monday) marking the end of Ramadan.",
                category: "muslim",
                image: "https://static.toiimg.com/thumb/msid-119671550,imgsize-33894,width-400,resizemode-4/119671550.jpg",
                views: "18.4K",
                link: "#"
            },
            {
                id: 31,
                title: "Eid-ul-Adha",
                description: "Celebrated around 7 June (Saturday) commemorating Prophet Ibrahim's sacrifice.",
                category: "muslim",
                image: "https://www.financialexpress.com/wp-content/uploads/2025/06/travel-home-decor-6.jpg?w=1024",
                views: "15.9K",
                link: "#"
            },
            {
                id: 32,
                title: "Islamic New Year",
                description: "Approximately late June marking the beginning of the new Islamic calendar year.",
                category: "muslim",
                image: "https://bunny-wp-pullzone-9zb8yvsnmb.b-cdn.net/wp-content/uploads/2025/06/islamic-new-year.png",
                views: "9.2K",
                link: "#"
            },
            {
                id: 33,
                title: "Muharram/Ashura",
                description: "Around 6 July commemorating the martyrdom of Imam Hussain.",
                category: "muslim",
                image: "https://c7.alamy.com/comp/2JCWGG5/islamic-new-year-day-or-1-muharram-vector-background-illustration-of-muslim-family-celebrating-can-be-use-for-greeting-card-or-invitation-2JCWGG5.jpg",
                views: "11.7K",
                link: "#"
            },
            {
                id: 34,
                title: "Milad-un-Nabi",
                description: "Around 5 September (Friday) celebrating the birth of Prophet Muhammad.",
                category: "muslim",
                image: "https://images.indianexpress.com/2023/09/eid-1200-getty-gs.jpg?w=640",
                views: "13.8K",
                link: "#"
            },

            // Christian Festivals
            {
                id: 35,
                title: "Good Friday",
                description: "18 April 2025 (Friday) commemorating the crucifixion of Jesus Christ.",
                category: "christian",
                image: "https://camouflageclicks.com/assets/uploads/blog/10095355.png",
                views: "12.6K",
                link: "#"
            },
            {
                id: 36,
                title: "Easter Sunday",
                description: "20 April 2025 (Sunday) celebrating the resurrection of Jesus Christ.",
                category: "christian",
                image: "https://www.dwsjewellery.com/upload/StaticImages/03-dws638151046426637877.jpg",
                views: "14.3K",
                link: "#"
            },
            {
                id: 37,
                title: "Christmas",
                description: "25 December 2025 (Thursday) celebrating the birth of Jesus Christ.",
                category: "christian",
                image: "https://images.indianexpress.com/2024/02/Christmas-2024-Date-Christmas-2024-will-be-celebrated-on-25th-December-that-is-Wednesday.-Source-Freepik.jpg?w=640",
                views: "21.5K",
                link: "#"
            },

            // Other Festivals
            {
                id: 38,
                title: "Guru Gobind Singh Jayanti",
                description: "6 January (Monday) & 27 December (Saturday) celebrating the birth of the 10th Sikh Guru.",
                category: "other",
                image: "https://images.news18.com/ibnlive/uploads/2025/01/guru-gobind-jayanti-2025-2025-01-192e9181a584f376e83cf1afef55927a-16x9.jpg?impolicy=website&width=400&height=225",
                views: "8.7K",
                link: "#"
            },
            {
                id: 39,
                title: "Mahavir Jayanti",
                description: "11 April (Friday) celebrating the birth of Lord Mahavira, the 24th Tirthankara of Jainism.",
                category: "other",
                image: "https://www.hindustantimes.com/ht-img/img/2024/04/20/550x309/GLnHzsTWoAA6QDg_1713626887839_1713626924444.jpg",
                views: "7.3K",
                link: "#"
            },
            {
                id: 40,
                title: "Parsi New Year",
                description: "15 August (Friday) celebrating the Parsi New Year (Navroz).",
                category: "other",
                image: "https://images.news18.com/ibnlive/uploads/2022/08/parsi-new-year-166053627516x9.jpg?impolicy=website&width=400&height=225",
                views: "6.5K",
                link: "#"
            },
            {
                id: 41,
                title: "Dharoi Adventure Fest",
                description: "Cultural/adventure festival beginning 23 May (Friday) for ~45 days in Gujarat.",
                category: "other",
                image: "https://images.moneycontrol.com/static-mcnews/2025/05/20250523105546_dharoi.png?impolicy=website&width=770&height=431",
                views: "5.9K",
                link: "#"
            }
        ];

        // Events Data with all festivals
        const eventsData = [
            // January
            {
                id: 1,
                day: "13",
                month: "Jan",
                title: "Lohri",
                description: "Celebrated by Punjabi communities marking the end of winter.",
                category: "hindu"
            },
            {
                id: 2,
                day: "14",
                month: "Jan",
                title: "Makar Sankranti",
                description: "Harvest festival celebrated across India with different names.",
                category: "hindu"
            },
            
            // February
            {
                id: 3,
                day: "02",
                month: "Feb",
                title: "Vasant Panchami",
                description: "Dedicated to Goddess Saraswati, marking the preparation for spring.",
                category: "hindu"
            },
            {
                id: 4,
                day: "26",
                month: "Feb",
                title: "Maha Shivaratri",
                description: "Night-long celebration honoring Lord Shiva.",
                category: "hindu"
            },
            
            // March
            {
                id: 5,
                day: "13",
                month: "Mar",
                title: "Holika Dahan",
                description: "Bonfire night before Holi symbolizing victory of good over evil.",
                category: "hindu"
            },
            {
                id: 6,
                day: "14",
                month: "Mar",
                title: "Holi",
                description: "Festival of colors celebrating spring and love.",
                category: "hindu"
            },
            {
                id: 7,
                day: "30",
                month: "Mar",
                title: "Ugadi/Gudi Padwa",
                description: "New Year celebration for many Indian communities.",
                category: "hindu"
            },
            {
                id: 8,
                day: "31",
                month: "Mar",
                title: "Eid-ul-Fitr",
                description: "Marking the end of Ramadan with feasts and celebrations.",
                category: "muslim"
            },
            
            // April
            {
                id: 9,
                day: "06",
                month: "Apr",
                title: "Ram Navami",
                description: "Celebrating the birth of Lord Rama.",
                category: "hindu"
            },
            {
                id: 10,
                day: "11",
                month: "Apr",
                title: "Mahavir Jayanti",
                description: "Birth anniversary of Lord Mahavira in Jainism.",
                category: "other"
            },
            {
                id: 11,
                day: "12",
                month: "Apr",
                title: "Hanuman Jayanti",
                description: "Celebrating the birth of Lord Hanuman.",
                category: "hindu"
            },
            {
                id: 12,
                day: "14",
                month: "Apr",
                title: "Vaisakhi/Baisakhi",
                description: "Harvest festival and Sikh New Year.",
                category: "hindu"
            },
            {
                id: 13,
                day: "18",
                month: "Apr",
                title: "Good Friday",
                description: "Commemorating the crucifixion of Jesus Christ.",
                category: "christian"
            },
            {
                id: 14,
                day: "20",
                month: "Apr",
                title: "Easter Sunday",
                description: "Celebrating the resurrection of Jesus Christ.",
                category: "christian"
            },
            
            // May
            {
                id: 15,
                day: "12",
                month: "May",
                title: "Buddha Purnima",
                description: "Celebrating the birth, enlightenment and death of Buddha.",
                category: "other"
            },
            {
                id: 16,
                day: "23",
                month: "May",
                title: "Dharoi Adventure Fest",
                description: "Cultural and adventure festival in Gujarat (45 days).",
                category: "other"
            },
            {
                id: 17,
                day: "26",
                month: "May",
                title: "Savitri Vrat",
                description: "Observed by married women for their husbands' longevity.",
                category: "hindu"
            },
            
            // June
            {
                id: 18,
                day: "07",
                month: "Jun",
                title: "Eid-ul-Adha",
                description: "Festival of sacrifice commemorating Prophet Ibrahim's devotion.",
                category: "muslim"
            },
            {
                id: 19,
                day: "27",
                month: "Jun",
                title: "Ratha Yatra",
                description: "Puri's famous chariot festival of Lord Jagannath.",
                category: "hindu"
            },
            
            // July
            {
                id: 20,
                day: "06",
                month: "Jul",
                title: "Muharram/Ashura",
                description: "Commemorating the martyrdom of Imam Hussain.",
                category: "muslim"
            },
            {
                id: 21,
                day: "10",
                month: "Jul",
                title: "Guru Purnima",
                description: "Honoring spiritual and academic teachers.",
                category: "hindu"
            },
            {
                id: 22,
                day: "27",
                month: "Jul",
                title: "Hariyali Teej",
                description: "Celebrated by women for marital bliss.",
                category: "hindu"
            },
            {
                id: 23,
                day: "29",
                month: "Jul",
                title: "Nag Panchami",
                description: "Worship of serpent deities across India.",
                category: "hindu"
            },
            
            // August
            {
                id: 24,
                day: "08",
                month: "Aug",
                title: "Varalakshmi Vrat",
                description: "Worshiping Goddess Lakshmi for prosperity.",
                category: "hindu"
            },
            {
                id: 25,
                day: "09",
                month: "Aug",
                title: "Raksha Bandhan",
                description: "Celebrating the brother-sister bond.",
                category: "hindu"
            },
            {
                id: 26,
                day: "15",
                month: "Aug",
                title: "Parsi New Year",
                description: "Navroz celebration by the Parsi community.",
                category: "other"
            },
            {
                id: 27,
                day: "26",
                month: "Aug",
                title: "Hartalika Teej",
                description: "Celebrated by women for marital bliss.",
                category: "hindu"
            },
            {
                id: 28,
                day: "27",
                month: "Aug",
                title: "Ganesh Chaturthi",
                description: "Celebrating the birth of Lord Ganesha.",
                category: "hindu"
            },
            
            // September
            {
                id: 29,
                day: "05",
                month: "Sep",
                title: "Onam",
                description: "Kerala's harvest festival celebrating King Mahabali.",
                category: "hindu"
            },
            {
                id: 30,
                day: "05",
                month: "Sep",
                title: "Milad-un-Nabi",
                description: "Celebrating the birth of Prophet Muhammad.",
                category: "muslim"
            },
            {
                id: 31,
                day: "22",
                month: "Sep",
                title: "Sharad Navratri",
                description: "Nine nights of worshiping Goddess Durga.",
                category: "hindu"
            },
            {
                id: 32,
                day: "30",
                month: "Sep",
                title: "Durga Puja Ashtami",
                description: "Eighth day of Durga Puja celebrations.",
                category: "hindu"
            },
            
            // October
            {
                id: 33,
                day: "01",
                month: "Oct",
                title: "Durga Maha Navami",
                description: "Ninth day of Durga Puja celebrations.",
                category: "hindu"
            },
            {
                id: 34,
                day: "02",
                month: "Oct",
                title: "Dussehra",
                description: "Celebrating the victory of good over evil.",
                category: "hindu"
            },
            {
                id: 35,
                day: "10",
                month: "Oct",
                title: "Karva Chauth",
                description: "Observed by married women for their husbands' longevity.",
                category: "hindu"
            },
            {
                id: 36,
                day: "18",
                month: "Oct",
                title: "Dhanteras",
                description: "First day of Diwali celebrations.",
                category: "hindu"
            },
            {
                id: 37,
                day: "20",
                month: "Oct",
                title: "Diwali",
                description: "Festival of lights celebrating good over evil.",
                category: "hindu"
            },
            {
                id: 38,
                day: "22",
                month: "Oct",
                title: "Govardhan Puja",
                description: "Honoring Lord Krishna's lifting of Govardhan Hill.",
                category: "hindu"
            },
            {
                id: 39,
                day: "23",
                month: "Oct",
                title: "Bhai Dooj",
                description: "Celebrating the brother-sister bond.",
                category: "hindu"
            },
            {
                id: 40,
                day: "28",
                month: "Oct",
                title: "Chhath Puja",
                description: "Worshiping the Sun God for prosperity.",
                category: "hindu"
            },
            
            // November
            {
                id: 41,
                day: "05",
                month: "Nov",
                title: "Dev Deepavali",
                description: "Festival of lights of the gods in Varanasi.",
                category: "hindu"
            },
            
            // December
            {
                id: 42,
                day: "25",
                month: "Dec",
                title: "Christmas",
                description: "Celebrating the birth of Jesus Christ.",
                category: "christian"
            },
            {
                id: 43,
                day: "27",
                month: "Dec",
                title: "Guru Gobind Singh Jayanti",
                description: "Celebrating the birth of the 10th Sikh Guru.",
                category: "other"
            }
        ];

        // DOM Elements
        const websitesGrid = document.getElementById('websitesGrid');
        const eventsSlider = document.getElementById('eventsSlider');
        const categoriesContainer = document.getElementById('categoriesContainer');
        const categoryBtns = document.querySelectorAll('.category-btn');
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        const newsletterForm = document.getElementById('newsletterForm');
        
        // Navigation Elements
        const headerSearchBtn = document.getElementById('headerSearchBtn');
        const favoritesBtn = document.getElementById('favoritesBtn');
        const notificationsBtn = document.getElementById('notificationsBtn');
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');
        const quickNavPills = document.querySelectorAll('.fx-quick-pill');
        const currentPageBreadcrumb = document.getElementById('currentPageBreadcrumb');
        const favoritesCount = document.getElementById('favoritesCount');
        const notificationCount = document.getElementById('notificationCount');
        
        // Notification System Elements
        const notificationSection = document.getElementById('notificationSection');
        const notificationCloseBtn = document.getElementById('notificationCloseBtn');
        const notificationList = document.getElementById('notificationList');
        const notificationSummary = document.getElementById('notificationSummary');
        const markAllReadBtn = document.getElementById('markAllReadBtn');
        const clearAllBtn = document.getElementById('clearAllBtn');
        const olderNotificationsSection = document.getElementById('olderNotificationsSection');
        const olderNotificationsToggle = document.getElementById('olderNotificationsToggle');
        const olderNotificationsContent = document.getElementById('olderNotificationsContent');
        const notificationToast = document.getElementById('notificationToast');
        const toastIcon = document.getElementById('toastIcon');
        const toastTitle = document.getElementById('toastTitle');
        const toastMessage = document.getElementById('toastMessage');
        
        // Modal Elements
        const festivalModal = document.getElementById('festivalModal');
        const modalClose = document.getElementById('modalClose');
        const modalFestivalTitle = document.getElementById('modalFestivalTitle');
        const modalFestivalDate = document.getElementById('modalFestivalDate');
        const modalFestivalDesc = document.getElementById('modalFestivalDesc');
        const modalWishNow = document.getElementById('modalWishNow');
        const modalLeaveReview = document.getElementById('modalLeaveReview');
        
        // Review Modal Elements
        const reviewModal = document.getElementById('reviewModal');
        const reviewModalClose = document.getElementById('reviewModalClose');
        const ratingStars = document.getElementById('ratingStars');
        const reviewText = document.getElementById('reviewText');
        const submitReview = document.getElementById('submitReview');

        // Current filter state
        let currentCategory = 'all';
        let currentSearch = '';
        let currentRating = 0;
        let currentFestival = null;
        let scrollInterval = null;
        let favorites = JSON.parse(localStorage.getItem('festhub-favorites') || '[]');
        let notificationsData = [];
        let isNotificationSectionOpen = false;
        let notificationCheckInterval = null;

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            renderWebsites();
            renderEvents();
            setupEventListeners();
            setupNavigationEventListeners();
            setupNotificationSystem();
            loadNotifications();
            checkTodayFestivals();
            startAutoScroll();
            updateFavoritesCount();
            updateNotificationCount();
            
            // Track page view
            if (typeof gtag !== 'undefined') {
                gtag('event', 'page_view', {
                    'page_title': 'BYAMN Festhub Homepage',
                    'page_location': window.location.href,
                    'page_path': window.location.pathname
                });
            }
        });

        // Render websites based on current filters
        function renderWebsites() {
            websitesGrid.innerHTML = '';
            
            const filteredWebsites = websitesData.filter(website => {
                const matchesCategory = currentCategory === 'all' || website.category === currentCategory;
                const matchesSearch = website.title.toLowerCase().includes(currentSearch.toLowerCase()) || 
                                     website.description.toLowerCase().includes(currentSearch.toLowerCase());
                return matchesCategory && matchesSearch;
            });
            
            if (filteredWebsites.length === 0) {
                websitesGrid.innerHTML = `
                    <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 2rem;">
                        <i class="fas fa-search" style="font-size: 2rem; color: var(--gray); margin-bottom: 1rem;"></i>
                        <h3 style="color: var(--dark); margin-bottom: 0.5rem;">No results found</h3>
                        <p style="color: var(--gray);">Try adjusting your search or filter criteria</p>
                    </div>
                `;
                return;
            }
            
            filteredWebsites.forEach(website => {
                let badgeClass = '';
                let btnClass = 'btn-primary';
                
                switch(website.category) {
                    case 'hindu':
                        badgeClass = 'hindu-badge';
                        btnClass = 'btn-hindu';
                        break;
                    case 'muslim':
                        badgeClass = 'muslim-badge';
                        btnClass = 'btn-muslim';
                        break;
                    case 'christian':
                        badgeClass = 'christian-badge';
                        btnClass = 'btn-christian';
                        break;
                    default:
                        badgeClass = 'other-badge';
                        btnClass = 'btn-other';
                }
                
                const websiteCard = document.createElement('div');
                websiteCard.className = 'website-card';
                websiteCard.innerHTML = `
                    <div class="card-image" style="background-image: url('${website.image}')" aria-label="${website.title}">
                        <span class="card-badge ${badgeClass}">${website.category.charAt(0).toUpperCase() + website.category.slice(1)}</span>
                        <button class="card-favorite ${favorites.find(f => f.id === website.id) ? 'active' : ''}" onclick="toggleFavorite(${website.id})" title="Add to favorites">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">${website.title}</h3>
                        <p class="card-description">${website.description}</p>
                        <div class="card-footer">
                            <a href="${website.link}" class="btn ${btnClass}">
                                Open <i class="fas fa-external-link-alt"></i>
                            </a>
                            <span class="view-count">
                                <i class="fas fa-eye"></i> ${website.views}
                            </span>
                        </div>
                    </div>
                `;
                
                websitesGrid.appendChild(websiteCard);
            });
        }

        // Render events slider
        function renderEvents() {
            eventsSlider.innerHTML = '';
            
            eventsData.forEach(event => {
                let bgColor = 'var(--primary)';
                
                switch(event.category) {
                    case 'hindu':
                        bgColor = 'var(--hindu)';
                        break;
                    case 'muslim':
                        bgColor = 'var(--muslim)';
                        break;
                    case 'christian':
                        bgColor = 'var(--christian)';
                        break;
                    case 'other':
                        bgColor = 'var(--other)';
                }
                
                const eventCard = document.createElement('div');
                eventCard.className = 'event-card';
                eventCard.innerHTML = `
                    <div class="event-date" style="background: ${bgColor}">
                        <div class="event-day">${event.day}</div>
                        <div class="event-month">${event.month}</div>
                    </div>
                    <div class="event-content">
                        <h3 class="event-title">${event.title}</h3>
                        <p class="event-description">${event.description}</p>
                        <a href="#" class="btn" style="background: ${bgColor}; color: white; padding: 0.5rem 1rem; font-size: 0.8rem;">
                            View Wishes <i class="fas fa-chevron-right"></i>
                        </a>
                    </div>
                `;
                
                eventsSlider.appendChild(eventCard);
            });
        }

        // Set up event listeners
        function setupEventListeners() {
            // Category filter buttons
            categoryBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    categoryBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    currentCategory = this.dataset.category;
                    
                    // Track category filter
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'select_content', {
                            'content_type': 'category',
                            'item_id': currentCategory
                        });
                    }
                    
                    renderWebsites();
                });
            });
            
            // Search functionality
            searchBtn.addEventListener('click', performSearch);
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    performSearch();
                }
            });
            
            // Newsletter form
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = this.querySelector('input').value;
                if (email) {
                    // Track newsletter signup
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'generate_lead', {
                            'method': 'newsletter_signup'
                        });
                    }
                    
                    alert(`Thank you for subscribing to BYAMN Festhub!\nYou'll receive updates on upcoming festivals.`);
                    this.querySelector('input').value = '';
                }
            });
            
            // Modal close button
            modalClose.addEventListener('click', closeFestivalModal);
            
            // Close modal when clicking outside
            festivalModal.addEventListener('click', function(e) {
                if (e.target === this) {
                    closeFestivalModal();
                }
            });
            
            // Wish Now button
            modalWishNow.addEventListener('click', function(e) {
                e.preventDefault();
                if (currentFestival) {
                    // Track wish now action
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'select_content', {
                            'content_type': 'festival_wish',
                            'item_id': currentFestival.title
                        });
                    }
                    
                    alert(`Redirecting to ${currentFestival.title} wishes page...`);
                    closeFestivalModal();
                }
            });
            
            // Leave Review button
            modalLeaveReview.addEventListener('click', function() {
                closeFestivalModal();
                openReviewModal();
            });
            
            // Review modal close button
            reviewModalClose.addEventListener('click', closeReviewModal);
            
            // Close review modal when clicking outside
            reviewModal.addEventListener('click', function(e) {
                if (e.target === this) {
                    closeReviewModal();
                }
            });
            
            // Rating stars
            const stars = ratingStars.querySelectorAll('.rating-star');
            stars.forEach(star => {
                star.addEventListener('click', function() {
                    const rating = parseInt(this.dataset.rating);
                    setRating(rating);
                });
                
                star.addEventListener('mouseover', function() {
                    const rating = parseInt(this.dataset.rating);
                    highlightStars(rating);
                });
                
                star.addEventListener('mouseout', function() {
                    highlightStars(currentRating);
                });
            });
            
            // Submit review
            submitReview.addEventListener('click', function() {
                if (currentRating === 0) {
                    alert('Please select a rating');
                    return;
                }
                
                const review = reviewText.value.trim();
                if (!review) {
                    alert('Please write your review');
                    return;
                }
                
                // In a real app, you would send this to your backend
                console.log('Review submitted:', {
                    festival: currentFestival.title,
                    rating: currentRating,
                    review: review
                });
                
                // Track review submission
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'rate_content', {
                        'content_type': 'festival',
                        'item_id': currentFestival.title,
                        'rating': currentRating
                    });
                }
                
                alert('Thank you for your review!');
                closeReviewModal();
            });
        }
        
        // Setup navigation event listeners
        function setupNavigationEventListeners() {
            // Header search button
            headerSearchBtn.addEventListener('click', function() {
                searchInput.focus();
                searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
            
            // Quick navigation pills
            quickNavPills.forEach(pill => {
                pill.addEventListener('click', function(e) {
                    e.preventDefault();
                    const category = this.dataset.category;
                    
                    // Update active category
                    categoryBtns.forEach(btn => {
                        btn.classList.remove('active');
                        if (btn.dataset.category === category) {
                            btn.classList.add('active');
                        }
                    });
                    
                    currentCategory = category;
                    updateBreadcrumb(this.textContent);
                    renderWebsites();
                    
                    // Scroll to categories section
                    document.querySelector('.categories-section').scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                });
            });
            
            // Favorites button
            favoritesBtn.addEventListener('click', function() {
                showFavoritesModal();
            });
            
            // Notifications button
            notificationsBtn.addEventListener('click', function() {
                toggleNotificationSection();
            });
            
            // Menu toggle
            menuToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                navMenu.classList.toggle('show');
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!navMenu.contains(e.target) && e.target !== menuToggle) {
                    navMenu.classList.remove('show');
                }
            });
            
            // Menu item clicks
            document.querySelectorAll('.fx-nav-item').forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    const href = this.getAttribute('href');
                    
                    if (href === '#categories') {
                        document.querySelector('.categories-section').scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'start' 
                        });
                    } else if (href === '#calendar') {
                        document.querySelector('.events-section').scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'start' 
                        });
                    } else if (href === '#trending') {
                        currentCategory = 'all';
                        currentSearch = '';
                        searchInput.value = '';
                        updateBreadcrumb('Trending');
                        renderWebsites();
                    } else if (href === 'file.html') {
                        window.open('file.html', '_blank');
                    } else {
                        // Handle other navigation items
                        console.log('Navigating to:', href);
                        alert(`Navigating to ${this.textContent.trim()}`);
                    }
                    
                    navMenu.classList.remove('show');
                });
            });
        }
        
        // Update breadcrumb
        function updateBreadcrumb(pageName) {
            currentPageBreadcrumb.textContent = pageName;
        }
        
        // Update favorites count
        function updateFavoritesCount() {
            favoritesCount.textContent = favorites.length;
            if (favorites.length === 0) {
                favoritesCount.style.display = 'none';
            } else {
                favoritesCount.style.display = 'flex';
            }
        }
        
        // Update notification count
        function updateNotificationCount() {
            const unreadCount = notificationsData.filter(n => !n.read).length;
            notificationCount.textContent = unreadCount;
            if (unreadCount === 0) {
                notificationCount.style.display = 'none';
            } else {
                notificationCount.style.display = 'flex';
            }
        }
        
        // Setup notification system event listeners
        function setupNotificationSystem() {
            // Close notification section
            notificationCloseBtn.addEventListener('click', function() {
                closeNotificationSection();
            });
            
            // Mark all as read
            markAllReadBtn.addEventListener('click', function() {
                markAllNotificationsAsRead();
            });
            
            // Clear all notifications
            clearAllBtn.addEventListener('click', function() {
                if (confirm('Are you sure you want to clear all notifications?')) {
                    clearAllNotifications();
                }
            });
            
            // Toggle older notifications
            olderNotificationsToggle.addEventListener('click', function() {
                toggleOlderNotifications();
            });
            
            // Close notification section when clicking outside
            document.addEventListener('click', function(e) {
                if (isNotificationSectionOpen && 
                    !notificationSection.contains(e.target) && 
                    e.target !== notificationsBtn) {
                    closeNotificationSection();
                }
            });
        }
        
        // Load notifications from JSON file
        async function loadNotifications() {
            try {
                const response = await fetch('./notifications.json');
                if (response.ok) {
                    notificationsData = await response.json();
                    // Load read status from localStorage
                    const readNotifications = JSON.parse(localStorage.getItem('festhub-read-notifications') || '[]');
                    notificationsData.forEach(notification => {
                        if (readNotifications.includes(notification.id)) {
                            notification.read = true;
                        }
                    });
                    updateNotificationCount();
                    renderNotifications();
                    
                    // Start checking for new notifications
                    startNotificationChecking();
                } else {
                    console.warn('Failed to load notifications');
                }
            } catch (error) {
                console.error('Error loading notifications:', error);
                // Use fallback notifications
                notificationsData = [
                    {
                        id: 1,
                        title: '🎄 Welcome to BYAMN Festhub!',
                        message: 'Explore our amazing collection of festival wishes and greeting cards.',
                        type: 'info',
                        timestamp: new Date().toISOString(),
                        link: '#categories',
                        read: false
                    }
                ];
                updateNotificationCount();
                renderNotifications();
            }
        }
        
        // Toggle notification section visibility
        function toggleNotificationSection() {
            if (isNotificationSectionOpen) {
                closeNotificationSection();
            } else {
                openNotificationSection();
            }
        }
        
        // Open notification section
        function openNotificationSection() {
            notificationSection.classList.add('show');
            isNotificationSectionOpen = true;
            renderNotifications();
        }
        
        // Close notification section
        function closeNotificationSection() {
            notificationSection.classList.remove('show');
            isNotificationSectionOpen = false;
        }
        
        // Render notifications in the list
        function renderNotifications() {
            if (!notificationsData || notificationsData.length === 0) {
                notificationList.innerHTML = `
                    <div class="notification-empty">
                        <i class="fas fa-bell-slash"></i>
                        <p>No notifications yet</p>
                    </div>
                `;
                notificationSummary.innerHTML = 'No notifications';
                olderNotificationsSection.style.display = 'none';
                return;
            }
            
            // Sort notifications by timestamp (most recent first)
            const sortedNotifications = [...notificationsData].sort((a, b) => 
                new Date(b.timestamp) - new Date(a.timestamp)
            );
            
            // Split into recent and older notifications
            const recentNotifications = sortedNotifications.slice(0, 5);
            const olderNotifications = sortedNotifications.slice(5);
            
            // Update summary
            const unreadCount = notificationsData.filter(n => !n.read).length;
            const totalCount = notificationsData.length;
            notificationSummary.innerHTML = `${unreadCount} unread of ${totalCount} total notifications`;
            
            // Render recent notifications
            notificationList.innerHTML = '';
            recentNotifications.forEach(notification => {
                const notificationElement = createNotificationElement(notification);
                notificationList.appendChild(notificationElement);
            });
            
            // Handle older notifications section
            if (olderNotifications.length > 0) {
                olderNotificationsSection.style.display = 'block';
                olderNotificationsToggle.querySelector('span').textContent = 
                    `Show ${olderNotifications.length} older notifications`;
                
                // Render older notifications in collapsed content
                olderNotificationsContent.innerHTML = '';
                olderNotifications.forEach(notification => {
                    const notificationElement = createNotificationElement(notification);
                    olderNotificationsContent.appendChild(notificationElement);
                });
            } else {
                olderNotificationsSection.style.display = 'none';
            }
        }
        
        // Create a notification DOM element
        function createNotificationElement(notification) {
            const notificationDiv = document.createElement('div');
            notificationDiv.className = `notification-item ${!notification.read ? 'unread' : ''}`;
            notificationDiv.dataset.notificationId = notification.id;
            
            const timeAgo = getTimeAgo(notification.timestamp);
            const typeIcon = getNotificationTypeIcon(notification.type);
            
            notificationDiv.innerHTML = `
                <div class="notification-content">
                    ${notification.image ? `<img src="${notification.image}" alt="Notification image" class="notification-image">` : ''}
                    <h4 class="notification-item-title">${notification.title}</h4>
                    <p class="notification-item-message">${notification.message}</p>
                    ${notification.link ? `<a href="${notification.link}" class="notification-link" onclick="handleNotificationLink(event, '${notification.link}', ${notification.id})">
                        <i class="fas fa-external-link-alt"></i> View Details
                    </a>` : ''}
                    <div class="notification-meta">
                        <span class="notification-time">${timeAgo}</span>
                        <span class="notification-type-badge notification-type-${notification.type}">
                            ${typeIcon} ${notification.type}
                        </span>
                    </div>
                    <div class="notification-actions-item">
                        ${!notification.read ? 
                            `<button class="notification-btn notification-btn-read" onclick="markNotificationAsRead(${notification.id})">
                                <i class="fas fa-check"></i> Mark as read
                            </button>` : ''}
                        <button class="notification-btn notification-btn-dismiss" onclick="dismissNotification(${notification.id})">
                            <i class="fas fa-times"></i> Dismiss
                        </button>
                    </div>
                </div>
            `;
            
            // Add click handler to mark as read when clicked (but not on links or buttons)
            notificationDiv.addEventListener('click', function(e) {
                if (!e.target.closest('.notification-actions-item') && 
                    !e.target.closest('.notification-link') && 
                    !notification.read) {
                    markNotificationAsRead(notification.id);
                }
            });
            
            return notificationDiv;
        }
        
        // Get notification type icon
        function getNotificationTypeIcon(type) {
            const icons = {
                'info': 'ℹ️',
                'success': '✅',
                'warning': '⚠️',
                'error': '❌'
            };
            return icons[type] || 'ℹ️';
        }
        
        // Get human-readable time ago
        function getTimeAgo(timestamp) {
            const now = new Date();
            const notificationTime = new Date(timestamp);
            const diffInSeconds = Math.floor((now - notificationTime) / 1000);
            
            if (diffInSeconds < 60) {
                return 'Just now';
            } else if (diffInSeconds < 3600) {
                const minutes = Math.floor(diffInSeconds / 60);
                return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
            } else if (diffInSeconds < 86400) {
                const hours = Math.floor(diffInSeconds / 3600);
                return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
            } else if (diffInSeconds < 604800) {
                const days = Math.floor(diffInSeconds / 86400);
                return `${days} day${days !== 1 ? 's' : ''} ago`;
            } else {
                return notificationTime.toLocaleDateString();
            }
        }
        
        // Mark a specific notification as read
        function markNotificationAsRead(notificationId) {
            const notification = notificationsData.find(n => n.id === notificationId);
            if (notification && !notification.read) {
                notification.read = true;
                saveReadNotifications();
                updateNotificationCount();
                renderNotifications();
            }
        }
        
        // Mark all notifications as read
        function markAllNotificationsAsRead() {
            notificationsData.forEach(notification => {
                notification.read = true;
            });
            saveReadNotifications();
            updateNotificationCount();
            renderNotifications();
        }
        
        // Dismiss a specific notification
        function dismissNotification(notificationId) {
            notificationsData = notificationsData.filter(n => n.id !== notificationId);
            updateNotificationCount();
            renderNotifications();
            
            // Also remove from read notifications localStorage
            const readNotifications = JSON.parse(localStorage.getItem('festhub-read-notifications') || '[]');
            const updatedReadNotifications = readNotifications.filter(id => id !== notificationId);
            localStorage.setItem('festhub-read-notifications', JSON.stringify(updatedReadNotifications));
        }
        
        // Clear all notifications
        function clearAllNotifications() {
            notificationsData = [];
            updateNotificationCount();
            renderNotifications();
            localStorage.removeItem('festhub-read-notifications');
        }
        
        // Toggle older notifications visibility
        function toggleOlderNotifications() {
            const content = olderNotificationsContent;
            const icon = olderNotificationsToggle.querySelector('i');
            
            if (content.classList.contains('expanded')) {
                content.classList.remove('expanded');
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
                olderNotificationsToggle.querySelector('span').textContent = 
                    olderNotificationsToggle.querySelector('span').textContent.replace('Hide', 'Show');
            } else {
                content.classList.add('expanded');
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
                olderNotificationsToggle.querySelector('span').textContent = 
                    olderNotificationsToggle.querySelector('span').textContent.replace('Show', 'Hide');
            }
        }
        
        // Save read notifications to localStorage
        function saveReadNotifications() {
            const readNotifications = notificationsData
                .filter(n => n.read)
                .map(n => n.id);
            localStorage.setItem('festhub-read-notifications', JSON.stringify(readNotifications));
        }
        
        // Show notification toast
        function showNotificationToast(notification) {
            toastTitle.textContent = notification.title;
            toastMessage.textContent = notification.message;
            
            // Set icon based on type
            const iconElement = toastIcon.querySelector('i');
            toastIcon.className = `toast-icon ${notification.type}`;
            
            const iconMap = {
                'info': 'fas fa-info-circle',
                'success': 'fas fa-check-circle',
                'warning': 'fas fa-exclamation-triangle',
                'error': 'fas fa-exclamation-circle'
            };
            
            iconElement.className = iconMap[notification.type] || 'fas fa-bell';
            
            // Show toast
            notificationToast.classList.add('show');
            
            // Hide toast after 5 seconds
            setTimeout(() => {
                notificationToast.classList.remove('show');
            }, 5000);
        }
        
        // Start checking for new notifications (simulate real-time updates)
        function startNotificationChecking() {
            // Check every 30 seconds for new notifications
            notificationCheckInterval = setInterval(async () => {
                try {
                    const response = await fetch('./notifications.json');
                    if (response.ok) {
                        const freshNotifications = await response.json();
                        
                        // Check for new notifications
                        const currentIds = notificationsData.map(n => n.id);
                        const newNotifications = freshNotifications.filter(n => !currentIds.includes(n.id));
                        
                        if (newNotifications.length > 0) {
                            // Add new notifications
                            notificationsData = [...newNotifications, ...notificationsData];
                            updateNotificationCount();
                            
                            // Show toast for the most recent new notification
                            if (newNotifications.length > 0) {
                                const latestNotification = newNotifications.sort((a, b) => 
                                    new Date(b.timestamp) - new Date(a.timestamp)
                                )[0];
                                showNotificationToast(latestNotification);
                            }
                            
                            // Re-render if notification section is open
                            if (isNotificationSectionOpen) {
                                renderNotifications();
                            }
                        }
                    }
                } catch (error) {
                    console.error('Error checking for new notifications:', error);
                }
            }, 30000); // Check every 30 seconds
        }
        
        // Make functions globally accessible
        window.markNotificationAsRead = markNotificationAsRead;
        window.dismissNotification = dismissNotification;
        window.handleNotificationLink = handleNotificationLink;
        
        // Handle notification link clicks
        function handleNotificationLink(event, link, notificationId) {
            event.preventDefault();
            event.stopPropagation();
            
            // Mark notification as read when link is clicked
            markNotificationAsRead(notificationId);
            
            // Handle different types of links
            if (link.startsWith('#')) {
                // Internal anchor link
                const element = document.querySelector(link);
                if (element) {
                    closeNotificationSection();
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                    console.warn('Anchor element not found:', link);
                }
            } else if (link.startsWith('http://') || link.startsWith('https://')) {
                // External link
                window.open(link, '_blank');
                closeNotificationSection();
            } else {
                // Internal page link
                closeNotificationSection();
                window.location.href = link;
            }
        }
        
        // Show favorites modal
        function showFavoritesModal() {
            if (favorites.length === 0) {
                alert('You haven\'t added any festivals to favorites yet!\n\nClick the heart icon on any festival card to add it to your favorites.');
                return;
            }
            
            const favoriteItems = favorites.map(fav => `• ${fav.title}`).join('\n');
            alert(`Your Favorite Festivals:\n\n${favoriteItems}`);
        }

        
        // Add to favorites
        function addToFavorites(festival) {
            if (!favorites.find(f => f.id === festival.id)) {
                favorites.push(festival);
                localStorage.setItem('festhub-favorites', JSON.stringify(favorites));
                updateFavoritesCount();
                return true;
            }
            return false;
        }
        
        // Remove from favorites
        function removeFromFavorites(festivalId) {
            favorites = favorites.filter(f => f.id !== festivalId);
            localStorage.setItem('festhub-favorites', JSON.stringify(favorites));
            updateFavoritesCount();
        }
        
        // Global toggle favorite function (called from card onclick)
        function toggleFavorite(festivalId) {
            const festival = websitesData.find(w => w.id === festivalId);
            if (!festival) return;
            
            const favoriteBtn = document.querySelector(`[onclick="toggleFavorite(${festivalId})"]`);
            
            if (favorites.find(f => f.id === festivalId)) {
                removeFromFavorites(festivalId);
                favoriteBtn.classList.remove('active');
                favoriteBtn.title = 'Add to favorites';
            } else {
                addToFavorites(festival);
                favoriteBtn.classList.add('active');
                favoriteBtn.title = 'Remove from favorites';
            }
        }
        
        // Make toggleFavorite globally accessible
        window.toggleFavorite = toggleFavorite;

        // Perform search
        function performSearch() {
            currentSearch = searchInput.value.trim();
            
            // Track search queries
            if (typeof gtag !== 'undefined' && currentSearch) {
                gtag('event', 'search', {
                    'search_term': currentSearch
                });
            }
            
            renderWebsites();
        }
        
        // Check for festivals happening today
        function checkTodayFestivals() {
            const today = new Date();
            const currentMonth = today.toLocaleString('default', { month: 'short' });
            const currentDay = today.getDate().toString();
            
            const todaysFestivals = eventsData.filter(event => {
                return event.day === currentDay && event.month === currentMonth;
            });
            
            if (todaysFestivals.length > 0) {
                // Show a popup for the first festival happening today
                showFestivalModal(todaysFestivals[0]);
            }
        }
        
        // Show festival modal
        function showFestivalModal(festival) {
            currentFestival = festival;
            
            // Set modal content
            modalFestivalTitle.textContent = festival.title;
            modalFestivalDate.textContent = `${festival.day} ${festival.month} 2025`;
            modalFestivalDesc.textContent = festival.description;
            
            // Set modal color based on category
            let bgColor = 'var(--primary)';
            switch(festival.category) {
                case 'hindu':
                    bgColor = 'var(--hindu)';
                    break;
                case 'muslim':
                    bgColor = 'var(--muslim)';
                    break;
                case 'christian':
                    bgColor = 'var(--christian)';
                    break;
                case 'other':
                    bgColor = 'var(--other)';
            }
            
            modalFestivalDate.style.background = bgColor;
            modalWishNow.style.background = bgColor;
            
            // Show modal
            festivalModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        // Close festival modal
        function closeFestivalModal() {
            festivalModal.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Open review modal
        function openReviewModal() {
            reviewModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        // Close review modal
        function closeReviewModal() {
            reviewModal.classList.remove('active');
            document.body.style.overflow = '';
            resetReviewForm();
        }
        
        // Set rating
        function setRating(rating) {
            currentRating = rating;
            highlightStars(rating);
        }
        
        // Highlight stars up to the given rating
        function highlightStars(rating) {
            const stars = ratingStars.querySelectorAll('.rating-star');
            stars.forEach((star, index) => {
                if (index < rating) {
                    star.classList.remove('far');
                    star.classList.add('fas');
                } else {
                    star.classList.remove('fas');
                    star.classList.add('far');
                }
            });
        }
        
        // Reset review form
        function resetReviewForm() {
            currentRating = 0;
            highlightStars(0);
            reviewText.value = '';
        }
        
        // Auto-scroll events
        function startAutoScroll() {
            // Clone the events to create a seamless loop
            const eventsContainer = eventsSlider;
            const events = Array.from(eventsContainer.children);
            
            // Duplicate events for seamless looping
            events.forEach(event => {
                const clone = event.cloneNode(true);
                eventsContainer.appendChild(clone);
            });
            
            let scrollAmount = 0;
            const scrollSpeed = 1; // pixels per interval
            
            scrollInterval = setInterval(() => {
                scrollAmount += scrollSpeed;
                eventsContainer.scrollLeft = scrollAmount;
                
                // Reset scroll position when reaching the end
                if (scrollAmount >= eventsContainer.scrollWidth / 2) {
                    scrollAmount = 0;
                    eventsContainer.scrollLeft = 0;
                }
            }, 30);
            
            // Pause on hover
            eventsContainer.addEventListener('mouseenter', () => {
                clearInterval(scrollInterval);
            });
            
            eventsContainer.addEventListener('mouseleave', () => {
                scrollInterval = setInterval(() => {
                    scrollAmount += scrollSpeed;
                    eventsContainer.scrollLeft = scrollAmount;
                    
                    // Reset scroll position when reaching the end
                    if (scrollAmount >= eventsContainer.scrollWidth / 2) {
                        scrollAmount = 0;
                        eventsContainer.scrollLeft = 0;
                    }
                }, 30);
            });
        }