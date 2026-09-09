/* =========================================================
   VIDUTHALAI — LEADERS
   ---------------------------------------------------------
   VANILLA JS
   NO GSAP
   NO PAGE RELOAD FOR LEADER DETAIL

   FEATURES
   ---------------------------------------------------------
   • 15 Prime Ministers
   • Editorial archive
   • Contained portraits
   • Dedicated leader detail
   • Existing story content
   • Browser history
   • Direct URL
   • Mobile navigation
   • Auth state
   • Scroll reveal
   • Custom cursor
   • Card tilt
   • Image preload
   • Reduced motion
   • DIRECT CLICK → DETAIL SCROLL
========================================================= */

"use strict";


document.addEventListener("DOMContentLoaded", () => {


/* =========================================================
   LEADER DATA
========================================================= */

const leaders = {


    /* =====================================================
       01 — JAWAHARLAL NEHRU
    ====================================================== */

    nehru: {

        number: "01",

        name: "Jawaharlal Nehru",

        years: "1947 — 1964",

        born: "14 NOVEMBER 1889",

        birthplace: "ALLAHABAD",

        died: "27 MAY 1964 · IN OFFICE",

        known: "FIRST PRIME MINISTER",

        legacy: "MODERN INDIA",

        contribution: "NATION BUILDING",

        role:
            "India's first Prime Minister who helped build the institutional foundations of modern India.",

        description:
            "Nehru became India's first Prime Minister on 15 August 1947, taking charge of a newly independent nation still reeling from the trauma of Partition.",

        quote:
            "The foundations of a modern democratic India were built during his long first tenure.",

        story: [

            "Jawaharlal Nehru became India's first Prime Minister on 15 August 1947, taking charge of a newly independent nation still reeling from the trauma of Partition.",

            "During his 16-year rule, he helped establish many of the institutions that became the foundation of modern India. He established the Planning Commission and introduced the Five-Year Plans to encourage industrial and agricultural development.",

            "His government promoted heavy industries and public-sector investment, including major steel plants at Bhilai, Rourkela and Durgapur. He also supported scientific and technical education through institutions such as the IITs and AIIMS.",

            "Nehru championed a secular and democratic state with a socialist-leaning economic outlook. He worked to strengthen the Indian Union and address the difficult political and territorial challenges facing the newly independent country.",

            "His tenure included the 1947–48 Kashmir conflict with Pakistan and the difficult 1962 Sino-Indian War, which ended in a major setback for India.",

            "On the international stage, Nehru became one of the leading voices of the Non-Aligned Movement alongside leaders such as Gamal Abdel Nasser and Josip Broz Tito.",

            "His government also introduced important reforms to Hindu personal law that expanded women's rights in areas including marriage, divorce and inheritance.",

            "Nehru remained Prime Minister until his death in office on 27 May 1964. His legacy remains closely associated with India's democratic, scientific and institutional foundations."

        ],

        image:
            "../images//jawaharlal-nehru.jpeg"

    },


    /* =====================================================
       02 — GULZARILAL NANDA
    ====================================================== */

    nanda: {

        number: "02",

        name: "Gulzarilal Nanda",

        years: "1964 · 1966",

        born: "04 JULY 1898",

        birthplace: "SIALKOT",

        died: "15 JANUARY 1998",

        known: "ACTING PRIME MINISTER",

        legacy: "TWICE ACTING PM",

        contribution: "TRANSITIONAL LEADERSHIP",

        role:
            "Senior statesman who served twice as India's acting Prime Minister during periods of political transition.",

        description:
            "Gulzarilal Nanda served twice as acting Prime Minister, maintaining governmental continuity after the deaths of Jawaharlal Nehru and Lal Bahadur Shastri.",

        quote:
            "Leadership during transition can be as important as leadership during transformation.",

        story: [

            "Gulzarilal Nanda served twice as India's acting Prime Minister, first following the death of Jawaharlal Nehru in 1964 and again after the death of Lal Bahadur Shastri in 1966.",

            "His first spell lasted from 27 May to 9 June 1964, while his second lasted from 11 to 24 January 1966. Each period lasted only around two weeks.",

            "Nanda's role during these moments was primarily transitional. He helped maintain administrative continuity and political stability while the Congress party selected a permanent successor.",

            "Outside his brief periods as Prime Minister, Nanda had a long political career and served as Union Minister for Labour and Planning.",

            "His work included employment, industrial relations and national planning. He is remembered particularly for providing stability during two uncertain moments in India's early political history."

        ],

        image:
            "../images//leaders/gulzarilal-nanda.jpeg"

    },


    /* =====================================================
       03 — LAL BAHADUR SHASTRI
    ====================================================== */

    shastri: {

        number: "03",

        name: "Lal Bahadur Shastri",

        years: "1964 — 1966",

        born: "02 OCTOBER 1904",

        birthplace: "MUGHALSARAI",

        died: "11 JANUARY 1966 · TASHKENT · IN OFFICE",

        known: "JAI JAWAN JAI KISAN",

        legacy: "1965 WAR LEADERSHIP",

        contribution: "NATIONAL UNITY",

        role:
            "Prime Minister remembered for his leadership during the 1965 India-Pakistan War and his emphasis on national unity.",

        description:
            "Lal Bahadur Shastri became Prime Minister after Nehru's death and led India through the 1965 India-Pakistan War while emphasizing food security, self-reliance and national unity.",

        quote:
            "A quiet leadership style that carried India through war, shortages and uncertainty.",

        story: [

            "Lal Bahadur Shastri became India's second Prime Minister after the death of Jawaharlal Nehru in 1964.",

            "Despite his quiet and modest public personality, Shastri demonstrated strong leadership during the 1965 India-Pakistan War.",

            "He gave the famous slogan \"Jai Jawan Jai Kisan\", emphasizing the importance of India's soldiers and farmers at a time when the country faced both military pressure and serious food shortages.",

            "Shastri encouraged agricultural development and supported efforts that contributed to India's later Green Revolution. He also supported initiatives associated with the development of India's White Revolution and increased milk production.",

            "His government continued India's industrial and planning policies while emphasizing self-reliance and austerity. Shastri personally became known for his simple lifestyle.",

            "Following the 1965 war, he travelled to Tashkent in the Soviet Union and signed a peace agreement with Pakistan's President Ayub Khan.",

            "Shastri died suddenly in Tashkent on 11 January 1966, shortly after signing the agreement, while still serving as Prime Minister."

        ],

        image:
            "../images//lal-bahadur-shastri.jpeg"

    },


    /* =====================================================
       04 — INDIRA GANDHI
    ====================================================== */

    indira: {

        number: "04",

        name: "Indira Gandhi",

        years: "1966 — 1977 · 1980 — 1984",

        born: "19 NOVEMBER 1917",

        birthplace: "ALLAHABAD",

        died: "31 OCTOBER 1984 · ASSASSINATED",

        known: "FIRST WOMAN PRIME MINISTER",

        legacy: "1971 · EMERGENCY",

        contribution: "DECISIVE LEADERSHIP",

        role:
            "India's first woman Prime Minister, known for decisive leadership and major political transformations.",

        description:
            "Indira Gandhi's tenure included bank nationalization, the 1971 Bangladesh Liberation War, India's first nuclear test and the controversial Emergency.",

        quote:
            "A defining political figure whose decisions reshaped India's domestic and international trajectory.",

        story: [

            "Indira Gandhi became India's first woman Prime Minister in 1966 and served two periods, from 1966 to 1977 and again from 1980 until 1984.",

            "In 1969, her government nationalized 14 major commercial banks. The move was intended to expand access to credit and direct financial resources toward rural and developmental priorities.",

            "One of the defining moments of her foreign policy came in 1971, when India intervened in the Bangladesh Liberation War. The conflict resulted in the creation of Bangladesh and represented a major strategic victory for India.",

            "In 1974, India conducted its first nuclear test, code-named \"Smiling Buddha\", marking India's entry into the nuclear age.",

            "Her most controversial decision came in 1975 when she declared a national Emergency. During the Emergency, civil liberties were restricted, opposition leaders were imprisoned and press censorship was imposed.",

            "Indira Gandhi lost the 1977 election but returned to power in 1980. Her second period in office continued to be characterized by strong and centralized leadership.",

            "She was assassinated by two of her bodyguards on 31 October 1984, following the controversial Operation Blue Star earlier that year."

        ],

        image:
            "../images//leaders/indira-gandhi.jpeg"

    },


    /* =====================================================
       05 — MORARJI DESAI
    ====================================================== */

    morarji: {

        number: "05",

        name: "Morarji Desai",

        years: "1977 — 1979",

        born: "29 FEBRUARY 1896",

        birthplace: "BHADELI, GUJARAT",

        died: "10 APRIL 1995",

        known: "FIRST NON-CONGRESS PM",

        legacy: "JANATA GOVERNMENT",

        contribution: "DEMOCRATIC TRANSITION",

        role:
            "India's first Prime Minister from outside the Congress party.",

        description:
            "Morarji Desai led the Janata Party government after the Emergency and focused on restoring democratic institutions and civil liberties.",

        quote:
            "The restoration of democratic institutions became the defining mission of his government.",

        story: [

            "Morarji Desai became India's first Prime Minister from outside the Congress party after the Janata Party won the 1977 general election.",

            "His government came to power after widespread opposition to the Emergency imposed by Indira Gandhi.",

            "One of the government's central tasks was restoring democratic institutions and civil liberties. Political prisoners were released, press restrictions were eased and several Emergency-era measures were reversed.",

            "Desai also sought improved relations with neighbouring countries, including Pakistan and China.",

            "However, the Janata coalition consisted of several political groups with different ideologies and leadership ambitions. Internal disagreements eventually weakened the government.",

            "Desai resigned in 1979 after losing political support, bringing India's first non-Congress national government to an end."

        ],

        image:
            "../images//leaders/morarji-desai.jpeg"

    },


    /* =====================================================
       06 — CHARAN SINGH
    ====================================================== */

    charan: {

        number: "06",

        name: "Charan Singh",

        years: "1979 — 1980",

        born: "23 DECEMBER 1902",

        birthplace: "NOORPUR, UTTAR PRADESH",

        died: "29 MAY 1987",

        known: "FARMERS' LEADER",

        legacy: "RURAL INDIA",

        contribution: "FARMERS' INTERESTS",

        role:
            "Prime Minister closely associated with farmers and rural India's political interests.",

        description:
            "Charan Singh was a leading advocate for farmers and rural communities and briefly served as Prime Minister during the collapse of the Janata government.",

        quote:
            "His political vision placed the farmer and rural India at the centre of national policy.",

        story: [

            "Charan Singh became Prime Minister in 1979 after the Janata Party government broke apart.",

            "He was one of India's most prominent political advocates for farmers and rural communities. Throughout his career, he supported land reforms and policies intended to improve the position of small and marginal farmers.",

            "His political thinking focused strongly on agriculture, rural development and reducing the dominance of large landholders.",

            "His period as Prime Minister was extremely short and politically unstable. His government depended on outside support from the Congress party.",

            "Congress eventually withdrew its support before Charan Singh could establish a majority through a vote of confidence in Parliament.",

            "As a result, he governed for less than six months and never faced Parliament as sitting Prime Minister in a confidence vote."

        ],

        image:
            "../images//leaders/charan-singh.jpeg"

    },


    /* =====================================================
       07 — RAJIV GANDHI
    ====================================================== */

    rajiv: {

        number: "07",

        name: "Rajiv Gandhi",

        years: "1984 — 1989",

        born: "20 AUGUST 1944",

        birthplace: "BOMBAY",

        died: "21 MAY 1991 · ASSASSINATED",

        known: "COMPUTERIZATION & TELECOM",

        legacy: "VOTING AGE 18",

        contribution: "TECHNOLOGICAL MODERNIZATION",

        role:
            "Prime Minister associated with India's push toward computerization, telecommunications and technological modernization.",

        description:
            "Rajiv Gandhi became Prime Minister after the assassination of Indira Gandhi and promoted computerization, telecommunications and political reforms.",

        quote:
            "His government helped push India toward a more technologically connected future.",

        story: [

            "Rajiv Gandhi became Prime Minister in 1984 following the assassination of his mother, Indira Gandhi. At the age of 40, he became the youngest Prime Minister in India's history at that time.",

            "His government strongly promoted computerization, telecommunications and technological modernization. These policies helped create conditions for India's later information technology expansion.",

            "One important democratic reform during his tenure was the lowering of the voting age from 21 to 18, bringing millions of younger citizens into the electoral process.",

            "His government negotiated several regional peace agreements, including the Assam Accord and Punjab Accord, attempting to address political and separatist tensions.",

            "His government was also damaged by the Bofors arms deal controversy, which became a major political issue before the 1989 general election.",

            "Rajiv Gandhi later attempted to return to national power but was assassinated by a suicide bomber during an election campaign rally in 1991."

        ],

        image:
            "../images//leaders/rajiv-gandhi.jpeg"

    },


    /* =====================================================
       08 — V.P. SINGH
    ====================================================== */

    vp: {

        number: "08",

        name: "V.P. Singh",

        years: "1989 — 1990",

        born: "25 JUNE 1931",

        birthplace: "ALLAHABAD",

        died: "27 NOVEMBER 2008",

        known: "MANDAL COMMISSION",

        legacy: "SOCIAL JUSTICE",

        contribution: "SOCIAL JUSTICE",

        role:
            "Prime Minister whose government implemented the Mandal Commission recommendations on reservations.",

        description:
            "V.P. Singh led a National Front coalition and is particularly remembered for implementing the Mandal Commission recommendations for Other Backward Classes.",

        quote:
            "His government placed questions of representation and social justice at the centre of national politics.",

        story: [

            "V.P. Singh became Prime Minister in 1989 as leader of the National Front coalition. His government came to power amid strong anti-corruption sentiment following the Bofors controversy.",

            "His most significant and lasting policy decision was the implementation of the Mandal Commission recommendations.",

            "The decision introduced 27 percent reservation for Other Backward Classes in government employment, profoundly affecting India's social and political landscape.",

            "The announcement triggered widespread protests across the country, particularly among sections of upper-caste students. The policy nevertheless became a defining element of India's affirmative-action politics.",

            "His government also faced intense communal and political tensions surrounding the Ram Janmabhoomi movement in Ayodhya.",

            "The National Front coalition eventually collapsed after the withdrawal of support from a key political ally."

        ],

        image:
            "../images//leaders/vp-singh-1.jpeg"

    },


    /* =====================================================
       09 — CHANDRA SHEKHAR
    ====================================================== */

    chandra: {

        number: "09",

        name: "Chandra Shekhar",

        years: "1990 — 1991",

        born: "01 JULY 1927",

        birthplace: "IBRAHIMPATTI, UTTAR PRADESH",

        died: "08 JULY 2007",

        known: "EIGHTH PRIME MINISTER",

        legacy: "SHORT TENURE",

        contribution: "POLITICAL TRANSITION",

        role:
            "Prime Minister who led India during a period of political and economic uncertainty.",

        description:
            "Chandra Shekhar led a minority government during a difficult period of political instability and the beginnings of India's 1991 economic crisis.",

        quote:
            "A brief tenure during one of the most difficult transitions in India's economic history.",

        story: [

            "Chandra Shekhar became Prime Minister in November 1990 after the fall of V.P. Singh's government.",

            "His government was a minority administration that depended on outside support from the Congress party.",

            "His short tenure coincided with growing economic pressure and the early stages of the severe balance-of-payments crisis that India would face in 1991.",

            "His government took emergency economic measures while attempting to manage the country's worsening financial position.",

            "Political instability limited the government's ability to pursue a long-term programme. Congress eventually withdrew its support.",

            "Chandra Shekhar resigned in 1991 shortly before the economic crisis reached its most critical stage."

        ],

        image:
            "../images//leaders/chandra-shekhar.jpeg"

    },


    /* =====================================================
       10 — P.V. NARASIMHA RAO
    ====================================================== */

    rao: {

        number: "10",

        name: "P.V. Narasimha Rao",

        years: "1991 — 1996",

        born: "28 JUNE 1921",

        birthplace: "VANGARA, KARIMNAGAR",

        died: "23 DECEMBER 2004",

        known: "ECONOMIC LIBERALIZATION",

        legacy: "1991 REFORMS",

        contribution: "ECONOMIC LIBERALIZATION",

        role:
            "Prime Minister who launched a landmark phase of economic liberalization and reform in India.",

        description:
            "P.V. Narasimha Rao led India through the 1991 economic crisis and launched sweeping economic reforms alongside Finance Minister Manmohan Singh.",

        quote:
            "The 1991 reforms became one of the most important turning points in India's economic history.",

        story: [

            "P.V. Narasimha Rao became Prime Minister in 1991 at one of the most difficult economic moments in independent India's history.",

            "India's foreign exchange reserves were close to being exhausted. Working closely with Finance Minister Manmohan Singh, Rao's government launched the landmark economic reforms of 1991.",

            "The reforms dismantled major parts of the License Raj, reduced government controls over private industry, encouraged foreign investment and changed India's broader economic policy.",

            "These reforms are widely regarded as a major turning point that helped stabilize India's economy and laid the foundation for decades of stronger economic growth.",

            "Rao also pursued the Look East policy, strengthening India's relationship with Southeast Asian economies. India established full diplomatic relations with Israel in 1992 and worked to improve ties with the United States.",

            "His government also faced major political and social challenges, including the demolition of the Babri Masjid in 1992 and the communal violence that followed.",

            "Rao is often remembered as one of the key architects of India's economic transformation and the political leader who guided the country through the 1991 crisis."

        ],

        image:
            "../images//leaders/pv-narasimha-rao.jpeg"

    },


    /* =====================================================
       11 — ATAL BIHARI VAJPAYEE
    ====================================================== */

    vajpayee: {

        number: "11",

        name: "Atal Bihari Vajpayee",

        years: "1996 · 1998 — 1999 · 1999 — 2004",

        born: "25 DECEMBER 1924",

        birthplace: "GWALIOR",

        died: "16 AUGUST 2018",

        known: "POKHRAN-II",

        legacy: "GOLDEN QUADRILATERAL",

        contribution: "INFRASTRUCTURE & SECURITY",

        role:
            "Prime Minister remembered for nuclear tests, infrastructure development and leadership during the Kargil War.",

        description:
            "Atal Bihari Vajpayee led India through the coalition era, overseeing the Pokhran-II nuclear tests, the Kargil War response and major infrastructure programmes.",

        quote:
            "A coalition-era leader who combined strategic ambition with parliamentary statesmanship.",

        story: [

            "Atal Bihari Vajpayee served as Prime Minister during three periods, beginning with a brief 13-day government in 1996. He returned to power in 1998 and again after the 1999 general election.",

            "His government conducted the Pokhran-II nuclear tests in May 1998, publicly demonstrating India's nuclear capability and resulting in international sanctions.",

            "Vajpayee also pursued peace with Pakistan. The Lahore bus diplomacy initiative represented an important attempt to improve bilateral relations.",

            "Relations deteriorated soon afterwards with the 1999 Kargil conflict. India's armed forces successfully pushed back Pakistani forces from the occupied positions.",

            "Domestically, his government launched the Golden Quadrilateral highway project connecting India's major metropolitan centres.",

            "His government also promoted Sarva Shiksha Abhiyan, telecommunications development and reforms involving public-sector enterprises.",

            "Known for his powerful oratory and poetry, Vajpayee combined nationalist politics with a reputation for parliamentary debate and diplomatic pragmatism.",

            "He remained Prime Minister until the BJP-led coalition lost the 2004 general election."

        ],

        image:
            "../images//leaders/atal-bihari-vajpayee.jpeg"

    },


    /* =====================================================
       12 — H.D. DEVE GOWDA
    ====================================================== */

    gowda: {

        number: "12",

        name: "H.D. Deve Gowda",

        years: "1996 — 1997",

        born: "18 MAY 1933",

        birthplace: "HARADANAHALLI, KARNATAKA",

        died: "LIVING",

        known: "REGIONAL LEADERSHIP",

        legacy: "UNITED FRONT",

        contribution: "COALITION GOVERNANCE",

        role:
            "Prime Minister who led the United Front coalition government during the mid-1990s.",

        description:
            "H.D. Deve Gowda became Prime Minister as a compromise candidate leading the United Front coalition after the 1996 election.",

        quote:
            "His tenure reflected the growing importance of regional voices in national coalition politics.",

        story: [

            "H.D. Deve Gowda became Prime Minister in 1996 after the general election produced a fragmented Parliament.",

            "A farmer-politician from Karnataka, he emerged as a compromise candidate for the United Front, a coalition of regional and left-leaning parties.",

            "His government emphasized rural development, decentralization and the interests of agricultural communities.",

            "His tenure reflected the growing importance of coalition politics in India's national government during the 1990s.",

            "The United Front government depended on outside support from the Congress party. When Congress withdrew that support, Deve Gowda's government fell after less than a year in office."

        ],

        image:
            "../images//leaders/hd-deve-gowda.jpeg"

    },


    /* =====================================================
       13 — I.K. GUJRAL
    ====================================================== */

    gujral: {

        number: "13",

        name: "I.K. Gujral",

        years: "1997 — 1998",

        born: "04 DECEMBER 1919",

        birthplace: "JHELUM",

        died: "30 NOVEMBER 2012",

        known: "FOREIGN POLICY",

        legacy: "GUJRAL DOCTRINE",

        contribution: "NEIGHBOURHOOD DIPLOMACY",

        role:
            "Prime Minister and statesman known for his approach to India's relations with neighbouring countries.",

        description:
            "I.K. Gujral led the United Front government and became particularly known for the foreign-policy approach called the Gujral Doctrine.",

        quote:
            "Neighbourhood diplomacy became the defining idea of his short administration.",

        story: [

            "I.K. Gujral became Prime Minister in 1997 after the fall of H.D. Deve Gowda's United Front government.",

            "A former diplomat and experienced politician, Gujral is best remembered for his approach to India's relations with neighbouring countries.",

            "The approach became known as the Gujral Doctrine. It emphasized goodwill and unilateral, non-reciprocal concessions toward smaller neighbouring countries where possible.",

            "Countries associated with this diplomatic approach included Nepal, Bangladesh, Bhutan and Sri Lanka.",

            "The objective was to create greater regional trust and improve India's neighbourhood relations without demanding immediate reciprocity.",

            "Like the government before it, Gujral's administration was dependent on coalition support. Congress eventually withdrew its support, bringing the government down in 1998."

        ],

        image:
            "../images//leaders/ik-gujral.jpeg"

    },


    /* =====================================================
       14 — MANMOHAN SINGH
    ====================================================== */

    manmohan: {

        number: "14",

        name: "Manmohan Singh",

        years: "2004 — 2014",

        born: "26 SEPTEMBER 1932",

        birthplace: "GAH, PUNJAB",

        died: "26 DECEMBER 2024",

        known: "ECONOMIC REFORMS",

        legacy: "RTI · MGNREGA · AADHAAR",

        contribution: "SOCIAL & ECONOMIC POLICY",

        role:
            "Prime Minister whose decade in office was marked by major social, economic and institutional initiatives.",

        description:
            "Manmohan Singh served two consecutive terms as Prime Minister and oversaw major social legislation, strong economic growth and the India-US Civil Nuclear Agreement.",

        quote:
            "A decade of governance shaped by economic growth, social legislation and institutional expansion.",

        story: [

            "Manmohan Singh became Prime Minister in 2004 and served two consecutive terms under the Congress-led United Progressive Alliance government.",

            "An economist who had earlier played a central role in the 1991 economic reforms as Finance Minister, Singh brought strong economic expertise to the Prime Minister's Office.",

            "His governments introduced several major social-policy initiatives, including the Right to Information Act of 2005 and the Mahatma Gandhi National Rural Employment Guarantee Act.",

            "MGNREGA provided a legal guarantee of up to 100 days of wage employment per year to eligible rural households.",

            "His government also launched Aadhaar, the national unique identification programme intended to improve the delivery of welfare and public services.",

            "In foreign policy, the India-US Civil Nuclear Agreement signed in 2008 helped end India's long period of nuclear isolation and opened the way for civilian nuclear cooperation.",

            "India's economy experienced strong growth during much of his tenure, and his government navigated the 2008 global financial crisis.",

            "His second term was nevertheless overshadowed by major corruption controversies, including the 2G spectrum and coal allocation cases, which damaged the government's public image.",

            "Singh remained widely respected for his reputation as a technocratic economist and for his role in shaping India's economic policy."

        ],

        image:
            "../images//leaders/manmohan-singh.jpeg"

    },


    /* =====================================================
       15 — NARENDRA MODI
    ====================================================== */

    modi: {

        number: "15",

        name: "Narendra Modi",

        years: "2014 — PRESENT",

        born: "17 SEPTEMBER 1950",

        birthplace: "VADNAGAR, GUJARAT",

        died: "LIVING",

        known: "DIGITAL INDIA",

        legacy: "JAN DHAN · GST · SWACHH BHARAT",

        contribution: "DIGITAL TRANSFORMATION",

        role:
            "Prime Minister serving since 2014, associated with large-scale economic, digital, infrastructure and governance initiatives.",

        description:
            "Narendra Modi became Prime Minister in 2014 and began a third consecutive term in June 2024, overseeing major economic, digital, infrastructure and foreign-policy initiatives.",

        quote:
            "A period defined by large-scale programmes, digital infrastructure and an increasingly assertive global profile.",

        story: [

            "Narendra Modi became Prime Minister in 2014 and began his third consecutive term in June 2024.",

            "He is the first Prime Minister born after India's independence. His governments have introduced and expanded several large national programmes.",

            "Jan Dhan Yojana expanded access to banking and financial services, particularly for people who previously had limited access to formal banking.",

            "Swachh Bharat Abhiyan became a nationwide sanitation campaign focused on household toilets, cleanliness and ending open defecation.",

            "Digital India promoted digital infrastructure, connectivity and online delivery of government services.",

            "In 2016, his government announced demonetization of high-value currency notes in an effort presented as a measure against unaccounted wealth and counterfeit currency.",

            "In 2017, the Goods and Services Tax was implemented, creating a unified indirect-tax framework across India.",

            "In 2019, his government revoked the special constitutional status of Jammu and Kashmir under Article 370 and reorganized the former state into Union Territories.",

            "His government has also pursued an active foreign-policy strategy, strengthening relationships with the United States, Gulf countries and partners in the Quad.",

            "India's space programme has continued to receive strong attention during his tenure, including major lunar missions and preparations for the Gaganyaan human spaceflight programme.",

            "His tenure has also been associated with significant infrastructure expansion and large-scale digital public infrastructure.",

            "Narendra Modi remains Prime Minister as of 2026."

        ],

        image:
            "../images//leaders/narendra-modi.jpeg"

    }

};


/* =========================================================
   HELPERS
========================================================= */

const $ = selector =>
    document.querySelector(selector);

const $$ = selector =>
    [...document.querySelectorAll(selector)];


/* =========================================================
   DOM
========================================================= */

const leadersList =
    $("#leadersList");

const leaderDirectory =
    $("#leaderDirectory");

const leadersIntro =
    $("#leadersIntro");

const leaderDetail =
    $("#leaderDetail");

const detailBack =
    $("#detailBack");

const detailBackground =
    $("#detailBackground");

const detailNumber =
    $("#detailNumber");

const detailTerm =
    $("#detailTerm");

const detailName =
    $("#detailName");

const detailRole =
    $("#detailRole");

const detailDescription =
    $("#detailDescription");

const detailBorn =
    $("#detailBorn");

const detailBirthplace =
    $("#detailBirthplace");

const detailDied =
    $("#detailDied");

const detailTermFact =
    $("#detailTermFact");

const detailContribution =
    $("#detailContribution");

const detailSideYear =
    $("#detailSideYear");

const detailStory =
    $("#detailMoreInformation");

const currentYear =
    $("#currentYear");

const navbar =
    $("#navbar");

const loader =
    $("#pageLoader");

const mobileMenuButton =
    $("#mobileMenuButton");

const mobileMenu =
    $("#mobileMenu");


/* =========================================================
   STATE
========================================================= */

let currentLeaderKey = null;

let showAllButton = null;

let lastScrollY =
    window.scrollY;

let directoryScrollPosition = 0;


/* =========================================================
   AUTH
   SAME LOCAL STORAGE BEHAVIOUR
========================================================= */

const isLoggedIn =
    localStorage.getItem(
        "viduthalaiLoggedIn"
    ) === "true";

const savedUsername =
    localStorage.getItem(
        "viduthalaiCurrentUser"
    ) ||
    localStorage.getItem(
        "viduthalaiUsername"
    ) ||
    "User";


const authLoggedOut =
    $("#authLoggedOut");

const authLoggedIn =
    $("#authLoggedIn");

const mobileAuthLoggedOut =
    $("#mobileAuthLoggedOut");

const mobileAuthLoggedIn =
    $("#mobileAuthLoggedIn");

const navbarUsername =
    $("#navbarUsername");

const mobileNavbarUsername =
    $("#mobileNavbarUsername");


function updateAuthUI() {

    if (isLoggedIn) {

        if (authLoggedOut)
            authLoggedOut.style.display = "none";

        if (authLoggedIn)
            authLoggedIn.style.display = "flex";

        if (navbarUsername)
            navbarUsername.textContent =
                savedUsername;


        if (mobileAuthLoggedOut)
            mobileAuthLoggedOut.style.display = "none";

        if (mobileAuthLoggedIn)
            mobileAuthLoggedIn.style.display = "flex";

        if (mobileNavbarUsername)
            mobileNavbarUsername.textContent =
                savedUsername;

    } else {

        if (authLoggedOut)
            authLoggedOut.style.display = "flex";

        if (authLoggedIn)
            authLoggedIn.style.display = "none";

        if (mobileAuthLoggedOut)
            mobileAuthLoggedOut.style.display = "flex";

        if (mobileAuthLoggedIn)
            mobileAuthLoggedIn.style.display = "none";

    }

}

updateAuthUI();


/* =========================================================
   LOGOUT
========================================================= */

function logoutUser() {

    localStorage.removeItem(
        "viduthalaiLoggedIn"
    );

    localStorage.removeItem(
        "viduthalaiUsername"
    );

    localStorage.removeItem(
        "viduthalaiCurrentUser"
    );

    window.location.replace(
        "home.html"
    );

}

const logoutButton =
    $("#logoutButton");

const mobileLogoutButton =
    $("#mobileLogoutButton");

if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        logoutUser
    );

}

