SalesforceInteractions.init({
    account: "axxonconsultingsa",
    dataset: "mvtest",
    cookiedomain: "https://interactionmv.netlify.app/",
    trackerUrl: "https://axxonconsultingsa.us-5.evergage.com",
  }).then(() => {
    const sitemapConfig = {
      global: {
        onActionEvent: (actionEvent) => {
          var userData = interactionStudioExperienceCloudHelpers.userData;
  
          if (userData) {
            actionEvent.user = actionEvent.user || {};
            actionEvent.user.attributes = actionEvent.user.attributes || {};
            actionEvent.user.attributes.experienceCloudUserId = userData?.id;
            actionEvent.user.attributes.emailAddress = userData?.fields?.Email?.value;
          }
  
          return actionEvent;
        },
        contentZones: [
          { 
            name: "global_infobar_top_of_page", 
            selector: "body > div.content > div.image" 
          },
          { 
            name: "category_recs", 
            selector: ".buttons-content" 
          }
        ],
        listeners: [
          SalesforceInteractions.listener("click", ".button", () => {
            const customer = SalesforceInteractions.cashDom(".input").val();
            if (customer) {
              SalesforceInteractions.sendEvent({
                action: "Submit id",
                user: {
                  customerId: customer,
                  id: customer,
                  attributes: {
                    emailAddress: "test@test.com",
                  },
                },
              });
            }
          }),
          SalesforceInteractions.listener("click", ".image", () => {
            const customer = SalesforceInteractions.cashDom(".input").val();
            if (customer) {
              SalesforceInteractions.sendEvent({
                action: "Click on image",
                user: {
                  customerId: customer,
                  id: customer,
                  attributes: {
                    emailAddress: "billybob@example.com",
                  },
                },
              });
            }
          }),
          SalesforceInteractions.listener("click", ".button-one", () => {
            const customer = SalesforceInteractions.cashDom(".input").val();
            if (customer) {
              SalesforceInteractions.sendEvent({
                action: "Cat appears",
                user: {
                  customerId: customer,
                  id: customer,
                  attributes: {
                    emailAddress: "billybob@example.com",
                  },
                },
              });
            }
          }),
          SalesforceInteractions.listener("click", ".button-two", () => {
            const customer = SalesforceInteractions.cashDom(".input").val();
            if (customer) {
              SalesforceInteractions.sendEvent({
                action: "France appears",
                user: {
                  customerId: customer,
                  id: customer,
                  attributes: {
                    emailAddress: "billybob@example.com",
                  },
                },
              });
            }
          })
        ],
      },
      pageTypeDefault: {
        name: "default",
        interaction: {
          name: "Default Page"
        }
      },
      pageTypes: [
  {
          name: "home",
          action: "Homepage",
          isMatch: () => {
            return window.location.pathname === "/";
          },
          contentZones: [
            { 
              name: "global_infobar_top_of_page", 
              selector: "body > div.content > div.image" 
            }
          ],
        },
      ],
    };
  
    SalesforceInteractions.initSitemap(sitemapConfig);
  });