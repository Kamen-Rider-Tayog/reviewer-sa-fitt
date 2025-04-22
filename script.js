const questions = [
	{
		question: "What is the primary definition of physical fitness?",
		choices: [
			"Ability to run fast",
			"Condition that helps us look, feel, and perform our best",
			"Having large muscles",
			"Low body fat",
		],
		correctAnswer: 1,
	},
	{
		question: "Which of the following best describes exercise?",
		choices: [
			"Random physical movements",
			"Sleeping habits",
			"Planned, structured, repetitive movement to improve fitness",
			"Eating healthy food",
		],
		correctAnswer: 2,
	},
	{
		question:
			"What disease is most commonly associated with physical inactivity?",
		choices: ["Influenza", "Hypokinetic disease", "Asthma", "Arthritis"],
		correctAnswer: 1,
	},
	{
		question: "Which of the following is NOT a hypokinetic disease?",
		choices: ["Obesity", "Type 2 diabetes", "Common cold", "Osteoarthritis"],
		correctAnswer: 2,
	},
	{
		question:
			"What percentage lower risk of type 2 diabetes do active people have?",
		choices: ["10–20%", "25–30%", "33–50%", "60–70%"],
		correctAnswer: 2,
	},
	{
		question: "What does VO2 max measure?",
		choices: [
			"Muscle mass",
			"Maximum oxygen uptake",
			"Heart rate",
			"Lung volume",
		],
		correctAnswer: 1,
	},
	{
		question: "Which of the following is an aerobic exercise?",
		choices: ["Bicep curls", "Sprinting", "Running", "Push-ups"],
		correctAnswer: 2,
	},
	{
		question: "Anaerobic exercises primarily use which energy systems?",
		choices: [
			"Aerobic",
			"Mitochondrial",
			"ATP-PC and lactate",
			"Cardio-respiratory",
		],
		correctAnswer: 2,
	},
	{
		question:
			"What type of contraction occurs when muscles shorten during force application?",
		choices: ["Isometric", "Eccentric", "Static", "Concentric"],
		correctAnswer: 3,
	},
	{
		question: "Which test is NOT used to measure VO2 max?",
		choices: [
			"Bleep test",
			"Cooper 12-minute run",
			"Rockport walk test",
			"Bench press max",
		],
		correctAnswer: 3,
	},
	{
		question: "What type of training improves muscle endurance and strength?",
		choices: ["Yoga", "Weight training", "Tabata", "Continuous training"],
		correctAnswer: 1,
	},
	{
		question: "Which contraction type lengthens the muscle under tension?",
		choices: ["Concentric", "Eccentric", "Isometric", "Static"],
		correctAnswer: 1,
	},
	{
		question: "What is the purpose of mobility exercises?",
		choices: [
			"Build muscle size",
			"Improve range of motion",
			"Burn fat",
			"Increase speed",
		],
		correctAnswer: 1,
	},
	{
		question: "Which of the following is an activation exercise?",
		choices: ["Jogging", "Dead bugs", "Sprints", "Pull-ups"],
		correctAnswer: 1,
	},
	{
		question: "What joint is targeted by scapular wall slides?",
		choices: ["Elbow", "Wrist", "Shoulder", "Hip"],
		correctAnswer: 2,
	},
	{
		question: "The 90/90 stretch improves mobility in which joint?",
		choices: ["Ankle", "Elbow", "Hip", "Shoulder"],
		correctAnswer: 2,
	},
	{
		question: "What mobility exercise is best for the thoracic spine?",
		choices: ["Cat-Cow stretch", "Arm circles", "Lunges", "Leg swings"],
		correctAnswer: 0,
	},
	{
		question: "What do clamshell exercises primarily target?",
		choices: ["Calves", "Hips and glutes", "Shoulders", "Forearms"],
		correctAnswer: 1,
	},
	{
		question: "Which mobility drill is used for ankles?",
		choices: [
			"Shoulder dislocations",
			"Hip circles",
			"Ankle circles",
			"Cat-Cow",
		],
		correctAnswer: 2,
	},
	{
		question: "Which exercise increases cervical spine mobility?",
		choices: ["Deadlifts", "Chin tucks", "Leg swings", "Squats"],
		correctAnswer: 1,
	},
	{
		question: "Which best defines flexibility?",
		choices: [
			"Muscle strength",
			"Joint control",
			"Muscle lengthening ability",
			"Joint stiffness",
		],
		correctAnswer: 2,
	},
	{
		question: "Which best defines stability?",
		choices: [
			"Ability to maintain control during movement",
			"Range of motion",
			"Length of a muscle",
			"Body fat ratio",
		],
		correctAnswer: 0,
	},
	{
		question: "What food category provides energy?",
		choices: ["Go foods", "Grow foods", "Glow foods", "No foods"],
		correctAnswer: 0,
	},
	{
		question: "Grow foods are rich in what nutrient?",
		choices: ["Sugar", "Protein", "Vitamin C", "Fiber"],
		correctAnswer: 1,
	},
	{
		question: "Which is NOT a benefit of glow foods?",
		choices: [
			"Improve skin health",
			"Build muscle mass",
			"Support immune function",
			"Provide vitamins and minerals",
		],
		correctAnswer: 1,
	},
	{
		question: "Which is an example of a Grow food?",
		choices: ["Banana", "Chicken breast", "Lettuce", "Soda"],
		correctAnswer: 1,
	},
	{
		question: "What do antioxidants help with?",
		choices: [
			"Build muscles",
			"Protect cells from damage",
			"Store energy",
			"Strengthen bones",
		],
		correctAnswer: 1,
	},
	{
		question: "What type of activity is light active lifestyle?",
		choices: ["Weightlifting", "Gardening", "Running", "Sprinting"],
		correctAnswer: 1,
	},
	{
		question: "What does the principle of specificity state?",
		choices: [
			"Train with heavy weights",
			"Adapt to specific activity demands",
			"Train only once a week",
			"Run long distances",
		],
		correctAnswer: 1,
	},
	{
		question: "The principle of overload involves which of the following?",
		choices: [
			"Staying within comfort zone",
			"Exceeding normal physical activity levels",
			"Decreasing effort",
			"Avoiding progression",
		],
		correctAnswer: 1,
	},
	{
		question: "Which training method fuses cardio and resistance?",
		choices: ["Tabata", "Yoga", "Circuit training", "Weightlifting"],
		correctAnswer: 2,
	},
	{
		question: "Which method trains for explosive power using SSC?",
		choices: ["HIIT", "Plyometrics", "Yoga", "Core training"],
		correctAnswer: 1,
	},
	{
		question: "Which is a key goal of fitness advocacy?",
		choices: [
			"Promote physical inactivity",
			"Encourage unhealthy eating",
			"Promote physical activity for all ages",
			"Increase sugar consumption",
		],
		correctAnswer: 2,
	},
	{
		question: "What does the principle of reversibility suggest?",
		choices: [
			"Fitness is permanent",
			"Overload leads to injury",
			"“Use it or lose it”",
			"Training reduces strength",
		],
		correctAnswer: 2,
	},
	{
		question: "What is the FITT principle?",
		choices: [
			"Focus, Integrity, Technique, Talent",
			"Frequency, Intensity, Time, Type",
			"Fun, Internalization, Timing, Targeting",
			"Fat, Insulin, Time, Training",
		],
		correctAnswer: 1,
	},
	{
		question: "What is the goal of core training?",
		choices: [
			"Burn calories",
			"Build flexibility",
			"Improve strength, stability, mobility of the core",
			"Train arms only",
		],
		correctAnswer: 2,
	},
	{
		question: "What nutrient in Go foods is the main energy source?",
		choices: ["Vitamins", "Iron", "Carbohydrates", "Water"],
		correctAnswer: 2,
	},
	{
		question: "Which is a benefit of calcium in Grow foods?",
		choices: ["Boosting energy", "Eye health", "Bone health", "Muscle pump"],
		correctAnswer: 2,
	},
	{
		question: "Which is a principle of sports training?",
		choices: ["Improvisation", "Progression", "Starvation", "Constancy"],
		correctAnswer: 1,
	},
	{
		question: "What is the benefit of a balanced diet?",
		choices: [
			"Lower immune function",
			"Increased fatigue",
			"Supports growth and prevents disease",
			"Builds only fat",
		],
		correctAnswer: 2,
	},
	{
		question: "Which exercise method includes short high-intensity intervals?",
		choices: [
			"HIIT",
			"Flexibility drills",
			"Weight training",
			"Endurance jogging",
		],
		correctAnswer: 0,
	},
	{
		question: "What kind of food is lettuce classified under?",
		choices: ["Go", "Glow", "Grow", "Fast"],
		correctAnswer: 1,
	},
	{
		question: "What role does iron play in the body?",
		choices: [
			"Build muscles",
			"Carry oxygen in the blood",
			"Make bones stronger",
			"Burn fat",
		],
		correctAnswer: 1,
	},
	{
		question: "Which exercise improves wrist mobility?",
		choices: ["Ankle circles", "Elbow swings", "Wrist circles", "Neck tilts"],
		correctAnswer: 2,
	},
	{
		question: "Which principle emphasizes recovery for improvement?",
		choices: ["Specificity", "Overload", "Recovery", "Individuality"],
		correctAnswer: 2,
	},
	{
		question: "What does “individuality” in training mean?",
		choices: [
			"Train like others",
			"Apply the same workout to all",
			"Tailor training to personal needs",
			"Focus only on running",
		],
		correctAnswer: 2,
	},
	{
		question: "What principle explains how the body remembers movements?",
		choices: ["Recovery", "Overload", "Adaptation", "Reversibility"],
		correctAnswer: 2,
	},
	{
		question: "Tabata training focuses on which aspect?",
		choices: [
			"Low-intensity yoga",
			"Long-distance running",
			"High-intensity short-duration exercise",
			"Slow stretching",
		],
		correctAnswer: 2,
	},
	{
		question: "What is a main benefit of core strength?",
		choices: [
			"Increased heart size",
			"Better ankle movement",
			"Improved posture and balance",
			"Bigger biceps",
		],
		correctAnswer: 2,
	},
	{
		question: "Why are stability exercises important?",
		choices: [
			"To stretch muscles",
			"To maintain control of joint positions",
			"To run faster",
			"To increase flexibility only",
		],
		correctAnswer: 1,
	},
];

