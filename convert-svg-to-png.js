const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function convertSvgToPng() {
  console.log('Starting SVG to PNG conversion...');
  
  // Read the SVG file
  const svgPath = path.join(__dirname, 'public', 'favicon.svg');
  const svgContent = fs.readFileSync(svgPath, 'utf8');
  
  // Launch browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to desired size (128x128 for high quality)
  await page.setViewport({ width: 128, height: 128 });
  
  // Create HTML with the SVG scaled to fill the viewport
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { margin: 0; padding: 0; background: transparent; }
        svg { width: 128px; height: 128px; }
      </style>
    </head>
    <body>
      ${svgContent.replace('width="32" height="32"', 'width="128" height="128"')}
    </body>
    </html>
  `;
  
  // Set content and take screenshot
  await page.setContent(html);
  
  const pngPath = path.join(__dirname, 'public', 'favicon.png');
  await page.screenshot({
    path: pngPath,
    type: 'png',
    omitBackground: true, // Keep transparency
    clip: { x: 0, y: 0, width: 128, height: 128 }
  });
  
  await browser.close();
  
  console.log(`✅ Successfully converted SVG to PNG: ${pngPath}`);
  console.log('PNG size: 128x128 pixels');
}

// Run the conversion
convertSvgToPng().catch(console.error);