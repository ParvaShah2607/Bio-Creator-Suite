/**
 * biodata-pro - Premium Marriage Biodata Maker
 * Gen-Z Friendly Templates & Modern UX
 * 2026 Edition
 */

// ============================================
// Default Photo Placeholder
// ============================================
const defaultPhoto = `data:image/svg+xml,${encodeURIComponent(`
<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="#f1f5f9"/>
  <circle cx="100" cy="75" r="35" fill="#e2e8f0"/>
  <ellipse cx="100" cy="170" rx="55" ry="45" fill="#e2e8f0"/>
</svg>
`)}`;

// ============================================
// Sample Data for Template Gallery Preview
// ============================================
const sampleData = {
    photo: defaultPhoto,
    fullName: 'John Doe',
    dob: '15 Jan 1998',
    age: '28',
    height: "5'10\"",
    complexion: 'Fair',
    religion: 'Hindu',
    caste: 'Brahmin',
    subCaste: 'Sharma',
    motherTongue: 'Hindi',
    rashi: 'Virgo',
    nakshatra: 'Hasta',
    education: 'B.Tech, MBA',
    occupation: 'Software Engineer',
    income: '₹15 LPA',
    hobbies: 'Reading, Travel',
    fatherName: 'Robert Doe',
    fatherOccupation: 'Business',
    motherName: 'Mary Doe',
    motherOccupation: 'Homemaker',
    siblings: '1 Brother, 1 Sister',
    familyType: 'Nuclear',
    familyStatus: 'Middle Class',
    aboutFamily: 'A loving and supportive family',
    contactPerson: 'Robert Doe',
    contactNumber: '+91 98765 43210',
    email: 'john.doe@email.com',
    address: '123 Main Street',
    city: 'New Delhi',
    state: 'Delhi'
};

// Template badges for gallery display
const templateBadges = {
    0: 'Popular',      // Minimal Zen
    2: 'New',          // Modern Edge
    4: 'Trending',     // Template 5
    5: null            // No badge
};

// ============================================
// Localization
// ============================================
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

let currentLanguage = 'en';

function t(key, fallback = '') {
    return translations[currentLanguage]?.[key] || translations.en[key] || fallback || key;
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
    const content = pageContent[currentLanguage] || pageContent.en;
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

    return localStorage.getItem('biodataLanguage') || 'en';
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
    currentLanguage = SUPPORTED_LANGUAGES.includes(language) ? language : 'en';
    localStorage.setItem('biodataLanguage', currentLanguage);
    document.documentElement.lang = currentLanguage;

    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) languageSelect.value = currentLanguage;
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
    setText('.photo-placeholder small', 'uploadHint');
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

    renderPreview();
    renderTemplateGallery();
}

// ============================================
// Tiny Async Helpers
// ============================================
const wait = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));
const nextFrame = () => new Promise((resolve) => requestAnimationFrame(resolve));

const HTML2PDF_SOURCES = [
    'https://cdn.jsdelivr.net/npm/html2pdf.js@0.10.1/dist/html2pdf.bundle.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'
];

let html2pdfLoaderPromise = null;

