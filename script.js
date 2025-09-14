// Global variable to demonstrate scope
let globalMessage = 'I am a global variable';

// Part 2: Function demonstrating scope and parameters
function calculateAnimationDuration(baseDuration, multiplier) {
  // Local variable inside function
  let result = baseDuration * multiplier;
  return result;
}

// Part 2: Function to update duration output on the page
function updateDurationOutput() {
  let base = 2; // seconds
  let multi = 1.5;
  let duration = calculateAnimationDuration(base, multi);
  document.getElementById('durationOutput').textContent = duration.toFixed(2);
}

// Part 3: Reusable function to toggle CSS class on an element
function toggleClass(element, className) {
  if (!element || !className) return;
  element.classList.toggle(className);
}

// Part 1: No JS needed here for hover transition or pulse animation

// Part 3: Setup event listeners for animation triggers
document.addEventListener('DOMContentLoaded', () => {
  updateDurationOutput();

  const animateBtn = document.getElementById('animateBtn');
  const animBox = document.getElementById('animBox');

  animateBtn.addEventListener('click', () => {
    // Trigger pulse animation by toggling class
    // Remove the class if it already exists to restart animation
    animBox.classList.remove('pulse');

    // Trigger reflow to restart animation
    void animBox.offsetWidth;

    animBox.classList.add('pulse');
  });

  const toggleModalBtn = document.getElementById('toggleModalBtn');
  const modal = document.getElementById('modal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  toggleModalBtn.addEventListener('click', () => {
    toggleClass(modal, 'show');
  });

  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });
});
