// ====== SIMPLE LOGIN SETUP ======
const loginForm = document.getElementById("loginForm");
const messageDiv = document.getElementById("message");
const quizSection = document.getElementById("quizSection");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // demo login – change to whatever you want
  if (username === "lrchawngthu" && password === "123") {
    messageDiv.style.display = "block";
    messageDiv.textContent = "ACCESS GRANTED. Welcome to LrChawngthu Webapp.";
    messageDiv.className = "message success";

    loginForm.style.display = "none";
    quizSection.style.display = "block";

    loadQuestion();    // start quiz after login
  } else {
    messageDiv.style.display = "block";
    messageDiv.textContent = "ACCESS DENIED. Invalid credentials.";
    messageDiv.className = "message error";
  }
});

// ====== QUIZ DATA (WITH EXPLANATION + IMAGE) ======
const questions = [
  {
    question: "He could feel every ____ and artery in his body.",
    options: ["vein", "liver", "place", "beat"],
    answer: 0,
    explanation: "Vein and artery are blood vessels. Others don't pair with artery."
  },
  {
    question: "I will never judge you for yours impromptu performance.",
    options: ["yours impromptu performance.", "No error", "judge you for", "I will never"],
    answer: 0,
    explanation: "'yours' is possessive pronoun. Should be 'your impromptu performance'."
  },
  {
    question: "Opposite of Vain",
    options: ["Unpredictable", "Calculable", "Harmony", "Productive"],
    answer: 3,
    explanation: "Vain = useless/egoistic. Opposite = productive/useful."
  },
  {
    question: "Incorrectly spelt word",
    options: ["Ghost", "Roast", "Holitisc", "Malt"],
    answer: 2,
    explanation: "Correct spelling is 'Holistic'."
  },
  {
    question: "The students studied a diagrams of a plant cell.",
    options: ["No improvement", "studied a diagram", "study a diagrams", "studying a diagram"],
    answer: 1,
    explanation: "'a' takes singular noun → diagram."
  },
  {
    question: "People who came into contact with the carrier are in danger of catching the disease.",
    options: ["in dangers for", "in danger off", "at dangerous of", "No improvement"],
    answer: 3,
    explanation: "'in danger of' is correct idiom."
  },
  {
    question: "If conventional arrangements and patterns are made more scarcer...",
    options: ["If conventional arrangements and", "No error", "patterns are made more scarcer, other", "arrangements and patterns will spring up."],
    answer: 2,
    explanation: "Double comparative: use 'scarcer' OR 'more scarce', not both."
  },
  {
    question: "Same as Domicile",
    options: ["Home", "Evict", "Wild", "Dictator"],
    answer: 0,
    explanation: "Domicile = permanent home/residence."
  },
  {
    question: "Rearrange P,Q,R,S for UHC sentence",
    options: ["QPRS", "PQRS", "SPQR", "PRSQ"],
    answer: 1,
    explanation: "Q introduces belief, P states belief, R+S explain outcome."
  },
  {
    question: "Meaning of 'To keep an eye on'",
    options: ["To see someone in a bad light", "To keep distance from", "To be able to understand everything", "To watch over closely"],
    answer: 3,
    explanation: "Idiom means to monitor/watch carefully."
  },
  {
    question: "Opposite of Forthright",
    options: ["Uninhibited", "Artless", "Blunt", "Uncandid"],
    answer: 3,
    explanation: "Forthright = honest. Opposite = Uncandid."
  },
  {
    question: "ANTONYM of Incredible",
    options: ["Strained", "Far-fetched", "Implausible", "Believable"],
    answer: 3,
    explanation: "Incredible = unbelievable. Antonym = believable."
  },
  {
    question: "Sentence with no spelling error",
    options: [
      "Many input devises perfrom specific functions.",
      "Many input devices perfrpm specfic functions.",
      "Many input devices perform specific functions.",
      "Many input devices perform specific functins."
    ],
    answer: 2,
    explanation: "Only option C has correct spelling throughout."
  },
  {
    question: "I envy the way she ____ all tasks...",
    options: ["bring about", "dwindles out", "account for", "carries out"],
    answer: 3,
    explanation: "'Carry out tasks' = perform tasks."
  },
  {
    question: "Indirect: The student said to her, 'I don't remember your name.'",
    options: [
      "The student said to her that I did not remember her name.",
      "The student told her that he or she do not remember her name.",
      "The student told her that he or she did not remember her name.",
      "The student said to her that he or she cannot remember her name."
    ],
    answer: 2,
    explanation: "I→he/she, don't→did not, your→her in indirect speech."
  },
  {
    question: "Animals of a particular region",
    options: ["Blossom", "Phylum", "Fauna", "Flora"],
    answer: 2,
    explanation: "Fauna = animals. Flora = plants."
  },
  {
    question: "Meaning of 'Water under the bridge'",
    options: ["Paranormal sense...", "Anything from past not significant anymore.", "To be very sick.", "Someone else takes blame."],
    answer: 1,
    explanation: "Idiom means past issues are settled/forgotten."
  },
  {
    question: "We (opened) on a new travel venture.",
    options: ["Embarked", "No correction required", "Initiated", "Begun"],
    answer: 0,
    explanation: "'Embark on' is correct collocation for starting ventures."
  },
  {
    question: "Jumbled: P-Rama exiled, Q-attacked Lanka, R-return to Ayodhya, S-Sita abducted",
    options: ["SQPR", "PSQR", "PQRS", "QRSP"],
    answer: 1,
    explanation: "Chronological: exile→abduction→rescue→return."
  },
  {
    question: "Passive: She ate the last slice of pizza.",
    options: [
      "The last slice of pizza had been eaten by her.",
      "The last slice of pizza was eaten by her.",
      "The last slice was being eaten by her.",
      "She had eaten the last slice of pizza."
    ],
    answer: 1,
    explanation: "Simple past active → was/were + V3 in passive."
  },
  {
    question: "What do these things have in (1)?",
    options: ["balance", "tandem", "common", "collision"],
    answer: 2,
    explanation: "'have in common' = share similarity."
  },
  {
    question: "White (2) you put in cookies...",
    options: ["granules", "rubbles", "capsules", "stones"],
    answer: 0,
    explanation: "Sugar = white granules."
  },
  {
    question: "That you (3) on your cereal.",
    options: ["send", "place", "sprinkle", "raise"],
    answer: 2,
    explanation: "You sprinkle sugar on cereal."
  },
  {
    question: "Sucrose is (4) from sugar cane...",
    options: ["shelved", "excavated", "rugged", "extracted"],
    answer: 3,
    explanation: "Sugar is extracted from cane/beets."
  },
  {
    question: "Sugar occurs (5) in every fruit...",
    options: ["naturally", "fortunately", "mentally", "happily"],
    answer: 0,
    explanation: "Sugar occurs naturally in fruits."
  },
  {
    question: "Stream 4 km/hr, boat 11 km/hr. Time for 21 km upstream + 45 km downstream?",
    options: ["6 hours", "7 hours", "4 hours", "3 hours"],
    answer: 0,
    explanation: "21/(11-4)+45/(11+4)=3+3=6"
  },
  {
    question: "SI Rs.1200 in 3 yrs at 8%. CI on twice principal at 10% for 2 yrs?",
    options: ["Rs.1,050", "Rs.1,100", "Rs.2,100", "Rs.2,150"],
    answer: 2,
    explanation: "P=5000, 2P=10000. CI=10000[1.1²-1]=2100"
  },
  { question: "Pie chart total Rs.3,00,000. Which items total Rs.1,50,000?", answer: 0, requiresDiagram: true },
  { question: "[Equation based on image in original paper]", answer: 0, requiresDiagram: true },
  {
    question: "If tan A = 3, value of 3 sin A cos A?",
    options: ["9/10", "8/9", "9/11", "7/9"],
    answer: 0,
    explanation: "sin=3/√10, cos=1/√10 → 3×3/10=9/10"
  },
  {
    question: "20% discount, 5% loss. If sold at MP, profit %?",
    options: ["16.25%", "8.33%", "17.25%", "18.75%"],
    answer: 3,
    explanation: "MP=100,SP=80=0.95CP→CP=84.21. Profit%=(100-84.21)/84.21=18.75%"
  },
  {
    question: "How many 6 cm balls from melting 12 cm hemisphere?",
    options: ["4", "2", "10", "8"],
    answer: 0,
    explanation: "(2/3)π12³ ÷ (4/3)π6³ = 4"
  },
  {
    question: "525 + 1235 ÷ 247 – 29 x 10 = ?",
    options: ["220", "240", "250", "210"],
    answer: 1,
    explanation: "525+5-290=240"
  },
  {
    question: "P=1/5, Q=1/4 of total. Ratio P:Q:R?",
    options: ["4:5:9", "4:88:11", "4:7:11", "4:5:11"],
    answer: 3,
    explanation: "R=1-1/5-1/4=11/20. Ratio 4:5:11"
  },
  { question: "Difference of largest and smallest of given fractions [fractions in image]", answer: 0, requiresDiagram: true },
  {
    question: "Price ↓25%, consumption ↑20 kg, expenditure same. Earlier consumption?",
    options: ["45 kg", "55 kg", "60 kg", "75 kg"],
    answer: 2,
    explanation: "0.75P×(Q+20)=PQ → Q=60"
  },
  { question: "[Table/Graph based question in original paper]", answer: 1, requiresDiagram: true },
  { question: "Marks of A is what % of B's marks? [Line chart based]", answer: 0, requiresDiagram: true },
  { question: "Total salary of 6 employees? [Table based]", answer: 2, requiresDiagram: true },
  { question: "[Expression based on image in original paper]", answer: 2, requiresDiagram: true },
  {
    question: "In ∆STU, SX median on TU. If SX = TX, ∠TSU = ?",
    options: ["90°", "60°", "75°", "45°"],
    answer: 0,
    explanation: "Median = half of hypotenuse → right triangle at vertex"
  },
  {
    question: "AD median, G centroid. If AG = 14 cm, AD = ?",
    options: ["42 cm", "28 cm", "35 cm", "21 cm"],
    answer: 3,
    explanation: "AG:GD=2:1 → AD=14×3/2=21"
  },
  { question: "[Expression based on image in original paper]", answer: 2, requiresDiagram: true },
  {
    question: "Two machines Rs.15000 each. 20% profit, 40% loss. Overall?",
    options: ["10% profit", "10% loss", "20% profit", "20% loss"],
    answer: 3,
    explanation: "CP1=12500,CP2=25000,Total CP=37500,SP=30000→Loss 20%"
  },
  {
    question: "Man:woman time ratio 2:3. Together 24 days. Woman alone?",
    options: ["20 days", "40 days", "60 days", "30 days"],
    answer: 2,
    explanation: "Efficiency 3:2. Total work=5×24=120. Woman=120/2=60"
  },
  { question: "[Expression based on image in original paper]", answer: 3, requiresDiagram: true },
  {
    question: "Avg of 10 consecutive integers = 33/2. Avg of first three?",
    options: ["13", "11", "12", "15"],
    answer: 0,
    explanation: "Numbers:12-21. First 3:12,13,14. Avg=13"
  },
  {
    question: "Circles radii 11 cm & 3 cm, centres 17 cm apart. Direct common tangent?",
    options: ["16 cm", "15 cm", "12 cm", "14 cm"],
    answer: 1,
    explanation: "√[17²-(11-3)²]=√[289-64]=15"
  },
  { question: "Median of equilateral triangle is ___ [value in image]. Side = ?", answer: 2, requiresDiagram: true },
  { question: "J1=avg C1 in Y1,Y2,Y3. J2=difference total C1 & C2. (J2/J1)? [Bar graph based]", answer: 1, requiresDiagram: true },
  { question: "Font dialog box shortcut in MS-Word 365?", options: ["Alt + F", "Ctrl + D", "Alt + D", "Ctrl + F"], answer: 1, explanation: "Ctrl+D opens Font dialog in MS Word." },
  { question: "Change in total utility due to one additional unit = ?", options: ["Marginal utility (MU)", "Demand utility (DU)", "Revenue utility (RU)", "Product Utility (PU)"], answer: 0, explanation: "Marginal utility = change in TU from consuming one more unit." },
  { question: "Which statement is correct?", options: ["Our body works within pH 7.0 to 7.8.", "pH of rain water < 8.2 is acid rain.", "Living organisms survive wide pH change.", "Tooth decay starts when pH < 5."], answer: 0, explanation: "Human blood pH is 7.35-7.45. Acid rain is pH < 5.6." },
  { question: "Author of Mere Christianity", options: ["C.S Lewis", "Dorothy L.Sayers", "Frank W Braham", "George MC Donald"], answer: 0, explanation: "Mere Christianity was written by C.S. Lewis in 1952." },
  { question: "Article for CAG Audit reports?", options: ["149", "150", "151", "148"], answer: 2, explanation: "Article 151: Audit reports of CAG laid before Parliament." },
  { question: "Vangchhia became Mizoram's first archaeological protected site in year?", options: ["2011", "2012", "2013", "2014"], answer: 1, explanation: "Vangchhia notified by ASI in 2012." },
  { question: "21 Oct 1943, Subhash Chandra Bose proclaimed Provisional Govt of Free India in?", options: ["Russia", "Japan", "Germany", "Singapore"], answer: 3, explanation: "Azad Hind Govt proclaimed in Singapore." },
  { question: "Sibuta Puk located in which district?", options: ["Aizawl", "Lunglei", "Champhai", "Serchhip"], answer: 0, explanation: "Sibuta Puk is in Aizawl district, Mizoram." },
  { question: "Mizo word 'Lawi ang thang' means?", options: ["Hmingchhia", "Tlang hriat", "Thang lian", "Puang zar"], answer: 0, explanation: "'Lawi ang thang' = to become infamous/disgraced." },
  { question: "Also known as search unemployment...", options: ["Frictional unemployment", "Voluntary unemployment", "Classical unemployment", "Disguised unemployment"], answer: 0, explanation: "Frictional = time spent between jobs while searching." },
  { question: "Which UT lies in Bay of Bengal?", options: ["Lakshadweep", "Chandigarh", "DNH & DD", "Andaman and Nicobar Islands"], answer: 3, explanation: "A&N Islands in Bay of Bengal. Lakshadweep in Arabian Sea." },
  { question: "Loktak Lake in which state?", options: ["Mizoram", "Manipur", "Nagaland", "Arunachal Pradesh"], answer: 1, explanation: "Loktak is the largest freshwater lake in Northeast, in Manipur." },
  { question: "Humayun's Tomb built by?", options: ["Maham Begum", "Gulbadan Begum", "Biga Begum", "Hamida Begum"], answer: 2, explanation: "Built by his wife Biga Begum/Haji Begum, 1569-70." },
  { question: "Arctic Ocean connected with Pacific by ___ strait.", options: ["Palk", "Bosphorus", "Hudson", "Bering"], answer: 3, explanation: "Bering Strait connects Arctic and Pacific between Russia & Alaska." },
  { question: "Dairy under which sector?", options: ["Tertiary", "Secondary", "Primary", "Quaternary"], answer: 2, explanation: "Dairy/Agriculture = Primary sector." },
  { question: "INC established 1885 with how many delegates?", options: ["108", "156", "72", "34"], answer: 2, explanation: "First INC session, Bombay, 72 delegates." },
  { question: "Which is NOT application software?", options: ["Education software", "Programming language translator software", "Personal assistance software", "Entertainment software"], answer: 1, explanation: "Translator/Compiler is system software, not application software." },
  { question: "Lushai Scout Corps 1944 also known as?", options: ["Biate Sipai", "Regular Army", "Lushai Army", "Burma Army"], answer: 0, explanation: "Raised in WWII, locally called Biate Sipai." },
  { question: "Ken-Betwa canal passes through which National Park?", options: ["Bandavgarh", "Panna", "Kanha", "Pench"], answer: 1, explanation: "Ken-Betwa link passes through Panna Tiger Reserve." },
  { question: "Atomic mass of sodium?", options: ["40", "23", "32", "12"], answer: 1, explanation: "Na atomic number 11, atomic mass ~23." },
  { question: "Only 'Floating Islands Lake' in India?", options: ["Kolleru", "Loktak", "Pulicat", "Chilka"], answer: 1, explanation: "Loktak has Phumdis - floating islands." },
  { question: "Shehnai has how many holes?", options: ["Six", "Eleven", "Seven", "Five"], answer: 2, explanation: "Traditional Shehnai has 7 finger holes." },
  { question: "Golden revolution related to?", options: ["Precious minerals", "Pulse", "Horticulture and Honey", "Jute"], answer: 2, explanation: "Golden Revolution: 1991-2003, fruits/honey/horticulture." },
  { question: "Five year plans concept borrowed from?", options: ["Russia", "England", "USA", "Germany"], answer: 0, explanation: "India adopted 5-year plans from USSR model." },
  { question: "Which pair is incorrect?", options: ["Liver fluke – Nematoda", "Prawns - Arthropoda", "Starfish – Echinodermata", "Sycon – Porifera"], answer: 0, explanation: "Liver fluke = Platyhelminthes, not Nematoda" }
];

