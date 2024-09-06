
let theme = 'light';
const savedTheme = localStorage.getItem('theme') || 'coffee';
document.documentElement.setAttribute('data-theme', savedTheme);

export function changeTheme(theme) {
	if (typeof document != 'undefined') {
	  // Ensure this runs only on the client
	  document.documentElement.setAttribute('data-theme', theme);
	  localStorage.setItem('theme', theme);
	  console.log('Theme changed to', theme);
	}
  }
  window.changeTheme = changeTheme;

  
  