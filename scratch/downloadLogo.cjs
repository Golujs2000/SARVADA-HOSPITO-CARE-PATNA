const fs = require('fs');
const path = require('path');
const axios = require('axios');

const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/patna-lapro-stone-healthcare.firebasestorage.app/o/gallery%2F1780641940860_Patna%20Lapro%20%26%20Stone%20Healthcare.webp?alt=media&token=6cc6bbed-efec-4826-b593-107a379307e5';

const destPaths = [
  path.join(__dirname, '..', 'public', 'favicon.png'),
  path.join(__dirname, '..', 'public', 'patna-lapro-logo.png'),
  path.join(__dirname, '..', 'src', 'assets', 'patna-lapro-logo.png')
];

async function downloadLogo() {
  try {
    console.log('Downloading logo from:', imageUrl);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);

    for (const destPath of destPaths) {
      fs.writeFileSync(destPath, buffer);
      console.log('Successfully wrote to:', destPath);
    }
    console.log('All files overwritten successfully!');
  } catch (error) {
    console.error('Failed to download logo:', error.message);
    process.exit(1);
  }
}

downloadLogo();
