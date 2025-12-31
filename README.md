# 💕 Romantic Proposal Website

A beautiful, interactive website designed to create a memorable marriage proposal experience. This customizable template helps you pop the question in a unique and modern way!

## ✨ Features

- **Interactive Design**: Engaging animations and smooth transitions
- **Fully Customizable**: Easily personalize text, colors, and images
- **Mobile Responsive**: Works beautifully on all devices
- **Easy Deployment**: Quick setup with GitHub Pages
- **No Backend Required**: Pure HTML, CSS, and JavaScript

## 🎯 Demo

Visit the live site to see it in action: `https://257q1a0304-arch.github.io/Proposal/`

## 🚀 Quick Start

### Prerequisites

- A GitHub account
- Basic knowledge of HTML/CSS (optional, but helpful)
- Your love and commitment! 💍

### Setup Instructions

1. **Fork or Clone this Repository**
   ```bash
   git clone https://github.com/257q1a0304-arch/Proposal.git
   cd Proposal
   ```

2. **Customize the Content** (See detailed instructions below)

3. **Deploy to GitHub Pages** (See deployment section below)

## 🎨 Customization Guide

### 1. Personal Information

Open `index.html` and modify the following sections:

#### Update Names
```html
<!-- Find and replace with your names -->
<h1>Will you marry me, [Partner's Name]?</h1>
<p>Love, [Your Name]</p>
```

#### Customize the Proposal Message
```html
<!-- Update the proposal text -->
<div class="proposal-text">
    <p>Your personalized message here...</p>
    <p>Express your feelings and memories...</p>
</div>
```

### 2. Colors and Styling

Edit `style.css` or `styles.css` to change the color scheme:

```css
:root {
    --primary-color: #ff69b4;     /* Main theme color */
    --secondary-color: #ff1493;   /* Accent color */
    --background-color: #fff5f7;  /* Background */
    --text-color: #333;           /* Text color */
}
```

### 3. Images

Replace images in the `images/` folder (or img/ folder):

- `background.jpg` - Main background image
- `couple-photo.jpg` - Photo of you together
- `ring.png` - Ring image (if applicable)

Update image references in `index.html`:
```html
<img src="images/your-image.jpg" alt="Description">
```

### 4. Add Music (Optional)

Add a romantic background song:

```html
<audio autoplay loop>
    <source src="music/romantic-song.mp3" type="audio/mpeg">
</audio>
```

**Note**: Ensure you have rights to use any music files.

### 5. Interactive Elements

Customize button responses in `script.js` or inline JavaScript:

```javascript
// Yes button
document.getElementById('yes-btn').addEventListener('click', function() {
    alert('🎉 She said YES! 💍');
    // Add confetti, redirect, or other effects
});

// No button (make it fun!)
document.getElementById('no-btn').addEventListener('click', function() {
    this.textContent = 'Are you sure? 🥺';
    // Make it move away, shrink, or get creative!
});
```

## 📱 Testing Locally

Before deploying, test your website locally:

1. **Simple Method**: Double-click `index.html` to open in your browser

2. **Using Python Server**:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Then visit: http://localhost:8000
   ```

3. **Using Node.js**:
   ```bash
   npx http-server
   ```

## 🌐 Deployment to GitHub Pages

### Method 1: GitHub Settings (Recommended)

1. **Push your changes to GitHub**:
   ```bash
   git add .
   git commit -m "Customize proposal website"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages** (in the left sidebar)
   - Under **Source**, select `main` branch
   - Select `/ (root)` folder
   - Click **Save**

3. **Access your site**:
   - Your site will be live at: `https://257q1a0304-arch.github.io/Proposal/`
   - It may take 2-5 minutes to deploy

### Method 2: Using GitHub Actions (Advanced)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

## 📋 File Structure

```
Proposal/
│
├── index.html          # Main HTML file
├── style.css           # Styling
├── script.js           # JavaScript interactions
├── README.md           # This file
│
├── images/            # Image assets
│   ├── background.jpg
│   └── couple-photo.jpg
│
├── music/             # Audio files (optional)
│   └── romantic-song.mp3
│
└── fonts/             # Custom fonts (optional)
    └── custom-font.ttf
```

## 💡 Tips for an Amazing Proposal

1. **Test Everything**: Make sure all links, images, and interactions work
2. **Mobile First**: Most people use phones - test on mobile devices
3. **Backup Plan**: Have the ring ready even if technology fails!
4. **Privacy**: Consider making the repository private before the proposal
5. **Timing**: Share the link at the perfect moment
6. **Capture the Moment**: Have someone ready to record/photograph the reaction

## 🔒 Privacy Considerations

### Make Repository Private

If you want to keep it secret until the big moment:

1. Go to **Settings** → **General**
2. Scroll to **Danger Zone**
3. Click **Change visibility** → **Make private**

**Note**: GitHub Pages on private repos requires GitHub Pro. Alternative: Deploy right before proposing!

## 🛠️ Troubleshooting

### Site Not Loading
- Check if GitHub Pages is enabled in Settings
- Ensure `index.html` is in the root directory
- Wait 5-10 minutes after initial deployment

### Images Not Showing
- Verify image paths are correct
- Check image file names (case-sensitive)
- Use relative paths: `./images/photo.jpg`

### CSS/JS Not Working
- Clear browser cache
- Check browser console for errors (F12)
- Verify file paths in HTML

## 🤝 Contributing

While this is a personal project, feel free to:
- Fork for your own proposal
- Suggest improvements via issues
- Share your success story! 💑

## 📄 License

This project is open source and available for personal use. Spread the love! ❤️

## 🎊 Credits

Created with love by **257q1a0304-arch**

Special thanks to:
- The love of your life (hopefully they say yes!)
- Everyone who believes in romance
- The open-source community

## 📞 Support

Questions or need help? Feel free to:
- Open an issue in this repository
- Reach out through GitHub

---

## 🎉 After She Says Yes!

Remember to:
1. ✅ Screenshot the moment
2. ✅ Update your relationship status
3. ✅ Start planning the wedding
4. ✅ Live happily ever after! 💍👰🤵

**Good luck, and may your love story continue beautifully!** 💕

---

*Made with ❤️ for creating unforgettable moments*
