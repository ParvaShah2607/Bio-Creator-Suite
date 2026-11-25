import { store } from './state.js';
import { uiCopy } from './ui-copy.js';
const SUPPORTED_LANGUAGES = ['en', 'hi', 'gu', 'mr'];

const translations = {
    en: {
        selectLanguage: 'Select Language',
        personal: 'Personal',
        family: 'Family',
        contact: 'Contact',
        profilePhoto: 'Profile Photo',
        uploadPhoto: 'Click to upload photo',
        uploadHint: 'JPG, PNG up to 10MB',
        fullName: 'Full Name',
        dob: 'Date of Birth',
        age: 'Age',
        years: 'Years',
        yrs: 'Yrs',
        height: 'Height',
        complexion: 'Complexion',
        religion: 'Religion',
        caste: 'Caste',
        subCaste: 'Sub-Caste / Gotra',
        gotra: 'Gotra',
        motherTongue: 'Mother Tongue',
        rashi: 'Rashi',
        nakshatra: 'Nakshatra',
        education: 'Education',
        occupation: 'Occupation',
        income: 'Annual Income',
        hobbies: 'Hobbies & Interests',
        fatherName: "Father's Name",
        fatherOccupation: "Father's Occupation",
        motherName: "Mother's Name",
        motherOccupation: "Mother's Occupation",
        father: 'Father',
        mother: 'Mother',
        siblings: 'Siblings',
        familyType: 'Family Type',
        familyStatus: 'Family Status',
        aboutFamily: 'About Family',
        contactPerson: 'Contact Person',
        contactNumber: 'Contact Number',
        email: 'Email',
        emailOptional: 'Email (Optional)',
        address: 'Address',
        city: 'City',
        state: 'State',
        phone: 'Phone',
        personalDetails: 'Personal Details',
        personalInfo: 'Personal Info',
        familyDetails: 'Family Details',
        familyInfo: 'Family Info',
        contactDetails: 'Contact Details',
        contactInformation: 'Contact Information',
        marriageBiodata: 'MARRIAGE BIODATA',
        biodataForMarriage: 'Biodata for Marriage',
        auspiciousMarriageBiodata: 'Auspicious Marriage Biodata',
        ganeshInvocation: '|| Shree Ganeshaya Namah ||',
        floralGaneshInvocation: '❀ Shree Ganeshaya Namah ❀',
        natureGaneshInvocation: '🌿 Shree Ganeshaya Namah 🌿',
        yourName: 'Your Name',
        nextFamily: 'Next: Family Details',
        nextContact: 'Next: Contact Details',
        previous: 'Previous',
        previewTemplates: 'Preview Templates',
        previewTitle: 'Preview Your Biodata',
        templates: 'Templates',
        downloadPdf: 'Download PDF',
        preparingPdf: 'Preparing your PDF...',
        preparingBiodata: 'Preparing biodata...',
        generatingPdf: 'Generating PDF...',
        startingDownload: 'Starting download...',
        keepTabOpen: 'Keep this tab open while your file is created.',
        removeField: 'Remove this field',
        createdBy: 'Created by',
        selectHeight: 'Select height',
        selectComplexion: 'Select complexion',
        selectReligion: 'Select religion',
        selectRashi: 'Select rashi',
        selectIncome: 'Select income range',
        selectFamilyType: 'Select family type',
        selectFamilyStatus: 'Select family status',
        enterFullName: 'Enter your full name',
        enterCaste: 'Enter caste',
        enterGotra: 'Enter gotra',
        motherTongueExample: 'e.g. Hindi, Gujarati',
        enterNakshatra: 'Enter nakshatra',
        educationExample: 'e.g. B.Tech, MBA, CA',
        occupationExample: 'e.g. Software Engineer',
        hobbiesExample: 'e.g. Traveling, Reading, Music',
        fatherNamePlaceholder: "Enter father's name",
        fatherOccupationPlaceholder: 'e.g. Business, Retired',
        motherNamePlaceholder: "Enter mother's name",
        motherOccupationPlaceholder: 'e.g. Homemaker, Teacher',
        siblingsPlaceholder: 'e.g. 1 Elder Brother (Married), 1 Younger Sister',
        aboutFamilyPlaceholder: 'Write about your family values, traditions, etc.',
        contactPersonPlaceholder: 'e.g. Father, Self',
        addressPlaceholder: 'Full residential address',
        cityPlaceholder: 'e.g. Mumbai',
        statePlaceholder: 'e.g. Maharashtra'
    },
    hi: {
        selectLanguage: 'भाषा चुनें',
        personal: 'व्यक्तिगत',
        family: 'परिवार',
        contact: 'संपर्क',
        profilePhoto: 'प्रोफाइल फोटो',
        uploadPhoto: 'फोटो अपलोड करें',
        uploadHint: 'JPG, PNG 10MB तक',
        fullName: 'पूरा नाम',
        dob: 'जन्म तिथि',
        age: 'उम्र',
        years: 'वर्ष',
        yrs: 'वर्ष',
        height: 'ऊंचाई',
        complexion: 'रंग',
        religion: 'धर्म',
        caste: 'जाति',
        subCaste: 'उप-जाति / गोत्र',
        gotra: 'गोत्र',
        motherTongue: 'मातृभाषा',
        rashi: 'राशि',
        nakshatra: 'नक्षत्र',
        education: 'शिक्षा',
        occupation: 'व्यवसाय',
        income: 'वार्षिक आय',
        hobbies: 'शौक और रुचियां',
        fatherName: 'पिता का नाम',
        fatherOccupation: 'पिता का व्यवसाय',
        motherName: 'माता का नाम',
        motherOccupation: 'माता का व्यवसाय',
        father: 'पिता',
        mother: 'माता',
        siblings: 'भाई-बहन',
        familyType: 'परिवार का प्रकार',
        familyStatus: 'परिवार की स्थिति',
        aboutFamily: 'परिवार के बारे में',
        contactPerson: 'संपर्क व्यक्ति',
        contactNumber: 'संपर्क नंबर',
        email: 'ईमेल',
        emailOptional: 'ईमेल (वैकल्पिक)',
        address: 'पता',
        city: 'शहर',
        state: 'राज्य',
        phone: 'फोन',
        personalDetails: 'व्यक्तिगत विवरण',
        personalInfo: 'व्यक्तिगत जानकारी',
        familyDetails: 'पारिवारिक विवरण',
        familyInfo: 'पारिवारिक जानकारी',
        contactDetails: 'संपर्क विवरण',
        contactInformation: 'संपर्क जानकारी',
        marriageBiodata: 'विवाह बायोडाटा',
        biodataForMarriage: 'विवाह हेतु बायोडाटा',
        auspiciousMarriageBiodata: 'शुभ विवाह बायोडाटा',
        ganeshInvocation: '॥ श्री गणेशाय नमः ॥',
        floralGaneshInvocation: '❀ श्री गणेशाय नमः ❀',
        natureGaneshInvocation: '🌿 श्री गणेशाय नमः 🌿',
        yourName: 'आपका नाम',
        nextFamily: 'आगे: पारिवारिक विवरण',
        nextContact: 'आगे: संपर्क विवरण',
        previous: 'पिछला',
        previewTemplates: 'टेम्पलेट देखें',
        previewTitle: 'अपना बायोडाटा देखें',
        templates: 'टेम्पलेट',
        downloadPdf: 'PDF डाउनलोड करें',
        preparingPdf: 'PDF तैयार हो रहा है...',
        preparingBiodata: 'बायोडाटा तैयार हो रहा है...',
        generatingPdf: 'PDF बनाया जा रहा है...',
        startingDownload: 'डाउनलोड शुरू हो रहा है...',
        keepTabOpen: 'फाइल बनते समय यह टैब खुला रखें।',
        removeField: 'यह फ़ील्ड हटाएं',
        createdBy: 'बनाया गया',
        selectHeight: 'ऊंचाई चुनें',
        selectComplexion: 'रंग चुनें',
        selectReligion: 'धर्म चुनें',
        selectRashi: 'राशि चुनें',
        selectIncome: 'आय सीमा चुनें',
        selectFamilyType: 'परिवार का प्रकार चुनें',
        selectFamilyStatus: 'परिवार की स्थिति चुनें',
        enterFullName: 'अपना पूरा नाम लिखें',
        enterCaste: 'जाति लिखें',
        enterGotra: 'गोत्र लिखें',
        motherTongueExample: 'जैसे हिन्दी, गुजराती',
        enterNakshatra: 'नक्षत्र लिखें',
        educationExample: 'जैसे B.Tech, MBA, CA',
        occupationExample: 'जैसे सॉफ्टवेयर इंजीनियर',
        hobbiesExample: 'जैसे यात्रा, पढ़ना, संगीत',
        fatherNamePlaceholder: 'पिता का नाम लिखें',
        fatherOccupationPlaceholder: 'जैसे व्यवसाय, सेवानिवृत्त',
        motherNamePlaceholder: 'माता का नाम लिखें',
        motherOccupationPlaceholder: 'जैसे गृहिणी, शिक्षक',
        siblingsPlaceholder: 'जैसे 1 बड़ा भाई (विवाहित), 1 छोटी बहन',
        aboutFamilyPlaceholder: 'परिवार के संस्कार, परंपराएं आदि लिखें',
        contactPersonPlaceholder: 'जैसे पिता, स्वयं',
        addressPlaceholder: 'पूरा आवासीय पता',
        cityPlaceholder: 'जैसे मुंबई',
        statePlaceholder: 'जैसे महाराष्ट्र'
    },
    gu: {
        selectLanguage: 'ભાષા પસંદ કરો',
        personal: 'વ્યક્તિગત',
        family: 'પરિવાર',
        contact: 'સંપર્ક',
        profilePhoto: 'પ્રોફાઇલ ફોટો',
        uploadPhoto: 'ફોટો અપલોડ કરો',
        uploadHint: 'JPG, PNG 10MB સુધી',
        fullName: 'પૂર્ણ નામ',
        dob: 'જન્મ તારીખ',
        age: 'ઉંમર',
        years: 'વર્ષ',
        yrs: 'વર્ષ',
        height: 'ઊંચાઈ',
        complexion: 'વર્ણ',
        religion: 'ધર્મ',
        caste: 'જાતિ',
        subCaste: 'પેટા જાતિ / ગોત્ર',
        gotra: 'ગોત્ર',
        motherTongue: 'માતૃભાષા',
        rashi: 'રાશિ',
        nakshatra: 'નક્ષત્ર',
        education: 'શિક્ષણ',
        occupation: 'વ્યવસાય',
        income: 'વાર્ષિક આવક',
        hobbies: 'શોખ અને રસ',
        fatherName: 'પિતાનું નામ',
        fatherOccupation: 'પિતાનો વ્યવસાય',
        motherName: 'માતાનું નામ',
        motherOccupation: 'માતાનો વ્યવસાય',
        father: 'પિતા',
        mother: 'માતા',
        siblings: 'ભાઈ-બહેન',
        familyType: 'પરિવારનો પ્રકાર',
        familyStatus: 'પરિવારની સ્થિતિ',
        aboutFamily: 'પરિવાર વિશે',
        contactPerson: 'સંપર્ક વ્યક્તિ',
        contactNumber: 'સંપર્ક નંબર',
        email: 'ઈમેલ',
        emailOptional: 'ઈમેલ (વૈકલ્પિક)',
        address: 'સરનામું',
        city: 'શહેર',
        state: 'રાજ્ય',
        phone: 'ફોન',
        personalDetails: 'વ્યક્તિગત વિગતો',
        personalInfo: 'વ્યક્તિગત માહિતી',
        familyDetails: 'પરિવારની વિગતો',
        familyInfo: 'પરિવારની માહિતી',
        contactDetails: 'સંપર્ક વિગતો',
        contactInformation: 'સંપર્ક માહિતી',
        marriageBiodata: 'લગ્ન બાયોડેટા',
        biodataForMarriage: 'લગ્ન માટે બાયોડેટા',
        auspiciousMarriageBiodata: 'શુભ લગ્ન બાયોડેટા',
        ganeshInvocation: '॥ શ્રી ગણેશાય નમઃ ॥',
        floralGaneshInvocation: '❀ શ્રી ગણેશાય નમઃ ❀',
        natureGaneshInvocation: '🌿 શ્રી ગણેશાય નમઃ 🌿',
        yourName: 'તમારું નામ',
        nextFamily: 'આગળ: પરિવારની વિગતો',
        nextContact: 'આગળ: સંપર્ક વિગતો',
        previous: 'પાછળ',
        previewTemplates: 'ટેમ્પલેટ જુઓ',
        previewTitle: 'તમારો બાયોડેટા જુઓ',
        templates: 'ટેમ્પલેટ',
        downloadPdf: 'PDF ડાઉનલોડ કરો',
        preparingPdf: 'PDF તૈયાર થઈ રહ્યું છે...',
        preparingBiodata: 'બાયોડેટા તૈયાર થઈ રહ્યું છે...',
        generatingPdf: 'PDF બની રહ્યું છે...',
        startingDownload: 'ડાઉનલોડ શરૂ થઈ રહ્યું છે...',
        keepTabOpen: 'ફાઇલ બનતી વખતે આ ટેબ ખુલ્લી રાખો.',
        removeField: 'આ ફીલ્ડ દૂર કરો',
        createdBy: 'બનાવ્યું',
        selectHeight: 'ઊંચાઈ પસંદ કરો',
        selectComplexion: 'વર્ણ પસંદ કરો',
        selectReligion: 'ધર્મ પસંદ કરો',
        selectRashi: 'રાશિ પસંદ કરો',
        selectIncome: 'આવક શ્રેણી પસંદ કરો',
        selectFamilyType: 'પરિવારનો પ્રકાર પસંદ કરો',
        selectFamilyStatus: 'પરિવારની સ્થિતિ પસંદ કરો',
        enterFullName: 'તમારું પૂર્ણ નામ લખો',
        enterCaste: 'જાતિ લખો',
        enterGotra: 'ગોત્ર લખો',
        motherTongueExample: 'દા.ત. હિન્દી, ગુજરાતી',
        enterNakshatra: 'નક્ષત્ર લખો',
        educationExample: 'દા.ત. B.Tech, MBA, CA',
        occupationExample: 'દા.ત. સોફ્ટવેર એન્જિનિયર',
        hobbiesExample: 'દા.ત. મુસાફરી, વાંચન, સંગીત',
        fatherNamePlaceholder: 'પિતાનું નામ લખો',
        fatherOccupationPlaceholder: 'દા.ત. બિઝનેસ, નિવૃત્ત',
        motherNamePlaceholder: 'માતાનું નામ લખો',
        motherOccupationPlaceholder: 'દા.ત. ગૃહિણી, શિક્ષિકા',
        siblingsPlaceholder: 'દા.ત. 1 મોટો ભાઈ (વિવાહિત), 1 નાની બહેન',
        aboutFamilyPlaceholder: 'પરિવારના મૂલ્યો, પરંપરા વગેરે લખો',
        contactPersonPlaceholder: 'દા.ત. પિતા, પોતે',
        addressPlaceholder: 'પૂર્ણ રહેણાંક સરનામું',
        cityPlaceholder: 'દા.ત. મુંબઈ',
        statePlaceholder: 'દા.ત. મહારાષ્ટ્ર'
    },
    mr: {
        selectLanguage: 'भाषा निवडा',
        personal: 'वैयक्तिक',
        family: 'कुटुंब',
        contact: 'संपर्क',
        profilePhoto: 'प्रोफाइल फोटो',
        uploadPhoto: 'फोटो अपलोड करा',
        uploadHint: 'JPG, PNG 10MB पर्यंत',
        fullName: 'पूर्ण नाव',
        dob: 'जन्म तारीख',
        age: 'वय',
        years: 'वर्षे',
        yrs: 'वर्षे',
        height: 'उंची',
        complexion: 'वर्ण',
        religion: 'धर्म',
        caste: 'जात',
        subCaste: 'उपजात / गोत्र',
        gotra: 'गोत्र',
        motherTongue: 'मातृभाषा',
        rashi: 'राशी',
        nakshatra: 'नक्षत्र',
        education: 'शिक्षण',
        occupation: 'व्यवसाय',
        income: 'वार्षिक उत्पन्न',
        hobbies: 'छंद आणि आवडी',
        fatherName: 'वडिलांचे नाव',
        fatherOccupation: 'वडिलांचा व्यवसाय',
        motherName: 'आईचे नाव',
        motherOccupation: 'आईचा व्यवसाय',
        father: 'वडील',
        mother: 'आई',
        siblings: 'भावंडे',
        familyType: 'कुटुंब प्रकार',
        familyStatus: 'कुटुंब स्थिती',
        aboutFamily: 'कुटुंबाबद्दल',
        contactPerson: 'संपर्क व्यक्ती',
        contactNumber: 'संपर्क क्रमांक',
        email: 'ईमेल',
        emailOptional: 'ईमेल (ऐच्छिक)',
        address: 'पत्ता',
        city: 'शहर',
        state: 'राज्य',
        phone: 'फोन',
        personalDetails: 'वैयक्तिक तपशील',
        personalInfo: 'वैयक्तिक माहिती',
        familyDetails: 'कुटुंब तपशील',
        familyInfo: 'कुटुंब माहिती',
        contactDetails: 'संपर्क तपशील',
        contactInformation: 'संपर्क माहिती',
        marriageBiodata: 'विवाह बायोडाटा',
        biodataForMarriage: 'विवाहासाठी बायोडाटा',
        auspiciousMarriageBiodata: 'शुभ विवाह बायोडाटा',
        ganeshInvocation: '॥ श्री गणेशाय नमः ॥',
        floralGaneshInvocation: '❀ श्री गणेशाय नमः ❀',
        natureGaneshInvocation: '🌿 श्री गणेशाय नमः 🌿',
        yourName: 'तुमचे नाव',
        nextFamily: 'पुढे: कुटुंब तपशील',
        nextContact: 'पुढे: संपर्क तपशील',
        previous: 'मागे',
        previewTemplates: 'टेम्पलेट पहा',
        previewTitle: 'तुमचा बायोडाटा पहा',
        templates: 'टेम्पलेट',
        downloadPdf: 'PDF डाउनलोड करा',
        preparingPdf: 'PDF तयार होत आहे...',
        preparingBiodata: 'बायोडाटा तयार होत आहे...',
        generatingPdf: 'PDF तयार होत आहे...',
        startingDownload: 'डाउनलोड सुरू होत आहे...',
        keepTabOpen: 'फाइल तयार होत असताना हा टॅब उघडा ठेवा.',
        removeField: 'हे फील्ड काढा',
        createdBy: 'तयार केले',
        selectHeight: 'उंची निवडा',
        selectComplexion: 'वर्ण निवडा',
        selectReligion: 'धर्म निवडा',
        selectRashi: 'राशी निवडा',
        selectIncome: 'उत्पन्न श्रेणी निवडा',
        selectFamilyType: 'कुटुंब प्रकार निवडा',
        selectFamilyStatus: 'कुटुंब स्थिती निवडा',
        enterFullName: 'तुमचे पूर्ण नाव लिहा',
        enterCaste: 'जात लिहा',
        enterGotra: 'गोत्र लिहा',
        motherTongueExample: 'उदा. हिंदी, गुजराती',
        enterNakshatra: 'नक्षत्र लिहा',
        educationExample: 'उदा. B.Tech, MBA, CA',
        occupationExample: 'उदा. सॉफ्टवेअर इंजिनियर',
        hobbiesExample: 'उदा. प्रवास, वाचन, संगीत',
        fatherNamePlaceholder: 'वडिलांचे नाव लिहा',
        fatherOccupationPlaceholder: 'उदा. व्यवसाय, निवृत्त',
        motherNamePlaceholder: 'आईचे नाव लिहा',
        motherOccupationPlaceholder: 'उदा. गृहिणी, शिक्षिका',
        siblingsPlaceholder: 'उदा. 1 मोठा भाऊ (विवाहित), 1 धाकटी बहीण',
        aboutFamilyPlaceholder: 'कुटुंबाचे संस्कार, परंपरा इ. लिहा',
        contactPersonPlaceholder: 'उदा. वडील, स्वतः',
        addressPlaceholder: 'पूर्ण निवासी पत्ता',
        cityPlaceholder: 'उदा. मुंबई',
        statePlaceholder: 'उदा. महाराष्ट्र'
    }
};