if (mobileLogoutButton) {

    mobileLogoutButton.addEventListener(
        "click",
        logoutUser
    );

}


/* =========================================================
   STORY HEADINGS
========================================================= */

const storyHeadings = [

    "THE BEGINNING",
    "THE FIRST CHAPTER",
    "A NATION IN TRANSITION",
    "POLICY & REFORM",
    "THE TURNING POINT",
    "INDIA & THE WORLD",
    "CHALLENGES",
    "THE FINAL CHAPTER",
    "THE LEGACY"

];


const specialHeadings = {

    nehru: [

        "THE BEGINNING",
        "BUILDING THE REPUBLIC",
        "INDUSTRY & INSTITUTIONS",
        "A DEMOCRATIC VISION",
        "WAR & CHALLENGE",
        "INDIA ON THE WORLD STAGE",
        "SOCIAL REFORM",
        "THE LEGACY"

    ],

    shastri: [

        "A QUIET BEGINNING",
        "LEADERSHIP IN WAR",
        "JAI JAWAN · JAI KISAN",
        "FOOD & SELF-RELIANCE",
        "AUSTERE GOVERNANCE",
        "TASHKENT",
        "THE FINAL CHAPTER"

    ],

    indira: [

        "THE FIRST WOMAN PM",
        "BANK NATIONALISATION",
        "THE 1971 TURNING POINT",
        "INDIA ENTERS THE NUCLEAR AGE",
        "THE EMERGENCY",
        "RETURN TO POWER",
        "THE FINAL CHAPTER"

    ],

    rao: [

        "A COUNTRY IN CRISIS",
        "THE 1991 REFORMS",
        "OPENING THE ECONOMY",
        "A NEW GLOBAL OUTLOOK",
        "POLITICAL CHALLENGES",
        "THE LEGACY"

    ],

    vajpayee: [

        "THE COALITION ERA",
        "POKHRAN-II",
        "THE PEACE INITIATIVE",
        "THE KARGIL WAR",
        "BUILDING CONNECTIVITY",
        "GOVERNANCE & REFORM",
        "THE STATESMAN",
        "THE LEGACY"

    ],

    manmohan: [

        "THE ECONOMIST ENTERS",
        "SOCIAL LEGISLATION",
        "THE RIGHT TO INFORMATION",
        "RURAL INDIA",
        "DIGITAL IDENTITY",
        "INDIA & THE WORLD",
        "THE GLOBAL FINANCIAL CRISIS",
        "POLITICAL PRESSURE",
        "THE LEGACY"

    ],

    modi: [

        "THE 2014 MANDATE",
        "FINANCIAL INCLUSION",
        "THE CLEAN INDIA CAMPAIGN",
        "A DIGITAL INDIA",
        "MAJOR ECONOMIC CHANGES",
        "ARTICLE 370",
        "INDIA ON THE WORLD STAGE",
        "SPACE & INFRASTRUCTURE",
        "THE CONTINUING STORY"

    ]

};