function loadExternalScript(src, attrs = {}) {
    return new Promise((resolve, reject) => {
        const existing = Array.from(document.scripts).find((script) => script.src === src);
        if (existing) {
            existing.addEventListener('load', () => resolve(), { once: true });
            existing.addEventListener('error', () => reject(new Error(`Failed to load script ${src}`)), { once: true });
            return;
        }

        const script = document.createElement('script');
        script.src = src;
        Object.entries(attrs).forEach(([key, value]) => {
            script.setAttribute(key, value);
        });
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script ${src}`));
        document.body.appendChild(script);
    });
}

async function loadPdfBundle() {
    let lastError;
    for (const src of HTML2PDF_SOURCES) {
        try {
            await loadExternalScript(src, { 'data-html2pdf': 'dynamic', crossorigin: 'anonymous', referrerpolicy: 'no-referrer' });
            if (typeof window.html2pdf !== 'undefined') {
                return;
            }
        } catch (error) {
            console.error(`Unable to load html2pdf bundle from ${src}`, error);
            lastError = error;
        }
    }
    throw lastError || new Error('Unable to load html2pdf bundle from known CDNs.');
}

async function ensurePdfEngine() {
    if (typeof window.html2pdf !== 'undefined') {
        return;
    }

    if (!html2pdfLoaderPromise) {
        html2pdfLoaderPromise = loadPdfBundle()
            .catch((error) => {
                html2pdfLoaderPromise = null;
                throw error;
            });
    }

    await html2pdfLoaderPromise;

    if (typeof window.html2pdf === 'undefined') {
        throw new Error('html2pdf bundle loaded but window.html2pdf is unavailable');
    }
}

// ============================================
// Premium Template Collection
// ============================================
const templates = [
    // Template 1: Minimal Zen - Clean & Modern
    {
        name: "Minimal Zen",
        category: "minimal",
        render: (data) => `
            <div style="font-family: 'Inter', sans-serif; padding: 40px; background: #ffffff;">
                <div style="text-align: center; margin-bottom: 32px;">
                    <div style="font-size: 14px; color: #6366f1; letter-spacing: 3px; margin-bottom: 8px;">MARRIAGE BIODATA</div>
                    <div style="width: 40px; height: 2px; background: linear-gradient(90deg, #6366f1, #ec4899); margin: 0 auto;"></div>
                </div>
                
                <div style="display: flex; gap: 32px; margin-bottom: 32px;">
                    <div style="flex-shrink: 0;">
                        <img src="${data.photo}" alt="Photo" style="width: 140px; height: 170px; object-fit: cover; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
                    </div>
                    <div style="flex: 1;">
                        <h1 style="font-size: 28px; font-weight: 600; color: #1e293b; margin: 0 0 8px 0;">${data.fullName || 'Your Name'}</h1>
                        <p style="color: #64748b; font-size: 15px; margin: 0 0 16px 0;">${data.occupation || 'Occupation'}</p>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 14px;">
                            <div style="color: #64748b;"><span style="color: #1e293b; font-weight: 500;">Age:</span> ${data.age || '-'} Years</div>
                            <div style="color: #64748b;"><span style="color: #1e293b; font-weight: 500;">Height:</span> ${data.height || '-'}</div>
                            <div style="color: #64748b;"><span style="color: #1e293b; font-weight: 500;">Religion:</span> ${data.religion || '-'}</div>
                            <div style="color: #64748b;"><span style="color: #1e293b; font-weight: 500;">Caste:</span> ${data.caste || '-'}</div>
                        </div>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                    <div>
                        <h3 style="font-size: 12px; letter-spacing: 2px; color: #6366f1; margin: 0 0 12px 0; text-transform: uppercase;">Personal Details</h3>
                        <div style="background: #f8fafc; border-radius: 12px; padding: 16px; font-size: 13px;">
                            ${createDetailRow('Date of Birth', data.dob)}
                            ${createDetailRow('Complexion', data.complexion)}
                            ${createDetailRow('Mother Tongue', data.motherTongue)}
                            ${createDetailRow('Rashi', data.rashi)}
                            ${createDetailRow('Nakshatra', data.nakshatra)}
                            ${createDetailRow('Education', data.education)}
                            ${createDetailRow('Income', data.income)}
                            ${createDetailRow('Hobbies', data.hobbies)}
                        </div>
                    </div>
                    <div>
                        <h3 style="font-size: 12px; letter-spacing: 2px; color: #6366f1; margin: 0 0 12px 0; text-transform: uppercase;">Family Details</h3>
                        <div style="background: #f8fafc; border-radius: 12px; padding: 16px; font-size: 13px;">
                            ${createDetailRow("Father's Name", data.fatherName)}
                            ${createDetailRow("Father's Occupation", data.fatherOccupation)}
                            ${createDetailRow("Mother's Name", data.motherName)}
                            ${createDetailRow("Mother's Occupation", data.motherOccupation)}
                            ${createDetailRow('Siblings', data.siblings)}
                            ${createDetailRow('Family Type', data.familyType)}
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 24px;">
                    <h3 style="font-size: 12px; letter-spacing: 2px; color: #6366f1; margin: 0 0 12px 0; text-transform: uppercase;">Contact Information</h3>
                    <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); border-radius: 12px; padding: 20px; color: white;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; font-size: 14px;">
                            <div><strong>Contact:</strong> ${data.contactNumber || '-'}</div>
                            <div><strong>Email:</strong> ${data.email || '-'}</div>
                            <div style="grid-column: span 2;"><strong>Address:</strong> ${data.address || '-'}${data.city ? ', ' + data.city : ''}${data.state ? ', ' + data.state : ''}</div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // Template 2: Elegant Classic - Traditional with Modern Touch
    {
        name: "Elegant Classic",
        category: "elegant",
        render: (data) => `
            <div style="font-family: 'Playfair Display', Georgia, serif; padding: 40px; background: linear-gradient(180deg, #fffbeb 0%, #fef3c7 100%);">
                <div style="text-align: center; margin-bottom: 24px;">
                    <div style="font-size: 20px; color: #b45309;">॥ श्री गणेशाय नमः ॥</div>
                    <div style="font-size: 28px; color: #92400e; font-weight: 600; margin: 8px 0;">शुभ विवाह बायोडाटा</div>
                    <div style="width: 100px; height: 3px; background: linear-gradient(90deg, transparent, #b45309, transparent); margin: 0 auto;"></div>
                </div>
                
                <div style="text-align: center; margin: 24px 0;">
                    <img src="${data.photo}" alt="Photo" style="width: 130px; height: 160px; object-fit: cover; border: 4px solid #b45309; border-radius: 8px; box-shadow: 0 6px 20px rgba(180, 83, 9, 0.2);">
                    <h2 style="font-size: 24px; color: #78350f; margin: 16px 0 4px 0;">${data.fullName || 'Your Name'}</h2>
                    <p style="color: #92400e; font-family: 'Inter', sans-serif; font-size: 14px; margin: 0;">${data.caste || ''}${data.subCaste ? ' | ' + data.subCaste : ''}</p>
                </div>
                
                <div style="background: rgba(255,255,255,0.6); border-radius: 12px; padding: 20px; margin-bottom: 16px;">
                    <h3 style="color: #b45309; font-size: 16px; border-bottom: 2px solid #fcd34d; padding-bottom: 8px; margin: 0 0 16px 0;">व्यक्तिगत विवरण</h3>
                    <table style="width: 100%; font-family: 'Inter', sans-serif; font-size: 13px; border-collapse: collapse;">
                        ${createTableRow('Date of Birth', data.dob, 'Age', data.age ? data.age + ' Years' : '-')}
                        ${createTableRow('Height', data.height, 'Complexion', data.complexion)}
                        ${createTableRow('Religion', data.religion, 'Caste', data.caste)}
                        ${createTableRow('Gotra', data.subCaste, 'Mother Tongue', data.motherTongue)}
                        ${createTableRow('Rashi', data.rashi, 'Nakshatra', data.nakshatra)}
                        ${createTableRow('Education', data.education, 'Occupation', data.occupation)}
                        ${createTableRow('Income', data.income, 'Hobbies', data.hobbies)}
                    </table>
                </div>
                
                <div style="background: rgba(255,255,255,0.6); border-radius: 12px; padding: 20px; margin-bottom: 16px;">
                    <h3 style="color: #b45309; font-size: 16px; border-bottom: 2px solid #fcd34d; padding-bottom: 8px; margin: 0 0 16px 0;">पारिवारिक विवरण</h3>
                    <table style="width: 100%; font-family: 'Inter', sans-serif; font-size: 13px; border-collapse: collapse;">
                        ${createTableRow("Father's Name", data.fatherName, 'Occupation', data.fatherOccupation)}
                        ${createTableRow("Mother's Name", data.motherName, 'Occupation', data.motherOccupation)}
                        ${createTableRowFull('Siblings', data.siblings)}
                        ${createTableRowFull('Family Type', data.familyType)}
                        ${data.aboutFamily ? createTableRowFull('About Family', data.aboutFamily) : ''}
                    </table>
                </div>
                
                <div style="background: linear-gradient(135deg, #b45309 0%, #d97706 100%); border-radius: 12px; padding: 20px; color: white;">
                    <h3 style="font-size: 16px; margin: 0 0 12px 0;">संपर्क विवरण</h3>
                    <div style="font-family: 'Inter', sans-serif; font-size: 14px;">
                        <p style="margin: 4px 0;"><strong>Contact Person:</strong> ${data.contactPerson || '-'} | <strong>Phone:</strong> ${data.contactNumber || '-'}</p>
                        <p style="margin: 4px 0;"><strong>Address:</strong> ${data.address || '-'}${data.city ? ', ' + data.city : ''}${data.state ? ', ' + data.state : ''}</p>
                    </div>
                </div>
            </div>
        `
    },

    // Template 3: Modern Edge - Bold & Contemporary
    {
        name: "Modern Edge",
        category: "modern",
        render: (data) => `
            <div style="font-family: 'Space Grotesk', sans-serif; background: #ffffff;">
                <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%); padding: 32px; color: white;">
                    <div style="display: flex; gap: 24px; align-items: center;">
                        <img src="${data.photo}" alt="Photo" style="width: 120px; height: 120px; object-fit: cover; border-radius: 50%; border: 4px solid rgba(255,255,255,0.3);">
                        <div>
                            <h1 style="font-size: 28px; font-weight: 700; margin: 0;">${data.fullName || 'Your Name'}</h1>
                            <p style="margin: 8px 0 0 0; opacity: 0.9;">${data.occupation || 'Occupation'} ${data.education ? '• ' + data.education : ''}</p>
                        </div>
                    </div>
                </div>
                
                <div style="padding: 32px;">
                    <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 24px;">
                        ${createTag('📅', data.dob)}
                        ${createTag('📏', data.height)}
                        ${createTag('🙏', data.religion)}
                        ${createTag('🌟', data.rashi)}
                        ${createTag('💼', data.income)}
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div style="background: #f8fafc; border-radius: 16px; padding: 20px;">
                            <h3 style="font-size: 14px; color: #6366f1; margin: 0 0 16px 0; text-transform: uppercase; letter-spacing: 1px;">Personal Info</h3>
                            <div style="font-size: 14px; color: #475569;">
                                ${createModernRow('Date of Birth', data.dob)}
                                ${createModernRow('Age', data.age ? data.age + ' Years' : '-')}
                                ${createModernRow('Height', data.height)}
                                ${createModernRow('Complexion', data.complexion)}
                                ${createModernRow('Caste', data.caste + (data.subCaste ? ' (' + data.subCaste + ')' : ''))}
                                ${createModernRow('Mother Tongue', data.motherTongue)}
                                ${createModernRow('Hobbies', data.hobbies)}
                            </div>
                        </div>
                        
                        <div style="background: #f8fafc; border-radius: 16px; padding: 20px;">
                            <h3 style="font-size: 14px; color: #ec4899; margin: 0 0 16px 0; text-transform: uppercase; letter-spacing: 1px;">Family Info</h3>
                            <div style="font-size: 14px; color: #475569;">
                                ${createModernRow('Father', data.fatherName + (data.fatherOccupation ? ' (' + data.fatherOccupation + ')' : ''))}
                                ${createModernRow('Mother', data.motherName + (data.motherOccupation ? ' (' + data.motherOccupation + ')' : ''))}
                                ${createModernRow('Siblings', data.siblings)}
                                ${createModernRow('Family Type', data.familyType)}
                                ${createModernRow('Family Status', data.familyStatus)}
                            </div>
                        </div>
                    </div>
                    
                    <div style="margin-top: 20px; background: linear-gradient(135deg, #1e293b 0%, #334155 100%); border-radius: 16px; padding: 20px; color: white;">
                        <h3 style="font-size: 14px; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 1px; opacity: 0.8;">Contact Details</h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 14px;">
                            <div>📞 ${data.contactNumber || '-'}</div>
                            <div>✉️ ${data.email || '-'}</div>
                            <div style="grid-column: span 2;">📍 ${data.address || '-'}${data.city ? ', ' + data.city : ''}${data.state ? ', ' + data.state : ''}</div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // Template 4: Royal Traditional - Premium Indian
    {
        name: "Royal Traditional",
        category: "traditional",
        render: (data) => `
            <div style="font-family: 'Inter', sans-serif; background: linear-gradient(180deg, #fff1f2 0%, #ffe4e6 100%); padding: 0;">
                <div style="background: linear-gradient(135deg, #be123c 0%, #9f1239 100%); padding: 24px; text-align: center; color: white;">
                    <div style="font-size: 18px; font-family: 'Playfair Display', serif;">॥ श्री गणेशाय नमः ॥</div>
                    <h1 style="font-size: 26px; font-weight: 700; margin: 8px 0; font-family: 'Playfair Display', serif;">MARRIAGE BIODATA</h1>
                    <div style="width: 80px; height: 2px; background: rgba(255,255,255,0.5); margin: 0 auto;"></div>
                </div>
                
                <div style="padding: 32px;">
                    <div style="display: flex; gap: 24px; margin-bottom: 24px;">
                        <div style="flex-shrink: 0;">
                            <div style="border: 4px solid #be123c; border-radius: 8px; padding: 4px; background: white;">
                                <img src="${data.photo}" alt="Photo" style="width: 130px; height: 160px; object-fit: cover; border-radius: 4px;">
                            </div>
                        </div>
                        <div style="flex: 1;">
                            <h2 style="font-size: 24px; color: #9f1239; margin: 0 0 8px 0; font-family: 'Playfair Display', serif;">${data.fullName || 'Your Name'}</h2>
                            <p style="color: #64748b; margin: 0 0 16px 0;">${data.education || '-'} | ${data.occupation || '-'}</p>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 13px;">
                                <div style="background: #fff; padding: 8px 12px; border-radius: 6px; border-left: 3px solid #be123c;">
                                    <span style="color: #9f1239; font-weight: 600;">DOB:</span> ${data.dob || '-'}
                                </div>
                                <div style="background: #fff; padding: 8px 12px; border-radius: 6px; border-left: 3px solid #be123c;">
                                    <span style="color: #9f1239; font-weight: 600;">Age:</span> ${data.age || '-'} Years
                                </div>
                                <div style="background: #fff; padding: 8px 12px; border-radius: 6px; border-left: 3px solid #be123c;">
                                    <span style="color: #9f1239; font-weight: 600;">Height:</span> ${data.height || '-'}
                                </div>
                                <div style="background: #fff; padding: 8px 12px; border-radius: 6px; border-left: 3px solid #be123c;">
                                    <span style="color: #9f1239; font-weight: 600;">Religion:</span> ${data.religion || '-'}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div style="background: white; border-radius: 12px; padding: 20px; margin-bottom: 16px; box-shadow: 0 2px 8px rgba(159, 18, 57, 0.1);">
                        <h3 style="color: #9f1239; font-size: 15px; border-bottom: 2px solid #fecdd3; padding-bottom: 8px; margin: 0 0 16px 0;">Personal Details</h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 13px;">
                            ${createRedDetailItem('Caste', data.caste + (data.subCaste ? ' / ' + data.subCaste : ''))}
                            ${createRedDetailItem('Mother Tongue', data.motherTongue)}
                            ${createRedDetailItem('Complexion', data.complexion)}
                            ${createRedDetailItem('Rashi', data.rashi)}
                            ${createRedDetailItem('Nakshatra', data.nakshatra)}
                            ${createRedDetailItem('Income', data.income)}
                            ${createRedDetailItem('Hobbies', data.hobbies, true)}
                        </div>
                    </div>
                    
                    <div style="background: white; border-radius: 12px; padding: 20px; margin-bottom: 16px; box-shadow: 0 2px 8px rgba(159, 18, 57, 0.1);">
                        <h3 style="color: #9f1239; font-size: 15px; border-bottom: 2px solid #fecdd3; padding-bottom: 8px; margin: 0 0 16px 0;">Family Details</h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 13px;">
                            ${createRedDetailItem("Father's Name", data.fatherName)}
                            ${createRedDetailItem("Father's Occupation", data.fatherOccupation)}
                            ${createRedDetailItem("Mother's Name", data.motherName)}
                            ${createRedDetailItem("Mother's Occupation", data.motherOccupation)}
                            ${createRedDetailItem('Siblings', data.siblings, true)}
                            ${createRedDetailItem('Family Type', data.familyType)}
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, #be123c 0%, #9f1239 100%); border-radius: 12px; padding: 20px; color: white;">
                        <h3 style="font-size: 15px; margin: 0 0 12px 0;">Contact Details</h3>
                        <div style="font-size: 14px;">
                            <p style="margin: 4px 0;"><strong>Contact Person:</strong> ${data.contactPerson || '-'}</p>
                            <p style="margin: 4px 0;"><strong>Phone:</strong> ${data.contactNumber || '-'} | <strong>Email:</strong> ${data.email || '-'}</p>
                            <p style="margin: 4px 0;"><strong>Address:</strong> ${data.address || '-'}${data.city ? ', ' + data.city : ''}${data.state ? ', ' + data.state : ''}</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // Template 5: Glassmorphic - Ultra Modern
    {
        name: "Glassmorphic",
        category: "glass",
        render: (data) => `
            <div style="font-family: 'Space Grotesk', sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%); padding: 40px; min-height: 100%;">
                <div style="background: rgba(255,255,255,0.15); backdrop-filter: blur(10px); border-radius: 24px; padding: 32px; border: 1px solid rgba(255,255,255,0.2);">
                    <div style="text-align: center; margin-bottom: 24px;">
                        <div style="font-size: 14px; color: rgba(255,255,255,0.9); letter-spacing: 4px; margin-bottom: 8px;">BIODATA</div>
                    </div>
                    
                    <div style="display: flex; gap: 24px; align-items: center; margin-bottom: 32px;">
                        <img src="${data.photo}" alt="Photo" style="width: 120px; height: 120px; object-fit: cover; border-radius: 20px; border: 3px solid rgba(255,255,255,0.3); box-shadow: 0 8px 32px rgba(0,0,0,0.2);">
                        <div style="color: white;">
                            <h1 style="font-size: 28px; font-weight: 700; margin: 0; text-shadow: 0 2px 10px rgba(0,0,0,0.2);">${data.fullName || 'Your Name'}</h1>
                            <p style="margin: 8px 0 0 0; opacity: 0.9; font-size: 15px;">${data.occupation || '-'}</p>
                            <div style="display: flex; gap: 16px; margin-top: 12px; font-size: 13px; opacity: 0.85;">
                                <span>🎂 ${data.age || '-'} Years</span>
                                <span>📏 ${data.height || '-'}</span>
                                <span>🙏 ${data.religion || '-'}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
                        <div style="background: rgba(255,255,255,0.1); border-radius: 16px; padding: 20px; border: 1px solid rgba(255,255,255,0.1);">
                            <h3 style="color: white; font-size: 13px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px 0; opacity: 0.9;">Personal</h3>
                            <div style="font-size: 13px; color: rgba(255,255,255,0.9);">
                                ${createGlassRow('Date of Birth', data.dob)}
                                ${createGlassRow('Caste', data.caste + (data.subCaste ? ' (' + data.subCaste + ')' : ''))}
                                ${createGlassRow('Mother Tongue', data.motherTongue)}
                                ${createGlassRow('Rashi', data.rashi)}
                                ${createGlassRow('Education', data.education)}
                                ${createGlassRow('Income', data.income)}
                            </div>
                        </div>
                        <div style="background: rgba(255,255,255,0.1); border-radius: 16px; padding: 20px; border: 1px solid rgba(255,255,255,0.1);">
                            <h3 style="color: white; font-size: 13px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px 0; opacity: 0.9;">Family</h3>
                            <div style="font-size: 13px; color: rgba(255,255,255,0.9);">
                                ${createGlassRow('Father', data.fatherName)}
                                ${createGlassRow('Occupation', data.fatherOccupation)}
                                ${createGlassRow('Mother', data.motherName)}
                                ${createGlassRow('Occupation', data.motherOccupation)}
                                ${createGlassRow('Siblings', data.siblings)}
                                ${createGlassRow('Family Type', data.familyType)}
                            </div>
                        </div>
                    </div>
                    
                    <div style="background: rgba(0,0,0,0.2); border-radius: 16px; padding: 20px; color: white;">
                        <h3 style="font-size: 13px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 12px 0; opacity: 0.8;">Contact</h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 14px;">
                            <div>📞 ${data.contactNumber || '-'}</div>
                            <div>✉️ ${data.email || '-'}</div>
                            <div style="grid-column: span 2;">📍 ${data.address || '-'}${data.city ? ', ' + data.city : ''}${data.state ? ', ' + data.state : ''}</div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // Template 6: Dark Luxe - Premium Dark Mode
    {
        name: "Dark Luxe",
        category: "dark",
        render: (data) => `
            <div style="font-family: 'Inter', sans-serif; background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%); padding: 40px; color: #f1f5f9;">
                <div style="text-align: center; margin-bottom: 32px;">
                    <div style="font-size: 12px; color: #94a3b8; letter-spacing: 4px; margin-bottom: 8px;">MARRIAGE BIODATA</div>
                    <div style="width: 60px; height: 2px; background: linear-gradient(90deg, #3b82f6, #8b5cf6); margin: 0 auto;"></div>
                </div>
                
                <div style="display: flex; gap: 28px; margin-bottom: 32px;">
                    <div style="flex-shrink: 0;">
                        <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 3px; border-radius: 16px;">
                            <img src="${data.photo}" alt="Photo" style="width: 130px; height: 160px; object-fit: cover; border-radius: 14px;">
                        </div>
                    </div>
                    <div>
                        <h1 style="font-size: 28px; font-weight: 700; margin: 0 0 4px 0; background: linear-gradient(90deg, #60a5fa, #a78bfa); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${data.fullName || 'Your Name'}</h1>
                        <p style="color: #94a3b8; margin: 0 0 16px 0; font-size: 15px;">${data.occupation || '-'}</p>
                        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                            ${createDarkTag(data.age + ' Years')}
                            ${createDarkTag(data.height)}
                            ${createDarkTag(data.religion)}
                            ${createDarkTag(data.caste)}
                        </div>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; padding: 20px;">
                        <h3 style="font-size: 12px; color: #60a5fa; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px 0; opacity: 0.9;">Personal Details</h3>
                        <div style="font-size: 13px;">
                            ${createDarkRow('Date of Birth', data.dob)}
                            ${createDarkRow('Complexion', data.complexion)}
                            ${createDarkRow('Mother Tongue', data.motherTongue)}
                            ${createDarkRow('Gotra', data.subCaste)}
                            ${createDarkRow('Rashi', data.rashi)}
                            ${createDarkRow('Nakshatra', data.nakshatra)}
                            ${createDarkRow('Education', data.education)}
                            ${createDarkRow('Income', data.income)}
                        </div>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; padding: 20px;">
                        <h3 style="font-size: 12px; color: #a78bfa; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px 0; opacity: 0.9;">Family Details</h3>
                        <div style="font-size: 13px;">
                            ${createDarkRow('Father', data.fatherName)}
                            ${createDarkRow('Occupation', data.fatherOccupation)}
                            ${createDarkRow('Mother', data.motherName)}
                            ${createDarkRow('Occupation', data.motherOccupation)}
                            ${createDarkRow('Siblings', data.siblings)}
                            ${createDarkRow('Family Type', data.familyType)}
                            ${createDarkRow('Family Status', data.familyStatus)}
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); border-radius: 16px; padding: 20px;">
                    <h3 style="font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 12px 0; opacity: 0.9;">Contact Information</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 14px;">
                        <div>📞 ${data.contactNumber || '-'}</div>
                        <div>✉️ ${data.email || '-'}</div>
                        <div style="grid-column: span 2;">📍 ${data.address || '-'}${data.city ? ', ' + data.city : ''}${data.state ? ', ' + data.state : ''}</div>
                    </div>
                </div>
            </div>
        `
    },

    // Template 7: Floral Pink - Feminine & Elegant
    {
        name: "Floral Pink",
        category: "feminine",
        render: (data) => `
            <div style="font-family: 'Playfair Display', serif; background: linear-gradient(180deg, #fdf2f8 0%, #fce7f3 100%); padding: 40px;">
                <div style="text-align: center; margin-bottom: 24px;">
                    <div style="font-size: 18px; color: #be185d;">❀ श्री गणेशाय नमः ❀</div>
                    <h1 style="font-size: 28px; color: #9d174d; margin: 8px 0;">Biodata for Marriage</h1>
                    <div style="width: 80px; height: 2px; background: linear-gradient(90deg, #ec4899, #f472b6); margin: 0 auto;"></div>
                </div>
                
                <div style="text-align: center; margin-bottom: 24px;">
                    <div style="display: inline-block; padding: 6px; background: linear-gradient(135deg, #ec4899, #f472b6); border-radius: 50%;">
                        <img src="${data.photo}" alt="Photo" style="width: 130px; height: 130px; object-fit: cover; border-radius: 50%; border: 4px solid white;">
                    </div>
                    <h2 style="font-size: 24px; color: #831843; margin: 16px 0 4px 0;">${data.fullName || 'Your Name'}</h2>
                    <p style="color: #be185d; font-family: 'Inter', sans-serif; font-size: 14px; margin: 0;">${data.occupation || '-'}</p>
                </div>
                
                <div style="background: rgba(255,255,255,0.7); border-radius: 20px; padding: 24px; margin-bottom: 16px; box-shadow: 0 4px 20px rgba(236, 72, 153, 0.1);">
                    <h3 style="color: #be185d; font-size: 16px; margin: 0 0 16px 0; text-align: center;">✿ Personal Details ✿</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-family: 'Inter', sans-serif; font-size: 13px;">
                        ${createPinkDetailItem('Date of Birth', data.dob)}
                        ${createPinkDetailItem('Age', data.age ? data.age + ' Years' : '-')}
                        ${createPinkDetailItem('Height', data.height)}
                        ${createPinkDetailItem('Religion', data.religion)}
                        ${createPinkDetailItem('Caste', data.caste)}
                        ${createPinkDetailItem('Mother Tongue', data.motherTongue)}
                        ${createPinkDetailItem('Education', data.education)}
                        ${createPinkDetailItem('Income', data.income)}
                    </div>
                </div>
                
                <div style="background: rgba(255,255,255,0.7); border-radius: 20px; padding: 24px; margin-bottom: 16px; box-shadow: 0 4px 20px rgba(236, 72, 153, 0.1);">
                    <h3 style="color: #be185d; font-size: 16px; margin: 0 0 16px 0; text-align: center;">✿ Family Details ✿</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-family: 'Inter', sans-serif; font-size: 13px;">
                        ${createPinkDetailItem("Father's Name", data.fatherName)}
                        ${createPinkDetailItem('Occupation', data.fatherOccupation)}
                        ${createPinkDetailItem("Mother's Name", data.motherName)}
                        ${createPinkDetailItem('Occupation', data.motherOccupation)}
                        ${createPinkDetailItem('Siblings', data.siblings, true)}
                        ${createPinkDetailItem('Family Type', data.familyType)}
                    </div>
                </div>
                
                <div style="background: linear-gradient(135deg, #ec4899 0%, #f472b6 100%); border-radius: 20px; padding: 20px; color: white; text-align: center;">
                    <h3 style="font-size: 16px; margin: 0 0 12px 0;">Contact Details</h3>
                    <div style="font-family: 'Inter', sans-serif; font-size: 14px;">
                        <p style="margin: 4px 0;">📞 ${data.contactNumber || '-'} | ✉️ ${data.email || '-'}</p>
                        <p style="margin: 4px 0;">📍 ${data.address || '-'}${data.city ? ', ' + data.city : ''}${data.state ? ', ' + data.state : ''}</p>
                    </div>
                </div>
            </div>
        `
    },

    // Template 8: Green Nature - Fresh & Natural
    {
        name: "Green Nature",
        category: "nature",
        render: (data) => `
            <div style="font-family: 'Inter', sans-serif; background: linear-gradient(180deg, #ecfdf5 0%, #d1fae5 100%); padding: 40px;">
                <div style="text-align: center; margin-bottom: 24px;">
                    <div style="font-size: 16px; color: #059669;">🌿 श्री गणेशाय नमः 🌿</div>
                    <h1 style="font-size: 26px; color: #047857; margin: 8px 0;">MARRIAGE BIODATA</h1>
                </div>
                
                <div style="display: flex; gap: 24px; margin-bottom: 24px;">
                    <div style="flex-shrink: 0;">
                        <img src="${data.photo}" alt="Photo" style="width: 130px; height: 160px; object-fit: cover; border-radius: 12px; border: 3px solid #10b981; box-shadow: 0 4px 16px rgba(16, 185, 129, 0.2);">
                    </div>
                    <div>
                        <h2 style="font-size: 24px; color: #047857; margin: 0 0 8px 0;">${data.fullName || 'Your Name'}</h2>
                        <p style="color: #059669; margin: 0 0 12px 0;">${data.occupation || '-'}</p>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 13px;">
                            <div style="background: rgba(255,255,255,0.7); padding: 8px 12px; border-radius: 8px;"><strong>DOB:</strong> ${data.dob || '-'}</div>
                            <div style="background: rgba(255,255,255,0.7); padding: 8px 12px; border-radius: 8px;"><strong>Age:</strong> ${data.age || '-'} Years</div>
                            <div style="background: rgba(255,255,255,0.7); padding: 8px 12px; border-radius: 8px;"><strong>Height:</strong> ${data.height || '-'}</div>
                            <div style="background: rgba(255,255,255,0.7); padding: 8px 12px; border-radius: 8px;"><strong>Religion:</strong> ${data.religion || '-'}</div>
                        </div>
                    </div>
                </div>
                
                <div style="background: rgba(255,255,255,0.6); border-radius: 16px; padding: 20px; margin-bottom: 16px;">
                    <h3 style="color: #047857; font-size: 15px; border-bottom: 2px solid #a7f3d0; padding-bottom: 8px; margin: 0 0 16px 0;">Personal Details</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 13px;">
                        ${createGreenItem('Caste', data.caste + (data.subCaste ? ' / ' + data.subCaste : ''))}
                        ${createGreenItem('Mother Tongue', data.motherTongue)}
                        ${createGreenItem('Complexion', data.complexion)}
                        ${createGreenItem('Rashi', data.rashi)}
                        ${createGreenItem('Education', data.education)}
                        ${createGreenItem('Income', data.income)}
                    </div>
                </div>
                
                <div style="background: rgba(255,255,255,0.6); border-radius: 16px; padding: 20px; margin-bottom: 16px;">
                    <h3 style="color: #047857; font-size: 15px; border-bottom: 2px solid #a7f3d0; padding-bottom: 8px; margin: 0 0 16px 0;">Family Details</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 13px;">
                        ${createGreenItem("Father's Name", data.fatherName)}
                        ${createGreenItem('Occupation', data.fatherOccupation)}
                        ${createGreenItem("Mother's Name", data.motherName)}
                        ${createGreenItem('Occupation', data.motherOccupation)}
                        ${createGreenItem('Siblings', data.siblings)}
                        ${createGreenItem('Family Type', data.familyType)}
                    </div>
                </div>
                
                <div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); border-radius: 16px; padding: 20px; color: white;">
                    <h3 style="font-size: 15px; margin: 0 0 12px 0;">Contact Details</h3>
                    <div style="font-size: 14px;">
                        <p style="margin: 4px 0;">📞 ${data.contactNumber || '-'} | ✉️ ${data.email || '-'}</p>
                        <p style="margin: 4px 0;">📍 ${data.address || '-'}${data.city ? ', ' + data.city : ''}${data.state ? ', ' + data.state : ''}</p>
                    </div>
                </div>
            </div>
        `
    },

    // Template 9: Blue Professional - Corporate Look
    {
        name: "Blue Professional",
        category: "professional",
        render: (data) => `
            <div style="font-family: 'Inter', sans-serif; background: #ffffff; padding: 0;">
                <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 32px; color: white;">
                    <div style="display: flex; gap: 24px; align-items: center;">
                        <img src="${data.photo}" alt="Photo" style="width: 110px; height: 130px; object-fit: cover; border-radius: 8px; border: 3px solid rgba(255,255,255,0.3);">
                        <div>
                            <div style="font-size: 12px; opacity: 0.8; letter-spacing: 2px; margin-bottom: 4px;">MARRIAGE BIODATA</div>
                            <h1 style="font-size: 26px; font-weight: 700; margin: 0 0 8px 0;">${data.fullName || 'Your Name'}</h1>
                            <p style="margin: 0; opacity: 0.9; font-size: 15px;">${data.education || '-'} | ${data.occupation || '-'}</p>
                        </div>
                    </div>
                </div>
                
                <div style="padding: 32px;">
                    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 24px;">
                        ${createBlueStatCard('Age', data.age ? data.age + ' Yrs' : '-')}
                        ${createBlueStatCard('Height', data.height || '-')}
                        ${createBlueStatCard('Religion', data.religion || '-')}
                        ${createBlueStatCard('Income', data.income || '-')}
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                        <div>
                            <h3 style="font-size: 14px; color: #1e40af; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px 0; border-bottom: 2px solid #dbeafe; padding-bottom: 8px;">Personal Details</h3>
                            <table style="width: 100%; font-size: 13px; border-collapse: collapse;">
                                ${createBlueTableRow('Date of Birth', data.dob)}
                                ${createBlueTableRow('Caste', data.caste + (data.subCaste ? ' (' + data.subCaste + ')' : ''))}
                                ${createBlueTableRow('Mother Tongue', data.motherTongue)}
                                ${createBlueTableRow('Complexion', data.complexion)}
                                ${createBlueTableRow('Rashi', data.rashi)}
                                ${createBlueTableRow('Nakshatra', data.nakshatra)}
                                ${createBlueTableRow('Hobbies', data.hobbies)}
                            </table>
                        </div>
                        <div>
                            <h3 style="font-size: 14px; color: #1e40af; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px 0; border-bottom: 2px solid #dbeafe; padding-bottom: 8px;">Family Details</h3>
                            <table style="width: 100%; font-size: 13px; border-collapse: collapse;">
                                ${createBlueTableRow("Father's Name", data.fatherName)}
                                ${createBlueTableRow('Occupation', data.fatherOccupation)}
                                ${createBlueTableRow("Mother's Name", data.motherName)}
                                ${createBlueTableRow('Occupation', data.motherOccupation)}
                                ${createBlueTableRow('Siblings', data.siblings)}
                                ${createBlueTableRow('Family Type', data.familyType)}
                                ${createBlueTableRow('Family Status', data.familyStatus)}
                            </table>
                        </div>
                    </div>
                    
                    <div style="margin-top: 24px; background: #f0f9ff; border-radius: 12px; padding: 20px; border: 1px solid #bfdbfe;">
                        <h3 style="font-size: 14px; color: #1e40af; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px 0;">Contact Information</h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 14px; color: #1e3a8a;">
                            <div>📞 ${data.contactNumber || '-'}</div>
                            <div>✉️ ${data.email || '-'}</div>
                            <div style="grid-column: span 2;">📍 ${data.address || '-'}${data.city ? ', ' + data.city : ''}${data.state ? ', ' + data.state : ''}</div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // Template 10: Purple Gradient - Trendy & Cool
    {
        name: "Purple Gradient",
        category: "trendy",
        render: (data) => `
            <div style="font-family: 'Space Grotesk', sans-serif; background: linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%); padding: 40px; color: white;">
                <div style="text-align: center; margin-bottom: 24px;">
                    <div style="font-size: 11px; letter-spacing: 4px; opacity: 0.8;">MARRIAGE BIODATA</div>
                </div>
                
                <div style="text-align: center; margin-bottom: 32px;">
                    <div style="display: inline-block; padding: 4px; background: rgba(255,255,255,0.2); border-radius: 50%;">
                        <img src="${data.photo}" alt="Photo" style="width: 130px; height: 130px; object-fit: cover; border-radius: 50%;">
                    </div>
                    <h1 style="font-size: 28px; font-weight: 700; margin: 16px 0 4px 0;">${data.fullName || 'Your Name'}</h1>
                    <p style="margin: 0; opacity: 0.9; font-size: 15px;">${data.occupation || '-'}</p>
                </div>
                
                <div style="display: flex; justify-content: center; gap: 24px; margin-bottom: 32px; font-size: 14px;">
                    <div style="text-align: center;"><div style="font-size: 22px; font-weight: 700;">${data.age || '-'}</div><div style="opacity: 0.7; font-size: 12px;">Years</div></div>
                    <div style="width: 1px; background: rgba(255,255,255,0.3);"></div>
                    <div style="text-align: center;"><div style="font-size: 22px; font-weight: 700;">${data.height?.split(' ')[0] || '-'}</div><div style="opacity: 0.7; font-size: 12px;">Height</div></div>
                    <div style="width: 1px; background: rgba(255,255,255,0.3);"></div>
                    <div style="text-align: center;"><div style="font-size: 22px; font-weight: 700;">${data.education?.split(' ')[0] || '-'}</div><div style="opacity: 0.7; font-size: 12px;">Education</div></div>
                </div>
                
                <div style="background: rgba(255,255,255,0.1); border-radius: 20px; padding: 24px; margin-bottom: 16px;">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; font-size: 13px;">
                        ${createPurpleRow('Religion', data.religion)}
                        ${createPurpleRow('Caste', data.caste)}
                        ${createPurpleRow('Gotra', data.subCaste)}
                        ${createPurpleRow('Mother Tongue', data.motherTongue)}
                        ${createPurpleRow('Rashi', data.rashi)}
                        ${createPurpleRow('Income', data.income)}
                    </div>
                </div>
                
                <div style="background: rgba(255,255,255,0.1); border-radius: 20px; padding: 24px; margin-bottom: 16px;">
                    <h3 style="font-size: 12px; letter-spacing: 2px; margin: 0 0 16px 0; opacity: 0.8;">FAMILY</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; font-size: 13px;">
                        ${createPurpleRow('Father', data.fatherName + (data.fatherOccupation ? ' (' + data.fatherOccupation + ')' : ''))}
                        ${createPurpleRow('Mother', data.motherName + (data.motherOccupation ? ' (' + data.motherOccupation + ')' : ''))}
                        ${createPurpleRow('Siblings', data.siblings)}
                        ${createPurpleRow('Family Type', data.familyType)}
                    </div>
                </div>
                
                <div style="background: rgba(0,0,0,0.2); border-radius: 20px; padding: 20px; text-align: center;">
                    <div style="font-size: 14px;">
                        <p style="margin: 4px 0;">📞 ${data.contactNumber || '-'} | ✉️ ${data.email || '-'}</p>
                        <p style="margin: 4px 0; opacity: 0.9;">📍 ${data.address || '-'}${data.city ? ', ' + data.city : ''}${data.state ? ', ' + data.state : ''}</p>
                    </div>
                </div>
            </div>
        `
    }
];

// ============================================
// Helper Functions for Template Rendering
// ============================================
function createDetailRow(label, value) {
    if (!value) return '';
    return `<div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #e2e8f0;"><span style="color: #64748b;">${labelText(label)}</span><span style="color: #1e293b; font-weight: 500;">${value}</span></div>`;
}

function createTableRow(label1, value1, label2, value2) {
    return `<tr><td style="padding: 6px 8px; color: #78350f; font-weight: 600; width: 25%;">${labelText(label1)}</td><td style="padding: 6px 8px; color: #1e293b; width: 25%;">${value1 || '-'}</td><td style="padding: 6px 8px; color: #78350f; font-weight: 600; width: 25%;">${labelText(label2)}</td><td style="padding: 6px 8px; color: #1e293b; width: 25%;">${value2 || '-'}</td></tr>`;
}

function createTableRowFull(label, value) {
    return `<tr><td style="padding: 6px 8px; color: #78350f; font-weight: 600; width: 25%;">${labelText(label)}</td><td style="padding: 6px 8px; color: #1e293b;" colspan="3">${value || '-'}</td></tr>`;
}

function createModernRow(label, value) {
    if (!value) return '';
    return `<div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px dashed #e2e8f0;"><span style="color: #64748b;">${labelText(label)}</span><span style="color: #1e293b; font-weight: 500;">${value}</span></div>`;
}

function createTag(icon, value) {
    if (!value) return '';
    return `<span style="background: #f1f5f9; padding: 8px 16px; border-radius: 20px; font-size: 13px; color: #475569;">${icon} ${value}</span>`;
}

function createRedDetailItem(label, value, fullWidth = false) {
    return `<div style="background: #fff1f2; padding: 10px 12px; border-radius: 8px; border-left: 3px solid #be123c;${fullWidth ? ' grid-column: span 2;' : ''}"><span style="color: #9f1239; font-weight: 600; display: block; font-size: 11px; margin-bottom: 2px;">${labelText(label)}</span><span style="color: #1e293b;">${value || '-'}</span></div>`;
}

function createGlassRow(label, value) {
    if (!value) return '';
    return `<div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="opacity: 0.7;">${labelText(label)}</span><span style="font-weight: 500;">${value}</span></div>`;
}

function createDarkTag(value) {
    if (!value) return '';
    return `<span style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 6px 14px; border-radius: 20px; font-size: 12px;">${value}</span>`;
}

function createDarkRow(label, value) {
    if (!value) return '';
    return `<div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.05);"><span style="color: #94a3b8;">${labelText(label)}</span><span style="color: #f1f5f9;">${value}</span></div>`;
}

function createPinkDetailItem(label, value, fullWidth = false) {
    return `<div style="background: #fdf2f8; padding: 10px 12px; border-radius: 10px;${fullWidth ? ' grid-column: span 2;' : ''}"><span style="color: #be185d; font-weight: 600; display: block; font-size: 11px; margin-bottom: 2px;">${labelText(label)}</span><span style="color: #1e293b;">${value || '-'}</span></div>`;
}

function createGreenItem(label, value) {
    return `<div style="background: #ecfdf5; padding: 10px 12px; border-radius: 8px; border-left: 3px solid #10b981;"><span style="color: #047857; font-weight: 600; display: block; font-size: 11px; margin-bottom: 2px;">${labelText(label)}</span><span style="color: #1e293b;">${value || '-'}</span></div>`;
}

function createBlueStatCard(label, value) {
    return `<div style="background: #eff6ff; border-radius: 12px; padding: 16px; text-align: center;"><div style="font-size: 18px; font-weight: 700; color: #1e40af;">${value}</div><div style="font-size: 11px; color: #64748b; text-transform: uppercase; letter-spacing: 1px;">${labelText(label)}</div></div>`;
}

function createBlueTableRow(label, value) {
    return `<tr><td style="padding: 8px 0; color: #64748b; border-bottom: 1px solid #e2e8f0;">${labelText(label)}</td><td style="padding: 8px 0; color: #1e3a8a; font-weight: 500; border-bottom: 1px solid #e2e8f0; text-align: right;">${value || '-'}</td></tr>`;
}

function createPurpleRow(label, value) {
    if (!value) return '';
    return `<div><span style="opacity: 0.7; font-size: 11px; display: block;">${labelText(label)}</span><span style="font-weight: 500;">${value}</span></div>`;
}

// ============================================
// State Management
// ============================================
let selectedTemplate = 0;
let profilePhoto = defaultPhoto;
let removedFields = new Set();

// ============================================
// Field Management
// ============================================
function isFieldRemoved(fieldName) {
    return removedFields.has(fieldName);
}

function removeField(fieldName) {
    removedFields.add(fieldName);
    const fieldGroup = document.querySelector(`[data-field="${fieldName}"]`);
    if (fieldGroup) {
        fieldGroup.classList.add('field-removed');
    }
}

function restoreField(fieldName) {
    removedFields.delete(fieldName);
    const fieldGroup = document.querySelector(`[data-field="${fieldName}"]`);
    if (fieldGroup) {
        fieldGroup.classList.remove('field-removed');
    }
}

// ============================================
// Form Data Collection
// ============================================
function getFormData() {
    const getValue = (id) => {
        if (isFieldRemoved(id)) return '';
        return document.getElementById(id)?.value || '';
    };

    return {
        photo: isFieldRemoved('photo') ? defaultPhoto : profilePhoto,
        fullName: getValue('fullName'),
        dob: getValue('dob'),
        age: getValue('age'),
        height: getValue('height'),
        complexion: getValue('complexion'),
        religion: getValue('religion'),
        caste: getValue('caste'),
        subCaste: getValue('subCaste'),
        motherTongue: getValue('motherTongue'),
        rashi: getValue('rashi'),
        nakshatra: getValue('nakshatra'),
        education: getValue('education'),
        occupation: getValue('occupation'),
        income: getValue('income'),
        hobbies: getValue('hobbies'),
        fatherName: getValue('fatherName'),
        fatherOccupation: getValue('fatherOccupation'),
        motherName: getValue('motherName'),
        motherOccupation: getValue('motherOccupation'),
        siblings: getValue('siblings'),
        familyType: getValue('familyType'),
        familyStatus: getValue('familyStatus'),
        aboutFamily: getValue('aboutFamily'),
        contactPerson: getValue('contactPerson'),
        contactNumber: getValue('contactNumber'),
        email: getValue('email'),
        address: getValue('address'),
        city: getValue('city'),
        state: getValue('state')
    };
}

function hasUserInput(data) {
    const photoProvided = !isFieldRemoved('photo') && profilePhoto !== defaultPhoto;
    if (photoProvided) return true;

    return Object.entries(data).some(([key, value]) => {
        if (key === 'photo') return false;
        if (typeof value === 'string') {
            return value.trim().length > 0;
        }
        return Boolean(value);
    });
}

function getRenderableData() {
    const formData = getFormData();
    if (hasUserInput(formData)) {
        return formData;
    }
    return { ...sampleData };
}

// ============================================
// PDF Download
// ============================================
const PDF_LOADER_ID = 'pdfDownloadOverlay';
const MOBILE_PDF_BREAKPOINT = 768;
const PDF_GENERATION_TIMEOUT_MS = 45000;
const PDF_CAPTURE_WIDTH = 794;
const PDF_CAPTURE_MIN_HEIGHT = 1123;

function togglePdfLoader(show, message = t('preparingPdf')) {
    let overlay = document.getElementById(PDF_LOADER_ID);
    if (show) {
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = PDF_LOADER_ID;
            Object.assign(overlay.style, {
                position: 'fixed',
                inset: '0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(15, 23, 42, 0.45)',
                zIndex: '9999',
                backdropFilter: 'blur(1px)'
            });
            overlay.innerHTML = `
                <div style="background:#fff;padding:18px 28px;border-radius:14px;box-shadow:0 20px 45px rgba(15,23,42,0.25);display:flex;flex-direction:column;align-items:center;gap:10px;min-width:220px;">
                    <div style="width:26px;height:26px;border-radius:50%;border:3px solid rgba(15,23,42,0.15);border-top-color:#6366f1;animation:pdfSpin 0.8s linear infinite;"></div>
                    <p id="pdfDownloadMessage" style="margin:0;font-size:14px;font-weight:600;color:#0f172a;text-align:center;">${t('preparingPdf')}</p>
                    <p style="margin:0;font-size:12px;color:#64748b;text-align:center;max-width:260px;">${t('keepTabOpen')}</p>
                </div>
                <style>
                    @keyframes pdfSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                </style>
            `;
        }
        document.body.appendChild(overlay);
        const messageNode = overlay.querySelector('#pdfDownloadMessage');
        if (messageNode) {
            messageNode.textContent = message;
        }
    } else if (overlay?.parentNode) {
        overlay.remove();
    }
}

