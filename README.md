# Scoop Investment Platform

A modern investment platform built with React and Next.js, offering comprehensive services for converting physical shares to demat, mutual funds, and unlisted shares trading. The platform features a robust backend powered by PayloadCMS for content management and user authentication.

## 🚀 Features

- **Modern Investment Services**: Physical to demat conversion, mutual funds, and unlisted shares trading
- **Next.js 13+ App Router**: Utilizing the latest Next.js app directory structure
- **Responsive Design**: Built with SCSS modules for consistent styling across devices
- **Content Management**: Integrated PayloadCMS for easy content and user management
- **Authentication System**: Secure user authentication with admin panel access
- **Media Management**: Pre-configured image handling with resizing and focal point selection
- **Progressive Web App (PWA)**: Complete PWA setup with manifest and icons
- **Legal Compliance**: Dedicated pages for compliance, privacy policy, and terms of service
- **Investor Resources**: Specialized sections for investor charter and reports
- **Docker Support**: Containerized development environment

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **Next.js 15** - Full-stack React framework
- **SCSS Modules** - Modular and maintainable styling
- **React Router** - Client-side routing
- **React Icons** - Comprehensive icon library

### Backend & CMS
- **PayloadCMS** - Headless CMS with admin interface
- **MongoDB** - Document database for data storage
- **Cloud S3** - Object storage for media files

### Development Tools
- **Docker** - Containerization for consistent development
- **ESLint** - Code linting and formatting
- **Vite** - Fast build tool and development server

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm
- MongoDB instance (local or cloud)

### Quick Start - Cloud Deployment
This template can be deployed directly from PayloadCMS Cloud hosting, which automatically sets up MongoDB and S3 storage.

### Local Development Setup

1. **Clone the repository:**
```bash
git clone https://github.com/masterBranchDevs/ascent
cd ascent
```

2. **Install dependencies:**
```bash
npm install
# or
pnpm install
```

3. **Configure environment variables:**
```bash
cp .env.example .env
```

Add the following to your `.env` file:
```env
MONGODB_URI=mongodb://localhost:27017/scoop-investment
# Add your MongoDB Cloud URI if using cloud database
# Add S3 credentials if using cloud storage
```

4. **Start the development server:**
```bash
npm run dev
# or
pnpm dev
```

5. **Open your browser:**
Navigate to `http://localhost:3000` to access the frontend application

6. **Access PayloadCMS Admin:**
Navigate to `http://localhost:3000/admin` to access the PayloadCMS admin panel

7. **Create your first admin user:**
Follow the on-screen instructions to set up your admin account and access the PayloadCMS admin panel.

### Docker Setup (Optional)

For a consistent development environment using Docker:

1. **Configure MongoDB URI for Docker:**
```env
MONGODB_URI=mongodb://127.0.0.1/scoop-investment
```

2. **Update docker-compose.yml:**
Ensure the `MONGODB_URI` matches your `.env` configuration.

3. **Start Docker containers:**
```bash
docker-compose up
# or run in background
docker-compose up -d
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Preview production build
- `npm run lint` - Run ESLint for code quality
- `docker-compose up` - Start Docker development environment

## 📁 Project Structure

```
scoop-investment-platform/
├── .next/                     # Next.js build output
├── .vscode/                   # VS Code configuration
├── node_modules/              # Dependencies
├── public/                    # Static assets and PWA files
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   └── site.webmanifest
├── src/
│   └── app/
│       ├── (frontend)/        # Frontend application routes
│       │   ├── about/         # About page
│       │   ├── api/           # API routes
│       │   ├── compliance/    # Compliance page
│       │   ├── contact/       # Contact page
│       │   ├── investor-charter/ # Investor charter page
│       │   ├── privacy-policy/   # Privacy policy page
│       │   ├── reports/       # Reports section
│       │   ├── services/      # Services page
│       │   └── terms-of-service/ # Terms of service page
│       ├── (payload)/         # PayloadCMS admin interface
│       ├── my-route/          # Custom route handler
│       ├── assets/            # Static assets and images
│       │   ├── hero-about.jpg
│       │   ├── scoop_investment_logo.png
│       │   └── upward-arrows.svg
│       ├── collections/       # PayloadCMS collections
│       │   ├── Media.ts       # Media collection schema
│       │   └── Users.ts       # Users collection schema
│       ├── components/        # Reusable UI components
│       │   ├── common/        # Common components
│       │   │   ├── FAQSection.jsx
│       │   │   ├── FAQSection.module.scss
│       │   │   ├── Footer.tsx
│       │   │   ├── Footer.module.scss
│       │   │   ├── Navbar.tsx
│       │   │   └── Navbar.module.scss
│       │   └── ...           # Other component directories
│       ├── config/           # Configuration files
│       ├── constant/         # Constants and static data
│       ├── layout.styles.scss # Global layout styles
│       ├── layout.tsx         # Root layout component
│       ├── page.module.scss   # Page-specific styles
│       ├── page.tsx           # Home page component
│       └── provider.tsx       # Context providers
├── .env.example              # Environment variables template
├── docker-compose.yml        # Docker configuration
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## 🧩 Components Architecture

### Common Components (`src/app/components/common/`)
- **FAQSection**: Reusable FAQ component with modular styling
- **Footer**: Site footer with company information and links
- **Navbar**: Navigation component with responsive design

### Component Structure
Each component follows a consistent pattern:
- **Component File**: `.tsx` for TypeScript React components
- **Style Module**: `.module.scss` for component-specific styles
- **Modular Design**: Self-contained components with clear interfaces

## 🗃️ Database Collections

### Users Collection (`src/app/collections/Users.ts`)
- **Purpose**: Authentication-enabled collection for admin panel access
- **Features**: User management, role-based permissions
- **Documentation**: [PayloadCMS Auth Guide](https://payloadcms.com/docs/authentication/overview)

### Media Collection (`src/app/collections/Media.ts`)
- **Purpose**: Upload-enabled collection for file management
- **Features**: 
  - Pre-configured image sizes
  - Focal point selection
  - Manual resizing capabilities
  - Optimized for investment platform assets

## 🚀 Deployment

### Production Build
```bash
npm run build
npm run start
```

## 🔧 Configuration

### PayloadCMS Configuration
The platform comes pre-configured with:
- User authentication system
- Media management with cloud storage
- Admin panel for content management
- API endpoints for frontend integration

### Environment Variables
Checkout `.env.example` file

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ by the masterBranch Team**