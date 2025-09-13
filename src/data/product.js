import tShirt from "../assets/img/image 1.png";
import polo from "../assets/img/image 10-1.png";
import striped from "../assets/img/image 10-2.png";
import jeans from "../assets/img/image 7-1.png";
import checkered from "../assets/img/image 8-2.png";
import sleeve from "../assets/img/image 8.png";
import vertical from "../assets/img/image 9-1.png";
import courage from "../assets/img/image 9-2.png";
import bermuda from "../assets/img/image 9-2.png";

const products = [
  {
    id: crypto.randomUUID(),
    title: "Gradient Graphic T-shirt",
    image: tShirt,
    rating: 4,
    stock: 212,
    price: 145,
    quantity : 0,
    offerPrice: null,
    date: "2025-05-01",
  },
  {
    id: crypto.randomUUID(),
    title: "Polo with Tipping Details",
    image: polo,
    rating: 1,
    stock: 320,
    price: 180,
    quantity : 0,
    offerPrice: null,
    date: "2025-05-03",
  },
  {
    id: crypto.randomUUID(),
    title: "Black Striped T-shirt",
    image: striped,
    rating: 3,
    stock: 420,
    price: 160,
    quantity : 0,
    offerPrice: 120,
    date: "2025-05-05",
  },
  {
    id: crypto.randomUUID(),
    title: "Skinny Fit Jeans",
    image: jeans,
    rating: 4,
    stock: 20,
    price: 260,
    quantity : 0,
    offerPrice: 240,
    date: "2025-05-07",
  },
  {
    id: crypto.randomUUID(),
    title: "Checkered Shirt",
    image: checkered,
    rating: 4,
    stock: 20,
    price: 180,
    quantity : 0,
    offerPrice: null,
    date: "2025-05-10",
  },
  {
    id: crypto.randomUUID(),
    title: "Sleeve Striped T-shirt",
    image: sleeve,
    rating: 4,
    ratingText: "4/5",
    stock: 20,
    price: 160,
    quantity : 0,
    offerPrice: 130,
    date: "2025-05-12",
  },
  {
    id: crypto.randomUUID(),
    title: "Vertical Striped Shirt",
    image: vertical,
    rating: 4,
    stock: 20,
    price: 232,
    quantity : 0,
    offerPrice: 212,
    date: "2025-05-15",
  },
  {
    id: crypto.randomUUID(),
    title: "Courage Graphic T-shirt",
    image: courage,
    rating: 4,
    stock: 20,
    price: 145,
    quantity : 0,
    offerPrice: null,
    date: "2025-05-18",
  },
  {
    id: crypto.randomUUID(),
    title: "Loose Fit Bermuda Shorts",
    image: bermuda,
    rating: 4,
    ratingText: "4.5/5",
    stock: 10,
    price: 80,
    quantity : 0,
    offerPrice: null,
    date: "2025-05-22",
  },
];

const getAllProducts = () => {
  return products;
};

export { getAllProducts };
