export default {
  name: "products",
  title: "Products",
  description: "To change services in homepage",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Product Brief",
      type: "text",
    },
    {
      name: "slug",
      title: "Generate Url",
      description: "Unique website link for better user experience...",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
      description: "Recommended size width:220px, height: 220px",
      options: {
        hotspot: true,
      },
    },
    {
      name: "metaTagTitle",
      title: "Title for SEO",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "metaTagKeyword",
      title: "Keywords for SEO",
      description:
        "Recommended keyword generator 'https://ahrefs.com/keyword-generator'. Separate keywords by comma','",
      type: "text",
    },
  ],
};
