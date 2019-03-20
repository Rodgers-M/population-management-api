# population-management-api
This is a population Management System that contains a list of locations and the total number of residents in each location broken down by gender i.e males and females.

**Installing locally**
* clone the repo
* checkout to develop branch 
* install postgres and create database  both for development and testing
* Use `yarn install` to install to install dependencies
* Run database migrations `yarn db:migrate`
* start the application with `yarn start` or `yarn start:dev`
* Use `yarn test` to run the tests

**API features**
* creating locations
* sending and recieving sms

**Endpoints exposed by the API**


Endpoint                    |  Functionality
 ------------------------   |   ------------------------ 
GET /locations              | get all locations
GET /locations/:id          | get location with the given id
GET /locations/name/:name   | get location with the given name
POST /locations             | create location
PUT /locations/:id          | update location with the given id
DELETE /locations/:id       | delete location with the given id


**Endpoint payload**

* POST /locations
```
{
  "name": "name",
  "males":  number,
  "females":  number,
}
```
creating a sublocation
```
{
  "name": "name",
  "males":  number,
  "females":  number,
  "parentLocation": "name of parent location"
}
```
Note: the parent location has to be existing before creating a sublocation

