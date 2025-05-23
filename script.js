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
    },

    // 新增社交行为
    'greeting': {
        'jumping': 'I\'m super excited to see you! This is my enthusiastic welcome!',
        'gentle tail wag': 'Hello friend! I\'m being polite and friendly',
        'sniffing': 'Nice to meet you, let me learn more about you',
        'play bow with tail wag': 'Hi! Would you like to play with me?',
        'rolling showing belly': 'I trust you completely and want to be friends!'
    },

    // 新增焦虑行为
    'anxiety': {
        'pacing': 'I\'m feeling anxious or restless about something',
        'excessive licking': 'I\'m trying to self-soothe because I\'m stressed',
        'destructive chewing': 'I\'m dealing with anxiety or boredom',
        'hiding under furniture': 'I\'m scared and need a safe space',
        'clingy behavior': 'I\'m feeling insecure and need reassurance'
    },

    // 新增狩猎本能行为
    'hunting': {
        'stalking': 'My predator instincts are activated - I\'m tracking something',
        'pointing': 'I\'ve detected something interesting over there!',
        'chasing': 'My hunting instincts are telling me to pursue that',
        'pouncing': 'Got it! This is my natural hunting behavior',
        'head low tracking': 'I\'m following an interesting scent trail'
    },

    // 新增护卫行为
    'guarding': {
        'alert barking': 'Warning! I\'m letting you know about something suspicious',
        'patrolling': 'I\'m checking our territory to keep us safe',
        'standing guard': 'I\'m watching over my family and our space',
        'blocking path': 'I\'m protecting you from what I think might be unsafe',
        'herding': 'I\'m keeping my family group together and safe'
    },

    // 新增身体语言
    'posture': {
        'hackles raised': 'I\'m very aroused or alarmed by something',
        'weight forward': 'I\'m very interested and focused on something ahead',
        'weight back': 'I\'m being cautious or preparing to retreat',
        'stiff body': 'I\'m feeling tense and assessing the situation',
        'loose body': 'I\'m relaxed and comfortable in this environment'
    },

    // 新增舒适行为
    'comfort': {
        'stretching after rest': 'Ahh, that was a good nap! Getting my body moving again',
        'sighing while lying': 'I\'m content and relaxed right now',
        'sleeping in sun patch': 'This warm spot is perfect for resting',
        'nesting behavior': 'I\'m making my resting spot just right',
        'belly exposed': 'I feel completely safe and comfortable here'
    },

    // 新增沟通信号
    'signals': {
        'head tilt': 'I\'m trying to understand what you\'re saying or doing',
        'pawing at you': 'Hey! I need something specific from you',
        'bringing objects': 'Look at this! I want to show you something important',
        'nose bump': 'Excuse me, could I have your attention please?',
        'sitting at feet': 'I\'m being polite while asking for something'
    },

    // 新增健康相关行为
    'health': {
        'excessive drinking': 'I might be feeling unwell or very thirsty',
        'refusing food': 'I\'m not feeling well or something\'s wrong',
        'change in activity': 'My energy levels aren\'t normal, might need checking',
        'unusual vocalization': 'I\'m trying to tell you I\'m uncomfortable',
        'changes in sleep': 'Something\'s affecting my normal rest patterns'
    },

    // 新增学习行为
    'learning': {
        'eye contact': 'I\'m focused and ready to learn from you',
        'offering behaviors': 'I\'m trying to figure out what you want',
        'quick response': 'I understand what you\'re asking and I\'m eager to comply',
        'hesitation': 'I\'m not quite sure what you want me to do',
        'looking for treats': 'I know good behavior gets rewarded!'
    }
};

