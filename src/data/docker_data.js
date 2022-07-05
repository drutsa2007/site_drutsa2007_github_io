const data = [
    {
        name: "Images",
        caption: "Работа с образами",
        data: [
            ["docker search SEARCH", "поиск в docker hub по значению SEARCH"],
            ["docker images", "список локальных образов"],
            ["docker rmi REPOSITORY|IMAGE_ID", "удаляет образ по REPOSITORY или IMAGE_ID"],
            ["docker image inspect IMAGE", "подробная информация об образе"],
        ]
    },
    {
        name: "Containers",
        caption: "Работа с контейнерами",
        data: [
            ["docker ps", "посмотреть запущенные контейнеры"],
            ["docker ps -a", "посмотреть все контейнеры"],

            ["docker run -d IMAGE", "запускает образ IMAGE в контейнер или скачает из docker hub если его нет локально"],
            ["docker run -d IMAGE:TAG", "скачает образ IMAGE из docker hub по тегу TAG если его нет локально"],
            ["docker run -d --name=NAME IMAGE:TAG", "скачает образ IMAGE из docker hub по тегу TAG и задаст ему имя NAME"],
            ["-d, --detach", "запустить в фоновом режиме"],
            
            ["docker start CONTAINER_ID", "запустит контейнер по идентификатору"],
            ["docker stop CONTAINER_ID", "остановить контейнер по идентификатору"],
            
            ["docker rm --force CONTAINER_ID", "останавливает и потом удаляет (--force) контейнер по идентификатору"],
            ["docker rm CONTAINER_ID", "удалить остановленный контейнер по идентификатору"],
            
            ["docker exec -t -i CONTAINER_ID COMMAND", "зайти в контейнер по идентификатору и запустить команду COMMAND"],
        ]
    },
    {
        name: "Dockerfile",
        caption: "Создание Dockerfile",
        data: [
            ["FROM NAME", "Взять имя образа latest"],
            ["FROM NAME:TAG", "Взять имя образа по тэгу"],
            ["WORKDIR", ""],
            ["ADD", ""],
            ["EXPOSE", ""],
            ["ENV", "Переменные окружения"],
            ["RUN set -e", "В случае ошибки при сборке остановить сборку"],
            ["RUN COMMAND [&& COMMAND]", "Запуск команды или нескольких команд (для разделения на строки '&& \\')"],
            ["COPY ./FILE /FILE", "Взять файл рядом лежащий с dockerfile и поместить в корень контейнера"],
            ["CMD ['EXE-FILE', 'PARAMS']", "Выполнить команду"],
            ["docker build -t NAME:TAG .", "Создать образ здесь же(.) с именем и тегом."],
        ]
    },
    {
        name: "Volume",
        caption: "Подключение файлов и папок",
        data: [
            ["docker volume ls", "посмотреть все подключения"],
            ["docker volume create NAME", "создать подключение NAME"],
            ["docker volume inspect NAME", "информация по NAME"],
            ["docker run -d -v VOLUME:PATH-DOCKER -e KEY=VALUE CONTAINER_ID", "подключение volume к контейнеру. -v = volume, -e = ENV подключение ключа и значения для volume"],
            ["docker run -d -v PATH-LOCAL:PATH-DOCKER CONTAINER_ID", "подключение локальной папки к контейнеру"],
            ["docker run -d -v FILE-LOCAL:FILE-DOCKER CONTAINER_ID", "подключение локального файла к файлу контейнера"],
            ["", ""],
        ]
    },
];

export default data;
