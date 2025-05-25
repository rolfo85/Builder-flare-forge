import React, { useEffect, useRef } from "react";
import { createApp } from "vue";
import ProductForm from "../vue-components/ProductForm.vue";
import type { ProductFormData } from "../vue-components/types";
import "../vue-components/ProductForm.vue"; // Import Vue component CSS

const ProductPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const vueApp = useRef<any>(null);

  useEffect(() => {
    // Load the required fonts
    const redHatLink = document.createElement("link");
    redHatLink.rel = "stylesheet";
    redHatLink.href =
      "https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500&family=Red+Hat+Text:wght@400;500&display=swap";
    document.head.appendChild(redHatLink);

    // Load Tabler icons
    const tablerIconsLink = document.createElement("link");
    tablerIconsLink.rel = "stylesheet";
    tablerIconsLink.href =
      "https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css";
    document.head.appendChild(tablerIconsLink);

    if (containerRef.current) {
      // Clean up previous Vue app instance if it exists
      if (vueApp.current) {
        vueApp.current.unmount();
      }

      // Create a new Vue app
      const app = createApp(ProductForm, {
        initialData: {
          productName: "Premium paw dog food",
          description:
            "Premium Paws Gourmet Blend is made with only the finest, all-natural ingredie",
          category: "Dog food",
          brand: "Premium paws",
          sellingPrice: 0,
        },
        onSave: (data: ProductFormData) => {
          console.log("Saved data:", data);
          // Here you would typically handle the save operation
          // like sending the data to an API
        },
        onBack: () => {
          console.log("Back button clicked");
          // Navigate back - could use React Router's navigation here
          window.history.back();
        },
      });

      // Mount the Vue app to the container
      app.mount(containerRef.current);

      // Store the app reference for cleanup
      vueApp.current = app;
    }

    // Cleanup when component unmounts
    return () => {
      if (vueApp.current) {
        vueApp.current.unmount();
      }
      // Clean up the links
      document.head.removeChild(redHatLink);
      document.head.removeChild(tablerIconsLink);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F9FAFB]">
      <div
        ref={containerRef}
        className="w-full max-w-[1440px] overflow-hidden bg-white shadow-lg"
      ></div>
    </div>
  );
};

export default ProductPage;
