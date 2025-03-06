class TypingTest {
  constructor() {
    // Comprehensive word lists for different difficulties
    this.wordLists = {
      easy: [
        "the", "be", "of", "and", "a", "to", "in", "he", "have", "it", "that", "for", "they", "with", "as", "not", "on", "she", 
        "at", "by", "this", "we", "you", "do", "but", "from", "or", "which", "one", "would", "all", "will", "there", "say", 
        "who", "make", "when", "can", "more", "if", "no", "man", "out", "other", "so", "what", "time", "up", "go", "about", 
        "than", "into", "could", "state", "only", "new", "year", "some", "take", "come", "these", "know", "see", "use", "get", 
        "like", "then", "first", "any", "work", "now", "may", "such", "give", "over", "think", "most", "even", "find", "day", 
        "also", "after", "way", "many", "must", "look", "before", "great", "back", "through", "long", "where", "much", "should", 
        "well", "people", "down", "own", "just", "because", "good", "each", "those", "feel", "seem", "how", "high", "too", 
        "place", "little", "world", "very", "still", "nation", "hand", "old", "life", "tell", "write", "become", "here", 
        "show", "house", "both", "between", "need", "mean", "call", "develop", "under", "last", "right", "move", "thing", 
        "general", "school", "never", "same", "another", "begin", "while", "number", "part", "turn", "real"
      ],
      medium: [
        "the", "be", "of", "and", "a", "to", "in", "he", "have", "it",
        "that", "for", "they", "with", "as", "not", "on", "she", "at", "by",
        "this", "we", "you", "do", "but", "from", "or", "which", "one", "would",
        "all", "will", "there", "say", "who", "make", "when", "can", "more", "if",
        "about", "again", "always", "around", "because", "been", "being", "below", 
        "both", "but", "could", "every", "few", "find", "first", "for", "found", 
        "from", "get", "give", "going", "had", "has", "have", "he", "help", "her",
        "here", "him", "his", "how", "however", "i", "if", "in", "into", "is", 
        "it", "its", "just", "keep", "know", "large", "last", "late", "later", 
        "least", "left", "less", "let", "like", "likely", "little", "long", "look", 
        "made", "make", "man", "many", "may", "me", "mean", "meanwhile", "might", 
        "more", "most", "move", "much", "must", "my", "myself", "near", "need", 
        "never", "new", "next", "no", "not", "now", "of", "off", "often", "on", 
        "once", "one", "only", "open", "or", "order", "other", "our", "out", 
        "over", "own", "part", "past", "people", "per", "person", "place", "plan", 
        "play", "point", "police", "policy", "political", "poor", "popular", 
        "population", "position", "possible", "post", "potential", "power", 
        "practice", "prepare", "present", "president", "press", "price", "private", 
        "problem", "process", "produce", "product", "production", "professional", 
        "program", "project", "promote", "property", "protect", "public", "publish", 
        "pull", "push", "put", "quality", "question", "quite", "quote", "race", 
        "radio", "raise", "range", "rate", "rather", "read", "ready", "real", 
        "reason", "receive", "recent", "recognize", "record", "reduce", "reflect", 
        "regard", "region", "register", "regular", "relate", "relation", "relative", 
        "release", "relevant", "rely", "remain", "remark", "remember", "remind", 
        "remote", "remove", "rent", "repair", "repeat", "replace", "report", 
        "represent", "request", "require", "research", "reserve", "resist", 
        "resolve", "respect", "respond", "rest", "result", "return", "reveal", 
        "review", "revise", "reward", "rich", "right", "rise", "risk", "road", 
        "role", "roll", "room", "round", "route", "row", "rule", "run", "safe", 
        "same", "sample", "save", "say", "scale", "scene", "schedule", "scheme", 
        "school", "science", "scope", "score", "screen", "search", "season", 
        "seat", "second", "secret", "section", "sector", "secure", "see", "seek", 
        "seem", "select", "sell", "send", "senior", "sense", "series", "serious", 
        "serve", "service", "session", "set", "setting", "seven", "several", 
        "severe", "shape", "share", "sharp", "she", "shift", "shine", 
        "ship", "shock", "shoot", "shop", "short", "shot", "should", "shoulder", 
        "show", "side", "sight", "sign", "signal", "simple", "since", "sing", 
        "single", "sink", "sit", "site", "situation", "six", "size", "skill", 
        "skin", "sky", "sleep", "slide", "slip", "slow", "small", "smart", 
        "smell", "smile", "smoke", "smooth", "snap", "snow", "so", "social", 
        "society", "soft", "software", "soil", "soldier", "solid", "solution", 
        "solve", "some", "someone", "something", "sometimes", "somewhere", "son", 
        "song", "soon", "sort", "sound", "source", "south", "space", "speak", 
        "special", "species", "specific", "speech", "speed", "spell", "spend", 
        "spent", "sphere", "spirit", "sport", "spot", "spread", "spring", 
        "square", "staff", "stage", "stair", "stake", "stand", "standard", 
        "star", "start", "state", "statement", "station", "statistic", "status", 
        "stay", "steal", "step", "stick", "still", "stock", "stone", "stop", 
        "store", "story", "straight", "strange", "strategy", "stream", "street", 
        "strength", "stress", "stretch", "strike", "string", "strong", "structure", 
        "student", "study", "style", "subject", "submit", "substance", "success", 
        "successful", "such", "sudden", "suffer", "suggest", "suit", "summer", 
        "summit", "sun", "super", "supply", "support", "suppose", "sure", "surface", 
        "surprise", "surround", "survey", "survive", "suspect", "sustain", "swim", 
        "switch", "symbol", "system", "table", "tactic", "tail", "take", "talk", 
        "tall", "tank", "task", "taste", "tax", "teach", "team", "tear", "technique", 
        "technology", "telephone", "television", "tell", "temperature", "ten", 
        "tend", "tension", "term", "test", "text", "than", "thank", "that", 
        "the", "theme", "then", "theory", "there", "these", "they", "thing", 
        "think", "third", "this", "those", "though", "thought", "thousand", 
        "threat", "three", "threshold", "throw", "thus", "ticket", "tie", "till", 
        "time", "tiny", "tip", "title", "to", "today", "together", "told", 
        "tomorrow", "ton", "tone", "tool", "topic", "total", "touch", "tough", 
        "tour", "toward", "town", "toy", "track", "trade", "tradition", "traffic", 
        "train", "transfer", "transform", "transition", "translate", "transport", 
        "travel", "treat", "treaty", "tree", "trend", "trial", "tribe", "trick", 
        "trip", "trouble", "truck", "true", "trust", "truth", "try", "tube", 
        "turn", "twelve", "twenty", "twice", "two", "type", "typical", "uncle", 
        "under", "understand", "unit", "unite", "university", "unknown", "until", 
        "up", "upon", "upper", "urban", "use", "used", "user", "usual", "utility", 
        "vacant", "vacation", "valley", "value", "variety", "various", "vast", 
        "vehicle", "vendor", "version", "very", "vessel", "veteran", "via", 
        "vice", "victim", "victory", "video", "view", "village", "violence", 
        "virtual", "virtue", "visible", "vision", "visit", "visual", "vital", 
        "voice", "volume", "volunteer", "vote", "voter", "voting", "voyage", 
        "wage", "wait", "wake", "walk", "wall", "want", "war", "warm", "warn", 
        "wash", "waste", "watch", "water", "wave", "way", "we", "weak", "wealth", 
        "weapon", "wear", "weather", "web", "week", "weight", "welcome", "welfare", 
        "well", "went", "were", "west", "wet", "what", "wheel", "when", "where", 
        "which", "while", "white", "whole", "why", "wide", "wife", "wild", "will", 
        "win", "wind", "window", "wine", "wing", "winner", "winter", "wire", 
        "wise", "wish", "with", "within", "without", "woman", "wonder", "wood", 
        "word", "work", "worker", "world", "worry", "worth", "would", "wound", 
        "wrap", "write", "wrong", "wrote", "year", "yell", "yes", "yesterday", 
        "yet", "yield", "you", "young", "your", "youth", "zero", "zone"
      ],
      hard: [
        "algorithm", "synchronize", "bureaucracy", "entrepreneurial", "philosophical", "comprehensive", "extraordinary", 
        "revolutionary", "interdisciplinary", "sustainability", "infrastructure", "telecommunications", "decentralization", 
        "environmentalism", "collaboration", "multinational", "technological", "hypothetical", "sophisticated", "implementation", 
        "metamorphosis", "conglomerate", "anthropological", "idiosyncratic", "neurological", "unprecedented", "differentiation", 
        "quantitative", "qualitative", "bureaucratic", "retrospective", "juxtaposition", "transcendental", "misconception", 
        "cryptographic", "phenomenology", "constitutional", "psychological", "multidimensional", "recapitulation", "legislation", 
        "interpretation", "rationalization", "conceptualization", "ethnographic", "sociocultural", "substantiate", "corroboration", 
        "hierarchical", "autonomous", "speculative", "computational", "interoperability", "exponential", "perpendicular", 
        "microprocessor", "socioeconomic", "transmutation", "cybersecurity", "biotechnology", "counterintuitive", "conscientious", 
        "universalism", "mechanization", "theoretical", "perseverance", "circumstantial", "nonconformist", "prerogative", 
        "delineation", "prognostication", "stratification", "institutional", "proprietary", "collateral", "manipulative", 
        "superimposed", "indistinguishable", "introspection", "proliferation", "overcompensate", "materialistic", "humanitarian", 
        "impersonation", "conceptualize", "misinterpretation", "ambidextrous", "authoritarian", "irrefutable", "perpetuation", 
        "industrialization", "conglomeration", "exemplification", "reconciliation", "bureaucratization", "permutation", 
        "deliberation", "procrastination", "hyperbolic", "methodology", "existential", "magnanimous", "paramount", "effervescence"
      ]
    };

    this.elements = {
      testContainer: document.getElementById("test-container"),
      textDisplay: document.getElementById("text-display"),
      timer: document.getElementById("timer"),
      progressBar: document.getElementById("progress-bar"),
      restartBtn: document.getElementById("restart-btn"),
      resultContainer: document.getElementById("result-container"),
      wpmResult: document.getElementById("wpm-result"),
      accuracyResult: document.getElementById("accuracy-result"),
      timeResult: document.getElementById("time-result"),
      correctWordsResult: document.getElementById("correct-words"),
      wordCountSelect: document.getElementById("word-count-select"),
      difficultySelect: document.getElementById("difficulty-select")
    };

    this.state = {
      words: [],
      currentInput: "",
      startTime: 0,
      endTime: 0,
      timerInterval: null,
      currentIndex: 0,
      correctWords: 0,
      totalWords: 25,
      difficulty: "medium", // Default difficulty
      cursor: null,
      totalTypedChars: 0,
      totalExpectedChars: 0
    };

    this.initializeEventListeners();
    this.loadSavedSettings();
    this.generateTest();
  }

  loadSavedSettings() {
    // Load saved word count
    const storedWordCount = localStorage.getItem("selectedWordCount");
    if (storedWordCount) {
      this.state.totalWords = parseInt(storedWordCount);
      this.elements.wordCountSelect.value = storedWordCount;
    }

    // Load saved difficulty
    const storedDifficulty = localStorage.getItem("selectedDifficulty");
    if (storedDifficulty) {
      this.state.difficulty = storedDifficulty;
      this.elements.difficultySelect.value = storedDifficulty;
    }
  }

  initializeEventListeners() {
    document.addEventListener("keydown", (e) => this.handleInput(e));
    document.addEventListener("keydown", (e) => this.handleTabInput(e));
    this.elements.restartBtn.addEventListener("click", () => this.resetTest());
    
    // Add event listeners for word count and difficulty selectors
    this.elements.wordCountSelect.addEventListener("change", (e) => {
      const newWordCount = parseInt(e.target.value);
      localStorage.setItem("selectedWordCount", newWordCount);
      location.reload();
    });

    this.elements.difficultySelect.addEventListener("change", (e) => {
      const newDifficulty = e.target.value;
      localStorage.setItem("selectedDifficulty", newDifficulty);
      location.reload();
    });
  }

  handleTabInput(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      this.scrambleWords();
      this.generateTest();
    }
  }

  scrambleWords() {
    // Use the current difficulty's word list
    const selectedWordList = this.wordLists[this.state.difficulty];
    this.state.words = Array.from(
      { length: this.state.totalWords },
      () => selectedWordList[Math.floor(Math.random() * selectedWordList.length)]
    );
  }

  generateTest() {
    // Use the current difficulty's word list
    const selectedWordList = this.wordLists[this.state.difficulty];

    // Reset containers and progress
    this.elements.testContainer.classList.remove("hidden");
    this.elements.resultContainer.classList.add("hidden");
    this.elements.progressBar.style.width = "0%";

    // Generate random words based on current difficulty
    this.state.words = Array.from(
      { length: this.state.totalWords },
      () => selectedWordList[Math.floor(Math.random() * selectedWordList.length)]
    );

    // Reset state
    this.state.currentInput = "";
    this.state.currentIndex = 0;
    this.state.correctWords = 0;
    this.state.totalTypedChars = 0;
    
    // Calculate total expected characters (including spaces between words)
    this.state.totalExpectedChars = this.state.words.reduce((total, word) => total + word.length, 0) + this.state.words.length - 1;

    // Clear text display
    this.elements.textDisplay.innerHTML = "";

    // Create word elements
    this.state.words.forEach((word) => {
      const wordElement = document.createElement("span");
      wordElement.classList.add("word");
      wordElement.textContent = word + " ";
      this.elements.textDisplay.appendChild(wordElement);
    });

    // Set up first word and cursor
    this.elements.textDisplay.firstChild.classList.add("active");
    this.resetTimer();
    this.createCursor();
    this.updateCursorPosition();
  }

  createCursor() {
    if (!this.state.cursor) {
      this.state.cursor = document.createElement("span");
      this.state.cursor.classList.add("cursor");
      this.state.cursor.innerHTML = "|";
      this.elements.textDisplay.appendChild(this.state.cursor);
    }
  }

  updateCursorPosition() {
    if (!this.state.cursor) return;
    const activeWordElement =
      this.elements.textDisplay.children[this.state.currentIndex];
    if (activeWordElement) {
      const letters = activeWordElement.querySelectorAll(".letter");
      if (letters.length > 0 && this.state.currentInput.length > 0) {
        if (this.state.currentInput.length <= letters.length) {
          letters[this.state.currentInput.length - 1].after(this.state.cursor);
        } else {
          letters[letters.length - 1].after(this.state.cursor);
        }
      } else {
        activeWordElement.prepend(this.state.cursor);
      }
    }
  }

  handleInput(event) {
    if (this.state.startTime === 0) {
      this.startTimer();
    }
  
    if (
      event.key.length === 1 ||
      event.key === "Backspace" ||
      event.key === " "
    ) {
      event.preventDefault();
      
      // Don't process input if the test is already complete
      if (this.state.currentIndex >= this.state.words.length) {
        return;
      }
      
      const currentWord = this.state.words[this.state.currentIndex];
      let activeWordElement =
        this.elements.textDisplay.children[this.state.currentIndex];
  
      if (event.key === "Backspace") {
        if (this.state.currentInput.length > 0) {
          this.state.currentInput = this.state.currentInput.slice(0, -1);
          this.state.totalTypedChars--;
        }
      } else if (event.key === " ") {
        if (this.state.currentInput.length > 0) {
          this.checkWordAccuracy(currentWord, activeWordElement);
          this.moveToNextWord();
          this.state.totalTypedChars++; // Count the space
        }
      } else {
        // FIX: Only count character if it's within the word length or we're at the last character
        // This prevents spam typing at the end of a word from artificially increasing char count
        if (this.state.currentInput.length < currentWord.length) {
          this.state.currentInput += event.key;
          this.state.totalTypedChars++;
        }
      }
  
      // Update letter display in current word
      activeWordElement.innerHTML = "";
      for (let i = 0; i < currentWord.length; i++) {
        const letter = document.createElement("span");
        letter.classList.add("letter");
        letter.textContent = currentWord[i];
        if (i < this.state.currentInput.length) {
          if (this.state.currentInput[i] !== currentWord[i]) {
            letter.classList.add("incorrect");
          }
        }
        activeWordElement.appendChild(letter);
      }
      this.updateCursorPosition();
  
      // Update progress bar based on completed words only
      const progressPercentage = (this.state.currentIndex / this.state.totalWords) * 100;
      this.elements.progressBar.style.width = `${Math.min(progressPercentage, 100)}%`;
  
      // Check if all characters have been typed correctly for the last word
      if (
        this.state.currentIndex === this.state.words.length - 1 &&
        this.state.currentInput === currentWord
      ) {
        this.checkWordAccuracy(currentWord, activeWordElement);
        this.state.currentIndex++; // Move past the last word
        this.endTest();
      }
  
      // Alternative end condition: check if total typed characters equals expected characters
      // FIX: This shouldn't be needed if we count characters correctly, but leave it as a backup
      if (this.state.currentIndex === this.state.words.length - 1) {
        // If we're on the last word, check if we've typed it completely
        if (this.state.currentInput.length === currentWord.length) {
          const allCorrect = this.state.currentInput === currentWord;
          if (allCorrect) {
            this.checkWordAccuracy(currentWord, activeWordElement);
            this.state.currentIndex++;
            this.endTest();
          }
        }
      }
    }
  }
  
  moveToNextWord() {
    let activeWordElement =
      this.elements.textDisplay.children[this.state.currentIndex];
    activeWordElement.classList.remove("active");
    this.state.currentIndex++;
    this.state.currentInput = "";
  
    if (this.state.currentIndex < this.state.words.length) {
      this.elements.textDisplay.children[this.state.currentIndex].classList.add(
        "active"
      );
      this.updateCursorPosition();
      
      // Update progress bar whenever we move to the next word
      const progressPercentage = (this.state.currentIndex / this.state.totalWords) * 100;
      this.elements.progressBar.style.width = `${Math.min(progressPercentage, 100)}%`;
    } else {
      this.endTest();
    }
  }

  checkWordAccuracy(currentWord, activeWordElement) {
    if (this.state.currentInput.trim() === currentWord) {
      activeWordElement.classList.add("correct");
      this.state.correctWords++;
    } else {
      activeWordElement.classList.add("incorrect");
    }
  }

  startTimer() {
    this.state.startTime = Date.now();
    this.state.timerInterval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - this.state.startTime) / 1000);
      this.elements.timer.textContent = `${elapsed}s`;
    }, 1000);
  }

  resetTimer() {
    clearInterval(this.state.timerInterval);
    this.state.startTime = 0;
    this.elements.timer.textContent = "0s";
  }

  calculateResults() {
    const testDuration = (this.state.endTime - this.state.startTime) / 60000; // Convert to minutes
    const wordsPerMinute = Math.round(
      this.state.correctWords / testDuration || 0
    );
    const accuracy = Math.round(
      (this.state.correctWords / this.state.totalWords) * 100
    );
    const totalTime = Math.floor(
      (this.state.endTime - this.state.startTime) / 1000
    );

    return {
      wpm: wordsPerMinute,
      accuracy: accuracy,
      time: totalTime,
      correctWords: `${this.state.correctWords}/${this.state.totalWords}`,
    };
  }

  resetTest(newWordCount) {
    clearInterval(this.state.timerInterval);
    if (newWordCount) {
      this.state.totalWords = newWordCount;
    }
    this.generateTest();
  }

  endTest() {
    clearInterval(this.state.timerInterval);
    this.state.endTime = Date.now();

    const results = this.calculateResults();
    this.elements.wpmResult.textContent = results.wpm;
    this.elements.accuracyResult.textContent = `${results.accuracy}%`;
    this.elements.timeResult.textContent = `${results.time}s`;
    this.elements.correctWordsResult.textContent = results.correctWords;

    this.elements.testContainer.classList.add("hidden");
    this.elements.resultContainer.classList.remove("hidden");
    this.elements.textDisplay.classList.add("no-wrap");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const typingTest = new TypingTest(); // Create ONE instance here
});