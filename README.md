# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Express.js. Features smooth animations, dark/light theme support, and a contact form with email notifications.

## Features

- **Modern UI/UX**: Clean, responsive design with smooth animations using Framer Motion
- **Dark/Light Theme**: Toggle between dark and light themes with persistent storage
- **Interactive Sections**:
  - Hero section with animated background
  - About section with education and interests
  - Projects showcase with filtering
  - Skills section with progress indicators
  - Experience timeline
  - Resume download
  - Books collection
  - Contact form with email notifications
- **Contact Form**: Integrated contact form that sends emails via Nodemailer
- **Smooth Scrolling**: Anchor-based navigation with smooth scroll behavior
- **Responsive Design**: Fully responsive across all device sizes

## Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - UI component library
- **Framer Motion** - Animation library
- **React Query (TanStack Query)** - Data fetching and state management
- **Wouter** - Lightweight routing
- **Vanta.js** - Animated background effects

### Backend
- **Express.js** - Web server
- **TypeScript** - Type safety
- **Nodemailer** - Email service
- **Zod** - Schema validation
- **Drizzle ORM** - Database ORM (configured but using in-memory storage)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git** (for cloning the repository)

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   # Database (optional - currently using in-memory storage)
   DATABASE_URL=postgresql://user:password@localhost:5432/portfolio
   
   # Email Configuration (required for contact form)
   EMAIL_USER=your-email@gmail.com
   EMAIL_APP_PASSWORD=your-app-password
   ```

   **Note**: For Gmail, you'll need to:
   - Enable 2-Factor Authentication
   - Generate an App Password (not your regular password)
   - Use the App Password in `EMAIL_APP_PASSWORD`

## Running the Project

### Development Mode

Start the development server:

```bash
npm run dev
```

The application will be available at:
- **Frontend & Backend**: http://localhost:3000

The dev server includes:
- Hot module replacement (HMR)
- TypeScript compilation
- Vite dev server integration

### Production Build

1. **Build the project**
   ```bash
   npm run build
   ```

   This will:
   - Build the React frontend with Vite
   - Bundle the Express server with esbuild
   - Output to the `dist/` directory

2. **Start the production server**
   ```bash
   npm start
   ```

   The application will run on port 3000 (or the port specified in your environment).

### Type Checking

Run TypeScript type checking:

```bash
npm run check
```

### Database Setup (Optional)

If you want to use a PostgreSQL database instead of in-memory storage:

1. Set up a PostgreSQL database
2. Add `DATABASE_URL` to your `.env` file
3. Push the schema to the database:
   ```bash
   npm run db:push
   ```

**Note**: Currently, the project uses in-memory storage (`MemStorage`). To use the database, you'll need to update `server/storage.ts` to use Drizzle ORM instead of `MemStorage`.

## Project Structure

```
Personal-portfolio/
├── client/                 # Frontend React application
│   ├── index.html         # HTML entry point
│   └── src/
│       ├── components/    # React components
│       │   ├── about/     # About section
│       │   ├── books/     # Books section
│       │   ├── contact/   # Contact form
│       │   ├── experience/# Experience timeline
│       │   ├── home/      # Hero section
│       │   ├── layout/    # Header, Footer, Navbar
│       │   ├── projects/  # Projects showcase
│       │   ├── resume/    # Resume section
│       │   ├── skills/    # Skills section
│       │   └── ui/        # Reusable UI components
│       ├── hooks/         # Custom React hooks
│       ├── lib/           # Utilities and data
│       ├── pages/         # Page components
│       ├── providers/     # Context providers
│       └── types/         # TypeScript type definitions
├── server/                # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Data storage layer
│   ├── services/         # Business logic
│   │   └── email.ts      # Email service
│   └── vite.ts           # Vite integration
├── shared/               # Shared code
│   └── schema.ts         # Database schema (Drizzle)
├── public/               # Static assets
├── attached_assets/      # Additional assets
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── drizzle.config.ts     # Drizzle ORM configuration
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run check` | Run TypeScript type checking |
| `npm run db:push` | Push database schema to PostgreSQL |

## API Endpoints

### Contact Form
- **POST** `/api/contact`
  - Sends a contact form submission
  - Validates input with Zod
  - Stores message (currently in-memory)
  - Sends email notification

  **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Optional subject",
    "message": "Your message here"
  }
  ```

  **Response:**
  ```json
  {
    "success": true,
    "message": "Your message has been sent successfully!"
  }
  ```

## Customization

### Updating Content

Most content is stored in `client/src/lib/data.ts`:
- Projects
- Skills
- Experience
- Books

Simply edit the arrays in this file to update your portfolio content.

### Styling

- **Theme Colors**: Edit CSS variables in `client/src/index.css`
- **Tailwind Config**: Modify `tailwind.config.ts`
- **Component Styles**: Components use Tailwind classes and can be customized directly

### Adding New Sections

1. Create a new component in `client/src/components/`
2. Add it to `client/src/pages/Home.tsx`
3. Update navigation in `client/src/components/layout/Header.tsx` if needed

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy

**Note**: The current `vercel.json` is configured for static deployment. For server-side routes, you may need to configure Vercel serverless functions.

### Other Platforms

The project can be deployed to any Node.js hosting platform:
- Heroku
- Railway
- Render
- DigitalOcean App Platform

Make sure to:
1. Set environment variables
2. Run `npm run build` before deployment
3. Use `npm start` as the start command

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | No (using in-memory storage) |
| `EMAIL_USER` | Gmail address for sending emails | Yes (for contact form) |
| `EMAIL_APP_PASSWORD` | Gmail App Password | Yes (for contact form) |
| `NODE_ENV` | Environment (development/production) | Auto-set |

## Troubleshooting

### Contact Form Not Sending Emails

1. Verify `EMAIL_USER` and `EMAIL_APP_PASSWORD` are set correctly
2. Ensure you're using a Gmail App Password (not regular password)
3. Check that 2FA is enabled on your Gmail account
4. Check server logs for error messages

### Port Already in Use

If port 3000 is already in use, you can change it in `server/index.ts`:
```typescript
const port = process.env.PORT || 3000;
```

### Build Errors

1. Clear `node_modules` and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. Check TypeScript errors:
   ```bash
   npm run check
   ```

## License

MIT License - feel free to use this project for your own portfolio!

## Author

**Aditya Manjrekar**
- Email: manjrekadi05@gmail.com
- LinkedIn: [linkedin.com/in/aditya-manjrekar-213b56275](https://www.linkedin.com/in/aditya-manjrekar-213b56275/)
- GitHub: [github.com/manjrekAdi](https://github.com/manjrekAdi)
- Website: [adityacodesdev.vercel.app](https://adityacodesdev.vercel.app)

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the UI component library
- [Vanta.js](https://www.vantajs.com/) for animated backgrounds
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide Icons](https://lucide.dev/) for icons

---

**Note**: This portfolio is actively maintained and updated. Feel free to fork and customize it for your own use!

