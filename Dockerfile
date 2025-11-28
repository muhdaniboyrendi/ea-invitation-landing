# Dockerfile untuk Nuxt 4
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY pnpm-lock.yaml* ./
COPY yarn.lock* ./

# Install dependencies based on the preferred package manager
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Build the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build Nuxt app
RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Debug: Check what files were generated
RUN echo "=== Checking build output ===" && \
    ls -la .output/ || echo "No .output directory found" && \
    ls -la .output/server/ || echo "No server directory found" && \
    find .output -name "*.mjs" -o -name "index.js" || echo "No entry files found"

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nuxtjs

# Copy the entire .output directory
COPY --from=builder --chown=nuxtjs:nodejs /app/.output /app/.output

# Optional: Copy package.json if needed at runtime
COPY --from=builder --chown=nuxtjs:nodejs /app/package.json /app/package.json

USER nuxtjs

EXPOSE 3000

# Try multiple possible entry points for Nuxt 4
CMD ["sh", "-c", "node .output/server/index.mjs 2>/dev/null || node .output/nitro.mjs 2>/dev/null || (echo 'Error: No valid entry point found' && exit 1)"]