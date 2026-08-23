/* ==========================================================================
   Thirukoshtiyur Sri Sowmya Narayana Perumal Temple - Client Logic & Data
   Pure Vanilla JS with Bilingual Switcher, Authentic Lamp Ritual & Donations
   ========================================================================== */

(function () {
  'use strict';

  // --- 1. Complete Bilingual Data Dictionary ---
  const templeData = {
    en: {
      meta: {
        title: "Thirukoshtiyur Sri Sowmya Narayana Perumal Kovil | 96th Divya Desam",
        subtitle: "96th Divya Desam | Sacred Historic Vaishnava Sthalam",
        tagline: "Where Sri Ramanujar proclaimed salvation for all humanity from the Ashtanga Vimanam Gopuram"
      },
      nav: {
        home: "Home",
        brandTitle: "Thirukoshtiyur Kovil",
        brandSubtitle: "96th Vaishnava Divya Desam",
        ramanuja: "Sri Ramanujar",
        vimanam: "Ashtanga Vimanam",
        royalHeritage: "Velu Nachiyar",
        lampRitual: "Lamp Ritual",
        donations: "Donations",
        panchangam: "Panchangam",
        pooja: "Pooja Timings",
        contact: "Reach Temple",
        langToggle: "தமிழ்"
      },
      hero: {
        badge: "96th Vaishnava Divya Desam • Pandya Nadu",
        title: "Thirukoshtiyur Sri Sowmya Narayana Perumal Temple",
        desc: "The Sacred Divine Sanctum, historical abode of Sri Ramanujacharya, and protected by the royal patronage of Rani Velu Nachiyar's lineage.",
        exploreBtn: "Explore 3-Tier Sanctums",
        lampBtn: "Light Virtual Lamp",
        stat1Label: "Divya Desam",
        stat1Value: "96th Abode",
        stat2Label: "Moolavar (Sitting)",
        stat2Value: "Sri Upendra Narayanan",
        stat3Label: "Utsavar / Presiding",
        stat3Value: "Sri Sowmya Narayanan",
        stat4Label: "Vimanam Structure",
        stat4Value: "3-Tier Ashtanga"
      },
      ramanuja: {
        badge: "Historic Compassion",
        title: "Sri Ramanujacharya's Historic 18 Journeys",
        subtitle: "The selfless act of supreme compassion that opened heaven's gates to all people.",
        timeline: [
          {
            step: "1",
            title: "Walked 18 Times from Srirangam",
            desc: "Determined to receive the highest truth, Sri Ramanuja traversed over 150 kilometers barefoot through forests and rivers 18 times to reach Thirukoshtiyur.",
            highlight: "Unmatched Devotion & Perseverance"
          },
          {
            step: "2",
            title: "Tested 17 Times by Thirukoshtiyur Nambi",
            desc: "To verify if Ramanuja possessed pure, unselfish devotion, Thirukoshtiyur Nambi asked him to return 17 times, emphasizing that holy knowledge requires complete surrender.",
            highlight: "Vedic Rigor & Discipled Humility"
          },
          {
            step: "3",
            title: "The Holy Initiation on the 18th Visit",
            desc: "Deeply satisfied with Ramanujar's humility, Nambi initiated him into the holy divine secret, warning that revealing it to others would send Ramanuja to hell while saving the listeners.",
            highlight: "Sacred Initiation Revealed"
          },
          {
            step: "4",
            title: "Climbing the Ashtanga Gopuram Tower",
            desc: "Unable to keep such divine grace for himself, Ramanuja immediately climbed the topmost gopuram of Thirukoshtiyur temple, summoned all the villagers regardless of caste, and shouted the holy truth at the top of his voice!",
            highlight: "Universal Salvation Proclaimed"
          },
          {
            step: "5",
            title: "Embraced as 'Emberumanar'",
            desc: "When Nambi angrily questioned him, Ramanuja said: 'If my suffering in hell brings salvation to thousands of living souls, I gladly accept hell.' Moved to tears, Nambi embraced him, calling him 'Emberumanar' (Our Master).",
            highlight: "The Dawn of Equality & Bhakti"
          }
        ],
        quote: "If my single soul going to hell brings eternal salvation to thousands of suffering human beings, I will gladly embrace hell a thousand times!",
        author: "— Jagadguru Sri Ramanujacharya (Thirukoshtiyur Gopuram, 11th Century)"
      },
      vimanam: {
        badge: "Architectural Marvel",
        title: "The Rare 3-Tiered Ashtanga Vimanam",
        subtitle: "One of only two temples in India featuring the Omkara Ashtanga Vimanam with Lord Vishnu in 3 sacred postures.",
        tiers: [
          {
            id: "tier3",
            name: "Top Storey (Paramapadam)",
            posture: "Nindra Thirukolam (Standing Posture)",
            deity: "Sri Paramapada Natha",
            direction: "Facing North",
            desc: "Represents the supreme cosmic realm of Vaikuntam under the magnificent Ashtanga Vimanam Gopuram. Sri Ramanuja stood near this level's gopuram balcony to preach to humanity.",
            img: "images/ashtanga_vimanam_actual.jpg"
          },
          {
            id: "tier2",
            name: "Middle Storey (Antariksham)",
            posture: "Irundha Thirukolam (Sitting Posture - Moolavar)",
            deity: "Sri Upendra Narayana Perumal (Moolavar)",
            direction: "Facing East",
            desc: "The primary Moolavar sanctum in seated majestic pose. Lord Upendra Narayana Perumal presides over the devas, protected by the divine Astanga Vimanam.",
            img: "images/deity_pattu_3.jpg"
          },
          {
            id: "tier1",
            name: "Ground Sanctum (Bhoolokam)",
            posture: "Kidantha Thirukolam (Reposing / Saiyana Kolam)",
            deity: "Sri Sowmya Narayana Perumal & Santhana Krishnar",
            direction: "Facing East on Adisesha",
            desc: "Lord Vishnu reclining gracefully on Adisesha in Ksheerabdi Sayana form. Santhana Krishnar shrine here is world-famous for granting childbirth blessings.",
            img: "images/perumal_silver_face.jpg"
          }
        ]
      },
      royal: {
        badge: "Royal Patronage",
        title: "Royal Patronage & Velu Nachiyar Heritage",
        subtitle: "Maintained and protected across centuries by Queen Rani Velu Nachiyar and Madhurandhagi Velu Nachiyar's royal family.",
        queenTitle: "Veeramangai Rani Velu Nachiyar's Divine Devotion",
        queenDesc: "Rani Velu Nachiyar, the legendary 18th-century Queen of Sivagangai who defeated British forces, held Thirukoshtiyur Sowmya Narayana Perumal as her guardian deity. She offered grand royal endowments and protected the temple jewels.",
        madhurandhagiTitle: "Tmt. Madhurandhagi Velu Nachiyar Royal Trusteeship",
        madhurandhagiDesc: "Following the sacred lineage of Rani Velu Nachiyar, Tmt. Madhurandhagi Velu Nachiyar serves as the Hereditary Trustee of Sivagangai Samasthanam & Thirukoshtiyur Sowmya Narayana Perumal Kovil.",
        bullets: [
          "Preservation of the ancient Ashtanga Vimanam architecture and priceless temple jewels (Thiruvabharanam).",
          "Conducting the annual Masi Magam Float Festival (Teppotsavam) with royal patronage and Annadhanam.",
          "Safeguarding historical copper plate inscriptions, temple car (Ratham), and land endowments.",
          "Facilitating lakhs of pilgrims visiting the holy temple every year."
        ]
      },
      lamp: {
        badge: "Sacred Water Ritual",
        title: "Masi Magam Lamp Ritual (Taking Home the Sacred Lamps)",
        subtitle: "The famous tradition of lighting lamps at Teppakulam steps and carrying home a pair of blessed lamps for pooja.",
        ritualTitle: "Sacred Lamp Ritual Steps (விளக்கு எடுத்தல் முறை)",
        step1: "During the famous Masi Magam Float Festival (Teppotsavam), thousands of devotees light clay oil lamps on the sacred Teppakulam steps praying for marriage, childbirth (Santhana Bhagyam), and family prosperity.",
        step2: "After praying, devotees take a pair of blessed lamps lit by fellow devotees, wrap them reverently in a yellow cloth, place them in a protective box, and take them home to perform daily pooja in their home altar.",
        step3: "When their prayers and wishes are fulfilled, in the subsequent year they return to Thirukoshtiyur and light multiple lamps according to their vows to fulfill their gratitude!",
        step4: "On other days throughout the year as well, devotees can obtain the sacred prarthanai lamp directly at Sri Sowmya Narayanan's sanctum.",
        nameLabel: "Your Devotee Name & Native Place",
        wishLabel: "Your Sacred Prayer / Prarthanai",
        btnText: "Light Sacred Lamp in Teppakulam",
        countLabel: "Sacred Lamps Burning in Teppakulam",
        wishesTitle: "Recent Devotee Prayers"
      },
      donations: {
        badge: "Temple Kainkaryam & Seva",
        title: "Divine Temple Donations & Endowments",
        subtitle: "Support sacred Annadhanam, Gho Shala, daily poojas, and the preservation of the 3-Tier Golden Ashtanga Vimanam.",
        categories: [
          {
            icon: "🍲",
            title: "Nithya Annadhanam Scheme",
            desc: "Daily distribution of sacred, hygienic meals (Prasadam) to hundreds of visiting pilgrims and devotees.",
            badge: "Annadhanam"
          },
          {
            icon: "🐄",
            title: "Gho Shala Protection & Fodder",
            desc: "Providing nutrition, shelter, medical treatment, and lifelong care for sacred temple cows.",
            badge: "Gho Seva"
          },
          {
            icon: "🪔",
            title: "Nithya Pooja & Thirumanjanam",
            desc: "Endowments for pure cow ghee for lamps, daily fragrant flowers, sandal paste, and sacred abhishekam.",
            badge: "Pooja Kainkaryam"
          },
          {
            icon: "🏛️",
            title: "Ashtanga Vimanam & Renovation",
            desc: "Conservation and maintenance of the ancient 3-tier golden vimanam, stone mandapams, and temple car.",
            badge: "Thirupani Fund"
          }
        ],
        bankTitle: "Official Temple Bank Account Details (Sivagangai Samasthanam)",
        bankDesc: "Devotees can remit their voluntary donations and endowments directly through official bank transfer or DD/Cheque.",
        accNameLabel: "Account Name",
        accName: "Executive Officer / Hereditary Trustee, Arulmigu Sowmya Narayana Perumal Temple",
        bankNameLabel: "Bank & Branch",
        bankName: "Indian Overseas Bank, Thirukoshtiyur Branch (or State Bank of India, Sivagangai)",
        accNoLabel: "Account Number",
        accNo: "Contact Temple Office for Official Remittance IFSC & Acc Details",
        phoneInfo: "Office Enquiries: +91 4577 261225 / Sivagangai Samasthanam Devasthanam"
      },
      panchangam: {
        badge: "Daily Calendar & Festivals",
        title: "Panchangam & Temple Festivals",
        subtitle: "Check daily auspicious timings, Thithi, Nakshatram, and upcoming grand festivals.",
        festivals: [
          {
            name: "Grand Masi Magam Float Festival (மாசி மகம் தெப்போற்சவம்)",
            month: "Masi (Feb - Mar)",
            desc: "The world-famous 10-day Teppotsavam where Lord Sowmya Narayana Perumal graces the 16-pillar water mandapam on a floral raft.",
            badge: "Pinnacle Festival",
            img: "images/masi_magam.png"
          },
          {
            name: "Vaikunta Ekadashi & Swarga Vasal Opening",
            month: "Margazhi (Dec - Jan)",
            desc: "Sacred opening of Sorga Vasal at 4:30 AM with special Muthangi Alankaram for Sri Sowmya Narayana Perumal.",
            badge: "Moksha Mahotsavam",
            img: "images/sorga_vaasal_real.jpg"
          },
          {
            name: "Chithirai Perunthiruvizha (Brahmotsavam)",
            month: "Chithirai (Apr - May)",
            desc: "Flag hoisting ceremony, Garuda Seva, Thiruther (Temple Chariot) procession, and Saptavarnam.",
            badge: "10-Day Brahmotsavam",
            img: "images/perumal_flower_seva.jpg"
          },
          {
            name: "Sri Ramanuja Avathara Utsavam",
            month: "Chithirai Thiruvadhirai (May)",
            desc: "Commemoration of Acharya Sri Ramanuja’s historic walk and the holy Gopuram revelation.",
            badge: "Acharya Jayanthi",
            img: "images/ramanuja_real.jpg"
          }
        ]
      },
      pooja: {
        badge: "Darshan Schedule",
        title: "Daily Pooja Schedule & Temple Hours",
        subtitle: "Plan your divine visit to receive the blessings of Lord Upendra Narayanan & Lord Sowmya Narayanan.",
        timings: [
          { time: "06:30 AM - 07:30 AM", name: "Viswaroopa Darshan", desc: "First morning darshan accompanied by sacred nadaswaram and suprabhatam." },
          { time: "08:30 AM - 09:30 AM", name: "Kalasanthi Pooja", desc: "Morning thirumanjanam and milk offering to the deities." },
          { time: "11:45 AM - 12:20 PM", name: "Uchikala Pooja", desc: "Noon pooja with grand prasadam. (Saturday-Sunday open till 1:00 PM)." },
          { time: "03:45 PM - 05:00 PM", name: "Sayaratchai Pooja", desc: "Evening reopening at 03:45 PM and oil lamp lighting ceremony across all 3 tiers." },
          { time: "06:45 PM - 07:30 PM", name: "Arthajama Pooja", desc: "Final night camphor harathi. (Saturday-Sunday closing at 8:00 PM)." }
        ]
      },
      travel: {
        badge: "Location & Transport",
        title: "How to Reach Thirukoshtiyur",
        subtitle: "Location details, transport options, and temple administration contact.",
        addressTitle: "Temple Address",
        address: "Arulmigu Sowmya Narayana Perumal Temple, Thirukoshtiyur - 630 210, Sivagangai District, Tamil Nadu, India.",
        phoneTitle: "Office Phone",
        phone: "+91 4577 261225 / Executive Officer, Sivagangai Samasthanam",
        routes: [
          { from: "From Sivagangai (District HQ)", dist: "26 km (35 mins)", bus: "Frequent government & private buses every 15 minutes." },
          { from: "From Karaikudi (Chettinad)", dist: "24 km (30 mins)", bus: "Direct town buses and auto rickshaws available continuously." },
          { from: "From Madurai Junction / Airport", dist: "65 km (1.5 hours)", bus: "Route via Thiruppuvanam - Manamadurai - Sivagangai or Melur." }
        ]
      },
      footer: {
        desc: "Thirukoshtiyur Sri Sowmya Narayana Perumal Temple is the 96th Vaishnava Divya Desam. Moolavar: Sri Upendra Narayanan (Seated Posture). Utsavar: Sri Sowmya Narayanan.",
        quickLinks: "Quick Navigation",
        trusteeship: "Royal Trusteeship",
        trusteeshipDesc: "Under the hereditary management of Tmt. Madhurandhagi Velu Nachiyar, Sivagangai Samasthanam.",
        copyright: "© 2026 Thirukoshtiyur Sri Sowmya Narayana Perumal Temple. All Rights Reserved."
      }
    },
    ta: {
      meta: {
        title: "திருக்கோஷ்டியூர் ஸ்ரீ சௌமிய நாராயண பெருமாள் திருக்கோயில் | 96-வது திவ்ய தேசம்",
        subtitle: "96-வது வைணவ திவ்ய தேசம் | மூலவர்: ஸ்ரீ உபேந்திர நாராயணன்",
        tagline: "ஸ்ரீ ராமானுஜர் அஷ்டாங்க விமான கோபுரத்திலிருந்து உலக மக்கள் அனைவருக்கும் உபதேசம் செய்த புனித தலம்"
      },
      nav: {
        home: "முகப்பு",
        brandTitle: "திருக்கோஷ்டியூர் திருக்கோயில்",
        brandSubtitle: "96-வது வைணவ திவ்ய தேசம்",
        ramanuja: "ஸ்ரீ ராமானுஜர்",
        vimanam: "அஷ்டாங்க விமானம்",
        royalHeritage: "வேலு நாச்சியார்",
        lampRitual: "விளக்கு வழிபாடு",
        donations: "நன்கொடை",
        panchangam: "பஞ்சாங்கம்",
        pooja: "பூஜை நேரங்கள்",
        contact: "கோயிலை அடைய",
        langToggle: "English"
      },
      hero: {
        badge: "96-வது பாண்டி நாட்டு திவ்ய தேசம்",
        title: "திருக்கோஷ்டியூர் ஸ்ரீ சௌமிய நாராயண பெருமாள் திருக்கோயில்",
        desc: "ஸ்ரீ ராமானுஜரின் தியாக வரலாறு நிறைந்த கோபுரம், மற்றும் வீரமங்கை வேலு நாச்சியார் வம்சத்தின் அரச குடும்பப் பாரம்பரியமிக்க திவ்ய தலம்.",
        exploreBtn: "3-அடுக்கு விமான தரிசனம்",
        lampBtn: "விளக்கு பிரார்த்தனை",
        stat1Label: "திவ்ய தேசம்",
        stat1Value: "96-வது தலம்",
        stat2Label: "மூலவர் (இருந்த கோலம்)",
        stat2Value: "ஸ்ரீ உபேந்திர நாராயணன்",
        stat3Label: "உற்சவர் பெருமாள்",
        stat3Value: "ஸ்ரீ சௌமிய நாராயணன்",
        stat4Label: "விமான அமைப்பு",
        stat4Value: "3-அடுக்கு அஷ்டாங்கம்"
      },
      ramanuja: {
        badge: "வரலாற்று கருணை",
        title: "ஸ்ரீ ராமானுஜரின் 18 நடை பயணங்கள் & கோபுர உபதேசம்",
        subtitle: "தனக்கு நரகம் வந்தாலும் பரவாயில்லை; உலக மக்கள் அனைவரும் முக்தி பெற வேண்டும் என்ற மகத்தான கருணை வரலாறு.",
        timeline: [
          {
            step: "1",
            title: "ஸ்ரீரங்கத்திலிருந்து 18 முறை நடைபயணம்",
            desc: "உயரிய ஞானத்தைப் பெற வேண்டும் என்ற தீராத தாகத்துடன், ஸ்ரீ ராமானுஜர் 150 கி.மீ தொலைவை 18 முறை வெறுங்காலுடன் நடந்து திருக்கோஷ்டியூருக்கு வந்தார்.",
            highlight: "தளராத பக்தி & விடாமுயற்சி"
          },
          {
            step: "2",
            title: "திருக்கோஷ்டியூர் நம்பியின் 17 சோதனைகள்",
            desc: "புனிதத்தையும் ராமானுஜரின் பக்குவத்தையும் சோதிக்க, திருக்கோஷ்டியூர் நம்பி அவரை 17 முறை 'திரும்பிப் போ' என்று திருப்பி அனுப்பினார்.",
            highlight: "குரு பரம்பரை ஒழுக்கம்"
          },
          {
            step: "3",
            title: "18-வது முறையில் கிடைத்த இரகசிய உபதேசம்",
            desc: "ராமானுஜரின் அளப்பரிய பணிவைக் கண்டு மகிழ்ந்த நம்பி, 'இதை வேறு யாருக்கும் கூறக் கூடாது; கூறினால் உனக்கு நரகம் கிட்டும்' என்ற நிபந்தனையுடன் உபதேசித்தார்.",
            highlight: "திருமந்திர உபதேசம்"
          },
          {
            step: "4",
            title: "அஷ்டாங்க கோபுரத்தின் மீது ஏறி முழக்கம்",
            desc: "உபதேசத்தைப் பெற்றவுடன், ராமானுஜர் அதைத் தனக்குள் வைத்துக்கொள்ள விரும்பவில்லை! உடனே திருக்கோஷ்டியூர் கோபுரத்தின் மீது ஏறி, சாதி மத பேதமின்றி அனைத்து மக்களையும் அழைத்து உரக்க உபதேசம் செய்தார்!",
            highlight: "அனைவருக்கும் முக்தி உபதேசம்"
          },
          {
            step: "5",
            title: "'எம்பெருமானார்' என தழுவிய குரு",
            desc: "சீறிய குருவிடம் ராமானுஜர்: 'நான் ஒருவன் நரகம் சென்றாலும், இந்த நல்லறிவைக் கேட்ட ஆயிரக்கணக்கான மக்கள் வைகுந்தம் அடைவார்களே!' என்றார். நெகிழ்ந்த நம்பி அவரை 'எம்பெருமானார்' எனத் தழுவிக் கொண்டார்.",
            highlight: "சமத்துவத்தின் உதயம்"
          }
        ],
        quote: "நான் ஒருவன் நரகத்திற்குச் சென்றாலும் பரவாயில்லை; என் மூலமாக இந்த உலக மக்கள் அனைவரும் நற்கதி அடைவார்கள் என்றால், அதைவிடப் பெரிய பாக்கியம் வேறு எதுவுமில்லை!",
        author: "— ஜெகத்குரு ஸ்ரீ ராமானுஜர் (திருக்கோஷ்டியூர் கோபுரம், 11-ஆம் நூற்றாண்டு)"
      },
      vimanam: {
        badge: "கட்டிடக்கலை அதிசயம்",
        title: "அரிய 3-அடுக்கு அஷ்டாங்க விமானம்",
        subtitle: "இந்தியாவிலேயே மிகவும் அபூர்வமான 3 நிலைகளில் பெருமாள் தரிசனம் தரும் ஓம்கார விமானத் திருக்கோயில்.",
        tiers: [
          {
            id: "tier3",
            name: "மேல் அடுக்கு (பரமபதம்)",
            posture: "நின்ற திருக்கோலம்",
            deity: "ஸ்ரீ பரமபத நாதன்",
            direction: "வடக்கு நோக்கி",
            desc: "வைகுந்தத்தின் பரமபத நிலையை உணர்த்தும் வடிவம். அஷ்டாங்க விமான கோபுரத்தின் கீழ் அமைந்துள்ளது. இந்த அடுக்கின் கோபுர பால்கனியிலிருந்தே ஸ்ரீ ராமானுஜர் மக்களுக்கு உபதேசம் செய்தார்.",
            img: "images/ashtanga_vimanam_actual.jpg"
          },
          {
            id: "tier2",
            name: "நடு அடுக்கு (அந்தரீக்ஷம் - மூலவர்)",
            posture: "இருந்த திருக்கோலம் (மூலவர் சந்நிதி)",
            deity: "ஸ்ரீ உபேந்திர நாராயண பெருமாள் (மூலவர்)",
            direction: "கிழக்கு நோக்கி",
            desc: "திருக்கோயிலின் பிரதான மூலவர் சந்நிதி. ஸ்ரீ உபேந்திர நாராயண பெருமாள் அமர்ந்த திருக்கோலத்தில் அஷ்டாங்க விமானத்தின் கீழ் எழுந்தருளி அருள் பாலிக்கிறார்.",
            img: "images/deity_pattu_3.jpg"
          },
          {
            id: "tier1",
            name: "கீழ் தளம் (பூலோகம் - சயனக் கோலம்)",
            posture: "கிடந்த திருக்கோலம் (சயனக் கோலம்)",
            deity: "ஸ்ரீ சௌமிய நாராயண பெருமாள் & சந்தான கிருஷ்ணர்",
            direction: "ஆதிசேஷன் மீது பள்ளி கொண்ட திருக்கோலம்",
            desc: "பாற்கடலில் பள்ளி கொண்டிருப்பது போன்ற சயனக் கோலம். இங்குள்ள சந்தான கிருஷ்ணர் சந்நிதி குழந்தை பாக்கியம் அருளும் தலம்.",
            img: "images/perumal_silver_face.jpg"
          }
        ]
      },
      royal: {
        badge: "அரச குடும்பப் பாரம்பரியம்",
        title: "வேலு நாச்சியார் அரச குடும்பப் பாரம்பரியம்",
        subtitle: "வீரமங்கை இராணி வேலு நாச்சியார் மற்றும் மதுராந்தகி வேலு நாச்சியார் வம்சத்தினரின் அறங்காவலர் திருப்பணிகள்.",
        queenTitle: "வீரமங்கை இராணி வேலு நாச்சியாரின் பக்திச் சிறப்பு",
        queenDesc: "ஆங்கிலேயரை எதிர்த்துப் போரிட்டு வென்ற சிவகங்கைச் சீமையின் மகாராணி வேலு நாச்சியார், திருக்கோஷ்டியூர் சௌமிய நாராயண பெருமாளைத் தனது குலதெய்வமாகவும் காவல் தெய்வமாகவும் வழிபட்டார். போர்க் காலங்களில் திருக்கோயிலைப் பாதுகாத்து அரிய நிவந்தங்களை வழங்கினார்.",
        madhurandhagiTitle: "ஸ்ரீமத் மதுராந்தகி வேலு நாச்சியார் அரச குடும்ப அறங்காவல்",
        madhurandhagiDesc: "வீரமங்கை இராணி வேலு நாச்சியாரின் வழித்தோன்றலான ஸ்ரீமத் மதுராந்தகி வேலு நாச்சியார் அவர்கள், சிவகங்கை சமஸ்தானத்தின் தலைவராகவும் திருக்கோஷ்டியூர் சௌமிய நாராயண பெருமாள் திருக்கோயிலின் பரம்பரை அறங்காவலராகவும் இருந்து திருப்பணிகளை வழிநடத்தி வருகிறார்.",
        bullets: [
          "பண்டைய அஷ்டாங்க விமானம் மற்றும் விலைமதிப்பற்ற திருவாபரணங்களின் பாதுகாப்பு.",
          "வருடாந்திர மாசி மக தெப்போற்சவத்தை அரச மரியாதையுடனும் அன்னதானத்துடனும் நடத்துதல்.",
          "வரலாற்றுச் செப்பேடுகள், திருக்கோயில் தேர் மற்றும் நிலக்கொடைகளைப் பராமரித்தல்.",
          "ஆண்டுதோறும் வருகை தரும் லட்சக்கணக்கான பக்தர்களுக்குத் தேவையான வசதிகளைச் செய்தல்."
        ]
      },
      lamp: {
        badge: "புனித தீப வழிபாடு",
        title: "மாசி மகம் விளக்கு பிரார்த்தனை (விளக்கு எடுத்தல்)",
        subtitle: "திருக்கோஷ்டியூர் தெப்பக்குளத்தின் வரலாற்றுச் சிறப்புமிக்க அகல் விளக்கு பிரார்த்தனை & விளக்கு எடுத்தல் முறை.",
        ritualTitle: "விளக்கு எடுத்தல் மற்றும் நேர்த்திக்கடன் முறை",
        step1: "மாசி மக தெப்போற்சவத்தின் போது பக்தர்கள் தெப்பக்குளப் படிக்கட்டுகளில் அகல் விளக்குகளை ஏற்றி திருமணம், புத்திர பாக்கியம், மற்றும் குடும்ப நலனுக்காகப் பிரார்த்தனை செய்கிறார்கள்.",
        step2: "பிரார்த்தனை செய்து மற்றவர்களின் விளக்கில் ஒரு ஜோடியை மஞ்சள் துணியினால் கட்டி ஒரு பாக்ஸில் (Box) வைத்து வீட்டிற்கு எடுத்துச் சென்று தினமும் பூஜை செய்கிறார்கள்.",
        step3: "வேண்டுதல் நிறைவேறியவுடன் அடுத்த ஆண்டு நமக்கு ஏற்றவாறு விளக்குகளாக ஏற்றி நேர்த்திக்கடன் செலுத்துவர்!",
        step4: "மற்ற நாட்களிலும் திருக்கோயில் சந்நிதியில் நேரடியாகப் பெற்றுக்கொள்ளலாம்.",
        nameLabel: "பக்தர் பெயர் / ஊர்",
        wishLabel: "உங்கள் பிரார்த்தனை / வேண்டுதல்",
        btnText: "தெப்பக்குளத்தில் விளக்கு ஏற்றுக",
        countLabel: "தெப்பக்குளத்தில் ஒளிரும் புனித விளக்குகள்",
        wishesTitle: "பக்தர்களின் அண்மைய வேண்டுதல்கள்"
      },
      donations: {
        badge: "திருக்கோயில் திருப்பணி & சேவை",
        title: "திருக்கோயில் திருப்பணி & அன்னதான நன்கொடைகள்",
        subtitle: "நித்ய அன்னதானம், கோசாலை பராமரிப்பு, நித்ய பூஜை மற்றும் 32 கிலோ தங்க அஷ்டாங்க விமானப் பராமரிப்பிற்குத் தங்களின் மேலான நன்கொடைகளை வழங்கலாம்.",
        categories: [
          {
            icon: "🍲",
            title: "நித்ய அன்னதானத் திட்டம்",
            desc: "திருக்கோயிலுக்கு வருகை தரும் ஆயிரக்கணக்கான பக்தர்களுக்கு தினமும் அறுசுவை அன்னதான பிரசாதம் வழங்குதல்.",
            badge: "அன்னதானம்"
          },
          {
            icon: "🐄",
            title: "கோ சாலை & பசு பராமரிப்பு",
            desc: "திருக்கோயில் கோசாலையில் உள்ள பசுக்களுக்கு தீவனம், கொட்டகை பராமரிப்பு மற்றும் மருத்துவச் சேவைகள்.",
            badge: "கோ சேவை"
          },
          {
            icon: "🪔",
            title: "நித்ய பூஜை & அபிஷேக கைங்கரியம்",
            desc: "தினசரி தீபங்களுக்கு சுத்தமான நெய், மலர் மாலைகள், சந்தனக் காப்பு மற்றும் திருமஞ்சனக் கட்டளைகள்.",
            badge: "பூஜை கைங்கரியம்"
          },
          {
            icon: "🏛️",
            title: "அஷ்டாங்க விமான திருப்பணி & புனரமைப்பு",
            desc: "பண்டைய 3 அடுக்கு தங்க விமானம், கலசங்கள், கல் மண்டபங்கள் மற்றும் திருக்கோயில் தேர் பராமரிப்பு.",
            badge: "திருப்பணி நிதி"
          }
        ],
        bankTitle: "சிவகங்கை சமஸ்தான தேவஸ்தான அதிகாரப்பூர்வ வங்கிக் கணக்கு",
        bankDesc: "பக்தர்கள் தங்களின் திருப்பணி நன்கொடைகளை தேவஸ்தானத்தின் நேரடி வங்கிக் கணக்கிற்கு அனுப்பி உரிய ரசீது பெற்றுக்கொள்ளலாம்.",
        accNameLabel: "கணக்கின் பெயர்",
        accName: "செயல் அலுவலர் / பரம்பரை அறங்காவலர், அருள்மிகு சௌமிய நாராயண பெருமாள் திருக்கோயில்",
        bankNameLabel: "வங்கி & கிளை",
        bankName: "இந்தியன் ஓவர்சீஸ் வங்கி, திருக்கோஷ்டியூர் கிளை / பாரத ஸ்டேட் வங்கி, சிவகங்கை",
        accNoLabel: "கணக்கு எண் & IFSC",
        accNo: "நேரடி வங்கி பரிமாற்றத்திற்கு திருக்கோயில் அலுவலகத்தை அணுகவும்",
        phoneInfo: "தொடர்பு: +91 4577 261225 / சிவகங்கை சமஸ்தான தேவஸ்தான அலுவலகம்"
      },
      panchangam: {
        badge: "தினசரி பஞ்சாங்கம் & திருவிழாக்கள்",
        title: "பஞ்சாங்கம் & திருக்கோயில் திருவிழாக்கள்",
        subtitle: "இன்றைய சுப நேரங்கள், திதி, நட்சத்திரம் மற்றும் திருக்கோஷ்டியூரின் வரவிருக்கும் பெருவிழாக்கள்.",
        festivals: [
          {
            name: "புகழ்பெற்ற மாசி மக தெப்போற்சவம் & 5 அகல் விளக்கு வழிபாடு",
            month: "மாசி மாதம் (பிப்ரவரி - மார்ச்)",
            desc: "திருக்கோஷ்டியூரின் முதன்மைப் பெருவிழா. தெப்பக்குளத்தின் நடுவே உள்ள 16 கால் மண்டபத்திற்குப் பெருமாள் மலர் அலங்கார தெப்பத்தில் எழுந்தருளுவார்.",
            badge: "முதன்மைப் பெருவிழா",
            img: "images/masi_magam.png"
          },
          {
            name: "வைகுண்ட ஏகாதசி & சொர்க்கவாசல் திறப்பு",
            month: "மார்கழி மாதம் (டிசம்பர் - ஜனவரி)",
            desc: "அதிகாலை 4:30 மணிக்கு பரமபத வாசல் திறக்கப்பட்டு ஸ்ரீ சௌமிய நாராயண பெருமாள் முத்தங்கி சேவையில் வீதி உலா எழுந்தருளுவார்.",
            badge: "மோட்ச திருவிழா",
            img: "images/sorga_vaasal_real.jpg"
          },
          {
            name: "சித்திரை பெருந்திருவிழா பிரம்மோற்சவம்",
            month: "சித்திரை மாதம் (ஏப்ரல் - மே)",
            desc: "கொடியேற்றத்துடன் தொடங்கி கருட சேவை, திருத்தேர் வடம் பிடித்தல் மற்றும் சப்தாவர்ணத்துடன் நிறைவடையும் 10 நாள் விழா.",
            badge: "10 நாள் பிரம்மோற்சவம்",
            img: "images/perumal_flower_seva.jpg"
          },
          {
            name: "ஸ்ரீ ராமானுஜர் அவதார உத்ஸவம்",
            month: "சித்திரை திருவாதிரை (மே)",
            desc: "ஸ்ரீ ராமானுஜர் 18 முறை நடந்து வந்து உபதேசம் பெற்ற திருநாளின் சிறப்பு மங்களாசாஸனம் மற்றும் கோபுர உலா.",
            badge: "ஆசார்யர் ஜெயந்தி",
            img: "images/ramanuja_real.jpg"
          }
        ]
      },
      pooja: {
        badge: "தரிசன கால அட்டவணை",
        title: "தினசரி பூஜை நேரங்கள் & நடை திறப்பு",
        subtitle: "ஸ்ரீ உபேந்திர நாராயணன் & ஸ்ரீ சௌமிய நாராயண பெருமாளின் திவ்ய தரிசன நேர அட்டவணை.",
        timings: [
          { time: "காலை 06:30 - 07:30", name: "விஸ்வரூப தரிசனம்", desc: "திருப்பள்ளி எழுச்சி மற்றும் சுப்ரபாதத்துடன் தொடங்கும் காலை நடை திறப்பு." },
          { time: "காலை 08:30 - 09:30", name: "காலசாந்தி பூஜை", desc: "பெருமாளுக்கு பாலாபிஷேகம் மற்றும் சிறப்பு அலங்காரப் பூஜை." },
          { time: "நண்பகல் 11:45 - 12:20", name: "உச்சிக்கால பூஜை", desc: "மதிய நிவேதனப் பூஜை. (சனி-ஞாயிறு நண்பகல் 1:00 மணி வரை திறந்திருக்கும்)." },
          { time: "மாலை 03:45 - 05:00", name: "சாயரட்சை பூஜை", desc: "மாலை 03:45 மணிக்கு நடை திறப்பு மற்றும் மூன்று அடுக்குகளிலும் தீப ஒளி வழிபாடு." },
          { time: "இரவு 06:45 - 07:30", name: "அர்த்தஜாம பூஜை", desc: "இரவு கற்பூர ஆரத்தி. (சனி-ஞாயிறு இரவு 8:00 மணி வரை திறந்திருக்கும்)." }
        ]
      },
      travel: {
        badge: "அமைவிடம் & போக்குவரத்து",
        title: "திருக்கோஷ்டியூர் திருக்கோயிலை அடைய",
        subtitle: "அமைவிடம், பேருந்து வசதிகள் மற்றும் திருக்கோயில் நிர்வாகத் தொடர்புகள்.",
        addressTitle: "திருக்கோயில் முகவரி",
        address: "அருள்மிகு சௌமிய நாராயண பெருமாள் திருக்கோயில், திருக்கோஷ்டியூர் - 630 210, சிவகங்கை மாவட்டம், தமிழ்நாடு.",
        phoneTitle: "அலுவலக தொலைபேசி",
        phone: "+91 4577 261225 / செயல் அலுவலர், சிவகங்கை சமஸ்தானம்",
        routes: [
          { from: "சிவகங்கையிலிருந்து (மாவட்டத் தலைநகர்)", dist: "26 கி.மீ (35 நிமிடங்கள்)", bus: "ஒவ்வொரு 15 நிமிடங்களுக்கும் நகரப் பேருந்துகள் உள்ளன." },
          { from: "காரைக்குடியிலிருந்து", dist: "24 கி.மீ (30 நிமிடங்கள்)", bus: "நேரடிப் பேருந்துகள் மற்றும் ஆட்டோ வசதிகள் உள்ளன." },
          { from: "மதுரையிலிருந்து (ரயில் / விமான நிலையம்)", dist: "65 கி.மீ (1.5 மணி நேரம்)", bus: "திருப்புவனம் - மானாமதுரை - சிவகங்கை அல்லது மேலூர் வழியாக பேருந்துகள்." }
        ]
      },
      footer: {
        desc: "திருக்கோஷ்டியூர் ஸ்ரீ சௌமிய நாராயண பெருமாள் திருக்கோயில் 96-வது வைணவ திவ்ய தேசமாகும். மூலவர்: ஸ்ரீ உபேந்திர நாராயணன் (இருந்த திருக்கோலம்). உற்சவர்: ஸ்ரீ சௌமிய நாராயணன்.",
        quickLinks: "முக்கிய இணைப்புகள்",
        trusteeship: "அரச குடும்ப அறங்காவலர்",
        trusteeshipDesc: "ஸ்ரீமத் மதுராந்தகி வேலு நாச்சியார் அவர்களின் தலைமையில், சிவகங்கை சமஸ்தானத்தின் கீழ் நிர்வகிக்கப்படுகிறது.",
        copyright: "© 2026 திருக்கோஷ்டியூர் ஸ்ரீ சௌமிய நாராயண பெருமாள் திருக்கோயில். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
      }
    }
  };

  // --- 2. State & Language Management ---
  let currentLang = localStorage.getItem('thirukoshtiyur_lang') || 'ta';
  let activeTier = 'tier3';

  // --- 3. Render Engine ---
  function renderAll() {
    const data = templeData[currentLang];
    document.title = data.meta.title;
    document.documentElement.lang = currentLang;

    if (currentLang === 'ta') {
      document.body.classList.add('lang-ta');
    } else {
      document.body.classList.remove('lang-ta');
    }

    // Brand logo text
    const brandTitle = document.getElementById('navbarBrandTitle');
    const brandSubtitle = document.getElementById('navbarBrandSubtitle');
    if (brandTitle) brandTitle.textContent = data.nav.brandTitle;
    if (brandSubtitle) brandSubtitle.textContent = data.nav.brandSubtitle;

    // Language toggle button text
    const langBtn = document.getElementById('langToggleBtn');
    const mobileLangBtn = document.getElementById('mobileLangToggleBtn');
    if (langBtn) langBtn.querySelector('span:last-child').textContent = data.nav.langToggle;
    if (mobileLangBtn) mobileLangBtn.querySelector('span:last-child').textContent = data.nav.langToggle;

    // Render Components
    renderNav(data.nav);
    renderHero(data.hero);
    renderRamanuja(data.ramanuja);
    renderVimanam(data.vimanam);
    renderRoyal(data.royal);
    renderLamp(data.lamp);
    renderDonations(data.donations);
    renderPanchangam(data.panchangam);
    renderPooja(data.pooja);
    renderTravel(data.travel);
    renderFooter(data.footer);
  }

  function renderNav(nav) {
    const linksContainer = document.getElementById('navLinks');
    const mobileLinksContainer = document.getElementById('mobileNavLinks');
    
    // Core desktop links
    const desktopLinks = [
      { id: '#ramanuja', label: nav.ramanuja },
      { id: '#vimanam', label: nav.vimanam },
      { id: '#heritage', label: nav.royalHeritage },
      { id: '#lamp', label: nav.lampRitual },
      { id: '#donations', label: nav.donations },
      { id: '#panchangam', label: nav.panchangam },
      { id: '#pooja', label: nav.pooja }
    ];

    // Full links for mobile drawer
    const fullLinks = [
      { id: '#ramanuja', label: nav.ramanuja, icon: '📜' },
      { id: '#vimanam', label: nav.vimanam, icon: '🛕' },
      { id: '#heritage', label: nav.royalHeritage, icon: '👑' },
      { id: '#lamp', label: nav.lampRitual, icon: '🪔' },
      { id: '#donations', label: nav.donations, icon: '🙏' },
      { id: '#panchangam', label: nav.panchangam, icon: '📅' },
      { id: '#pooja', label: nav.pooja, icon: '🔔' },
      { id: '#reach', label: nav.contact, icon: '🗺️' }
    ];

    if (linksContainer) {
      linksContainer.innerHTML = desktopLinks.map(l => `<li><a href="${l.id}" class="nav-link">${l.label}</a></li>`).join('');
    }

    if (mobileLinksContainer) {
      mobileLinksContainer.innerHTML = fullLinks.map(l => `
        <a href="${l.id}" class="nav-link mobile-link" style="display: flex; align-items: center; gap: 10px; padding: 12px 14px; font-size: 1rem; border-bottom: 1px solid var(--border-gold);">
          <span>${l.icon}</span>
          <span>${l.label}</span>
        </a>
      `).join('');
      mobileLinksContainer.querySelectorAll('.mobile-link').forEach(a => {
        a.addEventListener('click', closeMobileMenu);
      });
    }
  }

  function renderHero(hero) {
    const el = document.getElementById('heroContent');
    if (!el) return;
    el.innerHTML = `
      <div class="hero-grid">
        <div class="hero-text-col">
          <div class="temple-badge" style="margin-bottom: 14px;">
            <span>✦</span>
            <span>${hero.badge}</span>
          </div>
          <h1 class="hero-title font-heading">${hero.title}</h1>
          <p class="hero-desc font-body">${hero.desc}</p>
          <div class="hero-actions">
            <a href="#vimanam" class="btn-primary">
              <span>🏛️</span>
              <span>${hero.exploreBtn}</span>
            </a>
            <a href="#lamp" class="btn-gold">
              <span>🪔</span>
              <span>${hero.lampBtn}</span>
            </a>
          </div>
          <div class="hero-stats-grid">
            <div class="stat-card">
              <span class="stat-value">${hero.stat1Value}</span>
              <span class="stat-label">${hero.stat1Label}</span>
            </div>
            <div class="stat-card" style="border-color: var(--accent-gold-royal); background: #FFFDF9;">
              <span class="stat-value" style="color: #7A0C1B;">${hero.stat2Value}</span>
              <span class="stat-label" style="color: #996515; font-weight: 800;">${hero.stat2Label}</span>
            </div>
            <div class="stat-card">
              <span class="stat-value">${hero.stat3Value}</span>
              <span class="stat-label">${hero.stat3Label}</span>
            </div>
            <div class="stat-card">
              <span class="stat-value">${hero.stat4Value}</span>
              <span class="stat-label">${hero.stat4Label}</span>
            </div>
          </div>
        </div>
        <div class="hero-visual-col">
          <div class="hero-visual-card">
            <img src="images/clear_rajagopuram.png" alt="Thirukoshtiyur Rajagopuram" onerror="this.src='images/temple_main.jpg'" />
            <div class="hero-visual-overlay">
              <span style="color: #FFD700; font-weight: 800; font-size: 0.8rem; text-transform: uppercase;">Divya Desam Sanctum</span>
              <h3 style="color: #FFFFFF; font-size: 1.25rem; margin-top: 2px;">Sri Upendra Narayanan & Sri Sowmya Narayanan</h3>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderRamanuja(ramanuja) {
    const el = document.getElementById('ramanujaContent');
    if (!el) return;

    const timelineHtml = ramanuja.timeline.map(t => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="temple-glass-card" style="padding: 22px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span class="temple-badge" style="background: var(--bg-temple-linen);">Step ${t.step}</span>
            <span style="font-size: 0.78rem; font-weight: 800; color: var(--accent-gold-deep);">${t.highlight}</span>
          </div>
          <h4 style="font-size: 1.2rem; color: var(--accent-maroon); margin-bottom: 6px;">${t.title}</h4>
          <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">${t.desc}</p>
        </div>
      </div>
    `).join('');

    el.innerHTML = `
      <div class="section-header">
        <div class="temple-badge"><span>📜</span> <span>${ramanuja.badge}</span></div>
        <h2 class="font-heading">${ramanuja.title}</h2>
        <p class="font-body">${ramanuja.subtitle}</p>
      </div>

      <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 36px; align-items: start;">
        <div class="timeline-container">
          ${timelineHtml}
        </div>
        <div>
          <div class="temple-glass-card" style="overflow: hidden; border: 2px solid var(--border-gold); margin-bottom: 20px;">
            <img src="images/ramanuja.png" alt="Sri Ramanujar" style="width: 100%; height: 340px; object-fit: cover;" onerror="this.src='images/ramanuja_real.jpg'" />
            <div style="padding: 18px;">
              <span style="font-size: 0.78rem; font-weight: 800; color: var(--accent-gold-royal); text-transform: uppercase;">Thirukoshtiyur Nambi & Ramanuja</span>
              <h4 style="font-size: 1.15rem; color: var(--accent-maroon); margin-top: 4px;">Gopuram Proclamation</h4>
            </div>
          </div>
          <div class="quote-card">
            <p class="quote-text">“${ramanuja.quote}”</p>
            <p class="quote-author">${ramanuja.author}</p>
          </div>
        </div>
      </div>
    `;
  }

  function renderVimanam(vimanam) {
    const el = document.getElementById('vimanamContent');
    if (!el) return;

    const currentTierData = vimanam.tiers.find(t => t.id === activeTier) || vimanam.tiers[0];

    const tabsHtml = vimanam.tiers.map(t => `
      <button class="vimanam-tab-btn ${t.id === activeTier ? 'active' : ''}" data-tier="${t.id}">
        ${t.name}
      </button>
    `).join('');

    el.innerHTML = `
      <div class="section-header">
        <div class="temple-badge"><span>🛕</span> <span>${vimanam.badge}</span></div>
        <h2 class="font-heading">${vimanam.title}</h2>
        <p class="font-body">${vimanam.subtitle}</p>
      </div>

      <div class="vimanam-tabs">
        ${tabsHtml}
      </div>

      <div class="temple-glass-card vimanam-tier-card">
        <div class="vimanam-tier-img">
          <img src="${currentTierData.img}" alt="${currentTierData.name}" onerror="this.src='images/temple_main.jpg'" />
        </div>
        <div class="vimanam-tier-info">
          <div class="temple-badge" style="margin-bottom: 10px; background: var(--bg-temple-linen);">
            ${currentTierData.direction}
          </div>
          <h3 style="font-size: 1.8rem; color: var(--accent-maroon); margin-bottom: 10px;">${currentTierData.name}</h3>
          <div style="font-size: 1.15rem; font-weight: 800; color: var(--accent-gold-deep); margin-bottom: 8px;">
            ${currentTierData.posture}
          </div>
          <div style="font-size: 1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 14px;">
            Deity: ${currentTierData.deity}
          </div>
          <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.75;">
            ${currentTierData.desc}
          </p>
        </div>
      </div>
    `;

    el.querySelectorAll('.vimanam-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeTier = btn.getAttribute('data-tier');
        renderVimanam(templeData[currentLang].vimanam);
      });
    });
  }

  function renderRoyal(royal) {
    const el = document.getElementById('heritageContent');
    if (!el) return;

    const bulletsHtml = royal.bullets.map(b => `<li>${b}</li>`).join('');

    el.innerHTML = `
      <div class="section-header">
        <div class="temple-badge"><span>👑</span> <span>${royal.badge}</span></div>
        <h2 class="font-heading">${royal.title}</h2>
        <p class="font-body">${royal.subtitle}</p>
      </div>

      <div class="heritage-grid">
        <div class="temple-glass-card heritage-card">
          <div class="heritage-img-wrap">
            <img src="images/velu_nachiyar.png" alt="Veeramangai Rani Velu Nachiyar" onerror="this.src='images/rani_madhurandhagi.jpg'" />
          </div>
          <h3 style="font-size: 1.35rem; color: var(--accent-maroon);">${royal.queenTitle}</h3>
          <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.65;">${royal.queenDesc}</p>
        </div>

        <div class="temple-glass-card heritage-card">
          <div class="heritage-img-wrap">
            <img src="images/rani_madhurandhagi.jpg" alt="Tmt. Madhurandhagi Velu Nachiyar" onerror="this.src='images/velu_nachiyar.png'" />
          </div>
          <h3 style="font-size: 1.35rem; color: var(--accent-maroon);">${royal.madhurandhagiTitle}</h3>
          <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.65;">${royal.madhurandhagiDesc}</p>
          <ul class="heritage-bullets">
            ${bulletsHtml}
          </ul>
        </div>
      </div>
    `;
  }

  // --- 5. Virtual Lamp & Authentic Masi Magam Ritual Logic ---
  let lampCount = parseInt(localStorage.getItem('thirukoshtiyur_lamp_count'), 10) || 12480;
  let devoteeLamps = [
    { name: "Sundararajan, Chennai", wish: "Family Prosperity & Health", x: 25, y: 55 },
    { name: "Meenakshi, Madurai", wish: "Marriage & Good Fortune", x: 60, y: 70 },
    { name: "Kalyanaraman, Bangalore", wish: "Child Blessing (Santhana Bhagyam)", x: 45, y: 40 },
    { name: "Vasanthakumar, Sivagangai", wish: "Temple Kainkaryam & Peace", x: 75, y: 50 },
    { name: "Anuradha, Coimbatore", wish: "Education & Career Success", x: 30, y: 80 }
  ];

  function renderLamp(lamp) {
    const el = document.getElementById('lampContent');
    if (!el) return;

    const lampsHtml = devoteeLamps.map(l => `
      <div class="floating-lamp-item" style="left: ${l.x}%; top: ${l.y}%;" title="${l.name}: ${l.wish}">
        <div class="lamp-flame"></div>
        <div class="lamp-clay-base"></div>
      </div>
    `).join('');

    const recentWishesHtml = devoteeLamps.slice(-4).reverse().map(l => `
      <div style="padding: 8px 12px; background: #FFFFFF; border-radius: 8px; border: 1px solid var(--border-gold); margin-bottom: 6px; font-size: 0.82rem;">
        <span style="font-weight: 800; color: var(--accent-maroon);">${l.name}</span>: 
        <span style="color: var(--text-secondary);">${l.wish}</span>
      </div>
    `).join('');

    el.innerHTML = `
      <div class="section-header">
        <div class="temple-badge"><span>🪔</span> <span>${lamp.badge}</span></div>
        <h2 class="font-heading">${lamp.title}</h2>
        <p class="font-body">${lamp.subtitle}</p>
      </div>

      <!-- Authentic Ritual Explanation Card -->
      <div class="ritual-step-box" style="margin-bottom: 36px;">
        <div class="ritual-step-title">
          <span>🪔</span> <span>${lamp.ritualTitle}</span>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-top: 12px;">
          <div style="background: #FFFFFF; padding: 14px; border-radius: var(--radius-md); border: 1px solid var(--border-gold);">
            <div style="font-weight: 800; color: var(--accent-maroon); font-size: 0.88rem; margin-bottom: 4px;">1. தெப்பக்குள தீப வழிபாடு</div>
            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">${lamp.step1}</p>
          </div>
          <div style="background: #FFFFFF; padding: 14px; border-radius: var(--radius-md); border: 1px solid var(--border-gold);">
            <div style="font-weight: 800; color: var(--accent-gold-deep); font-size: 0.88rem; margin-bottom: 4px;">2. ஒரு ஜோடி விளக்கு எடுத்தல்</div>
            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">${lamp.step2}</p>
          </div>
          <div style="background: #FFFFFF; padding: 14px; border-radius: var(--radius-md); border: 1px solid var(--border-gold);">
            <div style="font-weight: 800; color: var(--accent-maroon); font-size: 0.88rem; margin-bottom: 4px;">3. நேர்த்திக்கடன் செலுத்துதல்</div>
            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">${lamp.step3}</p>
          </div>
          <div style="background: #FFFFFF; padding: 14px; border-radius: var(--radius-md); border: 1px solid var(--border-gold);">
            <div style="font-weight: 800; color: var(--accent-gold-deep); font-size: 0.88rem; margin-bottom: 4px;">4. சந்நிதி நேரடி தரிசனம்</div>
            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">${lamp.step4}</p>
          </div>
        </div>
      </div>

      <div class="lamp-ritual-grid">
        <div class="lamp-tank-visual">
          <div class="lamp-pond-water"></div>
          <div class="lamp-counter-badge">
            <span>🪔 ${lamp.countLabel}</span>
            <span id="lampCountDisplay" style="font-size: 1.15rem; color: #B8860B;">${lampCount.toLocaleString()}</span>
          </div>
          <div id="tankLampsContainer">
            ${lampsHtml}
          </div>
        </div>

        <div class="temple-glass-card lamp-form-card">
          <h3 style="font-size: 1.35rem; color: var(--accent-maroon); margin-bottom: 8px;">${lamp.title}</h3>
          <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 20px;">
            ${lamp.step1}
          </p>

          <form id="virtualLampForm">
            <div class="form-group">
              <label for="devoteeName">${lamp.nameLabel}</label>
              <input type="text" id="devoteeName" required placeholder="e.g. Ramanathan, Madurai" />
            </div>

            <div class="form-group">
              <label for="devoteeWish">${lamp.wishLabel}</label>
              <select id="devoteeWish">
                <option value="Family Prosperity & Peace (குடும்ப அமைதி)">Family Prosperity & Peace (குடும்ப அமைதி)</option>
                <option value="Child Blessings - Santhana Gopalan (புத்திர பாக்கியம்)">Child Blessings - Santhana Gopalan (புத்திர பாக்கியம்)</option>
                <option value="Marriage Alliance (திருமண பாக்கியம்)">Marriage Alliance (திருமண பாக்கியம்)</option>
                <option value="Good Health & Long Life (ஆரோக்கியம்)">Good Health & Long Life (ஆரோக்கியம்)</option>
                <option value="Education & Career Success (கல்வி & தொழில் மேன்மை)">Education & Career Success (கல்வி & தொழில் மேன்மை)</option>
              </select>
            </div>

            <button type="submit" class="btn-gold" style="width: 100%; padding: 12px;">
              <span>🪔</span> <span>${lamp.btnText}</span>
            </button>
          </form>

          <div style="margin-top: 20px;">
            <div style="font-size: 0.82rem; font-weight: 800; color: var(--accent-gold-deep); text-transform: uppercase; margin-bottom: 6px;">
              ${lamp.wishesTitle}
            </div>
            <div id="recentWishesList">
              ${recentWishesHtml}
            </div>
          </div>
        </div>
      </div>
    `;

    const form = document.getElementById('virtualLampForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('devoteeName');
        const wishSelect = document.getElementById('devoteeWish');

        const name = nameInput.value.trim() || 'Devotee';
        const wish = wishSelect.value;

        lampCount++;
        localStorage.setItem('thirukoshtiyur_lamp_count', lampCount.toString());

        const x = Math.floor(Math.random() * 70) + 15;
        const y = Math.floor(Math.random() * 55) + 30;
        devoteeLamps.push({ name, wish, x, y });

        renderLamp(templeData[currentLang].lamp);
      });
    }
  }

  // --- 6. Temple Donations & Endowments Render ---
  function renderDonations(donations) {
    const el = document.getElementById('donationsContent');
    if (!el) return;

    const cardsHtml = donations.categories.map(c => `
      <div class="donation-card">
        <div>
          <div class="donation-icon-wrap">${c.icon}</div>
          <div class="temple-badge" style="margin-bottom: 10px; font-size: 0.72rem;">${c.badge}</div>
          <h4 style="font-size: 1.15rem; color: var(--accent-maroon); margin-bottom: 8px;">${c.title}</h4>
          <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.55;">${c.desc}</p>
        </div>
        <div style="margin-top: 18px;">
          <a href="#reach" class="btn-primary" style="width: 100%; padding: 8px 14px; font-size: 0.82rem;">
            <span>🙏</span> <span>Seva Contribution</span>
          </a>
        </div>
      </div>
    `).join('');

    el.innerHTML = `
      <div class="section-header">
        <div class="temple-badge"><span>🙏</span> <span>${donations.badge}</span></div>
        <h2 class="font-heading">${donations.title}</h2>
        <p class="font-body">${donations.subtitle}</p>
      </div>

      <div class="donations-grid">
        ${cardsHtml}
      </div>

      <div class="bank-details-card">
        <h3 style="font-size: 1.35rem; color: var(--accent-maroon); margin-bottom: 8px;">${donations.bankTitle}</h3>
        <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 20px; line-height: 1.6;">${donations.bankDesc}</p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-bottom: 16px;">
          <div style="background: #FFFFFF; padding: 14px 18px; border-radius: var(--radius-md); border: 1px solid var(--border-gold);">
            <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">${donations.accNameLabel}</span>
            <div style="font-weight: 800; color: var(--accent-maroon); font-size: 0.95rem; margin-top: 2px;">${donations.accName}</div>
          </div>
          <div style="background: #FFFFFF; padding: 14px 18px; border-radius: var(--radius-md); border: 1px solid var(--border-gold);">
            <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">${donations.bankNameLabel}</span>
            <div style="font-weight: 800; color: var(--accent-maroon); font-size: 0.95rem; margin-top: 2px;">${donations.bankName}</div>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; padding-top: 12px; border-top: 1px solid var(--border-gold);">
          <span style="font-size: 0.88rem; font-weight: 700; color: var(--text-secondary);">${donations.phoneInfo}</span>
          <a href="#reach" class="btn-gold" style="padding: 8px 18px; font-size: 0.85rem;">
            <span>📞</span> <span>Contact Temple Administration</span>
          </a>
        </div>
      </div>
    `;
  }

  function renderPanchangam(panchangam) {
    const el = document.getElementById('panchangamContent');
    if (!el) return;

    const festivalsHtml = panchangam.festivals.map(f => `
      <div class="festival-card">
        <img src="${f.img}" alt="${f.name}" class="festival-img" onerror="this.src='images/temple_main.jpg'" />
        <div class="festival-info">
          <div class="temple-badge" style="width: fit-content; margin-bottom: 6px; font-size: 0.7rem;">
            ${f.badge}
          </div>
          <h4 style="font-size: 1.1rem; color: var(--accent-maroon); margin-bottom: 4px;">${f.name}</h4>
          <span style="font-size: 0.82rem; font-weight: 800; color: var(--accent-gold-deep); margin-bottom: 6px;">${f.month}</span>
          <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">${f.desc}</p>
        </div>
      </div>
    `).join('');

    el.innerHTML = `
      <div class="section-header">
        <div class="temple-badge"><span>📅</span> <span>${panchangam.badge}</span></div>
        <h2 class="font-heading">${panchangam.title}</h2>
        <p class="font-body">${panchangam.subtitle}</p>
      </div>

      <div class="panchangam-grid">
        <div class="panchangam-item-card">
          <div class="panchangam-icon">☀️</div>
          <div>
            <span style="font-size: 0.72rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Thithi / திதி</span>
            <div style="font-size: 1.05rem; font-weight: 800; color: var(--accent-maroon);">Sukla Paksha Ekadashi (சுக்கில பக்ஷ ஏகாதசி)</div>
          </div>
        </div>

        <div class="panchangam-item-card">
          <div class="panchangam-icon">⭐</div>
          <div>
            <span style="font-size: 0.72rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Nakshatram / நட்சத்திரம்</span>
            <div style="font-size: 1.05rem; font-weight: 800; color: var(--accent-maroon);">Thiruvonam / Shravana (திருவோணம்)</div>
          </div>
        </div>

        <div class="panchangam-item-card">
          <div class="panchangam-icon">⏳</div>
          <div>
            <span style="font-size: 0.72rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Nalla Neram / நல்ல நேரம்</span>
            <div style="font-size: 1.05rem; font-weight: 800; color: var(--accent-maroon);">09:15 AM - 10:15 AM & 04:45 PM - 05:45 PM</div>
          </div>
        </div>
      </div>

      <div class="festivals-grid">
        ${festivalsHtml}
      </div>
    `;
  }

  function renderPooja(pooja) {
    const el = document.getElementById('poojaContent');
    if (!el) return;

    const cardsHtml = pooja.timings.map(t => `
      <div class="pooja-card">
        <span class="pooja-time-badge">${t.time}</span>
        <div class="pooja-name">${t.name}</div>
        <p class="pooja-desc">${t.desc}</p>
      </div>
    `).join('');

    el.innerHTML = `
      <div class="section-header">
        <div class="temple-badge"><span>🔔</span> <span>${pooja.badge}</span></div>
        <h2 class="font-heading">${pooja.title}</h2>
        <p class="font-body">${pooja.subtitle}</p>
      </div>

      <div class="pooja-timing-grid">
        ${cardsHtml}
      </div>
    `;
  }

  function renderTravel(travel) {
    const el = document.getElementById('travelContent');
    if (!el) return;

    const routesHtml = travel.routes.map((r, i) => `
      <div class="route-item">
        <div class="route-bullet">${i + 1}</div>
        <div>
          <div style="font-weight: 800; color: var(--accent-maroon); font-size: 1rem;">${r.from}</div>
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-gold-deep); margin-2px 0;">Distance: ${r.dist}</div>
          <div style="font-size: 0.85rem; color: var(--text-secondary);">${r.bus}</div>
        </div>
      </div>
    `).join('');

    el.innerHTML = `
      <div class="section-header">
        <div class="temple-badge"><span>🗺️</span> <span>${travel.badge}</span></div>
        <h2 class="font-heading">${travel.title}</h2>
        <p class="font-body">${travel.subtitle}</p>
      </div>

      <div class="travel-grid">
        <div class="temple-glass-card travel-card">
          <h3 style="font-size: 1.25rem; color: var(--accent-maroon); margin-bottom: 14px;">${travel.addressTitle}</h3>
          <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 20px;">${travel.address}</p>

          <h3 style="font-size: 1.25rem; color: var(--accent-maroon); margin-bottom: 10px;">${travel.phoneTitle}</h3>
          <p style="font-size: 1.05rem; font-weight: 800; color: var(--accent-gold-deep);">${travel.phone}</p>
        </div>

        <div class="temple-glass-card travel-card">
          <h3 style="font-size: 1.25rem; color: var(--accent-maroon); margin-bottom: 14px;">Travel Routes & Distances</h3>
          <div>
            ${routesHtml}
          </div>
        </div>
      </div>
    `;
  }

  function renderFooter(footer) {
    const el = document.getElementById('footerContent');
    if (!el) return;

    el.innerHTML = `
      <div class="footer-grid">
        <div class="footer-brand">
          <h3 class="font-heading">Thirukoshtiyur Sowmya Narayana Perumal Kovil</h3>
          <p>${footer.desc}</p>
        </div>

        <div class="footer-links-col">
          <h4>${footer.quickLinks}</h4>
          <ul>
            <li><a href="#ramanuja">Sri Ramanujar</a></li>
            <li><a href="#vimanam">Ashtanga Vimanam</a></li>
            <li><a href="#heritage">Velu Nachiyar Heritage</a></li>
            <li><a href="#lamp">Masi Magam Lamp</a></li>
          </ul>
        </div>

        <div class="footer-links-col">
          <h4>Devotee Services</h4>
          <ul>
            <li><a href="#donations">Annadhanam & Donations</a></li>
            <li><a href="#pooja">Daily Pooja Hours</a></li>
            <li><a href="#panchangam">Panchangam Calendar</a></li>
            <li><a href="#reach">How to Reach</a></li>
          </ul>
        </div>

        <div class="footer-links-col">
          <h4>${footer.trusteeship}</h4>
          <p style="color: #E2D3D5; font-size: 0.85rem; line-height: 1.6;">${footer.trusteeshipDesc}</p>
        </div>
      </div>

      <div class="footer-bottom">
        <div>${footer.copyright}</div>
        <div>96th Divya Desam • Sivagangai Samasthanam</div>
      </div>
    `;
  }

  // --- 7. Event Listeners & Handlers ---
  function toggleLanguage() {
    currentLang = currentLang === 'ta' ? 'en' : 'ta';
    localStorage.setItem('thirukoshtiyur_lang', currentLang);
    renderAll();
  }

  function openMobileMenu() {
    const drawer = document.getElementById('mobileNavDrawer');
    const overlay = document.getElementById('mobileNavOverlay');
    if (drawer) drawer.classList.add('active');
    if (overlay) overlay.classList.add('active');
  }

  function closeMobileMenu() {
    const drawer = document.getElementById('mobileNavDrawer');
    const overlay = document.getElementById('mobileNavOverlay');
    if (drawer) drawer.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderAll();

    const langBtn = document.getElementById('langToggleBtn');
    const mobileLangBtn = document.getElementById('mobileLangToggleBtn');
    if (langBtn) langBtn.addEventListener('click', toggleLanguage);
    if (mobileLangBtn) mobileLangBtn.addEventListener('click', toggleLanguage);

    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileCloseBtn = document.getElementById('mobileCloseBtn');
    const mobileOverlay = document.getElementById('mobileNavOverlay');

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
    if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileMenu);
    if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);
  });

})();
