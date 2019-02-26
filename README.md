![MDEV Digital](https://mdev.digital/social/githubLogo.svg)

# [ IMPORTANT ] :rotating_light:

## First rodeo? READ THE DOCS!
Please make sure you are familiar with the MDEV branching strategy and pull
request rules. You can find details under `docs/branching.md`.

There are also several other documents covering most of the functions and setup
of this Vue boilerplate.

## Starting a new project?
Don't forget to populate all of the project placeholders with proper data based
on the project at hand. You can easily find these by doing a search for `TODO`
in the project either with `git grep` or your IDE of choice.

---

# WordPack-Docker Boilerplate

## Wordpress + Docker + Webpack
This tool aims to simplify Wordpress theme development by bringing it into the
2018 world of local development and node support. Please make sure you install
Docker CE, Docker Machine and Docker Compose before proceeding.

## How To Use The boilerplate
Create a new repository for your project and copy wordpack-project into it.
There you will make all the necessary modifications for creating your theme and
you will create builds which create a full theme folder you can simply upload
the contents of to your theme.

### Install Docker CE
Docker Community Edition will allow you to spin up images and containers
locally. Giving you the flexibility of a VM with none of the complication of
actually setting it up. Docker will serve as the backbone server during
development providing both PHP and MySQL support.

To install docker CE please see [Docker Install Documentation](https://docs.docker.com/docker-for-mac/install/)
[Linux Install Documentation](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

### Install Docker Compose
Docker compose allows you to create recipes of containers that can be easily
replicated within Docker. We are using it to create a template for the PHP and
Mysql Wordpress server we need to run projects locally.

Please see the [Docker Compose Install Documentation](https://docs.docker.com/compose/install/)

### Install Docker Machine
Docker machine allows for better management of Docker processeses from the
command line.

Please see the [Docker Machine Install Documentation](https://docs.docker.com/machine/install-machine/)

### Login to NPM
Make sure you are logged in to NPM before using the tool, especially the first
time around when you need to install dependencies. If you do not have an NPM
account speak to your development manager.

```bash
npm login
# Enter Username
# Enter Password
# Enter Email
```

### Install NPM dependencies
The tool will not work without the necessary dependencies installed. You must
run the npm install command from within the exporter-tool directory.

```bash
cd wordpack-project/
npm install
```

### Run Build or Watch tasks
The build task will process the SCSS and the favicons and output them into the
`dist` folder. There you will find a folder with the compiled styles.css, the
compiled icons and a helpful HTML document with header tags.

The watch task will accomplish the same as the build task but it will watch for
changes on the files and run automatically. This is a good mode to use during
development.

```bash
# Build Task
npm run build

# Watch task
npm run dev
```

### First time Docker setup
If this is your first time installing and setting up docker on this computer you
will need to make sure to create a virtual machine and start it using docker.
You can do so with the following two commands:

```bash
docker-machine create --driver virtualbox default
docker-machine start
```


### Local Development
To develop on this platform locally you will need two terminals open, one to run
docker and one to run the NPM Dev task that will keep the files compiling.

To Do so, open the first terminal window and navigate to the root of
wordpack-project folder and run the command below. Docker-compose will read the
docker file and configure the server based on the parameters of this project. It
will spin up an instance of Wordpress container and an instance of the MySQL
container.

```bash
docker-compose up
```

Open a second terminal window and navigate to the root of the wordpack-project
folder where you will run the NPM task responsible for compiling the code in
real time and running a local web server.

```bash
npm run dev
```

### Production Builds
Building files for production is quite easy and only requires one command. Open
a terminal window and navigate to the root of the webpack-project folder where
you will run the NPM Build task for outputting the compiled files. You will then
be able to copy and upload the wordpack-project/theme folder to the server. You
will also need a SQL database export outline below.

```bash
npm run build
```

### Export SQL Database from Docker
Altough Docker is a collection of sandboxed processes it can still perform many
of the same actions and operations you have come to expect from a regular
server. In our case, we will be using MySQL Dump to make backups of the
Wordpress database on runtime. For this to work you must first run
docker-compose from inside of the root folder and check docker to see which
process is running MySQL.

1. Start Docker from wordpack-project/ folder

```bash
# From inside wordpack-project folder root
docker-compose up
```

2. Check docker to see which process is running MySQL so you can target it for
   MySQL dump.

```bash
docker container ls

# Expected results
CONTAINER ID        IMAGE                    COMMAND                  CREATED             STATUS              PORTS                  NAMES
bf5905530982        wordpress:4.9.4-apache   "docker-entrypoint.s…"   3 hours ago         Up 4 seconds        0.0.0.0:9009->80/tcp  wordpackproject_wordpress_1
4ea70ed176ba        mysql:5.7                "docker-entrypoint.s…"   25 hours ago        Up 4 seconds        3306/tcp               wordpackproject_db_1
```
As we can see by the ouput above, it looks like our MySql database is running
out of a process with the container ID of '4ea70ed176ba' which we will need to
target for the exporting of the database.

3. Once you have identified the process you will be targeting it with the
   command below which will spit out a copy of the SQL database onto the folder
   you are currently in.

```bash
# Example: docker exec CONTAINER /usr/bin/mysqldump -u root --password=root DATABASE > backup.sql
docker exec 4ea /usr/bin/mysqldump -u root --password=Mdevdb101! wordpress > data-backup/wordpress_backup.sql
```

What the command is basically doing is running the mysqldump located inside the
virtual volume for that container. It then passes it the root password and
selects the wordpress db to be extracted.

Please note how you only need the first three letters of the Docker Container ID
to target it

### Import SQL Database from Backup to Docker
To load a backed up copy of the database onto your local docker container you
just have to essentially reverse the command above and run the following.

```bash
# Example: cat backup.sql | docker exec -i CONTAINER /usr/bin/mysql -u root --password=root DATABASE
cat data-backup/wordpress_backup.sql | docker exec -i 4ea /usr/bin/mysql -u root --password=Mdevdb101! wordpress
```

What this command is doing is reading the wordpress databse backup and piping it
into the docker container by running a MYSQL query.
---

### [ MDEV Digital ]
We provide process-driven UX/UI + development to help our clients unleash their potential to connect with their audience. Our not-so-secret sauce is gaining a fundamental understanding of the challenges and opportunities our clients present us to provide innovative custom solutions using the latest web application technologies.

### [ Contact ]
[MDEV DIgital Website](http://mdev.digital).

[Contact Support](mailto:contact@mdev.digital).

Phone: +1(519)-860-4261


