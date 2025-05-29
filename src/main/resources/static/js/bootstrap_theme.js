// Reference: https://getbootstrap.com/docs/5.3/customize/color-modes/
document.addEventListener('DOMContentLoaded', () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  // Set initial theme based on system config
  document.documentElement.setAttribute(
    'data-bs-theme',
    prefersDark.matches ? 'dark' : 'light'
  );

  // (Optional) Listen for changes
  prefersDark.addEventListener('change', e => {
    document.documentElement.setAttribute(
      'data-bs-theme',
      e.matches ? 'dark' : 'light'
    );
  });
});