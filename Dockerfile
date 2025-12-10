# ea-invitation-landing/Dockerfile
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --prefer-offline --no-audit

# Copy application files
COPY . .

# Expose port 3000
EXPOSE 3000

# Set environment to development
ENV NODE_ENV=development

# Start Nuxt development server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]