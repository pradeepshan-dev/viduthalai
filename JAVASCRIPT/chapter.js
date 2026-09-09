/* =========================================================
   VIDUTHALAI
   CINEMATIC CHAPTER ENGINE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       GSAP
    ====================================================== */

    if (typeof gsap === "undefined") {
        console.error("GSAP is not loaded.");
        return;
    }

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }


    /* =====================================================
       CHAPTER DATA
    ====================================================== */

    const chapters = {

        /* =================================================
           1857
        ================================================= */

        "1857": {

            number: 1,
            roman: "I",
            year: "1857",
            category: "EARLY RESISTANCE",

            title: "The First Fire",

            image: "../IMAGES/timeline-1857.jpg",

            lead:
                "The summer of 1857 began with a silence that would not last. Across northern India, anger that had been building for years finally erupted into rebellion.",

            openingTitle:
                "A fire that had been <em>building for years.</em>",

            openingLead:
                "The uprising of 1857 did not appear from nowhere. It was the result of years of political expansion, economic pressure, military dissatisfaction and growing resentment.",

            prev: null,
            next: "1885",

            people: [

                {
                    name: "Rani Lakshmibai",
                    role: "Queen of Jhansi",
                    image: "../IMAGES/rani-lakshmi-bai-1.jpeg",

                    description:
                        "One of the most enduring leaders of the 1857 rebellion, she defended Jhansi and became a powerful symbol of resistance.",

                    tags: [
                        "Jhansi",
                        "1857 Revolt",
                        "Armed Resistance"
                    ]
                },

                {
                    name: "Mangal Pandey",
                    role: "Early Spark of Rebellion",
                    image: "../IMAGES/mangal-pandey.jpg",

                    description:
                        "His resistance at Barrackpore became one of the early sparks associated with the uprising of 1857.",

                    tags: [
                        "Barrackpore",
                        "Sepoy",
                        "Rebellion"
                    ]
                },

                {
                    name: "Bahadur Shah Zafar",
                    role: "Symbolic Mughal Emperor",
                    image: "../IMAGES/bahadur-shah.jpeg",

                    description:
                        "The ageing Mughal emperor became the symbolic figurehead around whom many rebels attempted to unite.",

                    tags: [
                        "Delhi",
                        "Mughal Empire",
                        "Symbolic Leader"
                    ]
                },

                {
                    name: "Nana Sahib",
                    role: "Leader at Kanpur",
                    image: "../IMAGES/nana-shahib.jpeg",

                    description:
                        "Nana Sahib emerged as one of the major rebel leaders during the fighting around Kanpur.",

                    tags: [
                        "Kanpur",
                        "1857 Revolt",
                        "Leadership"
                    ]
                },

                {
                    name: "Tantia Tope",
                    role: "Military Commander",
                    image: "../IMAGES/tantia-tope.jpg",

                    description:
                        "A skilled military commander who continued the resistance through campaigns across central India.",

                    tags: [
                        "Military",
                        "Resistance",
                        "Central India"
                    ]
                }

            ]

        },


        /* =================================================
           1885
        ================================================= */

        "1885": {

            number: 2,
            roman: "II",
            year: "1885",
            category: "NATIONAL MOVEMENT",

            title: "The Rise of Organized Nationalism",

            image: "../IMAGES/timeline-1885.jpg",

            lead:
                "A new political platform emerged, giving Indians a national space to articulate their demands for representation and reform.",

            openingTitle:
                "A political voice began <em>taking shape.</em>",

            openingLead:
                "The formation of the Indian National Congress created a new national platform through which Indians could increasingly organize, debate and demand political reform.",

            prev: "1857",
            next: "1905",

            people: [

                {
                    name: "Dadabhai Naoroji",
                    role: "Grand Old Man of India",
                    image: "../IMAGES/dadabhai-naoroji.jpeg",

                    description:
                        "A pioneering nationalist who exposed the economic consequences of colonial rule through his drain theory.",

                    tags: [
                        "Congress",
                        "Drain Theory",
                        "Nationalism"
                    ]
                },

                {
                    name: "A. O. Hume",
                    role: "Congress Founder",
                    image: "../IMAGES/ao-hume.jpeg",

                    description:
                        "Played a central role in establishing the Indian National Congress in 1885.",

                    tags: [
                        "INC",
                        "1885",
                        "Organization"
                    ]
                },

                {
                    name: "W. C. Bonnerjee",
                    role: "First Congress President",
                    image: "../IMAGES/wc-bonnerjee.jpeg",

                    description:
                        "Presided over the first session of the Indian National Congress held in Bombay.",

                    tags: [
                        "Congress",
                        "Bombay",
                        "Leadership"
                    ]
                }

            ]

        },


        /* =================================================
           1905
        ================================================= */

        "1905": {

            number: 3,
            roman: "III",
            year: "1905",
            category: "NATIONAL MOVEMENT",

            title: "Swadeshi & Self-Reliance",

            image: "../IMAGES/timeline-1905.webp",

            lead:
                "The partition of Bengal transformed political protest into a powerful movement for Swadeshi and economic self-reliance.",

            openingTitle:
                "A nation discovered the power of <em>self-reliance.</em>",

            openingLead:
                "The partition of Bengal triggered widespread protest and gave rise to the Swadeshi movement, encouraging Indians to reject foreign goods and strengthen indigenous enterprise.",

            prev: "1885",
            next: "1915",

            people: [

                {
                    name: "Bal Gangadhar Tilak",
                    role: "Assertive Nationalist",
                    image: "../IMAGES/bal-gangadhar-tilak.jpeg",

                    description:
                        "A major nationalist voice who advocated Swaraj and helped turn political nationalism into a mass force.",

                    tags: [
                        "Swaraj",
                        "Swadeshi",
                        "Nationalism"
                    ]
                },

                {
                    name: "Bipin Chandra Pal",
                    role: "Swadeshi Leader",
                    image: "../IMAGES/bipin-chandra-pal-1.jpeg",

                    description:
                        "A leading advocate of Swadeshi, boycott and national education during the movement.",

                    tags: [
                        "Swadeshi",
                        "Boycott",
                        "Bengal"
                    ]
                },

                {
                    name: "Lala Lajpat Rai",
                    role: "Punjab Nationalist",
                    image: "../IMAGES/lala-lajpat-rai.jpeg",

                    description:
                        "A powerful nationalist leader who became one of the prominent voices of assertive Indian nationalism.",

                    tags: [
                        "Punjab",
                        "Nationalism",
                        "Swadeshi"
                    ]
                }

            ]

        },


        /* =================================================
           1915
        ================================================= */

        "1915": {

            number: 4,
            roman: "IV",
            year: "1915",
            category: "MASS MOVEMENT",

            title: "A New Era of Leadership",

            image: "../IMAGES/timeline-1915-1.jpg",

            lead:
                "After years of activism in South Africa, Gandhi returned to India and entered a freedom movement that was about to change dramatically.",

            openingTitle:
                "A new kind of leadership <em>had arrived.</em>",

            openingLead:
                "Gandhi's return to India brought new methods of political action, emphasizing mass participation, non-violence and civil resistance.",

            prev: "1905",
            next: "1919",

            people: [

                {
                    name: "Mahatma Gandhi",
                    role: "Leader of Mass Resistance",
                    image: "../IMAGES/gandhi.jpeg",

                    description:
                        "Gandhi transformed India's freedom struggle through non-violent mass movements and civil disobedience.",

                    tags: [
                        "Satyagraha",
                        "Non-Violence",
                        "Mass Movement"
                    ]
                },

                {
                    name: "Rajendra Prasad",
                    role: "Nationalist Leader",
                    image: "../IMAGES/rajendra-prasad.jpg",

                    description:
                        "A close associate of Gandhi who became an important Congress leader during India's freedom struggle.",

                    tags: [
                        "Congress",
                        "Satyagraha",
                        "Bihar"
                    ]
                }

            ]

        },


        /* =================================================
           1919
        ================================================= */

        "1919": {

            number: 5,
            roman: "V",
            year: "1919",
            category: "TURNING POINT",

            title: "Jallianwala Bagh",

            image: "../IMAGES/timeline-1919.jpg",

            lead:
                "The events at Jallianwala Bagh shocked India and became a profound turning point in the struggle against colonial rule.",

            openingTitle:
                "A tragedy that <em>changed the nation.</em>",

            openingLead:
                "The massacre at Jallianwala Bagh intensified Indian opposition to British rule and deeply changed the political atmosphere across the country.",

            prev: "1915",
            next: "1920",

            people: [

                {
                    name: "Mahatma Gandhi",
                    role: "Nationalist Leader",
                    image: "../IMAGES/gandhi.jpeg",

                    description:
                        "The tragedy influenced Gandhi's growing conviction that British rule had to be challenged through mass non-cooperation.",

                    tags: [
                        "Satyagraha",
                        "Punjab",
                        "National Movement"
                    ]
                },

                {
                    name: "Udham Singh",
                    role: "Revolutionary Avenger",
                    image: "../IMAGES/udham-singh.jpeg",

                    description:
                        "Udham Singh carried the memory of the massacre for decades and later assassinated Michael O'Dwyer.",

                    tags: [
                        "Jallianwala",
                        "Revolutionary",
                        "Punjab"
                    ]
                }

            ]

        },


        /* =================================================
           1920
        ================================================= */

        "1920": {

            number: 6,
            roman: "VI",
            year: "1920",
            category: "MASS MOVEMENT",

            title: "Non-Cooperation",

            image: "../IMAGES/timeline-1920.jpeg",

            lead:
                "Millions of Indians were drawn into a movement that challenged British authority through mass non-cooperation.",

            openingTitle:
                "An entire nation learned the power of <em>non-cooperation.</em>",

            openingLead:
                "The Non-Cooperation Movement transformed the freedom struggle into a mass political campaign involving students, workers, lawyers, farmers and ordinary citizens.",

            prev: "1919",
            next: "1930",

            people: [

                {
                    name: "Mahatma Gandhi",
                    role: "Leader of Non-Cooperation",
                    image: "../IMAGES/gandhi.jpeg",

                    description:
                        "Gandhi led the movement encouraging Indians to withdraw cooperation from colonial institutions.",

                    tags: [
                        "Non-Cooperation",
                        "Satyagraha",
                        "Congress"
                    ]
                },

                {
                    name: "Ali Brothers",
                    role: "Khilafat Leaders",
                    image: "../IMAGES/ali-brothers.avif",

                    description:
                        "The Ali brothers played an important role in connecting the Khilafat cause with the broader nationalist movement.",

                    tags: [
                        "Khilafat",
                        "Nationalism",
                        "Mass Movement"
                    ]
                }

            ]

        },


        /* =================================================
           1930
        ================================================= */

        "1930": {

            number: 7,
            roman: "VII",
            year: "1930",
            category: "CIVIL DISOBEDIENCE",

            title: "The Salt March",

            image: "../IMAGES/dandi-march-1.jpeg",

            lead:
                "A simple act involving salt became one of the most powerful symbols of civil disobedience.",

            openingTitle:
                "A handful of salt became a symbol of <em>freedom.</em>",

            openingLead:
                "Gandhi's march to the sea transformed an everyday commodity into a powerful challenge to colonial authority and inspired civil disobedience across India.",

            prev: "1920",
            next: "1931",

            people: [

                {
                    name: "Mahatma Gandhi",
                    role: "Leader of the Salt March",
                    image: "../IMAGES/gandhi.jpeg",

                    description:
                        "Led the 1930 Salt March from Sabarmati Ashram to Dandi, inspiring a nationwide civil disobedience movement.",

                    tags: [
                        "Dandi",
                        "Salt Satyagraha",
                        "Civil Disobedience"
                    ]
                },

                {
                    name: "Sarojini Naidu",
                    role: "Leader of Civil Disobedience",
                    image: "../IMAGES/sarojini-naidu.jpeg",

                    description:
                        "A poet, nationalist and Congress leader who played a prominent role in the Salt Satyagraha.",

                    tags: [
                        "Salt Satyagraha",
                        "Congress",
                        "Women"
                    ]
                }

            ]

        },


        /* =================================================
           1931
        ================================================= */

        "1931": {

            number: 8,
            roman: "VIII",
            year: "1931",
            category: "POLITICAL NEGOTIATION",

            title: "Gandhi-Irwin Pact",

            image: "../IMAGES/timeline-1931-1.jpg",

            lead:
                "Negotiation entered the centre of India's struggle as Gandhi and Lord Irwin attempted to find a political path forward.",

            openingTitle:
                "Resistance entered the halls of <em>negotiation.</em>",

            openingLead:
                "The Gandhi-Irwin Pact temporarily suspended civil disobedience and opened a new phase of political negotiations between Indian nationalists and the British government.",

            prev: "1930",
            next: "1935",

            people: [

                {
                    name: "Mahatma Gandhi",
                    role: "Congress Negotiator",
                    image: "../IMAGES/gandhi.jpeg",

                    description:
                        "Represented the Indian National Congress in negotiations with Lord Irwin.",

                    tags: [
                        "Gandhi-Irwin Pact",
                        "Congress",
                        "Negotiation"
                    ]
                },

                {
                    name: "Tej Bahadur Sapru",
                    role: "Constitutional Reformer",
                    image: "../IMAGES/tej-bahadur-sapru-1.jpeg",

                    description:
                        "An important constitutional thinker who supported dialogue and political reform.",

                    tags: [
                        "Constitution",
                        "Reform",
                        "Politics"
                    ]
                }

            ]

        },


        /* =================================================
           1935
        ================================================= */

        "1935": {

            number: 9,
            roman: "IX",
            year: "1935",
            category: "CONSTITUTIONAL DEVELOPMENT",

            title: "Constitutional Change",

            image: "../IMAGES/timeline-1935-1.jpg",

            lead:
                "A major constitutional reform expanded provincial autonomy and changed the political landscape.",

            openingTitle:
                "The struggle moved closer to <em>self-government.</em>",

            openingLead:
                "The Government of India Act of 1935 introduced significant constitutional changes and provincial autonomy, creating a new political environment for Indian leaders.",

            prev: "1931",
            next: "1942",

            people: [

                {
                    name: "Jawaharlal Nehru",
                    role: "Congress Leader",
                    image: "../IMAGES/jawaharlal-nehru.jpeg",

                    description:
                        "A leading Congress figure who increasingly advocated complete independence and democratic self-government.",

                    tags: [
                        "Congress",
                        "Purna Swaraj",
                        "Politics"
                    ]
                },

                {
                    name: "Sardar Vallabhbhai Patel",
                    role: "Congress Organizer",
                    image: "../IMAGES/sardar-vallabhbhai-patel.jpeg",

                    description:
                        "A powerful Congress organizer and leader who played a central role in India's political mobilization.",

                    tags: [
                        "Congress",
                        "Organization",
                        "Leadership"
                    ]
                }

            ]

        },


        /* =================================================
           1942
        ================================================= */

        "1942": {

            number: 10,
            roman: "X",
            year: "1942",
            category: "FINAL MASS MOVEMENT",

            title: "Do or Die",

            image: "../IMAGES/timeline-1942.avif",

            lead:
                "The Quit India Movement demanded an immediate end to British rule and carried the freedom struggle into its final decisive phase.",

            openingTitle:
                "The final mass movement began with <em>Do or Die.</em>",

            openingLead:
                "The Quit India Movement launched in August 1942 became one of the most decisive mass challenges to British rule, despite widespread arrests and repression.",

            prev: "1935",
            next: "1945",

            people: [

                {
                    name: "Mahatma Gandhi",
                    role: "Quit India Leader",
                    image: "../IMAGES/gandhi.jpeg",

                    description:
                        "Gandhi called for the British to leave India immediately and gave the movement its famous call of Do or Die.",

                    tags: [
                        "Quit India",
                        "Do or Die",
                        "Congress"
                    ]
                },

                {
                    name: "Aruna Asaf Ali",
                    role: "Revolutionary Congress Leader",
                    image: "../IMAGES/aruna-asaf-ali.jpeg",

                    description:
                        "She became one of the most prominent faces of the underground Quit India Movement.",

                    tags: [
                        "Quit India",
                        "Underground",
                        "Resistance"
                    ]
                },

                {
                    name: "Jayaprakash Narayan",
                    role: "Underground Resistance",
                    image: "../IMAGES/jayaprakash-narayan.jpg",

                    description:
                        "A major underground leader who helped continue resistance after the Congress leadership was arrested.",

                    tags: [
                        "Quit India",
                        "Underground",
                        "Revolution"
                    ]
                }

            ]

        },


        /* =================================================
           1945
        ================================================= */

        "1945": {

            number: 11,
            roman: "XI",
            year: "1945–46",
            category: "FINAL YEARS",

            title: "The Final Years",

            image: "../IMAGES/timeline-1946.jpeg",

            lead:
                "The end of World War II brought growing political pressure, INA trials and unrest within the colonial system.",

            openingTitle:
                "The empire was approaching its <em>final hour.</em>",

            openingLead:
                "The end of the Second World War accelerated political change. The INA trials, naval unrest and growing public pressure weakened the foundations of British rule.",

            prev: "1942",
            next: "1947",

            people: [

                {
                    name: "Subhas Chandra Bose",
                    role: "Leader of the INA",
                    image: "../IMAGES/subashchandrabose.jpg",

                    description:
                        "Bose organized the Indian National Army and sought to challenge British rule through armed struggle.",

                    tags: [
                        "INA",
                        "Azad Hind",
                        "Revolution"
                    ]
                },

                {
                    name: "Jawaharlal Nehru",
                    role: "Congress Leader",
                    image: "../IMAGES/jawaharlal-nehru.jpeg",

                    description:
                        "A central Congress leader during the final negotiations that preceded independence.",

                    tags: [
                        "Congress",
                        "Independence",
                        "Negotiation"
                    ]
                },

                {
                    name: "Sardar Vallabhbhai Patel",
                    role: "Congress Leader",
                    image: "../IMAGES/sardar-vallabhbhai-patel.jpeg",

                    description:
                        "A major nationalist leader during the final phase of British rule and the transition to independence.",

                    tags: [
                        "Congress",
                        "Leadership",
                        "1947"
                    ]
                }

            ]

        },


        /* =================================================
           1947
        ================================================= */

        "1947": {

            number: 12,
            roman: "XII",
            year: "1947",
            category: "FREEDOM",

            title: "Independence",

            image: "../IMAGES/timeline-1947.jpeg",

            lead:
                "After decades of resistance, sacrifice and political struggle, India became an independent nation on 15 August 1947.",

            openingTitle:
                "The struggle <em>became freedom.</em>",

            openingLead:
                "On 15 August 1947, India emerged as an independent nation after decades of resistance, political organization, sacrifice and mass movements.",

            prev: "1945",
            next: null,

            people: [

                {
                    name: "Mahatma Gandhi",
                    role: "Leader of the Freedom Struggle",
                    image: "../IMAGES/gandhi.jpeg",

                    description:
                        "Gandhi's philosophy of non-violence and mass participation became one of the defining forces of India's freedom struggle.",

                    tags: [
                        "Freedom",
                        "Non-Violence",
                        "Satyagraha"
                    ]
                },

                {
                    name: "Jawaharlal Nehru",
                    role: "First Prime Minister",
                    image: "../IMAGES/jawaharlal-nehru.jpeg",

                    description:
                        "India's first Prime Minister led the new nation during its first years of independence.",

                    tags: [
                        "1947",
                        "Prime Minister",
                        "Independence"
                    ]
                },

                {
                    name: "Sardar Vallabhbhai Patel",
                    role: "Iron Man of India",
                    image: "../IMAGES/sardar-vallabhbhai-patel.jpeg",

                    description:
                        "Patel played a crucial role in consolidating the newly independent Indian Union.",

                    tags: [
                        "Integration",
                        "Leadership",
                        "Nation Building"
                    ]
                },

                {
                    name: "Rajendra Prasad",
                    role: "First President of India",
                    image: "../IMAGES/rajendra-prasad.jpg",

                    description:
                        "A major freedom fighter who later became independent India's first President.",

                    tags: [
                        "President",
                        "Constitution",
                        "Republic"
                    ]
                }

            ]

        }

    };


    /* =====================================================
       GET CURRENT CHAPTER
    ====================================================== */

    const params =
        new URLSearchParams(window.location.search);

    const requestedYear =
        params.get("chapter") || "1857";

    const chapter =
        chapters[requestedYear] ||
        chapters["1857"];


    /* =====================================================
       ELEMENTS
    ====================================================== */

    const image =
        document.getElementById("chapterImage");

    const chapterNumber =
        document.getElementById("chapterNumber");

    const chapterLabel =
        document.getElementById("chapterLabel");

    const chapterCategory =
        document.getElementById("chapterCategory");

    const chapterYear =
        document.getElementById("chapterYear");

    const chapterTitle =
        document.getElementById("chapterTitle");

    const chapterLead =
        document.getElementById("chapterLead");

    const openingTitle =
        document.getElementById("openingTitle");

    const openingLead =
        document.getElementById("openingLead");

    const sidebarChapter =
        document.getElementById("sidebarChapter");

    const sidebarYear =
        document.getElementById("sidebarYear");

    const previousChapter =
        document.getElementById("previousChapter");

    const previousChapterTitle =
        document.getElementById("previousChapterTitle");

    const nextChapter =
        document.getElementById("nextChapter");

    const nextChapterTitle =
        document.getElementById("nextChapterTitle");

    const peopleContainer =
        document.getElementById("chapterPeople");


    /* =====================================================
       SAFE ELEMENT HELPER
    ====================================================== */

    function setText(element, value) {

        if (element) {
            element.textContent = value || "";
        }

    }


    /* =====================================================
       LOAD HERO IMAGE
    ====================================================== */

    if (image) {

        image.src = chapter.image;
        image.alt = chapter.title;

        image.style.objectFit = "cover";
        image.style.objectPosition = "center 20%";

        image.loading = "eager";
        image.decoding = "async";

    }


    /* =====================================================
       LOAD CHAPTER TEXT
    ====================================================== */

    setText(
        chapterNumber,
        String(chapter.number).padStart(2, "0")
    );

    setText(
        chapterLabel,
        `CHAPTER ${chapter.roman}`
    );

    setText(
        chapterCategory,
        chapter.category
    );

    setText(
        chapterYear,
        chapter.year
    );

    setText(
        chapterTitle,
        chapter.title
    );

    setText(
        chapterLead,
        chapter.lead
    );

    if (openingTitle) {
        openingTitle.innerHTML =
            chapter.openingTitle;
    }

    setText(
        openingLead,
        chapter.openingLead
    );

    setText(
        sidebarChapter,
        chapter.roman
    );

    setText(
        sidebarYear,
        chapter.year
    );


    /* =====================================================
       PREVIOUS CHAPTER
    ====================================================== */

    if (previousChapter) {

        if (chapter.prev) {

            const previous =
                chapters[chapter.prev];

            if (previous) {

                previousChapter.href =
                    `chapter.html?chapter=${chapter.prev}`;

                setText(
                    previousChapterTitle,
                    previous.title
                );

            }

        }

        else {

            previousChapter.classList.add("disabled");

            previousChapter.removeAttribute("href");

            setText(
                previousChapterTitle,
                "Beginning of the journey"
            );

        }

    }


    /* =====================================================
       NEXT CHAPTER
    ====================================================== */

    if (nextChapter) {

        if (chapter.next) {

            const next =
                chapters[chapter.next];

            if (next) {

                nextChapter.href =
                    `chapter.html?chapter=${chapter.next}`;

                setText(
                    nextChapterTitle,
                    next.title
                );

            }

        }

        else {

            nextChapter.href =
                "timeline.html";

            const label =
                nextChapter.querySelector("label");

            if (label) {
                label.textContent =
                    "RETURN TO TIMELINE";
            }

            setText(
                nextChapterTitle,
                "Complete the journey"
            );

        }

    }


    /* =====================================================
       FOOTER YEAR
    ====================================================== */

    const currentYear =
        document.getElementById("currentYear");

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       PEOPLE
       THIS WAS THE MISSING PART
    ====================================================== */

    function renderPeople() {

        if (!peopleContainer) {

            console.error(
                'Missing #chapterPeople container.'
            );

            return;

        }


        /* Clear old cards */

        peopleContainer.innerHTML = "";


        /* No people */

        if (
            !chapter.people ||
            !chapter.people.length
        ) {

            peopleContainer.innerHTML = `
                <p class="people-empty">
                    No chapter figures available.
                </p>
            `;

            return;

        }


        /* =================================================
           CREATE EVERY PERSON CARD
        ================================================= */

        chapter.people.forEach(
            (person, index) => {

                const card =
                    document.createElement("article");

                card.className =
                    "person-card";


                card.innerHTML = `

                    <div class="person-image">

                        <div
                            class="person-image-background"
                            aria-hidden="true"
                        ></div>

                        <img
                            src="${person.image}"
                            alt="${person.name}"
                            loading="lazy"
                            decoding="async"
                        >

                    </div>


                    <div class="person-content">

                        <div class="person-number">
                            ${String(index + 1).padStart(2, "0")}
                        </div>

                        <h3>
                            ${person.name}
                        </h3>

                        <div class="person-role">
                            ${person.role}
                        </div>

                        <p class="person-description">
                            ${person.description}
                        </p>

                        <div class="person-meta">

                            ${
                                Array.isArray(person.tags)
                                ?
                                person.tags.map(
                                    tag => `
                                        <span class="person-tag">
                                            ${tag}
                                        </span>
                                    `
                                ).join("")
                                :
                                ""
                            }

                        </div>

                    </div>

                `;


                peopleContainer.appendChild(card);


                /* =================================================
                   IMAGE ELEMENTS
                ================================================= */

                const personImage =
                    card.querySelector(".person-image");

                const personImg =
                    card.querySelector(".person-image img");

                const background =
                    card.querySelector(
                        ".person-image-background"
                    );


                if (!personImg) {
                    return;
                }


                /* =================================================
                   BLURRED BACKGROUND
                ================================================= */

                if (background) {

                    background.style.backgroundImage =
                        `url("${person.image}")`;

                }


                /* =================================================
                   IMAGE LOAD FUNCTION
                ================================================= */

                function handleImageLoaded() {

                    personImg.style.opacity = "1";


                    /* Detect portrait */

                    if (
                        personImg.naturalHeight >
                        personImg.naturalWidth
                    ) {

                        personImage.classList.add(
                            "portrait-image"
                        );

                    }

                    else {

                        personImage.classList.remove(
                            "portrait-image"
                        );

                    }

                }


                /* =================================================
                   IMAGE ERROR
                ================================================= */

                function handleImageError() {

                    console.warn(
                        "Unable to load person image:",
                        person.image
                    );


                    personImg.style.opacity = "0";


                    if (background) {

                        background.style.opacity = "0";

                    }


                    personImage.classList.add(
                        "image-error"
                    );

                }


                personImg.addEventListener(
                    "load",
                    handleImageLoaded
                );

                personImg.addEventListener(
                    "error",
                    handleImageError
                );


                /* Cached image */

                if (
                    personImg.complete &&
                    personImg.naturalWidth > 0
                ) {

                    handleImageLoaded();

                }

            }
        );

    }


    /* =====================================================
       RENDER PEOPLE BEFORE GSAP
    ====================================================== */

    renderPeople();


    /* =====================================================
       LOADER
    ====================================================== */

    const loader =
        document.querySelector(".story-loader");

    const loaderLine =
        document.querySelector(".loader-line");


    if (loader && loaderLine) {

        const loaderTimeline =
            gsap.timeline();


        loaderTimeline.to(
            loaderLine,
            {
                width: "120px",
                duration: 1,
                ease: "power2.inOut"
            }
        );


        loaderTimeline.to(
            loader,
            {
                opacity: 0,
                duration: 0.7,
                pointerEvents: "none",

                onComplete: () => {

                    loader.style.display = "none";

                }

            }
        );

    }


    /* =====================================================
       HERO ANIMATION
    ====================================================== */

    const heroTimeline =
        gsap.timeline({
            delay: 0.3
        });


    heroTimeline.from(
        ".chapter-image img",
        {
            scale: 1.15,
            opacity: 0,
            duration: 2,
            ease: "power3.out"
        }
    );


    heroTimeline.from(
        ".image-overlay",
        {
            opacity: 0,
            duration: 1
        },
        "-=1.5"
    );


    heroTimeline.from(
        ".chapter-eyebrow",
        {
            opacity: 0,
            x: -40,
            duration: 0.7,
            ease: "power3.out"
        },
        "-=.8"
    );


    heroTimeline.from(
        ".chapter-year",
        {
            opacity: 0,
            y: 30,
            duration: 0.7
        },
        "-=.4"
    );


    heroTimeline.from(
        ".chapter-hero h1",
        {
            opacity: 0,
            y: 60,
            duration: 1,
            ease: "power3.out"
        },
        "-=.5"
    );


    heroTimeline.from(
        ".chapter-lead",
        {
            opacity: 0,
            y: 30,
            duration: 0.7
        },
        "-=.5"
    );


    heroTimeline.from(
        ".hero-scroll-indicator",
        {
            opacity: 0,
            y: 20,
            duration: 0.5
        },
        "-=.2"
    );


    /* =====================================================
       OPENING ANIMATION
    ====================================================== */

    if (typeof ScrollTrigger !== "undefined") {

        gsap.from(
            ".opening-number",
            {

                scrollTrigger: {
                    trigger: ".story-opening",
                    start: "top 75%",
                    once: true
                },

                opacity: 0,
                x: -80,
                duration: 1,
                ease: "power3.out"

            }
        );


        gsap.from(
            ".opening-content > *",
            {

                scrollTrigger: {
                    trigger: ".story-opening",
                    start: "top 75%",
                    once: true
                },

                opacity: 0,
                y: 40,
                stagger: 0.12,
                duration: 0.8,
                ease: "power3.out"

            }
        );


        /* =================================================
           STORY PARAGRAPHS
        ================================================== */

        gsap.utils
            .toArray(
                ".story-text p, .story-text blockquote, .story-break"
            )
            .forEach(element => {

                gsap.from(
                    element,
                    {

                        scrollTrigger: {
                            trigger: element,
                            start: "top 88%",
                            once: true
                        },

                        opacity: 0,
                        y: 35,
                        duration: 0.8,
                        ease: "power3.out"

                    }
                );

            });


        /* =================================================
           SIGNIFICANCE
        ================================================== */

        gsap.from(
            ".significance-grid > div",
            {

                scrollTrigger: {
                    trigger: ".significance",
                    start: "top 75%",
                    once: true
                },

                opacity: 0,
                y: 50,
                stagger: 0.2,
                duration: 0.9,
                ease: "power3.out"

            }
        );


        /* =================================================
           PEOPLE
           NOW CARDS EXIST BEFORE THIS RUNS
        ================================================== */

        gsap.from(
            ".person-card",
            {

                scrollTrigger: {
                    trigger: ".chapter-people",
                    start: "top 75%",
                    once: true
                },

                opacity: 0,
                y: 60,
                stagger: 0.15,
                duration: 0.9,
                ease: "power3.out"

            }
        );


        /* =================================================
           NAVIGATION
        ================================================== */

        gsap.from(
            ".chapter-nav-link",
            {

                scrollTrigger: {
                    trigger: ".chapter-navigation",
                    start: "top 85%",
                    once: true
                },

                opacity: 0,
                y: 40,
                stagger: 0.15,
                duration: 0.8,
                ease: "power3.out"

            }
        );


        /* =================================================
           NAVBAR ON SCROLL
        ================================================= */

        ScrollTrigger.create({

            start: "top -50",

            onEnter: () => {

                gsap.to(
                    ".story-nav",
                    {
                        backgroundColor:
                            "rgba(8,10,14,.94)",
                        duration: 0.3
                    }
                );

            },

            onLeaveBack: () => {

                gsap.to(
                    ".story-nav",
                    {
                        backgroundColor:
                            "rgba(8,10,14,0)",
                        duration: 0.3
                    }
                );

            }

        });

    }


    /* =====================================================
       REFRESH SCROLLTRIGGER
       AFTER PEOPLE CARDS ARE IN DOM
    ====================================================== */

    if (
        typeof ScrollTrigger !== "undefined"
    ) {

        window.addEventListener(
            "load",
            () => {

                ScrollTrigger.refresh();

            }
        );

    }


});