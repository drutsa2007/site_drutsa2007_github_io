const data = [
    {
        name: "Windows",
        caption: "Запуск в Windows",
        data: [
            ["ngrok config add-authtoken TOKEN", "Добавить в конфигурация свой TOKEN полученный при регистрации"],
            ["ngrok http PORT", "Запустить по порту PORT"],
        ]
    },
    {
        name: "Linux",
        caption: "Запуск в Linux",
        data: [
            ["./ngrok config add-authtoken TOKEN", "Добавить в конфигурация свой TOKEN полученный при регистрации"],
            ["./ngrok http PORT", "Запустить по порту PORT"],
        ]
    },
];

export default data;
