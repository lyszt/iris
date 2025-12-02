# Iris

A modern, high-performance project portfolio management system built with React and Elixir/Phoenix.

![Iris Screenshot 1](https://github.com/user-attachments/assets/c1fdd03c-02e5-42ba-863a-8319efc4ddf5)
![Iris Screenshot 2](https://github.com/user-attachments/assets/7e488624-a3dd-4ad6-b460-2c398c33fd6f)

## Overview

Iris is a personal project management dashboard designed to help developers track, organize, and manage their software projects with comprehensive metadata and bulk import capabilities. Built with a modern tech stack combining React's reactive UI with Elixir's legendary concurrency, Iris provides blazingly fast project imports and a smooth user experience.

## Features

### Project Management
- **Comprehensive Project Tracking**
  - Basic information: name, description, status
  - Technology stack tracking with autocomplete (powered by linguist-languages)
  - Multiple URLs: repository, documentation, demo links
  - Timeline management: start date, end date, deadlines
  - Priority levels: low, medium, high, critical
  - Progress tracking with percentage and development phases
  - Team information: size, lead developer
  - Effort estimation: estimated vs actual hours
  - Risk assessment and categorization
  - Tags and notes for additional context

### User Interface
- **Interactive Forms**
  - Minimal and expanded views for different use cases
  - Draggable modal forms (when collapsed)
  - Full-screen mode for detailed input
  - Organized two-column layout in expanded mode
  - Real-time validation and feedback

- **Bulk Import via JSON**
  - Import single projects or arrays of projects
  - Parallel processing for lightning-fast imports
  - Detailed success/failure reporting
  - Copy-to-clipboard template functionality
  - Error tracking with specific failure details

- **Data Grid**
  - Sortable columns
  - Responsive design
  - Real-time updates after imports

## Tech Stack

### Frontend
- **React 19** - UI framework with React Compiler
- **TypeScript** - Type safety and developer experience
- **Vite** - Lightning-fast build tool
- **Material-UI (MUI)** - Component library
- **TailwindCSS** - Utility-first styling
- **React Draggable** - Draggable components

### Backend
- **Elixir/Phoenix** - High-performance web framework
- **Ecto** - Database wrapper and query generator
- **PostgreSQL** - Relational database
- **CORS Plug** - Cross-origin resource sharing
- **Bandit** - HTTP server

### Additional Tools
- **linguist-languages** - Language/framework detection
- **ESLint** - Code linting
- **Phoenix LiveView** - Real-time features

## Installation

### Prerequisites
- Node.js 18+ and npm
- Elixir 1.15+
- Erlang/OTP 27+ (28.1+ recommended to avoid regex warnings)
- PostgreSQL 14+

### Backend Setup

1. Navigate to the server directory:
```bash
cd iris_server
```

2. Install dependencies:
```bash
mix deps.get
```

3. Create and migrate the database:
```bash
mix ecto.create
mix ecto.migrate
```

4. Start the Phoenix server:
```bash
mix phx.server
```

The API will be available at `http://localhost:4000`

### Frontend Setup

1. Navigate to the project root:
```bash
cd ..
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173` (or the next available port)

## Usage

### Adding a Single Project

1. Click the **"Add project"** button
2. Fill in the required fields (name and status)
3. Optionally click **"More Options"** to expand the form
4. Click **"Add Project"** to save

### Bulk Import via JSON

1. Click the **"Add via JSON"** button
2. Click **"Copy JSON Template"** to get started
3. Paste your JSON (single object or array)
4. Click **"Add Project(s)"** to import

**Single Project Example:**
```json
{
  "name": "My Project",
  "description": "Project description",
  "status": "Planned",
  "priority": "medium",
  "progress": 0,
  "phase": "planning",
  "risk_level": "low",
  "is_active": true
}
```

**Multiple Projects Example:**
```json
[
  {
    "name": "Project 1",
    "description": "First project",
    "status": "Planned"
  },
  {
    "name": "Project 2",
    "description": "Second project",
    "status": "In progress"
  }
]
```

### Viewing Projects

All projects are displayed in the data grid on the home page. The grid shows:
- Project ID
- Name
- Description
- Status
- Technology stacks

## Project Structure

```
iris/
├── src/                          # Frontend source code
│   ├── components/              # Reusable React components
│   │   ├── datagrid/           # Data grid component
│   │   ├── dialogs/            # Dialog components
│   │   ├── modalStyles.ts      # Modal styling utilities
│   │   └── navigator/          # Navigation components
│   ├── content/                 # Page content
│   │   └── home/               # Home page components
│   │       ├── AddProject.tsx          # Main form container
│   │       ├── ProjectForm.tsx         # Interactive project form
│   │       ├── AddJSONProjectForm.tsx  # JSON import form
│   │       └── projectServices.ts      # API service layer
│   ├── lib/                     # Utility libraries
│   │   └── Network.ts          # HTTP client
│   ├── types/                   # TypeScript type definitions
│   │   └── domain/             # Domain models
│   ├── config/                  # Configuration files
│   └── main.tsx                 # Application entry point
│
├── iris_server/                 # Backend Elixir/Phoenix app
│   ├── lib/
│   │   ├── iris_server/        # Core application logic
│   │   │   ├── projects/       # Project domain
│   │   │   └── repo.ex         # Database repository
│   │   └── iris_server_web/    # Web layer
│   │       ├── controllers/    # API controllers
│   │       ├── endpoint.ex     # HTTP endpoint configuration
│   │       └── router.ex       # Route definitions
│   ├── config/                  # Elixir configuration
│   ├── priv/                    # Database migrations & static assets
│   └── mix.exs                  # Elixir project definition
│
├── package.json                 # Node.js dependencies
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
└── tailwind.config.js          # TailwindCSS configuration
```

## API Endpoints

### Projects

- `GET /api/projects` - List all projects
- `POST /api/projects` - Create a new project

## Development

### Backend Commands

```bash
# Run tests
mix test

# Format code
mix format

# Run migrations
mix ecto.migrate

# Reset database
mix ecto.reset

# Build assets
mix assets.build

# Pre-commit checks
mix precommit
```

### Frontend Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Configuration

### Backend Configuration

Environment variables can be set in `iris_server/config/`:
- `config.exs` - General configuration
- `dev.exs` - Development environment
- `test.exs` - Test environment
- `prod.exs` - Production environment
- `runtime.exs` - Runtime configuration

### Frontend Configuration

API URL is configured in `src/config/index.ts`:
```typescript
const DEV_URL = "http://localhost:4000";
const PRODUCTION_URL = "";
```

## Performance Notes

Iris leverages Elixir's BEAM VM for exceptional concurrency performance:
- Parallel bulk imports process instantly
- Lightweight process isolation per request
- Built-in fault tolerance
- Scales effortlessly with concurrent users

## Contributing

This is a personal project, but contributions are welcome! Please feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Future Enhancements

Potential features for future development:
- [ ] Project editing and deletion
- [ ] Advanced filtering and search
- [ ] Project analytics and insights
- [ ] Export functionality
- [ ] GitHub integration
- [ ] Project templates
- [ ] Collaboration features
- [ ] Activity timeline

## License

[Add your license here]

## Acknowledgments

- Built with [Phoenix Framework](https://phoenixframework.org/)
- UI components from [Material-UI](https://mui.com/)
- Language data from [linguist-languages](https://github.com/github/linguist)

---

Built using React and Elixir
