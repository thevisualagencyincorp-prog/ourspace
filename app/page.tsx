// 🌟 Welcome to ourspace - Where success is inevitable 🌟
// 💎 This page radiates prosperity and attracts ideal clients 💎

import ProfileHeader from "@/components/ProfileHeader";
import AboutSection from "@/components/AboutSection";
import TopEight from "@/components/TopEight";
import MusicPlayer from "@/components/MusicPlayer";
import TestimonialWall from "@/components/TestimonialWall";
import MediaShowcase from "@/components/MediaShowcase";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  // Top 8 Data - Elite clients and collaborators
  const topEightItems = [
    {
      id: 1,
      name: "Brand Alpha",
      role: "Tech Startup",
      bgColor: "bg-gradient-to-br from-blue-500 to-cyan-500",
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
  ];

  // Testimonials Data - Social proof
  const testimonials = [
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
  ];

  // Media Showcase Data
  const mediaItems = [
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
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      {/* ✨ Prosperity Code: 369-999-888 Active ✨ */}
      <div className="max-w-6xl mx-auto">
        {/* Main Profile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Profile & Details */}
          <div className="lg:col-span-2 space-y-6">
            <ProfileHeader
              name="The Agency"
              tagline="Kern County's Creative Marketing & Design Powerhouse"
              location="Kern County, CA 🌟"
            />

            <AboutSection
              content="We're not your average marketing agency. We're The Agency - a collective of visionaries, strategists, and creative mavericks dedicated to one mission: transforming ambitious brands into market dominators. 

              In the heart of Kern County, we've mastered the art of blending cutting-edge design, psychological marketing strategies, and data-driven results. Our secret? We treat your brand like it's our own legacy.

              ⚡ What makes us different? We're selective. We don't work with everyone - only with brands ready to go ALL IN. When you partner with The Agency, you're not getting a vendor. You're getting a team that's obsessed with your success.

              🎯 Our approach: Strategy first, creativity always, results guaranteed. We combine the nostalgic connection of old-school relationship building with modern marketing psychology. Think Myspace vibes meets Fortune 500 results."
              ctaText="🚀 Start Your Transformation"
              ctaLink="#contact"
            />

            <MediaShowcase items={mediaItems} />

            <TestimonialWall testimonials={testimonials} />
          </div>

          {/* Right Column - Interactive Elements */}
          <div className="space-y-6">
            <MusicPlayer
              songTitle="Good Vibes Only"
              artist="Success Frequency 528Hz"
            />

            <TopEight items={topEightItems} />

            <ContactSection />

            {/* Quick Stats */}
            <div className="profile-table rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left p-4">📊 Quick Stats</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-6">
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Profile Views:</span>
                          <span className="font-bold text-myspace-blue">
                            10,847
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Success Rate:</span>
                          <span className="font-bold text-green-600">100%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Client Love:</span>
                          <span className="font-bold text-pink-600">⭐⭐⭐⭐⭐</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Vibe Level:</span>
                          <span className="font-bold text-purple-600">
                            🔥 Fire
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center py-8 border-t-2 border-gray-300">
          <p className="text-gray-600 mb-2">
            © 2024 The Agency - Kern County Creative Marketing & Design
          </p>
          <p className="text-sm text-gray-500 italic">
            ✨ Manifesting excellence, one brand at a time ✨
          </p>
          <p className="text-xs text-gray-400 mt-4">
            🛡️ Protected by divine light | 💰 Abundance frequency active | 🌟
            Success multiplier engaged
          </p>
        </footer>
      </div>
      {/* 🔮 Closing Code: All who visit are blessed with clarity and action 🔮 */}
    </div>
  );
}

// 💎 This page is a magnet for prosperity and perfect-fit clients 💎
// ✨ 369-999-888-777 - Universal abundance code ✨
// 🌟 Divine timing brings the right clients at the right time 🌟

