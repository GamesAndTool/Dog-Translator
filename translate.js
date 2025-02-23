// Audio files mapping
const audioMap = {
    bark: new Audio('sounds/bark.wav'),
    grr: new Audio('sounds/grr.wav'),
    howl: new Audio('sounds/howl.wav'),
    whine: new Audio('sounds/whine.wav'),
    woof: new Audio('sounds/woof.mp3'),
    yip: new Audio('sounds/yip.wav')
};

// Function to play dog sound
function playDogSound(emotion, soundType) {
    let audio;
    
    // Select appropriate sound based on emotion and type
    if (emotion === 'alert' || emotion === 'anxious') {
        audio = audioMap.grr;
    } else if (emotion === 'tired') {
        audio = audioMap.whine;
    } else if (soundType === 'long') {
        audio = audioMap.howl;
    } else if (emotion === 'happy' || emotion === 'playful') {
        audio = audioMap.yip;
    } else {
        audio = audioMap.woof;
    }
    
    return new Promise((resolve, reject) => {
        // Check if audio is ready
        if (audio.readyState >= 2) {
            // Reset audio to start
            audio.currentTime = 0;
            // Play the sound
            audio.play()
                .then(() => resolve())
                .catch(error => {
                    console.error('Error playing audio:', error);
                    resolve(); // Resolve anyway to prevent UI from hanging
                });
        } else {
            // If audio is not loaded, wait for it
            audio.addEventListener('canplay', () => {
                audio.currentTime = 0;
                audio.play()
                    .then(() => resolve())
                    .catch(error => {
                        console.error('Error playing audio:', error);
                        resolve(); // Resolve anyway to prevent UI from hanging
                    });
            }, { once: true });
            
            // Handle load error
            audio.addEventListener('error', () => {
                console.error('Error loading audio');
                resolve(); // Resolve anyway to prevent UI from hanging
            }, { once: true });
        }
    });
}

// Dog sound patterns for different emotions
const soundMap = {
    happy: {
        short: ['woof!', 'yip!', 'arf!'],
        medium: ['woof woof!', 'arf arf!', 'yip yip!'],
        long: ['woof woof woof!', 'ruff ruff ruff!', 'yap yap yap!']
    },
    friendly: {
        short: ['ruff', 'wuf', 'boof'],
        medium: ['woof-woof', 'ruff-ruff', 'boof-boof'],
        long: ['awoooo~', 'woof woof woof~', 'ruff ruff ruff~']
    },
    alert: {
        short: ['bark!', 'woof!', 'grr!'],
        medium: ['bark bark!', 'woof woof!', 'grr... woof!'],
        long: ['BARK BARK BARK!', 'WOOF WOOF WOOF!', 'GRR... BARK BARK!']
    },
    playful: {
        short: ['yip!', 'arf!', 'bork!'],
        medium: ['yip yip!', 'arf arf!', 'bork bork!'],
        long: ['ruff ruff ruff!', 'yap yap yap!', 'bork bork bork!']
    },
    attention: {
        short: ['whine~', 'woof?', 'yip?'],
        medium: ['whiiine~', 'woof woof?', 'yip yip?'],
        long: ['awooo~', 'whiiiiine~', 'yip yip yiiip~']
    },
    tired: {
        short: ['*yawn*', 'mff...', 'huff~'],
        medium: ['*big yawn*', 'hufff puff~', 'mmmff...'],
        long: ['*looong yawn*', 'hufff... pufff...', 'mmmfff... *snore*']
    },
    hungry: {
        short: ['wuff!', 'yip!', '*lick*'],
        medium: ['wuff wuff!', '*lick lick*', 'whine~'],
        long: ['wuff wuff wuff!', '*excited licking*', 'whiiine~']
    },
    anxious: {
        short: ['whimper~', 'ruff?', '*pant*'],
        medium: ['whimper whimper~', '*nervous panting*', 'ruff ruff?'],
        long: ['whiiimper~', '*heavy panting*', 'ruff ruff ruff?']
    }
};

// Dog breed characteristics
const breedTraits = {
    small: { pitch: 'high', volume: 'moderate', style: 'yappy' },
    medium: { pitch: 'medium', volume: 'moderate', style: 'balanced' },
    large: { pitch: 'low', volume: 'loud', style: 'deep' }
};

