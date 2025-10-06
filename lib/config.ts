// 🎨 Content Configuration for Easy Customization
// Edit this file to change site content without modifying components

export const siteConfig = {
  // Profile Information
  profile: {
    name: "The Agency",
    tagline: "Kern County's Creative Marketing & Design Powerhouse",
    location: "Kern County, CA 🌟",
    status: "Transforming brands into market leaders",
    mood: "Creative & Ready to Dominate",
  },

  // About Section
  about: {
    heading: "About The Agency",
    content: `We're not your average marketing agency. We're The Agency - a collective of visionaries, strategists, and creative mavericks dedicated to one mission: transforming ambitious brands into market dominators. 

In the heart of Kern County, we've mastered the art of blending cutting-edge design, psychological marketing strategies, and data-driven results. Our secret? We treat your brand like it's our own legacy.

⚡ What makes us different? We're selective. We don't work with everyone - only with brands ready to go ALL IN. When you partner with The Agency, you're not getting a vendor. You're getting a team that's obsessed with your success.

🎯 Our approach: Strategy first, creativity always, results guaranteed. We combine the nostalgic connection of old-school relationship building with modern marketing psychology. Think Myspace vibes meets Fortune 500 results.`,
    ctaText: "🚀 Start Your Transformation",
    ctaLink: "#contact",
  },

  // Music Player
  music: {
    songTitle: "Good Vibes Only",
    artist: "Success Frequency 528Hz",
    // Add audioUrl when you have an actual audio file
  },

  // Top 8 - Clients/Collaborators/Projects
  topEight: {
    title: "Top 8: Our Elite Circle",
    items: [
      {
        id: 1,
        name: "Brand Alpha",
        role: "Tech Startup",
        bgColor: "bg-gradient-to-br from-blue-500 to-cyan-500",
        // image: "/path/to/logo.png" // Optional: Add client logo
      },
      {
        id: 2,
        name: "Retail Pro",
        role: "E-commerce",
        bgColor: "bg-gradient-to-br from-purple-500 to-pink-500",
      },
      {
        id: 3,
        name: "Local Hero",
        role: "Restaurant",
        bgColor: "bg-gradient-to-br from-orange-500 to-red-500",
      },
      {
        id: 4,
        name: "Med Group",
        role: "Healthcare",
        bgColor: "bg-gradient-to-br from-green-500 to-teal-500",
      },
      {
        id: 5,
        name: "Edu First",
        role: "Education",
        bgColor: "bg-gradient-to-br from-yellow-500 to-orange-500",
      },
      {
        id: 6,
        name: "Real Estate",
        role: "Property",
        bgColor: "bg-gradient-to-br from-indigo-500 to-purple-500",
      },
      {
        id: 7,
        name: "Fitness Co",
        role: "Wellness",
        bgColor: "bg-gradient-to-br from-pink-500 to-rose-500",
      },
      {
        id: 8,
        name: "Law Firm",
        role: "Legal",
        bgColor: "bg-gradient-to-br from-gray-600 to-gray-800",
      },
    ],
  },

  // Testimonials/Comments Wall
  testimonials: {
    title: "💬 Client Love (Comments Wall)",
    items: [
      {
        id: 1,
        author: "Sarah Johnson",
        role: "CEO, Brand Alpha",
        content:
          "The Agency transformed our entire brand identity. Sales increased 300% in just 3 months. Their creative vision is unmatched. Best investment we've ever made! 🚀",
        timestamp: "2 days ago",
        avatarBg: "bg-gradient-to-br from-blue-400 to-purple-500",
      },
      {
        id: 2,
        author: "Mike Rodriguez",
        role: "Founder, Retail Pro",
        content:
          "Working with The Agency felt like having a secret weapon. They just GET IT. Our e-commerce site went from okay to absolutely crushing it. Can't recommend them enough!",
        timestamp: "1 week ago",
        avatarBg: "bg-gradient-to-br from-orange-400 to-pink-500",
      },
      {
        id: 3,
        author: "Jennifer Lee",
        role: "Owner, Local Hero Restaurant",
        content:
          "These folks are the real deal. Creative, strategic, and they actually care about results. Our restaurant is now THE spot in town. Thank you, Agency! 💪",
        timestamp: "2 weeks ago",
        avatarBg: "bg-gradient-to-br from-green-400 to-teal-500",
      },
      {
        id: 4,
        author: "David Martinez",
        role: "CMO, Med Group",
        content:
          "Finally, a marketing agency that delivers on their promises. Professional, innovative, and the results speak for themselves. We're now the #1 choice in our market! ⭐",
        timestamp: "3 weeks ago",
        avatarBg: "bg-gradient-to-br from-yellow-400 to-orange-500",
      },
    ],
  },

  // Media Showcase
  media: {
    title: "🎨 Featured Work & Media",
    items: [
      {
        id: 1,
        type: "image" as const,
        title: "Brand Identity Redesign",
        description: "Complete visual transformation for tech startup",
        thumbnail: "",
      },
      {
        id: 2,
        type: "video" as const,
        title: "Launch Campaign Video",
        description: "Viral campaign that reached 500K+ views",
        thumbnail: "",
      },
      {
        id: 3,
        type: "image" as const,
        title: "E-commerce Website",
        description: "Conversion-optimized design that sells",
        thumbnail: "",
      },
      {
        id: 4,
        type: "embed" as const,
        title: "Social Media Strategy",
        description: "10x follower growth in 6 months",
        thumbnail: "",
      },
      {
        id: 5,
        type: "image" as const,
        title: "Print & Digital Assets",
        description: "Cohesive brand across all touchpoints",
        thumbnail: "",
      },
      {
        id: 6,
        type: "video" as const,
        title: "Client Success Stories",
        description: "Real results from real businesses",
        thumbnail: "",
      },
    ],
  },

  // Contact Section
  contact: {
    title: "🔥 Ready to Level Up?",
    limitedSpotsCount: 3,
    currentMonth: new Date().toLocaleString("default", { month: "long" }),
  },

  // Quick Stats
  stats: {
    profileViews: "10,847",
    successRate: "100%",
    clientLove: "⭐⭐⭐⭐⭐",
    vibeLevel: "🔥 Fire",
  },

  // Footer
  footer: {
    copyright: "© 2024 The Agency - Kern County Creative Marketing & Design",
    tagline: "✨ Manifesting excellence, one brand at a time ✨",
  },
};

// ✨ This configuration file holds the keys to easy customization ✨
