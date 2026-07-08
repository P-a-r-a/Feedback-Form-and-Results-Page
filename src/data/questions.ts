import { Language, QuestionSet } from "@/types";

// NOTE ON TRANSLATIONS
// The Sinhala and Tamil copy below has been updated to sound natural, polite,
// and tailored to a consumer consumer sachet context.

export const questionSets: Record<Language, QuestionSet> = {
  en: {
    strings: {
      languagePrompt: "Matcha by teaTel",
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
        id: "q1_prior_experience",
        type: "choice",
        text: "Have you had matcha before, or is this your first time trying it?",
        options: [
          { value: "had_before", label: "I’ve had it before" },
          { value: "first_time", label: "This is my first time" },
        ],
      },
      {
        id: "q2_frequency",
        type: "choice",
        text: "How often do you typically drink matcha?",
        options: [
          { value: "daily", label: "Daily" },
          { value: "weekly", label: "Weekly" },
          { value: "rarely", label: "Rarely" },
          { value: "first_time", label: "This is my first time" },
        ],
      },
      {
        id: "q3_taste_enjoyment",
        type: "choice", // Modified to choice to support Yes/No/Maybe as explicitly requested
        text: "Did you enjoy the taste of the matcha sample?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
          { value: "maybe", label: "Maybe" },
        ],
      },
      {
        id: "q4_taste_dislikes",
        type: "choice",
        text: "Was there a specific aspect of the taste you didn't enjoy?",
        options: [
          { value: "too_bitter", label: "Too bitter" },
          { value: "too_sweet", label: "Too sweet" },
          { value: "too_grassy", label: "Too grassy" },
          { value: "texture_issue", label: "Texture issue" },
          { value: "enjoyed_it", label: "I enjoyed it" },
          { value: "other", label: "Other" },
        ],
      },
      {
        id: "q5_preparation",
        type: "choice",
        text: "How did you prepare your matcha sample at home?",
        options: [
          { value: "iced_latte", label: "Iced Latte" },
          { value: "hot_latte", label: "Hot Latte" },
          { value: "traditional_mix", label: "Traditional Mix (Water only)" },
          { value: "other", label: "Other" },
        ],
      },
      {
        id: "q6_convenience",
        type: "choice",
        text: "How would you rate the convenience of making this sachet compared to store-bought matcha?",
        options: [
          { value: "much_easier", label: "Much easier to make" },
          { value: "about_same", label: "About the same" },
          { value: "more_difficult", label: "More difficult" },
        ],
      },
      {
        id: "q7_taste_comparison",
        type: "choice",
        text: "How did the taste of your homemade cup compare to a standard store-bought or cafe matcha?",
        options: [
          { value: "better_than_cafe", label: "Better than a cafe" },
          { value: "about_same", label: "About the same" },
          { value: "cafe_better", label: "Cafe/Store is better" },
        ],
      },
      {
        id: "q8_purchase_intent",
        type: "yesno",
        text: "Would you consider buying our matcha sachets for your home routine?",
      },
      {
        id: "q9_improvement_suggestions",
        type: "text",
        text: "What could we have done to make the home sachet experience better for you?",
        optional: true,
      },
    ],
    // Empty path nodes to prevent breaks if your rendering engine references them
    anchor: null as any,
    pathA: [],
    pathB: [],
    pathC: [],
    final: [
      { id: "q10_recommend", type: "yesno", text: "Would you recommend our matcha to friends or family?" },
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
        id: "q1_prior_experience",
        type: "choice",
        text: "ඔබ මීට පෙර මැච්චා පානය කර ඇතිද, නැතිනම් මෙය ඔබේ පළමු වතාවද?",
        options: [
          { value: "had_before", label: "මම මීට පෙර එය පානය කර ඇත" },
          { value: "first_time", label: "මෙය මගේ පළමු වතාවයි" },
        ],
      },
      {
        id: "q2_frequency",
        type: "choice",
        text: "ඔබ සාමාන්‍යයෙන් මැච්චා පානය කරන්නේ කොපමණ වාරයක්ද?",
        options: [
          { value: "daily", label: "දිනපතා" },
          { value: "weekly", label: "සතිපතා" },
          { value: "rarely", label: "කලාතුරකින්" },
          { value: "first_time", label: "මෙය මගේ පළමු වතාවයි" },
        ],
      },
      {
        id: "q3_taste_enjoyment",
        type: "choice",
        text: "මැච්චා නියැදියේ රසයට ඔබ කැමති වුණාද?",
        options: [
          { value: "yes", label: "ඔව්" },
          { value: "no", label: "නැත" },
          { value: "maybe", label: "සමහරවිට" },
        ],
      },
      {
        id: "q4_taste_dislikes",
        type: "choice",
        text: "රසයේ ඔබට කැමති නොවූ විශේෂිත යමක් තිබුණාද?",
        options: [
          { value: "too_bitter", label: "ඉතා තිත්තයි" },
          { value: "too_sweet", label: "ඉතා පැණිරසයි" },
          { value: "too_grassy", label: "තණකොළ රස වැඩියි" },
          { value: "texture_issue", label: "ඝනත්වයේ/වයනයේ ගැටලුවක්" },
          { value: "enjoyed_it", label: "මම රසයට කැමති වුණා" },
          { value: "other", label: "වෙනත්" },
        ],
      },
      {
        id: "q5_preparation",
        type: "choice",
        text: "ඔබ නිවසේදී මැච්චා නියැදිය සකස් කරගත්තේ කෙසේද?",
        options: [
          { value: "iced_latte", label: "අයිස් ලැටේ (Iced Latte)" },
          { value: "hot_latte", label: "උණුසුම් ලැටේ (Hot Latte)" },
          { value: "traditional_mix", label: "සාම්ප්‍රදායික ක්‍රමයට (වතුර පමණක් එක්කර)" },
          { value: "other", label: "වෙනත්" },
        ],
      },
      {
        id: "q6_convenience",
        type: "choice",
        text: "කඩෙන් මිලදී ගන්නා මැච්චා සකස් කිරීමට සාපේක්ෂව මෙම පැකැට්ටුව (Sachet) භාවිත කිරීමේ පහසුව ඔබ අගය කරන්නේ කෙසේද?",
        options: [
          { value: "much_easier", label: "සකස් කිරීම ඉතා පහසුයි" },
          { value: "about_same", label: "දළ වශයෙන් සමානයි" },
          { value: "more_difficult", label: "වඩා අපහසුයි" },
        ],
      },
      {
        id: "q7_taste_comparison",
        type: "choice",
        text: "ඔබ නිවසේදී සාදාගත් මැච්චා කෝප්පයේ රසය, සාමාන්‍ය කඩයකින් හෝ කැෆේ (Cafe) එකකින් ගන්නා මැච්චා රසය සමඟ සැසඳීමේදී කෙසේද?",
        options: [
          { value: "better_than_cafe", label: "කැෆේ එකකට වඩා හොඳයි" },
          { value: "about_same", label: "දළ වශයෙන් සමානයි" },
          { value: "cafe_better", label: "කැෆේ/කඩේ රසය වඩා හොඳයි" },
        ],
      },
      {
        id: "q8_purchase_intent",
        type: "yesno",
        text: "ඔබේ දෛනික නිවසේ භාවිතය සඳහා අපගේ මැච්චා පැකැට් (Sachets) මිලදී ගැනීමට ඔබ කැමතිද?",
      },
      {
        id: "q9_improvement_suggestions",
        type: "text",
        text: "නිවසේදීම සකස් කරගන්නා මෙම පැකැට්ටුවේ අත්දැකීම ඔබට තවත් හොඳ කිරීමට අපට කුමක් කළ හැකිව තිබුණාද?",
        optional: true,
      },
    ],
    anchor: null as any,
    pathA: [],
    pathB: [],
    pathC: [],
    final: [
      { id: "q10_recommend", type: "yesno", text: "ඔබ අපගේ මැච්චා ඔබේ මිතුරන්ට හෝ පවුලේ අයට නිර්දේශ කරනවාද?" },
      { id: "final", type: "stars", text: "සමස්තයක් වශයෙන් අපගේ මැච්චා පිළිබඳ ඔබේ තක්සේරුව කෙසේද?" },
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
        id: "q1_prior_experience",
        type: "choice",
        text: "இதற்கு முன் நீங்கள் மட்சா அருந்தியிருக்கிறீர்களா, அல்லது இதுவே முதல் முறையா?",
        options: [
          { value: "had_before", label: "நான் முன்பே அருந்தியிருக்கிறேன்" },
          { value: "first_time", label: "இதுவே எனது முதல் முறை" },
        ],
      },
      {
        id: "q2_frequency",
        type: "choice",
        text: "நீங்கள் வழக்கமாக எவ்வளவு அடிக்கடி மட்சா அருந்துகிறீர்கள்?",
        options: [
          { value: "daily", label: "தினமும்" },
          { value: "weekly", label: "வாரந்தோறும்" },
          { value: "rarely", label: "அரிதாக" },
          { value: "first_time", label: "இதுவே எனது முதல் முறை" },
        ],
      },
      {
        id: "q3_taste_enjoyment",
        type: "choice",
        text: "மட்சா மாதிரியின் (Sample) சுவை உங்களுக்குப் பிடித்திருந்ததா?",
        options: [
          { value: "yes", label: "ஆம்" },
          { value: "no", label: "இல்லை" },
          { value: "maybe", label: "ஒருவேளை" },
        ],
      },
      {
        id: "q4_taste_dislikes",
        type: "choice",
        text: "அதன் சுவையில் உங்களுக்குப் பிடிக்காத குறிப்பிட்ட அம்சம் ஏதேனும் இருந்ததா?",
        options: [
          { value: "too_bitter", label: "அதிக கசப்புத்தன்மை" },
          { value: "too_sweet", label: "அதிக இனிப்புத்தன்மை" },
          { value: "too_grassy", label: "அதிக புல் வாசனை" },
          { value: "texture_issue", label: "அமைப்பில் (Texture) குறைபாடு" },
          { value: "enjoyed_it", label: "எனக்கு சுவை பிடித்திருந்தது" },
          { value: "other", label: "மற்றவை" },
        ],
      },
      {
        id: "q5_preparation",
        type: "choice",
        text: "வீட்டில் இந்த மட்சா மாதிரியை நீங்கள் எவ்வாறு தயாரித்தீர்கள்?",
        options: [
          { value: "iced_latte", label: "ஐஸ் லாட்டே (Iced Latte)" },
          { value: "hot_latte", label: "சூடான லாட்டே (Hot Latte)" },
          { value: "traditional_mix", label: "பாரம்பரிய முறை (தண்ணீர் மட்டும்)" },
          { value: "other", label: "மற்றவை" },
        ],
      },
      {
        id: "q6_convenience",
        type: "choice",
        text: "கடைகளில் வாங்கும் மட்சாவுடன் ஒப்பிடும்போது இந்த பாக்கெட்டை (Sachet) தயாரிப்பது எவ்வளவு எளிதாக இருந்தது?",
        options: [
          { value: "much_easier", label: "தயாரிப்பது மிகவும் எளிது" },
          { value: "about_same", label: "கிட்டத்தட்ட ஒரே மாதிரி" },
          { value: "more_difficult", label: "தயாரிப்பது கடினம்" },
        ],
      },
      {
        id: "q7_taste_comparison",
        type: "choice",
        text: "நீங்கள் வீட்டில் தயாரித்த மட்சாவின் சுவை, கடைகளில் அல்லது கஃபேயில் (Cafe) வாங்கும் மட்சாவின் சுவையுடன் ஒப்பிடும்போது எப்படி இருந்தது?",
        options: [
          { value: "better_than_cafe", label: "கஃபேயை விட சிறப்பாக இருந்தது" },
          { value: "about_same", label: "கிட்டத்தட்ட ஒரே மாதிரி" },
          { value: "cafe_better", label: "கஃபே/கடை மட்சாவே சிறந்தது" },
        ],
      },
      {
        id: "q8_purchase_intent",
        type: "yesno",
        text: "உங்கள் வீட்டுத் தேவைகளுக்காக எங்களது மட்சா பாக்கெட்டுகளை (Sachets) வாங்குவது பற்றி யோசிப்பீர்களா?",
      },
      {
        id: "q9_improvement_suggestions",
        type: "text",
        text: "இந்த மட்சா பாக்கெட் தயாரிப்பு அனுபவத்தை உங்களுக்கு இன்னும் சிறப்பாக்க நாங்கள் என்ன செய்திருக்கலாம்?",
        optional: true,
      },
    ],
    anchor: null as any,
    pathA: [],
    pathB: [],
    pathC: [],
    final: [
      { id: "q10_recommend", type: "yesno", text: "எங்கள் மட்சாவை உங்கள் நண்பர்கள் அல்லது குடும்பத்தினருக்கு பரிந்துரைப்பீர்களா?" },
      { id: "final", type: "stars", text: "ஒட்டுமொத்தமாக எங்களது மட்சாவை எவ்வாறு மதிப்பிடுவீர்கள்?" },
    ],
  },
};

export const languageLabels: Record<Language, string> = {
  en: "English",
  si: "සිංහල",
  ta: "தமிழ்",
};