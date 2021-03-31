# FEUP-SINF
Project developed in the context of the 4th year course Information Systems at FEUP.

1. [Winerd](#winerd)
2. [Technologies](#technologies)
3. [Screenshots](#screenshots)
4. [How To Run](#how-to-run)

## Winerd 
Full-stack application for inter-company product management with Primavera EPR integration.

## Technologies
### Frontend
* React
* Gatsby
* Material UI

### Backend
* Node.js
* Express
* PostgreSQL

## How to Run

To run the frontend:
```
cd client
npm install
npm start
```

To run the backend:

First setup local database:

1.  Install postgres:
    ```
    sudo apt update
    sudo apt install postgresql postgresql-contrib
    ```
2.  Get postgres running: 
    `sudo service postgresql start`
3.  Enter psql command line: 
    `sudo -i -u postgres`
4.  Login to postgres:
    `psql`
5.  Create user with permission to create db:
    ```sql
    CREATE ROLE api_user WITH LOGIN PASSWORD 'password';
    ALTER ROLE api_user CREATEDB;
    ```
6.  Create database:
    `create database winerd;`
7.  Exit postgres:
    `\q`
8.  Run .sql file:
    `psql -h localhost -d winerd -U api_user -f /home/{rest of path to the project}/FEUP-SINF/api/public/database/init.sql`
9.  Enter database command line:
    `psql winerd`
10. Confirm tables were created successfully:
    `\dt`

```
cd express
npm install
npm start
```

## Screenshots
![winerd](https://user-images.githubusercontent.com/25825387/113176222-27514100-9244-11eb-861e-ba362aae230a.png)
![Process Definition](https://user-images.githubusercontent.com/25825387/113176249-2cae8b80-9244-11eb-974c-b4190d21453f.png)
![Logs](https://user-images.githubusercontent.com/25825387/113176251-2d472200-9244-11eb-997b-ff39a7372a2a.png)
![Settings](https://user-images.githubusercontent.com/25825387/113176254-2ddfb880-9244-11eb-856b-c148eadae9b7.png)
![Master Data-2](https://user-images.githubusercontent.com/25825387/113176257-2e784f00-9244-11eb-8bd2-a4e837c82e85.png)