const translationKeysByText = new Map();
Object.entries(translations.en).forEach(([key, value]) => {
    translationKeysByText.set(value, key);
});
translationKeysByText.set('DOB', 'dob');
translationKeysByText.set('FAMILY', 'family');
translationKeysByText.set('Email (Optional)', 'emailOptional');
translationKeysByText.set('Annual Income', 'income');
translationKeysByText.set('Hobbies', 'hobbies');



function t(key, fallback = '') {
    return uiCopy[store.state.language]?.[key] || translations[store.state.language]?.[key] || translations.en[key] || fallback || key;
}

function labelText(text) {
    const key = translationKeysByText.get(text);
    return key ? t(key, text) : text;
}

function withLocalizedTemplateText(html) {
    const localizeText = (text) => text
        .replaceAll('॥ श्री गणेशाय नमः ॥', t('ganeshInvocation'))
        .replaceAll('❀ श्री गणेशाय नमः ❀', t('floralGaneshInvocation'))
        .replaceAll('🌿 श्री गणेशाय नमः 🌿', t('natureGaneshInvocation'))
        .replaceAll('शुभ विवाह बायोडाटा', t('auspiciousMarriageBiodata'))
        .replaceAll('à¤µà¥à¤¯à¤•à¥à¤¤à¤¿à¤—à¤¤ à¤µà¤¿à¤µà¤°à¤£', t('personalDetails'))
        .replaceAll('à¤ªà¤¾à¤°à¤¿à¤µà¤¾à¤°à¤¿à¤• à¤µà¤¿à¤µà¤°à¤£', t('familyDetails'))
        .replaceAll('à¤¸à¤‚à¤ªà¤°à¥à¤• à¤µà¤¿à¤µà¤°à¤£', t('contactDetails'))
        .replaceAll('\u0935\u094d\u092f\u0915\u094d\u0924\u093f\u0917\u0924 \u0935\u093f\u0935\u0930\u0923', t('personalDetails'))
        .replaceAll('\u092a\u093e\u0930\u093f\u0935\u093e\u0930\u093f\u0915 \u0935\u093f\u0935\u0930\u0923', t('familyDetails'))
        .replaceAll('\u0938\u0902\u092a\u0930\u094d\u0915 \u0935\u093f\u0935\u0930\u0923', t('contactDetails'))
        .replaceAll('MARRIAGE BIODATA', t('marriageBiodata'))
        .replaceAll('Biodata for Marriage', t('biodataForMarriage'))
        .replaceAll('Personal Details', t('personalDetails'))
        .replaceAll('Personal Info', t('personalInfo'))
        .replaceAll('Family Details', t('familyDetails'))
        .replaceAll('Family Info', t('familyInfo'))
        .replaceAll('Contact Details', t('contactDetails'))
        .replaceAll('Contact Information', t('contactInformation'))
        .replaceAll('Your Name', t('yourName'))
        .replaceAll('Occupation', t('occupation'))
        .replaceAll('Education', t('education'))
        .replaceAll('Height', t('height'))
        .replaceAll('Age', t('age'))
        .replaceAll('Years', t('years'))
        .replaceAll('Yrs', t('yrs'))
        .replaceAll('Religion', t('religion'))
        .replaceAll('Caste', t('caste'))
        .replaceAll('Gotra', t('gotra'))
        .replaceAll('Mother Tongue', t('motherTongue'))
        .replaceAll('Income', t('income'))
        .replaceAll('Father', t('father'))
        .replaceAll('Mother', t('mother'))
        .replaceAll('Siblings', t('siblings'))
        .replaceAll('Family Type', t('familyType'))
        .replaceAll('Family Status', t('familyStatus'))
        .replaceAll('Contact Person', t('contactPerson'))
        .replaceAll('Phone', t('phone'))
        .replaceAll('Contact', t('contact'))
        .replaceAll('Address', t('address'))
        .replaceAll('Email', t('email'));

    const template = document.createElement('template');
    template.innerHTML = html;

    const walker = document.createTreeWalker(template.content, NodeFilter.SHOW_TEXT);
    const textNodes = [];

    while (walker.nextNode()) {
        textNodes.push(walker.currentNode);
    }

    textNodes.forEach((node) => {
        node.nodeValue = localizeText(node.nodeValue);
    });

    return template.innerHTML;
}

