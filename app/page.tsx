"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [confetti, setConfetti] = useState<{ id: number, left: string, delay: string, color: string }[]>([]);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Confetti initialization
    const colors = ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#ff9100', '#ffb703'];
    const newConfetti = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setConfetti(newConfetti);

    // Countdown logic to 17/01/2026
    const targetDate = new Date("2026-01-17T00:00:00");
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-soft-pink text-foreground selection:bg-hot-pink selection:text-white">
      {/* Dynamic Confetti */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {confetti.map((piece) => (
          <div
            key={piece.id}
            className="confetti-piece"
            style={{
              left: piece.left,
              animationDelay: piece.delay,
              backgroundColor: piece.color,
              width: Math.random() > 0.5 ? '10px' : '6px',
              height: Math.random() > 0.5 ? '10px' : '15px',
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <section className="flex flex-col items-center justify-center text-center space-y-12 mb-32">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass border border-white/50 text-hot-pink font-bold text-sm shadow-lg animate-bounce duration-[3000ms]">
            🎉 ĐẾM NGƯỢC TỚI NGÀY 17/01/2026 🎉
          </div>
          
          <div className="relative">
            <h1 className="text-7xl md:text-9xl font-black text-gradient-shine tracking-tighter leading-none mb-6">
              HAPPY  <br /> BIRTHDAY
            </h1>
            <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 text-4xl md:text-6xl animate-bounce-slow">✨</div>
          </div>

          {/* Countdown Clock */}
          <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
            {[
              { label: 'Ngày', value: timeLeft.days },
              { label: 'Giờ', value: timeLeft.hours },
              { label: 'Phút', value: timeLeft.minutes },
              { label: 'Giây', value: timeLeft.seconds }
            ].map((unit, i) => (
              <div key={i} className="glass p-4 md:p-8 rounded-[2rem] border-white/50 shadow-xl flex flex-col items-center">
                <span className="text-3xl md:text-6xl font-black text-hot-pink tabular-nums">{unit.value.toString().padStart(2, '0')}</span>
                <span className="text-sm md:text-lg font-bold text-foreground/60 uppercase tracking-widest mt-2">{unit.label}</span>
              </div>
            ))}
          </div>
          
          <div className="relative group perspective-1000 mt-20">
            <div className="absolute -inset-4 bg-gradient-to-r from-hot-pink via-gold to-accent-pink rounded-[2.5rem] blur-2xl opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse-glow"></div>
            <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] rounded-[2rem] overflow-hidden border-[12px] border-white shadow-2xl transition-all duration-700 hover:scale-[1.02] rotate-2 hover:rotate-0">
              <Image
                src="/image/image.jpg"
                alt="Birthday Star"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm text-hot-pink px-6 py-2 rounded-full font-black text-2xl shadow-[0_10px_30px_rgba(255,10,84,0.3)] border-2 border-hot-pink/20 animate-bounce">
                25 YEARS OLD
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-32">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-20 text-foreground">Chặng Đường <span className="text-hot-pink">Rực Rỡ</span></h2>
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-2 bg-hot-pink/10 rounded-full hidden md:block"></div>
            {[
              { year: '2021 - Tuổi 20', content: 'Bắt đầu hành trình trưởng thành với bao hoài bão và đam mê.', pos: 'left' },
              { year: '2023 - Tuổi 22', content: 'Tốt nghiệp và bắt đầu chinh phục những đỉnh cao mới trong sự nghiệp.', pos: 'right' },
              { year: '2025 - Tuổi 24', content: 'Một năm bùng nổ với những trải nghiệm và thành tựu đáng nhớ.', pos: 'left' },
              { year: '17/01/2026 - Mốc 25', content: 'Chào đón tuổi 25 rạng rỡ, trưởng thành và tràn đầy hạnh phúc!', pos: 'right', highlight: true }
            ].map((item, i) => (
              <div key={i} className={`relative mb-12 flex items-center justify-center md:justify-between w-full ${item.pos === 'right' ? 'flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-5/12"></div>
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white bg-hot-pink shadow-lg z-20 hidden md:block"></div>
                <div className={`w-full md:w-5/12 glass p-8 rounded-[2rem] shadow-lg border-white transition-all hover:scale-105 ${item.highlight ? 'bg-gradient-to-br from-hot-pink to-accent-pink text-white ring-4 ring-hot-pink/30' : ''}`}>
                  <span className={`text-xl font-black mb-2 block ${item.highlight ? 'text-white' : 'text-hot-pink'}`}>{item.year}</span>
                  <p className={`text-lg font-medium ${item.highlight ? 'text-white/90' : 'text-foreground/80'}`}>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Special Someone Section */}
        <section className="mb-32">
          <div className="relative max-w-4xl mx-auto glass p-1 rounded-[3rem] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-hot-pink/20 via-white/5 to-hot-pink/20 animate-drift"></div>
            <div className="relative bg-white/60 backdrop-blur-xl p-12 md:p-20 rounded-[2.8rem] border border-white/50 text-center">
              <div className="text-6xl mb-8 animate-bounce-slow">💝</div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 text-foreground">Gửi <span className="text-hot-pink">Công Chúa Của Anh</span></h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-2xl md:text-3xl italic font-serif text-foreground/90 leading-relaxed mb-8">
                  "Chúc mừng sinh nhật 25 tuổi, người con gái anh yêu nhất! <br />
                  Cảm ơn em đã xuất hiện và làm cho cuộc đời anh trở nên rực rỡ hơn bao giờ hết. 
                  Tuổi mới, anh chỉ mong em luôn rạng rỡ, bình yên và hạnh phúc nhất... vì khi em cười, cả thế giới của anh như bừng sáng. 
                  Mãi bên cạnh anh em nhé!"
                </p>
                <div className="flex justify-center gap-2">
                  <span className="text-hot-pink text-3xl">❤</span>
                  <span className="text-hot-pink text-3xl animate-ping">❤</span>
                  <span className="text-hot-pink text-3xl">❤</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reasons Why I Love You Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4">Điều Anh <span className="text-hot-pink">Yêu Ở Em</span></h2>
            <p className="text-xl text-foreground/60 italic">"Mỗi ngày bên em đều là một món quà vô giá..."</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { charm: 'Nụ Cười', desc: 'Có thể làm tan chảy mọi mệt mỏi trong anh.', icon: '😊' },
              { charm: 'Ánh Mắt', desc: 'Nơi anh tìm thấy sự bình yên và ấm áp nhất.', icon: '✨' },
              { charm: 'Sự Dịu Dàng', desc: 'Cách em quan tâm khiến trái tim anh rung động.', icon: '🌸' },
              { charm: 'Sự Thông Minh', desc: 'Anh luôn ngưỡng mộ cách em nhìn nhận thế giới.', icon: '💡' }
            ].map((reason, i) => (
              <div key={i} className="glass group p-8 rounded-[2rem] border-white/40 hover:bg-hot-pink hover:scale-105 transition-all duration-500">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform">{reason.icon}</div>
                <h4 className="text-xl font-black mb-2 group-hover:text-white transition-colors">{reason.charm}</h4>
                <p className="group-hover:text-white/90 transition-colors text-foreground/70">{reason.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Music & Vibes Section */}
        <section className="mb-32">
          <div className="glass max-w-5xl mx-auto rounded-[4rem] p-12 md:p-16 border-white/60 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-8xl opacity-10 animate-spin-slow">💿</div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/3">
                <div className="aspect-square bg-gradient-to-br from-hot-pink to-gold rounded-3xl shadow-2xl flex items-center justify-center text-6xl animate-pulse">
                  🎵
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-3xl md:text-4xl font-black mb-6">Giai Điệu <span className="text-hot-pink">Tình Yêu</span></h3>
                <p className="text-xl text-foreground/70 mb-8 font-medium">
                  "Nếu cuộc đời là một bản nhạc, em chính là nốt nhạc tuyệt vời nhất mà anh từng tìm thấy."
                </p>
                <div className="space-y-4">
                  <div className="h-2 w-full bg-hot-pink/10 rounded-full overflow-hidden">
                    <div className="h-full bg-hot-pink w-[75%] animate-pulse"></div>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-hot-pink tracking-widest">
                    <span>FOREVER</span>
                    <span>2026 & BEYOND</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wish Wall Grid */}
        <section className="mb-32">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-black mb-4">Góc <span className="text-hot-pink">Kỷ Niệm</span></h2>
                <p className="text-xl text-foreground/60">Những lời chúc ngọt ngào nhất dành cho tuổi 25</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                { name: 'Mẹ Yêu', wishes: 'Chúc con gái của mẹ luôn xinh đẹp, bình an và hạnh phúc trong tuổi mới.', icon: '👩‍🦱' },
                { name: 'Ba', wishes: 'Ba tự hào về con. Hãy luôn vững tin trên con đường mình đã chọn nhé.', icon: '👨' },
                { name: 'Anh Yêu', wishes: 'Mãi là công chúa nhỏ của riêng anh em nhé! Tuổi mới thật hạnh phúc và yêu anh nhiều hơn nha! 💖', icon: '💑', primary: true },
                { name: 'Bạn Thân', wishes: 'Sinh nhật vui vẻ nhé bạn tui! Năm nay phải thật bùng nổ nha!', icon: '💃' },
                { name: 'Team Đồng Nghiệp', wishes: 'Chúc em tuổi mới bùng nổ năng lượng, luôn xinh đẹp và thành công rực rỡ.', icon: '🚀' },
                { name: 'Anh Chị', wishes: 'Tuổi 25 thật nhiều sức khỏe và may mắn nhé em yêu của cả nhà.', icon: '🏠' }
            ].map((wish, i) => (

                <div key={i} className={`p-10 glass rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-all duration-300 border-white/40 ${wish.primary ? 'ring-4 ring-hot-pink/20 bg-gradient-to-br from-hot-pink/5 to-transparent' : ''}`}>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="text-3xl">{wish.icon}</div>
                        <span className="font-black text-xl text-hot-pink">{wish.name}</span>
                    </div>
                    <p className="text-lg italic font-medium text-foreground/80 leading-relaxed italic line-clamp-4">"{wish.wishes}"</p>
                </div>
            ))}
            </div>
        </section>


        {/* Interaction Zone */}
        <section className="max-w-4xl mx-auto glass p-1 md:p-2 rounded-[4rem] shadow-2xl mb-20 overflow-hidden">
          <div className="bg-white/40 p-12 md:p-20 rounded-[3.5rem] border border-white/50 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-10 text-foreground">
              Gửi Ngàn Lời Chúc <br /> <span className="text-hot-pink drop-shadow-sm text-gradient-shine">Sẽ Xuất Hiện Trên Tường!</span>
            </h2>
            <div className="relative max-w-2xl mx-auto">
              <textarea 
                className="w-full p-8 rounded-[2rem] border-none ring-4 ring-hot-pink/10 focus:ring-hot-pink/30 bg-white/80 transition-all outline-none text-xl placeholder:text-foreground/30 shadow-inner" 
                placeholder="Viết điều gì đó thật ngọt ngào..."
                rows={4}
              ></textarea>
              <div className="mt-8 flex flex-col md:flex-row gap-6 justify-center">
                <button className="px-12 py-5 bg-hot-pink text-white rounded-full font-black text-xl shadow-[0_10px_30px_rgba(255,10,84,0.4)] hover:shadow-[0_15px_40px_rgba(255,10,84,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group">
                  Gửi Lời Chúc 💌
                  <span className="group-hover:translate-x-2 transition-transform">🚀</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-10 text-center">
          <p className="text-hot-pink font-black text-lg tracking-widest uppercase mb-4 animate-pulse">
            Celebrate with Love 💖
          </p>
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-hot-pink/20 to-transparent mx-auto rounded-full mb-4"></div>
          <p className="text-foreground/40 font-medium italic">Ngày sinh nhật đặc biệt: 17 tháng 01 năm 2026</p>
          <p className="text-foreground/30 text-sm mt-2">© 2026 Birthday Celebration | Designed for You</p>
        </footer>
      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </main>
  );
}
