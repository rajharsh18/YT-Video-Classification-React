# YouTube Video Classifier - React Frontend

A modern React application that analyzes YouTube videos to determine if they are educational and categorizes them into specific subject areas. Built with React, Vite, and TailwindCSS.

## 🚀 Features

- **Smart Classification**: Advanced algorithm analyzes video content to determine educational value
- **12+ Categories**: Categorizes educational content into specific subject areas
- **Instant Results**: Fast processing with embedded video preview
- **Modern UI**: Beautiful gradient design with animations and responsive layout
- **Real-time Validation**: YouTube URL validation with user-friendly error messages
- **Loading States**: Smooth loading animations and progress indicators

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Styling**: TailwindCSS 4.1.0
- **Icons**: React Icons
- **HTTP Client**: Axios
- **Routing**: React Router DOM (ready for multi-page expansion)
- **Notifications**: React Toastify

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Backend API server running on `http://192.168.1.8:5000` (or update the API endpoint in `src/HomeScreen.jsx`)

## ⚡ Quick Start

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd YT-Video-Classification-React
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Project Structure

```
src/
├── App.jsx              # Main app component
├── HomeScreen.jsx       # Main screen with form and results
├── main.jsx            # React DOM entry point
├── App.css             # Global app styles
├── index.css           # Base styles and Tailwind imports
├── assets/             # Static assets
│   └── react.svg
└── components/         # Reusable components
    ├── LoadingSpinner.jsx    # Loading animation component
    ├── LoadingSpinner.css    # Loading spinner styles
    └── VideoResult.jsx       # Video classification results display
```

## 🎨 Components

### HomeScreen

The main component containing:

- YouTube URL input form
- Video classification results
- Error handling and loading states
- Feature showcase section

### VideoResult

Displays classification results including:

- Video title
- Educational classification status
- Category (if educational)
- Embedded video player

### LoadingSpinner

Animated loading component shown during video analysis.

## 🔗 API Integration

The application connects to a Flask backend API at `http://192.168.1.8:5000/classify` with the following expected response format:

```json
{
  "title": "Video Title",
  "result": "Classification Result",
  "embedUrl": "https://www.youtube.com/embed/VIDEO_ID",
  "isEducational": true,
  "category": "Science"
}
```

### Updating API Endpoint

To change the backend API endpoint, modify the fetch URL in `src/HomeScreen.jsx`:

```javascript
const response = await fetch("YOUR_API_ENDPOINT_HERE", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ url: url.trim() }),
});
```

## 🎯 Usage

1. **Enter YouTube URL**: Paste any YouTube video URL into the input field
2. **Click Classify**: The app will validate the URL and send it for analysis
3. **View Results**: See if the video is educational and its category
4. **Watch Video**: Preview the video directly in the embedded player
5. **Classify Another**: Reset the form to analyze another video

## 🌟 Features in Detail

### URL Validation

- Supports various YouTube URL formats:
  - `https://www.youtube.com/watch?v=VIDEO_ID`
  - `https://youtu.be/VIDEO_ID`
  - `https://www.youtube.com/embed/VIDEO_ID`

### Educational Categories

The classifier can identify videos in categories such as:

- Science & Technology
- Mathematics
- History
- Language Learning
- Programming
- And many more...

### Responsive Design

- Mobile-first approach
- Tablet and desktop optimized
- Smooth animations and transitions
- Dark theme with gradient backgrounds

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is part of the YouTube Video Classification suite by Team GenZ.

## 🐛 Troubleshooting

### Common Issues

1. **API Connection Error**

   - Ensure the backend server is running
   - Check the API endpoint URL in `src/HomeScreen.jsx`
   - Verify CORS settings on the backend

2. **Build Errors**

   - Clear node_modules: `rm -rf node_modules && npm install`
   - Clear Vite cache: `npx vite --force`

3. **Styling Issues**
   - Ensure TailwindCSS is properly configured
   - Check for CSS conflicts in custom styles

## 👥 Team GenZ

This project is developed and maintained by Team GenZ as part of the YouTube Video Classification project suite.

---

For backend API documentation and setup, please refer to the main project repository.
