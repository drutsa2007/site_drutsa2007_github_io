const data = [
    {
        name: "Images",
        caption: "Работа с образами",
        data: [
            ["docker search SEARCH", "поиск в docker hub по значению SEARCH"],
            ["docker pull IMAGE", "скачать образ"],
            ["docker images", "список локальных образов"],
            ["docker image ls", "список локальных образов"],
            ["docker rmi REPOSITORY|IMAGE_ID", "удаляет образ по REPOSITORY или IMAGE_ID"],
            ["docker image inspect IMAGE", "подробная информация об образе"],
            ["docker tag IMAGE LOGIN/IMAGE", "Создаст новый идентичный образ для заливки на docker hub."],
            ["docker push LOGIN/IMAGE:TAG", "Зальет образ на docker hub по никнейму."],
            ["docker build --tag NAME:TAG .", "Создаст образ с тегом из текущей папки."],
            ["docker build --tag NAME:TAG --no-cache .", "Создаст образ и переберт все слои из текущей папки."],
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
            ["docker run -d --name NAME IMAGE", "скачает образ IMAGE из docker hub по тегу TAG и задаст ему имя NAME"],
            ["docker run -d --name NAME --rm IMAGE", "Автоматическое удаление после удаления stop"],
            ["docker run -d -e EVAR=VALUE IMAGE", "Изменяет в ENV инструкции переменную EVAR указанную в Dockerfile на новое значение VALUE."],
            ["docker run -d --env-file ./config/.env IMAGE", "Использут переменные из файла."],
            ["docker run -d -p 80:3000 IMAGE", "Первый порт на локальной машине, второй внутри контейнера."],
            ["-d, --detach", "запустить в фоновом режиме"],
            ["-i", "Интерактивный режим"],
            ["-t", "Режим терминала, если есть терминал"],
            ["-it", "Использование 2 режимов"],
            
            ["docker start CONTAINER_ID", "запустит контейнер по идентификатору"],
            ["docker stop CONTAINER_ID", "остановить контейнер по идентификатору"],
            ["docker restart CONTAINER_ID", "перезапускает контейнер по идентификатору"],
            
            ["docker rm --force CONTAINER_ID", "останавливает и потом удаляет (--force) контейнер по идентификатору"],
            ["docker rm CONTAINER_ID", "удалить остановленный контейнер по идентификатору"],
            ["docker rm $(docker ps -qa)", "Удалить все контейнеры."],
            ["docker container prune", "удалить все контейнеры"],
            
            ["docker exec -t -i CONTAINER_ID COMMAND", "зайти в контейнер по идентификатору и запустить команду COMMAND"],
            
            ["docker logs CONTAINER_ID", "Логи контейнера."],
        ]
    },
    {
        name: "Dockerfile",
        caption: "Создание Dockerfile",
        data: [
            ["FROM NAME", "Взять имя образа latest"],
            ["FROM NAME:TAG", "Взять имя образа по тэгу"],
            ["WORKDIR FOLDER", "Создает папку FOLDER и делает ее активной с переходом в нее."],
            ["ADD", ""],
            ["EXPOSE PORT", "На каком порту запустить внутри контейнера."],
            ["ENV", "Переменные окружения. Например: ENV PORT=4200"],
            ["VOLUME ['PATH_IN_DOCKER']", "Подключить общую папку"],
            ["RUN set -e", "В случае ошибки при сборке остановить сборку"],
            ["RUN COMMAND [&& COMMAND]", "Запуск команды или нескольких команд (для разделения на строки '&& \\')"],
            ["COPY ./FILE /FILE", "Взять файл рядом лежащий с dockerfile и поместить в корень контейнера"],
            ["COPY . .", "Скопировать все из текущей локальной папки в текущую в docker."],
            ["CMD ['EXE-FILE', 'PARAMS']", "Выполнить команду"],
            ["docker build -t NAME:TAG .", "Создать образ здесь же(.) с именем и тегом."],
        ]
    },
    {
        name: "Volume",
        caption: "Подключение файлов и папок",
        data: [
            ["volume", "Хранилище которое создается после создания контейнера. Хранится локально."],
            ["docker volume ls", "посмотреть все подключения"],
            ["docker volume rm NAME", "Удалить volume по имени."],
            ["docker volume prune", "Удалить все volume."],
            ["docker volume create NAME", "создать подключение NAME"],
            ["docker volume inspect NAME", "информация по NAME"],
            ["docker run -d -v VOLUME:PATH-DOCKER -e KEY=VALUE CONTAINER_ID", "подключение volume к контейнеру. -v = volume, -e = ENV подключение ключа и значения для volume"],
            ["docker run -d -v PATH-LOCAL:PATH-DOCKER CONTAINER_ID", "подключение локальной папки к контейнеру"],
            ["docker run -d -v FILE-LOCAL:FILE-DOCKER CONTAINER_ID", "подключение локального файла к файлу контейнера"],
            ["docker run -d -v ABSOLUTE_PATH:WORKDIR CONTAINER_ID", "Режим разработки, изменяю локально, изменяется в контейнере без создания нового контейнера."],
        ]
    },
    {
        name: "Network",
        caption: "Работа с сетью",
        data: [
            ["docker network ls", "Список сетей."],
            ["docker network inspect NAME", "Информация по сети."],
            ["docker network create -d bridge NAME", "Создание сети."],
            ["docker network rm NAME", "Удаление сети."],
            ["docker run --network=NAME IMAGE", "Запустить контейнер с указанной сетью."],
            ["docker network connect NAME CONTAINER_ID", "Добавить работающий контейнер в сеть."],
            ["docker network disconnect NAME CONTAINER_ID", "Отключить работающий контейнер от сети."],
            ["docker network prune", "Удалить все неиспользуемые сети."],
        ]
    },
    {
        name: "DockerIgnore",
        caption: "DockerIgnore",
        data: [
            [".dockerignore", "Нужно создать такой файл и положить туда что не нужно отправлять."],
        ]
    },
    {
        name: "DockerCompose",
        caption: "Docker-Compose",
        data: [
            ["docker-compose up", "Собрать docker.compose.yaml."],
            ["docker-compose up --forse-recreate", "Пересобрать с удалением docker.compose.yaml."],
        ]
    },
];

export default data;
