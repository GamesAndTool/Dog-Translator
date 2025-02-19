// Dog behavior patterns dictionary
const behaviorPatterns = {
    // Tail behaviors
    'tail': {
        'between legs': 'I\'m scared or feeling very submissive',
        'wagging rapidly': 'I\'m super excited and happy! This is pure joy!',
        'wagging slowly': 'I\'m friendly and calm, feeling content',
        'low': 'I\'m being submissive or feeling uncertain',
        'high': 'I\'m alert and confident, maybe a bit aroused',
        'stiff': 'I\'m feeling tense or alerting to potential danger',
        'curved like question mark': 'I\'m feeling playful and friendly!',
        'tucked': 'I\'m very nervous or scared right now'
    },
    
    // Body postures
    'lowering': {
        'front body': 'I want to play! This is my play bow - let\'s have fun!',
        'head': 'I\'m being submissive or friendly, showing I\'m not a threat',
        'body': 'I\'m feeling submissive or scared, trying to appear smaller',
        'shoulders': 'I\'m trying to appear less threatening',
        'rear': 'I\'m getting ready to pounce or play!'
    },
    
    'rolling': {
        'back': 'I trust you completely and feel safe! Maybe a belly rub?',
        'ground': 'I\'m marking my scent or just feeling really comfortable',
        'side': 'I\'m relaxed and comfortable around you',
        'grass': 'I\'m enjoying myself and marking my scent!'
    },
    
    'stretching': {
        'front legs': 'I\'m inviting you to play! Also called a play bow',
        'body': 'I\'m relaxed and comfortable, or just woke up',
        'back legs': 'I\'m getting ready for activity or just feeling good',
        'neck': 'I\'m trying to release tension or get comfortable'
    },
    
    // Face expressions
    'ears': {
        'forward': 'I\'m alert and very interested in something',
        'back': 'I\'m being friendly or submissive, no threat here',
        'flat': 'I\'m scared or nervous about something',
        'twitching': 'I\'m trying to locate a sound or staying alert',
        'one up one down': 'I\'m a bit confused or trying to figure something out',
        'relaxed': 'I\'m feeling calm and comfortable'
    },
    
    'tilting head': 'I\'m trying to understand better or hear something clearly',
    'licking lips': 'I\'m feeling nervous or trying to show I\'m peaceful',
    'yawning': 'I\'m feeling stressed or trying to calm myself down',
    
    'squinting': 'I\'m feeling content or showing affection',
    'blinking slowly': 'I\'m relaxed and showing you I\'m comfortable',
    'nose wrinkling': 'I\'m giving a warning signal or smelling something interesting',
    'showing whites of eyes': 'I\'m feeling stressed or uncomfortable',
    
    // Interactive behaviors
    'bringing': {
        'toys': 'I want to play with you! Let\'s have fun together!',
        'items': 'I want your attention or trying to show you something',
        'shoes': 'I want to go for a walk or missing you',
        'food bowl': 'I\'m hungry or it\'s my usual meal time!',
        'leash': 'I really want to go for a walk!'
    },
    
    'pawing': 'I want attention or something specific from you',
    'following': 'I love you and want to be near you, or I need something',
    'leaning': 'I trust you and want physical contact, feeling affectionate',
    
    'nudging': 'I\'m trying to get your attention or guide you somewhere',
    'hiding': 'I\'m scared or not feeling well',
    'sitting on feet': 'I\'m claiming you as mine and seeking security',
    'jumping up': 'I\'m very excited to see you or want attention',
    
    // Stress signals
    'showing teeth': 'I\'m feeling threatened, please give me space',
    'pacing': 'I\'m anxious or need something urgently',
    'drooling': 'I might be stressed, or just smelling something tasty',
    
    'shaking off': 'I\'m trying to release tension or stress',
    'excessive scratching': 'I\'m feeling anxious or uncomfortable',
    'whale eye': 'I\'m feeling very uncomfortable or stressed',
    'freezing': 'I\'m very tense and might be about to react',
    
    // Additional behaviors
    'circling': {
        'before lying': 'I\'m making my spot comfortable, ancient instinct',
        'repeatedly': 'I might be excited or anxious about something',
        'chasing tail': 'I\'m playing or might be anxious about something',
        'around you': 'I\'m excited or trying to get your attention'
    },
    
    'digging': {
        'ground': 'I\'m following my instinct or hiding something',
        'blankets': 'I\'m making a comfortable spot or playing',
        'couch': 'I\'m trying to make a cozy nest or feeling anxious',
        'after pooping': 'I\'m marking my territory and covering my scent'
    },
    
    'barking': {
        'short': 'Hey! Pay attention to this!',
        'continuous': 'I\'m really excited or concerned about something',
        'howling': 'I\'m communicating with others or responding to sounds',
        'whimpering': 'I\'m feeling anxious or need comfort',
        'growling playfully': 'I\'m having fun and not being aggressive!',
        'bay': 'I\'m tracking something or alerting to a discovery',
        'grumbling': 'I\'m content but want you to know I\'m here'
    },
    
    'sleeping': {
        'on back': 'I feel completely safe and secure',
        'curled up': 'I\'m conserving warmth or feeling protective',
        'spread out': 'I\'m trying to cool down and totally relaxed',
        'twitching': 'I\'m probably dreaming about running or playing!'
    },
    
    'sniffing': {
        'ground intensely': 'I\'m reading interesting messages from other dogs',
        'air': 'I\'ve caught an interesting scent and gathering information',
        'your face': 'I\'m greeting you and checking your mood',
        'other dogs': 'I\'m gathering social information and saying hello'
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

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        // 切换菜单显示/隐藏
        mobileMenuButton.addEventListener('click', function(e) {
            e.stopPropagation(); // 阻止事件冒泡
            mobileMenu.classList.toggle('hidden');
        });

        // 点击菜单项后关闭菜单
        const menuItems = mobileMenu.getElementsByTagName('a');
        Array.from(menuItems).forEach(item => {
            item.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });

        // 点击页面其他区域关闭菜单
        document.addEventListener('click', function(e) {
            if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
}); 