function setPdfLoaderMessage(message) {
    const messageNode = document.getElementById('pdfDownloadMessage');
    if (messageNode) {
        messageNode.textContent = message;
    }
}

function createPdfDocument(data) {
    const wrapper = document.createElement('div');
    Object.assign(wrapper.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: `${PDF_CAPTURE_WIDTH}px`,
        minHeight: '0',
        background: '#ffffff',
        zIndex: '9998',
        pointerEvents: 'none',
        overflow: 'visible',
        opacity: '1',
        transform: 'translateZ(0)'
    });

    const paperNode = document.createElement('div');
    paperNode.className = 'biodata-paper';
    paperNode.style.width = `${PDF_CAPTURE_WIDTH}px`;
    paperNode.style.maxWidth = `${PDF_CAPTURE_WIDTH}px`;
    paperNode.style.minHeight = '0';
    paperNode.style.boxShadow = 'none';
    paperNode.style.margin = '0';
    paperNode.style.background = '#ffffff';
    paperNode.style.borderRadius = '0';
    paperNode.style.overflow = 'visible';
    paperNode.style.color = '#0f172a';
    paperNode.style.fontFamily = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";

    renderTemplateInto(paperNode, data);

    wrapper.appendChild(paperNode);
    document.body.appendChild(wrapper);

    return { wrapper, paperNode };
}

