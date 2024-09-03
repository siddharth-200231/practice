import React from "react";
import Mobile from "./Mobile";
import Phone from "./Phone";

function App() {
  return (
    <div>
      <Mobile />
      <div className="p-4 sm:p-6 lg:p-8 bg-zinc-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Phone
            img="https://m.media-amazon.com/images/I/619f09kK7tL._SX522_.jpg"
            name="iPhone 12"
            price="$799.99"
            description="The iPhone 12 features a sleek design with a 6.1-inch Super Retina XDR display and a powerful A14 Bionic chip. Perfect for photography and everyday use."
          />
          <Phone
            img="https://m.media-amazon.com/images/I/81lek2iav1L._SX679_.jpg"
            name="Samsung Galaxy S24"
            price="$999.99"
            description="Samsung Galaxy S24 offers an immersive 6.8-inch AMOLED display and cutting-edge performance with the latest Snapdragon processor. Ideal for multitasking and gaming."
          />
          <Phone
            img="https://m.media-amazon.com/images/I/61YrINwdGlL._SX569_.jpg"
            name="Google Pixel 8a"
            price="$699.99"
            description="Google Pixel 8a comes with a stunning 6.1-inch OLED display and Google's Tensor G2 chip. Known for its exceptional camera performance and pure Android experience."
          />
          <Phone
            img="https://m.media-amazon.com/images/I/61amb0CfMGL._SX569_.jpg"
            name="OnePlus 9 Pro"
            price="$969.99"
            description="OnePlus 9 Pro features a 120Hz Fluid AMOLED display and the powerful Snapdragon 888 processor. It's designed for high performance and a smooth user experience."
          />
          <Phone
            img="https://m.media-amazon.com/images/I/81mDHujkYpL._SL1500_.jpg"
            name="Xiaomi Mi 11"
            price="$749.99"
            description="Xiaomi Mi 11 boasts a 6.81-inch AMOLED display and the latest Snapdragon 888 chipset. It offers excellent performance and a vibrant display for multimedia consumption."
          />
        </div>
      </div>
    </div>
  );
}

export default App;
