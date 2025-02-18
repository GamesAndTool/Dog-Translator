// Dog sound patterns for different emotions
const soundMap = {
    happy: {
        short: ['woof!', 'yip!'],
        medium: ['woof woof!', 'arf arf!'],
        long: ['woof woof woof!', 'ruff ruff ruff!']
    },
    friendly: {
        short: ['ruff', 'wuf'],
        medium: ['woof-woof', 'ruff-ruff'],
        long: ['awoooo~', 'woof woof woof~']
    },
    alert: {
        short: ['bark!', 'woof!'],
        medium: ['bark bark!', 'woof woof!'],
        long: ['BARK BARK BARK!', 'WOOF WOOF WOOF!']
    },
    playful: {
        short: ['yip!', 'arf!'],
        medium: ['yip yip!', 'arf arf!'],
        long: ['ruff ruff ruff!', 'yap yap yap!']
    },
    attention: {
        short: ['whine~', 'woof?'],
        medium: ['whiiine~', 'woof woof?'],
        long: ['awooo~', 'whiiiiine~']
    }
};

// Translation logic
function translateToBarks(text, emotion) {
    const words = text.trim().split(/\s+/);
    let translation = [];
    let visualPattern = [];
    
    words.forEach(word => {
        const length = word.length;
        let soundType;
        
        if (length <= 3) soundType = 'short';
        else if (length <= 6) soundType = 'medium';
        else soundType = 'long';
        
        const sounds = soundMap[emotion][soundType];
        translation.push(sounds[Math.floor(Math.random() * sounds.length)]);
        
        // Add visual pattern based on emotion and length
        switch(emotion) {
            case 'happy':
                visualPattern.push('🐕💫');
                break;
            case 'friendly':
                visualPattern.push('🐕💝');
                break;
            case 'alert':
                visualPattern.push('🐕⚡');
                break;
            case 'playful':
                visualPattern.push('🐕✨');
                break;
            case 'attention':
                visualPattern.push('🐕❗');
                break;
        }
    });
    
    return {
        sounds: translation,
        pattern: visualPattern
    };
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
            
            // Reset button
            this.disabled = false;
            this.textContent = 'Translate to Dog Language';
        }, 500);
    });
}); 