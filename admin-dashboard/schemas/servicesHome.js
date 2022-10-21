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
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
      ],
    },
    {
      name: "carouselTitle",
      title: "Title",
      type: "string",
    },
  ],
};
