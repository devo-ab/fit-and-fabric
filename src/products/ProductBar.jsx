export default function ProductBar({ onSort }) {
  return (
    <div className="flex items-center justify-between mb-6 p-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-md shadow-md">
  <h2 className="text-2xl font-bold text-white">Your Products</h2>
  
  <div className="flex items-center space-x-2">
    <span className="text-gray-300 text-sm">Sort by:</span>
    <select
      onChange={(e) => onSort(e.target.value)}
      className="bg-gray-800 text-white border border-gray-700 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
    >
      <option value="mostPopular">Most Popular</option>
      <option value="newest">Newest</option>
      <option value="lowToHigh">Price: Low to High</option>
      <option value="highToLow">Price: High to Low</option>
    </select>
  </div>
</div>

  );
}
