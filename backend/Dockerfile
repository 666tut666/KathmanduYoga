# Development stage
FROM python:3.9-slim as dev

WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends gcc python3-dev

# Install dependencies first
COPY requirements.txt .
RUN pip install --user -r requirements.txt

# Copy application code
COPY . .

# Production stage
FROM python:3.9-slim as prod
COPY --from=dev /root/.local /root/.local
COPY --from=dev /app /app
WORKDIR /app
ENV PATH=/root/.local/bin:$PATH
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0"]

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends gcc python3-dev

# Copy requirements first to leverage Docker cache
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY ./app /app/app

# Environment variables
ENV PYTHONPATH=/app \
    DATABASE_URL=postgresql://user:password@db/yoga_db \
    JWT_SECRET=your_secure_secret_key_here \
    ALLOWED_ORIGINS=http://frontend:3000

# Expose port and run application
EXPOSE 8000
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"] 