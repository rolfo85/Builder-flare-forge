<template>
  <div
    class="flex items-start bg-white flex-col font-normal w-full pointer-events-auto h-auto flex-grow-0"
  >
    <div
      class="flex items-center bg-white border-b border-[#D7D5E4] font-normal gap-4 w-full pointer-events-auto p-4"
    >
      <div
        class="flex items-center font-normal justify-between w-full pointer-events-auto"
      >
        <div class="flex items-center font-normal gap-2 pointer-events-auto">
          <button
            @click="onBack"
            class="flex items-center font-normal h-5 justify-center w-5 pointer-events-auto bg-transparent border-transparent"
          >
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="block fill-none font-normal h-5 overflow-clip-margin-content-box overflow-hidden w-5 pointer-events-auto"
            >
              <path
                d="M0.828125 10.8203C0.59375 10.5859 0.5 10.3047 0.5 9.97655C0.5 9.6953 0.59375 9.41405 0.828125 9.17968L9.07812 1.30467C9.54688 0.8828 10.25 0.8828 10.6719 1.35155C11.0938 1.77342 11.0938 2.52342 10.625 2.9453L4.39062 8.85155H20.375C20.9844 8.85155 21.5 9.36718 21.5 9.97655C21.5 10.6328 20.9844 11.1016 20.375 11.1016H4.39062L10.625 17.0547C11.0938 17.4765 11.0938 18.1797 10.6719 18.6484C10.25 19.1172 9.54688 19.1172 9.07812 18.6953L0.828125 10.8203Z"
                fill="#575568"
                class="inline fill-[#575568] font-normal transform-origin-0 pointer-events-auto"
                style="
                  d: path(
                    &quot;M 0.828125 10.8203 C 0.59375 10.5859 0.5 10.3047 0.5 9.97655 C 0.5 9.6953 0.59375 9.41405 0.828125 9.17968 L 9.07812 1.30467 C 9.54688 0.8828 10.25 0.8828 10.6719 1.35155 C 11.0938 1.77342 11.0938 2.52342 10.625 2.9453 L 4.39062 8.85155 H 20.375 C 20.9844 8.85155 21.5 9.36718 21.5 9.97655 C 21.5 10.6328 20.9844 11.1016 20.375 11.1016 H 4.39062 L 10.625 17.0547 C 11.0938 17.4765 11.0938 18.1797 10.6719 18.6484 C 10.25 19.1172 9.54688 19.1172 9.07812 18.6953 L 0.828125 10.8203 Z&quot;
                  );
                "
              />
            </svg>
          </button>
          <div
            class="text-[#232043] font-red-hat-text font-medium w-[150px] pointer-events-auto"
          >
            Customers
          </div>
        </div>
        <div
          class="flex items-center font-normal gap-2 justify-end pointer-events-auto"
        >
          <button
            @click="saveForm"
            class="bg-[#815AF0] rounded-[6px] text-white text-sm font-medium gap-2 h-10 leading-5 pointer-events-auto border-transparent py-2 px-4"
          >
            Save
          </button>
        </div>
      </div>
    </div>

    <!-- Notifications Region -->
    <div
      role="region"
      aria-label="Notifications (F8)"
      tabindex="-1"
      class="font-normal pointer-events-auto"
    >
      <ol
        tabindex="-1"
        class="flex bottom-0 flex-col font-normal max-h-[1200px] max-w-[420px] pointer-events-auto fixed right-0 w-full z-[100] p-4"
      ></ol>
    </div>

    <div
      class="flex items-center flex-col font-normal justify-start min-h-[1200px] pointer-events-auto w-full"
    >
      <div
        class="bg-white font-normal overflow-x-hidden overflow-y-hidden w-full pointer-events-auto"
      >
        <div
          class="flex items-start bg-white flex-col font-normal w-full pointer-events-auto"
        >
          <div
            class="flex font-normal h-[952px] justify-between w-full pointer-events-auto"
          >
            <div
              class="flex items-center self-stretch flex-basis-0 flex-col flex-grow-1 font-normal pointer-events-auto p-10"
            >
              <div
                class="flex items-start self-stretch flex-col font-normal gap-10 max-w-[500px] w-full pointer-events-auto"
              >
                <!-- Item Details Section -->
                <div
                  class="flex items-start flex-col font-normal gap-4 w-full pointer-events-auto"
                >
                  <div
                    class="text-[#232043] pointer-events-auto font-red-hat-display text-xl font-medium leading-7"
                  >
                    Item details
                  </div>
                  <div
                    class="flex items-start font-normal gap-4 w-full pointer-events-auto"
                  >
                    <div
                      :class="[
                        'flex items-center bg-white border-[#D7D5E4] rounded-[5px] border flex-basis-0 flex-grow-1 font-normal gap-4 h-14 justify-center pointer-events-auto p-4',
                        formData.itemType === 'product'
                          ? 'border-[#815AF0]'
                          : '',
                      ]"
                      @click="formData.itemType = 'product'"
                    >
                      <div
                        class="flex items-center font-normal gap-2 pointer-events-auto"
                      >
                        <div
                          :class="[
                            'bg-[#815AF0] border-[#815AF0] rounded-full border-2 font-normal h-4 w-4 pointer-events-auto',
                            formData.itemType === 'product'
                              ? 'bg-[#815AF0] border-[#815AF0]'
                              : 'border-[#B1AFC5] bg-transparent',
                          ]"
                        >
                          <div
                            v-if="formData.itemType === 'product'"
                            class="flex items-center font-normal h-full justify-center w-full pointer-events-auto"
                          >
                            <div
                              class="bg-white rounded-full font-normal h-2 w-2 pointer-events-auto"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        :class="[
                          'text-[#7552D0] flex-basis-0 flex-grow-1 pointer-events-auto font-red-hat-text text-sm font-medium leading-5',
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
                        'flex items-center bg-white border-[#D7D5E4] rounded-[5px] border flex-basis-0 flex-grow-1 font-normal gap-4 h-14 justify-center pointer-events-auto p-4',
                        formData.itemType === 'service'
                          ? 'border-[#815AF0]'
                          : '',
                      ]"
                      @click="formData.itemType = 'service'"
                    >
                      <div
                        class="flex items-center font-normal gap-2 pointer-events-auto"
                      >
                        <div
                          :class="[
                            'border-[#B1AFC5] rounded-full border-2 font-normal h-4 w-4 pointer-events-auto',
                            formData.itemType === 'service'
                              ? 'bg-[#815AF0] border-[#815AF0]'
                              : 'border-[#B1AFC5]',
                          ]"
                        >
                          <div
                            v-if="formData.itemType === 'service'"
                            class="flex items-center font-normal h-full justify-center w-full pointer-events-auto"
                          >
                            <div
                              class="bg-white rounded-full font-normal h-2 w-2 pointer-events-auto"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        :class="[
                          'text-[#232043] flex-basis-0 flex-grow-1 pointer-events-auto font-red-hat-text text-sm font-medium leading-5',
                          formData.itemType === 'service'
                            ? 'text-[#7552D0]'
                            : 'text-[#232043]',
                        ]"
                      >
                        Service
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex items-start flex-col font-normal gap-2 w-full pointer-events-auto"
                  >
                    <label
                      class="text-[#232043] pointer-events-auto font-red-hat-text text-sm font-medium leading-5"
                    >
                      Product name
                    </label>
                    <input
                      v-model="formData.productName"
                      type="text"
                      placeholder="Enter product name"
                      class="border-[#D7D5E4] border block h-12 w-full pointer-events-auto p-3 font-red-hat-text text-sm font-normal leading-5"
                    />
                  </div>
                  <div
                    class="flex items-start flex-col font-normal gap-6 w-full pointer-events-auto"
                  >
                    <div
                      class="flex font-normal gap-6 w-full pointer-events-auto"
                    >
                      <div
                        class="flex items-start flex-basis-0 flex-col flex-grow-1 font-normal gap-2 w-1/2 pointer-events-auto"
                      >
                        <label
                          class="text-[#232043] gap-2 pointer-events-auto font-red-hat-text text-sm font-medium leading-5"
                        >
                          Category
                        </label>
                        <div
                          class="font-normal h-12 w-full pointer-events-auto"
                        >
                          <input
                            v-model="formData.category"
                            type="text"
                            placeholder="Search or add a new category"
                            class="inline-block border-[#D7D5E4] border text-[#6A6881] h-12 w-full pointer-events-auto p-3 font-red-hat-text text-sm font-normal leading-5"
                          />
                        </div>
                      </div>
                      <div
                        class="flex items-start flex-basis-0 flex-col flex-grow-1 font-normal gap-2 w-1/2 pointer-events-auto"
                      >
                        <label
                          class="text-[#232043] gap-2 pointer-events-auto font-red-hat-text text-sm font-medium leading-5"
                        >
                          Brand
                        </label>
                        <div
                          class="font-normal h-12 w-full pointer-events-auto"
                        >
                          <input
                            v-model="formData.brand"
                            type="text"
                            placeholder="Enter brand name"
                            class="inline-block border-[#D7D5E4] border h-12 w-full pointer-events-auto p-3 font-red-hat-text text-sm font-normal leading-5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Inventory Section -->
                <div
                  class="flex items-start flex-col font-normal gap-4 w-full pointer-events-auto"
                >
                  <div
                    class="flex items-start flex-col font-normal gap-1 w-full pointer-events-auto"
                  >
                    <div
                      class="text-[#232043] pointer-events-auto font-red-hat-display text-xl font-medium leading-7"
                    >
                      Inventory
                    </div>
                    <div
                      class="text-[#52506D] pointer-events-auto font-red-hat-text text-sm font-normal leading-5"
                    >
                      Add SKU, stock units to track inventory.
                    </div>
                  </div>
                  <div
                    class="flex items-start flex-col font-normal gap-6 w-full pointer-events-auto"
                  >
                    <div
                      class="flex font-normal gap-6 w-full pointer-events-auto"
                    >
                      <div
                        class="flex items-start flex-basis-0 flex-col flex-grow-1 font-normal gap-2 w-1/2 pointer-events-auto"
                      >
                        <label
                          class="text-[#232043] gap-2 pointer-events-auto font-red-hat-text text-sm font-medium leading-5"
                        >
                          SKU
                        </label>
                        <div
                          class="font-normal h-12 w-full pointer-events-auto"
                        >
                          <input
                            v-model="formData.sku"
                            type="text"
                            placeholder="Enter SKU"
                            class="inline-block border-[#D7D5E4] border h-12 w-full pointer-events-auto p-3 font-red-hat-text text-sm font-normal leading-5"
                          />
                        </div>
                      </div>
                      <div
                        class="flex items-start flex-basis-0 flex-col flex-grow-1 font-normal gap-2 w-1/2 pointer-events-auto"
                      >
                        <label
                          class="text-[#232043] gap-2 pointer-events-auto font-red-hat-text text-sm font-medium leading-5"
                        >
                          Barcode
                        </label>
                        <div
                          class="font-normal h-12 w-full pointer-events-auto"
                        >
                          <input
                            v-model="formData.barcode"
                            type="text"
                            placeholder="Enter barcode"
                            class="inline-block border-[#D7D5E4] border h-12 w-full pointer-events-auto p-3 font-red-hat-text text-sm font-normal leading-5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Track Inventory Checkbox -->
                  <div
                    class="flex items-center font-normal gap-2 w-full pointer-events-auto"
                  >
                    <div
                      :class="[
                        'flex items-center border-[#B1AFC5] rounded-[5px] border-2 font-normal h-4 justify-center w-4 pointer-events-auto',
                        formData.trackInventory
                          ? 'border-[#815AF0] bg-[#815AF0]'
                          : 'border-[#B1AFC5]',
                      ]"
                      @click="
                        formData.trackInventory = !formData.trackInventory
                      "
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
                      class="text-[#232043] pointer-events-auto font-red-hat-text text-sm font-normal leading-5"
                      @click="
                        formData.trackInventory = !formData.trackInventory
                      "
                    >
                      Track inventory for this product.
                    </label>
                  </div>
                </div>
                <!-- More Options Section -->
                <div
                  class="flex items-start flex-col font-normal gap-4 w-full pointer-events-auto"
                >
                  <div
                    class="flex items-start flex-col font-normal gap-1 w-full pointer-events-auto"
                  >
                    <div
                      class="text-[#232043] pointer-events-auto font-red-hat-display text-xl font-medium leading-7"
                    >
                      More options
                    </div>
                    <div
                      class="text-[#232043] pointer-events-auto font-red-hat-text text-sm font-normal leading-5"
                    >
                      Manage taxes, fees and shipping configurations.
                    </div>
                  </div>
                  <div
                    class="flex items-start flex-col font-normal gap-6 w-full pointer-events-auto"
                  >
                    <div
                      class="flex items-start flex-col font-normal gap-2 h-[76px] w-full pointer-events-auto"
                    >
                      <label
                        class="text-[#232043] gap-2 pointer-events-auto font-red-hat-text text-sm font-medium leading-5"
                      >
                        Tax exemption
                      </label>
                      <div class="font-normal h-12 w-full pointer-events-auto">
                        <input
                          v-model="formData.taxExemption"
                          type="text"
                          placeholder="Enter tax exemption"
                          class="inline-block border-[#D7D5E4] border h-12 w-full pointer-events-auto p-3 font-red-hat-text text-sm font-normal leading-5"
                        />
                      </div>
                    </div>
                  </div>
                  <!-- Shipping Fee Checkbox -->
                  <div
                    class="flex items-center font-normal gap-2 w-full pointer-events-auto"
                  >
                    <div
                      :class="[
                        'flex items-center border-[#B1AFC5] rounded-[5px] border-2 font-normal h-4 justify-center w-4 pointer-events-auto',
                        formData.shippingExempt
                          ? 'border-[#815AF0] bg-[#815AF0]'
                          : 'border-[#B1AFC5]',
                      ]"
                      @click="
                        formData.shippingExempt = !formData.shippingExempt
                      "
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
                      class="text-[#232043] pointer-events-auto font-red-hat-text text-sm font-normal leading-5"
                      @click="
                        formData.shippingExempt = !formData.shippingExempt
                      "
                    >
                      Exempt shipping fee on this item
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <!-- Right Container -->
            <div
              class="flex items-start bg-white border-[#D7D5E4] border-l flex-col font-normal gap-10 w-[566px] pointer-events-auto p-10 px-16"
            >
              <div
                class="flex items-start flex-col font-normal gap-6 w-full pointer-events-auto"
              >
                <div
                  class="flex items-start flex-col font-normal gap-6 w-full pointer-events-auto"
                >
                  <div
                    class="text-[#3B3858] text-center uppercase tracking-[1.92px] w-full pointer-events-auto font-red-hat-text text-xs font-medium leading-4"
                  >
                    ITEM SUMMARY
                  </div>
                  <!-- Item Summary Card -->
                  <div
                    class="flex items-center bg-gradient-to-r from-[#FAEFFF] to-[#EFEFFF] rounded-[10px] flex-col font-normal gap-6 justify-center w-full pointer-events-auto p-6"
                  >
                    <div
                      class="flex items-center flex-col font-normal gap-2 w-[200px] pointer-events-auto"
                    >
                      <div
                        class="flex items-start font-normal pointer-events-auto"
                      >
                        <div
                          class="bg-[#EEE7FF] rounded-[45px] text-[#7552D0] pointer-events-auto px-4 py-1 font-red-hat-text text-xs font-medium leading-4"
                        >
                          Selling price
                        </div>
                      </div>
                      <div
                        class="text-[#232043] text-center w-full pointer-events-auto font-red-hat-display text-2xl font-medium leading-8"
                      >
                        ${{ formatPrice(formData.sellingPrice) }}
                      </div>
                    </div>
                    <div
                      class="flex items-center bg-white border-[#F9F8FE] rounded-[5px] border font-normal gap-4 w-full pointer-events-auto p-4"
                    >
                      <div
                        class="bg-[#815AF0] rounded-[5px] text-white h-10 w-10 pointer-events-auto font-red-hat-text text-sm font-normal leading-5"
                      >
                        PP
                      </div>
                      <div
                        class="text-[#232043] flex-basis-0 flex-grow-1 pointer-events-auto font-red-hat-text text-sm font-medium leading-5"
                      >
                        {{ formData.productName || "Premium paw dog food" }}
                      </div>
                    </div>
                  </div>
                  <!-- Description -->
                  <div
                    class="flex items-start flex-col font-normal gap-4 w-full pointer-events-auto"
                  >
                    <div
                      class="flex items-center font-normal gap-2 w-full pointer-events-auto"
                    >
                      <div
                        class="text-[#3B3858] w-[150px] pointer-events-auto font-red-hat-text text-sm font-medium leading-5"
                      >
                        Description
                      </div>
                      <div
                        class="text-[#232043] flex-basis-0 flex-grow-1 overflow-hidden text-right text-ellipsis pointer-events-auto font-red-hat-text text-sm font-normal leading-5"
                      >
                        {{
                          formData.description ||
                          "Premium Paws Gourmet Blend is made with only the finest, all-natural ingredie"
                        }}
                      </div>
                    </div>
                  </div>
                  <!-- Category and Brand Section -->
                  <div
                    class="flex items-start border-[#EEEDF6] border-t border-x-0 border-b-0 flex-col font-normal gap-4 pt-4 w-full pointer-events-auto"
                  >
                    <div
                      class="flex items-center font-normal gap-2 w-full pointer-events-auto"
                    >
                      <div
                        class="text-[#232043] w-[150px] pointer-events-auto font-red-hat-text text-sm font-medium leading-5"
                      >
                        Category
                      </div>
                      <div
                        class="text-[#232043] flex-basis-0 flex-grow-1 overflow-hidden text-right text-ellipsis pointer-events-auto font-red-hat-text text-sm font-normal leading-5"
                      >
                        {{ formData.category || "Dog food" }}
                      </div>
                    </div>
                    <div
                      class="flex items-center font-normal gap-2 w-full pointer-events-auto"
                    >
                      <div
                        class="text-[#232043] w-[150px] pointer-events-auto font-red-hat-text text-sm font-medium leading-5"
                      >
                        Brand name
                      </div>
                      <div
                        class="text-[#232043] flex-basis-0 flex-grow-1 overflow-hidden text-right text-ellipsis pointer-events-auto font-red-hat-text text-sm font-normal leading-5"
                      >
                        {{ formData.brand || "Premium paws" }}
                      </div>
                    </div>
                  </div>
                  <!-- Taxes Section -->
                  <div
                    class="flex items-start border-[#EEEDF6] border-t border-x-0 border-b-0 flex-col font-normal gap-4 pt-4 w-full pointer-events-auto"
                  >
                    <div
                      class="flex items-center font-normal gap-2 w-full pointer-events-auto"
                    >
                      <div
                        class="flex items-center font-normal gap-2 pointer-events-auto"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class="block fill-none font-normal h-5 overflow-clip-margin-content-box overflow-hidden w-5 pointer-events-auto"
                        >
                          <path
                            d="M17.5 7.5L2.5 2.5V17.5L7.5 15L12.5 17.5L17.5 15V7.5Z"
                            stroke="#232043"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="inline fill-none font-normal stroke-[#232043] stroke-linecap-round stroke-linejoin-round stroke-width-1.5 transform-origin-0 pointer-events-auto"
                            style="
                              d: path(
                                &quot;M 17.5 7.5 L 2.5 2.5 V 17.5 L 7.5 15 L 12.5 17.5 L 17.5 15 V 7.5 Z&quot;
                              );
                            "
                          />
                          <path
                            d="M7.5 10L12.5 15"
                            stroke="#232043"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="inline fill-none font-normal stroke-[#232043] stroke-linecap-round stroke-linejoin-round stroke-width-1.5 transform-origin-0 pointer-events-auto"
                            style="d: path(&quot;M 7.5 10 L 12.5 15&quot;)"
                          />
                          <path
                            d="M12.5 10C13.0523 10 13.5 9.55228 13.5 9C13.5 8.44772 13.0523 8 12.5 8C11.9477 8 11.5 8.44772 11.5 9C11.5 9.55228 11.9477 10 12.5 10Z"
                            fill="#232043"
                            class="inline fill-[#232043] font-normal transform-origin-0 pointer-events-auto"
                            style="
                              d: path(
                                &quot;M 12.5 10 C 13.0523 10 13.5 9.55228 13.5 9 C 13.5 8.44772 13.0523 8 12.5 8 C 11.9477 8 11.5 8.44772 11.5 9 C 11.5 9.55228 11.9477 10 12.5 10 Z&quot;
                              );
                            "
                          />
                          <path
                            d="M7.5 15C8.05228 15 8.5 14.5523 8.5 14C8.5 13.4477 8.05228 13 7.5 13C6.94772 13 6.5 13.4477 6.5 14C6.5 14.5523 6.94772 15 7.5 15Z"
                            fill="#232043"
                            class="inline fill-[#232043] font-normal transform-origin-0 pointer-events-auto"
                            style="
                              d: path(
                                &quot;M 7.5 15 C 8.05228 15 8.5 14.5523 8.5 14 C 8.5 13.4477 8.05228 13 7.5 13 C 6.94772 13 6.5 13.4477 6.5 14 C 6.5 14.5523 6.94772 15 7.5 15 Z&quot;
                              );
                            "
                          />
                        </svg>
                        <div
                          class="text-[#232043] w-[150px] pointer-events-auto font-red-hat-text text-sm font-medium leading-5"
                        >
                          Taxes
                        </div>
                      </div>
                      <div
                        class="text-[#232043] flex-basis-0 flex-grow-1 overflow-hidden text-right text-ellipsis pointer-events-auto font-red-hat-text text-sm font-normal leading-5"
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
                class="flex items-start border-[#D7D5E4] rounded-[5px] border flex-col font-normal gap-6 w-full pointer-events-auto p-4"
              >
                <div
                  class="flex items-start flex-col font-normal gap-2 w-full pointer-events-auto"
                >
                  <div
                    class="flex items-center font-normal gap-3 justify-between w-full pointer-events-auto"
                  >
                    <div
                      class="text-[#232043] pointer-events-auto font-red-hat-display text-lg font-medium leading-7"
                    >
                      Availability
                    </div>
                    <div
                      class="font-normal h-5 relative w-8 pointer-events-auto"
                      @click="formData.available = !formData.available"
                    >
                      <div
                        :class="[
                          'absolute animation-duration-0.2s bg-[#815AF0] rounded-full font-normal h-5 transition-colors duration-200 w-8 pointer-events-auto transition-timing-function-cubic-bezier',
                          formData.available ? 'bg-[#815AF0]' : 'bg-gray-300',
                        ]"
                      />
                      <div
                        :class="[
                          'absolute animation-duration-0.2s bg-white rounded-full shadow-md font-normal h-5 top-0 transition-transform duration-200 w-5 transform pointer-events-auto transition-timing-function-cubic-bezier',
                          formData.available
                            ? 'translate-x-3'
                            : 'translate-x-0',
                        ]"
                        style="
                          box-shadow:
                            rgba(0, 0, 0, 0) 0px 0px 0px 0px,
                            rgba(0, 0, 0, 0) 0px 0px 0px 0px,
                            rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
                            rgba(0, 0, 0, 0.1) 0px 2px 4px -2px;
                          transform: matrix(1, 0, 0, 1, 12, 0);
                        "
                      />
                    </div>
                  </div>
                  <div
                    class="text-[#52506D] pointer-events-auto font-red-hat-text text-sm font-normal leading-5"
                  >
                    Item available. Disable the toggle when the item is
                    unavailable or out of stock.
                  </div>
                </div>
              </div>
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

.font-red-hat-text {
  font-family:
    "Red Hat Text",
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
}

.font-red-hat-display {
  font-family:
    "Red Hat Display",
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
}

.flex-basis-0 {
  flex-basis: 0%;
}

.flex-grow-0 {
  flex-grow: 0;
}

.flex-grow-1 {
  flex-grow: 1;
}

.animation-duration-0.2s {
  animation-duration: 0.2s;
}

.transition-timing-function-cubic-bezier {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Toggle switch styling */
.toggle-switch {
  position: relative;
  display: inline-block;
  width: 32px;
  height: 20px;
}

.pointer-events-auto {
  pointer-events: auto;
}
</style>
