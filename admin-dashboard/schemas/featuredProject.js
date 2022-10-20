export default {
  name: "featuredProject",
  title: "Featured Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Project Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Project Image",
      type: "image",
      description: "Recommended size width:534px, height: 262px",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tags1",
      title: "Tags",
      description: "Give max of one tag in each fields",
      type: "string",
    },
    {
      name: "tags2",
      title: "Tags",
      type: "string",
    },
    {
      name: "tags3",
      title: "Tags",
      type: "string",
    },
    {
      name: "tags4",
      title: "Tags",
      type: "string",
    },
  ],
};
