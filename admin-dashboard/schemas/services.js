export default {
  name: "services",
  title: "Services",
  type: "document",
  fields: [
    {
      name: "servicesImage",
      title: "Image",
      type: "image",
      description: "Recommended size width:534px, height: 262px",
      options: {
        hotspot: true,
      },
    },
    {
      name: "servicesTitle",
      title: "Title of the service",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "servicesSlug",
      title: "Generate Url",
      description: "Unique website link for better user experience...",
      type: "slug",
      options: {
        source: "servicesTitle",
        maxLength: 96,
      },
    },
    {
      name: "servicesDescription",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
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
