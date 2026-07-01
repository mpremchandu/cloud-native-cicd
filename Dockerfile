# Stage 1: Build and installation
FROM node:20-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production

# Stage 2: Final lightweight runtime
FROM node:20-alpine
WORKDIR /usr/src/app
# Copy only the necessary files from the builder stage
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY server.js .

EXPOSE 3000
USER node
CMD ["node", "server.js"]
