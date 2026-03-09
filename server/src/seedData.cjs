const data = {
  users: [
    {
      name: "Bibu Y18",
      email: "bibu@gmail.com",
      password: "bibu@123",
      phone: "01712345678",
      isBanned: false,
      isAdmin: true,
      image: "default.png",
    },
    {
      name: "Rana Ahmed",
      email: "rana@gmail.com",
      password: "rana@123",
      phone: "01898765432",
      isBanned: false,
      isAdmin: false,
      image: "default.png",
    },
    {
      name: "Hasan Ali",
      email: "hasan@gmail.com",
      password: "hasan@123",
      phone: "01911223344",
      isBanned: false,
      isAdmin: false,
      image: "default.png",
    },
  ],
  products: [
    {
      name: "Wireless Mouse",
      slug: "wireless-mouse",
      description:
        "This wireless mouse is designed for smooth performance and everyday productivity. It offers precise cursor control, ergonomic comfort, and long battery life for extended usage. The lightweight design makes it easy to carry anywhere. It connects quickly to laptops and desktops without complicated setup or additional drivers.",
      price: 1200,
      category: "69ae708857b15bee662818fe",
      quantity: 50,
      sold: 20,
      shipping: 60,
      image: "mouse.jpg",
    },
    {
      name: "Mechanical Keyboard",
      slug: "mechanical-keyboard",
      description:
        "This mechanical keyboard delivers a satisfying typing experience with responsive keys and durable switches. It features customizable RGB lighting effects and a strong metal frame for long term reliability. Ideal for programmers and gamers, it ensures accuracy and speed during long working hours or intense gaming sessions.",
      price: 3500,
      category: "69a8ff9e537cbdd35fab96d9",
      quantity: 30,
      sold: 12,
      shipping: 100,
      image: "keyboard.jpg",
    },
    {
      name: "Gaming Headset",
      slug: "gaming-headset",
      description:
        "This gaming headset provides immersive audio quality with deep bass and crystal clear sound. It includes a noise canceling microphone for clear communication during online meetings or multiplayer games. The comfortable ear cushions allow long time usage without discomfort, making it perfect for gamers and remote workers.",
      price: 2800,
      category: "69ae708857b15bee662818fe",
      quantity: 40,
      sold: 18,
      shipping: 80,
      image: "headset.jpg",
      
    },
    {
      name: "USB-C Charger",
      slug: "usb-c-charger",
      description:
        "This USB-C charger supports fast charging technology for smartphones, tablets, and laptops. Built with safety protection features, it prevents overheating and overcharging issues. Its compact and portable design makes it convenient for travel or office use. It ensures stable power delivery for modern electronic devices.",
      price: 900,
      category: "69ae707157b15bee662818fb",
      quantity: 100,
      sold: 45,
      shipping: 50,
      image: "charger.jpg",
      
    },
    {
      name: "Laptop Stand",
      slug: "laptop-stand",
      description:
        "This adjustable laptop stand improves posture and reduces neck strain during long working hours. Made from durable aluminum material, it provides strong support and stability for different laptop sizes. The foldable design allows easy storage and portability. It enhances airflow under the laptop to prevent overheating.",
      price: 1500,
      category: "69ae708857b15bee662818fe",
      quantity: 25,
      sold: 10,
      shipping: 70,
      image: "laptop-stand.jpg",
    },
  ],
};

module.exports = data;
