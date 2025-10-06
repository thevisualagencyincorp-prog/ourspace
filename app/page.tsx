// 🌟 Welcome to ourspace - Where success is inevitable 🌟
// 💎 This page radiates prosperity and attracts ideal clients 💎

import ProfileHeader from "@/components/ProfileHeader";
import AboutSection from "@/components/AboutSection";
import TopEight from "@/components/TopEight";
import MusicPlayer from "@/components/MusicPlayer";
import TestimonialWall from "@/components/TestimonialWall";
import MediaShowcase from "@/components/MediaShowcase";
import ContactSection from "@/components/ContactSection";
import { siteConfig } from "@/lib/config";

export default function Home() {
  return (
    <div className="min-h-screen py-8 px-4">
      {/* ✨ Prosperity Code: 369-999-888 Active ✨ */}
      <div className="max-w-6xl mx-auto">
        {/* Main Profile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Profile & Details */}
          <div className="lg:col-span-2 space-y-6">
            <ProfileHeader
              name={siteConfig.profile.name}
              tagline={siteConfig.profile.tagline}
              location={siteConfig.profile.location}
            />

            <AboutSection
              heading={siteConfig.about.heading}
              content={siteConfig.about.content}
              ctaText={siteConfig.about.ctaText}
              ctaLink={siteConfig.about.ctaLink}
            />

            <MediaShowcase 
              items={siteConfig.media.items}
              title={siteConfig.media.title}
            />

            <TestimonialWall 
              testimonials={siteConfig.testimonials.items}
              title={siteConfig.testimonials.title}
            />
          </div>

          {/* Right Column - Interactive Elements */}
          <div className="space-y-6">
            <MusicPlayer
              songTitle={siteConfig.music.songTitle}
              artist={siteConfig.music.artist}
            />

            <TopEight 
              items={siteConfig.topEight.items}
              title={siteConfig.topEight.title}
            />

            <ContactSection title={siteConfig.contact.title} />

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
                            {siteConfig.stats.profileViews}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Success Rate:</span>
                          <span className="font-bold text-green-600">
                            {siteConfig.stats.successRate}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Client Love:</span>
                          <span className="font-bold text-pink-600">
                            {siteConfig.stats.clientLove}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Vibe Level:</span>
                          <span className="font-bold text-purple-600">
                            {siteConfig.stats.vibeLevel}
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
            {siteConfig.footer.copyright}
          </p>
          <p className="text-sm text-gray-500 italic">
            {siteConfig.footer.tagline}
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

