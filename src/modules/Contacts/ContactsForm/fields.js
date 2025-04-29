const fields = {
    username: {
        label: "",
        type: "text",
        placeholder: "Ваше имя",
        name: "username",
        rules: {
            required: "Username must be exist"
        }
    },
    email: {
        label: "",
        type: "email",
        placeholder: "Ваш еmail",
        name: "email",
        rules: {
            required: "Email must be exist"
        }
    },
    textarea: {
        label: "",
        type: "text",
        placeholder: "Ваше сообщения",
        name: "textarea",
        rules: {
            required: "Ваше сообщение должно быть написано"
        }
    },
};

export default fields;