// Main translation function
function translateBehavior(text) {
    const interpretation = [];
    text = text.toLowerCase();

    // 首先尝试匹配完整的行为短语
    for (const [category, behaviors] of Object.entries(behaviorPatterns)) {
        if (typeof behaviors === 'object') {
            for (const [behavior, meaning] of Object.entries(behaviors)) {
                // 改进匹配逻辑，使其更灵活
                if (text.includes(behavior.toLowerCase()) || 
                    text.includes(behavior.toLowerCase().replace(/ /g, '')) ||
                    text.replace(/-/g, ' ').includes(behavior.toLowerCase())) {
                    interpretation.push(meaning);
                }
            }
        } else if (typeof behaviors === 'string' && text.includes(category.toLowerCase())) {
            interpretation.push(behaviors);
        }
    }

    // 处理复合行为
    const contextualMeaning = addContextualTranslation(text);
    if (contextualMeaning) {
        interpretation.push(contextualMeaning);
    }

    // 如果没有找到匹配的行为
    if (interpretation.length === 0) {
        // 检查是否包含任何关键词
        const keywords = [
            'jumping', 'greeting', 'tail', 'wag', 'sniffing', 'rolling',
            'pacing', 'licking', 'hiding', 'chewing', 'clingy',
            'stalking', 'pointing', 'chasing', 'pouncing', 'tracking',
            'barking', 'patrolling', 'guarding', 'herding',
            'hackles', 'stiff', 'loose', 'relaxed',
            'stretching', 'sighing', 'sleeping', 'nesting',
            'drinking', 'eating', 'vocalization', 'sleep',
            'eye contact', 'treats', 'learning', 'training'
        ];

        const hasKeyword = keywords.some(keyword => text.includes(keyword));
        if (!hasKeyword) {
            return "I couldn't recognize specific behaviors. Try describing tail position, ear position, body posture, or specific actions.";
        }

        // 尝试基于上下文推断含义
        let inferredMeaning = "Based on your description, your dog might be ";
        if (text.includes('jumping') || text.includes('greeting')) {
            inferredMeaning += "showing excitement and wanting to interact.";
        } else if (text.includes('hiding') || text.includes('anxious')) {
            inferredMeaning += "feeling anxious or uncomfortable.";
        } else if (text.includes('playing') || text.includes('excited')) {
            inferredMeaning += "in a playful and energetic mood.";
        } else {
            inferredMeaning += "trying to communicate something. Could you provide more details about their body language?";
        }
        return inferredMeaning;
    }

    // 移除重复的解释并格式化
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
    
    // 新增组合行为解释
    if (text.includes('tail') && text.includes('ears forward') && text.includes('alert')) {
        return "I've detected something that needs our attention!";
    }
    
    if (text.includes('yawning') && text.includes('looking away')) {
        return "I'm feeling a bit overwhelmed and need some space.";
    }
    
    if (text.includes('pawing') && text.includes('bringing toy')) {
        return "I really want to play with you! Let's have some fun together!";
    }

    if (text.includes('sniffing') && text.includes('tail high')) {
        return "I'm investigating something interesting while feeling confident!";
    }

    if (text.includes('barking') && text.includes('running in circles')) {
        return "I'm super excited and want you to join in my enthusiasm!";
    }

    return null;
}

// 将移动端菜单代码移到顶层
document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单功能
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

    // 其他页面特定功能...
    const translateButton = document.getElementById('translate-button');
    const behaviorText = document.getElementById('human-text');
    const translationResult = document.getElementById('translation-result');
    const translatedText = document.getElementById('translated-text');

    // 只在行为翻译页面添加这些功能
    if (translateButton && behaviorText) {
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
    }

    // 搜索功能
    const searchInput = document.getElementById('behavior-search');
    const allDetails = document.querySelectorAll('details');
    const allBehaviorButtons = document.querySelectorAll('.behavior-option');

    searchInput?.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        
        allBehaviorButtons.forEach(button => {
            const text = button.textContent.toLowerCase().trim();
            const detail = button.closest('details');
            
            if (text.includes(searchTerm)) {
                button.style.display = '';
                if (detail) detail.open = true;
            } else {
                button.style.display = 'none';
            }
        });

        // 如果搜索框为空，关闭所有面板
        if (!searchTerm) {
            allDetails.forEach(detail => {
                detail.open = false;
            });
        }
    });

    // 折叠面板动画
    allDetails.forEach(detail => {
        detail.addEventListener('toggle', function() {
            const arrow = this.querySelector('summary span:last-child');
            if (this.open) {
                arrow.style.transform = 'rotate(180deg)';
            } else {
                arrow.style.transform = 'rotate(0)';
            }
        });
    });

    // 添加快捷方式提示
    const behaviorOptions = document.querySelectorAll('.behavior-option');
    behaviorOptions.forEach(option => {
        option.setAttribute('title', 'Click to auto-fill and translate');
    });
    
    // 视觉识别分析功能
    setupVisualAnalysis();
}); 

