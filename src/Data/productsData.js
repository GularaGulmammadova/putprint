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
    front: '/W_F.png',
    back: '/W_B.png',
    blackFront: '/B_F.png',
    blackBack: '/B_B.png',
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
    front: '/t_shirt_W_F.png',
    back: '/t_shirt_W_B.png',
    blackFront: '/t_shirt_B_F.png',
    blackBack: '/t_shirt_B_B.png',
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
    front: '/hoodie_W_F.png',
    back: '/hoodie_W_B.png',
    blackFront: '/hoodie_B_F.png',
    blackBack: '/hoodie_B_B.png',
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
    minPrice: "40₼",
    maxPrice: "45₼",
    description: "Rahat və gündəlik stil üçün mükəmməl. Hər zaman əlinin altında olmasını istəyəcəyin bir parça! Sənə komfortu və sadəliyi təqdim edir."
  },
  {
    id: 4,
    front: '/sweater_W_F.png',
    back: '/sweater_W_B.png',
    blackFront: '/sweater_B_F.png',
    blackBack: '/sweater_B_B.png',
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
    minPrice: "35₼",
    maxPrice: "40₼",
    description: " Zərif və sadə görünüşü ilə rahatlıq təqdim edən bu sviter, istənilən havada sənə komfort gətirir. Yüksək keyfiyyətli toxuması sayəsində özünü həm isti, həm də rahat hiss edəcəksən."
  },
  {
    id: 5,
    front: '/cap_white.png',
    blackFront: '/cap_b.png',
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
    front: '/front.png',
    back: '/back.png',
    name: "Eko Çanta",
    images: {
      main: bag,
    },
    price: "18₼",
    description: "Təbiət dostu və zərif. Həm şık, həm də ekoloji olaraq düşünülmüş bu çanta gündəlik ehtiyaclarını daşımaq üçün əla seçimdir. Hər yerdə özünlə götür!",
  },
];

export default products;