function getStoryHeading(
    key,
    index,
    total
) {

    const custom =
        specialHeadings[key];

    if (
        custom &&
        custom[index]
    ) {
        return custom[index];
    }

    if (
        index === total - 1
    ) {
        return "THE LEGACY";
    }

    return (
        storyHeadings[index] ||
        `CHAPTER ${String(index + 1).padStart(2, "0")}`
    );

}


/* =========================================================
   ESCAPE
========================================================= */

function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   HIGHLIGHT STORY
========================================================= */

function highlightStoryText(text) {

    let result =
        escapeHTML(text);

    const terms = [

        "Prime Minister",
        "economic reforms",
        "economic growth",
        "social policy",
        "India",
        "Pakistan",
        "Congress",
        "Emergency",
        "nuclear",
        "democracy",
        "technology",
        "farmers",
        "rural development",
        "foreign policy",
        "social justice",
        "infrastructure",
        "digital"

    ];

    terms.forEach(term => {

        const safeTerm =
            term.replace(
                /[.*+?^${}()|[\]\\]/g,
                "\\$&"
            );

        const regex =
            new RegExp(
                `\\b(${safeTerm})\\b`,
                "gi"
            );

        result =
            result.replace(
                regex,
                "<strong>$1</strong>"
            );

    });

    return result;

}


