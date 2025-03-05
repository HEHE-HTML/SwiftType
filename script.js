class TypingTest {
  constructor() {
    // Expanded word list for more variety
    this.wordList = [
      "the",
      "be",
      "of",
      "and",
      "a",
      "to",
      "in",
      "he",
      "have",
      "it",
      "that",
      "for",
      "they",
      "with",
      "as",
      "not",
      "on",
      "she",
      "at",
      "by",
      "this",
      "we",
      "you",
      "do",
      "but",
      "from",
      "or",
      "which",
      "one",
      "would",
      "all",
      "will",
      "there",
      "say",
      "who",
      "make",
      "when",
      "can",
      "more",
      "if",
      "no",
      "man",
      "out",
      "other",
      "so",
      "what",
      "time",
      "up",
      "go",
      "about",
      "than",
      "into",
      "could",
      "state",
      "only",
      "new",
      "year",
      "some",
      "take",
      "come",
      "these",
      "know",
      "see",
      "use",
      "get",
      "like",
      "then",
      "first",
      "any",
      "work",
      "now",
      "may",
      "such",
      "give",
      "over",
      "think",
      "most",
      "even",
      "find",
      "day",
      "also",
      "after",
      "way",
      "many",
      "must",
      "look",
      "before",
      "great",
      "back",
      "through",
      "long",
      "where",
      "much",
      "should",
      "well",
      "people",
      "down",
      "own",
      "just",
      "because",
      "good",
      "each",
      "those",
      "feel",
      "seem",
      "how",
      "high",
      "too",
      "place",
      "little",
      "world",
      "very",
      "still",
      "nation",
      "hand",
      "old",
      "life",
      "tell",
      "write",
      "become",
      "here",
      "show",
      "house",
      "both",
      "between",
      "need",
      "mean",
      "call",
      "develop",
      "under",
      "last",
      "right",
      "move",
      "thing",
      "general",
      "school",
      "never",
      "same",
      "another",
      "begin",
      "while",
      "number",
      "part",
      "turn",
      "real",
    ];

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
      cursor: null,
    };

    this.initializeEventListeners();
    this.generateTest();
  }

  initializeEventListeners() {
    document.addEventListener("keydown", (e) => this.handleInput(e));
    document.addEventListener("keydown", (e) => this.handleTabInput(e)); // Added Tab listener
    this.elements.restartBtn.addEventListener("click", () => this.resetTest());
  }
  handleTabInput(event) {
    // Check if the Tab key is pressed
    if (event.key === "Tab") {
      event.preventDefault(); // Prevent default behavior of Tab (focus shift)
      this.scrambleWords(); // Call the function to scramble the words
      this.generateTest(); // Regenerate the test with scrambled words
    }
  }
  scrambleWords() {
    // Scramble the word list randomly
    this.state.words = Array.from(
      { length: this.state.totalWords },
      () => this.wordList[Math.floor(Math.random() * this.wordList.length)]
    );
  }

  generateTest() {
    // Reset visibility of containers
    this.elements.testContainer.classList.remove("hidden");
    this.elements.resultContainer.classList.add("hidden");

    // Reset progress bar
    this.elements.progressBar.style.width = "0%";

    // Generate random words
    this.state.words = Array.from(
      { length: this.state.totalWords },
      () => this.wordList[Math.floor(Math.random() * this.wordList.length)]
    );
    this.state.currentInput = "";
    this.state.currentIndex = 0;
    this.state.correctWords = 0;

    this.elements.textDisplay.innerHTML = "";

    this.state.words.forEach((word) => {
      const wordElement = document.createElement("span");
      wordElement.classList.add("word");
      wordElement.textContent = word + " ";
      this.elements.textDisplay.appendChild(wordElement);
    });

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
      const currentWord = this.state.words[this.state.currentIndex];
      let activeWordElement =
        this.elements.textDisplay.children[this.state.currentIndex];

      if (event.key === "Backspace") {
        this.state.currentInput = this.state.currentInput.slice(0, -1);
      } else if (event.key === " ") {
        if (this.state.currentInput.length > 0) {
          this.checkWordAccuracy(currentWord, activeWordElement);
          this.moveToNextWord();
        }
      } else {
        // Allow continuing even if previous word was incorrect
        if (this.state.currentInput.length < currentWord.length) {
          this.state.currentInput += event.key;
        }
      }

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

      // Update progress bar
      const progressPercentage =
        ((this.state.currentIndex + 1) / this.state.totalWords) * 100;
      this.elements.progressBar.style.width = `${progressPercentage}%`;

      // Check if it's the last word
      if (
        this.state.currentIndex === this.state.words.length  &&
        this.state.currentInput === this.state.words[this.state.currentIndex]
      ) {
        this.endTest();
      }
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
    } else {
      this.endTest();
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
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const wordSelect = document.getElementById("word-count-select");
  const typingTest = new TypingTest(); // Create ONE instance here

  wordSelect.addEventListener("change", (e) => {
    const newWordCount = parseInt(e.target.value);

    // Store the selected word count in localStorage
    localStorage.setItem("selectedWordCount", newWordCount);

    // Reload the page to reflect the new word count
    location.reload();
  });

  // Retrieve the word count from localStorage when the page loads
  const storedWordCount = localStorage.getItem("selectedWordCount");
  if (storedWordCount) {
    typingTest.state.totalWords = parseInt(storedWordCount);
    typingTest.resetTest();
    wordSelect.value = storedWordCount; // Keep the dropdown selection consistent
  }
});