function isMobilePdfFlow() {
    return window.matchMedia(`(max-width: ${MOBILE_PDF_BREAKPOINT}px)`).matches ||
        /Android|webOS|iPhone|iPad|iPod|Mobile|SamsungBrowser/i.test(navigator.userAgent);
}

function getPdfFileName(data) {
    const name = (data.fullName || 'Marriage-Biodata')
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .slice(0, 70);

    return `${name || 'Marriage-Biodata'}.pdf`;
}

function withTimeout(promise, timeoutMs, message) {
    let timeoutId;
    const timeoutPromise = new Promise((_, reject) => {
        timeoutId = setTimeout(() => reject(new Error(message)), timeoutMs);
    });

    return Promise.race([promise, timeoutPromise]).finally(() => clearTimeout(timeoutId));
}

async function waitForPdfAssets(root) {
    const images = Array.from(root.querySelectorAll('img'));
    await Promise.all(images.map((img) => {
        if (img.complete && img.naturalWidth > 0) return Promise.resolve();

        return new Promise((resolve) => {
            const done = () => resolve();
            img.addEventListener('load', done, { once: true });
            img.addEventListener('error', done, { once: true });
            setTimeout(done, 3000);
        });
    }));

    if (document.fonts?.ready) {
        await Promise.race([document.fonts.ready, wait(3000)]);
    }

    await nextFrame();
    await wait(80);
}

