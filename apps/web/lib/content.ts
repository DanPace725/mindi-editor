export const defaultEditorContent = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: { level: 2 },
      content: [{ type: "text", text: "Say hello to Mindi" }],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://github.com/DanPace725/mindi",
                target: "_blank",
              },
            },
          ],
          text: "Mindi",
        },
        {
          type: "text",
          text: " Your Conversational Companion and Memory Aide ",
        },
        {
          type: "text",
          text: " Meet Mindi, the fusion of conversational AI and advanced note-taking, designed to remember so you don't have to. Effortlessly toggle between engaging chats and organized note-taking. With Mindi, every conversation enriches your notes, creating a dynamic, searchable memory bank. Mindi doesn't just respond; it recalls, stores, and organizes your thoughts and interactions seamlessly",
        },
        {
          type: "text",
          text: " Credit to  ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://github.com/steven-tey/novel",
                target: "_blank",
              },
            },
          ],
          text: "steven-tey",
        },
        { type: "text", text: " and " },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://github.com/mckaywrigley/chatbot-ui-lite",
                target: "_blank",
              },
            },
          ],
          text: "mckaywrigley",
        },
        {
          type: "text",
          text: " for inspiration.",
        },
      ],  
    },
  ],
}