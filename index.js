window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navi-top');
    
    if (window.pageYOffset > 0) {
      navbar.classList.add('fixed');
    } else {
      navbar.classList.remove('fixed');
    }
  });
  
  $('.box').click(function() {
    // Action to perform when the div is clicked
    $(this).addClass('clicked');
    setTimeout(function() {
        $(this).removeClass('clicked');
      }, 500);
    window.open('http://www.google.com', '_blank');
})

const texts = ["Inspire", "Connect", "Excel"];
const typingText = document.getElementById("typing-text");
let index = 0;

function typeText() {
  const currentText = texts[index];
  typingText.textContent = ""; // Clear previous text
  animateText(currentText, 0);
  index = (index + 1) % texts.length; // Move to the next text
}

function animateText(text, charIndex) {
  if (charIndex < text.length) {
    typingText.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(() => animateText(text, charIndex), 100);
  } else {
    // Pause for a duration before moving to the next text
    setTimeout(typeText, 2000);
  }
}

typeText();
