/**
 * Explainable Rule-Based Demo AI Matching Algorithm for CareerBridge
 * Evaluates student aspirations against parental practical considerations.
 */

export const DEFAULT_WEIGHTS = {
  course: 0.25,
  skills: 0.20,
  budget: 0.20,
  location: 0.15,
  institution: 0.10,
  career: 0.10,
};

export const calculateMatch = (studentPref, parentPref, customWeights = DEFAULT_WEIGHTS) => {
  // If either profile is missing, return baseline preview
  if (!studentPref || !parentPref) {
    return {
      overallScore: 88,
      breakdown: {
        course: 92,
        location: 85,
        budget: 90,
        institution: 75,
        career: 88,
      },
      agreements: {
        en: [
          "Both student and parent prioritize technology and engineering-related fields.",
          "Both agree on staying within the greater Chennai / home metropolitan region.",
          "Family budget expectations align closely with government polytechnic fee structures."
        ],
        ta: [
          "மாணவர் மற்றும் பெற்றோர் இருவரும் தொழில்நுட்பம் மற்றும் பொறியியல் துறைகளுக்கு முன்னுரிமை அளிக்கின்றனர்.",
          "இருவரும் சென்னை / சொந்த மாவட்ட எல்லைக்குள் கல்லூரியைத் தேர்ந்தெடுக்க உடன்படுகின்றனர்.",
          "குடும்ப பட்ஜெட் எதிர்பார்ப்புகள் அரசு பாலிடெக்னிக் கட்டண வரம்பிற்குள் ஒத்துப்போகின்றன."
        ],
        hi: [
          "छात्र और अभिभावक दोनों प्रौद्योगिकी और इंजीनियरिंग क्षेत्रों को प्राथमिकता देते हैं।",
          "दोनों गृह नगर (चेन्नई) या नजदीकी क्षेत्र में अध्ययन करने पर सहमत हैं।",
          "पारिवारिक बजट अपेक्षाएं सरकारी पॉलिटेक्निक की शुल्क संरचना के पूर्णतः अनुकूल हैं।"
        ]
      },
      differences: {
        en: [
          "Student prefers private colleges for modern infrastructure, while parent prefers recognized government institutes for safety and low fee burden.",
          "Student seeks immediate startup/software roles, whereas parent prefers PSU / government stability."
        ],
        ta: [
          "மாணவர் நவீன வசதிகளுக்காக தனியார் கல்லூரிகளை விரும்புகிறார்; பெற்றோர் பாதுகாப்பு மற்றும் குறைந்த கட்டணத்திற்காக அரசு நிறுவனங்களை விரும்புகிறார்.",
          "மாணவர் உடனடி ஸ்டார்ட்அப்/மென்பொருள் பணிகளை நாடுகிறார்; பெற்றோர் அரசு/பொதுத்துறை வேலைவாய்ப்பை விரும்புகிறார்."
        ],
        hi: [
          "छात्र आधुनिक सुविधाओं के लिए निजी कॉलेज पसंद करता है, जबकि अभिभावक कम शुल्क और सुरक्षा के लिए सरकारी संस्थान चाहते हैं।",
          "छात्र स्टार्टअप/सॉफ्टवेयर में रुचि रखता है, जबकि अभिभावक सरकारी/पीएसयू स्थिरता को प्राथमिकता देते हैं।"
        ]
      },
      explanation: {
        en: "This recommended pathway achieves an 88% overall family consensus. It completely aligns with the student's passion for coding and computer hardware while answering parental requirements for government accreditation, affordable annual fee (₹14,500/year), and proximity to home. The primary trade-off is institution ownership: a top-tier government polytechnic provides high placement results without causing family financial strain.",
        ta: "இந்த பரிந்துரைக்கப்பட்ட பாதை 88% ஒட்டுமொத்த குடும்ப ஒருமித்த கருத்தை எட்டுகிறது. இது மாணவரின் கோடிங் ஆர்வத்துடன் முழுமையாக ஒத்துப்போவதுடன், அரசு அங்கீகாரம், மலிவான கட்டணம் (ஆண்டுக்கு ₹14,500) மற்றும் வீட்டிற்கு அருகாமை போன்ற பெற்றோரின் எதிர்பார்ப்புகளையும் பூர்த்தி செய்கிறது.",
        hi: "यह अनुशंसित मार्ग 88% समग्र पारिवारिक सहमति प्राप्त करता है। यह छात्र की कोडिंग रुचि के साथ पूरी तरह मेल खाता है और सरकारी मान्यता, किफायती वार्षिक शुल्क (₹14,500/वर्ष) तथा घर से निकटता की अभिभावक की शर्तों को पूरा करता है।"
      }
    };
  }

  // 1. Course Match
  let courseScore = 85;
  const sCat = (studentPref.preferredCourseCategory || '').toLowerCase();
  const pCourse = (parentPref.preferredCourse || '').toLowerCase();
  if (pCourse.includes('computer') || pCourse.includes('tech') || sCat === 'it') {
    courseScore = 94;
  } else if (pCourse.includes('electric') || pCourse.includes('mech')) {
    courseScore = 88;
  }

  // 2. Location Match
  let locationScore = 82;
  const sLoc = (studentPref.preferredLocation || '').toLowerCase().trim();
  const pLoc = (parentPref.preferredLocation || '').toLowerCase().trim();
  if (sLoc && pLoc && (sLoc.includes(pLoc) || pLoc.includes(sLoc) || sLoc.includes('chennai'))) {
    locationScore = 90;
  } else {
    locationScore = 75;
  }

  // 3. Budget Match
  let budgetScore = 88;
  const sBudget = Number(studentPref.budget) || 50000;
  const pBudget = Number(parentPref.maxBudget) || 60000;
  if (sBudget <= pBudget) {
    budgetScore = 95;
  } else {
    const diffRatio = (sBudget - pBudget) / pBudget;
    budgetScore = Math.max(60, Math.round(95 - diffRatio * 50));
  }

  // 4. Institution Type Match
  let instScore = 80;
  const sInst = studentPref.institutionType || 'either';
  const pInst = parentPref.institutionType || 'government';
  if (sInst === pInst || sInst === 'either' || pInst === 'either') {
    instScore = 90;
  } else {
    instScore = 70; // e.g. student private vs parent govt
  }

  // 5. Career Goal Match
  let careerScore = 86;
  const sCareer = studentPref.careerInterest || 'technology';
  const pExpect = parentPref.careerExpectations || 'flexible';
  if (pExpect === 'flexible' || (sCareer === 'technology' && (pExpect === 'private' || pExpect === 'higherEducation'))) {
    careerScore = 92;
  } else if (pExpect === 'government' && sCareer === 'technology') {
    careerScore = 80; // PSU IT is possible
  }

  // Calculate weighted overall score
  const overall = Math.round(
    courseScore * customWeights.course +
    90 * customWeights.skills +
    budgetScore * customWeights.budget +
    locationScore * customWeights.location +
    instScore * customWeights.institution +
    careerScore * customWeights.career
  );

  return {
    overallScore: Math.min(98, Math.max(70, overall)),
    breakdown: {
      course: courseScore,
      location: locationScore,
      budget: budgetScore,
      institution: instScore,
      career: careerScore,
    },
    agreements: {
      en: [
        "Both parties agree on technical/vocational education offering practical skill mastery.",
        `Location preferences align within ${sLoc || 'the preferred district'}.`,
        `Family budget expectations (₹${pBudget.toLocaleString('en-IN')}) easily accommodate accredited government institute fees.`
      ],
      ta: [
        "செய்முறைத் திறன்களை வழங்கும் தொழிற்கல்விக்கு இருவரும் உடன்படுகிறார்கள்.",
        `விருப்பமான மாவட்டம் (${sLoc || 'சென்னை'}) இருவருக்கும் ஏற்புடையதாக உள்ளது.`,
        `குடும்ப பட்ஜெட் எதிர்பார்ப்புகள் (₹${pBudget.toLocaleString('en-IN')}) அரசு பாலிடெக்னிக் கட்டண வரம்பிற்குள் பொருந்துகின்றன.`
      ],
      hi: [
        "दोनों पक्ष व्यावहारिक कौशल प्रदान करने वाली तकनीकी/व्यावसायिक शिक्षा पर सहमत हैं।",
        `पसंदीदा स्थान (${sLoc || 'चेन्नई'}) दोनों पक्षों के लिए अनुकूल है।`,
        `पारिवारिक बजट (₹${pBudget.toLocaleString('en-IN')}) सरकारी संस्थान के वार्षिक शुल्क के पूर्णतः अनुकूल है।`
      ]
    },
    differences: {
      en: [
        `Institution Preference: Student leans towards ${sInst === 'private' ? 'Private' : 'Flexible'} while parent prefers ${pInst === 'government' ? 'Government' : 'Recognized'}.`,
        `Career Horizons: Student aspires for fast-paced ${sCareer} while parent values ${pExpect} stability.`
      ],
      ta: [
        `கல்லூரித் தேர்வு: மாணவர் ${sInst === 'private' ? 'தனியார்' : 'நெகிழ்வான'} கல்லூரியை விரும்புகிறார், பெற்றோர் ${pInst === 'government' ? 'அரசு' : 'அங்கீகரிக்கப்பட்ட'} நிறுவனத்தை விரும்புகிறார்.`,
        `தொழில் எதிர்பார்ப்பு: மாணவர் ${sCareer} துறையை நாடுகிறார்; பெற்றோர் ${pExpect} நிலைத்தன்மையை நாடுகிறார்.`
      ],
      hi: [
        `संस्थान चयन: छात्र ${sInst === 'private' ? 'निजी' : 'लचीला'} संस्थान चाहता है, जबकि अभिभावक ${pInst === 'government' ? 'सरकारी' : 'मान्यता प्राप्त'} संस्थान पसंद करते हैं।`,
        `करियर लक्ष्य: छात्र ${sCareer} की ओर आकर्षित है, जबकि अभिभावक ${pExpect} की स्थिरता को प्राथमिकता देते हैं।`
      ]
    },
    explanation: {
      en: `This profile generates an explainable ${overall}% compatibility index. The student's creative aptitude in technology harmonizes with the parent's desire for established institutional credibility. Choosing an accredited government polytechnic satisfies parent peace-of-mind and guarantees eligibility for state fee concessions while enabling the student to excel in industry-relevant programming and engineering curriculum.`,
      ta: `இந்த விவரக்குறிப்பு ${overall}% விளக்கக்கூடிய பொருத்தக் குறியீட்டை உருவாக்குகிறது. மாணவரின் தொழில்நுட்ப ஆர்வமும் பெற்றோரின் நம்பகத்தன்மை எதிர்பார்ப்பும் இணைகின்றன. அரசு பாலிடெக்னிக்கைத் தேர்ந்தெடுப்பது பெற்றோரின் அமைதியை உறுதி செய்கிறது மற்றும் கட்டணச் சலுகைகளுக்கான தகுதியையும் வழங்குகிறது.`,
      hi: `यह प्रोफ़ाइल ${overall}% व्याख्या योग्य अनुकूलता सूचकांक बनाती है। छात्र की तकनीकी रुचि और अभिभावक की संस्थागत विश्वसनीयता की मांग में उत्कृष्ट संतुलन है। सरकारी पॉलिटेक्निक का चयन माता-पिता को मानसिक शांति और छात्र को व्यावहारिक शिक्षा प्रदान करता है।`
    }
  };
};

export const sampleDemoStudent = {
  name: "Hashmi Rahman",
  qualification: "class10",
  marks: "84",
  skills: ["Coding", "Electronics", "Problem Solving", "Web Browsing"],
  preferredCourseCategory: "it",
  preferredLocation: "Chennai",
  budget: "50000",
  institutionType: "either",
  learningStyle: "practical",
  careerInterest: "technology"
};

export const sampleDemoParent = {
  parentName: "Rahman Ali",
  relationship: "father",
  preferredCourse: "Diploma in Computer Engineering",
  alternativeCourse: "Diploma in Electronics & Communication",
  preferredLocation: "Chennai",
  maxBudget: "60000",
  institutionType: "government",
  priority: "affordability",
  careerExpectations: "higherEducation"
};
