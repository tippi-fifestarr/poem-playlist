interface Track {
  order: number;
  title: string;
  artist: string;
  album: string;
  apple: string;
  tidal: string;
}

export default function PlaylistPoem() {
  const tracks: Track[] = [
    { order: 1, title: "Own Your Own", artist: "Yazmin Lacey", album: "Morning Matters", apple: "https://music.apple.com/us/search?term=Own%20Your%20Own%20Yazmin%20Lacey", tidal: "https://listen.tidal.com/search?q=Own%20Your%20Own%20Yazmin%20Lacey" },
    { order: 2, title: "Love", artist: "OK Go", album: "And the Adjacent Possible", apple: "https://music.apple.com/us/search?term=Love%20OK%20Go", tidal: "https://listen.tidal.com/search?q=Love%20OK%20Go" },
    { order: 3, title: "Money", artist: "LEISURE", album: "Twister", apple: "https://music.apple.com/us/search?term=Money%20LEISURE", tidal: "https://listen.tidal.com/search?q=Money%20LEISURE" },
    { order: 4, title: "Family", artist: "Jordan Rakei", album: "What We Call Life", apple: "https://music.apple.com/us/search?term=Family%20Jordan%20Rakei", tidal: "https://listen.tidal.com/search?q=Family%20Jordan%20Rakei" },
    { order: 5, title: "Glasshouses", artist: "Maribou State", album: "Kingdoms In Colour", apple: "https://music.apple.com/us/search?term=Glasshouses%20Maribou%20State", tidal: "https://listen.tidal.com/search?q=Glasshouses%20Maribou%20State" },
    { order: 6, title: "Gold", artist: "Chet Faker", album: "Built on Glass", apple: "https://music.apple.com/us/search?term=Gold%20Chet%20Faker", tidal: "https://listen.tidal.com/search?q=Gold%20Chet%20Faker" },
    { order: 7, title: "Into Nirvana", artist: "Maverick Sabre", album: "When I Wake Up", apple: "https://music.apple.com/us/search?term=Into%20Nirvana%20Maverick%20Sabre", tidal: "https://listen.tidal.com/search?q=Into%20Nirvana%20Maverick%20Sabre" },
    { order: 8, title: "Answer", artist: "Phantogram", album: "Three", apple: "https://music.apple.com/us/search?term=Answer%20Phantogram", tidal: "https://listen.tidal.com/search?q=Answer%20Phantogram" },
    { order: 9, title: "Music on My Teeth", artist: "DJ Koze, José González", album: "Knock Knock", apple: "https://music.apple.com/us/search?term=Music%20on%20My%20Teeth%20DJ%20Koze%2C%20Jos%C3%A9%20Gonz%C3%A1lez", tidal: "https://listen.tidal.com/search?q=Music%20on%20My%20Teeth%20DJ%20Koze%2C%20Jos%C3%A9%20Gonz%C3%A1lez" },
    { order: 10, title: "Golden", artist: "Jill Scott", album: "Beautifully Human: Words and Sounds Vol. 2", apple: "https://music.apple.com/us/search?term=Golden%20Jill%20Scott", tidal: "https://listen.tidal.com/search?q=Golden%20Jill%20Scott" },
    { order: 11, title: "Weak", artist: "Vintage Culture, Maverick Sabre, Tom Breu", album: "Promised Land", apple: "https://music.apple.com/us/search?term=Weak%20Vintage%20Culture%2C%20Maverick%20Sabre%2C%20Tom%20Breu", tidal: "https://listen.tidal.com/search?q=Weak%20Vintage%20Culture%2C%20Maverick%20Sabre%2C%20Tom%20Breu" },
    { order: 12, title: "Somedays", artist: "Sonny Fodera, Jazzy, D.O.D", album: "Somedays", apple: "https://music.apple.com/us/search?term=Somedays%20Sonny%20Fodera%2C%20Jazzy%2C%20D.O.D", tidal: "https://listen.tidal.com/search?q=Somedays%20Sonny%20Fodera%2C%20Jazzy%2C%20D.O.D" },
    { order: 13, title: "Cold Heart - PNAU Remix", artist: "Elton John, Dua Lipa, PNAU", album: "The Lockdown Sessions", apple: "https://music.apple.com/us/search?term=Cold%20Heart%20-%20PNAU%20Remix%20Elton%20John%2C%20Dua%20Lipa%2C%20PNAU", tidal: "https://listen.tidal.com/search?q=Cold%20Heart%20-%20PNAU%20Remix%20Elton%20John%2C%20Dua%20Lipa%2C%20PNAU" },
    { order: 14, title: "Warm Foothills", artist: "alt-J", album: "This Is All Yours", apple: "https://music.apple.com/us/search?term=Warm%20Foothills%20alt-J", tidal: "https://listen.tidal.com/search?q=Warm%20Foothills%20alt-J" },
    { order: 15, title: "Shady Lane", artist: "Pavement", album: "Brighten the Corners", apple: "https://music.apple.com/us/search?term=Shady%20Lane%20Pavement", tidal: "https://listen.tidal.com/search?q=Shady%20Lane%20Pavement" },
    { order: 16, title: "The Warmth Of The Sun - Remastered", artist: "The Beach Boys", album: "Shut Down, Vol. 2 (Remastered)", apple: "https://music.apple.com/us/search?term=The%20Warmth%20Of%20The%20Sun%20-%20Remastered%20The%20Beach%20Boys", tidal: "https://listen.tidal.com/search?q=The%20Warmth%20Of%20The%20Sun%20-%20Remastered%20The%20Beach%20Boys" },
    { order: 17, title: "Shady Grove", artist: "Doc Watson", album: "The Essential Doc Watson", apple: "https://music.apple.com/us/search?term=Shady%20Grove%20Doc%20Watson", tidal: "https://listen.tidal.com/search?q=Shady%20Grove%20Doc%20Watson" },
    { order: 18, title: "Come On Home", artist: "Fred again.., Brian Eno", album: "Secret Life", apple: "https://music.apple.com/us/search?term=Come%20On%20Home%20Fred%20again..%2C%20Brian%20Eno", tidal: "https://listen.tidal.com/search?q=Come%20On%20Home%20Fred%20again..%2C%20Brian%20Eno" }
  ];

  return (
          <div className="p-8 max-w-5xl mx-auto font-sans">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-gray-900">Family</h1>
          <p className="text-xl text-gray-600 italic">for your mom</p>
        </div>

      {/* Track Table */}
      <table className="w-full border border-gray-300 rounded-lg overflow-hidden text-sm sm:text-base">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">#</th>
            <th className="border p-2 text-left">Title</th>
            <th className="border p-2 text-left">Artist</th>
            <th className="border p-2 text-left">Album</th>
            <th className="border p-2 text-left">Links</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((track) => (
            <tr key={track.order} className="odd:bg-gray-50">
              <td className="border p-2 text-center">{track.order}</td>
              <td className="border p-2 font-medium">{track.title}</td>
              <td className="border p-2">{track.artist}</td>
              <td className="border p-2 italic">{track.album}</td>
              <td className="border p-2">
                <a
                  href={track.apple}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Apple Music
                </a>
                <span className="mx-1">|</span>
                <a
                  href={track.tidal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Tidal
                </a>
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

      {/* What to Expect */}
      <section className="mt-12 prose prose-lg mx-auto">
        <h2>What to Expect</h2>
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