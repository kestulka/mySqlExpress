# Module 1 (Frontend)

- **Location: ** `cd front`
- **Command: ** `npm install`

# Module 2 (Backend)

- **Location: ** `root`
- **Command: ** `npm install`

# Usage:

Front

- **Location: ** `cd front`
- **Command: ** `npm run dev`

Back

- **Location: ** `root`
- **Command: ** `npm start`

# **POSTMAN TESTING CRUD GUIDE**

## Create animal record

- **Endpoint:** `http://localhost:3000/zoo`
- **Method:** `POST`
- **Description:** `Creates a new animal record`
- **Request Body:** `Include the following fields:`

```json
{
  "animal_name": "Example Animal",
  "animal_type": "Example Type",
  "animal_weight": 123,
  "live_in_zoo": true
}
```

## Get all animal records

- **Endpoint:** `http://localhost:3000/zoo/all`
- **Method:** `GET`
- **Description:** Retrieves all animal records

## Update animal by id

- **Endpoint:** `http://localhost:3000/zoo/${edit.id}`
- **Method:** `PUT`
- **Description:** Updates an existing animal record
- **Request Body:** `Include the following fields:`

```json
{
  "animal_name": "Example Animal",
  "animal_type": "Example Type",
  "animal_weight": 321,
  "live_in_zoo": false
}
```

## Delete animal by id

- **Endpoint:** `http://localhost:3000/zoo/${id}`
- **Method:** `DELETE`
- **Description:** Deletes an existing animal record