// Translation logic
function translateToBarks(text, emotion) {
    const words = text.trim().split(/\s+/);
    let translation = [];
    let visualPattern = [];
    
    // Detect text sentiment
    const sentiment = detectSentiment(text);
    const emotionType = sentiment ? sentiment : emotion;
    
    words.forEach(word => {
        const length = word.length;
        let soundType;
        
        if (length <= 3) soundType = 'short';
        else if (length <= 6) soundType = 'medium';
        else soundType = 'long';
        
        const sounds = soundMap[emotionType][soundType];
        let bark = sounds[Math.floor(Math.random() * sounds.length)];
        
        // Add sound characteristics based on breed size (default to medium)
        bark = adjustSound(bark, 'medium');
        
        translation.push(bark);
        
        // Add visual pattern based on emotion
        visualPattern.push(getEmotionEmoji(emotionType));
    });
    
    return {
        sounds: translation,
        pattern: visualPattern
    };
}

// Detect text sentiment based on keywords
function detectSentiment(text) {
    const keywords = {
        happy: ['happy', 'excited', 'joy', 'fun', 'play', 'good'],
        anxious: ['worried', 'scared', 'nervous', 'anxiety', 'fear'],
        tired: ['tired', 'sleepy', 'rest', 'nap', 'sleep', 'exhausted'],
        hungry: ['food', 'hungry', 'eat', 'treat', 'snack', 'meal'],
        alert: ['danger', 'watch', 'careful', 'attention', 'look'],
        playful: ['play', 'toy', 'game', 'fun', 'ball', 'fetch'],
        friendly: ['friend', 'love', 'nice', 'gentle', 'kind', 'sweet']
    };
    
    const lowercaseText = text.toLowerCase();
    for (let emotion in keywords) {
        if (keywords[emotion].some(keyword => lowercaseText.includes(keyword))) {
            return emotion;
        }
    }
    return null;
}

// Adjust sound based on breed size
function adjustSound(sound, breedSize) {
    const trait = breedTraits[breedSize];
    let adjustedSound = sound;
    
    // Adjust pitch
    if (trait.pitch === 'high') {
        adjustedSound = adjustedSound.replace(/woof/gi, 'yip');
        adjustedSound = adjustedSound.replace(/bark/gi, 'yap');
    } else if (trait.pitch === 'low') {
        adjustedSound = adjustedSound.replace(/yip/gi, 'woof');
        adjustedSound = adjustedSound.replace(/yap/gi, 'bark');
    }
    
    // Adjust volume
    if (trait.volume === 'loud') {
        adjustedSound = adjustedSound.toUpperCase();
    }
    
    return adjustedSound;
}

// Get emotion emoji
function getEmotionEmoji(emotion) {
    const emojiMap = {
        happy: '🐕💫',
        friendly: '🐕💝',
        alert: '🐕⚡',
        playful: '🐕✨',
        attention: '🐕❗',
        tired: '🐕💤',
        hungry: '🐕🍖',
        anxious: '🐕😰'
    };
    return emojiMap[emotion] || '🐕';
}

// UI Interaction
document.addEventListener('DOMContentLoaded', function() {
    const translateButton = document.getElementById('translate-button');
    const humanInput = document.getElementById('human-input');
    const emotionSelect = document.getElementById('emotion-select');
    const translationDisplay = document.getElementById('translation-display');
    
    translateButton.addEventListener('click', function() {
        const text = humanInput.value;
        const emotion = emotionSelect.value;
        
        if (!text) return;
        
        // Show loading state
        this.disabled = true;
        this.textContent = 'Translating...';
        
        // Simulate processing delay
        setTimeout(() => {
            const translation = translateToBarks(text, emotion);
            
            // Display translation with visual patterns
            translationDisplay.innerHTML = `
                <div class="text-center">
                    <div class="text-2xl mb-4">${translation.pattern.join(' ')}</div>
                    <div class="text-xl mb-2">${translation.sounds.join(' ')}</div>
                    <p class="text-gray-600 mt-4">Translation based on ${emotion} emotion</p>
                </div>
            `;
            
            // Play appropriate dog sound and ensure button reset
            playDogSound(emotion, text.split(/\s+/).length > 6 ? 'long' : 'short')
                .then(() => {
                    // Reset button after sound plays or if there's an error
                    this.disabled = false;
                    this.textContent = 'Translate to Dog Language';
                });
        }, 500);
    });
});