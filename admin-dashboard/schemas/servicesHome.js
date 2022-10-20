export default {
  name: "servicesHome",
  title: "Home - Service Carousel",
  description: "To change services in homepage",
  type: "document",
  fields: [
    {
      name: "carouselImage",
      title: "Service Carousel Images",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "carouselTitle",
      title: "Title",
      type: "string",
    },
  ],
};
