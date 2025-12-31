import { useEffect, useState, useRef } from "react";

const SurprisePage = () => {
  const [visibleWords, setVisibleWords] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const message = "Hey my cutie love! As we step into 2026, I just want to remind you how incredibly special you are to me. Every moment with you feels like a beautiful adventure, and I can't wait to create more memories together this year. Wishing you a year filled with love, laughter, and endless happiness.Mai janta hu ham dono ke liye yeh bithe hue saal bhut muskhil rhe h and ik tumhne meri wjh se bhut kuch jhela hai, pr meri jaan tumhne hi mujhe sahara diya , mujhe sikhaya sb kuch , meri har gltiya maaf ki. In sb cheezo ke liye i really thank you and aap mere pass hmesa rhna.Yeh surprise gift toh kuch nhi h bae , tum clear krke aa jaogi toh woh bhut bda surprise gift hoga.Aap sbse zyada khubsurat ho meri jaan aap hmesa mera dyan rhkti ho and tumhe khush rhkna meri responibility hai. Yaad hai n jb ham dono mile the kuch month phele, us wqt i felt like ki Actual comfort zone kya hota h. Aaj thk kabhi utna best and acha feel nhi hua tha , jitna tumhare sath rh kr time bithane m lga.Thanks a lot tumhne meri life bhut colourful,khubsurat,aur sbse zyada valuable bna di.❤️❤️ Now dont worry ki m kahi jaunga yaa distract hunga , i will always love you in this life and afterlife.Tum mere liye sb kuch ho.  Resolution of mera for this year: 1. Tumhe dher saari khushiyaaa dena, pyaar krna and tumhare pass loyal rhna. 2.Tumhari har khwaish puri krna h. 3. Ache se mehnt krke , jldi se tumse shaadi krna h. and so on...(call pr btaunga sb.)now my is saal bhi tum khush rho and aate hue har ek second , har ek saal tum bss khush rho.I LOVE YOU SOOOOOOOOOOO MUCH MERA BCCHAA MY BUBU WIFE❤️❤️❤️❤️❤️❤️🌹🌹🌹🌹🌹                                                            Happy New Year, my darling! 💖🎉";
  const words = message.split(" ");
  
  // Time per word to complete in 8 seconds
  const timePerWord = 8000 / words.length;

  useEffect(() => {
    // Play music
    audioRef.current = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
    audioRef.current.volume = 0.3;
    audioRef.current.play().catch(() => {
      // Autoplay might be blocked
    });

    // Reveal words one by one
    const interval = setInterval(() => {
      setVisibleWords((prev) => {
        if (prev >= words.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, timePerWord);

    return () => {
      clearInterval(interval);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="fade-in flex flex-col items-center justify-center min-h-screen p-4 text-center relative z-10">
      {/* Decorative cats around the frame */}
      <div className="fixed top-4 left-4 text-4xl sm:text-5xl floating z-20">
        <img 
          src="https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif" 
          alt="Cute cat" 
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
        />
      </div>
      <div className="fixed top-4 right-4 text-4xl sm:text-5xl floating z-20" style={{ animationDelay: "0.5s" }}>
        <img 
          src="https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif" 
          alt="Cute cat" 
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
        />
      </div>
      <div className="fixed bottom-4 left-4 text-4xl sm:text-5xl floating z-20" style={{ animationDelay: "1s" }}>
        <img 
          src="https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif" 
          alt="Cute cat" 
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
        />
      </div>
      <div className="fixed bottom-4 right-4 text-4xl sm:text-5xl floating z-20" style={{ animationDelay: "1.5s" }}>
        <img 
          src="https://media.giphy.com/media/nR4L10XlJcSeQ/giphy.gif" 
          alt="Cute cat" 
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
        />
      </div>

      {/* Decorative flowers */}
      <div className="fixed top-20 left-1/4 text-3xl sparkle">🌸</div>
      <div className="fixed top-32 right-1/4 text-3xl sparkle" style={{ animationDelay: "0.3s" }}>🌷</div>
      <div className="fixed bottom-20 left-1/3 text-3xl sparkle" style={{ animationDelay: "0.6s" }}>🌺</div>
      <div className="fixed bottom-32 right-1/3 text-3xl sparkle" style={{ animationDelay: "0.9s" }}>🌹</div>
      <div className="fixed top-1/2 left-8 text-3xl sparkle" style={{ animationDelay: "1.2s" }}>💐</div>
      <div className="fixed top-1/2 right-8 text-3xl sparkle" style={{ animationDelay: "1.5s" }}>🌻</div>

      {/* Main decorative frame */}
<div className="decorative-frame max-w-8xl h-[650px] mx-4 sm:mx-8" style={{ overflow: "auto", scrollbarWidth: "none" }}>
        {/* Inner decorations */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-2">
          <span className="text-2xl pulse-heart">💖</span>
          <span className="text-3xl pulse-heart" style={{ animationDelay: "0.2s" }}>🌹</span>
          <span className="text-2xl pulse-heart" style={{ animationDelay: "0.4s" }}>💖</span>
        </div>
        
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          <span className="text-2xl pulse-heart">💕</span>
          <span className="text-3xl pulse-heart" style={{ animationDelay: "0.2s" }}>🌸</span>
          <span className="text-2xl pulse-heart" style={{ animationDelay: "0.4s" }}>💕</span>
        </div>

        {/* Corner decorations */}
        <span className="absolute -top-3 -left-3 text-3xl">🌷</span>
        <span className="absolute -top-3 -right-3 text-3xl">🌷</span>
        <span className="absolute -bottom-3 -left-3 text-3xl">🌺</span>
        <span className="absolute -bottom-3 -right-3 text-3xl">🌺</span>

        {/* Message content */}
        <div className="py-8 px-4 sm:px-8">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary mb-6 sm:mb-8">
            💌 My Message to You 💌
          </h2>
          
          <div className="font-body text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed min-h-[200px]">
            {words.map((word, index) => (
              <span
                key={index}
                className={`inline-block mr-2 ${index < visibleWords ? "word-reveal" : "opacity-0"}`}
                style={{
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Happy New Year text */}
      <div className="mt-8 sm:mt-12">
        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-heart-red sparkle">
          Happy New Year 2026! 🎊
        </h3>
      </div>
    </div>
  );
};

export default SurprisePage;
