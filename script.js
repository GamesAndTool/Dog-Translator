// Add mobile menu toggle functionality
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Dog language dictionary
const dogDictionary = {
    // Common words
    hello: ['woof woof', 'arf arf', 'ruff'],
    hi: ['arf', 'yip', 'woof'],
    bye: ['woof...', 'arf...', 'whine...'],
    yes: ['woof!', 'arf!', 'yip!'],
    no: ['grr...', 'ruff!', 'woof grr'],
    please: ['whine', 'whine whine', 'arf please'],
    thanks: ['woof arf', 'yip yip', 'happy-woof'],
    love: ['woof♥', 'arf love arf', 'happy-howl'],
    food: ['woof food woof!', 'yip yip yip!', 'excited-arf!'],
    play: ['ruff play ruff!', 'excited-woof!', 'yip play yip!'],
    walk: ['woof walk woof!', 'excited-arf!', 'happy-howl!'],
    friend: ['arf friend arf', 'happy-woof', 'friendly-ruff'],
    
    // Emotions
    happy: ['yip yip!', 'happy-woof!', 'excited-arf!'],
    sad: ['whine...', 'sad-woof...', 'low-howl...'],
    angry: ['grr!', 'angry-woof!', 'ruff grr!'],
    excited: ['ruff ruff!', 'excited-yip!', 'woof woof woof!'],
    scared: ['whine whine', 'scared-arf', 'quiet-woof'],
    
    // Default translations for unknown words
    default: ['woof', 'arf', 'ruff']
};

// Emotion patterns to add at the end of sentences
const emotionPatterns = {
    '!': ['!!! *tail wagging*', '! *excited*', '! *jumping*'],
    '?': [' *head tilt*', ' *curious*', ' *ears perked*'],
    '.': [' *calm*', ' *attentive*', ''],
    '♥': [' *loving eyes*', ' *snuggles*', ' *happy tail wag*']
};

// Function to get random item from array
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to detect sentence emotion
function detectEmotion(text) {
    if (text.includes('!')) return '!';
    if (text.includes('?')) return '?';
    if (text.includes('love') || text.includes('♥')) return '♥';
    return '.';
}

// 添加音频资源
const dogSounds = {
    woof: new Audio('sounds/woof.mp3'),
    yip: new Audio('sounds/yip.mp3'),
    grr: new Audio('sounds/grr.mp3'),
    whine: new Audio('sounds/whine.mp3'),
    bark: new Audio('sounds/bark.mp3'),
    howl: new Audio('sounds/howl.mp3')
};

// 音频映射表
const soundMapping = {
    'woof': 'woof',
    'arf': 'woof',
    'ruff': 'woof',
    'yip': 'yip',
    'grr': 'grr',
    'whine': 'whine',
    'bark': 'bark',
    'howl': 'howl'
};

// Main translation function
function translateToDog(text) {
    // Convert to lowercase and remove extra spaces
    text = text.toLowerCase().trim();
    
    // Split into words
    const words = text.split(/\s+/);
    
    // Translate each word
    const translatedWords = words.map(word => {
        // Remove punctuation for dictionary lookup
        const cleanWord = word.replace(/[.,!?]/, '');
        
        // Get translation or default
        const translations = dogDictionary[cleanWord] || dogDictionary.default;
        return getRandomItem(translations);
    });
    
    // Combine words
    let translation = translatedWords.join(' ');
    
    // Add emotion pattern
    const emotion = detectEmotion(text);
    translation += getRandomItem(emotionPatterns[emotion] || emotionPatterns['.']);
    
    // 添加声音播放逻辑
    playDogTranslation(translatedWords);
    
    return translation;
}

// 播放狗叫声序列
async function playDogTranslation(translatedWords) {
    for (let word of translatedWords) {
        // 从单词中提取基础声音（去掉修饰词如happy-, excited-等）
        const baseSound = word.split('-').pop().split(' ')[0];
        const soundKey = soundMapping[baseSound] || 'woof';
        
        if (dogSounds[soundKey]) {
            try {
                // 克隆音频对象以支持重叠播放
                const sound = dogSounds[soundKey].cloneNode();
                // 根据情绪调整音频参数
                if (word.includes('happy') || word.includes('excited')) {
                    sound.playbackRate = 1.2;
                } else if (word.includes('sad') || word.includes('scared')) {
                    sound.playbackRate = 0.8;
                }
                await sound.play();
                // 等待音频播放完成
                await new Promise(resolve => setTimeout(resolve, sound.duration * 1000));
            } catch (error) {
                console.error('Error playing sound:', error);
            }
        }
    }
}

// Add translation functionality to the page
document.addEventListener('DOMContentLoaded', function() {
    const translateButton = document.getElementById('translate-button');
    const humanText = document.getElementById('human-text');
    const translationResult = document.getElementById('translation-result');
    const translatedText = document.getElementById('translated-text');
    const translatedTextContainer = document.querySelector('#translation-result .p-4');

    // 添加声音控制按钮到翻译结果区域
    const soundControlHtml = `
        <div class="flex items-center justify-end mt-2">
            <button id="play-translation" class="flex items-center px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Play Sound
            </button>
        </div>
    `;
    
    // 在翻译结果后插入声音控制按钮
    translatedTextContainer.insertAdjacentHTML('beforeend', soundControlHtml);

    translateButton?.addEventListener('click', function() {
        const text = humanText.value;
        if (!text) return;

        // Show loading state
        this.disabled = true;
        this.textContent = 'Translating...';

        // Simulate translation delay for realism
        setTimeout(() => {
            const translation = translateToDog(text);
            translatedText.textContent = translation;
            translationResult.classList.remove('hidden');
            
            // Reset button
            this.disabled = false;
            this.textContent = 'Translate to Dog';
        }, 500);
    });

    // Add keyboard shortcut (Enter key)
    humanText?.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            translateButton.click();
        }
    });

    // 添加播放按钮事件监听
    document.getElementById('play-translation')?.addEventListener('click', function() {
        const translatedText = document.getElementById('translated-text').textContent;
        const words = translatedText.split(' ').filter(word => word.match(/^[a-zA-Z-]+/));
        playDogTranslation(words);
    });
}); 