const pageContent = {
    en: {
        title: 'Marriage Biodata Format PDF | Free Biodata Maker Online',
        description: 'Create marriage biodata online free. Download biodata for marriage in PDF format with modern templates and multilingual labels.',
        heroBadge: 'Create Biodatas Today',
        heroTitle: 'Create Your <span class="gradient-text">Perfect</span><br>Marriage Biodata',
        heroSubtitle: 'Design stunning, modern biodatas with friendly templates. Choose your language, preview instantly, and download a one-page PDF.',
        heroPrimary: 'Create My Biodata',
        heroSecondary: 'View Templates',
        createBadge: "Let's Create",
        createTitle: 'Start Building Your<br><span class="gradient-text">Perfect Biodata</span>'
    },
    hi: {
        title: 'विवाह बायोडाटा फॉर्मेट PDF | मुफ्त बायोडाटा मेकर',
        description: 'हिन्दी में विवाह बायोडाटा बनाएं। आधुनिक टेम्पलेट चुनें, तुरंत प्रीव्यू देखें और PDF डाउनलोड करें।',
        heroBadge: 'आज ही बायोडाटा बनाएं',
        heroTitle: 'अपना <span class="gradient-text">परफेक्ट</span><br>विवाह बायोडाटा बनाएं',
        heroSubtitle: 'आसान टेम्पलेट, हिन्दी लेबल, तुरंत प्रीव्यू और एक-पेज PDF डाउनलोड के साथ सुंदर विवाह बायोडाटा बनाएं।',
        heroPrimary: 'मेरा बायोडाटा बनाएं',
        heroSecondary: 'टेम्पलेट देखें',
        createBadge: 'बनाना शुरू करें',
        createTitle: 'अपना<br><span class="gradient-text">परफेक्ट बायोडाटा</span> बनाएं'
    },
    gu: {
        title: 'ગુજરાતી લગ્ન બાયોડેટા ફોર્મેટ PDF | મફત બાયોડેટા મેકર',
        description: 'ગુજરાતીમાં લગ્ન બાયોડેટા બનાવો. આધુનિક ટેમ્પલેટ પસંદ કરો, તરત પ્રીવ્યુ જુઓ અને PDF ડાઉનલોડ કરો.',
        heroBadge: 'આજે જ બાયોડેટા બનાવો',
        heroTitle: 'તમારો <span class="gradient-text">પરફેક્ટ</span><br>લગ્ન બાયોડેટા બનાવો',
        heroSubtitle: 'સરળ ટેમ્પલેટ, ગુજરાતી લેબલ, તરત પ્રીવ્યુ અને એક-પેજ PDF ડાઉનલોડ સાથે સુંદર લગ્ન બાયોડેટા બનાવો.',
        heroPrimary: 'મારો બાયોડેટા બનાવો',
        heroSecondary: 'ટેમ્પલેટ જુઓ',
        createBadge: 'બનાવવાનું શરૂ કરો',
        createTitle: 'તમારો<br><span class="gradient-text">પરફેક્ટ બાયોડેટા</span> બનાવો'
    },
    mr: {
        title: 'मराठी विवाह बायोडाटा फॉर्मेट PDF | मोफत बायोडाटा मेकर',
        description: 'मराठीत विवाह बायोडाटा तयार करा. आधुनिक टेम्पलेट निवडा, लगेच प्रीव्यू पहा आणि PDF डाउनलोड करा.',
        heroBadge: 'आजच बायोडाटा तयार करा',
        heroTitle: 'तुमचा <span class="gradient-text">परफेक्ट</span><br>विवाह बायोडाटा तयार करा',
        heroSubtitle: 'सोपे टेम्पलेट, मराठी लेबल, त्वरित प्रीव्यू आणि एक-पेज PDF डाउनलोडसह सुंदर विवाह बायोडाटा तयार करा.',
        heroPrimary: 'माझा बायोडाटा तयार करा',
        heroSecondary: 'टेम्पलेट पहा',
        createBadge: 'तयार करायला सुरुवात करा',
        createTitle: 'तुमचा<br><span class="gradient-text">परफेक्ट बायोडाटा</span> तयार करा'
    }
};