async function preparePdfCapture(pdfDocument) {
    await waitForPdfAssets(pdfDocument.paperNode);

    const contentHeight = Math.max(
        pdfDocument.paperNode.scrollHeight,
        pdfDocument.paperNode.offsetHeight,
        pdfDocument.paperNode.getBoundingClientRect().height
    );
    const captureHeight = Math.ceil(contentHeight);
    pdfDocument.wrapper.style.height = `${captureHeight}px`;
    pdfDocument.paperNode.style.height = 'auto';

    await nextFrame();

    const bounds = pdfDocument.paperNode.getBoundingClientRect();
    if (!bounds.width || !bounds.height || !pdfDocument.paperNode.textContent.trim()) {
        throw new Error('The biodata preview was not ready. Please try the download again.');
    }

    return captureHeight;
}

function triggerBlobDownload(blob, fileName) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.rel = 'noopener';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(() => URL.revokeObjectURL(url), 30000);
}

function canvasHasVisibleContent(canvas) {
    const context = canvas.getContext('2d', { willReadFrequently: true });
    if (!context) return true;

    const stepX = Math.max(16, Math.floor(canvas.width / 24));
    const stepY = Math.max(16, Math.floor(canvas.height / 32));

    for (let y = 0; y < canvas.height; y += stepY) {
        for (let x = 0; x < canvas.width; x += stepX) {
            const [red, green, blue, alpha] = context.getImageData(x, y, 1, 1).data;
            if (alpha > 0 && (red < 245 || green < 245 || blue < 245)) {
                return true;
            }
        }
    }

    return false;
}