function toggleDarkMode() {
	document.body.classList.toggle("dark-mode");
}

let currentQuestionIndex = 0;
let score = 0;
let userName = "";
let selectedAnswer = null;

function startQuiz() {
	userName = document.getElementById("nameInput").value.trim();
	if (!userName) {
		alert("Please enter your name!");
		return;
	}

	document.getElementById("nameSection").style.display = "none";
	document.getElementById("quizSection").style.display = "flex";
	loadQuestion();
}

function loadQuestion() {
	const question = questions[currentQuestionIndex];
	document.getElementById("questionText").textContent = question.question;
	document.getElementById("progress").textContent = `Question ${
		currentQuestionIndex + 1
	} of ${questions.length}`;

	const choicesContainer = document.getElementById("choices");
	choicesContainer.innerHTML = "";

	question.choices.forEach((choice, index) => {
		const choiceContainer = document.createElement("div");
		choiceContainer.className = "choice-container";

		const input = document.createElement("input");
		input.type = "radio";
		input.name = "choice";
		input.id = `choice-${index}`;
		input.className = "choice-radio";

		const label = document.createElement("label");
		label.htmlFor = `choice-${index}`;
		label.className = "choice-label";
		label.textContent = choice;

		label.addEventListener("click", () => {
			document
				.querySelectorAll(".choice-label")
				.forEach((l) => l.classList.remove("selected"));
			label.classList.add("selected");
			selectedAnswer = index;
		});

		choiceContainer.appendChild(input);
		choiceContainer.appendChild(label);
		choicesContainer.appendChild(choiceContainer);
	});

	document.getElementById("submitBtn").disabled = false;
	document.getElementById("nextBtn").disabled = true;
	selectedAnswer = null;
}

