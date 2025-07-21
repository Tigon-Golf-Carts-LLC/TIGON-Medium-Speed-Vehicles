# NJ Golf Carts - Replit Project Guide

## Overview

NJ Golf Carts is a full-stack web application for a New Jersey-based golf cart dealership. The application serves as both a marketing website and a business management platform, featuring inventory management, customer inquiries, rental systems, and comprehensive service information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack Query for server state management and caching
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **API Design**: RESTful endpoints with JSON responses

### Database Design
- **Primary Database**: PostgreSQL with Drizzle ORM
- **Schema Location**: `shared/schema.ts` for shared types between frontend and backend
- **Migrations**: Managed through Drizzle Kit in `./migrations` directory
- **Connection**: Uses Neon serverless PostgreSQL via `@neondatabase/serverless`

## Key Components

### Core Pages
1. **Home** (`/`) - Landing page with featured inventory and company overview
2. **Inventory** (`/inventory`) - Golf cart listings with filtering capabilities
3. **Rentals** (`/rentals`) - Rental packages and pricing information
4. **Services** (`/services`) - Service offerings and maintenance information
5. **About** (`/about`) - Company history and team information
6. **Contact** (`/contact`) - Contact forms and location details
7. **Financing** (`/financing`) - Financing options and calculators

### Shared Components
- **Navigation** - Responsive header with mobile menu
- **Footer** - Company information and quick links
- **SEO Head** - Dynamic meta tags and structured data
- **UI Components** - Comprehensive set of reusable components from shadcn/ui

### Business Features
- **Inventory Management** - Display and categorization of golf carts
- **Contact System** - Lead capture and customer inquiry management
- **Rental Calculator** - Dynamic pricing calculation for different rental periods
- **Financing Calculator** - Payment estimation tools
- **Brand Showcase** - Featured manufacturer information

## Data Flow

### Client-Server Communication
1. **API Requests**: Frontend uses TanStack Query for API calls
2. **Data Fetching**: Server-side data fetching with caching strategies
3. **Form Submissions**: React Hook Form handles form state, Zod validates data
4. **Error Handling**: Centralized error handling with toast notifications

### Database Operations
1. **Schema Definition**: Shared types between frontend and backend
2. **Query Building**: Drizzle ORM provides type-safe database queries
3. **Data Validation**: Zod schemas ensure data integrity
4. **Migrations**: Automated schema changes through Drizzle Kit

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **shadcn/ui**: Pre-built component library

### Data and State Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management
- **Zod**: Runtime type validation
- **date-fns**: Date manipulation utilities

### Database and Backend
- **Drizzle ORM**: Type-safe SQL query builder
- **Neon**: Serverless PostgreSQL database
- **Express.js**: Web application framework
- **connect-pg-simple**: PostgreSQL session store

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React application to `dist/public`
- **Backend**: esbuild compiles TypeScript server to `dist/index.js`
- **Assets**: Static assets served from `attached_assets` directory

### Environment Configuration
- **Development**: Uses tsx for TypeScript execution with hot reloading
- **Production**: Compiled JavaScript with Node.js runtime
- **Database**: Environment variable `DATABASE_URL` for PostgreSQL connection

### File Structure
```
├── client/          # Frontend React application
├── server/          # Backend Express application
├── shared/          # Shared types and schemas
├── attached_assets/ # Static assets and components
├── migrations/      # Database migration files
└── dist/           # Build output directory
```

The application follows a monorepo structure with clear separation between frontend, backend, and shared code. The build system is optimized for both development and production deployment, with TypeScript providing type safety across the entire stack.