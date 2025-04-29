// Audio files mapping - keeping as fallback
const audioMap = {
    bark: new Audio('sounds/bark.wav'),
    grr: new Audio('sounds/grr.wav'),
    howl: new Audio('sounds/howl.wav'),
    whine: new Audio('sounds/whine.wav'),
    woof: new Audio('sounds/woof.mp3'),
    yip: new Audio('sounds/yip.wav')
};

// ElevenLabs API Configuration
const ELEVENLABS_API_KEY = 'sk_33a636126e9257af3c23904f544498b3e25bacb54fd6545e'; // Replace with your actual API key
const ELEVENLABS_API_URL = 'https://api.elevenlabs.io/v1/text-to-bark';

// Function to play dog sound using ElevenLabs API
async function playDogSoundWithElevenLabs(text, emotion, breedSize) {
    try {
        // Show loading state or indicator
        const loadingIndicator = document.createElement('div');
        loadingIndicator.id = 'bark-loading';
        loadingIndicator.innerHTML = `
            <div class="text-center">
                <p class="text-gray-600">Generating bark...</p>
                <div class="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-blue-600 h-2.5 rounded-full animate-pulse" style="width: 100%"></div>
                </div>
            </div>
        `;
        document.getElementById('translation-display').appendChild(loadingIndicator);
        
        // Prepare request data for Text to Bark API
        const requestData = {
            text: text,
            emotion: emotion,
            breed_size: breedSize,
            output_format: 'mp3'
        };
        
        // Call the ElevenLabs API
        const response = await fetch(ELEVENLABS_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'xi-api-key': ELEVENLABS_API_KEY
            },
            body: JSON.stringify(requestData)
        });
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }
        
        // Get the audio data from the response
        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        
        // Create and play the audio
        const audio = new Audio(audioUrl);
        
        // Remove loading indicator
        document.getElementById('bark-loading')?.remove();
        
        // Play audio
        await audio.play();
        
        // Clean up the object URL after playing
        audio.onended = () => {
            URL.revokeObjectURL(audioUrl);
        };
        
        return Promise.resolve();
    } catch (error) {
        console.error('Error with ElevenLabs API:', error);
        document.getElementById('bark-loading')?.remove();
        
        // Fallback to original audio handling
        console.log('Falling back to local audio...');
        return playDogSoundFallback(emotion, text.split(/\s+/).length > 6 ? 'long' : 'short');
    }
}

// Original function renamed as fallback
function playDogSoundFallback(emotion, soundType) {
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

// Use the original function name to maintain compatibility
function playDogSound(emotion, soundType) {
    // By default, use the ElevenLabs version
    const useElevenLabs = true; // Can be made into a user setting
    
    if (useElevenLabs) {
        // Generate text based on emotion
        let textToConvert = '';
        switch(emotion) {
            case 'happy':
                textToConvert = 'I am so happy and excited!';
                break;
            case 'alert':
                textToConvert = 'Warning! Something suspicious is happening!';
                break;
            case 'friendly':
                textToConvert = 'Hello! I am feeling friendly and calm.';
                break;
            case 'playful':
                textToConvert = 'Let\'s play together! This is fun!';
                break;
            case 'attention':
                textToConvert = 'Hey! Pay attention to me please!';
                break;
            case 'tired':
                textToConvert = 'I am so tired and sleepy...';
                break;
            case 'hungry':
                textToConvert = 'I am hungry! Feed me please!';
                break;
            case 'anxious':
                textToConvert = 'I am feeling nervous and uncomfortable...';
                break;
            default:
                textToConvert = 'Hello human!';
        }
        
        // Get breed size from UI
        const breedSize = document.getElementById('breed-size-select')?.value || 'medium';
        
        return playDogSoundWithElevenLabs(textToConvert, emotion, breedSize);
    } else {
        return playDogSoundFallback(emotion, soundType);
    }
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
function translateToBarks(text, emotion, breedSize) {
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
        bark = adjustSound(bark, breedSize);
        
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
    const voiceInputButton = document.getElementById('voice-input-button');
    const humanInput = document.getElementById('human-input');
    const emotionSelect = document.getElementById('emotion-select');
    const breedSizeSelect = document.getElementById('breed-size-select');
    const translationDisplay = document.getElementById('translation-display');
    
    // Speech Recognition Setup
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition;
    
    if (SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.lang = 'en-US';
        
        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            humanInput.value = transcript;
            voiceInputButton.textContent = 'Click to Speak';
            voiceInputButton.disabled = false;
        };
        
        recognition.onerror = function(event) {
            console.error('Speech recognition error:', event.error);
            voiceInputButton.textContent = 'Click to Speak';
            voiceInputButton.disabled = false;
        };
    }
    
    // Voice Input Button Handler
    if (voiceInputButton) {
        voiceInputButton.addEventListener('click', function() {
            if (SpeechRecognition) {
                if (recognition.state === 'listening') {
                    recognition.stop();
                    this.textContent = 'Click to Speak';
                } else {
                    recognition.start();
                    this.textContent = 'Listening...';
                    this.disabled = true;
                }
            } else {
                alert('Speech recognition is not supported in your browser.');
            }
        });
    }
    
    // Translation Button Handler
    translateButton.addEventListener('click', function() {
        const text = humanInput.value;
        const emotion = emotionSelect.value;
        const breedSize = breedSizeSelect.value;
        
        if (!text) return;
        
        // Show loading state
        this.disabled = true;
        this.textContent = 'Translating...';
        
        // Simulate processing delay
        setTimeout(() => {
            const translation = translateToBarks(text, emotion, breedSize);
            
            // Display translation with visual patterns
            translationDisplay.innerHTML = `
                <div class="text-center">
                    <div class="text-2xl mb-4">${translation.pattern.join(' ')}</div>
                    <div class="text-xl mb-2">${translation.sounds.join(' ')}</div>
                    <p class="text-gray-600 mt-4">Translation based on ${emotion} emotion (${breedSize} breed size)</p>
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