function submitAnswer() {
	if (selectedAnswer === null) {
		alert("Please select an answer!");
		return;
	}

	const question = questions[currentQuestionIndex];
	const labels = document.querySelectorAll(".choice-label");

	labels.forEach((label, index) => {
		label.classList.remove("correct", "incorrect");
		if (index === question.correctAnswer) {
			label.classList.add("correct");
		} else if (index === selectedAnswer) {
			label.classList.add("incorrect");
		}
	});

	if (selectedAnswer === question.correctAnswer) {
		score++;
	}

	document.getElementById("submitBtn").disabled = true;
	document.getElementById("nextBtn").disabled = false;
}

function nextQuestion() {
	currentQuestionIndex++;
	if (currentQuestionIndex < questions.length) {
		loadQuestion();
	} else {
		showResults();
	}
}

function showResults() {
	document.getElementById("quizSection").style.display = "none";
	document.getElementById("resultsSection").style.display = "flex";

	const percentage = Math.round((score / questions.length) * 100);
	let message = "";
	let emoji = "";

	if (percentage >= 90) {
		message = "Perfect! You're a fitness expert! 🎯";
		emoji = "🏆";
		triggerConfetti("gold");
	} else if (percentage >= 70) {
		message = "Great job! You know your stuff! 👍";
		emoji = "✨";
		triggerConfetti("blue");
	} else if (percentage >= 50) {
		message = "Good effort! Keep learning! 💪";
		emoji = "🔰";
	} else {
		message = "BOBO MO! 📚";
		emoji = "🌱";
	}

	document.getElementById("finalScore").innerHTML = `
        Score: <strong>${score}/${questions.length}</strong> (${percentage}%) ${emoji}<br>
        ${message}
    `;
	document.getElementById("userName").textContent = `Player: ${userName}`;
}

function triggerConfetti(color) {
	const confettiConfig = {
		particleCount: 150,
		spread: 70,
		origin: { y: 0.6 },
		colors: color === "gold" ? ["#ffd700", "#ffdf00"] : ["#00b4ff", "#008cff"],
	};
	confetti(confettiConfig);

	// Extra burst for top scores
	if (color === "gold") {
		setTimeout(() => {
			confetti({
				...confettiConfig,
				angle: 60,
				origin: { x: 0 },
			});
			confetti({
				...confettiConfig,
				angle: 120,
				origin: { x: 1 },
			});
		}, 300);
	}
}
