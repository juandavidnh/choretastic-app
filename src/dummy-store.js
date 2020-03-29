const STORE = {
    "users": [
        {
            "id": "1",
            "email": "jd@choretastic.com",
            "password": "jd-password",
            "name": "Juan David",
            "lastName": "Nunez",
            "nickname": "juandavidnh",
            "points": 50,
            "homeId": "1"
        },
        {
            "id": "2",
            "email": "ivanka@choretastic.com",
            "password": "ivanka-password",
            "name": "Ivanna",
            "lastName": "Zauzich",
            "nickname": "ivankazauria",
            "points": 20,
            "homeId": "1"
        },
        {
            "id": "3",
            "email": "mashua@choretastic.com",
            "password": "mashua-password",
            "name": "Mashua",
            "lastName": "Lleina",
            "nickname": "mashuacucuga",
            "points": 100,
            "homeId": "1"
        },
        {
            "id": "4",
            "email": "lilili@choretastic.com",
            "password": "lilili-password",
            "name": "Capuli",
            "lastName": "Llata",
            "nickname": "el_llata",
            "points": 0,
            "homeId": "2"
        },
        {
            "id": "5",
            "email": "pimienka@choretastic.com",
            "password": "pimienka-password",
            "name": "Pimienka",
            "lastName": "Zauria",
            "nickname": "pimienkadoca",
            "points": 20,
            "homeId": "2"
        },
        {
            "id": "6",
            "email": "mashuo@choretastic.com",
            "password": "mashuo-password",
            "name": "Mashuo",
            "lastName": "Piundai",
            "nickname": "mashuo",
            "points": 40,
            "homeId": "2"
        }
    ],
    "homes": [
        {
            "id": "1",
            "password": "gatos-password",
            "homeName": "Los Gatos"
        },
        {
            "id": "2",
            "password": "perros-password",
            "homeName": "Los Perros"
        }
    ],
    "tasks": [
        {
            "id": "1",
            "taskName": "Clean bathroom",
            "points": 7,
            "assigneeId": "1",
            "dateCreated": "2018-07-12T23:00:00.000Z",
            "status": "Pending"
        },
        {
            "id": "2",
            "taskName": "Feed cats",
            "points": 3,
            "assigneeId": "2",
            "dateCreated": "2020-07-12T23:00:00.000Z", 
            "status": "Pending"
        },
        {
            "id": "3",
            "taskName": "Clean litter",
            "points": 7,
            "assigneeId": "3",
            "dateCreated": "2020-09-12T23:00:00.000Z", 
            "status": "Pending"
        },
        {
            "id": "4",
            "taskName": "Wash car",
            "points": 6,
            "assigneeId": "1",
            "dateCreated": "2019-07-12T23:00:00.000Z",
            "status": "Pending"
        },
        {
            "id": "5",
            "taskName": "Vacuum",
            "points": 8,
            "assigneeId": "2",
            "dateCreated": "2019-11-01T23:00:00.000Z",
            "status": "Pending"
        },
        {
            "id": "6",
            "taskName": "Make breakfast",
            "points": 6,
            "assigneeId": "4",
            "dateCreated": "2019-04-11T23:00:00.000Z",
            "status": "Pending"
        }, 
        {
            "id": "7",
            "taskName": "Take out trash",
            "points": 3,
            "assigneeId": "5",
            "dateCreated": "2020-04-11T23:00:00.000Z",
            "status": "Pending"
        },
        {
            "id": "8",
            "taskName": "Wash dishes",
            "points": 7,
            "assigneeId": "6",
            "dateCreated": "2020-01-07T23:00:00.000Z",
            "status": "Pending"
        },
        {
            "id": "9",
            "taskName": "Clean toilets",
            "points": 8,
            "assigneeId": "4",
            "dateCreated": "2019-11-11T23:00:00.000Z",
            "status": "Pending"
        }, 
        {
            "id": "10",
            "taskName": "Make bed",
            "points": 3,
            "assigneeId": "5",
            "dateCreated": "2020-02-29T23:00:00.000Z",
            "status": "Pending"
        }
    ]
}

export default STORE