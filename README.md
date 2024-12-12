# ReserveWay

ReserveWay is a modern web application that allows users to easily book sports facilities like volleyball courts, basketball courts, and soccer fields. The platform provides a streamlined and user-friendly experience for managing bookings, ensuring accessibility and clarity for users.

## Features

### 1. **User Registration and Login**
- **Register:** Users can create an account by providing their name, username, email, password, and student number.
- **Login:** Users can log in to access their personalized dashboard.

### 2. **Dashboard**
- Displays user information including name, username, and student number.
- Lists current bookings with options to cancel.
- Provides quick navigation to the booking page.

### 3. **Booking Page**
- Interactive calendar-like interface to select and book sports facilities.
- Shows time slots and court availability.
- Prevents double bookings by marking booked slots as "Unavailable."
- Allows users to confirm bookings with a modal pop-up.

### 4. **Header Navigation**
- Persistent header with quick navigation:
  - **ReserveWay:** Redirects to the home page.
  - **Dashboard:** Redirects to the user dashboard.

### 5. **Responsive Design**
- Fully responsive design for desktop, tablet, and mobile devices.

## Technologies Used

### Front-End
- **HTML5/Pug:** For page structure and templating.
- **CSS:** For styling, including responsive design.
- **JavaScript:** For interactive features like modal pop-ups and dynamic updates.

### Back-End
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for routing and middleware.
- **Mongoose**: ODM for MongoDB database integration.

### Database
- **MongoDB:** For storing user information, bookings, and court details.

## Installation and Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (Local or cloud-based)

### Steps
1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd ReserveWay
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure MongoDB:
   - Create a MongoDB database.
   - Update the connection string in `app.js`:
     ```javascript
     mongoose.connect('mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>', {
         useNewUrlParser: true,
         useUnifiedTopology: true
     });
     ```
5. Start the application:
   ```bash
   npm start
   ```
6. Open the application in your browser:
   ```
   http://localhost:3000
   ```

## Folder Structure
```
.
├── app.js             # Main application entry point
├── models             # Mongoose schemas
│   ├── booking.js     # Schema for bookings
│   ├── court.js       # Schema for courts
│   └── user.js        # Schema for users
├── routes             # Application routes
│   ├── bookingRoute.js
│   ├── dashboardRoute.js
│   ├── loginRoute.js
│   ├── registerRoute.js
│   └── logoutRoute.js
├── views              # Pug templates
│   ├── partials       # Shared components like header
│   ├── booking.pug    # Booking page
│   ├── dashboard.pug  # Dashboard page
│   ├── login.pug      # Login page
│   ├── register.pug   # Registration page
│   └── home.pug       # Home page
├── public             # Static files (CSS, JS, images)
│   ├── styles         # CSS files
│   │   ├── booking.css
│   │   ├── dashboard.css
│   │   ├── header.css
│   │   └── register.css
│   └── scripts        # JavaScript files
│       └── booking.js # Booking page interactivity
├── README.md          # Project documentation
└── package.json       # Node.js dependencies and scripts
```

## Usage
- **Register a new account** to access the application.
- Use the **Dashboard** to view your bookings and navigate to the booking page.
- On the **Booking Page**, select available time slots and confirm bookings.

## Future Enhancements
- Add support for group bookings.
- Implement notifications for upcoming reservations.
- Add a payment gateway for paid bookings.

## Contributors
- Jay Patel
- Daniel Tan
- Januarius Obah

---

**Enjoy using ReserveWay!**
