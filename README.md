# Bike-Storage

```bash

npx sequelize-cli model:generate --name customer --attributes name:string,address:string,phone:string,start_storage:date,end_storage:date,nopol:string

npx sequelize-cli model:generate --name bike --attributes name:string,type:string,merk:string

npx sequelize-cli model:generate --name custbike --attributes customerId:integer,bikeId:integer

```