// 视觉识别分析功能
function setupVisualAnalysis() {
    const uploadArea = document.getElementById('upload-area');
    const fileInput = document.getElementById('dog-image-input');
    const previewContainer = document.getElementById('preview-container');
    const imagePreview = document.getElementById('image-preview');
    const uploadPrompt = document.getElementById('upload-prompt');
    const analyzeButton = document.getElementById('analyze-button');
    const analysisPlaceholder = document.getElementById('analysis-placeholder');
    const analysisLoading = document.getElementById('analysis-loading');
    const analysisContent = document.getElementById('analysis-content');
    const analysisBehaviors = document.getElementById('analysis-behaviors');
    
    // 如果元素不存在，说明当前页面不是包含视觉分析的页面
    if (!uploadArea || !fileInput) return;
    
    // 处理上传区域点击
    uploadArea.addEventListener('click', () => {
        fileInput.click();
    });
    
    // 处理拖放功能
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('border-blue-500');
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('border-blue-500');
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('border-blue-500');
        
        if (e.dataTransfer.files.length) {
            handleFile(e.dataTransfer.files[0]);
        }
    });
    
    // 处理文件选择
    fileInput.addEventListener('change', () => {
        if (fileInput.files.length) {
            handleFile(fileInput.files[0]);
        }
    });
    
    // 处理分析按钮点击
    analyzeButton.addEventListener('click', () => {
        if (!fileInput.files.length) return;
        
        // 显示加载状态
        analysisPlaceholder.classList.add('hidden');
        analysisContent.classList.add('hidden');
        analysisLoading.classList.remove('hidden');
        analyzeButton.disabled = true;
        
        // 获取选定的文件
        const file = fileInput.files[0];
        
        // 使用Pollinations API分析图片
        analyzeImage(file)
            .then(results => {
                // 处理并显示分析结果
                displayAnalysisResults(results);
            })
            .catch(error => {
                console.error('Error analyzing image:', error);
                analysisBehaviors.innerHTML = `
                    <div class="bg-red-50 text-red-600 p-4 rounded-lg">
                        <p class="font-semibold">Analysis failed</p>
                        <p class="text-sm">We couldn't analyze this image. Please try again with a clearer photo of your dog.</p>
                    </div>
                `;
            })
            .finally(() => {
                // 隐藏加载状态，显示结果
                analysisLoading.classList.add('hidden');
                analysisContent.classList.remove('hidden');
                analyzeButton.disabled = false;
            });
    });
    
    // 处理文件
    function handleFile(file) {
        // 检查文件类型和大小
        if (!file.type.match('image/jpeg') && !file.type.match('image/png') && !file.type.match('image/gif')) {
            alert('Please upload a JPG, PNG or GIF image');
            return;
        }
        
        if (file.size > 5 * 1024 * 1024) {
            alert('File size must not exceed 5MB');
            return;
        }
        
        // 显示预览
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.src = e.target.result;
            previewContainer.classList.remove('hidden');
            uploadPrompt.classList.add('hidden');
            analyzeButton.disabled = false;
        };
        reader.readAsDataURL(file);
    }
    
    // 使用Pollinations API分析图片
    async function analyzeImage(file) {
        try {
            // 将文件转换为base64格式
            const base64ImageDataUrl = await fileToBase64(file);
            
            // 准备消息内容
            const payload = {
                model: "openai-large", // 确保支持视觉功能
                messages: [
                    {
                        role: "system",
                        content: "You are an expert in dog behavior analysis. Analyze the image of a dog and identify key body language indicators like ear position, tail position, body posture, and facial expressions. Explain what these signals might indicate about the dog's emotional state and what they might be trying to communicate. Focus only on visible behavioral cues in the image."
                    },
                    {
                        role: "user",
                        content: [
                            {
                                type: "text",
                                text: "Please analyze this dog's body language and behavior in the image. What is this dog trying to communicate based on their posture, ear position, tail, and facial expression? Give me specific details about what you observe and what it means."
                            },
                            {
                                type: "image_url",
                                image_url: {
                                    url: base64ImageDataUrl
                                }
                            }
                        ]
                    }
                ],
                max_tokens: 800 // 允许更长的回复
            };
            
            // 发送请求到Pollinations API
            const response = await fetch('https://text.pollinations.ai/openai', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });
            
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`API error: ${response.status}, message: ${errorText}`);
            }
            
            const data = await response.json();
            return data.choices[0].message.content;
        } catch (error) {
            console.error('Error in API call:', error);
            throw error;
        }
    }
    
    // 将文件转换为base64
    function fileToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result); // 结果包含'data:mime/type;base64,'前缀
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }
    
    // 显示分析结果
    function displayAnalysisResults(analysisText) {
        // 清空之前的结果
        analysisBehaviors.innerHTML = '';
        
        // 将结果分成段落
        const paragraphs = analysisText.split('\n\n').filter(p => p.trim().length > 0);
        
        // 为每个段落创建一个条目
        paragraphs.forEach(paragraph => {
            // 创建一个结果条目
            const resultItem = document.createElement('div');
            resultItem.className = 'bg-blue-50 p-4 rounded-lg';
            resultItem.innerHTML = `<p>${paragraph}</p>`;
            analysisBehaviors.appendChild(resultItem);
        });
        
        // 添加来自行为字典的相关翻译
        // 这部分可以根据分析文本进行匹配，找到相关的行为解释
        const behaviorKeywords = extractKeyBehaviors(analysisText);
        if (behaviorKeywords.length > 0) {
            const dictionarySection = document.createElement('div');
            dictionarySection.className = 'mt-4 pt-4 border-t border-gray-200';
            dictionarySection.innerHTML = `
                <h4 class="font-semibold mb-2">Related behaviors from our dictionary:</h4>
                <div id="related-behaviors" class="space-y-2"></div>
            `;
            analysisBehaviors.appendChild(dictionarySection);
            
            const relatedBehaviors = document.getElementById('related-behaviors');
            behaviorKeywords.forEach(keyword => {
                const meaning = findBehaviorMeaning(keyword);
                if (meaning) {
                    const behaviorItem = document.createElement('div');
                    behaviorItem.className = 'bg-gray-50 p-3 rounded-lg';
                    behaviorItem.innerHTML = `
                        <p class="font-medium">${keyword}</p>
                        <p class="text-gray-600 text-sm">${meaning}</p>
                    `;
                    relatedBehaviors.appendChild(behaviorItem);
                }
            });
        }
    }
    
    // 从分析文本中提取关键行为词
    function extractKeyBehaviors(text) {
        const keywords = [
            'tail wagging', 'ears forward', 'ears back', 'play bow', 'lowering body',
            'relaxed posture', 'alert posture', 'showing teeth', 'panting', 'hackles raised',
            'direct eye contact', 'avoiding eye contact', 'body stiff', 'relaxed mouth'
        ];
        
        return keywords.filter(keyword => text.toLowerCase().includes(keyword.toLowerCase()));
    }
    
    // 从行为字典中查找行为的含义
    function findBehaviorMeaning(keyword) {
        // 简化版：直接返回一些预定义的含义
        // 在实际应用中，应该从behaviorPatterns字典中查找
        const quickMeanings = {
            'tail wagging': 'Usually indicates excitement or happiness. Fast wagging may show high excitement, while slower wagging often indicates a friendly, calm state.',
            'ears forward': 'Shows alertness and interest. The dog is focused on something that caught their attention.',
            'ears back': 'Often indicates submission, friendliness, or sometimes fear depending on other body language.',
            'play bow': 'Front legs lowered with rear end up is a classic invitation to play and shows playful intentions.',
            'lowering body': 'Can indicate submission, fear, or in some contexts preparation for play.',
            'relaxed posture': 'Loose, soft body language indicates the dog is comfortable and at ease.',
            'alert posture': 'Tense, upright stance with weight forward shows the dog is focused and attentive.',
            'showing teeth': 'When combined with a wrinkled muzzle, can be a warning sign. Context matters to determine if it\'s playful or defensive.',
            'panting': 'Can indicate excitement, stress, or simply temperature regulation.',
            'hackles raised': 'The fur standing up along the back shows arousal, which could be excitement, fear, or alertness.',
            'direct eye contact': 'Can be a challenge or sign of confidence depending on other body language.',
            'avoiding eye contact': 'Often indicates submission or conflict avoidance.',
            'body stiff': 'Tension in the body often indicates stress, alertness, or potential aggression.',
            'relaxed mouth': 'A slightly open mouth with relaxed lips typically indicates a calm, comfortable state.'
        };
        
        return quickMeanings[keyword] || null;
    }
} 