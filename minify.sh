#!/bin/bash

node-minify --compressor html-minifier --input index.html --output index.min.html
node-minify --compressor uglify-js --input calculator.js --output calculator.min.js
node-minify --compressor uglify-js --input spellCalculator.js --output spellCalculator.min.js
node-minify --compressor uglify-js --input spells.js --output spells.min.js
node-minify --compressor uglify-js --input table.js --output table.min.js
node-minify --compressor clean-css --input style.css --output style.min.css
