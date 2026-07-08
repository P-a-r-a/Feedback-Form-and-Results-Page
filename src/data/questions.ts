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
      unsure: "Unsure / Neutral",
      progressLabel: (step, total) => `Question ${step} of ${total}`,
      thankYouTitle: "Thank you for your feedback!",
      thankYouBody: "Your response helps us make better matcha.",
      viewResults: "View collected results",
      startOver: "Start over",
      placeholderText: "Type your answer here...",
    },
    anchor: {
      id: "anchor",
      type: "yesno",
      text: "Did you enjoy the taste of the matcha sample?",
    },
    pathA: [
      { id: "a2", type: "yesno", text: "Did you find the matcha milkshake refreshing?" },
      {
        id: "a3",
        type: "choice",
        text: "What did you like most about the flavor?",
        options: [
          { value: "earthy_rich", label: "Earthy & rich" },
          { value: "sweet_creamy", label: "Sweet & creamy" },
          { value: "smooth_finish", label: "Smooth finish" },
          { value: "vibrant_color", label: "The vibrant color" },
        ],
      },
      { id: "a4", type: "yesno", text: "Would you like to try it again?" },
      {
        id: "a5",
        type: "choice",
        text: "How often do you typically drink matcha or green tea?",
        options: [
          { value: "daily", label: "Daily" },
          { value: "weekly", label: "Weekly" },
          { value: "rarely", label: "Rarely" },
          { value: "first_time", label: "This is my first time" },
        ],
      },
      { id: "a6", type: "yesno", text: "Would you consider buying our matcha to make at home?" },
      {
        id: "a7",
        type: "choice",
        text: "Which packaging size would most interest you?",
        options: [
          { value: "trial_tin", label: "Small trial tin" },
          { value: "monthly_supply", label: "Large monthly supply" },
          { value: "rtd_bottles", label: "Ready-to-drink bottles" },
        ],
      },
      { id: "a8", type: "yesno", text: "Would you recommend our matcha to a friend?" },
      { id: "a9", type: "yesno", text: "Would you follow us on social media for future pop-ups or discounts?" },
    ],
    pathB: [
      {
        id: "b2",
        type: "choice",
        text: "Was there a specific aspect of the taste you didn't enjoy?",
        options: [
          { value: "too_bitter", label: "Too bitter" },
          { value: "too_earthy", label: "Too earthy" },
          { value: "too_sweet", label: "Too sweet" },
          { value: "too_grassy", label: "Too grassy" },
          { value: "texture_issue", label: "Texture issue" },
        ],
      },
      {
        id: "b3",
        type: "choice",
        text: "Did you find the matcha milkshake refreshing, or was it too heavy?",
        options: [
          { value: "refreshing", label: "Refreshing" },
          { value: "too_heavy", label: "Too heavy" },
          { value: "too_sweet", label: "Too sweet" },
          { value: "didnt_try", label: "Didn't try the milkshake" },
        ],
      },
      {
        id: "b4",
        type: "choice",
        text: "Have you had matcha before, or is this your first time trying it?",
        options: [
          { value: "often", label: "I drink it often" },
          { value: "few_times", label: "I've had it a few times" },
          { value: "first_time", label: "First time ever" },
        ],
      },
      {
        id: "b5",
        type: "choice",
        text: "What do you normally prefer to drink at a cafe?",
        options: [
          { value: "coffee", label: "Coffee" },
          { value: "traditional_tea", label: "Traditional Tea" },
          { value: "sweet_lattes", label: "Sweet Lattes" },
          { value: "fruit_smoothies", label: "Fruit Smoothies" },
        ],
      },
      { id: "b6", type: "yesno", text: "If we adjusted the recipe (e.g., made it sweeter or less intense), would you like to try it again?" },
      { id: "b7", type: "yesno", text: "Would you consider trying a different flavor from us in the future (like Hojicha or Taro)?" },
      { id: "b8", type: "text", text: "What could we have done to make the sample better for you?", optional: true },
      { id: "b9", type: "yesno", text: "Even though it wasn't for you, do you have friends or family who love matcha?" },
    ],
    pathC: [
      {
        id: "c2",
        type: "choice",
        text: "Did you find the matcha milkshake refreshing, or was the flavor a bit overwhelming?",
        options: [
          { value: "refreshing", label: "Refreshing" },
          { value: "overwhelming", label: "A bit overwhelming" },
          { value: "just_okay", label: "Just okay" },
        ],
      },
      {
        id: "c3",
        type: "choice",
        text: "Was the sweetness level right for you?",
        options: [
          { value: "too_sweet", label: "Too sweet" },
          { value: "just_right", label: "Just right" },
          { value: "not_sweet_enough", label: "Not sweet enough" },
        ],
      },
      {
        id: "c4",
        type: "choice",
        text: "How does this compare to other matcha brands you've tried?",
        options: [
          { value: "better", label: "Better" },
          { value: "about_same", label: "About the same" },
          { value: "worse", label: "Worse" },
          { value: "never_tried", label: "Never tried others" },
        ],
      },
      { id: "c5", type: "yesno", text: "Would you like to try it again with a different milk alternative (like Oat or Almond)?" },
      {
        id: "c6",
        type: "choice",
        text: "What would make you more likely to consider buying our matcha?",
        options: [
          { value: "lower_price", label: "Lower price" },
          { value: "different_recipes", label: "Different recipes" },
          { value: "clearer_benefits", label: "Clearer health benefits" },
        ],
      },
      {
        id: "c7",
        type: "choice",
        text: "If you were to drink this again, would you prefer it hot or iced?",
        options: [
          { value: "hot", label: "Hot" },
          { value: "iced", label: "Iced" },
          { value: "latte", label: "As a latte" },
          { value: "dessert", label: "As a dessert" },
        ],
      },
      { id: "c8", type: "yesno", text: "Would you recommend our matcha to a friend who is a big tea lover?" },
      { id: "c9", type: "yesno", text: "Would you be interested in a quick brewing guide to see how easy it is to make at home?" },
    ],
    final: {
      id: "final",
      type: "stars",
      text: "How would you rate our matcha overall?",
    },
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
      unsure: "විශ්වාස නැත / සාමාන්‍ය",
      progressLabel: (step, total) => `ප්‍රශ්නය ${step} න් ${total}`,
      thankYouTitle: "ඔබේ ප්‍රතිචාරයට ස්තූතියි!",
      thankYouBody: "ඔබේ ප්‍රතිචාරය වඩාත් හොඳ මැච්චා සෑදීමට අපට උපකාරී වේ.",
      viewResults: "රැස් කළ ප්‍රතිඵල බලන්න",
      startOver: "නැවත ආරම්භ කරන්න",
      placeholderText: "ඔබේ පිළිතුර මෙහි ටයිප් කරන්න...",
    },
    anchor: {
      id: "anchor",
      type: "yesno",
      text: "මැච්චා නියැදියේ රසය ඔබට රසවත් වුනාද?",
    },
    pathA: [
      { id: "a2", type: "yesno", text: "මැච්චා මිල්ක්ෂේක් එක නැවුම් බවක් දැනුනාද?" },
      {
        id: "a3",
        type: "choice",
        text: "රසයේ ඔබට වඩාත්ම කැමති වුනේ කුමක්ද?",
        options: [
          { value: "earthy_rich", label: "පොළොව සුවඳැති හා ගැඹුරු රසය" },
          { value: "sweet_creamy", label: "මිහිරි හා ක්‍රීමී" },
          { value: "smooth_finish", label: "සිනිඳු අවසානය" },
          { value: "vibrant_color", label: "විචිත්‍රවත් වර්ණය" },
        ],
      },
      { id: "a4", type: "yesno", text: "ඔබ එය නැවත උත්සාහ කිරීමට කැමතිද?" },
      {
        id: "a5",
        type: "choice",
        text: "ඔබ සාමාන්‍යයෙන් මැච්චා හෝ කොළ තේ පානය කරන්නේ කොපමණ වාරයක්ද?",
        options: [
          { value: "daily", label: "දිනපතා" },
          { value: "weekly", label: "සතිපතා" },
          { value: "rarely", label: "කලාතුරකින්" },
          { value: "first_time", label: "මෙය මගේ පළමු වතාවයි" },
        ],
      },
      { id: "a6", type: "yesno", text: "ගෙදර සාදා ගැනීමට අපගේ මැච්චා මිලදී ගැනීමට ඔබ සලකා බලනවාද?" },
      {
        id: "a7",
        type: "choice",
        text: "ඔබට වඩාත් රුචි වන පැකේජ ප්‍රමාණය කුමක්ද?",
        options: [
          { value: "trial_tin", label: "කුඩා නියැදි ටින් එකක්" },
          { value: "monthly_supply", label: "විශාල මාසික සැපයුමක්" },
          { value: "rtd_bottles", label: "පානයට සූදානම් බෝතල්" },
        ],
      },
      { id: "a8", type: "yesno", text: "ඔබ අපගේ මැච්චා මිතුරෙකුට නිර්දේශ කරනවාද?" },
      { id: "a9", type: "yesno", text: "අනාගත pop-up අවස්ථා හෝ වට්ටම් සඳහා ඔබ අපව සමාජ මාධ්‍යවල අනුගමනය කරනවාද?" },
    ],
    pathB: [
      {
        id: "b2",
        type: "choice",
        text: "රසයේ ඔබට කැමති නොවූ විශේෂිත අංගයක් තිබුනාද?",
        options: [
          { value: "too_bitter", label: "ඉතා තිත්තයි" },
          { value: "too_earthy", label: "ඉතා පොළොව සුවඳ" },
          { value: "too_sweet", label: "ඉතා මිහිරියි" },
          { value: "too_grassy", label: "ඉතා තණකොළ රසය" },
          { value: "texture_issue", label: "වයනය පිළිබඳ ගැටලුවක්" },
        ],
      },
      {
        id: "b3",
        type: "choice",
        text: "මැච්චා මිල්ක්ෂේක් එක නැවුම් බවක් දැනුනාද, නැතිනම් ඉතා බරින්ද?",
        options: [
          { value: "refreshing", label: "නැවුම්" },
          { value: "too_heavy", label: "ඉතා බරයි" },
          { value: "too_sweet", label: "ඉතා මිහිරියි" },
          { value: "didnt_try", label: "මිල්ක්ෂේක් එක උත්සාහ කළේ නැත" },
        ],
      },
      {
        id: "b4",
        type: "choice",
        text: "ඔබ මීට පෙර මැච්චා පානය කර ඇතිද, නැතිනම් මෙය ඔබේ පළමු වතාවද?",
        options: [
          { value: "often", label: "නිතරම පානය කරමි" },
          { value: "few_times", label: "වාර කිහිපයක් උත්සාහ කර ඇත" },
          { value: "first_time", label: "මුල්ම වතාව" },
        ],
      },
      {
        id: "b5",
        type: "choice",
        text: "සාමාන්‍යයෙන් කැෆේ එකකදී ඔබ කැමති පානය කුමක්ද?",
        options: [
          { value: "coffee", label: "කෝපි" },
          { value: "traditional_tea", label: "සාම්ප්‍රදායික තේ" },
          { value: "sweet_lattes", label: "මිහිරි ලැටේ" },
          { value: "fruit_smoothies", label: "පලතුරු ස්මූති" },
        ],
      },
      { id: "b6", type: "yesno", text: "අපි වට්ටෝරුව වෙනස් කළහොත් (උදා: වඩාත් මිහිරි හෝ අඩු තීව්‍ර කළහොත්), ඔබ එය නැවත උත්සාහ කිරීමට කැමතිද?" },
      { id: "b7", type: "yesno", text: "අනාගතයේදී අප වෙතින් වෙනස් රසයක් (හෝජිචා හෝ තාරෝ වැනි) උත්සාහ කිරීමට ඔබ සලකා බලනවාද?" },
      { id: "b8", type: "text", text: "නියැදිය ඔබට වඩාත් හොඳ කිරීමට අපට කළ හැකිව තිබුනේ කුමක්ද?", optional: true },
      { id: "b9", type: "yesno", text: "එය ඔබට නොගැලපුනත්, මැච්චාට කැමති මිතුරන් හෝ පවුලේ අය ඔබට සිටිනවාද?" },
    ],
    pathC: [
      {
        id: "c2",
        type: "choice",
        text: "මැච්චා මිල්ක්ෂේක් එක නැවුම් බවක් දැනුනාද, නැතිනම් රසය තරමක් අධික බවක් දැනුනාද?",
        options: [
          { value: "refreshing", label: "නැවුම්" },
          { value: "overwhelming", label: "තරමක් අධිකයි" },
          { value: "just_okay", label: "සාමාන්‍යයි" },
        ],
      },
      {
        id: "c3",
        type: "choice",
        text: "මිහිරි බව ඔබට හරියටම සුදුසු වුනාද?",
        options: [
          { value: "too_sweet", label: "ඉතා මිහිරියි" },
          { value: "just_right", label: "හරියටම හරි" },
          { value: "not_sweet_enough", label: "ප්‍රමාණවත් තරම් මිහිරි නැත" },
        ],
      },
      {
        id: "c4",
        type: "choice",
        text: "ඔබ උත්සාහ කර ඇති අනෙකුත් මැච්චා වෙළඳ නාම හා සසඳන විට මෙය කෙසේද?",
        options: [
          { value: "better", label: "වඩා හොඳයි" },
          { value: "about_same", label: "දළ වශයෙන් සමානයි" },
          { value: "worse", label: "අඩුයි" },
          { value: "never_tried", label: "වෙනත් නාම උත්සාහ කර නැත" },
        ],
      },
      { id: "c5", type: "yesno", text: "වෙනස් කිරි විකල්පයක් සමඟ (ඕට් හෝ ආමන්ඩ් වැනි) නැවත උත්සාහ කිරීමට ඔබ කැමතිද?" },
      {
        id: "c6",
        type: "choice",
        text: "අපගේ මැච්චා මිලදී ගැනීම ගැන ඔබව වඩාත් සිතීමට හේතු වන්නේ කුමක්ද?",
        options: [
          { value: "lower_price", label: "අඩු මිල" },
          { value: "different_recipes", label: "වෙනස් වට්ටෝරු" },
          { value: "clearer_benefits", label: "පැහැදිලි සෞඛ්‍ය ප්‍රතිලාභ" },
        ],
      },
      {
        id: "c7",
        type: "choice",
        text: "ඔබ මෙය නැවත පානය කරන්නේ නම්, උණුසුම් හෝ අයිස් සහිතව කැමති වන්නේ?",
        options: [
          { value: "hot", label: "උණුසුම්" },
          { value: "iced", label: "අයිස් සහිත" },
          { value: "latte", label: "ලැටේ එකක් ලෙස" },
          { value: "dessert", label: "අතුරුපසක් ලෙස" },
        ],
      },
      { id: "c8", type: "yesno", text: "තේ වලට ඉතා කැමති මිතුරෙකුට ඔබ අපගේ මැච්චා නිර්දේශ කරනවාද?" },
      { id: "c9", type: "yesno", text: "එය ගෙදර සෑදීම කෙතරම් පහසුදැයි බැලීමට ඉක්මන් සකස් කිරීමේ මාර්ගෝපදේශයක් ගැන ඔබ උනන්දුවක් දක්වනවාද?" },
    ],
    final: {
      id: "final",
      type: "stars",
      text: "සමස්තයක් වශයෙන් ඔබ අපගේ මැච්චා අගයන්නේ කෙසේද?",
    },
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
      unsure: "உறுதியில்லை / நடுநிலை",
      progressLabel: (step, total) => `கேள்வி ${step} / ${total}`,
      thankYouTitle: "உங்கள் கருத்துக்கு நன்றி!",
      thankYouBody: "உங்கள் பதில் சிறந்த மட்சாவை உருவாக்க எங்களுக்கு உதவுகிறது.",
      viewResults: "சேகரிக்கப்பட்ட முடிவுகளைப் பார்க்க",
      startOver: "மீண்டும் தொடங்கு",
      placeholderText: "உங்கள் பதிலை இங்கே தட்டச்சு செய்யவும்...",
    },
    anchor: {
      id: "anchor",
      type: "yesno",
      text: "மட்சா மாதிரியின் சுவை உங்களுக்குப் பிடித்திருந்ததா?",
    },
    pathA: [
      { id: "a2", type: "yesno", text: "மட்சா மில்க்ஷேக் புத்துணர்ச்சியாக இருந்ததா?" },
      {
        id: "a3",
        type: "choice",
        text: "சுவையில் உங்களுக்கு மிகவும் பிடித்தது எது?",
        options: [
          { value: "earthy_rich", label: "மண் வாசனையுடன் ஆழமான சுவை" },
          { value: "sweet_creamy", label: "இனிப்பு மற்றும் க்ரீமி" },
          { value: "smooth_finish", label: "மென்மையான முடிவு" },
          { value: "vibrant_color", label: "துடிப்பான நிறம்" },
        ],
      },
      { id: "a4", type: "yesno", text: "மீண்டும் முயற்சிக்க விரும்புகிறீர்களா?" },
      {
        id: "a5",
        type: "choice",
        text: "நீங்கள் வழக்கமாக மட்சா அல்லது பச்சை தேநீர் அருந்துவது எவ்வளவு அடிக்கடி?",
        options: [
          { value: "daily", label: "தினமும்" },
          { value: "weekly", label: "வாரம் தோறும்" },
          { value: "rarely", label: "அரிதாக" },
          { value: "first_time", label: "இதுவே எனது முதல் முறை" },
        ],
      },
      { id: "a6", type: "yesno", text: "வீட்டில் தயாரிக்க எங்கள் மட்சாவை வாங்க யோசிப்பீர்களா?" },
      {
        id: "a7",
        type: "choice",
        text: "எந்த பேக்கேஜிங் அளவு உங்களுக்கு ஆர்வமாக இருக்கும்?",
        options: [
          { value: "trial_tin", label: "சிறிய மாதிரி டின்" },
          { value: "monthly_supply", label: "பெரிய மாத அளவு பொருள்" },
          { value: "rtd_bottles", label: "குடிக்கத் தயார் பாட்டில்கள்" },
        ],
      },
      { id: "a8", type: "yesno", text: "எங்கள் மட்சாவை ஒரு நண்பருக்கு பரிந்துரைப்பீர்களா?" },
      { id: "a9", type: "yesno", text: "எதிர்கால பாப்-அப் நிகழ்வுகள் அல்லது தள்ளுபடிகளுக்காக எங்களை சமூக ஊடகங்களில் பின்தொடர்வீர்களா?" },
    ],
    pathB: [
      {
        id: "b2",
        type: "choice",
        text: "சுவையில் உங்களுக்குப் பிடிக்காத ஒரு குறிப்பிட்ட அம்சம் இருந்ததா?",
        options: [
          { value: "too_bitter", label: "மிகவும் கசப்பு" },
          { value: "too_earthy", label: "மிகவும் மண் வாசனை" },
          { value: "too_sweet", label: "மிகவும் இனிப்பு" },
          { value: "too_grassy", label: "மிகவும் புல் வாசனை" },
          { value: "texture_issue", label: "அமைப்பு பிரச்சனை" },
        ],
      },
      {
        id: "b3",
        type: "choice",
        text: "மட்சா மில்க்ஷேக் புத்துணர்ச்சியாக இருந்ததா, அல்லது மிகவும் கனமாக இருந்ததா?",
        options: [
          { value: "refreshing", label: "புத்துணர்ச்சி" },
          { value: "too_heavy", label: "மிகவும் கனம்" },
          { value: "too_sweet", label: "மிகவும் இனிப்பு" },
          { value: "didnt_try", label: "மில்க்ஷேக்கை முயற்சிக்கவில்லை" },
        ],
      },
      {
        id: "b4",
        type: "choice",
        text: "இதற்கு முன் மட்சா அருந்தியிருக்கிறீர்களா, அல்லது இதுவே முதல் முறையா?",
        options: [
          { value: "often", label: "அடிக்கடி அருந்துவேன்" },
          { value: "few_times", label: "சில முறை அருந்தியிருக்கிறேன்" },
          { value: "first_time", label: "இதுவே முதல் முறை" },
        ],
      },
      {
        id: "b5",
        type: "choice",
        text: "பொதுவாக ஒரு கஃபேயில் நீங்கள் எதைக் குடிக்க விரும்புவீர்கள்?",
        options: [
          { value: "coffee", label: "காபி" },
          { value: "traditional_tea", label: "பாரம்பரிய தேநீர்" },
          { value: "sweet_lattes", label: "இனிப்பு லாட்டேகள்" },
          { value: "fruit_smoothies", label: "பழ ஸ்மூத்திகள்" },
        ],
      },
      { id: "b6", type: "yesno", text: "செய்முறையை நாங்கள் மாற்றினால் (இனிப்பாக அல்லது குறைவான தீவிரமாக), மீண்டும் முயற்சிக்க விரும்புவீர்களா?" },
      { id: "b7", type: "yesno", text: "எதிர்காலத்தில் எங்களிடமிருந்து வேறு சுவையை (ஹோஜிச்சா அல்லது தாரோ போன்றவை) முயற்சிக்க யோசிப்பீர்களா?" },
      { id: "b8", type: "text", text: "மாதிரியை உங்களுக்காக மேலும் சிறப்பாக்க நாங்கள் என்ன செய்திருக்கலாம்?", optional: true },
      { id: "b9", type: "yesno", text: "இது உங்களுக்குப் பிடிக்கவில்லை என்றாலும், மட்சாவை விரும்பும் நண்பர்கள் அல்லது குடும்பத்தினர் உங்களுக்கு இருக்கிறார்களா?" },
    ],
    pathC: [
      {
        id: "c2",
        type: "choice",
        text: "மட்சா மில்க்ஷேக் புத்துணர்ச்சியாக இருந்ததா, அல்லது சுவை சற்று அதிகமாக இருந்ததா?",
        options: [
          { value: "refreshing", label: "புத்துணர்ச்சி" },
          { value: "overwhelming", label: "சற்று அதிகமானது" },
          { value: "just_okay", label: "பரவாயில்லை" },
        ],
      },
      {
        id: "c3",
        type: "choice",
        text: "இனிப்புத் தன்மை உங்களுக்குச் சரியாக இருந்ததா?",
        options: [
          { value: "too_sweet", label: "மிகவும் இனிப்பு" },
          { value: "just_right", label: "சரியாக இருந்தது" },
          { value: "not_sweet_enough", label: "போதுமான இனிப்பு இல்லை" },
        ],
      },
      {
        id: "c4",
        type: "choice",
        text: "நீங்கள் முயற்சித்த மற்ற மட்சா பிராண்டுகளுடன் ஒப்பிடும்போது இது எப்படி இருந்தது?",
        options: [
          { value: "better", label: "சிறப்பானது" },
          { value: "about_same", label: "கிட்டத்தட்ட ஒரே மாதிரி" },
          { value: "worse", label: "மோசமானது" },
          { value: "never_tried", label: "மற்றவற்றை முயற்சிக்கவில்லை" },
        ],
      },
      { id: "c5", type: "yesno", text: "வேறு பால் மாற்று (ஓட்ஸ் அல்லது பாதாம் போன்றவை) கொண்டு மீண்டும் முயற்சிக்க விரும்புவீர்களா?" },
      {
        id: "c6",
        type: "choice",
        text: "எங்கள் மட்சாவை வாங்குவதைப் பற்றி நீங்கள் அதிகம் யோசிக்க என்ன உதவும்?",
        options: [
          { value: "lower_price", label: "குறைந்த விலை" },
          { value: "different_recipes", label: "வெவ்வேறு செய்முறைகள்" },
          { value: "clearer_benefits", label: "தெளிவான ஆரோக்கிய நன்மைகள்" },
        ],
      },
      {
        id: "c7",
        type: "choice",
        text: "நீங்கள் இதை மீண்டும் அருந்தினால், சூடாகவா அல்லது குளிர்ந்ததாகவா விரும்புவீர்கள்?",
        options: [
          { value: "hot", label: "சூடானது" },
          { value: "iced", label: "குளிர்ந்தது" },
          { value: "latte", label: "லாட்டேவாக" },
          { value: "dessert", label: "இனிப்பு வகையாக" },
        ],
      },
      { id: "c8", type: "yesno", text: "தேநீரை மிகவும் விரும்பும் ஒரு நண்பருக்கு எங்கள் மட்சாவை பரிந்துரைப்பீர்களா?" },
      { id: "c9", type: "yesno", text: "வீட்டில் இதை எளிதாகத் தயாரிக்கும் விதத்தைக் காட்டும் ஒரு விரைவு வழிகாட்டியில் ஆர்வமாக இருப்பீர்களா?" },
    ],
    final: {
      id: "final",
      type: "stars",
      text: "ஒட்டுமொத்தமாக எங்கள் மட்சாவை நீங்கள் எவ்வாறு மதிப்பிடுவீர்கள்?",
    },
  },
};

export const languageLabels: Record<Language, string> = {
  en: "English",
  si: "සිංහල",
  ta: "தமிழ்",
};
