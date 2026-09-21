import ReactDom from "react-dom/client";

/*

Header
    - Logo
    - Nav Items
Body
    - Search Container
    - Restaurant Container
        -  Restaurant Card
Footer
    - Copyright
    - Links
    - Address
    - Contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="" alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Login</li>
          <li>Carts</li>
        </ul>
      </div>
    </div>
  );
};

const style= { backgroundColor: '#f0f0f0' }

const RestaurantCard = (props) => {
    const { resInfo: { info } } = props;
    console.log(info);
  return (
  <div className="res-card" style={style}>
    <img className="res-logo" src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+info.cloudinaryImageId}/>
    <h1>{info.name}</h1>
    <h4>{info.cuisines.join(', ')}</h4>
    <h4>{info.avgRatingString} Stars</h4>
    <h4>{info.costForTwo}</h4>
    <h4>{info.sla.slaString}</h4>
  </div>);
};

const resList = [
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "1261672",
            "name": "DI Nilgiris cafe",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/14/5aa648a1-6114-4321-b69f-9f206d7010d1_1261672.jpg",
            "locality": "Central Erode",
            "areaName": "Central Erode",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Chaat",
                "Ice Cream",
                "Sweets",
                "Snacks",
                "Pizzas",
                "Waffle",
                "Fast Food",
                "Burgers",
                "Cafe"
            ],
            "avgRating": 4,
            "parentId": "718610",
            "avgRatingString": "4.0",
            "totalRatingsString": "84",
            "sla": {
                "deliveryTime": 50,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "45-55 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-09-21 06:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "android/static-assets/icons/big_rx.png",
                        "description": "bolt!"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "android/static-assets/icons/big_rx.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-1e3505a2-c79b-4660-9c03-3342f46b53d3"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/erode/di-nilgiris-cafe-central-erode-rest1261672",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "1346370",
            "name": "Wow! Momo",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/25/edfb9acb-a4a1-492a-92eb-22882a5cab76_1346370.JPG",
            "locality": "National Highway",
            "areaName": "Erode Texvalley Mall",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Momos",
                "Chinese",
                "fastfood",
                "Asian",
                "Beverages"
            ],
            "avgRating": 4.5,
            "parentId": "1776",
            "avgRatingString": "4.5",
            "totalRatingsString": "41",
            "sla": {
                "deliveryTime": 64,
                "lastMileTravel": 13.6,
                "serviceability": "SERVICEABLE_WITH_BANNER",
                "slaString": "60-70 mins",
                "lastMileTravelString": "13.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextOpenTimeMessage": "Opens next at 10 am, today"
            },
            "badges": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                    "text": "BENEFITS"
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-1e3505a2-c79b-4660-9c03-3342f46b53d3"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/erode/wow-momo-national-highway-erode-texvalley-mall-rest1346370",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "783789",
            "name": "McDonald's",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/18/74126aa5-a7af-40ec-b7e2-c06f801edf75_783789.JPG",
            "locality": "value mall",
            "areaName": "Gangapuram",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "630",
            "avgRatingString": "4.3",
            "totalRatingsString": "703",
            "sla": {
                "deliveryTime": 373,
                "lastMileTravel": 13.1,
                "serviceability": "SERVICEABLE_WITH_BANNER",
                "slaString": "368-378 mins",
                "lastMileTravelString": "13.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextOpenTimeMessage": "Opens next at 10 am, today"
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                        "description": "Top-rated for Burger, based on user votes."
                    },
                    {
                        "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                        "description": "Top-rated for Corporate, based on user votes."
                    }
                ]
            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Top-rated for Burger, based on user votes.",
                                    "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                    "theme": ""
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Top-rated for Corporate, based on user votes.",
                                    "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                                    "theme": ""
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹499",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                    "text": "BENEFITS"
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-1e3505a2-c79b-4660-9c03-3342f46b53d3"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/erode/mcdonalds-value-mall-gangapuram-rest783789",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "1346371",
            "name": "Wow! China",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/11/f09a5f27-8316-4c68-9518-c935b227e0df_1346371.jpg",
            "locality": "National Highway",
            "areaName": "Erode Texvalley Mall",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Chinese",
                "Asian",
                "fastfood",
                "Beverages",
                "Snacks"
            ],
            "avgRating": 3.8,
            "parentId": "226836",
            "avgRatingString": "3.8",
            "totalRatingsString": "54",
            "sla": {
                "deliveryTime": 372,
                "lastMileTravel": 13.6,
                "serviceability": "SERVICEABLE_WITH_BANNER",
                "slaString": "368-378 mins",
                "lastMileTravelString": "13.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextOpenTimeMessage": "Opens next at 10 am, today"
            },
            "badges": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                    "text": "BENEFITS"
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-1e3505a2-c79b-4660-9c03-3342f46b53d3"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/erode/wow-china-national-highway-erode-texvalley-mall-rest1346371",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "220296",
            "name": "Hotel Paviesh Park",
            "cloudinaryImageId": "il8tczj17m9ec4d17zdt",
            "areaName": "Lakshmi Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Desserts",
                "Chinese",
                "South Indian",
                "Ice Cream",
                "Biryani"
            ],
            "avgRating": 4.3,
            "parentId": "101049",
            "avgRatingString": "4.3",
            "totalRatingsString": "5.7K+",
            "sla": {
                "deliveryTime": 63,
                "lastMileTravel": 12.5,
                "serviceability": "SERVICEABLE_WITH_BANNER",
                "slaString": "60-70 mins",
                "lastMileTravelString": "12.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextOpenTimeMessage": "Opens next at 7:30 am, today"
            },
            "badges": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹200 OFF",
                "subHeader": "ABOVE ₹999",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                    "text": "BENEFITS"
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-1e3505a2-c79b-4660-9c03-3342f46b53d3"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/erode/hotel-paviesh-park-lakshmi-nagar-rest220296",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "783790",
            "name": "McCafe by McDonald's",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/19/4fe92a14-c9e0-439a-bd20-4b945d470e58_783790.jpg",
            "locality": "value mall",
            "areaName": "Gangapuram",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Beverages",
                "Desserts"
            ],
            "avgRating": 3.3,
            "veg": true,
            "parentId": "8263",
            "avgRatingString": "3.3",
            "totalRatingsString": "11",
            "sla": {
                "deliveryTime": 374,
                "lastMileTravel": 13.1,
                "serviceability": "SERVICEABLE_WITH_BANNER",
                "slaString": "368-378 mins",
                "lastMileTravelString": "13.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextOpenTimeMessage": "Opens next at 10 am, today"
            },
            "badges": {},
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-1e3505a2-c79b-4660-9c03-3342f46b53d3"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/erode/mccafe-by-mcdonalds-value-mall-gangapuram-rest783790",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "1346372",
            "name": "Wow! Kulfi",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/11/46fa6fda-2230-4a0f-98b1-01e330c7f7c7_1346372.jpg",
            "locality": "National Highway",
            "areaName": "Erode Texvalley Mall",
            "costForTwo": "₹120 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 5,
            "veg": true,
            "parentId": "501088",
            "avgRatingString": "5.0",
            "totalRatingsString": "5",
            "sla": {
                "deliveryTime": 363,
                "lastMileTravel": 13.6,
                "serviceability": "SERVICEABLE_WITH_BANNER",
                "slaString": "358-368 mins",
                "lastMileTravelString": "13.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextOpenTimeMessage": "Opens next at 10 am, today"
            },
            "badges": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "70% OFF",
                "subHeader": "UPTO ₹140",
                "logoCtx": {
                    "text": "BENEFITS"
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-1e3505a2-c79b-4660-9c03-3342f46b53d3"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/erode/wow-kulfi-national-highway-erode-texvalley-mall-rest1346372",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "783791",
            "name": "McDonald's Gourmet Burger Collection",
            "cloudinaryImageId": "e233fb34d70482545b018b5b169fe18e",
            "locality": "value mall",
            "areaName": "Gangapuram",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            "avgRating": 4,
            "parentId": "10761",
            "avgRatingString": "4.0",
            "totalRatingsString": "50",
            "sla": {
                "deliveryTime": 369,
                "lastMileTravel": 13.1,
                "serviceability": "SERVICEABLE_WITH_BANNER",
                "slaString": "363-373 mins",
                "lastMileTravelString": "13.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextOpenTimeMessage": "Opens next at 10 am, today"
            },
            "badges": {},
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-1e3505a2-c79b-4660-9c03-3342f46b53d3"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/erode/mcdonalds-gourmet-burger-collection-value-mall-gangapuram-rest783791",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
];

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">Search</div>
      <div className="restaurant-container">
            {resList.map((resData) =>  <RestaurantCard resInfo={resData} />)}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="copy-rights">@C Food Order App</div>
      <div className="app-links">
        <ul>
          <li>Privacy</li>
        </ul>
      </div>
      <div className="contact-info">
        <ul>
          <li>Address</li>
          <li>Contacts</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
// console.log(root);

root.render(<AppLayout />);