const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const quizImage = document.getElementById("quizImage");
const quizExplanation = document.getElementById("quizExplanation");
const scoreDiv = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");
const logoutBtn = document.getElementById("logoutBtn");

let currentIndex = 0;
let score = 0;

// ====== LOAD ONE QUESTION ======
function loadQuestion() {
  const q = questions[currentIndex];

  // question text
  quizQuestion.textContent = q.question;

  // image
  if (q.image) {
    quizImage.src = q.image;
    quizImage.classList.remove("no-image");
  } else {
    quizImage.src = "";
    quizImage.classList.add("no-image");
  }

  // clear options and explanation
  quizOptions.innerHTML = "";
  quizExplanation.style.display = "none";
  quizExplanation.textContent = "";

  // FIX: Check if question has options (some diagram-based questions don't)
  if (!q.options || !Array.isArray(q.options)) {
    quizOptions.innerHTML = "<p style='color: #ff6b6b;'>⚠️ This question requires a diagram/image that is not available. Skipping...</p>";
    nextBtn.style.display = "inline-block";
    return;
  }

  // create option buttons
  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.className = "optionBtn";

    btn.addEventListener("click", () => {
      handleAnswer(index);
    });

    quizOptions.appendChild(btn);
  });
  
  nextBtn.style.display = "inline-block";
}

