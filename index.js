

const text = "I'm HarukiDhruv"; // Text to type out
        const speed = 150; // Typing speed in milliseconds
        let index = 0;

        function typeWriter() {
            const animatedText = document.getElementById("animated-text");
            
            // Check if typing is complete
            if (index < text.length) {
                animatedText.innerHTML += text.charAt(index); // Add next character
                index++;
                setTimeout(typeWriter, speed); // Call the function recursively
            } else {
                // Pause and reset after finishing typing
                setTimeout(() => {
                    index = 0; // Reset the index
                    animatedText.innerHTML = ""; // Clear the text
                    typeWriter(); // Restart the typing
                }, 2000); // Pause for 2 seconds before restarting
            }
        }

        // Start the typing effect
        typeWriter();


// Select all notifications
const notifications = document.querySelectorAll(".notification");
let currentIndex = 0; // Start with the first notification

// Function to show notifications sequentially
function showNotification() {
  const currentNotification = notifications[currentIndex];

  // Step 1: Reset all notifications
  notifications.forEach((notification) => {
    notification.classList.remove("exit");
    notification.style.opacity = "0";
    notification.style.transform = "translateY(-50px) scale(0.9)";
  });

  // Step 2: Show the current notification
  currentNotification.style.opacity = "1";
  currentNotification.style.transform = "translateY(0) scale(1)";

  // Step 3: Wait for 2.5 seconds, then add the exit class
  setTimeout(() => {
    currentNotification.classList.add("exit");

    // Move to the next notification
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % notifications.length;
      showNotification(); // Call recursively for the next notification
    }, 1000); // Exit animation duration (1s)
  }, 2500); // Notification stays for 2.5s
}

// Start the notification loop
showNotification();

const typewriterElement = document.querySelector('.typewriter');
const words = ['different world', 'inspire change', 'a better tomorrow'];
let wordIndex = 0;

function updateTypewriterText() {
  typewriterElement.textContent = words[wordIndex];
  wordIndex = (wordIndex + 1) % words.length;
}

// Update every 3 seconds to match the typewriter animation
setInterval(updateTypewriterText, 3000);

// Initialize the first word
updateTypewriterText();

document.getElementById("animateButton").addEventListener("click", function (e) {
  const button = e.currentTarget;
  const rect = button.getBoundingClientRect();

  for (let i = 0; i < 15; i++) {
    const star = document.createElement("div");
    star.className = "star";

    // Generate random position and movement
    const x = (Math.random() - 0.5) * 200; // Random x direction
    const y = (Math.random() - 0.5) * 200; // Random y direction

    star.style.setProperty("--x", `${x}px`);
    star.style.setProperty("--y", `${y}px`);

    star.style.left = `${e.clientX - rect.left}px`;
    star.style.top = `${e.clientY - rect.top}px`;

    button.appendChild(star);

    // Remove the star after the animation
    setTimeout(() => {
      star.remove();
    }, 1000);
  }
});