/* =========================================================
   GENERATE LEADER CARDS
========================================================= */

function generateLeaderCards() {

    if (!leadersList)
        return;

    leadersList.innerHTML = "";

    Object.entries(leaders)
        .forEach(
            ([key, leader], index) => {

                const card =
                    document.createElement(
                        "article"
                    );

                card.className =
                    "leader-profile-card";

                card.dataset.leader =
                    key;

                card.style.setProperty(
                    "--row-index",
                    index
                );

                if (index >= 6) {

                    card.classList.add(
                        "leader-hidden"
                    );

                }

                card.innerHTML = `

                    <button
                        type="button"
                        class="leader-card-trigger"
                        data-leader="${key}"
                        aria-label="View ${escapeHTML(leader.name)}"
                    >

                        <span class="row-number">
                            ${leader.number}
                        </span>

                        <div class="profile-image">

                            <img
                                src="${leader.image}"
                                alt="${escapeHTML(leader.name)}"
                                loading="${index < 6 ? "eager" : "lazy"}"
                                decoding="async"
                            >

                            <span class="profile-number">
                                ${leader.number}
                            </span>

                            <span
                                class="profile-open"
                                aria-hidden="true"
                            >
                                ↗
                            </span>

                        </div>

                        <div class="profile-info">

                            <span class="profile-years">
                                ${escapeHTML(leader.years)}
                            </span>

                            <h3>
                                ${escapeHTML(leader.name)}
                            </h3>

                            <p>
                                ${escapeHTML(leader.role)}
                            </p>

                        </div>

                        <span class="profile-link">

                            <span>
                                VIEW
                            </span>

                            <i class="bi bi-arrow-right"></i>

                        </span>

                        <span
                            aria-hidden="true"
                        ></span>

                    </button>

                `;

                leadersList.appendChild(
                    card
                );

            }
        );

}


