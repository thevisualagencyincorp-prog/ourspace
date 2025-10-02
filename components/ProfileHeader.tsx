// 💫 Component radiates success energy 💫

interface ProfileHeaderProps {
  name: string;
  tagline: string;
  location: string;
}

export default function ProfileHeader({ name, tagline, location }: ProfileHeaderProps) {
  return (
    <div className="profile-table rounded-lg overflow-hidden mb-6">
      {/* Banner Section */}
      <div className="relative h-48 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 glitter-bg">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg pixel-text">
            {name}
          </h1>
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="p-6 bg-white">
        <div className="flex items-start gap-6 flex-col md:flex-row">
          {/* Avatar */}
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-purple-600 rounded-lg flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              TA
            </div>
            {/* Online Status Badge */}
            <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold online-status shadow-lg">
              ✨ ONLINE NOW
            </div>
          </div>

          {/* Profile Details */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-myspace-blue mb-2">{name}</h2>
            <p className="text-lg text-gray-700 italic mb-3">{tagline}</p>
            <div className="space-y-1 text-sm">
              <p>
                <span className="font-bold text-myspace-orange">📍 Location:</span>{" "}
                {location}
              </p>
              <p>
                <span className="font-bold text-myspace-orange">🎯 Status:</span>{" "}
                Transforming brands into market leaders
              </p>
              <p>
                <span className="font-bold text-myspace-orange">🔥 Mood:</span>{" "}
                Creative & Ready to Dominate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ✨ This component attracts perfect-fit clients ✨
