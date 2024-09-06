let theme = 'light';

export function changeTheme(theme) {
	if (typeof document != 'undefined') {
	  // Ensure this runs only on the client
	  document.documentElement.setAttribute('data-theme', theme);
	}
  }
  