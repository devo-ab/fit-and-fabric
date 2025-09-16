export default function Rating({ value }) {
  const filledStars = Math.floor(value);
  const totalStars = 5;

  return (
    <div className="flex gap-2 items-center">
      <div className="flex text-yellow-400">
        {[...Array(filledStars)].map((_, i) => (
          <span key={i}>★</span> // Filled stars
        ))}
        {[...Array(totalStars - filledStars)].map((_, i) => (
          <span key={i} className="text-gray-300">
            ★
          </span>
        ))}
      </div>

      <span className="text-xs text-gray-500 ml-1">{value}/5</span>
    </div>
  );
}
