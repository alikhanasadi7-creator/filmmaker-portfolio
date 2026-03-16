# YouTube Video Integration

## Summary

The YouTube video from https://youtu.be/lm95sT7fyhQ?si=JwR4oK_JuZKo_b9m has been successfully integrated into the Work portfolio page.

## Changes Made

### 1. Updated Work Page (`client/src/pages/Work.tsx`)

Added a new project entry with YouTube video support:

```typescript
// YouTube video thumbnail (extracted from video ID)
const YOUTUBE_THUMBNAIL = "https://img.youtube.com/vi/lm95sT7fyhQ/maxresdefault.jpg";

// Added to projects array:
{
  id: 7,
  title: "Featured Work",
  category: "Video",
  year: "2024",
  duration: "Full Length",
  description: "Watch my latest cinematic work and creative journey.",
  image: YOUTUBE_THUMBNAIL,
  tag: "film",
  videoId: "lm95sT7fyhQ",
}
```

### 2. Project Card Enhancement

Updated the project card rendering to include a YouTube play button overlay for video projects:

```jsx
{project.videoId && (
  <a
    href={`https://www.youtube.com/watch?v=${project.videoId}`}
    target="_blank"
    rel="noopener noreferrer"
    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors"
  >
    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors" style={{boxShadow: "0 4px 16px rgba(0,0,0,0.3)"}}>
      <svg className="w-6 h-6 text-red-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  </a>
)}
```

## Features

- **YouTube Thumbnail**: Automatically fetches the video thumbnail from YouTube using the video ID
- **Play Button Overlay**: Displays a prominent white play button with YouTube red color
- **Hover Effects**: Darkens the overlay on hover for better interactivity
- **Direct Link**: Clicking the card opens the YouTube video in a new tab
- **Responsive Design**: Works seamlessly on all screen sizes
- **Filter Integration**: The video appears in the "All" and "Film" filter categories

## How It Works

1. The YouTube video ID (`lm95sT7fyhQ`) is extracted from the full URL
2. YouTube's thumbnail API provides the video preview image
3. When users hover over the card, the overlay darkens
4. Clicking the play button opens the video on YouTube in a new tab
5. The video is fully editable - you can change the video ID, title, description, and year

## To Add More YouTube Videos

Simply add new entries to the `projects` array in `Work.tsx` with:

```typescript
{
  id: 8,
  title: "Your Video Title",
  category: "Video",
  year: "2024",
  duration: "Full Length",
  description: "Your description here",
  image: "https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg",
  tag: "film",
  videoId: "YOUR_VIDEO_ID",
}
```

Replace `YOUR_VIDEO_ID` with the actual YouTube video ID from the URL.

## Styling

The YouTube play button uses:
- **Background**: White with 90% opacity
- **Icon**: YouTube red (#EF4444)
- **Size**: 64px diameter circle
- **Shadow**: Subtle drop shadow for depth
- **Hover**: Transitions to full white opacity

## Browser Compatibility

Works on all modern browsers that support:
- CSS Grid
- Flexbox
- CSS Transitions
- SVG rendering
