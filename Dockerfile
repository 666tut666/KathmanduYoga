# Base image for building React frontend
FROM node:20-alpine AS frontend-build

# Set working directory and copy frontend files
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend /app/frontend

# Build React application
RUN npm run build

# Final stage to run both backend and frontend servers
FROM python:3.11.9-alpine3.20

# Set working directory for backend
WORKDIR /app

# Install necessary packages
RUN apk add --no-cache gcc libc-dev libffi-dev git curl nodejs npm

# Copy backend code
COPY backend /app

# Install PDM
RUN rm -f pdm.lock
RUN pip install -U pdm
RUN pdm install --prod --no-self

# Copy frontend build output from the second stage
COPY --from=frontend-build /app/frontend/build /app/frontend/build

# Install the static file server
RUN npm install -g serve

# Start both backend and frontend servers
CMD ["sh", "-c", "pdm run uvicorn main:app --host 0.0.0.0 --port 8000 & serve -s /app/frontend/build -l 8080"]