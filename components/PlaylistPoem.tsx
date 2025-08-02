"use client"

import { useState } from 'react'

interface Track {
  order: number;
  title: string;
  artist: string;
  album: string;
  apple: string;
  tidal: string;
  spotify: string;
}

export default function PlaylistPoem() {
  const [activeTab, setActiveTab] = useState('embed')
  
  const tracks: Track[] = [
    { order: 1, title: "Own Your Own", artist: "Yazmin Lacey", album: "Morning Matters", apple: "https://music.apple.com/us/search?term=Own%20Your%20Own%20Yazmin%20Lacey", tidal: "https://listen.tidal.com/search?q=Own%20Your%20Own%20Yazmin%20Lacey", spotify: "https://open.spotify.com/track/3v7IwjkgOvcdoT0Odgrwzc" },
    { order: 2, title: "Love", artist: "OK Go", album: "And the Adjacent Possible", apple: "https://music.apple.com/us/search?term=Love%20OK%20Go", tidal: "https://listen.tidal.com/search?q=Love%20OK%20Go", spotify: "https://open.spotify.com/track/6Fn3HQPcm2DtgIfEIPeKys" },
    { order: 3, title: "Money", artist: "LEISURE", album: "Twister", apple: "https://music.apple.com/us/search?term=Money%20LEISURE", tidal: "https://listen.tidal.com/search?q=Money%20LEISURE", spotify: "https://open.spotify.com/track/1f5eDiILUNeftOB26e6LB1" },
    { order: 4, title: "Family", artist: "Jordan Rakei", album: "What We Call Life", apple: "https://music.apple.com/us/search?term=Family%20Jordan%20Rakei", tidal: "https://listen.tidal.com/search?q=Family%20Jordan%20Rakei", spotify: "https://open.spotify.com/track/6OnEsU4yuFEIuuK1pzZ0z5" },
    { order: 5, title: "Glasshouses", artist: "Maribou State", album: "Kingdoms In Colour", apple: "https://music.apple.com/us/search?term=Glasshouses%20Maribou%20State", tidal: "https://listen.tidal.com/search?q=Glasshouses%20Maribou%20State", spotify: "https://open.spotify.com/track/7isVqPzG3R5ni6IM4YG0sv" },
    { order: 6, title: "Gold", artist: "Chet Faker", album: "Built on Glass", apple: "https://music.apple.com/us/search?term=Gold%20Chet%20Faker", tidal: "https://listen.tidal.com/search?q=Gold%20Chet%20Faker", spotify: "https://open.spotify.com/track/1Ll09EiN5ffeFl1xNZB2Uk" },
    { order: 7, title: "Into Nirvana", artist: "Maverick Sabre", album: "When I Wake Up", apple: "https://music.apple.com/us/search?term=Into%20Nirvana%20Maverick%20Sabre", tidal: "https://listen.tidal.com/search?q=Into%20Nirvana%20Maverick%20Sabre", spotify: "https://open.spotify.com/track/1De7ddr6NfqajOQLu5uwKG" },
    { order: 8, title: "Answer", artist: "Phantogram", album: "Three", apple: "https://music.apple.com/us/search?term=Answer%20Phantogram", tidal: "https://listen.tidal.com/search?q=Answer%20Phantogram", spotify: "https://open.spotify.com/track/09eSdS5RTgyodJt3krr5AC" },
    { order: 9, title: "Music on My Teeth", artist: "DJ Koze, José González", album: "Knock Knock", apple: "https://music.apple.com/us/search?term=Music%20on%20My%20Teeth%20DJ%20Koze%2C%20Jos%C3%A9%20Gonz%C3%A1lez", tidal: "https://listen.tidal.com/search?q=Music%20on%20My%20Teeth%20DJ%20Koze%2C%20Jos%C3%A9%20Gonz%C3%A1lez", spotify: "https://open.spotify.com/track/1O4rMGiGy7lbcqXOG91Xbv" },
    { order: 10, title: "Golden", artist: "Jill Scott", album: "Beautifully Human: Words and Sounds Vol. 2", apple: "https://music.apple.com/us/search?term=Golden%20Jill%20Scott", tidal: "https://listen.tidal.com/search?q=Golden%20Jill%20Scott", spotify: "https://open.spotify.com/track/0bHs3ly4Bv5BlzE3KrePfX" },
    { order: 11, title: "Weak", artist: "Vintage Culture, Maverick Sabre, Tom Breu", album: "Promised Land", apple: "https://music.apple.com/us/search?term=Weak%20Vintage%20Culture%2C%20Maverick%20Sabre%2C%20Tom%20Breu", tidal: "https://listen.tidal.com/search?q=Weak%20Vintage%20Culture%2C%20Maverick%20Sabre%2C%20Tom%20Breu", spotify: "https://open.spotify.com/track/37uMiu52DbSIx3SJ3sGDow" },
    { order: 12, title: "Somedays", artist: "Sonny Fodera, Jazzy, D.O.D", album: "Somedays", apple: "https://music.apple.com/us/search?term=Somedays%20Sonny%20Fodera%2C%20Jazzy%2C%20D.O.D", tidal: "https://listen.tidal.com/search?q=Somedays%20Sonny%20Fodera%2C%20Jazzy%2C%20D.O.D", spotify: "https://open.spotify.com/track/3wo3d0I5H8KjkwGvnz8WbB" },
    { order: 13, title: "Cold Heart - PNAU Remix", artist: "Elton John, Dua Lipa, PNAU", album: "The Lockdown Sessions", apple: "https://music.apple.com/us/search?term=Cold%20Heart%20-%20PNAU%20Remix%20Elton%20John%2C%20Dua%20Lipa%2C%20PNAU", tidal: "https://listen.tidal.com/search?q=Cold%20Heart%20-%20PNAU%20Remix%20Elton%20John%2C%20Dua%20Lipa%2C%20PNAU", spotify: "https://open.spotify.com/track/7rglLriMNBPAyuJOMGwi39" },
    { order: 14, title: "Warm Foothills", artist: "alt-J", album: "This Is All Yours", apple: "https://music.apple.com/us/search?term=Warm%20Foothills%20alt-J", tidal: "https://listen.tidal.com/search?q=Warm%20Foothills%20alt-J", spotify: "https://open.spotify.com/track/1YUcTZ0ehoHY6G6Prhcbj0" },
    { order: 15, title: "Shady Lane", artist: "Pavement", album: "Brighten the Corners", apple: "https://music.apple.com/us/search?term=Shady%20Lane%20Pavement", tidal: "https://listen.tidal.com/search?q=Shady%20Lane%20Pavement", spotify: "https://open.spotify.com/track/0JZAGUbzkwWSnoInuWoBgd" },
    { order: 16, title: "The Warmth Of The Sun - Remastered", artist: "The Beach Boys", album: "Shut Down, Vol. 2 (Remastered)", apple: "https://music.apple.com/us/search?term=The%20Warmth%20Of%20The%20Sun%20-%20Remastered%20The%20Beach%20Boys", tidal: "https://listen.tidal.com/search?q=The%20Warmth%20Of%20The%20Sun%20-%20Remastered%20The%20Beach%20Boys", spotify: "https://open.spotify.com/track/1HFtTn1sIJhkV6mtY8ax2Z" },
    { order: 17, title: "Shady Grove", artist: "Doc Watson", album: "The Essential Doc Watson", apple: "https://music.apple.com/us/search?term=Shady%20Grove%20Doc%20Watson", tidal: "https://listen.tidal.com/search?q=Shady%20Grove%20Doc%20Watson", spotify: "https://open.spotify.com/track/6sYdf0d7IaX848f5UChyij" },
    { order: 18, title: "Come On Home", artist: "Fred again.., Brian Eno", album: "Secret Life", apple: "https://music.apple.com/us/search?term=Come%20On%20Home%20Fred%20again..%2C%20Brian%20Eno", tidal: "https://listen.tidal.com/search?q=Come%20On%20Home%20Fred%20again..%2C%20Brian%20Eno", spotify: "https://open.spotify.com/track/6MyN49pk1GgnsH9owzqVLx" }
  ];

  return (
          <div className="p-8 max-w-5xl mx-auto font-sans">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-gray-900">Family</h1>
          <p className="text-xl text-gray-600 italic">for your mom</p>
        </div>

        {/* Tabbed Playlist Player */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {/* Tab Headers */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('embed')}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'embed' 
                    ? 'bg-green-50 text-green-700 border-b-2 border-green-500' 
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Embedded Player
              </button>
              <button
                onClick={() => setActiveTab('links')}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'links' 
                    ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-500' 
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
                Get the Link
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'embed' && (
                <div>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">🎵 Family Playlist</h3>
                    <p className="text-gray-600 text-sm">18 tracks • 1 hour 12 minutes</p>
                  </div>
                  
                  {/* Spotify Embed */}
                  <div className="relative">
                    <iframe
                      style={{borderRadius: '12px'}}
                      src="https://open.spotify.com/embed/playlist/3lti380WJdiG7OKrZHGseo?utm_source=generator"
                      width="100%"
                      height="352"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="w-full"
                    />
                    
                    {/* Fallback overlay if embed fails */}
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-90 rounded-lg flex items-center justify-center hidden" id="embed-fallback">
                      <div className="text-center text-white p-6">
                        <svg className="w-12 h-12 mx-auto mb-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <p className="text-lg font-medium mb-2">Player Unavailable</p>
                        <p className="text-gray-300 mb-4">Spotify's embed service is temporarily unavailable</p>
                        <button
                          onClick={() => setActiveTab('links')}
                          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                        >
                          Get Direct Links Instead
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'links' && (
                <div>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">🎵 Family Playlist</h3>
                    <p className="text-gray-600 text-sm mb-4">18 tracks • 1 hour 12 minutes</p>
                    <p className="text-gray-500 text-sm">Click below to open the playlist in your preferred streaming service:</p>
                  </div>
                  
                  <div className="space-y-3">
                    <a
                      href="https://open.spotify.com/playlist/3lti380WJdiG7OKrZHGseo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <div className="flex items-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-3">
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                        </svg>
                        <span className="font-medium">Open in Spotify</span>
                      </div>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6l6 6-6 6"/>
                      </svg>
                    </a>
                    
                    <a
                      href="https://music.apple.com/us/playlist/family-for-your-mom/pl.u-8aAVZqjH8bJx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full p-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <div className="flex items-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-3">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                        <span className="font-medium">Open in Apple Music</span>
                      </div>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6l6 6-6 6"/>
                      </svg>
                    </a>
                    
                    <a
                      href="https://listen.tidal.com/playlist/family-for-your-mom"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full p-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex items-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-3">
                          <path d="M12.012 3.992L8.008 7.996 12.012 12l4.004-4.004-4.004-4.004zm0 8.016L8.008 16.012 12.012 20.016l4.004-4.004-4.004-4.004zM4.004 7.996L0 12l4.004 4.004L8.008 12 4.004 7.996zM20.016 7.996L16.012 12l4.004 4.004L24.02 12l-4.004-4.004z"/>
                        </svg>
                        <span className="font-medium">Open in Tidal</span>
                      </div>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6l6 6-6 6"/>
                      </svg>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      {/* Track Table */}
      <table className="w-full border border-gray-300 rounded-lg overflow-hidden text-sm sm:text-base">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">#</th>
            <th className="border p-2 text-left">Title</th>
            <th className="border p-2 text-left">Album</th>
            <th className="border p-2 text-left">Artist</th>
            <th className="border p-2 text-left">Links</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((track) => (
            <tr key={track.order} className="odd:bg-gray-50">
              <td className="border p-2 text-center">{track.order}</td>
              <td className="border p-2 font-medium">{track.title}</td>
              <td className="border p-2 italic">{track.album}</td>
              <td className="border p-2">{track.artist}</td>
              <td className="border p-2">
                <div className="flex items-center gap-3">
                  <a
                    href={track.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                    title="Listen on Spotify"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#1DB954">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </a>
                  <a
                    href={track.apple}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                    title="Listen on Apple Music"
                  >
                    {track.order % 2 === 1 ? (
                      // Odd tracks: Apple Music app icon
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#FA243C">
                        <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.15-.04-.003-.083-.01-.124-.013H5.988c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208c-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18-.013.43-.024.86-.024 1.29v9.884c0 .373.014.746.024 1.12.01.394.044.786.1 1.178.071.483.171.96.363 1.408.565 1.328 1.529 2.25 2.865 2.78.703.278 1.446.358 2.193.4.152.01.303.017.455.027h11.028c.152-.01.303-.017.455-.027.747-.042 1.49-.122 2.193-.4 1.336-.53 2.3-1.452 2.865-2.78.192-.448.292-.925.363-1.408.056-.392.09-.784.1-1.178.01-.374.024-.747.024-1.12V6.124zm-2.39 10.515c-.005.264-.037.528-.08.79-.06.368-.14.73-.28 1.068-.24.584-.615 1.077-1.15 1.395-.353.21-.748.325-1.155.39-.24.04-.48.06-.723.07-.168.007-.336.012-.505.015H6.29c-.169-.003-.337-.008-.505-.015-.243-.01-.483-.03-.723-.07-.407-.065-.802-.18-1.155-.39-.535-.318-.91-.811-1.15-1.395-.14-.338-.22-.7-.28-1.068-.043-.262-.075-.526-.08-.79-.007-.211-.014-.423-.019-.634V7.21c.005-.211.012-.423.019-.634.005-.264.037-.528.08-.79.06-.368.14-.73.28-1.068.24-.584.615-1.077 1.15-1.395.353-.21.748-.325 1.155-.39.24-.04.48-.06.723-.07.168-.007.336-.012.505-.015h11.42c.169.003.337.008.505.015.243.01.483.03.723.07.407.065.802.18 1.155.39.535.318.91.811 1.15 1.395.14.338.22.7.28 1.068.043.262.075.526.08.79.007.211.014.423.019.634v9.472c-.005.211-.012.423-.019.634z"/>
                        <path d="M18.758 9.758c-.867-.952-2.15-1.557-3.608-1.557-1.671 0-3.133.78-4.086 1.996-.953-1.216-2.415-1.996-4.086-1.996-2.86 0-5.178 2.317-5.178 5.178s2.318 5.178 5.178 5.178c1.671 0 3.133-.78 4.086-1.996.953 1.216 2.415 1.996 4.086 1.996 2.86 0 5.178-2.317 5.178-5.178 0-1.458-.605-2.741-1.57-3.621zm-7.694 6.621c-.952 0-1.724-.772-1.724-1.724s.772-1.724 1.724-1.724 1.724.772 1.724 1.724-.772 1.724-1.724 1.724z"/>
                      </svg>
                    ) : (
                      // Even tracks: Classic Apple logo
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#000000">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                    )}
                  </a>
                  <a
                    href={track.tidal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                    title="Listen on Tidal"
                  >
                    {(track.order - 1) % 3 === 0 ? (
                      // Every 3rd track starting with #1: T-shaped icon without bottom diamond (bigger)
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="#000000">
                        <path d="M5 8L7.5 5.5L10 8L7.5 10.5L5 8z"/>
                        <path d="M9.5 8L12 5.5L14.5 8L12 10.5L9.5 8z"/>
                        <path d="M14 8L16.5 5.5L19 8L16.5 10.5L14 8z"/>
                        <path d="M9.5 13L12 10.5L14.5 13L12 15.5L9.5 13z"/>
                      </svg>
                    ) : track.order % 3 === 0 ? (
                      // Every 3rd track (3, 6, 9, etc.): Full T-shaped Tidal icon
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#000000">
                        <path d="M6 8L8 6L10 8L8 10L6 8z"/>
                        <path d="M10 8L12 6L14 8L12 10L10 8z"/>
                        <path d="M14 8L16 6L18 8L16 10L14 8z"/>
                        <path d="M10 12L12 10L14 12L12 14L10 12z"/>
                        <path d="M10 16L12 14L14 16L12 18L10 16z"/>
                      </svg>
                    ) : (
                      // All other tracks: Circular diamond Tidal icon
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#000000">
                        <path d="M12.012 3.992L8.008 7.996 12.012 12l4.004-4.004-4.004-4.004zm0 8.016L8.008 16.012 12.012 20.016l4.004-4.004-4.004-4.004zM4.004 7.996L0 12l4.004 4.004L8.008 12 4.004 7.996zM20.016 7.996L16.012 12l4.004 4.004L24.02 12l-4.004-4.004z"/>
                      </svg>
                    )}
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* The Poem */}
      <section className="mt-12 prose prose-lg mx-auto">
        <h2>The Poem</h2>
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200">
          <div className="text-center space-y-4 text-lg leading-relaxed">
            <p className="text-gray-600 italic">Own Your Own</p>
            <p className="text-2xl font-bold text-gray-800">Love.</p>
            <p className="text-gray-600 italic">Money, Family.</p>
            <p className="text-xl text-gray-700">Glasshouses—Gold.</p>
            
            <div className="my-6">
              <p className="text-lg text-gray-700">Into Nirvana? Answer.</p>
              <p className="text-lg text-gray-700">Music on My Teeth—Golden.</p>
              <p className="text-lg text-gray-700">Weak Somedays.</p>
            </div>
            
            <p className="text-xl font-semibold text-gray-800">Cold Heart; Warm Foothills.</p>
            <p className="text-lg text-gray-700">Shady Lane; <span className="italic">The Warmth Of The Sun</span></p>
            
            <div className="my-6">
              <p className="text-lg text-gray-700">Shady Grove.</p>
              <p className="text-2xl font-bold text-gray-800">Come On Home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon: Blockchain Comments */}
      <section className="mt-12 max-w-4xl mx-auto">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">🔗 Blockchain Integration Coming Soon</h3>
          <p className="text-blue-700">Connect your Aptos wallet to comment on this playlist poem on-chain!</p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="mt-12 prose prose-lg mx-auto">
        <h2>About This Poem</h2>
        <p>
          From dusty‑jazz soul openers to sun‑kissed folk closes, this playlist moves like a slow‑rolling river of self‑discovery. You'll glide through neo‑soul affirmation (Own Your Own), quirky art‑pop fireworks (Love), psychedelic lounge funk (Money), and beyond—landing finally in Fred again.. & Brian Eno's ambient welcome‑home.
        </p>
        <p>
          Each track is sequenced for contrast: material concerns to spiritual release, dusk grooves to dawn serenity. Expect rubbery bass lines, shimmering synths, and warm acoustic valleys—a continuous arc that lifts, dips, and coasts until it settles gently, like morning light spilling into the room.
        </p>

        {/* Expandable Track-by-Track Journey */}
        <details className="mt-8 group">
          <summary className="cursor-pointer list-none p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-800">Track-by-Track Journey</span>
              <svg className="w-5 h-5 text-gray-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </summary>
          
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Opening: Self‑Command & Connection</h3>
              <p>
                <strong>1. "Own Your Own" – Yazmin Lacey</strong> ushers you in with smoky neo‑soul and a mantra of self‑possession; COLORS Studio's live take highlights its languid, sunrise warmth. <a href="https://www.youtube.com/watch?v=ZHTA-c4VX10" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[YouTube]</a>
              </p>
              <p>
                <strong>2. "Love" – OK Go</strong> flips art‑pop into mirror‑maze spectacle; the band's 29‑robot video signals upbeat curiosity and precision. <a href="https://people.com/ok-go-music-video-love-most-complicated-exclusive-11714044" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[People.com]</a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Earthly Matters</h3>
              <p>
                <strong>3. "Money" – LEISURE</strong> drapes slick bass over anti‑materialist lyrics, reminding you that cash feels hollow without joy. <a href="https://www.songtell.com/leisure/money" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[Songtell]</a>
              </p>
              <p>
                <strong>4. "Family" – Jordan Rakei</strong> slows the pulse with contemplative keys, sifting loyalty and loss in velvet baritone. <a href="https://www.songtell.com/jordan-rakei/family" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[Songtell]</a>
              </p>
              <p>
                <strong>5. "Glasshouses" – Maribou State</strong> layers broken‑beat electronica and sampled whispers, evoking fragile transparency. <a href="https://www.songtell.com/maribou-state/glasshouses" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[Songtell]</a>
              </p>
              <p>
                <strong>6. "Gold" – Chet Faker</strong> slides in on a midnight‑skate groove—smooth, confident, undeniably stylish. <a href="https://en.wikipedia.org/wiki/Gold_%28Chet_Faker_song%29" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[Wikipedia]</a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Mid‑Journey Kaleidoscope</h3>
              <p>
                <strong>7. "Into Nirvana" – Maverick Sabre</strong> merges reggae‑tinted beats with soul testimony, opening a door to transcendence. <a href="https://www.youtube.com/watch?v=1HFsBv54wio" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[YouTube]</a>
              </p>
              <p>
                <strong>8. "Answer" – Phantogram</strong> pulses with trip‑hop tension, craving clarity inside echoed guitars. <a href="https://www.songtell.com/phantogram/answer" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[Songtell]</a>
              </p>
              <p>
                <strong>9. "Music on My Teeth" – DJ Koze & José González</strong> flows like dream‑logic house; critics call Knock Knock "lush, melodic, and wistful." <a href="https://pitchfork.com/reviews/albums/dj-koze-knock-knock" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[Pitchfork]</a> <a href="https://www.songtell.com/dj-koze-ft-jos-gonz-lez/music-on-my-teeth" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[Songtell]</a>
              </p>
              <p>
                <strong>10. "Golden" – Jill Scott</strong> bursts in, a radiant self‑empowerment anthem—"live your life like it's golden." <a href="https://www.songmeaningsandfacts.com/golden-a-timeless-anthem-of-self-empowerment/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[Song Meanings]</a> <a href="https://en.wikipedia.org/wiki/Golden_%28Jill_Scott_song%29" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[Wikipedia]</a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Peaks & Valleys</h3>
              <p>
                <strong>11. "Weak" – Vintage Culture & Maverick Sabre</strong> lifts the floor with festival‑ready deep house before surrendering to vulnerability. <a href="https://www.youtube.com/watch?v=1HFsBv54wio" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[YouTube]</a>
              </p>
              <p>
                <strong>12. "Somedays" – Sonny Fodera, Jazzy, D.O.D</strong> keeps the four‑on‑the‑floor rolling—a hopeful bridge to brighter mornings. <a href="https://www.youtube.com/watch?v=xnoTAkThZq4" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[YouTube]</a>
              </p>
              <p>
                <strong>13. "Cold Heart – PNAU Remix" – Elton John & Dua Lipa</strong> fuses disco nostalgia and modern pop, a chart‑dominating warm‑up. <a href="https://www.theaustralian.com.au/arts/music/nothing-hyperbolic-about-it-pnaus-success-in-the-wake-of-cold-heart-remix/news-story/93527ea12e60b34e942f1d15275f3733" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[The Australian]</a> <a href="https://people.com/dua-lipa-debuting-cold-heart-elton-john-royal-albert-hall-8762932" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[People.com]</a>
              </p>
              <p>
                <strong>14. "Warm Foothills" – alt‑J</strong> returns you to acoustic intimacy, breath samples weaving lovers' voices. <a href="https://www.songtell.com/maverick-sabre/into-nirvana" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[Songtell]</a>
              </p>
              <p>
                <strong>15. "Shady Lane" – Pavement</strong> introduces slack‑rock ease—jangly guitars and wry grins. <a href="https://karaokeparty.com/song-meanings/meaning-of-answer-by-phantogram/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[KaraokeParty]</a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Gentle Landing</h3>
              <p>
                <strong>16. "The Warmth Of The Sun – Remastered" – The Beach Boys</strong> bathes everything in golden‑hour harmonies, born from heartbreak yet glowing with hope. <a href="https://soundcloud.com/ylaceyp/own-your-own-1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[SoundCloud]</a>
              </p>
              <p>
                <strong>17. "Shady Grove" – Doc Watson</strong> picks front‑porch folk, a pastoral detour under Appalachian shade.
              </p>
              <p>
                                 <strong>18. "Come On Home" – Fred again.. & Brian Eno</strong> closes with ambient tenderness—like twilight windows opening back onto your own street. <a href="https://www.youtube.com/watch?v=VJmQqiixSn4" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[YouTube]</a>
               </p>
             </div>
           </div>
         </details>

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-blue-800 mb-3 text-lg">TL;DR</h4>
          <p className="text-blue-700 leading-relaxed">
            From jazzy self‑affirmation to ambient homecoming, the playlist arcs through material questions, luminous highs, and sun‑dappled resolutions. Queue it front‑to‑back to trace a full‑body meditation on agency, community, and return.
          </p>
          <div className="mt-4 text-center">
            <a
              href="https://github.com/tippi-fifestarr/poem-playlist"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
              title="View source on GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64">
                <defs>
                  <linearGradient id="musicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:"#4f46e5", stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:"#7c3aed", stopOpacity:1}} />
                  </linearGradient>
                </defs>
                
                <circle cx="16" cy="16" r="15" fill="url(#musicGradient)" stroke="#1f2937" strokeWidth="1"/>
                
                <rect x="12" y="8" width="1.5" height="12" fill="#ffffff"/>
                
                <ellipse cx="11.2" cy="19" rx="2" ry="1.5" fill="#ffffff"/>
                
                <path d="M13.5 8 Q18 6 18 10 Q18 8 13.5 10" fill="#ffffff"/>
                
                <line x1="20" y1="12" x2="26" y2="12" stroke="#ffffff" strokeWidth="1" opacity="0.8"/>
                <line x1="20" y1="15" x2="24" y2="15" stroke="#ffffff" strokeWidth="1" opacity="0.6"/>
                <line x1="20" y1="18" x2="27" y2="18" stroke="#ffffff" strokeWidth="1" opacity="0.8"/>
                <line x1="20" y1="21" x2="25" y2="21" stroke="#ffffff" strokeWidth="1" opacity="0.6"/>
                
                <path d="M7 10 Q7 8 9 8 Q11 8 11 10 Q11 8 13 8 Q15 8 15 10 Q15 12 11 16 Q7 12 7 10" fill="#ffffff" opacity="0.7" transform="scale(0.4) translate(10, 15)"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 