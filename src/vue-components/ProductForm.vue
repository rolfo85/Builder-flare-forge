<template>
  <div class="flex w-full max-w-[1440px] flex-col items-start bg-white">
    <!-- Top Bar -->
    <div
      class="flex w-full items-center gap-4 border-b border-[#D7D5E4] bg-white p-4"
    >
      <div class="flex w-full items-center justify-between">
        <div class="flex items-center gap-2">
          <button
            @click="onBack"
            class="flex h-5 w-5 items-center justify-center"
          >
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
            >
              <path
                d="M0.828125 10.8203C0.59375 10.5859 0.5 10.3047 0.5 9.97655C0.5 9.6953 0.59375 9.41405 0.828125 9.17968L9.07812 1.30467C9.54688 0.8828 10.25 0.8828 10.6719 1.35155C11.0938 1.77342 11.0938 2.52342 10.625 2.9453L4.39062 8.85155H20.375C20.9844 8.85155 21.5 9.36718 21.5 9.97655C21.5 10.6328 20.9844 11.1016 20.375 11.1016H4.39062L10.625 17.0547C11.0938 17.4765 11.0938 18.1797 10.6719 18.6484C10.25 19.1172 9.54688 19.1172 9.07812 18.6953L0.828125 10.8203Z"
                fill="#575568"
              />
            </svg>
          </button>
          <div
            class="w-[150px] text-sm font-medium text-[#232043] md:text-base"
          >
            Customers
          </div>
        </div>
        <div class="flex items-center justify-end gap-2">
          <button
            @click="saveForm"
            class="flex h-10 items-center justify-center gap-2 rounded-md bg-[#815AF0] px-4 py-2 text-sm font-medium text-white sm:h-[40px] sm:px-4 sm:py-2"
          >
            Save
          </button>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div
      class="flex h-auto w-full flex-col justify-between md:h-[952px] md:flex-row"
    >
      <!-- Left Container -->
      <div
        class="flex flex-1 flex-col items-center self-stretch p-4 sm:p-6 md:p-10"
      >
        <div
          class="flex w-full max-w-[500px] flex-col items-start gap-10 self-stretch"
        >
          <!-- Item Details Section -->
          <div class="flex w-full flex-col items-start gap-4">
            <div class="text-lg font-medium text-[#232043] sm:text-xl">
              Item details
            </div>

            <!-- Product/Service Selection -->
            <div class="flex w-full flex-col items-start gap-4 sm:flex-row">
              <div
                :class="[
                  'flex h-[48px] flex-1 items-center justify-center gap-4 rounded-md border border-[#D7D5E4] bg-white p-3 sm:h-[56px] sm:p-4',
                  formData.itemType === 'product' ? 'border-[#815AF0]' : '',
                ]"
                @click="formData.itemType = 'product'"
              >
                <div class="flex items-center gap-2">
                  <div
                    :class="[
                      'h-4 w-4 rounded-full border-2',
                      formData.itemType === 'product'
                        ? 'border-[#815AF0] bg-[#815AF0]'
                        : 'border-[#B1AFC5]',
                    ]"
                  >
                    <div
                      v-if="formData.itemType === 'product'"
                      class="flex h-full w-full items-center justify-center"
                    >
                      <div class="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                  </div>
                </div>
                <div
                  :class="[
                    'flex flex-1 flex-col items-start text-sm font-medium',
                    formData.itemType === 'product'
                      ? 'text-[#7552D0]'
                      : 'text-[#232043]',
                  ]"
                >
                  Product
                </div>
              </div>

              <div
                :class="[
                  'flex h-[48px] flex-1 items-center justify-center gap-4 rounded-md border border-[#D7D5E4] bg-white p-3 sm:h-[56px] sm:p-4',
                  formData.itemType === 'service' ? 'border-[#815AF0]' : '',
                ]"
                @click="formData.itemType = 'service'"
              >
                <div class="flex items-center gap-2">
                  <div
                    :class="[
                      'h-4 w-4 rounded-full border-2',
                      formData.itemType === 'service'
                        ? 'border-[#815AF0] bg-[#815AF0]'
                        : 'border-[#B1AFC5]',
                    ]"
                  >
                    <div
                      v-if="formData.itemType === 'service'"
                      class="flex h-full w-full items-center justify-center"
                    >
                      <div class="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                  </div>
                </div>
                <div
                  :class="[
                    'flex flex-1 flex-col items-start text-sm font-medium',
                    formData.itemType === 'service'
                      ? 'text-[#7552D0]'
                      : 'text-[#232043]',
                  ]"
                >
                  Service
                </div>
              </div>
            </div>

            <!-- Product Name -->
            <div class="flex w-full flex-col items-start gap-2">
              <label class="text-sm font-medium text-[#232043]"
                >Product name</label
              >
              <input
                v-model="formData.productName"
                type="text"
                class="h-12 w-full rounded-md border border-[#D7D5E4] p-3 text-sm"
                placeholder="Enter product name"
              />
            </div>

            <!-- Category and Brand -->
            <div class="flex w-full flex-col items-start gap-6">
              <div class="flex w-full flex-col gap-6 md:flex-row">
                <div class="flex flex-1 flex-col items-start gap-2 md:w-1/2">
                  <label
                    class="flex items-center gap-2 text-sm font-medium text-[#232043]"
                  >
                    Category
                  </label>
                  <div class="h-12 w-full">
                    <input
                      v-model="formData.category"
                      type="text"
                      class="h-12 w-full rounded-md border border-[#D7D5E4] p-3 text-sm text-[#6A6881]"
                      placeholder="Search or add a new category"
                    />
                  </div>
                </div>

                <div class="flex flex-1 flex-col items-start gap-2 md:w-1/2">
                  <label
                    class="flex items-center gap-2 text-sm font-medium text-[#232043]"
                  >
                    Brand
                  </label>
                  <div class="h-12 w-full">
                    <input
                      v-model="formData.brand"
                      type="text"
                      class="h-12 w-full rounded-md border border-[#D7D5E4] p-3 text-sm"
                      placeholder="Enter brand name"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Inventory Section -->
          <div class="flex w-full flex-col items-start gap-4">
            <div class="flex w-full flex-col items-start gap-1">
              <div class="text-lg font-medium text-[#232043] sm:text-xl">
                Inventory
              </div>
              <div class="text-sm text-[#52506D]">
                Add SKU, stock units to track inventory.
              </div>
            </div>

            <div class="flex w-full flex-col items-start gap-6">
              <div class="flex w-full flex-col gap-6 md:flex-row">
                <div class="flex flex-1 flex-col items-start gap-2 md:w-1/2">
                  <label
                    class="flex items-center gap-2 text-sm font-medium text-[#232043]"
                  >
                    SKU
                  </label>
                  <div class="h-12 w-full">
                    <input
                      v-model="formData.sku"
                      type="text"
                      class="h-12 w-full rounded-md border border-[#D7D5E4] p-3 text-sm"
                      placeholder="Enter SKU"
                    />
                  </div>
                </div>

                <div class="flex flex-1 flex-col items-start gap-2 md:w-1/2">
                  <label
                    class="flex items-center gap-2 text-sm font-medium text-[#232043]"
                  >
                    Barcode
                  </label>
                  <div class="h-12 w-full">
                    <input
                      v-model="formData.barcode"
                      type="text"
                      class="h-12 w-full rounded-md border border-[#D7D5E4] p-3 text-sm"
                      placeholder="Enter barcode"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- Track Inventory Checkbox -->
            <div class="flex w-full items-center gap-2">
              <div
                :class="[
                  'flex h-4 w-4 cursor-pointer items-center justify-center rounded border-2',
                  formData.trackInventory
                    ? 'border-[#815AF0] bg-[#815AF0]'
                    : 'border-[#B1AFC5]',
                ]"
                @click="formData.trackInventory = !formData.trackInventory"
              >
                <svg
                  v-if="formData.trackInventory"
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L3.5 6.5L1 4"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <label
                class="cursor-pointer text-sm text-[#232043]"
                @click="formData.trackInventory = !formData.trackInventory"
              >
                Track inventory for this product.
              </label>
            </div>
          </div>

          <!-- More Options Section -->
          <div class="flex w-full flex-col items-start gap-4">
            <div class="flex w-full flex-col items-start gap-1">
              <div class="text-lg font-medium text-[#232043] sm:text-xl">
                More options
              </div>
              <div class="text-sm text-[#232043]">
                Manage taxes, fees and shipping configurations.
              </div>
            </div>

            <!-- Tax Exemption -->
            <div class="flex w-full flex-col items-start gap-6">
              <div class="flex h-[76px] w-full flex-col items-start gap-2">
                <label
                  class="flex items-center gap-2 text-sm font-medium text-[#232043]"
                >
                  Tax exemption
                </label>
                <div class="h-12 w-full">
                  <input
                    v-model="formData.taxExemption"
                    type="text"
                    class="h-12 w-full rounded-md border border-[#D7D5E4] p-3 text-sm"
                    placeholder="Enter tax exemption"
                  />
                </div>
              </div>
            </div>

            <!-- Shipping Fee Checkbox -->
            <div class="flex w-full items-center gap-2">
              <div
                :class="[
                  'flex h-4 w-4 cursor-pointer items-center justify-center rounded border-2',
                  formData.shippingExempt
                    ? 'border-[#815AF0] bg-[#815AF0]'
                    : 'border-[#B1AFC5]',
                ]"
                @click="formData.shippingExempt = !formData.shippingExempt"
              >
                <svg
                  v-if="formData.shippingExempt"
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L3.5 6.5L1 4"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <label
                class="cursor-pointer text-sm text-[#232043]"
                @click="formData.shippingExempt = !formData.shippingExempt"
              >
                Exempt shipping fee on this item
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Container -->
      <div
        class="flex w-full flex-col items-start gap-10 border-t border-[#D7D5E4] bg-white p-4 sm:p-6 md:w-[566px] md:border-l md:border-t-0 md:p-10 md:px-16"
      >
        <div class="flex w-full flex-col items-start gap-6">
          <div class="flex w-full flex-col items-start gap-6">
            <div
              class="w-full text-center text-xs font-medium uppercase tracking-[1.92px] text-[#3B3858]"
            >
              ITEM SUMMARY
            </div>

            <!-- Item Summary Card -->
            <div
              class="flex w-full flex-col items-center justify-center gap-6 rounded-lg bg-gradient-to-r from-[#FAEFFF] to-[#EFEFFF] p-6"
            >
              <div
                class="flex w-[200px] flex-col items-center gap-2 sm:w-[200px]"
              >
                <div class="flex items-start">
                  <div
                    class="rounded-full bg-[#EEE7FF] px-4 py-1 text-xs font-medium text-[#7552D0]"
                  >
                    Selling price
                  </div>
                </div>
                <div
                  class="w-full text-center text-2xl font-medium text-[#232043]"
                >
                  ${{ formatPrice(formData.sellingPrice) }}
                </div>
              </div>

              <div
                class="flex w-full items-center gap-4 rounded-md border border-[#F9F8FE] bg-white p-3 sm:p-4"
              >
                <div
                  class="flex h-10 w-10 items-center justify-center rounded bg-[#815AF0]"
                >
                  <span class="text-sm font-medium text-white">PP</span>
                </div>
                <div class="flex-1 text-sm font-medium text-[#232043]">
                  {{ formData.productName || "Premium paw dog food" }}
                </div>
              </div>
            </div>

            <!-- Description -->
            <div class="flex w-full flex-col items-start gap-4">
              <div
                class="flex w-full flex-col gap-2 sm:flex-row sm:items-center"
              >
                <div class="w-[150px] text-sm font-medium text-[#3B3858]">
                  Description
                </div>
                <div
                  class="flex-1 overflow-hidden text-ellipsis text-left text-sm text-[#232043] sm:text-right"
                >
                  {{
                    formData.description ||
                    "Premium Paws Gourmet Blend is made with only the finest, all-natural ingredie"
                  }}
                </div>
              </div>
            </div>

            <!-- Category -->
            <div
              class="flex w-full flex-col items-start gap-4 border-t border-[#EEEDF6] pt-4"
            >
              <div
                class="flex w-full flex-col gap-2 sm:flex-row sm:items-center"
              >
                <div class="w-[150px] text-sm font-medium text-[#232043]">
                  Category
                </div>
                <div
                  class="flex-1 overflow-hidden text-ellipsis text-left text-sm text-[#232043] sm:text-right"
                >
                  {{ formData.category || "Dog food" }}
                </div>
              </div>

              <!-- Brand -->
              <div
                class="flex w-full flex-col gap-2 sm:flex-row sm:items-center"
              >
                <div class="w-[150px] text-sm font-medium text-[#232043]">
                  Brand name
                </div>
                <div
                  class="flex-1 overflow-hidden text-ellipsis text-left text-sm text-[#232043] sm:text-right"
                >
                  {{ formData.brand || "Premium paws" }}
                </div>
              </div>
            </div>

            <!-- Taxes -->
            <div
              class="flex w-full flex-col items-start gap-4 border-t border-[#EEEDF6] pt-4"
            >
              <div
                class="flex w-full flex-col gap-2 sm:flex-row sm:items-center"
              >
                <div class="flex items-center gap-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 7.5L2.5 2.5V17.5L7.5 15L12.5 17.5L17.5 15V7.5Z"
                      stroke="#232043"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.5 10L12.5 15"
                      stroke="#232043"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.5 10C13.0523 10 13.5 9.55228 13.5 9C13.5 8.44772 13.0523 8 12.5 8C11.9477 8 11.5 8.44772 11.5 9C11.5 9.55228 11.9477 10 12.5 10Z"
                      fill="#232043"
                    />
                    <path
                      d="M7.5 15C8.05228 15 8.5 14.5523 8.5 14C8.5 13.4477 8.05228 13 7.5 13C6.94772 13 6.5 13.4477 6.5 14C6.5 14.5523 6.94772 15 7.5 15Z"
                      fill="#232043"
                    />
                  </svg>
                  <div class="w-[150px] text-sm font-medium text-[#232043]">
                    Taxes
                  </div>
                </div>
                <div
                  class="flex-1 overflow-hidden text-ellipsis text-left text-sm text-[#232043] sm:text-right"
                >
                  {{
                    formData.taxExemption
                      ? formData.taxExemption
                      : "Fully taxable"
                  }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Availability Toggle -->
        <div
          class="flex w-full flex-col items-start gap-6 rounded-md border border-[#D7D5E4] p-4"
        >
          <div class="flex w-full flex-col items-start gap-2">
            <div
              class="flex w-full flex-col items-start justify-between gap-3 sm:flex-row sm:items-center"
            >
              <div class="text-lg font-medium text-[#232043]">Availability</div>
              <button
                class="relative h-5 w-8 cursor-pointer rounded-full transition-colors duration-200 ease-in-out"
                :class="formData.available ? 'bg-[#815AF0]' : 'bg-gray-300'"
                @click="formData.available = !formData.available"
              >
                <span
                  class="absolute left-0 top-0 h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out"
                  :class="
                    formData.available ? 'translate-x-3' : 'translate-x-0'
                  "
                ></span>
              </button>
            </div>
            <div class="text-sm text-[#52506D]">
              Item available. Disable the toggle when the item is unavailable or
              out of stock.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ProductFormProps, ProductFormData } from "./types";

const props = defineProps<ProductFormProps>();
const emit = defineEmits<{
  (e: "save", data: ProductFormData): void;
  (e: "back"): void;
}>();

const formData = ref<ProductFormData>({
  itemType: "product",
  productName: "",
  category: "",
  brand: "",
  sku: "",
  barcode: "",
  trackInventory: false,
  taxExemption: "",
  shippingExempt: false,
  available: true,
  sellingPrice: 0,
  description: "",
});

onMounted(() => {
  if (props.initialData) {
    formData.value = { ...formData.value, ...props.initialData };
  }
});

const formatPrice = (price: number): string => {
  return price.toFixed(2);
};

const saveForm = () => {
  if (props.onSave) {
    props.onSave(formData.value);
  }
  emit("save", formData.value);
};

const onBack = () => {
  if (props.onBack) {
    props.onBack();
  }
  emit("back");
};
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css");
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500&family=Red+Hat+Text:wght@400;500&display=swap");

.red-hat-text {
  font-family:
    "Red Hat Text",
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
}

.red-hat-display {
  font-family:
    "Red Hat Display",
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
}
</style>