/* =========================================================
   SHOW ALL
========================================================= */

function createShowAllButton() {

    if (!leadersList)
        return;

    const parent =
        leadersList.parentElement;

    if (!parent)
        return;

    showAllButton =
        document.createElement(
            "button"
        );

    showAllButton.type =
        "button";

    showAllButton.className =
        "show-all-leaders";

    showAllButton.innerHTML = `

        <span>
            SHOW ALL LEADERS
        </span>

        <i class="bi bi-arrow-down"></i>

    `;

    const wrapper =
        document.createElement(
            "div"
        );

    wrapper.className =
        "show-all-wrap";

    wrapper.appendChild(
        showAllButton
    );

    parent.appendChild(
        wrapper
    );

    showAllButton.addEventListener(
        "click",
        revealAllLeaders
    );

}


function revealAllLeaders() {

    const hiddenCards =
        $$(".leader-hidden");

    hiddenCards.forEach(
        (card, index) => {

            card.style.setProperty(
                "--reveal-delay",
                `${index * 70}ms`
            );

            card.classList.remove(
                "leader-hidden"
            );

            card.classList.add(
                "leader-revealed"
            );

        }
    );

    if (showAllButton) {

        showAllButton.classList.add(
            "hidden"
        );

    }

}


/* =========================================================
   INIT CARDS
========================================================= */

