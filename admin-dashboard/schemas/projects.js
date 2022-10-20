export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title:",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Project Image:",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Project Brief:",
      type: "text",
    },
  ],
};
