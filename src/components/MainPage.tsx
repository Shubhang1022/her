interface MainPageProps {
  onYes: () => void;
  onNo: () => void;
}

const MainPage = ({ onYes, onNo }: MainPageProps) => {
  return (
    <div className="fade-in flex flex-col items-center justify-center min-h-screen p-4 text-center relative z-10">
      {/* Cute cat gif */}
      <div className="floating mb-6 sm:mb-8">
        <img
          src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
          alt="Cute cat"
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-3xl shadow-2xl object-cover"
        />
      </div>

      {/* Main text */}
      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 sm:mb-10 px-4">
        Want to enter in 2026 with me?
      </h1>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <button
          onClick={onYes}
          className="cute-button-primary pulse-heart"
        >
          Yes! 💖
        </button>
        <button
          onClick={onNo}
          className="cute-button-secondary"
        >
          No 😿
        </button>
      </div>
    </div>
  );
};

export default MainPage;
