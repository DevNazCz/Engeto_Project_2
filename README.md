🎬 Netflix Clone (Engeto Course Project)

📄 Project Description
This project is an academic clone of the Netflix website, developed as part of a web development course at Engeto. The primary goal is to demonstrate and solidify skills in working with modern web technologies, including DOM manipulation, asynchronous API calls, and styling.
The project implements key interface elements, such as a registration section with form validation and a content browsing section with dynamic data loading.

⚙️ Technologies Used
-HTML5	Document structure and semantic markup.
-CSS3	Styling, basic responsive design, and use of CSS variables.
-JavaScript (ES6+)	Dynamic behavior, event handling, asynchronous requests (Fetch API), and form validation.
-TVMaze API	Data source for dynamically loading information about TV shows and movies.

✨ Key Features

1 . Registration Form (Password Validation):

-Implemented client-side form validation.
-Real-time comparison of the two password fields.
-Dynamic application of CSS classes (.valid/.invalid) for visual feedback (red/green border) upon input and focus.

2. Dynamic Content Loading:

-Uses the Fetch API to retrieve data about TV shows and movies from the TVMaze API.
-Automatic content loading upon page load (DOMContentLoaded).
-Dynamic content update when the selection in the <select> element (filter) changes.

3. Robust Error Handling:

-Implemented a .catch() block to intercept network or API errors.
-Displays a user-friendly message on the screen in case of a failed load instead of crashing the interface.
-Checks for the existence of a poster image (show.image?.medium) before displaying it.

