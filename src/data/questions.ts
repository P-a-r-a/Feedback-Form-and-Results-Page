import { Language, QuestionSet } from "@/types";

// NOTE ON TRANSLATIONS
// The Sinhala and Tamil copy below is a best-effort translation meant to get
// you a working multilingual form quickly. Please have a native speaker
// review the wording before this goes live with real customers.

export const questionSets: Record<Language, QuestionSet> = {
  en: {
    strings: {
      languagePrompt: "Choose your language",
      languageSubtitle: "Select the language you'd like to use for this feedback form.",
      next: "Next",
      back: "Back",
      submit: "Submit",
      yes: "Yes",
      no: "No",
      unsure: "Maybe",
      progressLabel: (step, total) => `Question ${step} of ${total}`,
      thankYouTitle: "Thank you for your feedback!",
      thankYouBody: "Your response helps us make better matcha.",
      viewResults: "View collected results",
      startOver: "Start over",
      placeholderText: "Type your answer here...",
    },
    intro: [
      {
        id: "intro1",
        type: "choice",
        text: "Have you had matcha before, or is this your first time trying it?",
        options: [
          { value: "had_before", label: "I've had it before" },
          { value: "first_time", label: "This is my first time" },
        ],
      },
      {
        id: "intro2",
        type: "choice",
        text: "How often do you typically drink matcha?",
        options: [
          { value: "daily", label: "Daily" },
          { value: "weekly", label: "Weekly" },
          { value: "rarely", label: "Rarely" },
          { value: "first_time", label: "This is my first time" },
        ],
      },
    ],
    anchor: {
      id: "anchor",
      type: "yesno",
      text: "Did you enjoy the taste of the matcha sample?",
    },
    pathA: [
      { id: "a1", type: "yesno", text: "Did you find the matcha milkshake refreshing?" },
      {
        id: "a2",
        type: "choice",
        text: "What did you like most about the flavor?",
        options: [
          { value: "unique_flavour", label: "The unique flavour" },
          { value: "natural_sweetness", label: "The natural sweetness" },
          { value: "earthy_taste", label: "The earthy taste" },
          { value: "smooth_creamy", label: "The smooth and creamy texture" },
        ],
      },
      { id: "a3", type: "yesno", text: "Would you like to try it again?" },
      {
        id: "a4",
        type: "choice",
        text: "How do you usually prefer your matcha prepared?",
        options: [
          { value: "iced_latte", label: "Iced Latte" },
          { value: "hot_latte", label: "Hot Latte" },
          { value: "traditional_mix", label: "Traditional Mix" },
          { value: "other", label: "Other" },
        ],
      },
      { id: "a5", type: "yesno", text: "Would you consider buying our matcha to make at home?" },
      { id: "a6", type: "yesno", text: "Would you recommend our matcha to a friend?" },
      { id: "a7", type: "yesno", text: "Would you follow us on social media for future pop-ups or discounts?" },
    ],
    pathB: [
      {
        id: "b1",
        type: "choice",
        text: "Was there a specific aspect of the taste you didn't enjoy?",
        options: [
          { value: "too_bitter", label: "Too bitter" },
          { value: "too_sweet", label: "Too sweet" },
          { value: "too_grassy", label: "Too grassy" },
          { value: "texture_issue", label: "Texture issue" },
          { value: "other", label: "Other" },
        ],
      },
      {
        id: "b2",
        type: "choice",
        text: "What do you normally prefer to drink at a cafe?",
        options: [
          { value: "warm_coffee_tea", label: "Warm Coffee or Tea" },
          { value: "iced_coffee_tea", label: "Iced Coffee or Tea" },
          { value: "milkshakes", label: "Milkshakes" },
          { value: "smoothies", label: "Smoothies" },
          { value: "fresh_drinks", label: "Fresh Drinks" },
          { value: "other", label: "Other" },
        ],
      },
      {
        id: "b3",
        type: "yesno",
        text: "If we adjusted the recipe (e.g., change the sweetness level, change the intensity of the flavour), would you like to try it again?",
      },
      { id: "b4", type: "yesno", text: "Would you consider trying a different flavor from us in the future?" },
      { id: "b5", type: "text", text: "What could we have done to make the sample better for you?", optional: true },
    ],
    pathC: [
      {
        id: "c1",
        type: "choice",
        text: "Did you find the matcha milkshake refreshing, or was the flavor a bit overwhelming?",
        options: [
          { value: "refreshing", label: "It was refreshing" },
          { value: "overwhelming", label: "The flavour was too overwhelming" },
          { value: "neutral", label: "I neither liked nor disliked it" },
        ],
      },
      { id: "c2", type: "yesno", text: "Was the sweetness level right for you?" },
      {
        id: "c3",
        type: "choice",
        text: "How does this compare to other matcha brands you've tried?",
        options: [
          { value: "better", label: "Better" },
          { value: "worse", label: "Worse" },
          { value: "about_same", label: "About the same" },
          { value: "never_tried", label: "I haven't tried other brands" },
        ],
      },
      { id: "c4", type: "yesno", text: "Would you like to try it again with a different milk alternative?" },
      {
        id: "c5",
        type: "choice",
        text: "What would affect your choice of buying matcha?",
        options: [
          { value: "health_benefits", label: "The health benefits" },
          { value: "taste", label: "The taste" },
          { value: "price", label: "The price" },
          { value: "other", label: "Other" },
        ],
      },
      {
        id: "c6",
        type: "choice",
        text: "If you were to drink this again, would you prefer it hot or iced?",
        options: [
          { value: "hot", label: "Hot" },
          { value: "iced", label: "Iced" },
        ],
      },
    ],
    final: [
      { id: "final_recommend", type: "yesno", text: "Would you recommend our matcha to friends or family?" },
      { id: "final", type: "stars", text: "How would you rate our matcha overall?" },
    ],
  },

  si: {
    strings: {
      languagePrompt: "ඔබේ භාෂාව තෝරන්න",
      languageSubtitle: "මෙම ප්‍රතිචාර පත්‍රය සඳහා ඔබ කැමති භාෂාව තෝරන්න.",
      next: "ඊළඟ",
      back: "ආපසු",
      submit: "යොමු කරන්න",
      yes: "ඔව්",
      no: "නැත",
      unsure: "සමහරවිට",
      progressLabel: (step, total) => `ප්‍රශ්නය ${step} න් ${total}`,
      thankYouTitle: "ඔබේ ප්‍රතිචාරයට ස්තූතියි!",
      thankYouBody: "ඔබේ ප්‍රතිචාරය වඩාත් හොඳ මැච්චා සෑදීමට අපට උපකාරී වේ.",
      viewResults: "රැස් කළ ප්‍රතිඵල බලන්න",
      startOver: "නැවත ආරම්භ කරන්න",
      placeholderText: "ඔබේ පිළිතුර මෙහි ටයිප් කරන්න...",
    },
    intro: [
      {
        id: "intro1",
        type: "choice",
        text: "ඔබ මීට පෙර මැච්චා පානය කර ඇතිද, නැතිනම් මෙය ඔබේ පළමු වතාවද?",
        options: [
          { value: "had_before", label: "මම මීට පෙර එය භාවිත කර ඇත" },
          { value: "first_time", label: "මෙය මගේ පළමු වතාවයි" },
        ],
      },
      {
        id: "intro2",
        type: "choice",
        text: "ඔබ සාමාන්‍යයෙන් මැච්චා පානය කරන්නේ කොපමණ වාරයක්ද?",
        options: [
          { value: "daily", label: "දිනපතා" },
          { value: "weekly", label: "සතිපතා" },
          { value: "rarely", label: "කලාතුරකින්" },
          { value: "first_time", label: "මෙය මගේ පළමු වතාවයි" },
        ],
      },
    ],
    anchor: {
      id: "anchor",
      type: "yesno",
      text: "මැච්චා නියැදියේ රසය ඔබට රසවත් වුනාද?",
    },
    pathA: [
      { id: "a1", type: "yesno", text: "මැච්චා මිල්ක්ෂේක් එක නැවුම් බවක් දැනුනාද?" },
      {
        id: "a2",
        type: "choice",
        text: "රසයේ ඔබට වඩාත්ම කැමති වුනේ කුමක්ද?",
        options: [
          { value: "unique_flavour", label: "සුවිශේෂී රසය" },
          { value: "natural_sweetness", label: "ස්වභාවික මිහිරි බව" },
          { value: "earthy_taste", label: "පොළොව රසය" },
          { value: "smooth_creamy", label: "සිනිඳු හා ක්‍රීමී වයනය" },
        ],
      },
      { id: "a3", type: "yesno", text: "ඔබ එය නැවත උත්සාහ කිරීමට කැමතිද?" },
      {
        id: "a4",
        type: "choice",
        text: "ඔබ සාමාන්‍යයෙන් මැච්චා සකස් කිරීමට කැමති ආකාරය කුමක්ද?",
        options: [
          { value: "iced_latte", label: "අයිස් ලැටේ" },
          { value: "hot_latte", label: "උණුසුම් ලැටේ" },
          { value: "traditional_mix", label: "සාම්ප්‍රදායික මිශ්‍රණය" },
          { value: "other", label: "වෙනත්" },
        ],
      },
      { id: "a5", type: "yesno", text: "ගෙදර සාදා ගැනීමට අපගේ මැච්චා මිලදී ගැනීමට ඔබ සලකා බලනවාද?" },
      { id: "a6", type: "yesno", text: "ඔබ අපගේ මැච්චා මිතුරෙකුට නිර්දේශ කරනවාද?" },
      { id: "a7", type: "yesno", text: "අනාගත pop-up අවස්ථා හෝ වට්ටම් සඳහා ඔබ අපව සමාජ මාධ්‍යවල අනුගමනය කරනවාද?" },
    ],
    pathB: [
      {
        id: "b1",
        type: "choice",
        text: "රසයේ ඔබට කැමති නොවූ විශේෂිත අංගයක් තිබුනාද?",
        options: [
          { value: "too_bitter", label: "ඉතා තිත්තයි" },
          { value: "too_sweet", label: "ඉතා මිහිරියි" },
          { value: "too_grassy", label: "ඉතා තණකොළ රසය" },
          { value: "texture_issue", label: "වයනය පිළිබඳ ගැටලුවක්" },
          { value: "other", label: "වෙනත්" },
        ],
      },
      {
        id: "b2",
        type: "choice",
        text: "සාමාන්‍යයෙන් කැෆේ එකකදී ඔබ කැමති පානය කුමක්ද?",
        options: [
          { value: "warm_coffee_tea", label: "උණුසුම් කෝපි හෝ තේ" },
          { value: "iced_coffee_tea", label: "අයිස් කෝපි හෝ තේ" },
          { value: "milkshakes", label: "මිල්ක්ෂේක්" },
          { value: "smoothies", label: "ස්මූති" },
          { value: "fresh_drinks", label: "නැවුම් පාන" },
          { value: "other", label: "වෙනත්" },
        ],
      },
      {
        id: "b3",
        type: "yesno",
        text: "අපි වට්ටෝරුව වෙනස් කළහොත් (උදා: මිහිරි බව වෙනස් කිරීම, රසයේ තීව්‍රතාවය වෙනස් කිරීම), ඔබ එය නැවත උත්සාහ කිරීමට කැමතිද?",
      },
      { id: "b4", type: "yesno", text: "අනාගතයේදී අප වෙතින් වෙනස් රසයක් උත්සාහ කිරීමට ඔබ සලකා බලනවාද?" },
      { id: "b5", type: "text", text: "නියැදිය ඔබට වඩාත් හොඳ කිරීමට අපට කළ හැකිව තිබුනේ කුමක්ද?", optional: true },
    ],
    pathC: [
      {
        id: "c1",
        type: "choice",
        text: "මැච්චා මිල්ක්ෂේක් එක නැවුම් බවක් දැනුනාද, නැතිනම් රසය තරමක් අධික බවක් දැනුනාද?",
        options: [
          { value: "refreshing", label: "එය නැවුම් විය" },
          { value: "overwhelming", label: "රසය ඉතා අධික විය" },
          { value: "neutral", label: "මට කැමති හෝ අකමැති බවක් දැනුනේ නැත" },
        ],
      },
      { id: "c2", type: "yesno", text: "මිහිරි බව ඔබට හරියටම සුදුසු වුනාද?" },
      {
        id: "c3",
        type: "choice",
        text: "ඔබ උත්සාහ කර ඇති අනෙකුත් මැච්චා වෙළඳ නාම හා සසඳන විට මෙය කෙසේද?",
        options: [
          { value: "better", label: "වඩා හොඳයි" },
          { value: "worse", label: "අඩුයි" },
          { value: "about_same", label: "දළ වශයෙන් සමානයි" },
          { value: "never_tried", label: "මම වෙනත් නාම උත්සාහ කර නැත" },
        ],
      },
      { id: "c4", type: "yesno", text: "වෙනස් කිරි විකල්පයක් සමඟ නැවත උත්සාහ කිරීමට ඔබ කැමතිද?" },
      {
        id: "c5",
        type: "choice",
        text: "මැච්චා මිලදී ගැනීමේ ඔබේ තේරීමට බලපාන්නේ කුමක්ද?",
        options: [
          { value: "health_benefits", label: "සෞඛ්‍ය ප්‍රතිලාභ" },
          { value: "taste", label: "රසය" },
          { value: "price", label: "මිල" },
          { value: "other", label: "වෙනත්" },
        ],
      },
      {
        id: "c6",
        type: "choice",
        text: "ඔබ මෙය නැවත පානය කරන්නේ නම්, උණුසුම් හෝ අයිස් සහිතව කැමති වන්නේ?",
        options: [
          { value: "hot", label: "උණුසුම්" },
          { value: "iced", label: "අයිස් සහිත" },
        ],
      },
    ],
    final: [
      { id: "final_recommend", type: "yesno", text: "ඔබ අපගේ මැච්චා මිතුරන්ට හෝ පවුලේ අයට නිර්දේශ කරනවාද?" },
      { id: "final", type: "stars", text: "සමස්තයක් වශයෙන් ඔබ අපගේ මැච්චා අගයන්නේ කෙසේද?" },
    ],
  },

  ta: {
    strings: {
      languagePrompt: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
      languageSubtitle: "இந்த கருத்துப் படிவத்திற்கு நீங்கள் விரும்பும் மொழியைத் தேர்ந்தெடுக்கவும்.",
      next: "அடுத்து",
      back: "பின்செல்",
      submit: "சமர்ப்பிக்க",
      yes: "ஆம்",
      no: "இல்லை",
      unsure: "ஒருவேளை",
      progressLabel: (step, total) => `கேள்வி ${step} / ${total}`,
      thankYouTitle: "உங்கள் கருத்துக்கு நன்றி!",
      thankYouBody: "உங்கள் பதில் சிறந்த மட்சாவை உருவாக்க எங்களுக்கு உதவுகிறது.",
      viewResults: "சேகரிக்கப்பட்ட முடிவுகளைப் பார்க்க",
      startOver: "மீண்டும் தொடங்கு",
      placeholderText: "உங்கள் பதிலை இங்கே தட்டச்சு செய்யவும்...",
    },
    intro: [
      {
        id: "intro1",
        type: "choice",
        text: "இதற்கு முன் மட்சா அருந்தியிருக்கிறீர்களா, அல்லது இதுவே முதல் முறையா?",
        options: [
          { value: "had_before", label: "முன்பே அருந்தியிருக்கிறேன்" },
          { value: "first_time", label: "இதுவே எனது முதல் முறை" },
        ],
      },
      {
        id: "intro2",
        type: "choice",
        text: "நீங்கள் வழக்கமாக மட்சா அருந்துவது எவ்வளவு அடிக்கடி?",
        options: [
          { value: "daily", label: "தினமும்" },
          { value: "weekly", label: "வாரம் தோறும்" },
          { value: "rarely", label: "அரிதாக" },
          { value: "first_time", label: "இதுவே எனது முதல் முறை" },
        ],
      },
    ],
    anchor: {
      id: "anchor",
      type: "yesno",
      text: "மட்சா மாதிரியின் சுவை உங்களுக்குப் பிடித்திருந்ததா?",
    },
    pathA: [
      { id: "a1", type: "yesno", text: "மட்சா மில்க்ஷேக் புத்துணர்ச்சியாக இருந்ததா?" },
      {
        id: "a2",
        type: "choice",
        text: "சுவையில் உங்களுக்கு மிகவும் பிடித்தது எது?",
        options: [
          { value: "unique_flavour", label: "தனித்துவமான சுவை" },
          { value: "natural_sweetness", label: "இயற்கையான இனிப்பு" },
          { value: "earthy_taste", label: "மண் வாசனை சுவை" },
          { value: "smooth_creamy", label: "மென்மையான மற்றும் க்ரீமி அமைப்பு" },
        ],
      },
      { id: "a3", type: "yesno", text: "மீண்டும் முயற்சிக்க விரும்புகிறீர்களா?" },
      {
        id: "a4",
        type: "choice",
        text: "நீங்கள் வழக்கமாக மட்சாவை எப்படி தயார் செய்ய விரும்புவீர்கள்?",
        options: [
          { value: "iced_latte", label: "ஐஸ் லாட்டே" },
          { value: "hot_latte", label: "சூடான லாட்டே" },
          { value: "traditional_mix", label: "பாரம்பரிய கலவை" },
          { value: "other", label: "மற்றவை" },
        ],
      },
      { id: "a5", type: "yesno", text: "வீட்டில் தயாரிக்க எங்கள் மட்சாவை வாங்க யோசிப்பீர்களா?" },
      { id: "a6", type: "yesno", text: "எங்கள் மட்சாவை ஒரு நண்பருக்கு பரிந்துரைப்பீர்களா?" },
      { id: "a7", type: "yesno", text: "எதிர்கால பாப்-அப் நிகழ்வுகள் அல்லது தள்ளுபடிகளுக்காக எங்களை சமூக ஊடகங்களில் பின்தொடர்வீர்களா?" },
    ],
    pathB: [
      {
        id: "b1",
        type: "choice",
        text: "சுவையில் உங்களுக்குப் பிடிக்காத ஒரு குறிப்பிட்ட அம்சம் இருந்ததா?",
        options: [
          { value: "too_bitter", label: "மிகவும் கசப்பு" },
          { value: "too_sweet", label: "மிகவும் இனிப்பு" },
          { value: "too_grassy", label: "மிகவும் புல் வாசனை" },
          { value: "texture_issue", label: "அமைப்பு பிரச்சனை" },
          { value: "other", label: "மற்றவை" },
        ],
      },
      {
        id: "b2",
        type: "choice",
        text: "பொதுவாக ஒரு கஃபேயில் நீங்கள் எதைக் குடிக்க விரும்புவீர்கள்?",
        options: [
          { value: "warm_coffee_tea", label: "சூடான காபி அல்லது தேநீர்" },
          { value: "iced_coffee_tea", label: "ஐஸ் காபி அல்லது தேநீர்" },
          { value: "milkshakes", label: "மில்க்ஷேக்குகள்" },
          { value: "smoothies", label: "ஸ்மூத்திகள்" },
          { value: "fresh_drinks", label: "புதிய பானங்கள்" },
          { value: "other", label: "மற்றவை" },
        ],
      },
      {
        id: "b3",
        type: "yesno",
        text: "செய்முறையை நாங்கள் மாற்றினால் (எ.கா., இனிப்புத் தன்மையை மாற்றுதல், சுவையின் தீவிரத்தை மாற்றுதல்), மீண்டும் முயற்சிக்க விரும்புவீர்களா?",
      },
      { id: "b4", type: "yesno", text: "எதிர்காலத்தில் எங்களிடமிருந்து வேறு சுவையை முயற்சிக்க யோசிப்பீர்களா?" },
      { id: "b5", type: "text", text: "மாதிரியை உங்களுக்காக மேலும் சிறப்பாக்க நாங்கள் என்ன செய்திருக்கலாம்?", optional: true },
    ],
    pathC: [
      {
        id: "c1",
        type: "choice",
        text: "மட்சா மில்க்ஷேக் புத்துணர்ச்சியாக இருந்ததா, அல்லது சுவை சற்று அதிகமாக இருந்ததா?",
        options: [
          { value: "refreshing", label: "அது புத்துணர்ச்சியாக இருந்தது" },
          { value: "overwhelming", label: "சுவை மிகவும் அதிகமாக இருந்தது" },
          { value: "neutral", label: "எனக்குப் பிடிக்கவும் இல்லை பிடிக்காமலும் இல்லை" },
        ],
      },
      { id: "c2", type: "yesno", text: "இனிப்புத் தன்மை உங்களுக்குச் சரியாக இருந்ததா?" },
      {
        id: "c3",
        type: "choice",
        text: "நீங்கள் முயற்சித்த மற்ற மட்சா பிராண்டுகளுடன் ஒப்பிடும்போது இது எப்படி இருந்தது?",
        options: [
          { value: "better", label: "சிறப்பானது" },
          { value: "worse", label: "மோசமானது" },
          { value: "about_same", label: "கிட்டத்தட்ட ஒரே மாதிரி" },
          { value: "never_tried", label: "நான் மற்ற பிராண்டுகளை முயற்சிக்கவில்லை" },
        ],
      },
      { id: "c4", type: "yesno", text: "வேறு பால் மாற்றுடன் மீண்டும் முயற்சிக்க விரும்புவீர்களா?" },
      {
        id: "c5",
        type: "choice",
        text: "மட்சா வாங்குவதற்கான உங்கள் தேர்வை என்ன பாதிக்கும்?",
        options: [
          { value: "health_benefits", label: "ஆரோக்கிய நன்மைகள்" },
          { value: "taste", label: "சுவை" },
          { value: "price", label: "விலை" },
          { value: "other", label: "மற்றவை" },
        ],
      },
      {
        id: "c6",
        type: "choice",
        text: "நீங்கள் இதை மீண்டும் அருந்தினால், சூடாகவா அல்லது குளிர்ந்ததாகவா விரும்புவீர்கள்?",
        options: [
          { value: "hot", label: "சூடானது" },
          { value: "iced", label: "குளிர்ந்தது" },
        ],
      },
    ],
    final: [
      { id: "final_recommend", type: "yesno", text: "எங்கள் மட்சாவை நண்பர்கள் அல்லது குடும்பத்தினருக்கு பரிந்துரைப்பீர்களா?" },
      { id: "final", type: "stars", text: "ஒட்டுமொத்தமாக எங்கள் மட்சாவை நீங்கள் எவ்வாறு மதிப்பிடுவீர்கள்?" },
    ],
  },
};

export const languageLabels: Record<Language, string> = {
  en: "English",
  si: "සිංහල",
  ta: "தமிழ்",
};
