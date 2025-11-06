# Stage 1: Build the app
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
# Copy built app
COPY --from=build /app/dist /usr/share/nginx/html

# Copy media folder from public
COPY public/media /usr/share/nginx/html/media


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
