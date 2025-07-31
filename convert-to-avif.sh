#!/bin/bash

if ! command -v cavif &> /dev/null
then
    echo "cavif not found. Install with: brew install cavif"
    exit 1
fi

cd public || exit

# Find JPG, JPEG, PNG files (case insensitive) recursively
find . -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r img; do
  base="${img%.*}"
  cavif "$img" --quality 70 --output "${base}.avif"
  echo "Converted: $img → ${base}.avif"
done
