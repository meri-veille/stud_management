
# Use the official lightweight Nginx image
FROM nginx:alpine

# Copy all HTML files into the Nginx web directory
COPY index.html /usr/share/nginx/html/index.html
COPY contact.html /usr/share/nginx/html/contact.html
COPY login.html /usr/share/nginx/html/login.html
COPY register.html /usr/share/nginx/html/register.html
# Copy CSS stylesheet
COPY styles.css /usr/share/nginx/html/styles.css

# Document the web server port
EXPOSE 80
