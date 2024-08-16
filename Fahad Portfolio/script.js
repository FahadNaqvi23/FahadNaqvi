// Dynamic Text Typing Effect
document.addEventListener("DOMContentLoaded", function() {
    const dynamicText = document.getElementById("dynamic-text");
    const words = ["Software Engineer", "Student", "Developer"];
    let i = 0;
    let timer;

    function typingEffect() {
        let word = words[i].split("");
        const loopTyping = function() {
            if (word.length > 0) {
                dynamicText.innerHTML += word.shift();
            } else {
                deletingEffect();
                return false;
            }
            timer = setTimeout(loopTyping, 200);
        };
        loopTyping();
    }

    function deletingEffect() {
        let word = words[i].split("");
        const loopDeleting = function() {
            if (word.length > 0) {
                word.pop();
                dynamicText.innerHTML = word.join("");
            } else {
                if (words.length > (i + 1)) {
                    i++;
                } else {
                    i = 0;
                }
                typingEffect();
                return false;
            }
            timer = setTimeout(loopDeleting, 100);
        };
        setTimeout(loopDeleting, 1000);
    }

    typingEffect();
});
