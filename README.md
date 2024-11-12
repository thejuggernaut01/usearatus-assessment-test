# Fungible Token Tracker Web Application

This project is a frontend web application for tracking fungible tokens, similar to [CoinGecko](https://www.coingecko.com/), with a fully customizable token table view. The application displays token market data, allowing users to reorder columns, add/remove columns, and save custom views.

## Project Overview

The page will display a table of tokens with their respective market data using a default set of columns, in a default column order, called Trending view. Users should be able to drag and reorder columns, use the Customize View Modal to add or remove columns, and enter a "label name" to save their customized view to local storage. Saved views will be accessible as tabs above the table, alongside the Trending (default) label.

## Demo

The user interface should closely resemble the CoinGecko homepage and should include:

- **Highlights Section**: A summary section to display key insights.
- **Token Table**: A table that displays token market data with customization options for columns.

## Features

- **Trending View (Default)**: Default table setup with preselected columns in a set order.
- **Custom Views**: Users can create, name, and save custom views of the table with their chosen columns and layout, stored in local storage.
- **Column Customization**:
  - Users can drag and rearrange column order.
  - Add/remove columns via a customization modal.
- **Sortable Table**: All columns are sortable in ascending or descending order.
- **Chart**: Last 7 days price chart using Nivo line charts.

## Tech Stack

- **Frameworks and Libraries**:
  - [Next.js (with Page Router)](https://nextjs.org/docs) - for React framework and routing.
  - [TypeScript](https://www.typescriptlang.org/) - for static typing and better developer experience.
  - [Tailwind CSS](https://tailwindcss.com/) - for styling.
  - [shadcn/ui](https://ui.shadcn.dev/) - for pre-built, customizable UI components.
  - [Coingecko API](https://www.coingecko.com/en/api) - for real-time cryptocurrency market data.
  - [React Query](https://react-query.tanstack.com/) - for data fetching and caching.
  - [TanStack Table](https://tanstack.com/table/v8) - for managing table data and features.
  - [Jotai](https://jotai.org/) - for lightweight state management.
  - [Nivo](https://nivo.rocks/line/) - for creating data visualizations (e.g., line charts).
  - [DndKit](https://dndkit.com/) - for implementing drag-and-drop functionality.

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/thejuggernaut01/fungible-token-tracker
   cd fungible-token-tracker
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Environment Variables**:

   - Create a `.env.local` file in the root directory.
   - Add your CoinGecko API key or other necessary environment variables:
     ```plaintext
     NEXT_PUBLIC_COINGECKO_API_KEY=your_api_key_here
     ```

4. **Run the Development Server**:

   ```bash
   npm run dev
   ```

5. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```plaintext
src
├── components      
├── config
├── context
├── data
├── lib
├── pages           
├── services        
├── styles          
├── types
└── utils           
```

## Functionality Details

### 1. **Token Table**

- Displays token data from CoinGecko API.
- Columns included:
  - Coin Name
  - Price
  - Price Change % (1h, 24h, 7d)
  - 24h Volume
  - Market Cap
  - 7-day Price Chart

### 2. **Customize View Modal**

- Accessible via a "Customize" button, opening a modal (using `shadcn/ui`).
- Allows users to:
  - Add or remove columns with a checkbox interface.
  - Drag to reorder columns within the table.
  - Name and save custom views to local storage.
- **Saved Views**:
  - Saved views are displayed as tabs above the table.
  - Users can switch between custom views and the default Trending view.

### 3. **Sorting & Drag-and-Drop Features**

- Sorting is enabled on all columns (ascending and descending).
- Drag-and-drop functionality (powered by DndKit) allows users to reorder columns by simply dragging the headers.

### 4. **Charting**

- Nivo line charts are used to visualize the 7-day price trend for each token.