function createPdfBlobFromCanvas(canvas) {
    const { jsPDF } = window.jspdf || {};
    if (!jsPDF) {
        throw new Error('PDF engine is not ready. Please refresh and try again.');
    }

    const pdf = new jsPDF({
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait',
        compress: true
    });

    const pageWidth = 210;
    const pageHeight = 297;
    const imageHeight = (canvas.height * pageWidth) / canvas.width;
    const imageData = canvas.toDataURL('image/jpeg', 0.92);

    if (imageHeight > pageHeight) {
        const fittedWidth = (canvas.width * pageHeight) / canvas.height;
        const xOffset = (pageWidth - fittedWidth) / 2;
        pdf.addImage(imageData, 'JPEG', xOffset, 0, fittedWidth, pageHeight, undefined, 'FAST');
        return pdf.output('blob');
    }

    pdf.addImage(imageData, 'JPEG', 0, 0, pageWidth, imageHeight, undefined, 'FAST');
    return pdf.output('blob');
}

async function createMobilePdfBlob(pdfDocument, html2canvasOptions) {
    if (typeof window.html2canvas === 'function' && window.jspdf?.jsPDF) {
        const canvas = await withTimeout(
            window.html2canvas(pdfDocument.wrapper, html2canvasOptions),
            PDF_GENERATION_TIMEOUT_MS,
            'PDF preview generation took too long. Please try again after closing other tabs.'
        );

        if (!canvas.width || !canvas.height || !canvasHasVisibleContent(canvas)) {
            throw new Error('The PDF preview rendered blank. Please try the download again.');
        }

        return createPdfBlobFromCanvas(canvas);
    }

    return withTimeout(
        window.html2pdf().set({
            margin: 0,
            image: { type: 'jpeg', quality: 0.92 },
            html2canvas: html2canvasOptions,
            jsPDF: {
                unit: 'mm',
                format: 'a4',
                orientation: 'portrait',
                compress: true
            },
            pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
        }).from(pdfDocument.wrapper).outputPdf('blob'),
        PDF_GENERATION_TIMEOUT_MS,
        'PDF generation took too long. Please try again after closing other tabs.'
    );
}

