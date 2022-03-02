Evergage.init({
  account: "axxonconsultingsa",
  dataset: "testmv",
  cookiedomain: "https://trusting-euler-f5ef8a.netlify.app/",
  trackerUrl: "https://axxonconsultingsa.us-5.evergage.com",
}).then(() => {
  const config = {
    global: {
      onActionEvent: (event) => {
        var userData = interactionStudioExperienceCloudHelpers.userData;
        if (userData) {
          event.user = event.user || {};
          event.user.attributes = event.user.attributes || {};
          event.user.attributes.experienceCloudUserId = userData?.id;
          event.user.attributes.emailAddress = userData?.fields?.Email?.value;
        }
        return event;
      },
      listeners: [
        Evergage.listener("click", ".button", () => {
          const customer = Evergage.cashDom(".input").val();
          if (customer) {
            Evergage.sendEvent({
              action: "First test",
              user: {
                customerId: customer,
                id: customer,
                emailAddress: "EmailTest@test.com",
              },
            });
          }
        }),
      ],
    },
    pageTypeDefault: {
      name: "default",
    },
    pageTypes: [
      {
        name: "home",
        action: "Homepage",
        isMatch: () => {
          return window.location.pathname === "/";
        },
        contentZones: [{ name: "home", selector: ".content" }],
      },
    ],
    // pageTypes: [
    // {
    //   name: "product_detail",
    //   isMatch: () => {
    //     return (
    //       Evergage.cashDom("div.page[data-action='Product-Show']").length > 0
    //     );
    //   },
    //   catalog: {
    //     // added in this step
    //     Product: {
    //       _id: () => {
    //         const products = getProductsFromDataLayer() || [];
    //         if (products.length > 0) {
    //           return products[0].id;
    //         } else {
    //           return Evergage.cashDom(".product-detail[data-pid]").attr(
    //             "data-pid"
    //           );
    //         }
    //       },
    //       name: Evergage.resolvers.fromJsonLd("name"),
    //       url: Evergage.resolvers.fromHref(),
    //       imageUrl: Evergage.resolvers.fromSelectorAttribute(
    //         ".product-carousel .carousel-item[data-slick-index='0'] img",
    //         "src"
    //       ),
    //       inventoryCount: 1,
    //       price: Evergage.resolvers.fromSelector(".prices .price .value"),
    //       categories: Evergage.resolvers.buildCategoryId(
    //         ".container .product-breadcrumb .breadcrumb a",
    //         null,
    //         null,
    //         (categoryId) => [categoryId.toUpperCase()]
    //       ), // added in this step
    //       dimensions: {
    //         // added in this step
    //         Gender: () => {
    //           if (
    //             Evergage.cashDom(".product-breadcrumb .breadcrumb a")
    //               .first()
    //               .text()
    //               .toLowerCase() === "women" ||
    //             Evergage.cashDom("h1.product-name").text().indexOf("Women") >=
    //               0
    //           ) {
    //             return ["WOMEN"];
    //           } else if (
    //             Evergage.cashDom(".product-breadcrumb .breadcrumb a")
    //               .first()
    //               .text()
    //               .toLowerCase() === "men" ||
    //             Evergage.cashDom("h1.product-name").text().indexOf("Men") >= 0
    //           ) {
    //             return ["MEN"];
    //           }
    //         },
    //         Color: Evergage.resolvers.fromSelectorAttributeMultiple(
    //           ".color-value",
    //           "data-attr-value"
    //         ),
    //         Feature: Evergage.resolvers.fromSelectorMultiple(
    //           ".features .feature",
    //           (features) => {
    //             return features.map((feature) => {
    //               return feature.trim();
    //             });
    //           }
    //         ),
    //       },
    //     },
    //   },
    // contentZones: [
    //   {
    //     name: "product_detail_recs_row_1",
    //     selector: ".row.recommendations div[id*='cq']:nth-of-type(1)",
    //   },
    //   {
    //     name: "product_detail_recs_row_2",
    //     selector: ".row.recommendations div[id*='cq']:nth-of-type(2)",
    //   },
    //   { name: "product_detail_popup" },
    // ],

    // listeners: [
    //   // added in this step
    //   Evergage.listener("click", "#button", () => {
    //     const lineItem = Evergage.util.buildLineItemFromPageState(
    //       "select[id*=quantity]"
    //     );
    //     lineItem.sku = {
    //       _id: Evergage.cashDom(".product-detail[data-pid]").attr("data-pid"),
    //     };
    //     Evergage.sendEvent({
    //       itemAction: Evergage.ItemAction.AddToCart,
    //       cart: {
    //         singleLine: {
    //           Product: lineItem,
    //         },
    //       },
    //     });
    //   }),
    // ],
    //   },
    //   {
    //     name: "category",
    //     isMatch: () => {
    //       return (
    //         Evergage.cashDom(".page[data-action='Search-Show']").length > 0 &&
    //         Evergage.cashDom(".breadcrumb").length > 0
    //       );
    //     },
    //     catalog: {
    //       Category: {
    //         _id: Evergage.resolvers.buildCategoryId(
    //           ".breadcrumb .breadcrumb-item a",
    //           1,
    //           null,
    //           (categoryId) => categoryId.toUpperCase()
    //         ),
    //       },
    //     },
    //   },
    //   {
    //     name: "home",
    //     action: "Homepage",
    //     isMatch: () => /\/homepage/.test(window.location.href),
    //     contentZones: [
    //       {
    //         name: "home_hero",
    //         selector: ".experience-carousel-bannerCarousel",
    //       },
    //       {
    //         name: "home_sub_hero",
    //         selector:
    //           ".experience-carousel-bannerCarousel + .experience-component",
    //       },
    //       { name: "home_popup" },
    //     ],
    //   },
    // ],
  };

  /**
   * The following listener waits until user data is sent from
   * the Data Capture LWC and then initializes Interaction
   * Studio sitemap. It also reinitilizes the sitemap in case the
   * URL of the webpage changes, because Experience Cloud works as
   * a Single Page Application
   */

  // This is a helper function created to help complete these labs.
  // const getProductsFromDataLayer = () => {
  //   if (window.dataLayer) {
  //     for (let i = 0; i < window.dataLayer.length; i++) {
  //       if (
  //         (
  //           (window.dataLayer[i].ecommerce &&
  //             window.dataLayer[i].ecommerce.detail) ||
  //           {}
  //         ).products
  //       ) {
  //         return window.dataLayer[i].ecommerce.detail.products;
  //       }
  //     }
  //   }
  // };

  Evergage.initSitemap(config);
});
