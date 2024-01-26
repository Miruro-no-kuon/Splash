# 🏠 Splash page 

## 📋 Overview

The "Splash" page is a component that serves as the landing page for the Miruro anime streaming website. It displays a banner image, a title, a subtitle, and various sections of content, each providing information about Miruro and its features.

## 📖 Purpose & Features

This component is designed to create an engaging and informative landing page for Miruro visitors. It introduces users to the website's key features, safety measures, and usage instructions.

- Displays a banner image with a background with a logo and "Go to home page" button.
- Utilizes styled-components to create styled elements and animations.
- Includes multiple sections of content with titles and descriptive paragraphs.
- Utilizes React icons (e.g., :arrow_right:, :white_check_mark:) for visual elements.

## 🧱 Code Structure

The code is organized into different styled components to ensure maintainability and reusability. Here's a brief overview of the code structure:

- `Card`: Styled div element that represents the main card container.
- `BannerImage`: Styled div element for displaying the banner image.
- `Content`: Styled div element for the main content within the card.
- `Title`: Styled heading for the main title.
- `Subtitle`: Styled paragraph for the subtitle.
- `Button`: Styled Link component for the "Go to homepage" button.
- `Keyword`: Styled span element for highlighting keywords.
- `Paragraph`: Styled paragraph for general text content.
- `MainContent`: Styled div element for the main content section below the card.
- `Advertising`: Styled div element for displaying advertisements within sections.

## 🛠️ Usage

The "Splash" component can be used as the landing page for the Miruro website. It provides an engaging and informative welcome screen for visitors.

```javascript
import Splash from "./Splash";

function App() {
  return (
    <div>
      <Splash />
    </div>
  );
}

export default App;
```

## 🤝 Contributing

Contributions to this component and the Miruro project are welcome and encouraged! If you'd like to contribute, here's how you can get involved:

1. Fork this repository and clone it to your local machine.
2. Create a new branch for your changes: `git checkout -b feature/your-feature-name`.
3. Make your desired changes and improvements to the code.
4. Test your changes locally to ensure they work as expected.
5. Commit your changes with descriptive commit messages: `git commit -m "Add feature: your feature description"`.
6. Push your changes to your forked repository: `git push origin feature/your-feature-name`.
7. Create a pull request (PR) to the main Miruro repository.

---

Feel free to reach out at **miruro@proton.me** if you have any questions or need further assistance. Happy coding! 🚀
