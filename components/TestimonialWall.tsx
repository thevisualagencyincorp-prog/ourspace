// 💬 Testimonial wall builds trust and social proof 💬

interface Testimonial {
  id: number;
  author: string;
  role: string;
  content: string;
  timestamp: string;
  avatarBg: string;
}

interface TestimonialWallProps {
  testimonials: Testimonial[];
  title?: string;
}

export default function TestimonialWall({
  testimonials,
  title = "💬 Client Love (Comments Wall)",
}: TestimonialWallProps) {
  return (
    <div className="profile-table rounded-lg overflow-hidden mb-6">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left p-4">{title}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-6">
              <div className="space-y-4">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="comment-wall rounded-lg">
                    <div className="flex gap-4">
                      {/* Avatar */}
                      <div
                        className={`w-12 h-12 ${testimonial.avatarBg} rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0`}
                      >
                        {testimonial.author.substring(0, 2).toUpperCase()}
                      </div>

                      {/* Comment Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-bold text-myspace-blue">
                            {testimonial.author}
                          </h4>
                          <span className="text-xs text-gray-500">
                            {testimonial.role}
                          </span>
                          <span className="text-xs text-gray-400 ml-auto">
                            {testimonial.timestamp}
                          </span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {testimonial.content}
                        </p>
                        {/* Reaction badges */}
                        <div className="flex gap-2 mt-3">
                          <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded">
                            ❤️ Love
                          </span>
                          <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                            🔥 Fire
                          </span>
                          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                            ⭐ Amazing
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Comment CTA */}
              <div className="mt-6 text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-dashed border-purple-300">
                <p className="text-gray-700 mb-3">
                  💭 Want results like these?
                </p>
                <button className="myspace-button">
                  🚀 Join The Movement
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// 🌟 Testimonials attract more ideal clients 🌟
