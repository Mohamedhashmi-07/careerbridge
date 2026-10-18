export const coursesData = [
  {
    id: "diploma-computer-engg",
    name: {
      en: "Diploma in Computer Engineering",
      ta: "கணினி பொறியியல் டிப்ளமோ",
      hi: "कंप्यूटर इंजीनियरिंग में डिप्लोमा"
    },
    category: "it",
    matchPercentage: 92,
    duration: {
      en: "3 Years (6 Semesters)",
      ta: "3 ஆண்டுகள் (6 பருவங்கள்)",
      hi: "3 वर्ष (6 सेमेस्टर)"
    },
    eligibility: {
      en: "10th Standard (SSLC) with Maths & Science, or ITI pass (Lateral Entry to 2nd year)",
      ta: "10-ஆம் வகுப்பு (எஸ்.எஸ்.எல்.சி) கணிதம் மற்றும் அறிவியலுடன், அல்லது ஐடிஐ தேர்ச்சி",
      hi: "10वीं कक्षा (एसएसएलसी) गणित और विज्ञान के साथ, या आईटीआई उत्तीर्ण"
    },
    estimatedFee: 18000,
    institutionCount: 18,
    whyMatches: {
      en: "Matches student's coding interest, aligns with parent's preference for recognized engineering disciplines, and strictly fits the family budget in government polytechnics.",
      ta: "மாணவரின் கோடிங் ஆர்வத்துடன் பொருந்துகிறது, அங்கீகரிக்கப்பட்ட பொறியியல் படிப்புகளுக்கான பெற்றோரின் விருப்பத்துடன் ஒத்துப்போகிறது மற்றும் அரசு பாலிடெக்னிக்கில் பட்ஜெட்டிற்குள் அடங்குகிறது.",
      hi: "छात्र की कोडिंग रुचि से मेल खाता है, मान्यता प्राप्त इंजीनियरिंग के लिए अभिभावक की पसंद के अनुरूप है और सरकारी पॉलिटेक्निक में बजट में फिट बैठता है।"
    },
    overview: {
      en: "A comprehensive 3-year AICTE-approved diploma covering computer programming, hardware architecture, relational database management, web design, and operating systems with strong practical lab components.",
      ta: "கணினி நிரலாக்கம், வன்பொருள் கட்டமைப்பு, தரவுத்தள மேலாண்மை, இணைய வடிவமைப்பு மற்றும் இயக்க முறைமைகளை உள்ளடக்கிய 3 ஆண்டு AICTE அங்கீகாரம் பெற்ற டிப்ளமோ.",
      hi: "कंप्यूटर प्रोग्रामिंग, हार्डवेयर आर्किटेक्चर, रिलेशनल डेटाबेस मैनेजमेंट, वेब डिज़ाइन और ऑपरेटिंग सिस्टम को कवर करने वाला 3-वर्षीय AICTE अनुमोदित डिप्लोमा।"
    },
    subjects: [
      { en: "Programming in C & Python", ta: "சி மற்றும் பைதான் நிரலாக்கம்", hi: "सी एवं पायथन प्रोग्रामिंग" },
      { en: "Computer Architecture & Hardware", ta: "கணினி கட்டமைப்பு மற்றும் வன்பொருள்", hi: "कंप्यूटर आर्किटेक्चर और हार्डवेयर" },
      { en: "Relational Database Management (DBMS)", ta: "தரவுத்தள மேலாண்மை அமைப்பு (டிபிஎம்எஸ்)", hi: "रिलेशनल डेटाबेस मैनेजमेंट (डीबीएमएस)" },
      { en: "Computer Networks & Cyber Security", ta: "கணினி நெட்வொர்க்குகள் மற்றும் இணையப் பாதுகாப்பு", hi: "कंप्यूटर नेटवर्क और साइबर सुरक्षा" },
      { en: "Web Technologies & Full-Stack Basics", ta: "இணைய தொழில்நுட்பங்கள் மற்றும் வெப் டெவலப்மென்ட்", hi: "वेब टेक्नोलॉजीज और फुल-स्टैक बेसिक्स" }
    ],
    skillsRequired: [
      { en: "Basic Computer Literacy", ta: "அடிப்படை கணினி அறிவு", hi: "बुनियादी कंप्यूटर साक्षरता" },
      { en: "Logical Problem Solving", ta: "தர்க்கரீதியான சிக்கல் தீர்க்கும் திறன்", hi: "तार्किक समस्या समाधान" },
      { en: "Basic High School Mathematics", ta: "அடிப்படை உயர்நிலைப் பள்ளி கணிதம்", hi: "बुनियादी हाई स्कूल गणित" }
    ],
    skillsLearned: [
      { en: "Full-Stack Web & Scripting", ta: "முழு அடுக்கு வலை மற்றும் ஸ்கிரிப்டிங்", hi: "फुल-स्टैक वेब एवं स्क्रिप्टिंग" },
      { en: "Database Design & SQL", ta: "தரவுத்தள வடிவமைப்பு மற்றும் எஸ்கியூஎல்", hi: "डेटाबेस डिज़ाइन एवं एसक्यूएल" },
      { en: "System Troubleshooting & Linux", ta: "கணினி சரிசெய்தல் மற்றும் லினக்ஸ்", hi: "सिस्टम समस्या निवारण एवं लिनक्स" },
      { en: "API Integration & Cloud Basics", ta: "ஏபிஐ ஒருங்கிணைப்பு & கிளவுட் அடிப்படைகள்", hi: "एपीआई एकीकरण एवं क्लाउड फंडामेंटल्स" }
    ],
    skillGap: {
      readinessScore: 78,
      currentSkills: [
        { en: "Basic Python Syntax", ta: "அடிப்படை பைதான் தொடரியல்", hi: "बुनियादी पायथन सिंटैक्स", status: "completed" },
        { en: "Basic HTML/CSS", ta: "அடிப்படை HTML/CSS", hi: "बुनियादी एचटीएमएल/सीएसएस", status: "completed" },
        { en: "High School Algebra", ta: "உயர்நிலைப் பள்ளி இயற்கணிதம்", hi: "हाई स्कूल बीजगणित", status: "completed" }
      ],
      missingSkills: [
        { en: "Relational Database Concepts (SQL)", ta: "தரவுத்தள கருத்துக்கள் (எஸ்கியூஎல்)", hi: "डेटाबेस अवधारणाएं (एसक्यूएल)", status: "pending" },
        { en: "Data Structures & Algorithms", ta: "தரவு கட்டமைப்புகள் மற்றும் அல்காரிதம்", hi: "डेटा संरचनाएं और एल्गोरिदम", status: "pending" }
      ],
      recommendedPrep: {
        en: "Free 10-day online module on SQL Fundamentals & Object-Oriented Logic before classes commence.",
        ta: "வகுப்புகள் தொடங்குவதற்கு முன் எஸ்கியூஎல் அடிப்படைகள் மற்றும் ஆப்ஜெக்ட்-ஓரியண்டட் தர்க்கம் குறித்த இலவச 10-நாள் ஆன்லைன் தொகுதி.",
        hi: "कक्षाएं शुरू होने से पहले एसक्यूएल फंडामेंटल्स और ऑब्जेक्ट-ओरिएंटेड लॉजिक पर 10-दिवसीय निःशुल्क ऑनलाइन मॉड्यूल।"
      }
    },
    careerOptions: [
      { en: "Junior Software Developer", ta: "இளநிலை மென்பொருள் உருவாக்குநர்", hi: "जूनियर सॉफ्टवेयर डेवलपर" },
      { en: "Technical Support Engineer", ta: "தொழில்நுட்ப ஆதரவு பொறியாளர்", hi: "तकनीकी सहायता इंजीनियर" },
      { en: "Web Frontend Specialist", ta: "இணைய முகப்பு சிறப்பு நிபுணர்", hi: "वेब फ्रंटएंड विशेषज्ञ" },
      { en: "System Administrator Assistant", ta: "கணினி நிர்வாகி உதவியாளர்", hi: "सिस्टम एडमिनिस्ट्रेटर सहायक" }
    ],
    furtherStudy: [
      { en: "Direct 2nd Year B.E. / B.Tech in CSE / IT (Lateral Entry)", ta: "நேரடி 2-ஆம் ஆண்டு பி.இ. / பி.டெக் (சிஎஸ்இ / ஐடி)", hi: "बी.ई. / बी.टेक में सीधे द्वितीय वर्ष प्रवेश (लेटरल एंट्री)" },
      { en: "Bachelor of Vocation (B.Voc) in Software Development", ta: "மென்பொருள் உருவாக்கத்தில் பி.வோக் பட்டம்", hi: "सॉफ्टवेयर विकास में बी.वोक" }
    ],
    verificationStatus: "verified"
  },
  {
    id: "iti-electrician",
    name: {
      en: "ITI Electrician Craftsman Certificate",
      ta: "ஐடிஐ எலக்ட்ரீஷியன் கைவினைஞர் சான்றிதழ்",
      hi: "आईटीआई इलेक्ट्रीशियन शिल्पकार प्रमाणपत्र"
    },
    category: "iti",
    matchPercentage: 86,
    duration: {
      en: "2 Years (4 Semesters)",
      ta: "2 ஆண்டுகள் (4 பருவங்கள்)",
      hi: "2 वर्ष (4 सेमेस्टर)"
    },
    eligibility: {
      en: "10th Standard (SSLC) pass with Science and Mathematics",
      ta: "10-ஆம் வகுப்பு (எஸ்.எஸ்.எல்.சி) அறிவியல் மற்றும் கணிதத்துடன் தேர்ச்சி",
      hi: "10वीं कक्षा (एसएसएलसी) विज्ञान और गणित के साथ उत्तीर्ण"
    },
    estimatedFee: 6500,
    institutionCount: 26,
    whyMatches: {
      en: "Exceptional government job security (TANGEDCO/Railways), lowest educational cost, immediate apprenticeship licensing, and safe working conditions.",
      ta: "சிறந்த அரசு வேலைவாய்ப்பு பாதுகாப்பு (மின்வாரியம்/ரயில்வே), மிகக் குறைந்த கட்டணம், உடனடி தொழிற்பயிற்சி உரிமம் மற்றும் பாதுகாப்பான பணிச்சூழல்.",
      hi: "उत्कृष्ट सरकारी नौकरी की सुरक्षा (बिजली बोर्ड/रेलवे), न्यूनतम शैक्षणिक लागत, तत्काल अप्रेंटिसशिप लाइसेंस और सुरक्षित कार्य वातावरण।"
    },
    overview: {
      en: "National Council for Vocational Training (NCVT) recognized program training students in industrial electrical installations, transmission networks, motor winders, and domestic wiring.",
      ta: "தொழில்துறை மின் நிறுவல்கள், மோட்டார் வைண்டிங் மற்றும் உள்நாட்டு மின் வயரிங் ஆகியவற்றில் மாணவர்களுக்கு பயிற்சி அளிக்கும் NCVT அங்கீகாரம் பெற்ற திட்டம்.",
      hi: "औद्योगिक विद्युत प्रतिष्ठानों, मोटर वाइंडिंग और घरेलू वायरिंग में छात्रों को प्रशिक्षित करने वाला एनसीवीटी मान्यता प्राप्त कार्यक्रम।"
    },
    subjects: [
      { en: "Electrical Wiring & Domestic Appliances", ta: "மின் வயரிங் மற்றும் வீட்டு உபகரணங்கள்", hi: "विद्युत वायरिंग और घरेलू उपकरण" },
      { en: "AC & DC Machines and Transformers", ta: "ஏசி & டிசி இயந்திரங்கள் மற்றும் டிரான்ஸ்பார்மர்கள்", hi: "एसी और डीसी मशीनें तथा ट्रांसफार्मर" },
      { en: "Industrial Control Panels & Switchgear", ta: "தொழில்துறை கட்டுப்பாட்டு பேனல்கள்", hi: "औद्योगिक नियंत्रण पैनल और स्विचगियर" },
      { en: "Renewable Energy & Solar Inverters", ta: "புதுப்பிக்கத்தக்க எரிசக்தி மற்றும் சோலார் அமைப்புகள்", hi: "नवीकरणीय ऊर्जा और सौर इन्वर्टर" }
    ],
    skillsRequired: [
      { en: "Basic Physics (Current & Voltage)", ta: "அடிப்படை இயற்பியல் (மின்னோட்டம்)", hi: "बुनियादी भौतिकी (करंट एवं वोल्टेज)" },
      { en: "Eye-Hand Coordination & Dexterity", ta: "கை-கண் ஒருங்கிணைப்பு மற்றும் சுறுசுறுப்பு", hi: "हाथ-आंख समन्वय एवं निपुणता" }
    ],
    skillsLearned: [
      { en: "Blueprint Reading & Circuit Design", ta: "மின்சுற்று வரைபடம் படித்தல்", hi: "सर्किट डिज़ाइन एवं ब्लूप्रिंट रीडिंग" },
      { en: "Transformer & Motor Maintenance", ta: "டிரான்ஸ்பார்மர் & மோட்டார் பராமரிப்பு", hi: "ट्रांसफार्मर और मोटर रखरखाव" },
      { en: "High Voltage Safety & Earthing", ta: "உயர் மின்னழுத்த பாதுகாப்பு மற்றும் எர்த்திங்", hi: "हाई वोल्टेज सुरक्षा एवं अर्थिंग" }
    ],
    skillGap: {
      readinessScore: 84,
      currentSkills: [
        { en: "High School Physics", ta: "உயர்நிலைப்பள்ளி இயற்பியல்", hi: "हाई स्कूल भौतिकी", status: "completed" },
        { en: "Safety Awareness", ta: "பாதுகாப்பு விழிப்புணர்வு", hi: "सुरक्षा जागरूकता", status: "completed" }
      ],
      missingSkills: [
        { en: "Multimeter & Oscilloscope Calibration", ta: "மல்டிமீட்டர் அளவுத்திருத்தம்", hi: "मल्टीमीटर और ऑसिलोस्कोप कैलिब्रेशन", status: "pending" }
      ],
      recommendedPrep: {
        en: "Review basic circuit theory Ohm's Law and practice basic multimeter measurements.",
        ta: "ஓம் விதி மற்றும் அடிப்படை மல்டிமீட்டர் அளவீடுகளை மதிப்பாய்வு செய்யவும்.",
        hi: "ओम का नियम और बुनियादी मल्टीमीटर माप का अभ्यास करें।"
      }
    },
    careerOptions: [
      { en: "Licensed Electrical Contractor", ta: "உரிமம் பெற்ற மின் ஒப்பந்ததாரர்", hi: "लाइसेंस प्राप्त इलेक्ट्रिकल ठेकेदार" },
      { en: "State Electricity Board Lineman", ta: "மின்சார வாரிய லைன்மேன்", hi: "राज्य विद्युत बोर्ड लाइनमैन" },
      { en: "Industrial Maintenance Electrician", ta: "தொழில்துறை பராமரிப்பு எலக்ட்ரீஷியன்", hi: "औद्योगिक रखरखाव इलेक्ट्रीशियन" },
      { en: "Railway Traction Apprentice", ta: "ரயில்வே டிராக்ஷன் பயிற்சியாளர்", hi: "रेलवे ट्रैक्शन अप्रेंटिस" }
    ],
    furtherStudy: [
      { en: "Lateral entry into 2nd year Polytechnic Diploma in Electrical Engineering", ta: "எலக்ட்ரிக்கல் டிப்ளமோவில் நேரடி 2-ஆம் ஆண்டு சேர்க்கை", hi: "इलेक्ट्रिकल इंजीनियरिंग पॉलिटेक्निक डिप्लोमा में सीधे द्वितीय वर्ष प्रवेश" }
    ],
    verificationStatus: "verified"
  },
  {
    id: "diploma-mechanical-engg",
    name: {
      en: "Diploma in Mechanical Engineering",
      ta: "இயந்திரவியல் பொறியியல் டிப்ளமோ",
      hi: "मैकेनिकल इंजीनियरिंग में डिप्लोमा"
    },
    category: "polytechnic",
    matchPercentage: 88,
    duration: {
      en: "3 Years (6 Semesters)",
      ta: "3 ஆண்டுகள் (6 பருவங்கள்)",
      hi: "3 वर्ष (6 सेमेस्टर)"
    },
    eligibility: {
      en: "10th Standard (SSLC) pass with 35% marks",
      ta: "10-ஆம் வகுப்பு 35% மதிப்பெண்களுடன் தேர்ச்சி",
      hi: "10वीं कक्षा न्यूनतम 35% अंकों के साथ उत्तीर्ण"
    },
    estimatedFee: 16500,
    institutionCount: 22,
    whyMatches: {
      en: "High industrial hiring across Tamil Nadu manufacturing corridors (Sriperumbudur, Coimbatore, Hosur), strong hands-on learning, and parent-approved core branch.",
      ta: "தமிழகத்தின் உற்பத்தி மையங்களில் (ஸ்ரீபெரும்புதூர், கோவை, ஓசூர்) அதிக வேலைவாய்ப்பு, சிறந்த செய்முறைப் பயிற்சி மற்றும் பெற்றோரின் ஏற்பளிப்பு.",
      hi: "तमिलनाडु के विनिर्माण गलियारों (श्रीपेरंबुदूर, कोयंबटूर, होसुर) में उच्च मांग, बेहतरीन प्रैक्टिकल अनुभव और अभिभावक-स्वीकृत कोर ब्रांच।"
    },
    overview: {
      en: "Foundational engineering program imparting expertise in Computer Numerical Control (CNC) machining, thermal dynamics, CAD/CAM drafting, robotics, and industrial quality inspection.",
      ta: "சிஎன்சி மெஷினிங், வெப்ப இயக்கவியல், கேட்/கேம் வரைபடம், ரோபோட்டிக்ஸ் மற்றும் தரக் கட்டுப்பாடு ஆகியவற்றில் நிபுணத்துவம் அளிக்கும் திட்டம்.",
      hi: "सीएनसी मशीनिंग, थर्मल डायनेमिक्स, कैड/कैम ड्राफ्टिंग, रोबोटिक्स और औद्योगिक गुणवत्ता निरीक्षण में विशेषज्ञता प्रदान करने वाला कार्यक्रम।"
    },
    subjects: [
      { en: "Manufacturing Technology & Workshop Practice", ta: "உற்பத்தி தொழில்நுட்பம் மற்றும் பட்டறைப் பயிற்சி", hi: "मैन्युफैक्चरिंग टेक्नोलॉजी और वर्कशॉप प्रैक्टिस" },
      { en: "Engineering Drawing & 3D CAD Modeling", ta: "பொறியியல் வரைபடம் மற்றும் 3D கேட்", hi: "इंजीनियरिंग ड्राइंग और 3D कैड मॉडलिंग" },
      { en: "CNC Programming & Lathe Operations", ta: "சிஎன்சி புரோகிராமிங் மற்றும் லேத் செயல்பாடுகள்", hi: "सीएनसी प्रोग्रामिंग और खराद संचालन" },
      { en: "Hydraulics, Pneumatics & Automation", ta: "ஹைட்ராலிக்ஸ், நிமோடிக்ஸ் மற்றும் தானியங்கு அமைப்புகள்", hi: "हाइड्रोलिक्स, न्यूमेटिक्स और ऑटोमेशन" }
    ],
    skillsRequired: [
      { en: "Spatial Reasoning & Drawing", ta: "வெளிசார் சிந்தனை மற்றும் வரைதல்", hi: "स्थानिक तर्क और रेखाचित्र" },
      { en: "Practical Machinery Affinity", ta: "இயந்திரங்கள் மீதான ஆர்வம்", hi: "व्यावहारिक मशीनरी के प्रति रुचि" }
    ],
    skillsLearned: [
      { en: "CNC G-Code / M-Code Programming", ta: "சிஎன்சி நிரலாக்கம்", hi: "सीएनसी जी-कोड प्रोग्रामिंग" },
      { en: "SolidWorks & AutoCAD Drafting", ta: "சாலிட்வொர்க்ஸ் மற்றும் ஆட்டோகேட்", hi: "सॉलिडवर्क्स और ऑटोकैड ड्राफ्टिंग" },
      { en: "Quality Inspection & Vernier/Micrometer", ta: "தர ஆய்வு மற்றும் அளவீட்டு கருவிகள்", hi: "गुणवत्ता निरीक्षण एवं मापक उपकरण" }
    ],
    skillGap: {
      readinessScore: 82,
      currentSkills: [
        { en: "High School Geometry", ta: "உயர்நிலைப்பள்ளி வடிவியல்", hi: "हाई स्कूल ज्यामिति", status: "completed" },
        { en: "Basic Tool Handling", ta: "அடிப்படை கருவி கையாளுதல்", hi: "बुनियादी उपकरण संचालन", status: "completed" }
      ],
      missingSkills: [
        { en: "Engineering Drawing Conventions", ta: "பொறியியல் வரைபட விதிமுறைகள்", hi: "इंजीनियरिंग ड्राइंग मानक", status: "pending" }
      ],
      recommendedPrep: {
        en: "Learn introductory technical sketching and isometric projection concepts.",
        ta: "தொழில்நுட்ப வரைபடம் மற்றும் ஐசோமெட்ரிக் திட்டமிடல் அடிப்படைகளைக் கற்றுக்கொள்ளுங்கள்.",
        hi: "प्रारंभिक तकनीकी स्केचिंग और आइसोमेट्रिक प्रोजेक्शन का अभ्यास करें।"
      }
    },
    careerOptions: [
      { en: "Junior Production Supervisor", ta: "இளநிலை உற்பத்தி மேற்பார்வையாளர்", hi: "जूनियर उत्पादन पर्यवेक्षक" },
      { en: "CNC Programmer & Operator", ta: "சிஎன்சி புரோகிராமர் மற்றும் ஆபரேட்டர்", hi: "सीएनसी प्रोग्रामर और ऑपरेटर" },
      { en: "Quality Assurance (QA) Inspector", ta: "தர உறுதிப் பரிசோதகர்", hi: "गुणवत्ता आश्वासन (QA) निरीक्षक" },
      { en: "CAD Design Drafter", ta: "கேட் வடிவமைப்பு வரைவாளர்", hi: "कैड डिज़ाइन ड्राफ्टर" }
    ],
    furtherStudy: [
      { en: "Lateral Entry to B.E. Mechanical / Mechatronics / Automobile", ta: "பி.இ. மெக்கானிக்கல் / மெக்கட்ரானிக்ஸில் நேரடி 2-ஆம் ஆண்டு சேர்க்கை", hi: "बी.ई. मैकेनिकल / मेकाट्रॉनिक्स में लेटरल एंट्री" }
    ],
    verificationStatus: "verified"
  },
  {
    id: "healthcare-general-duty-assistant",
    name: {
      en: "Healthcare Assistant & Allied Care",
      ta: "சுகாதார உதவியாளர் மற்றும் மருத்துவத் துணைப் பராமரிப்பு",
      hi: "स्वास्थ्य सेवा सहायक एवं संबद्ध देखभाल"
    },
    category: "healthcare",
    matchPercentage: 81,
    duration: {
      en: "1 Year Certificate + 6 Months Internship",
      ta: "1 ஆண்டு சான்றிதழ் + 6 மாத உள்ளிருப்புப் பயிற்சி",
      hi: "1 वर्ष प्रमाणपत्र + 6 महीने इंटर्नशिप"
    },
    eligibility: {
      en: "10th Standard (SSLC) pass",
      ta: "10-ஆம் வகுப்பு தேர்ச்சி",
      hi: "10वीं कक्षा उत्तीर्ण"
    },
    estimatedFee: 12000,
    institutionCount: 12,
    whyMatches: {
      en: "Recession-proof demand in hospitals and diagnostic clinics, short turnaround to earning, compassionate service, and recognized healthcare sector skill council certification.",
      ta: "மருத்துவமனைகளில் எப்போதும் உள்ள நிலையான தேவை, விரைவான வருவாய் ஈட்டும் வாய்ப்பு மற்றும் சுகாதார திறன் கவுன்சில் அங்கீகாரம்.",
      hi: "अस्पतालों में निरंतर मांग, कमाई शुरू करने की कम समयावधि, सेवा भाव और मान्यता प्राप्त स्वास्थ्य सेवा प्रमाणन।"
    },
    overview: {
      en: "Equips students with essential patient support skills including vital signs monitoring, infection prevention, emergency first-aid, geriatric care, and clinical documentation.",
      ta: "உயிர் காக்கும் அறிகுறிகளைக் கண்காணித்தல், தொற்று தடுப்பு, முதலுதவி மற்றும் மருத்துவ ஆவணமாக்கல் உள்ளிட்ட நோயாளி பராமரிப்புப் பயிற்சிகளை வழங்குகிறது.",
      hi: "छात्रों को वाइटल साइंस निगरानी, संक्रमण रोकथाम, प्राथमिक चिकित्सा, बुजुर्गों की देखभाल और नैदानिक प्रलेखन का व्यावहारिक प्रशिक्षण देता है।"
    },
    subjects: [
      { en: "Basic Human Anatomy & Physiology", ta: "மனித உடற்கூறியல் அடிப்படைகள்", hi: "बुनियादी मानव शरीर रचना विज्ञान" },
      { en: "Patient Care, Hygiene & Bed Making", ta: "நோயாளி பராமரிப்பு மற்றும் சுகாதாரம்", hi: "रोगी देखभाल, स्वच्छता और बेड मेकिंग" },
      { en: "Emergency First Aid & CPR Protocol", ta: "அவசர முதலுதவி மற்றும் சிபிஆர்", hi: "आपातकालीन प्राथमिक चिकित्सा और सीपीआर" },
      { en: "Medical Bio-waste Management", ta: "மருத்துவக் கழிவு மேலாண்மை", hi: "बायो-मेडिकल अपशिष्ट प्रबंधन" }
    ],
    skillsRequired: [
      { en: "Empathy & Interpersonal Communication", ta: "பரிவு மற்றும் தகவல் தொடர்பு திறன்", hi: "सहानुभूति और संवाद कौशल" },
      { en: "Physical Stamina", ta: "உடல் சகிப்புத்தன்மை", hi: "शारीरिक सहनशक्ति" }
    ],
    skillsLearned: [
      { en: "BP & Sugar Clinical Monitoring", ta: "இரத்த அழுத்தம் மற்றும் சர்க்கரை அளவு கண்காணிப்பு", hi: "रक्तचाप एवं ग्लूकोज निगरानी" },
      { en: "Sterilization & Infection Control", ta: "கிருமி நீக்கம் மற்றும் தொற்று கட்டுப்பாடு", hi: "नसबंदी और संक्रमण नियंत्रण" },
      { en: "Hospital Information System (HIS) Entry", ta: "மருத்துவமனை தகவல் மேலாண்மை அமைப்பு", hi: "अस्पताल सूचना प्रणाली डेटा एंट्री" }
    ],
    skillGap: {
      readinessScore: 89,
      currentSkills: [
        { en: "High School Biology", ta: "உயர்நிலைப்பள்ளி உயிரியல்", hi: "हाई स्कूल जीव विज्ञान", status: "completed" },
        { en: "Communication Skills", ta: "தகவல் தொடர்பு திறன்", hi: "संवाद कौशल", status: "completed" }
      ],
      missingSkills: [
        { en: "Clinical Terminology", ta: "மருத்துவ கலைச்சொற்கள்", hi: "नैदानिक शब्दावली", status: "pending" }
      ],
      recommendedPrep: {
        en: "Review basic circulatory and respiratory terminology.",
        ta: "சுவாச மற்றும் இரத்த ஓட்ட மண்டல கலைச்சொற்களை மதிப்பாய்வு செய்யவும்.",
        hi: "श्वसन और संचार प्रणाली शब्दावली का अध्ययन करें।"
      }
    },
    careerOptions: [
      { en: "Hospital General Duty Assistant", ta: "மருத்துவமனை பொதுப் பணி உதவியாளர்", hi: "अस्पताल जनरल ड्यूटी असिस्टेंट" },
      { en: "Home Healthcare Specialist", ta: "வீட்டுப் பராமரிப்பு நிபுணர்", hi: "होम हेल्थकेयर विशेषज्ञ" },
      { en: "Diagnostic Lab Assistant", ta: "ஆய்வக உதவியாளர்", hi: "डायग्नोस्टिक लैब सहायक" }
    ],
    furtherStudy: [
      { en: "Diploma in Medical Laboratory Technology (DMLT)", ta: "மருத்துவ ஆய்வகத் தொழில்நுட்ப டிப்ளமோ (DMLT)", hi: "मेडिकल लैब टेक्नोलॉजी में डिप्लोमा (डीएमएलटी)" }
    ],
    verificationStatus: "verified"
  },
  {
    id: "digital-marketing-ecommerce",
    name: {
      en: "Digital Marketing & E-Commerce Executive",
      ta: "டிஜிட்டல் மார்க்கெட்டிங் & இ-காமர்ஸ் எக்சிகியூட்டிவ்",
      hi: "डिजिटल मार्केटिंग एवं ई-कॉमर्स एक्जीक्यूटिव"
    },
    category: "it",
    matchPercentage: 85,
    duration: {
      en: "1 Year Diploma",
      ta: "1 ஆண்டு டிப்ளமோ",
      hi: "1 वर्ष डिप्लोमा"
    },
    eligibility: {
      en: "10th or 12th Standard Pass",
      ta: "10 அல்லது 12-ஆம் வகுப்பு தேர்ச்சி",
      hi: "10वीं या 12वीं उत्तीर्ण"
    },
    estimatedFee: 22000,
    institutionCount: 9,
    whyMatches: {
      en: "Creative student orientation, rapid freelancing and local business hiring in tier-2 cities, flexible work-from-home options.",
      ta: "படைப்பாற்றல் மிக்க மாணவர்களுக்கான வாய்ப்பு, உள்ளூர் வணிக நிறுவனங்களில் வேலைவாய்ப்பு மற்றும் வீட்டில் இருந்தே வேலை செய்யும் நெகிழ்வுத்தன்மை.",
      hi: "रचनात्मक छात्रों के लिए आदर्श, स्थानीय व्यवसायों में तीव्र भर्ती और घर से काम करने के लचीले विकल्प।"
    },
    overview: {
      en: "Industry-aligned practical diploma focusing on search engine optimization (SEO), social media campaigns, Google ads, Canva design, Shopify e-commerce cataloging, and analytical reporting.",
      ta: "எஸ்சிஓ, சமூக ஊடக விளம்பரங்கள், கூகுள் விளம்பரங்கள், கேன்வா வடிவமைப்பு மற்றும் இ-காமர்ஸ் மேலாண்மையில் நடைமுறைப் பயிற்சி வழங்கும் திட்டம்.",
      hi: "एसईओ, सोशल मीडिया अभियान, गूगल विज्ञापन, कैनवा डिज़ाइन और ई-कॉमर्स कैटलॉगिंग पर केंद्रित व्यावहारिक डिप्लोमा।"
    },
    subjects: [
      { en: "Search Engine Optimization (SEO & Keywords)", ta: "தேடுபொறி உகப்பாக்கம் (எஸ்சிஓ)", hi: "सर्च इंजन ऑप्टिमाइज़ेशन (एसईओ)" },
      { en: "Social Media Advertising (Meta & YouTube)", ta: "சமூக ஊடக விளம்பரங்கள்", hi: "सोशल मीडिया विज्ञापन (मेटा एवं यूट्यूब)" },
      { en: "Content Creation with Canva & CapCut", ta: "கேன்வா உள்ளடக்க உருவாக்கம்", hi: "कैनवा एवं वीडियो सामग्री निर्माण" },
      { en: "E-Commerce Storefronts & Logistics", ta: "இ-காமர்ஸ் கடை மற்றும் தளவாடங்கள்", hi: "ई-कॉमर्स स्टोरफ्रंट एवं लॉजिस्टिक्स" }
    ],
    skillsRequired: [
      { en: "Social Media Familiarity", ta: "சமூக ஊடகப் பயன்பாடு", hi: "सोशल मीडिया का ज्ञान" },
      { en: "Basic English Written Skills", ta: "அடிப்படை ஆங்கில எழுத்துத் திறன்", hi: "बुनियादी लिखित अंग्रेजी" }
    ],
    skillsLearned: [
      { en: "Keyword Research & On-page SEO", ta: "முக்கிய சொல் ஆராய்ச்சி மற்றும் எஸ்சிஓ", hi: "कीवर्ड रिसर्च एवं ऑन-पेज एसईओ" },
      { en: "Meta Ad Campaign Management", ta: "மெட்டா விளம்பர மேலாண்மை", hi: "मेटा विज्ञापन अभियान प्रबंधन" },
      { en: "Google Analytics 4 Tracking", ta: "கூகுள் அனலிட்டிக்ஸ் கண்காணிப்பு", hi: "गूगल एनालिटिक्स 4 ट्रैकिंग" }
    ],
    skillGap: {
      readinessScore: 88,
      currentSkills: [
        { en: "Smartphone Savvy", ta: "ஸ்மார்ட்போன் பயன்பாடு", hi: "स्मार्टफोन दक्षता", status: "completed" },
        { en: "Basic Creative Thinking", ta: "படைப்பாற்றல் சிந்தனை", hi: "रचनात्मक सोच", status: "completed" }
      ],
      missingSkills: [
        { en: "Ad Budget Metrics (CTR, CPC)", ta: "விளம்பர அளவீடுகள்", hi: "विज्ञापन मेट्रिक्स (सीटीआर, सीपीसी)", status: "pending" }
      ],
      recommendedPrep: {
        en: "Explore free Google Digital Garage certification modules online.",
        ta: "இலவச கூகுள் டிஜிட்டல் கேரேஜ் ஆன்லைன் சான்றிதழ் தொகுதிகளைப் பார்க்கவும்.",
        hi: "गूगल डिजिटल गैराज के मुफ्त ऑनलाइन मॉड्यूल पूरा करें।"
      }
    },
    careerOptions: [
      { en: "Digital Marketing Specialist", ta: "டிஜிட்டல் மார்க்கெட்டிங் நிபுணர்", hi: "डिजिटल मार्केटिंग विशेषज्ञ" },
      { en: "E-Commerce Catalog Specialist", ta: "இ-காமர்ஸ் பட்டியல் நிபுணர்", hi: "ई-कॉमर्स कैटलॉग विशेषज्ञ" },
      { en: "Social Media Content Manager", ta: "சமூக ஊடக உள்ளடக்க மேலாளர்", hi: "सोशल मीडिया कंटेंट मैनेजर" }
    ],
    furtherStudy: [
      { en: "B.Voc in Digital Media & Production", ta: "டிஜிட்டல் ஊடகத்தில் பி.வோக் பட்டம்", hi: "डिजिटल मीडिया में बी.वोक" }
    ],
    verificationStatus: "verified"
  },
  {
    id: "agriculture-precision-farming",
    name: {
      en: "Diploma in Agriculture Technology",
      ta: "விவசாயத் தொழில்நுட்ப டிப்ளமோ",
      hi: "कृषि प्रौद्योगिकी में डिप्लोमा"
    },
    category: "agriculture",
    matchPercentage: 80,
    duration: {
      en: "2 Years (4 Semesters)",
      ta: "2 ஆண்டுகள் (4 பருவங்கள்)",
      hi: "2 वर्ष (4 सेमेस्टर)"
    },
    eligibility: {
      en: "10th Standard (SSLC) pass with 35% minimum",
      ta: "10-ஆம் வகுப்பு குறைந்தபட்சம் 35% மதிப்பெண்களுடன் தேர்ச்சி",
      hi: "10वीं कक्षा न्यूनतम 35% के साथ उत्तीर्ण"
    },
    estimatedFee: 14000,
    institutionCount: 8,
    whyMatches: {
      en: "Ideal for rural empowerment and self-employment, state agricultural university affiliation, high government subsidies on farm equipment startups.",
      ta: "கிராமப்புற மேம்பாடு மற்றும் சுயதொழிலுக்கு உகந்தது, வேளாண் பல்கலைக்கழக அங்கீகாரம், அரசு மானியங்கள் அதிகம் உள்ள துறை.",
      hi: "ग्रामीण सशक्तिकरण और स्वरोजगार के लिए आदर्श, राज्य कृषि विश्वविद्यालय से संबद्ध और कृषि उपकरणों पर पर्याप्त सब्सिडी।"
    },
    overview: {
      en: "Hands-on training in micro-irrigation systems, soil health analysis, drone-assisted crop spraying, greenhouse management, and organic certification standards.",
      ta: "நுண்ணீர்ப்பாசன அமைப்புகள், மண் வள பகுப்பாய்வு, ட்ரோன் பயிர் தெளிப்பு மற்றும் பசுமைக்குடில் மேலாண்மை ஆகியவற்றில் பயிற்சி அளிக்கிறது.",
      hi: "सूक्ष्म सिंचाई, मृदा स्वास्थ्य विश्लेषण, ड्रोन-आधारित छिड़काव, ग्रीनहाउस प्रबंधन और जैविक प्रमाणन में व्यावहारिक प्रशिक्षण।"
    },
    subjects: [
      { en: "Soil Science & Plant Nutrition", ta: "மண் அறிவியல் மற்றும் தாவர ஊட்டச்சத்து", hi: "मृदा विज्ञान और पादप पोषण" },
      { en: "Drip Irrigation & Farm Machinery", ta: "சொட்டு நீர் பாசனம் மற்றும் பண்ணை இயந்திரங்கள்", hi: "ड्रिप सिंचाई और कृषि मशीनरी" },
      { en: "Agricultural Drone Operations", ta: "வேளாண் ட்ரோன் செயல்பாடுகள்", hi: "कृषि ड्रोन संचालन" },
      { en: "Agri-Business & Cooperative Management", ta: "வேளாண் வணிகம் மற்றும் கூட்டுறவு மேலாண்மை", hi: "कृषि-व्यवसाय और सहकारी प्रबंधन" }
    ],
    skillsRequired: [
      { en: "Outdoor Field Readiness", ta: "களப்பணி தயார்நிலை", hi: "मैदानी कार्य तत्परता" },
      { en: "Interest in Botany & Farming", ta: "தாவரவியல் மற்றும் விவசாய ஆர்வம்", hi: "कृषि में रुचि" }
    ],
    skillsLearned: [
      { en: "Soil Testing Laboratory Analysis", ta: "மண் பரிசோதனை ஆய்வக பகுப்பாய்வு", hi: "मृदा परीक्षण प्रयोगशाला विश्लेषण" },
      { en: "Drone Flight Planning & Spraying", ta: "ட்ரோன் மூலம் மருந்து தெளித்தல்", hi: "ड्रोन उड़ान योजना एवं छिड़काव" },
      { en: "Organic Compost Formulation", ta: "இயற்கை உரம் தயாரித்தல்", hi: "जैविक खाद निर्माण" }
    ],
    skillGap: {
      readinessScore: 86,
      currentSkills: [
        { en: "General Science", ta: "பொது அறிவியல்", hi: "सामान्य विज्ञान", status: "completed" },
        { en: "Basic Farming Observation", ta: "விவசாய நடைமுறை கவனிப்பு", hi: "बुनियादी कृषि अवलोकन", status: "completed" }
      ],
      missingSkills: [
        { en: "Automated Sensor Systems", ta: "தானியங்கி சென்சார் அமைப்புகள்", hi: "स्वचालित सेंसर सिस्टम", status: "pending" }
      ],
      recommendedPrep: {
        en: "Familiarize with government schemes on PM Krishi Sinchayee Yojana.",
        ta: "பிரதம மந்திரி கிருஷி சிஞ்சாயீ யோஜனா பற்றிய தகவல்களை அறிந்துகொள்ளுங்கள்.",
        hi: "प्रधानमंत्री कृषि सिंचाई योजना की मार्गदर्शिका पढ़ें।"
      }
    },
    careerOptions: [
      { en: "Agri-Drone Pilot / Operator", ta: "வேளாண் ட்ரோன் பைலட்", hi: "कृषि ड्रोन पायलट / ऑपरेटर" },
      { en: "Micro-Irrigation Technical Officer", ta: "நுண்ணீர்ப்பாசன தொழில்நுட்ப அதிகாரி", hi: "सूक्ष्म सिंचाई तकनीकी अधिकारी" },
      { en: "Soil Testing Laboratory Technician", ta: "மண் பரிசோதனை ஆய்வக உதவியாளர்", hi: "मृदा परीक्षण तकनीशियन" },
      { en: "Agri-Input Retail Entrepreneur", ta: "வேளாண் இடுபொருள் சில்லறை வர்த்தகர்", hi: "कृषि-आदान खुदरा उद्यमी" }
    ],
    furtherStudy: [
      { en: "Lateral entry into B.Sc. (Hons) Agriculture / Horticulture", ta: "பி.எஸ்சி (ஹானர்ஸ்) விவசாயத்தில் நேரடி சேர்க்கை", hi: "बी.एससी (ऑनर्स) कृषि में लेटरल एंट्री" }
    ],
    verificationStatus: "verified"
  }
];
