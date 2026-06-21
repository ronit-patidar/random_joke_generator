# 😂 Joker App

A simple React application that fetches and displays random jokes using a public Joke API. Click a button, get a laugh!

## Features

- 🎲 Fetch a random joke at the click of a button
- ⚡ Built with React for a fast, responsive UI
- 🌐 Pulls jokes live from an external Joke API
- 📱 Clean, simple, mobile-friendly design

## Tech Stack

- **React** (Vite / Create React App)
- **JavaScript (ES6+)**
- **CSS** for styling
- **Joke API** (e.g. [JokeAPI](https://v2.jokeapi.dev/) or [Official Joke API](https://official-joke-api.appspot.com/))

## Demo

> Add a live demo link here once deployed (e.g. Vercel/Netlify).

## Screenshots

> Add a screenshot or GIF of the app here.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/ronit-patidar/joker-app.git
   cd joker-app
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173` (or the port shown in your terminal)

## Project Structure

```
joker-app/
├── public/
├── src/
│   ├── components/
│   │   └── Joke.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
```

## How It Works

1. The app makes a `fetch`/`axios` call to a Joke API endpoint
2. On button click, a new random joke is fetched and displayed
3. State is managed using React's `useState` and `useEffect` hooks

## Future Improvements

- [ ] Add joke categories (Programming, Dark, Pun, etc.)
- [ ] Add a "Favorite Jokes" feature using localStorage
- [ ] Add loading and error states
- [ ] Add dark mode toggle
- [ ] Deploy to Vercel/Netlify

## Author

**Ronit Patidar**
GitHub: [@ronit-patidar](https://github.com/ronit-patidar)

## License

This project is open source and available under the [MIT License](LICENSE).