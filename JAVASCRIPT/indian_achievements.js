
/* =========================================================
   VIDUTHALAI
   INDIAN ACHIEVEMENTS — DETAIL PAGE ENGINE
   VERSION 2.0
   NO GSAP
   NO JQUERY
   VANILLA JAVASCRIPT
========================================================= */

"use strict";


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ACHIEVEMENT DATABASE
    ====================================================== */

    const achievements = {

        /* =================================================
           01 — REPUBLIC OF INDIA
        ================================================= */

        "republic-1950": {

            number: 1,
            roman: "I",
            year: "1950",
            category: "NATION BUILDING",

            title: "Republic of India",

            image:
                "../images//achievements/republic-1950.avif",

            lead:
                "India adopted its Constitution and became a sovereign democratic republic on 26 January 1950.",

            introTitle:
                "Freedom became a <em>constitutional republic.</em>",

            introText:
                "The adoption of the Constitution transformed independent India into a democratic republic founded on constitutional rights, institutions and representative government.",

            story: [

                "India became independent on 15 August 1947, but the new nation still needed a constitutional framework through which its democratic institutions could function.",

                "The Constituent Assembly worked for several years to create a Constitution suited to India's extraordinary diversity and democratic ambitions.",

                "Dr. B. R. Ambedkar served as Chairman of the Drafting Committee and played a central role in shaping the constitutional text.",

                "The Constitution was adopted on 26 November 1949 and came into force on 26 January 1950.",

                "With the Constitution coming into force, India became a sovereign democratic republic.",

                "The Constitution established a parliamentary system, fundamental rights, independent institutions and a framework for democratic governance.",

                "It also created a common constitutional identity for a country containing hundreds of languages, cultures, communities and traditions.",

                "The Republic marked a new stage in India's journey: from colonial rule and independence to democratic self-government."

            ],

            quote:
                "Independence gave India freedom; the Constitution gave that freedom a democratic framework.",

            facts: [

                {
                    icon: "bi-calendar3",
                    value: "26 Jan 1950",
                    label: "Republic Day"
                },

                {
                    icon: "bi-book",
                    value: "Constitution",
                    label: "Supreme legal framework"
                },

                {
                    icon: "bi-person",
                    value: "B. R. Ambedkar",
                    label: "Drafting Committee Chairman"
                },

                {
                    icon: "bi-bank",
                    value: "Democracy",
                    label: "Representative government"
                },

                {
                    icon: "bi-shield-check",
                    value: "Fundamental Rights",
                    label: "Constitutional protection"
                },

                {
                    icon: "bi-flag",
                    value: "Republic",
                    label: "New constitutional era"
                }

            ],

            significanceTitle:
                "The foundation of India's <em>democratic republic.</em>",

            significanceText:
                "The Constitution provided the institutional and legal framework through which India's democratic experiment could develop after independence.",

            legacyTitle:
                "A Constitution that continues to guide India.",

            legacyText:
                "The Republic remains founded on constitutional democracy, representative government, fundamental rights and the rule of law."

        },


        /* =================================================
           02 — GREEN REVOLUTION
        ================================================= */

        "green-revolution": {

            number: 2,
            roman: "II",
            year: "1960s",
            category: "AGRICULTURE",

            title: "The Green Revolution",

            image:
                "../images//achievements/green-revolution.jpg",

            lead:
                "A transformation in Indian agriculture that helped the nation move towards food security.",

            introTitle:
                "A transformation that <em>changed agriculture.</em>",

            introText:
                "The Green Revolution transformed Indian agriculture through improved seeds, irrigation, fertilizers and modern farming techniques. It helped India significantly increase food-grain production and reduce dependence on food imports.",

            story: [

                "In the years after independence, India faced serious challenges in feeding a rapidly growing population. Agricultural productivity remained low and food shortages placed enormous pressure on the young nation.",

                "During the 1960s, India began adopting new agricultural technologies, including high-yielding varieties of wheat and rice, improved irrigation, chemical fertilizers and modern farming methods.",

                "The transformation was particularly significant in states such as Punjab, Haryana and western Uttar Pradesh, where farmers were able to adopt intensive agricultural practices.",

                "Scientists, farmers, administrators and institutions worked together to create a new agricultural system capable of producing much larger harvests.",

                "The work of agricultural scientist M. S. Swaminathan became closely associated with India's Green Revolution, alongside international agricultural research and new crop varieties.",

                "The increase in agricultural production strengthened India's food security and helped the country reduce its dependence on imported food grains.",

                "The Green Revolution also changed rural economies. It encouraged mechanization, irrigation development, agricultural research and the expansion of supporting industries.",

                "However, the benefits were not distributed equally everywhere. Regional differences, environmental pressures, groundwater depletion and dependence on chemical inputs later became important concerns.",

                "Despite these challenges, the Green Revolution remains one of the defining achievements of independent India's development story."

            ],

            quote:
                "India transformed the challenge of food scarcity into a new era of agricultural self-reliance.",

            facts: [

                {
                    icon: "bi-calendar3",
                    value: "1960s",
                    label: "Major expansion period"
                },

                {
                    icon: "bi-flower1",
                    value: "Wheat & Rice",
                    label: "High-yield crops"
                },

                {
                    icon: "bi-droplet",
                    value: "Irrigation",
                    label: "Modern farming systems"
                },

                {
                    icon: "bi-graph-up-arrow",
                    value: "Higher Yield",
                    label: "Food-grain production"
                },

                {
                    icon: "bi-person",
                    value: "M. S. Swaminathan",
                    label: "Indian agricultural scientist"
                },

                {
                    icon: "bi-shield-check",
                    value: "Food Security",
                    label: "Long-term national impact"
                }

            ],

            significanceTitle:
                "A revolution that strengthened <em>food security.</em>",

            significanceText:
                "The Green Revolution helped India overcome severe food shortages and establish a much stronger foundation for agricultural self-reliance.",

            legacyTitle:
                "From food scarcity to agricultural confidence.",

            legacyText:
                "Its legacy continues through agricultural research, irrigation, crop improvement and India's continuing effort to build sustainable food systems."

        },


        /* =================================================
           03 — WHITE REVOLUTION
        ================================================= */

        "white-revolution": {

            number: 3,
            roman: "III",
            year: "1970s",
            category: "DAIRY DEVELOPMENT",

            title: "The White Revolution",

            image:
                "../images//achievements/white-revolution.jpeg",

            lead:
                "A nationwide dairy movement transformed milk production and connected millions of rural producers to organized markets.",

            introTitle:
                "Milk became a symbol of <em>rural transformation.</em>",

            introText:
                "Operation Flood created one of the world's largest dairy development programmes and helped transform India into a major milk-producing nation.",

            story: [

                "After independence, milk production in India was unable to keep pace with demand. Farmers often had limited access to organized markets and received low returns for their produce.",

                "The cooperative dairy model developed in Gujarat provided an important alternative. Farmers could collectively process and market milk while retaining greater control over their production.",

                "Operation Flood was launched in 1970 under the National Dairy Development Board. It expanded cooperative dairy networks across India.",

                "Dr. Verghese Kurien became one of the most important figures associated with this transformation. His work helped establish a cooperative structure linking rural producers with urban consumers.",

                "The programme improved milk collection, processing, transportation and marketing infrastructure.",

                "Millions of rural households became connected to dairy cooperatives, creating new income opportunities and strengthening rural economies.",

                "The expansion of milk production also improved the availability of an important source of nutrition across the country.",

                "The White Revolution demonstrated how cooperative institutions could connect small producers to national markets."

            ],

            quote:
                "A cooperative network turned millions of small producers into a powerful national dairy economy.",

            facts: [

                {
                    icon: "bi-calendar3",
                    value: "1970",
                    label: "Operation Flood launched"
                },

                {
                    icon: "bi-droplet-half",
                    value: "Milk",
                    label: "Core product"
                },

                {
                    icon: "bi-people",
                    value: "Cooperatives",
                    label: "Producer-led model"
                },

                {
                    icon: "bi-person-badge",
                    value: "Verghese Kurien",
                    label: "Dairy development leader"
                },

                {
                    icon: "bi-graph-up",
                    value: "Major Growth",
                    label: "Milk production"
                },

                {
                    icon: "bi-house-heart",
                    value: "Rural Income",
                    label: "Household livelihood impact"
                }

            ],

            significanceTitle:
                "A dairy revolution built on <em>cooperation.</em>",

            significanceText:
                "The White Revolution strengthened rural livelihoods while creating a modern dairy supply chain capable of serving a huge national market.",

            legacyTitle:
                "A cooperative model that changed rural India.",

            legacyText:
                "The dairy cooperative movement remains one of India's strongest examples of producer-led economic development."

        },


        /* =================================================
           04 — POKHRAN 1974
        ================================================= */

        "pokhran-1974": {

            number: 4,
            roman: "IV",
            year: "1974",
            category: "NUCLEAR SCIENCE",

            title: "Pokhran-I",

            image:
                "../images//achievements/pokhran-1974.jpg",

            lead:
                "India demonstrated its growing nuclear scientific capability with its first peaceful nuclear explosion at Pokhran.",

            introTitle:
                "A scientific milestone in <em>nuclear capability.</em>",

            introText:
                "The 1974 Pokhran test represented a major milestone in India's nuclear science and technology programme.",

            story: [

                "After independence, India invested heavily in scientific institutions and nuclear research, viewing advanced science as an important foundation for national development.",

                "The country's nuclear programme grew under the leadership of scientists including Homi J. Bhabha and later generations of Indian nuclear researchers.",

                "On 18 May 1974, India conducted its first nuclear test at Pokhran in Rajasthan.",

                "The government described the test as a peaceful nuclear explosion. The event demonstrated India's ability to develop sophisticated nuclear technology domestically.",

                "The test had significant international consequences, including changes in global nuclear technology controls and export arrangements.",

                "For India, the achievement represented decades of investment in scientific education, engineering and indigenous research capabilities.",

                "The Pokhran test became an important milestone in India's strategic and scientific history."

            ],

            quote:
                "Scientific independence became an important part of India's national ambition.",

            facts: [

                {
                    icon: "bi-calendar3",
                    value: "18 May 1974",
                    label: "First nuclear test"
                },

                {
                    icon: "bi-geo-alt",
                    value: "Pokhran",
                    label: "Rajasthan test site"
                },

                {
                    icon: "bi-atom",
                    value: "Nuclear",
                    label: "Scientific capability"
                },

                {
                    icon: "bi-flask",
                    value: "Research",
                    label: "Indigenous technology"
                },

                {
                    icon: "bi-mortarboard",
                    value: "Science",
                    label: "National scientific development"
                },

                {
                    icon: "bi-shield",
                    value: "Strategic",
                    label: "Long-term significance"
                }

            ],

            significanceTitle:
                "A milestone in India's <em>scientific independence.</em>",

            significanceText:
                "The 1974 test demonstrated India's growing ability to develop advanced nuclear technology through domestic scientific institutions and engineering expertise.",

            legacyTitle:
                "A turning point in India's nuclear journey.",

            legacyText:
                "The achievement laid an important foundation for the country's later nuclear and strategic programmes."

        },


        /* =================================================
           05 — ARYABHATA
        ================================================= */

        "aryabhata": {

            number: 5,
            roman: "V",
            year: "1975",
            category: "SPACE SCIENCE",

            title: "Aryabhata",

            image:
                "../images//achievements/aryabhata.jpeg",

            lead:
                "India's first satellite marked the beginning of a remarkable journey in indigenous space technology.",

            introTitle:
                "India's space journey began with <em>Aryabhata.</em>",

            introText:
                "Launched in 1975, Aryabhata was India's first satellite and an important early step in developing the country's space capabilities.",

            story: [

                "India's space programme began with modest resources but an ambitious vision of using space technology for national development.",

                "Aryabhata was India's first satellite and was named after the ancient Indian mathematician and astronomer.",

                "The satellite was launched on 19 April 1975 by a Soviet launch vehicle from the Kapustin Yar launch site.",

                "Aryabhata provided Indian scientists with valuable experience in satellite design, spacecraft systems and space operations.",

                "Although the mission experienced technical limitations, its importance went far beyond its immediate scientific results.",

                "It helped create the technical knowledge and institutional confidence required for India's future satellite and launch programmes.",

                "The achievement became an early symbol of India's determination to develop indigenous space technology."

            ],

            quote:
                "A small satellite opened the door to a much larger space journey.",

            facts: [

                {
                    icon: "bi-calendar3",
                    value: "19 April 1975",
                    label: "Launch date"
                },

                {
                    icon: "bi-satellite",
                    value: "Aryabhata",
                    label: "India's first satellite"
                },

                {
                    icon: "bi-rocket",
                    value: "Soviet Launch",
                    label: "Launch vehicle support"
                },

                {
                    icon: "bi-stars",
                    value: "Space Science",
                    label: "Early scientific mission"
                },

                {
                    icon: "bi-gear",
                    value: "Indigenous",
                    label: "Spacecraft development"
                },

                {
                    icon: "bi-rocket-takeoff",
                    value: "Foundation",
                    label: "Future space programmes"
                }

            ],

            significanceTitle:
                "The first step in India's <em>space journey.</em>",

            significanceText:
                "Aryabhata provided crucial early experience in spacecraft engineering and space operations, helping India build the capabilities that later supported ambitious missions.",

            legacyTitle:
                "From one satellite to a space programme.",

            legacyText:
                "Aryabhata became the starting point of a space journey that would eventually reach the Moon, Mars and the Sun."

        },


        /* =================================================
           06 — INSAT
        ================================================= */

        "insat": {

            number: 6,
            roman: "VI",
            year: "1983",
            category: "SPACE & COMMUNICATION",

            title: "INSAT",

            image:
                "../images//achievements/insat.webp",

            lead:
                "India's INSAT programme transformed communication, broadcasting, meteorology and satellite-based services.",

            introTitle:
                "India connected itself through <em>space technology.</em>",

            introText:
                "The Indian National Satellite System became a major foundation for communication, television broadcasting, weather observation and other national services.",

            story: [

                "As India expanded economically and socially, the need for reliable communication across its enormous geography became increasingly important.",

                "The Indian National Satellite System, known as INSAT, was developed as a multipurpose satellite system serving communication, broadcasting, meteorology and related needs.",

                "INSAT satellites helped expand television and telecommunications services across urban and rural parts of the country.",

                "Satellite technology also improved weather observation and supported forecasting, disaster warning and environmental monitoring.",

                "The programme demonstrated how space technology could directly contribute to everyday development rather than remaining limited to scientific research.",

                "Over time, successive generations of INSAT and related satellites strengthened India's communication infrastructure.",

                "The programme became an important bridge between India's space capabilities and the needs of ordinary citizens."

            ],

            quote:
                "Space technology became a tool for connecting a vast and diverse nation.",

            facts: [

                {
                    icon: "bi-broadcast",
                    value: "Communication",
                    label: "Satellite services"
                },

                {
                    icon: "bi-tv",
                    value: "Broadcasting",
                    label: "Television expansion"
                },

                {
                    icon: "bi-cloud-sun",
                    value: "Weather",
                    label: "Meteorological services"
                },

                {
                    icon: "bi-globe-asia-australia",
                    value: "National",
                    label: "Wide geographic reach"
                },

                {
                    icon: "bi-satellite",
                    value: "INSAT",
                    label: "Multipurpose satellite system"
                },

                {
                    icon: "bi-wifi",
                    value: "Connectivity",
                    label: "Communication infrastructure"
                }

            ],

            significanceTitle:
                "A satellite network that helped <em>connect India.</em>",

            significanceText:
                "INSAT demonstrated how India's investment in space technology could produce direct benefits in communication, broadcasting, weather services and national development.",

            legacyTitle:
                "Space technology serving everyday life.",

            legacyText:
                "The INSAT programme helped establish the foundation for India's modern satellite communication infrastructure."

        },


        /* =================================================
           07 — POKHRAN 1998
        ================================================= */

        "pokhran-1998": {

            number: 7,
            roman: "VII",
            year: "1998",
            category: "STRATEGIC SCIENCE",

            title: "Pokhran-II",

            image:
                "../images//achievements/pokhran-1998.jpg",

            lead:
                "A series of nuclear tests in 1998 marked a decisive moment in India's strategic and technological history.",

            introTitle:
                "India entered a new era of <em>strategic capability.</em>",

            introText:
                "The Pokhran-II tests demonstrated India's advanced nuclear capabilities and had major consequences for its international strategic position.",

            story: [

                "In May 1998, India conducted a series of nuclear tests at Pokhran in Rajasthan.",

                "The tests involved advanced scientific and engineering preparations carried out under conditions of considerable secrecy.",

                "The events demonstrated the country's ability to design and conduct sophisticated nuclear experiments using domestic expertise.",

                "The tests generated strong international reactions, including sanctions and diplomatic pressure.",

                "India subsequently articulated a nuclear doctrine centred on deterrence and responsible stewardship of its strategic capabilities.",

                "The 1998 tests also highlighted the importance of India's scientific institutions and the technical expertise developed over decades.",

                "The event remains one of the most consequential milestones in India's modern strategic history."

            ],

            quote:
                "Decades of scientific investment culminated in a defining strategic moment.",

            facts: [

                {
                    icon: "bi-calendar3",
                    value: "May 1998",
                    label: "Pokhran-II tests"
                },

                {
                    icon: "bi-geo-alt",
                    value: "Pokhran",
                    label: "Rajasthan"
                },

                {
                    icon: "bi-atom",
                    value: "Nuclear",
                    label: "Advanced capability"
                },

                {
                    icon: "bi-shield-lock",
                    value: "Deterrence",
                    label: "Strategic doctrine"
                },

                {
                    icon: "bi-people",
                    value: "Scientists",
                    label: "Indian scientific expertise"
                },

                {
                    icon: "bi-globe2",
                    value: "Global Impact",
                    label: "International consequences"
                }

            ],

            significanceTitle:
                "A strategic milestone with <em>global consequences.</em>",

            significanceText:
                "Pokhran-II changed India's strategic position and demonstrated the depth of scientific and engineering capabilities developed within the country.",

            legacyTitle:
                "A defining chapter in modern strategic India.",

            legacyText:
                "The 1998 tests remain an important part of India's strategic history and nuclear policy."

        },


        /* =================================================
           08 — IT REVOLUTION
        ================================================= */

        "it-revolution": {

            number: 8,
            roman: "VIII",
            year: "1990s",
            category: "TECHNOLOGY",

            title: "India's IT Revolution",

            image:
                "../images//achievements/it-revolution.avif",

            lead:
                "India emerged as a global technology and software powerhouse through talent, entrepreneurship and digital innovation.",

            introTitle:
                "A new economy grew from <em>code and talent.</em>",

            introText:
                "India's information technology industry transformed the country's economy and established Indian software professionals as a major global workforce.",

            story: [

                "The liberalization of the Indian economy in 1991 created new opportunities for private enterprise and international business.",

                "Indian engineers and software professionals increasingly entered global markets, providing software development, technology services and business-process expertise.",

                "Cities such as Bengaluru, Hyderabad, Chennai, Pune and Gurugram developed into major technology centres.",

                "Companies built large international operations and demonstrated that high-value knowledge services could be delivered from India to customers around the world.",

                "The expansion of the technology sector created employment for millions of professionals and stimulated new educational and entrepreneurial ecosystems.",

                "India also became increasingly important in software services, outsourcing, digital infrastructure and technology entrepreneurship.",

                "The IT revolution changed how India was perceived internationally, positioning the country as a major centre of technological talent."

            ],

            quote:
                "India's greatest technology resource became its people.",

            facts: [

                {
                    icon: "bi-code-slash",
                    value: "Software",
                    label: "Technology services"
                },

                {
                    icon: "bi-buildings",
                    value: "Bengaluru",
                    label: "Major technology hub"
                },

                {
                    icon: "bi-globe",
                    value: "Global",
                    label: "International services"
                },

                {
                    icon: "bi-people",
                    value: "Talent",
                    label: "Skilled workforce"
                },

                {
                    icon: "bi-laptop",
                    value: "Digital",
                    label: "Technology economy"
                },

                {
                    icon: "bi-rocket-takeoff",
                    value: "Startups",
                    label: "New entrepreneurship"
                }

            ],

            significanceTitle:
                "A technology sector that reshaped <em>India's economy.</em>",

            significanceText:
                "The IT revolution created new industries, jobs, global business relationships and a generation of technology entrepreneurs.",

            legacyTitle:
                "From software services to a digital future.",

            legacyText:
                "India's technology ecosystem continues to expand into artificial intelligence, software products, digital public infrastructure and deep technology."

        },


        /* =================================================
           09 — CHANDRAYAAN 1
        ================================================= */

        "chandrayaan-1": {

            number: 9,
            roman: "IX",
            year: "2008",
            category: "LUNAR EXPLORATION",

            title: "Chandrayaan-1",

            image:
                "../images//achievements/chandrayaan-1.jpeg",

            lead:
                "India's first lunar mission transformed the country's scientific exploration programme and contributed important discoveries about the Moon.",

            introTitle:
                "India reached the Moon with <em>Chandrayaan-1.</em>",

            introText:
                "Launched in 2008, Chandrayaan-1 was India's first mission to the Moon and became one of the country's most important early planetary exploration missions.",

            story: [

                "India's space programme had already developed considerable experience in launching satellites and operating spacecraft before turning its attention toward planetary exploration.",

                "Chandrayaan-1 was launched on 22 October 2008 from the Satish Dhawan Space Centre.",

                "The spacecraft carried scientific instruments from India and international partners to study the lunar surface and composition.",

                "One of the mission's most important scientific contributions was evidence associated with the presence of water molecules on the lunar surface.",

                "The discovery had major implications for future lunar exploration because water resources could potentially support future scientific and human missions.",

                "Chandrayaan-1 also demonstrated India's ability to undertake complex deep-space scientific missions.",

                "The success of the mission encouraged the development of later Chandrayaan missions and strengthened India's position in planetary science."

            ],

            quote:
                "The Moon became not just a destination, but a laboratory for Indian science.",

            facts: [

                {
                    icon: "bi-calendar3",
                    value: "2008",
                    label: "Mission launched"
                },

                {
                    icon: "bi-moon-stars",
                    value: "Moon",
                    label: "Lunar exploration"
                },

                {
                    icon: "bi-droplet",
                    value: "Water",
                    label: "Major scientific discovery"
                },

                {
                    icon: "bi-satellite",
                    value: "Orbiter",
                    label: "Lunar spacecraft"
                },

                {
                    icon: "bi-globe",
                    value: "International",
                    label: "Scientific cooperation"
                },

                {
                    icon: "bi-trophy",
                    value: "Historic",
                    label: "Major planetary mission"
                }

            ],

            significanceTitle:
                "A lunar mission that changed <em>planetary science.</em>",

            significanceText:
                "Chandrayaan-1 demonstrated India's growing deep-space capability and contributed important scientific observations that influenced future lunar exploration.",

            legacyTitle:
                "The beginning of India's modern lunar programme.",

            legacyText:
                "The mission paved the way for Chandrayaan-2, Chandrayaan-3 and India's continuing exploration of the Moon."

        },


        /* =================================================
           10 — MARS ORBITER
        ================================================= */

        "mars-orbiter": {

            number: 10,
            roman: "X",
            year: "2013",
            category: "PLANETARY EXPLORATION",

            title: "Mars Orbiter Mission",

            image:
                "../images//achievements/mars-orbitter.jpeg",

            lead:
                "India reached Mars on its first attempt with a mission that demonstrated remarkable engineering efficiency and deep-space capability.",

            introTitle:
                "India reached Mars on its <em>first attempt.</em>",

            introText:
                "The Mars Orbiter Mission, popularly known as Mangalyaan, became one of India's most celebrated planetary exploration achievements.",

            story: [

                "India's Mars Orbiter Mission was designed to demonstrate the country's ability to design, build and operate a spacecraft in the challenging environment of interplanetary space.",

                "The mission launched on 5 November 2013 aboard the PSLV from Sriharikota.",

                "After a complex sequence of orbital manoeuvres around Earth, the spacecraft began its journey toward Mars.",

                "On 24 September 2014, the Mars Orbiter Mission successfully entered orbit around Mars.",

                "India became the first Asian nation to successfully reach Mars orbit and the first country in the world to do so on its first attempt.",

                "The mission also demonstrated India's ability to accomplish ambitious deep-space objectives with comparatively limited resources.",

                "Mangalyaan carried scientific instruments that studied the Martian atmosphere and surface environment.",

                "The mission became an important symbol of Indian engineering, mission planning and scientific ambition."

            ],

            quote:
                "A spacecraft travelling across millions of kilometres made India's engineering ambition visible to the world.",

            facts: [

                {
                    icon: "bi-calendar3",
                    value: "5 Nov 2013",
                    label: "Launch date"
                },

                {
                    icon: "bi-globe2",
                    value: "Mars",
                    label: "Planetary destination"
                },

                {
                    icon: "bi-check-circle",
                    value: "First Attempt",
                    label: "Successful Mars orbit"
                },

                {
                    icon: "bi-rocket",
                    value: "PSLV",
                    label: "Launch vehicle"
                },

                {
                    icon: "bi-speedometer2",
                    value: "Deep Space",
                    label: "Interplanetary mission"
                },

                {
                    icon: "bi-stars",
                    value: "Mangalyaan",
                    label: "Popular mission name"
                }

            ],

            significanceTitle:
                "A mission that made India's <em>deep-space capability visible.</em>",

            significanceText:
                "The Mars Orbiter Mission demonstrated that India could undertake complex interplanetary missions using sophisticated engineering and careful mission planning.",

            legacyTitle:
                "From Earth orbit to the red planet.",

            legacyText:
                "Mangalyaan became one of India's strongest symbols of scientific ambition and efficient space engineering."

        },


        /* =================================================
           11 — CHANDRAYAAN 3
        ================================================= */

        "chandrayaan-3": {

            number: 11,
            roman: "XI",
            year: "2023",
            category: "LUNAR EXPLORATION",

            title: "Chandrayaan-3",

            image:
                "../images//achievements/chandrayaan-3.jpeg",

            lead:
                "India achieved a historic soft landing near the Moon's south polar region and demonstrated advanced lunar exploration capability.",

            introTitle:
                "India landed on the Moon with <em>Chandrayaan-3.</em>",

            introText:
                "Chandrayaan-3 successfully demonstrated India's ability to perform a controlled lunar landing and operate a rover on the lunar surface.",

            story: [

                "Following the lessons of Chandrayaan-2, India developed Chandrayaan-3 with a focused objective: demonstrate a safe soft landing and rover operations on the Moon.",

                "The mission was launched on 14 July 2023 from the Satish Dhawan Space Centre.",

                "On 23 August 2023, the Vikram lander successfully touched down on the lunar surface.",

                "The landing made India the first country to successfully land in the Moon's southern polar region and one of only a small group of nations to achieve a controlled lunar landing.",

                "The Pragyan rover travelled across the lunar surface and conducted scientific measurements.",

                "The mission demonstrated India's engineering capabilities in navigation, propulsion, autonomous landing and surface exploration.",

                "The achievement became a major moment for India's space programme and inspired renewed interest in science and engineering among young people."

            ],

            quote:
                "A successful landing turned years of preparation into a moment of national scientific achievement.",

            facts: [

                {
                    icon: "bi-calendar3",
                    value: "14 July 2023",
                    label: "Launch date"
                },

                {
                    icon: "bi-moon",
                    value: "23 Aug 2023",
                    label: "Successful landing"
                },

                {
                    icon: "bi-geo-alt",
                    value: "Lunar South",
                    label: "Landing region"
                },

                {
                    icon: "bi-robot",
                    value: "Pragyan",
                    label: "Lunar rover"
                },

                {
                    icon: "bi-rocket",
                    value: "Vikram",
                    label: "Lander"
                },

                {
                    icon: "bi-trophy",
                    value: "Historic",
                    label: "Major lunar milestone"
                }

            ],

            significanceTitle:
                "A landing that placed India among the <em>lunar pioneers.</em>",

            significanceText:
                "Chandrayaan-3 demonstrated India's ability to execute a complex soft landing and surface mission on the Moon.",

            legacyTitle:
                "A new chapter in India's lunar ambitions.",

            legacyText:
                "The mission strengthened India's planetary exploration programme and created new possibilities for future lunar science."

        },


        /* =================================================
           12 — ADITYA L1
        ================================================= */

        "aditya-l1": {

            number: 12,
            roman: "XII",
            year: "2023",
            category: "SOLAR SCIENCE",

            title: "Aditya-L1",

            image:
                "../images//achievements/aditya-l1.jpeg",

            lead:
                "India's first dedicated solar mission opened a new chapter in the study of the Sun and space weather.",

            introTitle:
                "India turned its scientific eyes toward <em>the Sun.</em>",

            introText:
                "Aditya-L1 is India's first dedicated solar mission, designed to continuously observe the Sun and study phenomena that influence Earth's space environment.",

            story: [

                "The Sun drives much of the space environment around Earth. Solar flares, coronal mass ejections and other phenomena can affect satellites, communication systems and electrical infrastructure.",

                "Aditya-L1 was developed to study the Sun from a special location called the Sun-Earth L1 point.",

                "The spacecraft was launched on 2 September 2023 from the Satish Dhawan Space Centre.",

                "Its journey toward the L1 region demonstrated India's growing ability to operate spacecraft far beyond Earth orbit.",

                "The mission carries multiple scientific instruments designed to study the solar atmosphere, magnetic fields and solar activity.",

                "Continuous observation from the L1 region can help scientists understand solar processes and improve knowledge of space weather.",

                "Aditya-L1 represents another expansion of India's space programme from Earth observation and planetary exploration into dedicated astrophysical research."

            ],

            quote:
                "After reaching the Moon and Mars, India's scientific gaze turned toward the star that powers our world.",

            facts: [

                {
                    icon: "bi-sun",
                    value: "Sun",
                    label: "Primary scientific target"
                },

                {
                    icon: "bi-calendar3",
                    value: "2 Sep 2023",
                    label: "Launch date"
                },

                {
                    icon: "bi-bullseye",
                    value: "L1 Point",
                    label: "Mission destination"
                },

                {
                    icon: "bi-activity",
                    value: "Space Weather",
                    label: "Scientific research"
                },

                {
                    icon: "bi-cpu",
                    value: "7 Payloads",
                    label: "Scientific instruments"
                },

                {
                    icon: "bi-stars",
                    value: "Solar Science",
                    label: "Dedicated mission"
                }

            ],

            significanceTitle:
                "A mission dedicated to understanding <em>our star.</em>",

            significanceText:
                "Aditya-L1 expands India's scientific reach by providing continuous observations of the Sun and helping researchers understand solar activity and space weather.",

            legacyTitle:
                "A new frontier in Indian space science.",

            legacyText:
                "The mission strengthens India's capabilities in solar physics, astrophysics and space-weather research."

        }

    };


    /* =========================================================
       ACHIEVEMENT ORDER
    ========================================================= */

    const achievementKeys = [

        "republic-1950",
        "green-revolution",
        "white-revolution",
        "pokhran-1974",
        "aryabhata",
        "insat",
        "pokhran-1998",
        "it-revolution",
        "chandrayaan-1",
        "mars-orbiter",
        "chandrayaan-3",
        "aditya-l1"

    ];


    /* =========================================================
       GET CURRENT ACHIEVEMENT
    ========================================================= */

    const params =
        new URLSearchParams(
            window.location.search
        );

    const requestedAchievement =
        params.get("achievement");

    let currentIndex =
        achievementKeys.indexOf(
            requestedAchievement
        );


    /*
       If no achievement is supplied,
       show the first achievement.
    */

    if (currentIndex < 0) {

        currentIndex = 0;

    }


    const currentKey =
        achievementKeys[currentIndex];

    const achievement =
        achievements[currentKey];


    /* =========================================================
       SAFETY CHECK
    ========================================================= */

    if (!achievement) {

        console.error(
            "Achievement could not be loaded:",
            currentKey
        );

        return;

    }


    /* =========================================================
       FORCE NUMBER / ROMAN
    ========================================================= */

    achievement.number =
        currentIndex + 1;


    achievement.roman =
        [
            "I",
            "II",
            "III",
            "IV",
            "V",
            "VI",
            "VII",
            "VIII",
            "IX",
            "X",
            "XI",
            "XII"
        ][currentIndex];


    /* =========================================================
       HELPER FUNCTIONS
    ========================================================= */

    function getElement(id) {

        return document.getElementById(id);

    }


    function setText(id, value) {

        const element =
            getElement(id);

        if (!element) {

            return;

        }

        element.textContent =
            value ?? "";

    }


    function setHTML(id, value) {

        const element =
            getElement(id);

        if (!element) {

            return;

        }

        element.innerHTML =
            value ?? "";

    }


    /* =========================================================
       ELEMENT REFERENCES
    ========================================================= */

    const image =
        getElement(
            "achievementImage"
        );

    const storyText =
        getElement(
            "storyText"
        );

    const factsGrid =
        getElement(
            "factsGrid"
        );

    const previous =
        getElement(
            "previousAchievement"
        );

    const previousTitle =
        getElement(
            "previousTitle"
        );

    const next =
        getElement(
            "nextAchievement"
        );

    const nextTitle =
        getElement(
            "nextTitle"
        );


    /* =========================================================
       PAGE TITLE
    ========================================================= */

    document.title =
        `${achievement.title} | Viduthalai`;


    /* =========================================================
       HERO IMAGE
    ========================================================= */

    if (image) {

        image.src =
            achievement.image;

        image.alt =
            achievement.title;

        image.loading =
            "eager";

        image.decoding =
            "async";

        image.classList.remove(
            "image-error"
        );

    }


    /* =========================================================
       HERO CONTENT
    ========================================================= */

    setText(
        "achievementNumber",
        String(
            achievement.number
        ).padStart(2, "0")
    );


    setText(
        "achievementLabel",
        `ACHIEVEMENT ${achievement.roman}`
    );


    setText(
        "achievementCategory",
        achievement.category
    );


    setText(
        "achievementYear",
        achievement.year
    );


    setText(
        "achievementTitle",
        achievement.title
    );


    setText(
        "achievementLead",
        achievement.lead
    );


    /* =========================================================
       INTRO
    ========================================================= */

    setHTML(
        "introTitle",
        achievement.introTitle
    );


    setText(
        "introText",
        achievement.introText
    );


    /* =========================================================
       STORY SIDEBAR
    ========================================================= */

    setText(
        "sidebarNumber",
        achievement.roman
    );


    setText(
        "sidebarYear",
        achievement.year
    );


    /* =========================================================
       SIGNIFICANCE
    ========================================================= */

    setHTML(
        "significanceTitle",
        achievement.significanceTitle
    );


    setText(
        "significanceText",
        achievement.significanceText
    );


    /* =========================================================
       LEGACY
    ========================================================= */

    setHTML(
        "legacyTitle",
        achievement.legacyTitle
    );


    setText(
        "legacyText",
        achievement.legacyText
    );


    /* =========================================================
       STORY RENDER
    ========================================================= */

    function renderStory() {

        if (!storyText) {

            return;

        }


        storyText.innerHTML = "";


        achievement.story.forEach(
            (paragraph, index) => {

                const paragraphElement =
                    document.createElement("p");


                paragraphElement.className =
                    "reveal";


                paragraphElement.textContent =
                    paragraph;


                storyText.appendChild(
                    paragraphElement
                );


                /*
                   Decorative divider
                */

                if (
                    index === 1 ||
                    index ===
                    achievement.story.length - 3
                ) {

                    const divider =
                        document.createElement("div");


                    divider.className =
                        "story-divider reveal";


                    divider.innerHTML = `
                        <span></span>
                        <i class="bi bi-star-fill"></i>
                        <span></span>
                    `;


                    storyText.appendChild(
                        divider
                    );

                }


                /*
                   Quote
                */

                if (
                    index === 3 &&
                    achievement.quote
                ) {

                    const quote =
                        document.createElement(
                            "blockquote"
                        );


                    quote.className =
                        "reveal";


                    quote.textContent =
                        achievement.quote;


                    storyText.appendChild(
                        quote
                    );

                }

            }
        );

    }


    renderStory();


    /* =========================================================
       FACTS RENDER
    ========================================================= */

    function renderFacts() {

        if (!factsGrid) {

            return;

        }


        factsGrid.innerHTML = "";


        achievement.facts.forEach(
            (fact, index) => {

                const card =
                    document.createElement(
                        "article"
                    );


                card.className =
                    "fact-card reveal";


                card.style.setProperty(
                    "--fact-delay",
                    `${index * 70}ms`
                );


                const icon =
                    document.createElement(
                        "div"
                    );


                icon.className =
                    "fact-icon";


                icon.innerHTML =
                    `<i class="bi ${fact.icon}"></i>`;


                const value =
                    document.createElement(
                        "span"
                    );


                value.className =
                    "fact-value";


                value.textContent =
                    fact.value;


                const label =
                    document.createElement(
                        "span"
                    );


                label.className =
                    "fact-label";


                label.textContent =
                    fact.label;


                card.appendChild(
                    icon
                );


                card.appendChild(
                    value
                );


                card.appendChild(
                    label
                );


                factsGrid.appendChild(
                    card
                );

            }
        );

    }


    renderFacts();


    /* =========================================================
       PREVIOUS ACHIEVEMENT
    ========================================================= */

    function setupPrevious() {

        if (
            !previous ||
            !previousTitle
        ) {

            return;

        }


        if (currentIndex > 0) {

            const previousKey =
                achievementKeys[
                    currentIndex - 1
                ];


            const previousAchievement =
                achievements[
                    previousKey
                ];


            previous.href =
                `indian_achievements.html?achievement=${encodeURIComponent(
                    previousKey
                )}`;


            previousTitle.textContent =
                previousAchievement.title;


            previous.classList.remove(
                "disabled"
            );


            previous.removeAttribute(
                "aria-disabled"
            );


            previous.setAttribute(
                "aria-label",
                `Previous achievement: ${previousAchievement.title}`
            );

        }

        else {

            previous.removeAttribute(
                "href"
            );


            previous.classList.add(
                "disabled"
            );


            previousTitle.textContent =
                "Beginning of achievements";


            previous.setAttribute(
                "aria-disabled",
                "true"
            );

        }

    }


    setupPrevious();


    /* =========================================================
       NEXT ACHIEVEMENT
    ========================================================= */

    function setupNext() {

        if (
            !next ||
            !nextTitle
        ) {

            return;

        }


        if (
            currentIndex <
            achievementKeys.length - 1
        ) {

            const nextKey =
                achievementKeys[
                    currentIndex + 1
                ];


            const nextAchievement =
                achievements[
                    nextKey
                ];


            next.href =
                `indian_achievements.html?achievement=${encodeURIComponent(
                    nextKey
                )}`;


            nextTitle.textContent =
                nextAchievement.title;


            next.classList.remove(
                "disabled"
            );


            next.removeAttribute(
                "aria-disabled"
            );


            next.setAttribute(
                "aria-label",
                `Next achievement: ${nextAchievement.title}`
            );

        }

        else {

            next.removeAttribute(
                "href"
            );


            next.classList.add(
                "disabled"
            );


            nextTitle.textContent =
                "Journey complete";


            next.setAttribute(
                "aria-disabled",
                "true"
            );

        }

    }


    setupNext();


    /* =========================================================
       FOOTER YEAR
    ========================================================= */

    setText(
        "currentYear",
        new Date().getFullYear()
    );


    /* =========================================================
       NAVBAR
    ========================================================= */

    const nav =
        document.querySelector(
            ".achievement-nav"
        );


    function updateNavbar() {

        if (!nav) {

            return;

        }


        if (
            window.scrollY > 40
        ) {

            nav.classList.add(
                "scrolled"
            );

        }

        else {

            nav.classList.remove(
                "scrolled"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateNavbar,
        {
            passive: true
        }
    );


    updateNavbar();


    /* =========================================================
       HERO PARALLAX
       NO GSAP
    ========================================================= */

    const heroImage =
        document.querySelector(
            ".hero-image img"
        );


    let parallaxFrame =
        null;


    function heroParallax() {

        if (!heroImage) {

            return;

        }


        if (
            window.innerWidth <= 700
        ) {

            heroImage.style.transform =
                "";

            return;

        }


        if (parallaxFrame) {

            return;

        }


        parallaxFrame =
            requestAnimationFrame(
                () => {

                    const scroll =
                        window.scrollY;


                    const heroHeight =
                        window.innerHeight;


                    if (
                        scroll <=
                        heroHeight
                    ) {

                        const movement =
                            scroll * 0.08;


                        heroImage.style.transform =
                            `scale(1.06) translate3d(0, ${movement}px, 0)`;

                    }

                    else {

                        heroImage.style.transform =
                            "scale(1.06)";

                    }


                    parallaxFrame =
                        null;

                }
            );

    }


    window.addEventListener(
        "scroll",
        heroParallax,
        {
            passive: true
        }
    );


    window.addEventListener(
        "resize",
        heroParallax,
        {
            passive: true
        }
    );


    heroParallax();


    /* =========================================================
       SCROLL REVEAL
       INTERSECTION OBSERVER
    ========================================================= */

    let revealObserver =
        null;


    function revealAll() {

        document
            .querySelectorAll(".reveal")
            .forEach(
                element => {

                    element.classList.add(
                        "visible"
                    );

                }
            );

    }


    function observeRevealElements() {

        if (!revealObserver) {

            return;

        }


        document
            .querySelectorAll(
                ".reveal:not(.visible)"
            )
            .forEach(
                element => {

                    revealObserver.observe(
                        element
                    );

                }
            );

    }


    if (
        "IntersectionObserver"
        in window
    ) {

        revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );


                                revealObserver.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {

                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -50px 0px"

                }
            );


        observeRevealElements();

    }

    else {

        revealAll();

    }


    /*
       Dynamic content was created after
       the first observer pass.
    */

    requestAnimationFrame(
        () => {

            observeRevealElements();

        }
    );


    /* =========================================================
       BEGIN READING
    ========================================================= */

    const beginReading =
        document.querySelector(
            ".begin-reading"
        );


    if (beginReading) {

        beginReading.addEventListener(
            "click",
            event => {

                event.preventDefault();


                const target =
                    document.getElementById(
                        "achievementStory"
                    );


                if (!target) {

                    return;

                }


                const navbarHeight =
                    nav
                        ? nav.offsetHeight
                        : 80;


                const targetPosition =
                    target.getBoundingClientRect()
                        .top
                    +
                    window.scrollY
                    -
                    navbarHeight
                    -
                    20;


                window.scrollTo({

                    top:
                        Math.max(
                            0,
                            targetPosition
                        ),

                    behavior:
                        "smooth"

                });

            }
        );

    }


    /* =========================================================
       IMAGE HANDLING
    ========================================================= */

    if (image) {

        image.addEventListener(
            "error",
            () => {

                console.warn(
                    "Achievement image not found:",
                    achievement.image
                );


                image.classList.add(
                    "image-error"
                );

            }
        );


        image.addEventListener(
            "load",
            () => {

                image.classList.add(
                    "image-loaded"
                );


                image.classList.remove(
                    "image-error"
                );

            }
        );

    }


    /* =========================================================
       KEYBOARD NAVIGATION
       LEFT  = PREVIOUS
       RIGHT = NEXT
    ========================================================= */

    document.addEventListener(
        "keydown",
        event => {

            const activeElement =
                document.activeElement;


            const isTyping =
                activeElement &&
                (
                    activeElement.tagName ===
                        "INPUT" ||

                    activeElement.tagName ===
                        "TEXTAREA" ||

                    activeElement.tagName ===
                        "SELECT" ||

                    activeElement.isContentEditable
                );


            if (isTyping) {

                return;

            }


            /* -----------------------------------------------
               PREVIOUS
            ------------------------------------------------ */

            if (
                event.key ===
                    "ArrowLeft" &&
                currentIndex > 0
            ) {

                const previousKey =
                    achievementKeys[
                        currentIndex - 1
                    ];


                window.location.href =
                    `indian_achievements.html?achievement=${encodeURIComponent(
                        previousKey
                    )}`;

            }


            /* -----------------------------------------------
               NEXT
            ------------------------------------------------ */

            if (
                event.key ===
                    "ArrowRight" &&
                currentIndex <
                    achievementKeys.length - 1
            ) {

                const nextKey =
                    achievementKeys[
                        currentIndex + 1
                    ];


                window.location.href =
                    `indian_achievements.html?achievement=${encodeURIComponent(
                        nextKey
                    )}`;

            }

        }
    );


    /* =========================================================
       LOADER
    ========================================================= */

    const loader =
        getElement(
            "pageLoader"
        );


    function hideLoader() {

        document.body.classList.add(
            "loaded"
        );


        if (!loader) {

            return;

        }


        loader.classList.add(
            "hide"
        );


        loader.setAttribute(
            "aria-hidden",
            "true"
        );


        /*
           Do not delete the loader from DOM.
           CSS can handle its final state.
        */

    }


    if (
        document.readyState ===
        "complete"
    ) {

        setTimeout(
            hideLoader,
            350
        );

    }

    else {

        window.addEventListener(
            "load",
            () => {

                setTimeout(
                    hideLoader,
                    350
                );

            },
            {
                once: true
            }
        );

    }


    /* =========================================================
       PAGE READY
    ========================================================= */

    document.body.classList.add(
        "achievement-page-ready"
    );


    /* =========================================================
       ACCESSIBILITY
    ========================================================= */

    document.body.dataset.achievement =
        currentKey;


    /* =========================================================
       DEBUG
    ========================================================= */

    console.log(
        `%cVIDUTHALAI`,
        "font-weight:bold;font-size:18px"
    );


    console.log(
        `Achievement ${achievement.number}/${achievementKeys.length}: ${achievement.title}`
    );


});
