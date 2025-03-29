#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download sample images from Unsplash (free to use)
# Bread - artisanal loaves
curl -L "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=1200" -o public/images/bread.jpg

# Cake - beautiful wedding cake
curl -L "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=1200" -o public/images/cake.jpg

# Doughnuts - proper glazed doughnuts
curl -L "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=1200" -o public/images/doughnuts.jpg

# Cookies - chocolate chip cookies
curl -L "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1200" -o public/images/cookies.jpg

# Muffins - assorted muffins
curl -L "https://images.unsplash.com/photo-1604882406195-d94d4888567d?w=1200" -o public/images/muffins.jpg

# Hot dog - gourmet hot dog
curl -L "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=1200" -o public/images/hotdog.jpg

# Hero image - modern bakery interior
curl -L "https://images.unsplash.com/photo-1591688515527-f7b20bd05902?w=1200" -o public/images/hero-bakery.jpg

# Create a placeholder for the manager's image
mkdir -p public/images/team
curl -L "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800" -o public/images/team/manager.jpg 