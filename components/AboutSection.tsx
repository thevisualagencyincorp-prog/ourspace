// 🌟 About section magnetizes ideal clients 🌟

interface AboutSectionProps {
  heading?: string;
  content: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function AboutSection({
  heading = "About The Agency",
  content,
  ctaText = "🚀 Work With Us",
  ctaLink = "#contact",
}: AboutSectionProps) {
  return (
    <div className="profile-table rounded-lg overflow-hidden mb-6">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left p-4">{heading}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-6">
              <div className="prose max-w-none">
                <p className="text-gray-800 leading-relaxed mb-4 text-base">
                  {content}
                </p>
                
                {/* Social Proof Indicators */}
                <div className="flex flex-wrap gap-4 my-6">
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-lg">
                    <span className="font-bold text-purple-700">⭐ 5.0 Rating</span>
                  </div>
                  <div className="bg-gradient-to-r from-orange-100 to-yellow-100 px-4 py-2 rounded-lg">
                    <span className="font-bold text-orange-700">🏆 50+ Projects</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-cyan-100 px-4 py-2 rounded-lg">
                    <span className="font-bold text-blue-700">💎 Limited Availability</span>
                  </div>
                </div>

                {/* CTA Button */}
                {ctaText && (
                  <div className="mt-6">
                    <a
                      href={ctaLink}
                      className="myspace-button inline-block"
                    >
                      {ctaText}
                    </a>
                    <p className="text-xs text-gray-600 mt-2 italic">
                      ⚡ Only 3 spots available this month - Exclusive partnerships only
                    </p>
                  </div>
                )}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// 💰 Abundance flows to this component 💰
