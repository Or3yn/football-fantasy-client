# Use the official Vite Docker image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to install dependencies
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of your application code
COPY . .

# Build your application
RUN yarn build

# Expose the port that your application listens on
EXPOSE 8080

# Command to run your application
CMD ["yarn", "start"]