generateLeaderCards();

createShowAllButton();


/* =========================================================
   STORY HTML
========================================================= */

function buildStoryHTML(
    leader,
    key
) {

    if (
        !leader ||
        !Array.isArray(leader.story) ||
        !leader.story.length
    ) {
        return "";
    }

    const total =
        leader.story.length;

    const chapters =
        leader.story
            .map(
                (paragraph, index) => {

                    const number =
                        String(
                            index + 1
                        ).padStart(
                            2,
                            "0"
                        );

                    const heading =
                        getStoryHeading(
                            key,
                            index,
                            total
                        );

                    return `

                        <article
                            class="story-chapter"
                            style="--story-index:${index}"
                        >

                            <div class="story-chapter-marker">

                                <span>
                                    ${number}
                                </span>

                                <i></i>

                            </div>

                            <div class="story-chapter-body">

                                <span class="story-kicker">
                                    CHAPTER ${number}
                                </span>

                                <h4>
                                    ${escapeHTML(heading)}
                                </h4>

                                <p class="story-paragraph">
                                    ${highlightStoryText(paragraph)}
                                </p>

                            </div>

                        </article>

                    `;

                }
            )
            .join("");


    return `

        <div class="story-introduction">

            <div class="story-intro-label">

                <span class="story-intro-line"></span>

                <span>
                    THE STORY
                </span>

            </div>

            <h3>
                ${escapeHTML(leader.name)}
            </h3>

            <p class="story-intro-lead">
                ${highlightStoryText(
                    leader.story[0]
                )}
            </p>

        </div>


        <div class="story-overview-grid">

            <div class="story-overview-card">

                <span>
                    ERA
                </span>

                <strong>
                    ${escapeHTML(leader.years)}
                </strong>

            </div>

            <div class="story-overview-card">

                <span>
                    DEFINING ROLE
                </span>

                <strong>
                    ${escapeHTML(
                        leader.contribution
                    )}
                </strong>

            </div>

            <div class="story-overview-card">

                <span>
                    REMEMBERED FOR
                </span>

                <strong>
                    ${escapeHTML(
                        leader.known
                    )}
                </strong>

            </div>

        </div>


        <div class="story-section-title">

            <span>
                A LIFE IN POWER
            </span>

            <h3>
                The decisions that shaped an era
            </h3>

            <p>
                Explore the major moments, policies
                and challenges that defined
                ${escapeHTML(leader.name)}'s
                time in public life.
            </p>

        </div>


        <div class="story-chapters">

            ${chapters}

        </div>


        <div class="story-quote-panel">

            <span class="story-quote-mark">
                “
            </span>

            <p>
                ${escapeHTML(
                    leader.quote ||
                    leader.description
                )}
            </p>

            <span class="story-quote-credit">
                — ${escapeHTML(leader.name)}
            </span>

        </div>


        <div class="story-facts-section">

            <div class="story-section-title compact">

                <span>
                    ARCHIVE NOTES
                </span>

                <h3>
                    The record
                </h3>

            </div>


            <div class="story-facts-grid">


                <div class="story-fact">

                    <span>
                        01
                    </span>

                    <small>
                        BORN
                    </small>

                    <strong>
                        ${escapeHTML(
                            leader.born
                        )}
                    </strong>

                </div>


                <div class="story-fact">

                    <span>
                        02
                    </span>

                    <small>
                        BIRTHPLACE
                    </small>

                    <strong>
                        ${escapeHTML(
                            leader.birthplace
                        )}
                    </strong>

                </div>


                <div class="story-fact">

                    <span>
                        03
                    </span>

                    <small>
                        TERM
                    </small>

                    <strong>
                        ${escapeHTML(
                            leader.years
                        )}
                    </strong>

                </div>


                <div class="story-fact">

                    <span>
                        04
                    </span>

                    <small>
                        CONTRIBUTION
                    </small>

                    <strong>
                        ${escapeHTML(
                            leader.contribution
                        )}
                    </strong>

                </div>


            </div>

        </div>


        <div class="story-legacy-panel">

            <div class="legacy-number">
                ${escapeHTML(
                    leader.number
                )}
            </div>

            <div class="legacy-content">

                <span>
                    DEFINING LEGACY
                </span>

                <h3>
                    ${escapeHTML(
                        leader.legacy
                    )}
                </h3>

                <p>
                    ${escapeHTML(
                        leader.description
                    )}
                </p>

            </div>

        </div>


        <div class="story-ending">

            <span>
                END OF RECORD
            </span>

            <div class="story-ending-line"></div>

            <p>
                The story of
                ${escapeHTML(leader.name)}
                remains part of India's
                continuing national record.
            </p>

        </div>

    `;

}


/* =========================================================
   GET FIRST YEAR
========================================================= */

function getFirstYear(years) {

    const match =
        String(years || "")
            .match(/\d{4}/);

    return match
        ? match[0]
        : years;

}


/* =========================================================
   POPULATE DETAIL
========================================================= */

function populateLeaderDetail(
    leader,
    key
) {

    if (!leader)
        return;


    /* PORTRAIT */

    if (detailBackground) {

        detailBackground.classList.add(
            "changing"
        );

        const image =
            new Image();

        image.onload = () => {

            detailBackground.src =
                leader.image;

            detailBackground.alt =
                leader.name;

            requestAnimationFrame(
                () => {

                    detailBackground.classList.remove(
                        "changing"
                    );

                }
            );

        };

        image.onerror = () => {

            detailBackground.classList.remove(
                "changing"
            );

        };

        image.src =
            leader.image;

    }


    /* BASIC */

    if (detailNumber)
        detailNumber.textContent =
            leader.number;

    if (detailTerm)
        detailTerm.textContent =
            leader.years;

    if (detailName)
        detailName.textContent =
            leader.name;

    if (detailRole)
        detailRole.textContent =
            leader.role;

    if (detailDescription)
        detailDescription.textContent =
            leader.description;

    if (detailBorn)
        detailBorn.textContent =
            leader.born;

    if (detailBirthplace)
        detailBirthplace.textContent =
            leader.birthplace;

    if (detailDied)
        detailDied.textContent =
            leader.died;

    if (detailTermFact)
        detailTermFact.textContent =
            leader.years;

    if (detailContribution)
        detailContribution.textContent =
            leader.contribution;

    if (detailSideYear)
        detailSideYear.textContent =
            getFirstYear(
                leader.years
            );


    /* STORY */

    if (detailStory) {

        detailStory.innerHTML =
            buildStoryHTML(
                leader,
                key
            );

    }

}


