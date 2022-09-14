# bauen
- `npm install --save react`
- `npm install --save react-dom`
- `npm install`

# ausführen
## backend
- `git clone https://github.com/RichardWerner173134/BlogApi.git`

ENTWEDER
- ich lasse github immer eine aktuelle version bauen und als jar artifakt zur verfügung stellen ODER
- url: https://github.com/RichardWerner173134/BlogApi/actions/workflows/main.yml
    - letzten Build runterladen (auf `jar` drücken)
    - Voraussetzung: Github als Contributor hinzugefügt
- ausführen: `java -jar api-0.0.1-SNAPSHOT.jar`
--> Der Server läuft auf http://localhost:8080
Endpunkte suche ich später raus

## backend inmemdb
- url: http://localhost:8080/h2-console
- driverclass: org.h2.Driver
- jdbc url: jdbc:h2:file:~/localBlog
- username: sa
- password: 

## Frontend
- `npm run start`
    - zum Starten des Frontends ohne ServiceWorker
    
- `npm install -g serve`
- `npm run build`
    - zum Starten des Frontends mit ServiceWorker
    - dauert etwas länger

- läuft auf http://localhost:3000

# css zeugs
- https://daisyui.com/
- https://tailwindcss.com/
