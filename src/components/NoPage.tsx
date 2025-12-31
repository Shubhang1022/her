interface NoPageProps {
  onBack: () => void;
}

const NoPage = ({ onBack }: NoPageProps) => {
  return (
    <div className="fade-in flex flex-col items-center justify-center min-h-screen p-4 text-center relative z-10">
      {/* Crying cat gif */}
      <div className="floating mb-6 sm:mb-8">
        <img
          src="https://media.giphy.com/media/BEob5qwFkSJ7G/giphy.gif"
          alt="Crying cat"
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-3xl shadow-2xl object-cover"
        />
      </div>

      {/* Sad text */}
      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
        Think again? 🥺
      </h1>
      
      <p className="text-muted-foreground text-lg sm:text-xl mb-8 px-4">
        Pretty please with a cherry on top...
      </p>

      {/* Back button */}
      <button
        onClick={onBack}
        className="cute-button-accent"
      >
        ← Go Back
      </button>
    </div>
  );
};

export default NoPage;
