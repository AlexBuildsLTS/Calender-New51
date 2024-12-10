# Meeting Calendar Feature

The **Meeting Calendar Feature** is an integrated module for scheduling, managing, and viewing meetings or events within the NorthMarket platform. This feature is designed to enhance collaboration between users, facilitate event planning, and streamline user interactions.



---

## Features

- **User-Friendly Calendar UI**:

- Interactive and intuitive calendar interface for scheduling and managing events.

- **CRUD Functionalities**:

- Create, Read, Update, and Delete meeting events with ease.

- **Role-Based Access**:

- Sellers and buyers can schedule meetings, while admins manage marketplace events.

- **Reminders**:

- Automatic reminders for scheduled events via notifications.

- **Integration with Marketplace**:

- Seamlessly connects with user and advertisement data for enhanced functionality.


---

## Technologies Used

### **Frontend**

- **ReactJS**: Core library for building the calendar UI.

- **React Router**: Handles navigation for calendar views.

- **Zustand**: State management for event data.

- **Axios**: Fetches and updates calendar events via API.

- **React Big Calendar**: Used for rendering the calendar.


### **Backend**

- **Spring Boot**: Framework for REST API development.

- **MariaDB**: Database for storing event data.

- **JWT Authentication**: Secures API endpoints.

- **Maven**: Dependency management.


---

## API Endpoints

### Event Management

1. `GET /api/events`

Retrieves a list of all events.

**Query Parameters**:

- `userId` (optional): Filter events by user.


2. `POST /api/events`

Creates a new event.

**Payload**:

{

"title": "Meeting with John",

"description": "Discuss new advertisement features",

"startTime": "2024-12-07T10:00:00Z",

"endTime": "2024-12-07T11:00:00Z",

"userId": "12345"

}

---

## File Structure

project/

│

├── backend/

│ ├── src/

│ │ ├── main/

│ │ │ ├── java/com/northmarket/calendar/

│ │ │ │ ├── controller/ # EventController.java

│ │ │ │ ├── model/ # Event.java

│ │ │ │ ├── repository/ # EventRepository.java

│ │ │ │ └── service/ # EventService.java

│ │ │ └── resources/

│ │ │ └── application.properties

│ ├── pom.xml

│

├── frontend/

│ ├── src/

│ │ ├── components/

│ │ │ ├── calendar/ # Calendar-related components

│ │ │ │ ├── CalendarView.tsx

│ │ │ │ ├── CreateEventModal.tsx

│ │ │ │ ├── EventCard.tsx

│ │ │ │ └── EventDetails.tsx

│ │ ├── services/

│ │ │ └── eventService.ts # Axios requests for events

│ ├── App.tsx

│ └── index.tsx

│

├── README.md

└── package.json

---

## Future Enhancements

1. Add drag-and-drop event scheduling.

2. Integrate notifications via email or SMS.

3. Add recurring event support.


---

Developed by Alex Youssef

---

### **Flowchart for Meeting Calendar Feature**

User

│

▼

[Frontend: Calendar UI]

│

▼

[Frontend: Event Service (Axios)]

│

▼

[Backend: EventController]

│

▼

[Backend: EventService]

│

▼

[Backend: EventRepository ↔ Database]

│

▼

[Response Back to Frontend]