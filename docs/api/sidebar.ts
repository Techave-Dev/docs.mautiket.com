import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/mautiket-admin-order-api",
    },
    {
      type: "category",
      label: "Orders",
      items: [
        {
          type: "doc",
          id: "api/list-admin-orders",
          label: "List admin orders",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/admin-create-order",
          label: "Admin create order",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/admin-get-order-detail",
          label: "Admin get order detail",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/admin-checkout-order",
          label: "Admin checkout order",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/admin-download-invoice",
          label: "Admin download invoice",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/admin-cancel-order",
          label: "Admin cancel order",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
