export const initialForm = {
    name: "",
    email: "",
    message: "",
};

export const formFields = [
    {
        name: "name",
        label: "Name",
        type: "text",
        placeholder: "Your full name",
        required: true,
    },
    {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "you@example.com",
        required: true,
    },
    {
        name: "message",
        label: "Message",
        type: "textarea",
        placeholder: "Write your message here...",
        rows: 6,
        required: true,
    }
];