/* =========================================================
   GET NAVBAR HEIGHT
========================================================= */
/* =========================================================
   NAVBAR HEIGHT
========================================================= */

function getNavbarHeight() {

    if (!navbar) {
        return 0;
    }

    return navbar.getBoundingClientRect().height;

}


/* =========================================================
   DETAIL SCROLL
   ---------------------------------------------------------
   IMPORTANT:
   The detail page already reserves the fixed navbar height
   through CSS.

   Therefore DO NOT subtract navbar height here.
========================================================= */

function scrollToDetail() {

    if (
        !leaderDetail ||
        !leaderDetail.classList.contains("active")
    ) {

        return;

    }


    const rect =
        leaderDetail.getBoundingClientRect();


    const targetPosition =
        Math.max(
            0,
            rect.top + window.scrollY
        );


    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    window.scrollTo({

        top:
            targetPosition,

        behavior:
            reducedMotion
                ? "auto"
                : "smooth"

    });

}
/* =========================================================
   OPEN DETAIL
========================================================= */

function openLeaderInterface() {

    if (!leaderDetail)
        return;


    /*
       Save current directory position
       so Back can return to the archive.
    */

    directoryScrollPosition =
        window.scrollY;


    /*
       Hide opening + directory.
    */

    if (leadersIntro)
        leadersIntro.classList.add(
            "detail-hidden"
        );

    if (leaderDirectory)
        leaderDirectory.classList.add(
            "detail-hidden"
        );


    /*
       IMPORTANT:
       Activate detail BEFORE scroll.
    */

    leaderDetail.classList.add(
        "active"
    );

    leaderDetail.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "leader-detail-open"
    );

    if (navbar) {
    navbar.classList.add("detail-mode");
    navbar.classList.add("navbar-hidden");
}


    /*
       NOW scroll directly to selected leader.
    */

    scrollToDetail();

}


/* =========================================================
   CLOSE DETAIL
========================================================= */

function closeLeaderInterface(
    restorePosition = true
) {

    if (leaderDetail) {

        leaderDetail.classList.remove(
            "active"
        );

        leaderDetail.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    if (leadersIntro)
        leadersIntro.classList.remove(
            "detail-hidden"
        );

    if (leaderDirectory)
        leaderDirectory.classList.remove(
            "detail-hidden"
        );

    document.body.classList.remove(
        "leader-detail-open"
    );

    if (navbar) {
    navbar.classList.remove("detail-mode");
    navbar.classList.remove("navbar-hidden");
    navbar.classList.remove("scrolled");
}


    /*
       Return to exactly where user clicked.
    */

    if (restorePosition) {

        requestAnimationFrame(
            () => {

                window.scrollTo({

                    top:
                        directoryScrollPosition,

                    behavior:
                        window.matchMedia(
                            "(prefers-reduced-motion: reduce)"
                        ).matches
                            ? "auto"
                            : "smooth"

                });

            }
        );

    }

}


/* =========================================================
   SHOW LEADER
========================================================= */

function showLeader(
    key,
    updateUrl = true,
    shouldScroll = true
) {

    const leader =
        leaders[key];

    if (!leader) {

        console.warn(
            "VIDUTHALAI: Leader not found:",
            key
        );

        return;

    }


    currentLeaderKey =
        key;


    /*
       Save position BEFORE changing layout.
    */

    if (
        !leaderDetail.classList.contains(
            "active"
        )
    ) {

        directoryScrollPosition =
            window.scrollY;

    }


    /*
       Fill selected leader.
    */

    populateLeaderDetail(
        leader,
        key
    );


    /*
       Activate detail.
    */

    openLeaderInterface();


    /*
       Close mobile menu.
    */

    closeMobileMenu();


    /*
       URL WITHOUT RELOAD.
    */

    if (updateUrl) {

        const url =
            new URL(
                window.location.href
            );

        url.searchParams.set(
            "leader",
            key
        );

        history.pushState(

            {
                leader: key
            },

            "",

            url

        );

    }


    /*
       openLeaderInterface already
       scrolls to detail.

       This extra call handles
       very slow mobile layouts.
    */

    if (shouldScroll) {

        setTimeout(
            scrollToDetail,
            80
        );

    }

}


/* =========================================================
   HIDE LEADER
========================================================= */

function hideLeader(
    updateUrl = true
) {

    currentLeaderKey =
        null;


    closeLeaderInterface(
        true
    );


    if (updateUrl) {

        const url =
            new URL(
                window.location.href
            );

        url.searchParams.delete(
            "leader"
        );

        history.replaceState(
            {},
            "",
            url
        );

    }

}


/* =========================================================
   CARD CLICK
========================================================= */

document.addEventListener(
    "click",
    event => {

        const trigger =
            event.target.closest(
                ".leader-card-trigger"
            );

        if (!trigger)
            return;


        /*
           VERY IMPORTANT:
           Prevent button default behaviour.
        */

        event.preventDefault();


        const key =
            trigger.dataset.leader;


        if (
            key &&
            leaders[key]
        ) {

            showLeader(
                key,
                true,
                true
            );

        }

    }
);


/* =========================================================
   BACK BUTTON
========================================================= */

if (detailBack) {

    detailBack.addEventListener(
        "click",
        event => {

            event.preventDefault();


            /*
               Remove URL parameter
               without navigating away.
            */

            const url =
                new URL(
                    window.location.href
                );

            url.searchParams.delete(
                "leader"
            );

            history.replaceState(
                {},
                "",
                url
            );


            hideLeader(
                false
            );

        }
    );

}


/* =========================================================
   BROWSER BACK / FORWARD
========================================================= */

window.addEventListener(
    "popstate",
    () => {

        const params =
            new URLSearchParams(
                window.location.search
            );

        const key =
            params.get(
                "leader"
            );


        if (
            key &&
            leaders[key]
        ) {

            showLeader(
                key,
                false,
                true
            );

        } else {

            hideLeader(
                false
            );

        }

    }
);


/* =========================================================
   DIRECT URL
========================================================= */

function loadLeaderFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const key =
        params.get(
            "leader"
        );


    if (
        key &&
        leaders[key]
    ) {

        setTimeout(
            () => {

                showLeader(
                    key,
                    false,
                    true
                );

            },
            700
        );

    }

}

loadLeaderFromURL();


/* =========================================================
   MOBILE MENU
========================================================= */

function closeMobileMenu() {

    if (!mobileMenu)
        return;

    mobileMenu.classList.remove(
        "open"
    );

    if (mobileMenuButton) {

        mobileMenuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    }

}


function toggleMobileMenu() {

    if (
        !mobileMenu ||
        !mobileMenuButton
    )
        return;


    const isOpen =
        mobileMenu.classList.toggle(
            "open"
        );


    mobileMenuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

}


if (mobileMenuButton) {

    mobileMenuButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            toggleMobileMenu();

        }
    );

}


if (mobileMenu) {

    mobileMenu
        .querySelectorAll("a")
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    closeMobileMenu
                );

            }
        );

}


document.addEventListener(
    "click",
    event => {

        if (
            !mobileMenu ||
            !mobileMenuButton
        )
            return;


        const clickedInside =
            mobileMenu.contains(
                event.target
            ) ||
            mobileMenuButton.contains(
                event.target
            );


        if (!clickedInside) {

            closeMobileMenu();

        }

    }
);


