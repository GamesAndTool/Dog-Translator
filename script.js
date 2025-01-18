// Dog behavior patterns dictionary
const behaviorPatterns = {
    // Tail behaviors
    'tail': {
        'between legs': 'I\'m scared or feeling very submissive',
        'wagging rapidly': 'I\'m super excited and happy! This is pure joy!',
        'wagging slowly': 'I\'m friendly and calm, feeling content',
        'low': 'I\'m being submissive or feeling uncertain',
        'high': 'I\'m alert and confident, maybe a bit aroused'
    },
    
    // Body postures
    'lowering': {
        'front body': 'I want to play! This is my play bow - let\'s have fun!',
        'head': 'I\'m being submissive or friendly, showing I\'m not a threat',
        'body': 'I\'m feeling submissive or scared, trying to appear smaller'
    },
    
    'rolling': {
        'back': 'I trust you completely and feel safe! Maybe a belly rub?',
        'ground': 'I\'m marking my scent or just feeling really comfortable'
    },
    
    'stretching': {
        'front legs': 'I\'m inviting you to play! Also called a play bow',
        'body': 'I\'m relaxed and comfortable, or just woke up'
    },
    
    // Face expressions
    'ears': {
        'forward': 'I\'m alert and very interested in something',
        'back': 'I\'m being friendly or submissive, no threat here',
        'flat': 'I\'m scared or nervous about something'
    },
    
    'tilting head': 'I\'m trying to understand better or hear something clearly',
    'licking lips': 'I\'m feeling nervous or trying to show I\'m peaceful',
    'yawning': 'I\'m feeling stressed or trying to calm myself down',
    
    // Interactive behaviors
    'bringing': {
        'toys': 'I want to play with you! Let\'s have fun together!',
        'items': 'I want your attention or trying to show you something'
    },
    
    'pawing': 'I want attention or something specific from you',
    'following': 'I love you and want to be near you, or I need something',
    'leaning': 'I trust you and want physical contact, feeling affectionate',
    
    // Stress signals
    'showing teeth': 'I\'m feeling threatened, please give me space',
    'pacing': 'I\'m anxious or need something urgently',
    'drooling': 'I might be stressed, or just smelling something tasty',
    
    // Additional behaviors
    'circling': {
        'before lying': 'I\'m making my spot comfortable, ancient instinct',
        'repeatedly': 'I might be excited or anxious about something'
    },
    
    'digging': {
        'ground': 'I\'m following my instinct or hiding something',
        'blankets': 'I\'m making a comfortable spot or playing'
    },
    
    'barking': {
        'short': 'Hey! Pay attention to this!',
        'continuous': 'I\'m really excited or concerned about something',
        'howling': 'I\'m communicating with others or responding to sounds'
    }
};

// Main translation function
function translateBehavior(text) {
    text = text.toLowerCase().trim();
    let interpretation = [];
    
    // Check for each behavior pattern
    for (const [behavior, meanings] of Object.entries(behaviorPatterns)) {
        if (text.includes(behavior)) {
            if (typeof meanings === 'object') {
                // Check for specific modifiers
                let foundModifier = false;
                for (const [modifier, meaning] of Object.entries(meanings)) {
                    // 使用更灵活的匹配方式
                    const modifierWords = modifier.split(' ');
                    if (modifierWords.every(word => text.includes(word))) {
                        interpretation.push(meaning);
                        foundModifier = true;
                        break; // 找到匹配后就停止继续查找
                    }
                }
                // If no specific modifier found but behavior matches
                if (!foundModifier) {
                    // 尝试匹配部分关键词
                    for (const [modifier, meaning] of Object.entries(meanings)) {
                        const modifierWords = modifier.split(' ');
                        const matchCount = modifierWords.filter(word => text.includes(word)).length;
                        if (matchCount > 0) {
                            interpretation.push(meaning);
                            break;
                        }
                    }
                }
            } else {
                interpretation.push(meanings);
            }
        }
    }
    
    // Add contextual interpretations
    const contextualMeaning = addContextualTranslation(text);
    if (contextualMeaning) {
        interpretation.push(contextualMeaning);
    }
    
    // If no patterns matched
    if (interpretation.length === 0) {
        return "I couldn't recognize specific behaviors. Try describing tail position, ear position, body posture, or specific actions.";
    }
    
    // Remove duplicates and format
    const uniqueInterpretations = [...new Set(interpretation)];
    return uniqueInterpretations.map(meaning => '• ' + meaning).join('\n');
}

// Add helper function to improve matching
function matchBehavior(text, pattern) {
    const words = pattern.split(' ');
    return words.every(word => text.includes(word));
}

// Add contextual translations
function addContextualTranslation(text) {
    // Combinations of behaviors
    if (text.includes('tail') && text.includes('ears forward')) {
        return "I'm very alert and focused on something interesting!";
    }
    if (text.includes('pawing') && text.includes('whining')) {
        return "I really need your attention - something is important to me!";
    }
    
    // Situation specific behaviors
    if (text.includes('door') && (text.includes('scratching') || text.includes('pawing'))) {
        return "I need to go outside urgently!";
    }
    if (text.includes('food') && (text.includes('bowl') || text.includes('staring'))) {
        return "I'm hungry, please feed me!";
    }
    if (text.includes('belly') && text.includes('up')) {
        return "I trust you completely and would love a belly rub!";
    }
    
    return null;
}

// Update page functionality
document.addEventListener('DOMContentLoaded', function() {
    const translateButton = document.getElementById('translate-button');
    const behaviorText = document.getElementById('human-text');
    const translationResult = document.getElementById('translation-result');
    const translatedText = document.getElementById('translated-text');

    translateButton?.addEventListener('click', function() {
        const text = behaviorText.value;
        if (!text) return;

        // Show loading state
        this.disabled = true;
        this.textContent = 'Interpreting...';

        // Simulate processing delay
        setTimeout(() => {
            const interpretation = translateBehavior(text);
            translatedText.textContent = interpretation;
            translationResult.classList.remove('hidden');
            
            // Reset button
            this.disabled = false;
            this.textContent = 'Interpret Behavior';
        }, 500);
    });

    // Add keyboard shortcut
    behaviorText?.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            translateButton.click();
        }
    });

    // Add quick select behavior functionality
    const behaviorOptions = document.querySelectorAll('.behavior-option');
    behaviorOptions.forEach(option => {
        option.addEventListener('click', function() {
            // 添加"My dog is"前缀，除非行为描述已经包含"ing"
            const behavior = this.textContent.trim();
            const prefix = behavior.includes('ing') ? 'My dog is ' : 'My dog ';
            behaviorText.value = prefix + behavior.toLowerCase();
            // 自动触发翻译
            translateButton.click();
        });
    });
}); 