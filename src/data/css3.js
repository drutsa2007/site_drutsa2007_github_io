const data = [
    {
        name: "Transform",
        caption: "transform",
        description: "Трансформирует элемент при событии",
        parent: false,
        browsers: [
            [
                "-webkit-transform",
                "-moz-transform", 
                "-ms-transform",
                "-o-transform",
                "transform",
            ],
        ],
        values: [
            ["rotate(N)", "Поворот на N градусов"],
            ["scale(sx, [sy])", "Масштаб в процентах"],
            ["scaleX", "Масштаб по горизонтали"],
            ["scaleY", "Масштаб по вертикали"],
            ["skew(sx, [sy])", "Наклон по горизонтали"],
            ["skewX", "Наклон по горизонтали"],
            ["skewY", "Наклон по вертикали"],
            ["translate(tx, [ty])", "Сдвиг по осям"],
            ["translateX", "Сдвиг по горизонтали"],
            ["translateY", "Сдвиг по вертикали"],
        ],
    },
    {
        name: "Transition",
        caption: "transition",
        description: "Трансформирует элемент",
        parent: "transition: PROPERTY DURATION TIMING-FUNCTION DELAY",
        browsers: [
            [
                "-webkit-transition", 
                "-moz-transition", 
                "-ms-transition", 
                "-o-transition", 
                "transition", 
            ],
        ],
        values: [
            ["", ""],
        ],
    },
];

export default data;
