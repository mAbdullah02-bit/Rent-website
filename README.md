# 🏠 Rent Website

A modern, responsive rental property website built with **React**, **Vite**, and **Tailwind CSS**. This application provides a user-friendly interface for browsing and managing rental properties.

## ✨ Features

- **Modern UI** - Built with React and styled with Tailwind CSS
- **Fast Development** - Powered by Vite for instant HMR (Hot Module Replacement)
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Authentication** - Firebase integration for user authentication
- **Routing** - Client-side routing with React Router
- **Component Library** - MDB React UI Kit for pre-built components
- **Icons** - React Icons for a comprehensive icon set
- **Mock API** - MirageJS for API mocking and testing
- **Code Quality** - ESLint configured for maintaining code standards

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.3.4
- **Styling**: Tailwind CSS 3.4.7
- **Backend/Auth**: Firebase 10.12.5
- **Routing**: React Router DOM 6.25.1
- **UI Components**: MDB React UI Kit 8.0.0
- **Icons**: React Icons 5.2.1
- **API Mocking**: MirageJS 0.2.0-alpha.3
- **Linting**: ESLint 8.57.0

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mAbdullah02-bit/Rent-website.git
cd Rent-website
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server with hot module replacement:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

### Building

Build the application for production:
```bash
npm run build
```

The optimized build will be generated in the `dist` folder.

### Preview

Preview the production build locally:
```bash
npm run preview
```

### Linting

Check code quality and find issues:
```bash
npm run lint
```

## 📁 Project Structure

```
Rent-website/
├── src/                    # Source code directory
├── public/                 # Static assets
├── index.html             # Main HTML file
├── package.json           # Project dependencies
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── .eslintrc.cjs          # ESLint configuration
```

## 🎨 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint code quality checks |

## 🔧 Configuration Files

- **vite.config.js** - Vite build and development server configuration
- **tailwind.config.js** - Tailwind CSS customization
- **postcss.config.js** - PostCSS plugins for CSS processing
- **.eslintrc.cjs** - ESLint rules and code quality standards

## 📦 Dependencies Overview

### Production
- **React** - UI library for building components
- **Firebase** - Authentication and backend services
- **React Router DOM** - Client-side routing
- **MDB React UI Kit** - Pre-built React components
- **React Icons** - Icon library
- **MirageJS** - API mocking for development

### Development
- **Vite** - Next-generation frontend build tool
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code quality and style checking
- **AutoPrefixer** - CSS vendor prefix automation

## 🌐 Deployment

This project is ready for deployment to services like:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting
- Any static hosting service

Simply run `npm run build` and deploy the `dist` folder.

## 📝 Environment Variables

Create a `.env` file in the root directory for Firebase and other configuration:
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**mAbdullah02-bit**
- GitHub: [@mAbdullah02-bit](https://github.com/mAbdullah02-bit)

## 📞 Support

For support, please open an issue in the repository or contact the maintainer.

---

**Happy coding! 🎉**
