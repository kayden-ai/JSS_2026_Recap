const target = document.getElementById('target');
const now = new Date();

const fiDate = now.toLocaleDateString('fi-FI', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});
const fiTime = now.toLocaleTimeString('fi-FI', {
  hour: '2-digit',
  minute: '2-digit',
});

target.innerHTML = `
  <p>${navigator.userAgent}</p>
  <p>${screen.width}px x ${screen.height}px</p>
  <p>${screen.availWidth}px x ${screen.availHeight}px</p>
  <p>${fiDate} ${fiTime}</p>
`;
