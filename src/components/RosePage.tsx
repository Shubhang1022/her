interface RosePageProps {
  onOpenSurprise: () => void;
}

const RosePage = ({ onOpenSurprise }: RosePageProps) => {
  return (
    <div className="fade-in flex flex-col items-center justify-center min-h-screen p-4 text-center relative z-10">
      {/* Rose */}
      <div className="floating mb-8 sm:mb-12">
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-heart-red/20 blur-3xl rounded-full scale-150" />
          
          {/* Rose emoji with styling */}
          <div className="relative text-8xl sm:text-9xl md:text-[10rem] pulse-heart">
            🌹
          </div>
          
          {/* Sparkles around rose */}
          <span className="absolute -top-4 -left-4 text-2xl sparkle">✨</span>
          <span className="absolute -top-4 -right-4 text-2xl sparkle" style={{ animationDelay: "0.3s" }}>✨</span>
          <span className="absolute -bottom-4 -left-4 text-2xl sparkle" style={{ animationDelay: "0.6s" }}>✨</span>
          <span className="absolute -bottom-4 -right-4 text-2xl sparkle" style={{ animationDelay: "0.9s" }}>✨</span>
        </div>
      </div>

      {/* Decorative text */}
      <p className="font-display text-2xl sm:text-3xl text-muted-foreground mb-8">
        A special gift awaits...
      </p>

      {/* Open surprise button */}
      <button
        onClick={onOpenSurprise}
        className="cute-button-accent text-xl"
      >
        🎁 Open Surprise 🎁
      </button>
    </div>
  );
};

export default RosePage;