async function handleMobilePdfDownload() {
    const data = getRenderableData();
    let pdfDocument;

    try {
        pdfDocument = createPdfDocument(data);
        await nextFrame();
        togglePdfLoader(true, t('preparingBiodata'));
        await ensurePdfEngine();
        const captureHeight = await preparePdfCapture(pdfDocument);

        setPdfLoaderMessage(t('generatingPdf'));

        const fileName = getPdfFileName(data);
        const html2canvasOptions = {
            scale: Math.min(1.45, window.devicePixelRatio || 1.25),
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            logging: false,
            imageTimeout: 15000,
            removeContainer: true,
            scrollX: 0,
            scrollY: 0,
            width: PDF_CAPTURE_WIDTH,
            height: captureHeight,
            windowWidth: PDF_CAPTURE_WIDTH,
            windowHeight: captureHeight
        };

        const blob = await createMobilePdfBlob(pdfDocument, html2canvasOptions);

        setPdfLoaderMessage(t('startingDownload'));
        triggerBlobDownload(blob, fileName);
        await wait(500);
    } catch (error) {
        console.error('Mobile PDF download failed:', error);
        alert(error.message || 'PDF download failed. Please try again.');
    } finally {
        pdfDocument?.wrapper?.remove();
        togglePdfLoader(false);
    }
}

function handleDownload() {
    const paper = document.getElementById('biodataPaper');
    if (!paper) return;

    if (isMobilePdfFlow()) {
        handleMobilePdfDownload();
        return;
    }

    const printWindow = window.open('', '_blank', 'width=800,height=1000');
    if (!printWindow) {
        alert('Please allow popups to download PDF');
        return;
    }

    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Marriage Biodata - ${getFormData().fullName || 'Biodata'}</title>
            <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
            <style>
                * { 
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }
                html, body {
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                    -webkit-print-color-adjust: exact !important;
                    print-color-adjust: exact !important;
                    color-adjust: exact !important;
                }
                body {
                    background: #fff;
                }
                @page {
                    margin: 0;
                    size: A4 portrait;
                }
                @media print {
                    html, body {
                        width: 210mm;
                        height: 297mm;
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                        color-adjust: exact !important;
                    }
                }
                /* Ensure all backgrounds print */
                * {
                    -webkit-print-color-adjust: exact !important;
                    print-color-adjust: exact !important;
                }
                /* Biodata container */
                .biodata-wrapper {
                    position: relative;
                    width: 210mm;
                    min-height: 297mm;
                    margin: 0 auto;
                    padding-bottom: 32px;
                }
                /* Watermark styling */
                .persistent-watermark {
                    position: absolute;
                    right: 12px;
                    bottom: 8px;
                    z-index: 100;
                    opacity: 0.85;
                    font-size: 9px;
                    font-weight: 500;
                    color: #888;
                    background: rgba(255,255,255,0.95);
                    padding: 3px 8px;
                    border-radius: 4px;
                    white-space: nowrap;
                    letter-spacing: 0.3px;
                }
                .persistent-watermark a {
                    color: #0070f3;
                    text-decoration: none;
                }
            </style>
        </head>
        <body>
            <div class="biodata-wrapper">
                ${paper.innerHTML}
            </div>
            <script>
                // Wait for fonts to load then print
                document.fonts.ready.then(function() {
                    setTimeout(function() {
                        window.print();
                        setTimeout(function() {
                            window.close();
                        }, 500);
                    }, 300);
                });
            <\/script>
        </body>
        </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
}

// ============================================
// Template Rendering
// ============================================
function renderTemplateThumbnails() {
    const container = document.getElementById('templateThumbnails');
    if (!container) return;
    
    container.innerHTML = templates.map((t, idx) => `
        <button class="template-thumb-btn ${idx === selectedTemplate ? 'selected' : ''}" data-idx="${idx}">
            <div style="font-size: 16px; font-weight: 700;">${idx + 1}</div>
            <div style="font-size: 10px; line-height: 1.2;">${t.name}</div>
        </button>
    `).join('');
    
    // Add click handlers
    container.querySelectorAll('.template-thumb-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            selectedTemplate = parseInt(btn.dataset.idx, 10);
            renderTemplateThumbnails();
            renderPreview();
        });
    });
}

function renderTemplateInto(target, data) {
    if (!target) return target;

    target.innerHTML = withLocalizedTemplateText(templates[selectedTemplate].render(data));

    const watermark = document.createElement('div');
    watermark.className = 'persistent-watermark';
    watermark.innerHTML = `${t('createdBy')} <a href="https://biodata-pro.in" target="_blank" rel="noopener noreferrer">biodata-pro.in</a>`;
    target.appendChild(watermark);

    return target;
}

