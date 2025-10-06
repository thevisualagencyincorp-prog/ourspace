// 🖼️ Media showcase for portfolio and visual proof 🖼️

interface MediaItem {
  id: number;
  type: "image" | "video" | "embed";
  title: string;
  description?: string;
  thumbnail: string;
  link?: string;
}

interface MediaShowcaseProps {
  items: MediaItem[];
  title?: string;
}

export default function MediaShowcase({
  items,
  title = "🎨 Featured Work & Media",
}: MediaShowcaseProps) {
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="group relative bg-white border-2 border-gray-300 rounded-lg overflow-hidden hover:border-myspace-purple hover:shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    {/* Thumbnail */}
                    <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-4xl relative overflow-hidden">
                      {item.type === "image" && "🖼️"}
                      {item.type === "video" && "🎬"}
                      {item.type === "embed" && "🌐"}
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">
                          View Project →
                        </span>
                      </div>
                    </div>

                    {/* Media Info */}
                    <div className="p-3">
                      <h4 className="font-bold text-sm text-gray-800 mb-1">
                        {item.title}
                      </h4>
                      {item.description && (
                        <p className="text-xs text-gray-600 line-clamp-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* View More CTA */}
              <div className="mt-6 text-center">
                <a
                  href="#portfolio"
                  className="text-myspace-blue hover:text-myspace-purple font-bold text-sm underline"
                >
                  ➡️ View Full Portfolio (50+ Projects)
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// ✨ Visual proof converts visitors into clients ✨
