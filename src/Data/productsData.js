import white_tshirt from "../site assets/t-shirt oversize/white/ui kart/tshirta.png";
import black_tshirt from "../site assets/t-shirt oversize/black/ui kart/tshirt.png";
import w_tshirt from "../site assets/t-shirt/white/ui kart/W_UI.png";
import b_tshirt from "../site assets/t-shirt/black/ui kart/B_UI.png";
import hoodie from "../site assets/hoody/white/ui kart/hoodie_w.png";
import black_hoodie from "../site assets/hoody/black/ui kart/hoodie_B.png";
import sweater from "../site assets/sweater/black/ui kart/sweater_b_ui.png";
import white_sweater from "../site assets/sweater/white/ui kart/sweater_w_ui.png";
import cap from "../site assets/cap/cap.png";
import bag from "../site assets/eco bag/ui cardd/eco-bag.png";

const products = [
  {
    id: 1,
    name: "Oversize T-shirt",
    images: {
      main: white_tshirt,
      hover: black_tshirt,
    },
    colors: [
      { color: "white", hex: "#DEDEDE" },
      { color: "black", hex: "#000000" },
    ],
    sizeRange: "S-2XL",
    sizes: "S, M, L, XL, 2XL",
    price: "35₼",
    description: "Gün üçün nəzərdə tutulmuş bu şık oversize köynək, sənə rahatlığı və zərifliyi eyni anda təqdim edir. Sadə dizaynı ilə müxtəlif stillərlə uyumlu olaraq gündəlik geyimə mükəmməl şəkildə əlavə olunur. Keyfiyyətli pambıq materialından hazırlanmış, nəfəs alaraq sənə gün boyu rahatlıq gətirir.",
  },
  {
    id: 2,
    name: "T-shirt",
    images: {
      main: w_tshirt,
      hover: b_tshirt,
    },
    colors: [
      { color: "white", hex: "#DEDEDE" },
      { color: "black", hex: "#000000" },
    ],
    sizeRange: "S-2XL",
    sizes: "S, M, L, XL, 2XL",
    price: "25₼", 
    description: "Sadəliyi və rahatlığı birləşdirən bu köynək, gündəlik istifadə üçün ideal seçimdir. Yüksək keyfiyyətli parçası ilə dərinizin nəfəs almasına imkan verir və istənilən tərzlə uyğunlaşır.",
  },
  {
    id: 3,
    name: "Kapşonlu Sviter",
    images: {
      main: hoodie,
      hover: black_hoodie,
    },
    colors: [
      { color: "white", hex: "#DEDEDE" },
      { color: "black", hex: "#000000" },
    ],
    sizeRange: "S-2XL",
    sizes: "S, M, L, XL, 2XL",
    material: "2-3 iplik",
    threads: "2 iplik, 3 iplik",
    price: "40/45₼",
    description: "Rahat və gündəlik stil üçün mükəmməl. Hər zaman əlinin altında olmasını istəyəcəyin bir parça! Sənə komfortu və sadəliyi təqdim edir."
  },
  {
    id: 4,
    name: "Sviter",
    images: {
      main: white_sweater,
      hover: sweater,
    },
    colors: [
      { color: "black", hex: "#DEDEDE" },
      { color: "white", hex: "#000000" },
    ],
    sizeRange: "S-2XL",
    sizes: "S, M, L, XL, 2XL",
    threads: "2 iplik, 3 iplik",
    material: "2-3 iplik", 
    price: "35/40₼",
    description: " Zərif və sadə görünüşü ilə rahatlıq təqdim edən bu sviter, istənilən havada sənə komfort gətirir. Yüksək keyfiyyətli toxuması sayəsində özünü həm isti, həm də rahat hiss edəcəksən."
  },
  {
    id: 5,
    name: "Kepka",
    images: {
      main: cap,
    },
    colors: [
      { color: "white", hex: "#DEDEDE" },
      { color: "black", hex: "#000000" },
    ],
    sizeRange: "S-2XL",
    material: "2-3 iplik", 
    price: "15₼",
    description: "Şəxsi stilini ifadə etmək üçün mükəmməl aksesuar. Sadəliyi ilə fərq yaradır, günəşdən qorunmaq üçün ideal seçimdir və gündəlik tərzinə rahatlıqla əlavə edilə bilir.",
  },
  {
    id: 6,
    name: "Eko Çanta",
    images: {
      main: bag,
    },
    price: "18₼",
    description: "Təbiət dostu və zərif. Həm şık, həm də ekoloji olaraq düşünülmüş bu çanta gündəlik ehtiyaclarını daşımaq üçün əla seçimdir. Hər yerdə özünlə götür!",
  },
];

export default products;