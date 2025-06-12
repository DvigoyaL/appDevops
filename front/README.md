# TuristAPP Front

This directory contains a minimal React application served with Express.
It provides login and register forms that interact with the deployed backend.

## Running locally

1. Install dependencies (requires Node.js):
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Open `http://localhost:3000` in your browser.

By default the frontend expects the backend to be accessible at
`https://proyectodevopsbackend-evcnbwdbcrdyc0d8.canadacentral-01.azurewebsites.net`.
You can change this by setting the environment variable `API_BASE` before starting
the server:

```bash
API_BASE="https://your-backend-url" npm start
```
