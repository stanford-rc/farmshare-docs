// docs/custom.js
// This script adds a "Skip to main content" link at the top of the page for accessibility.
// It waits for the body element to be available before adding the link.
waitForElement('body').then((element) => {
  addJumpLink()
});

function addJumpLink() {
  const jumpLink = document.createElement('a');
  jumpLink.href = '#page-content';
  jumpLink.className = 'su-skiplinks';
  jumpLink.textContent = 'Skip to main content';
  document.body.prepend(jumpLink);
}

function waitForElement(selector) {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      const element = document.querySelector(selector);
      if (element) {
        clearInterval(interval);
        resolve(element);
      }
    }, 100);
  });
}