// ====== HANDLE ANSWER CLICK ======
function handleAnswer(selectedIndex) {
  const q = questions[currentIndex];
  const buttons = document.querySelectorAll(".optionBtn");

  // disable all buttons after one click
  buttons.forEach(btn => (btn.disabled = true));

  // FIX: Use q.answer instead of q.correctIndex
  const correctIndex = q.answer;

  // mark correct / incorrect
  buttons[correctIndex].classList.add("correct");

  if (selectedIndex !== correctIndex) {
    buttons[selectedIndex].classList.add("incorrect");
  } else {
    score++;
    scoreDiv.textContent = `Score: ${score}/${questions.length}`;
  }

  // show explanation under the answers
  if (q.explanation) {
    quizExplanation.textContent = q.explanation;
    quizExplanation.style.display = "block";
  }
}

// ====== NEXT QUESTION BUTTON ======
nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    quizQuestion.textContent = "QUIZ FINISHED. WELL DONE, TERMINAL USER.";
    quizOptions.innerHTML = "";
    quizImage.src = "";
    quizImage.classList.add("no-image");
    quizExplanation.textContent = `Final Score: ${score}/${questions.length}`;
    quizExplanation.style.display = "block";
    nextBtn.style.display = "none";
  }
});

// ====== LOGOUT BUTTON ======
logoutBtn.addEventListener("click", () => {
  // reset state
  currentIndex = 0;
  score = 0;
  scoreDiv.textContent = `Score: 0/${questions.length}`;

  quizSection.style.display = "none";
  loginForm.style.display = "block";
  messageDiv.style.display = "none";
});