function applyLocalizedPageContent() {
    const content = { ...pageContent[store.state.language], ...uiCopy[store.state.language] };
    document.title = content.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', content.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', content.title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', content.description);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', content.title);

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute('content', content.description);

    const heroBadge = document.querySelector('.hero-badge span:last-child');
    if (heroBadge) heroBadge.textContent = content.heroBadge;

    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.innerHTML = content.heroTitle;

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = content.heroSubtitle;

    const heroPrimary = document.querySelector('.hero-actions .btn-primary span');
    if (heroPrimary) heroPrimary.textContent = content.heroPrimary;

    const heroSecondary = document.querySelector('.hero-actions .btn-glass span');
    if (heroSecondary) heroSecondary.textContent = content.heroSecondary;

    const creatorBadge = document.querySelector('#create .section-badge');
    if (creatorBadge) creatorBadge.textContent = content.createBadge;

    const creatorTitle = document.querySelector('#create .section-title');
    if (creatorTitle) creatorTitle.innerHTML = content.createTitle;

    document.querySelectorAll('.nav-links a[href="#templates"], .mobile-menu a[href="#templates"], .footer-links a[href="#templates"]').forEach((node) => {
        node.textContent = t('templates');
    });
    document.querySelectorAll('.mobile-menu-cta, .nav-cta').forEach((node) => {
        if (node.classList.contains('mobile-menu-cta') || node.classList.contains('nav-cta')) {
            node.textContent = content.heroPrimary;
        }
    });
}

function detectLanguageFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const queryLanguage = params.get('lang') || params.get('language');
    if (SUPPORTED_LANGUAGES.includes(queryLanguage)) return queryLanguage;

    const path = window.location.pathname.toLowerCase();
    if (path.includes('gujarati') || path.includes('/gu/')) return 'gu';
    if (path.includes('hindi') || path.includes('/hi/')) return 'hi';
    if (path.includes('marathi') || path.includes('/mr/')) return 'mr';

    try {
        return localStorage.getItem('biodataLanguage') || 'en';
    } catch {
        console.warn('Language preference could not be read; using English.');
        document.dispatchEvent(new CustomEvent('biodata:storage-error'));
        return 'en';
    }
}

function setText(selector, key) {
    document.querySelectorAll(selector).forEach((node) => {
        node.textContent = t(key, node.textContent);
    });
}

function setPlaceholder(selector, key) {
    document.querySelectorAll(selector).forEach((node) => {
        node.placeholder = t(key, node.placeholder);
    });
}

function setSelectOption(selector, value, key) {
    const option = document.querySelector(`${selector} option[value="${value}"]`);
    if (option) option.textContent = t(key, option.textContent);
}

function applyLanguage(language) {
    store.setLanguage(SUPPORTED_LANGUAGES.includes(language) ? language : 'en');
    try {
        localStorage.setItem('biodataLanguage', store.state.language);
    } catch {
        console.warn('Language preference could not be saved; selection is in memory only.');
        document.dispatchEvent(new CustomEvent('biodata:storage-error'));
    }
    document.documentElement.lang = store.state.language;

    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) languageSelect.value = store.state.language;
    applyLocalizedPageContent();

    document.querySelectorAll('[data-i18n]').forEach((node) => {
        node.textContent = t(node.dataset.i18n, node.textContent);
    });

    document.querySelectorAll('.field-remove-btn').forEach((button) => {
        button.title = t('removeField');
        button.setAttribute('aria-label', t('removeField'));
    });

    const formLabels = {
        photo: 'profilePhoto',
        fullName: 'fullName',
        dob: 'dob',
        age: 'age',
        height: 'height',
        complexion: 'complexion',
        religion: 'religion',
        caste: 'caste',
        subCaste: 'subCaste',
        motherTongue: 'motherTongue',
        rashi: 'rashi',
        nakshatra: 'nakshatra',
        education: 'education',
        occupation: 'occupation',
        income: 'income',
        hobbies: 'hobbies',
        fatherName: 'fatherName',
        fatherOccupation: 'fatherOccupation',
        motherName: 'motherName',
        motherOccupation: 'motherOccupation',
        siblings: 'siblings',
        familyType: 'familyType',
        familyStatus: 'familyStatus',
        aboutFamily: 'aboutFamily',
        contactPerson: 'contactPerson',
        contactNumber: 'contactNumber',
        email: 'emailOptional',
        address: 'address',
        city: 'city',
        state: 'state'
    };

    Object.entries(formLabels).forEach(([field, key]) => {
        const label = document.querySelector(`[data-field="${field}"] label`);
        if (label) label.textContent = t(key);
    });

    setText('.form-tab[data-tab="personal"] span', 'personal');
    setText('.form-tab[data-tab="family"] span', 'family');
    setText('.form-tab[data-tab="contact"] span', 'contact');
    setText('.photo-placeholder span', 'uploadPhoto');
    setText('.photo-placeholder small', 'imageHint');
    setText('[data-next="family"] span', 'nextFamily');
    setText('[data-next="contact"] span', 'nextContact');
    setText('.btn-nav-prev span', 'previous');
    setText('#previewBtn span', 'previewTemplates');
    setText('.modal-header h3', 'previewTitle');
    setText('.sidebar-title span', 'templates');
    setText('#downloadBtn span', 'downloadPdf');

    setPlaceholder('#fullName', 'enterFullName');
    setPlaceholder('#age', 'age');
    setPlaceholder('#caste', 'enterCaste');
    setPlaceholder('#subCaste', 'enterGotra');
    setPlaceholder('#motherTongue', 'motherTongueExample');
    setPlaceholder('#nakshatra', 'enterNakshatra');
    setPlaceholder('#education', 'educationExample');
    setPlaceholder('#occupation', 'occupationExample');
    setPlaceholder('#hobbies', 'hobbiesExample');
    setPlaceholder('#fatherName', 'fatherNamePlaceholder');
    setPlaceholder('#fatherOccupation', 'fatherOccupationPlaceholder');
    setPlaceholder('#motherName', 'motherNamePlaceholder');
    setPlaceholder('#motherOccupation', 'motherOccupationPlaceholder');
    setPlaceholder('#siblings', 'siblingsPlaceholder');
    setPlaceholder('#aboutFamily', 'aboutFamilyPlaceholder');
    setPlaceholder('#contactPerson', 'contactPersonPlaceholder');
    setPlaceholder('#address', 'addressPlaceholder');
    setPlaceholder('#city', 'cityPlaceholder');
    setPlaceholder('#state', 'statePlaceholder');

    setSelectOption('#height', '', 'selectHeight');
    setSelectOption('#complexion', '', 'selectComplexion');
    setSelectOption('#religion', '', 'selectReligion');
    setSelectOption('#rashi', '', 'selectRashi');
    setSelectOption('#income', '', 'selectIncome');
    setSelectOption('#familyType', '', 'selectFamilyType');
    setSelectOption('#familyStatus', '', 'selectFamilyStatus');

    document.dispatchEvent(new CustomEvent('biodata:language'));
}


export { t, labelText, withLocalizedTemplateText, applyLanguage, detectLanguageFromUrl, translations, SUPPORTED_LANGUAGES };
