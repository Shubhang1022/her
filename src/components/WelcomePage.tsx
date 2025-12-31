import img1 from "../images/IMG1.jpeg";
import img2 from "../images/IMG2.jpeg";
import img3 from "../images/IMG3.jpeg";
import img4 from "../images/IMG4.jpeg";
import img5 from "../images/IMG5.jpeg";
import img6 from "../images/IMG6.jpeg";
import img7 from "../images/IMG7.jpeg";
import img8 from "../images/IMG8.jpeg";
import img9 from "../images/IMG9.jpeg";

interface WelcomePageProps {
  onMoveForward: () => void;
}

const WelcomePage = ({ onMoveForward }: WelcomePageProps) => {
  // Cat images for creating numbers
  const catImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  // Number patterns using grid positions (1 = cat, 0 = empty)
  const numberPatterns: Record<string, number[][]> = {
    "2": [
      [1, 1, 1],
      [0, 0, 1],
      [1, 1, 1],
      [1, 0, 0],
      [1, 1, 1],
    ],
    "0": [
      [1, 1, 1],
      [1, 0, 1],
      [1, 0, 1],
      [1, 0, 1],
      [1, 1, 1],
    ],
    "6": [
      [1, 1, 1],
      [1, 0, 0],
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ],
  };

  const renderNumber = (num: string, index: number) => {
    const pattern = numberPatterns[num];
    return (
      <div key={index} className="flex flex-col gap-2 mx-1 sm:mx-2">
        {pattern.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1">
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className={`w-4 h-4 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg overflow-hidden ${
                  cell ? "sparkle" : ""
                }`}
                style={{ animationDelay: `${(rowIndex + cellIndex) * 0.1}s` }}
              >
                {cell === 1 && (
                  <img
                    src={catImages[(rowIndex + cellIndex) % catImages.length]}
                    alt="cat"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="fade-in flex flex-col items-center justify-center min-h-screen p-4 text-center relative z-10">
      {/* Welcome text */}
      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-primary mb-8">
        Welcome to
      </h1>

      {/* 2026 made with cat images */}
      <div className="flex justify-center w-[70%] h-[317px] items-center mb-8 sm:mb-12 p-4 sm:p-6 bg-card/50 rounded-3xl shadow-xl backdrop-blur-sm">
        {["2", "0", "2", "6"].map((num, index) => renderNumber(num, index))}
      </div>

      {/* Decorative elements */}
      <div className="flex gap-4 mb-8">
        <span
          className="text-4xl floating"
          style={{ animationDelay: "0s" }}
        >
          🎆
        </span>
        <span
          className="text-4xl floating"
          style={{ animationDelay: "0.5s" }}
        >
          🎇
        </span>
        <span
          className="text-4xl floating"
          style={{ animationDelay: "1s" }}
        >
          🎆
        </span>
      </div>

      {/* Move forward button */}
      <button onClick={onMoveForward} className="cute-button-primary">
        Move Forward →
      </button>
    </div>
  );
};

export default WelcomePage;
