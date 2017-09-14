# MAUL PROJECT

## Resumen

El sistema de información comunitario,*Maul Project*, es el producto del proceso de investigación y desarrollo en el proyecto de grado titulado “Desarrollo de un sistema de información comunitario con las comunas 13, 14 y 21 de Santiago de Cali” de la facultad de ingeniería de la Universidad Santiago de Cali. El cual busca familiarizar y referenciar a las personas, comunidades, sitios y eventos que se realizan al interior de cada comuna de la ciudad. Para la primera fase de desarrollo, es decir, esta primer etapa solo se realiza un acercamiento con algunas comunidades y sitios de las comunas mencionadas en el título del proyecto para recoger las primeras impresiones y realizar las primeras pruebas de uso. Posteriormente, en una siguiente fase de despliegue, se pretende involucrar al resto de comunas de la ciudad, corregimientos, organizaciones, instituciones, comunidades y sitios que permitan nutrir el sitio y ofrecer una información oportuna, fidedigna y actualizada al servicio de toda una población, además de las personas visitantes que arriban a la ciudad.

A continuación se describen los aspectos generales que permiten entender
como se espera que funcione la plataforma, con una estructura de funcionamiento clara y
cuáles son los requerimientos necesarios para correr la aplicación de manera local y contar con
la posibilidad de hacer mejoras en la usabilidad e implementación del proyecto por parte de
los mismos usuarios o bien colaboradores.

## Tabla de Contenido
- [Sobre el Proyecto](#sobre-el-proyecto).
- [Objetivos](#objetivos).
- [Alcance](#alcance).
- [Requerimientos Generales](#requerimientos-generales).
- [Entorno Desarrollador](#entorno-desarrollador).
- [Funcionalidades](#funcionalidades).

### Sobre el Proyecto
**¿Que es Maul?**
Una maul es una estructura en la que participan diversos actores para lograr un objetivo.
![cargando_imagen](https://i2.wp.com/cd1.eju.tv/video/1406/PB1408070730.jpg) ![cargando_imagen](http://www.24horas.cl/internacional/article1362675.ece/ALTERNATES/w620h350/rescate_metro.JPG)

Bajo este principio solidario que plantea la consecución de objetivos a partir del apoyo colectivo, se plantea el desarrollo de la aplicación MAUL como plataforma de servicios.

Maul Project es una plataforma de servicio en la que los usuarios y colaboradores encontrarán información relevante sobre las comunidades, personas líderes, sitios (organizaciones, instituciones, empresas, escenarios, etc) y eventos; dichos eventos podrán contar con la posibilidad de que a través de un módulo de gestión de recursos, se puedan conseguir o disponer de insumos, herramientas o los medios necesarios para la realización del evento planteado, donde otros usuarios podrán ser los colaboradores o quienes apoyen las iniciativas.

### Objetivos

* Permitir el registro de usuarios
* Permitir el registro de comunidades,sitios y eventos.
* Facilitar la gestión de los eventos por medio de un módulo que permita la consecución de recursos y contribuciones
* Familiarizar y contextualizar a los usuarios con respecto a las comunidades, sitios y eventos organizados en cada comuna de Santiago de Cali.
* Generar un directorio abierto que sirva de guía para las personas e instituciones de la ciudad y más aún a los visitantes y turistas que arriban.

### Alcance

Inicialmente en el proyecto se tienen en cuenta las comunas 13, 14 y 21 de la ciduad, junto a la Universidad Santiago de Cali, con las que se hacen las primeras pruebas de funcionamiento. Se espera hacer un despliegue donde se involucren el resto de comunas y corregimientos de la ciudad; una vez cumplidad esta fase, se propondría continuar con el despliegue hacia el resto de municipios y departamentos del país.

Se hace claridad en el desarrollo de la primera fase, la cual solo contempla una primera versión beta disponible solo en web. Para las siguientes fases se plantea el desarrollo de una versión movil multiplataforma.

### Requerimientos Generales

El desarrollo de esta versión web del proyecto contempla el uso de las siguientes herramientas:

- Ruby 2.3 como lenguaje
- Rails 5 como framework de desarrollo backend
- PostgreSQL como gestor de base de datos
- Bootstrap 4 para facilitar la gestión del frontend
- html, css y javascript
- Git & GitHub

### Entorno Desarrollador

Preparar el entorno de trabajo. Para ello es necesario instalar Ruby, Rails, PostgreSQL, Git y las gemas necesarias que se irán indicando. Se hace la salvedad que las instrucciones aquí suministradas estan basadas en ubunutu, linux.

Para acceder al proyecto basta con clonar el repositorio de github

1. Asegurarse de instalar Ruby, Rails, Postgres y Git.
2. Clonar el repositorio con `git clone https://github.com/SamZapata/maul.git`
3. Acceder al directorio `cd maul`
4. Correr el administrador de *gemas* `bundle install`
5. Gestionar la base de datos `rake db:migrate`
6. Correr `rake assets:precompile`
7. Ejecutar la aplicación `rails s -p 3000`
8. Acceder desde un navegador: `http:\\localhost:3000`

### Funcionalidades

Entre las principales se describen:

- Registro de usuarios, comunidades y sitios
- Crear o gestionar eventos
- Gestión de recursos para un evento
- Buscar información sobre comunidades, sitios o eventos.
- Tener la posibilidad de referenciar líderes de las comunas
- Darle visibilidad a los eventos o dinámicas de las comunidades o sitios mostrando de forma práctica la información generada.
- Participación en los eventos.