function renderPreview() {
    const paper = document.getElementById('biodataPaper');
    if (!paper) return;

    renderTemplateInto(paper, getRenderableData());
    schedulePreviewScale();
}

let previewScaleFrame = null;

function schedulePreviewScale() {
    if (previewScaleFrame) {
        cancelAnimationFrame(previewScaleFrame);
    }
    previewScaleFrame = requestAnimationFrame(applyPreviewScale);
}

function applyPreviewScale() {
    previewScaleFrame = null;
    const wrapper = document.querySelector('.preview-wrapper');
    const scaleContainer = document.getElementById('previewScale');
    if (!wrapper || !scaleContainer) return;

    const targetWidth = 600;
    const availableWidth = wrapper.clientWidth;
    if (!availableWidth) return;

    const scale = Math.min(1, availableWidth / targetWidth);
    scaleContainer.style.transformOrigin = 'top center';

    if (scale < 1) {
        scaleContainer.style.transform = `scale(${scale})`;
        const scaledHeight = scaleContainer.getBoundingClientRect().height;
        wrapper.style.minHeight = `${scaledHeight}px`;
    } else {
        scaleContainer.style.transform = '';
        wrapper.style.minHeight = '';
    }
}

// ============================================
// Template Gallery (Landing Page)
// ============================================
function renderTemplateGallery() {
    const gallery = document.getElementById('templateGallery');
    if (!gallery) return;
    
    // Show first 6 templates in the gallery
    const displayTemplates = templates.slice(0, 6);
    
    gallery.innerHTML = displayTemplates.map((template, idx) => {
        const badge = templateBadges[idx];
        const badgeHtml = badge ? `<span class="template-badge${badge === 'New' ? ' new' : ''}">${badge}</span>` : '';
        
        return `
            <div class="template-item" data-template-idx="${idx}">
                <div class="template-card">
                    ${badgeHtml}
                    <div class="template-preview-container" id="galleryPreview${idx}"></div>
                </div>
                <span class="template-name">${template.name}</span>
            </div>
        `;
    }).join('');
    
    // Render each template with sample data and apply scale
    displayTemplates.forEach((template, idx) => {
        const container = document.getElementById(`galleryPreview${idx}`);
        if (container) {
            container.innerHTML = withLocalizedTemplateText(template.render(sampleData));
            
            // Calculate scale based on card width
            requestAnimationFrame(() => {
                const card = container.closest('.template-card');
                if (card) {
                    const cardWidth = card.offsetWidth;
                    const scale = cardWidth / 600; // 600px is the template width
                    container.style.transform = `scale(${scale})`;
                }
            });
        }
    });
    
    // Add click handlers to scroll to create section
    gallery.querySelectorAll('.template-item').forEach(item => {
        item.addEventListener('click', () => {
            const createSection = document.getElementById('create');
            if (createSection) {
                createSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Handle window resize to recalculate scale
function handleGalleryResize() {
    const gallery = document.getElementById('templateGallery');
    if (!gallery) return;
    
    gallery.querySelectorAll('.template-preview-container').forEach(container => {
        const card = container.closest('.template-card');
        if (card) {
            const cardWidth = card.offsetWidth;
            const scale = cardWidth / 600;
            container.style.transform = `scale(${scale})`;
        }
    });
}

// ============================================
// Modal Management
// ============================================
function showModal() {
    const modal = document.getElementById('templateModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        renderTemplateThumbnails();
        renderPreview();
    }
}

function hideModal() {
    const modal = document.getElementById('templateModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ============================================
// Photo Upload
// ============================================
function handlePhotoUpload(e) {
    const file = e.target.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
            profilePhoto = ev.target.result;
            
            // Update preview
            const preview = document.getElementById('photoPreview');
            const placeholder = document.getElementById('photoPlaceholder');
            
            if (preview && placeholder) {
                preview.src = profilePhoto;
                preview.style.display = 'block';
                placeholder.style.display = 'none';
            }
            
            // Re-render if modal is open
            if (document.getElementById('templateModal')?.classList.contains('active')) {
                renderPreview();
            }
        };
        reader.readAsDataURL(file);
    }
}

// ============================================
// Tab Navigation
// ============================================
function handleTabClick(e) {
    const tab = e.target.closest('.form-tab');
    if (!tab) return;
    
    const tabName = tab.dataset.tab;
    switchToTab(tabName);
}

function switchToTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.form-tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`.form-tab[data-tab="${tabName}"]`)?.classList.add('active');
    
    // Update tab contents
    document.querySelectorAll('.form-tab-content').forEach(c => c.classList.remove('active'));
    document.getElementById(tabName + 'Tab')?.classList.add('active');
    
    // Scroll to top of form
    const formPanel = document.querySelector('.form-panel');
    if (formPanel) {
        formPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ============================================
// Initialization
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Preview button
    const previewBtn = document.getElementById('previewBtn');
    const phoneInput = document.getElementById('contactNumber');
    const emailInput = document.getElementById('email');
    const languageSelect = document.getElementById('languageSelect');

    phoneInput?.addEventListener('input', () => phoneInput.setCustomValidity(''));
    emailInput?.addEventListener('input', () => emailInput.setCustomValidity(''));
    applyLanguage(detectLanguageFromUrl());

    languageSelect?.addEventListener('change', (event) => {
        applyLanguage(event.target.value);
    });

    previewBtn?.addEventListener('click', () => {
        if (!validateContactInfo()) return;
        showModal();
    });
    
    // Close modal
    document.getElementById('closeModal')?.addEventListener('click', hideModal);
    document.querySelector('.modal-overlay')?.addEventListener('click', hideModal);
    
    // Download button
    document.getElementById('downloadBtn')?.addEventListener('click', handleDownload);
    
    // Photo upload
    const photoUploadArea = document.getElementById('photoUploadArea');
    const photoInput = document.getElementById('photoInput');
    
    photoUploadArea?.addEventListener('click', () => photoInput?.click());
    photoInput?.addEventListener('change', handlePhotoUpload);
    
    // Tab navigation
    document.querySelectorAll('.form-tab').forEach(tab => {
        tab.addEventListener('click', handleTabClick);
    });
    
    // Next/Previous button navigation
    document.querySelectorAll('.btn-nav-next').forEach(btn => {
        btn.addEventListener('click', () => {
            const nextTab = btn.dataset.next;
            if (nextTab) switchToTab(nextTab);
        });
    });
    
    document.querySelectorAll('.btn-nav-prev').forEach(btn => {
        btn.addEventListener('click', () => {
            const prevTab = btn.dataset.prev;
            if (prevTab) switchToTab(prevTab);
        });
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') hideModal();
    });
    
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // Age auto-calculation from DOB
    document.getElementById('dob')?.addEventListener('change', (e) => {
        const dob = new Date(e.target.value);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
        
        if (age >= 18 && age <= 99) {
            document.getElementById('age').value = age;
        }
    });
    
    // Field removal buttons
    document.querySelectorAll('.field-remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const formGroup = btn.closest('.form-group');
            if (!formGroup) return;
            
            const fieldName = formGroup.dataset.field;
            if (!fieldName) return;
            
            // Don't allow removing mandatory fields
            if (formGroup.dataset.mandatory === 'true') {
                return;
            }
            
            // Remove the field
            removeField(fieldName);
            
            // Show a toast notification
            showFieldRemovedToast(fieldName);
        });
    });
    
    // Render template gallery on landing page
    renderTemplateGallery();
    
    // Handle window resize for gallery scaling
    let resizeTimeout;
    window.addEventListener('resize', () => {
        schedulePreviewScale();
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(handleGalleryResize, 150);
    });
    
    console.log('✨ biodata-pro - Premium Marriage Biodata Maker initialized');
});

// Field removed toast notification
function showFieldRemovedToast(fieldName) {
    // Remove any existing toast
    document.querySelector('.field-toast')?.remove();
    
    const toast = document.createElement('div');
    toast.className = 'field-toast';
    toast.innerHTML = `
        <span>Field removed</span>
        <button class="toast-undo-btn" data-field="${fieldName}">Undo</button>
    `;
    document.body.appendChild(toast);
    
    // Add undo handler
    toast.querySelector('.toast-undo-btn').addEventListener('click', () => {
        restoreField(fieldName);
        toast.remove();
    });
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

const phoneRegex = /^\+?[0-9\s-]{10,13}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateContactInfo() {
    const phoneInput = document.getElementById('contactNumber');
    const emailInput = document.getElementById('email');
    if (!phoneInput) return true;

    const phone = phoneInput.value.trim();
    if (phone && !phoneRegex.test(phone)) {
        phoneInput.setCustomValidity('Enter a valid mobile number (10-13 digits).');
        phoneInput.reportValidity();
        return false;
    }
    phoneInput.setCustomValidity('');

    const email = emailInput?.value.trim() || '';
    if (email && !emailRegex.test(email)) {
        emailInput.setCustomValidity('Enter a valid email address.');
        emailInput.reportValidity();
        return false;
    }
    if (emailInput) emailInput.setCustomValidity('');

    return true;
}