/* =========================================================
   NAVBAR
========================================================= */
function handleNavbar() {

    if (!navbar)
        return;

    /* =====================================================
       LEADER DETAIL MODE
       Navbar must NEVER appear on individual leader page.
       ===================================================== */

    if (
        leaderDetail &&
        leaderDetail.classList.contains("active")
    ) {
        navbar.classList.add("detail-mode");
        navbar.classList.add("navbar-hidden");

        navbar.classList.remove("scrolled");

        lastScrollY = window.scrollY;

        return;
    }


    /* =====================================================
       NORMAL LEADERS PAGE NAVBAR
       ===================================================== */

    const current =
        window.scrollY;


    if (current > 35) {

        navbar.classList.add(
            "scrolled"
        );

    } else {

        navbar.classList.remove(
            "scrolled"
        );

    }


    if (
        current > lastScrollY &&
        current > 180
    ) {

        navbar.classList.add(
            "navbar-hidden"
        );

    } else {

        navbar.classList.remove(
            "navbar-hidden"
        );

    }


    lastScrollY =
        current;
}


/* =========================================================
   INTRO → DIRECTORY
========================================================= */

$$("[data-scroll-directory]")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    if (!leaderDirectory)
                        return;


                    const target =
                        leaderDirectory.offsetTop -
                        getNavbarHeight();


                    window.scrollTo({

                        top:
                            Math.max(
                                0,
                                target
                            ),

                        behavior:
                            "smooth"

                    });

                }
            );

        }
    );


/* =========================================================
   SCROLL REVEAL
========================================================= */

function initializeReveal() {

    const elements =
        $$(".reveal");


    if (!elements.length)
        return;


    if (
        !("IntersectionObserver" in window)
    ) {

        elements.forEach(
            element =>
                element.classList.add(
                    "visible"
                )
        );

        return;

    }


    const observer =
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

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold: .1,

                rootMargin:
                    "0px 0px -35px 0px"

            }

        );


    elements.forEach(
        element =>
            observer.observe(
                element
            )
    );

}

initializeReveal();


/* =========================================================
   CUSTOM CURSOR
========================================================= */

function initializeCursor() {

    const dot =
        $(".cursor-dot");

    const ring =
        $(".cursor-ring");


    if (
        !dot ||
        !ring ||
        window.innerWidth <= 900 ||
        window.matchMedia(
            "(pointer: coarse)"
        ).matches
    ) {

        return;

    }


    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;


    document.addEventListener(
        "mousemove",
        event => {

            mouseX =
                event.clientX;

            mouseY =
                event.clientY;


            dot.style.left =
                `${mouseX}px`;

            dot.style.top =
                `${mouseY}px`;

        }
    );


    function animateCursor() {

        ringX +=
            (mouseX - ringX) * .14;

        ringY +=
            (mouseY - ringY) * .14;


        ring.style.left =
            `${ringX}px`;

        ring.style.top =
            `${ringY}px`;


        requestAnimationFrame(
            animateCursor
        );

    }

    animateCursor();


    document.addEventListener(
        "mouseover",
        event => {

            if (
                event.target.closest(
                    "a, button"
                )
            ) {

                ring.classList.add(
                    "hover"
                );

            }

        }
    );


    document.addEventListener(
        "mouseout",
        event => {

            if (
                event.target.closest(
                    "a, button"
                )
            ) {

                ring.classList.remove(
                    "hover"
                );

            }

        }
    );

}

initializeCursor();


/* =========================================================
   CARD TILT
========================================================= */

function initializeCardTilt() {

    if (
        window.innerWidth <= 900 ||
        window.matchMedia(
            "(pointer: coarse)"
        ).matches ||
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {

        return;

    }


    $$(".leader-card-trigger")
        .forEach(
            trigger => {

                trigger.addEventListener(
                    "mousemove",
                    event => {

                        const rect =
                            trigger.getBoundingClientRect();


                        const x =
                            event.clientX -
                            rect.left;

                        const y =
                            event.clientY -
                            rect.top;


                        const rotateY =
                            ((x / rect.width) - .5) * 3;


                        const rotateX =
                            ((y / rect.height) - .5) * -3;


                        trigger.style.transform =
                            `
                            perspective(1200px)
                            rotateX(${rotateX}deg)
                            rotateY(${rotateY}deg)
                            translateY(-3px)
                            `;

                    }
                );


                trigger.addEventListener(
                    "mouseleave",
                    () => {

                        trigger.style.transform =
                            "";

                    }
                );

            }
        );

}

initializeCardTilt();


/* =========================================================
   IMAGE PRELOAD
========================================================= */

function preloadimages() {

    Object.values(leaders)
        .forEach(
            leader => {

                const image =
                    new Image();

                image.decoding =
                    "async";

                image.src =
                    leader.image;

            }
        );

}

preloadimages();


/* =========================================================
   INTRO PARALLAX
========================================================= */

const introImage =
    $(".leaders-intro-background img");


if (
    introImage &&
    window.innerWidth > 900 &&
    !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches
) {

    let ticking = false;


    window.addEventListener(
        "scroll",
        () => {

            if (ticking)
                return;


            ticking = true;


            requestAnimationFrame(
                () => {

                    const scroll =
                        window.scrollY;


                    if (
                        scroll <
                        window.innerHeight
                    ) {

                        introImage.style.transform =
                            `
                            scale(1.04)
                            translate3d(
                                0,
                                ${scroll * .035}px,
                                0
                            )
                            `;

                    }


                    ticking = false;

                }
            );

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   ESCAPE
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !==
            "Escape"
        )
            return;


        if (
            leaderDetail &&
            leaderDetail.classList.contains(
                "active"
            )
        ) {

            const params =
                new URLSearchParams(
                    window.location.search
                );


            if (
                params.has(
                    "leader"
                )
            ) {

                const url =
                    new URL(
                        window.location.href
                    );

                url.searchParams.delete(
                    "leader"
                );

                history.replaceState(
                    {},
                    "",
                    url
                );

            }


            hideLeader(
                false
            );

        }


        if (
            mobileMenu &&
            mobileMenu.classList.contains(
                "open"
            )
        ) {

            closeMobileMenu();

        }

    }
);


/* =========================================================
   CURRENT YEAR
========================================================= */

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   IMAGE ERROR
========================================================= */

document.addEventListener(
    "error",
    event => {

        if (
            event.target &&
            event.target.tagName === "IMG"
        ) {

            event.target.classList.add(
                "image-error"
            );

            console.warn(
                "VIDUTHALAI image failed:",
                event.target.src
            );

        }

    },
    true
);


/* =========================================================
   LOADER
========================================================= */

function finishLoader() {

    if (loader) {

        loader.classList.add(
            "loaded"
        );

    }

    document.body.classList.remove(
        "no-scroll"
    );

}


if (
    document.readyState ===
    "complete"
) {

    setTimeout(
        finishLoader,
        700
    );

} else {

    window.addEventListener(
        "load",
        () => {

            setTimeout(
                finishLoader,
                700
            );

        },
        {
            once: true
        }
    );

}


/* =========================================================
   INITIAL
========================================================= */

handleNavbar();


/*
   Do NOT force scroll to top here.
   This is important for ?leader=xxx URLs.
*/

if (leaderDetail) {

    leaderDetail.setAttribute(
        "aria-hidden",
        "true"
    );

}


console.log(
    "%cVIDUTHALAI — LEADERS",
    "font-size:20px;font-weight:bold;color:#d4a94f;"
);

console.log(
    "Prime Ministers:",
    Object.keys(leaders).length
);

console.log(
    "GSAP:",
    "Not Used"
);

console.log(
    "Detail Navigation:",
    "Direct — No Top Jump"
);


});