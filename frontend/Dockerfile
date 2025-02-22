# Use Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --legacy-peer-deps

# Copy source code
COPY . .

# Build application
RUN npm run build

# Environment variables
ENV REACT_APP_API_BASE=http://backend:8000/api

# Expose port and run server
EXPOSE 3000
CMD ["npm", "start"] 