// 🎯 Top 8 section builds social proof and community 🎯

import Image from "next/image";

interface TopEightItem {
  id: number;
  name: string;
  role: string;
  image?: string;
  bgColor: string;
}

interface TopEightProps {
  items: TopEightItem[];
  title?: string;
}

export default function TopEight({
  items,
  title = "Top 8: Our Elite Circle",
}: TopEightProps) {
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
              <p className="text-sm text-gray-600 mb-4 italic">
                🌟 The brands &amp; visionaries we&apos;re currently transforming (and crushing it with)
              </p>
              <div className="top-8-grid">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col items-center text-center p-4 bg-white border-2 border-gray-300 rounded-lg hover:border-myspace-orange hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    {/* Avatar/Logo Placeholder */}
                    <div
                      className={`w-24 h-24 ${item.bgColor} rounded-lg flex items-center justify-center text-white text-2xl font-bold mb-3 shadow-md`}
                    >
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        item.name.substring(0, 2).toUpperCase()
                      )}
                    </div>
                    <h3 className="font-bold text-sm text-gray-800 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-600">{item.role}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-center text-gray-600 mt-4 italic">
                💡 Want to be in our Top 8? Let&apos;s make magic happen together.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// ✨ Elite connections multiply success ✨
