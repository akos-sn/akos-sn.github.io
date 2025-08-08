// Function to check and apply the theme based on localStorage or system preference
function checkTheme() {
	const storedTheme = localStorage.getItem('theme');

	// Check if the user has previously set a theme
	if (storedTheme) {
		document.documentElement.setAttribute('data-theme', storedTheme);
	} else {
		// If no theme is set in localStorage, check system preference
		const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', systemTheme);
	}
}

// Function to switch between light and dark themes
function switchTheme() {
	const currentTheme = document.documentElement.getAttribute('data-theme');

	// Switch theme and update localStorage
	if (currentTheme === 'light') {
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light');
	}
}

// Run the checkTheme function when the page loads
checkTheme();

// Optionally, you could call `switchTheme()` based on a user action like a button click