# Medical Camp Management System (CampFlow) - README

## Project Overview

CampFlow is a comprehensive MERN stack application designed to manage and coordinate medical camps efficiently. The platform provides distinct functionalities for organizers and participants, offering features such as camp registration, feedback, analytics, and payment management.

## Features

### Home Page

- **Navbar:**

  - Logo and website name.
  - Navigation links: Home, Available Camps, Join Us (or Profile Picture with a dropdown for logged-in users).
  - Dropdown menu for logged-in users: Username (non-clickable), Dashboard, Logout.

- **Banner Section:**

  - Slider showcasing success stories and impactful moments from past medical camps.

- **Popular Medical Camps Section:**

  - Displays up to six camps with the highest participant counts.
  - Each camp card includes:
    - Camp Name, Image, Fees, Date & Time, Location, Healthcare Professional, and Participant Count.
  - "See All Camps" button redirects to the Available Camps page.
  - "Details" button links to the detailed camp information page.

- **Detailed Camp Page:**

  - Includes:
    - Camp Name, Image, Fees, Date & Time, Location, Healthcare Professional, Participant Count, and Description.
    - "Join Camp" button opens a registration modal.
  - Registration Modal Fields:
    - Camp Name, Fees, Location, Healthcare Professional Name (read-only).
    - Participant Name, Email (from logged-in user info), Age, Phone Number, Gender, Emergency Contact.
  - Updates participant count and saves data to the database upon registration.

- **Additional Sections:**
  - "Feedback and Ratings": Displays participant feedback and ratings from the dashboard.
  - Custom project-related section to enhance clarity and user engagement.

### Available Camps Page

- Displays all camps added by organizers with details:
  - Camp Name, Image, Date & Time, Location, Healthcare Professional, Participant Count, and Description.
  - "Details" button links to the detailed camp page.
- **Search and Sorting:**
  - Search bar for filtering camps by keywords, dates, or other criteria.
  - Sorting options: Most Registered, Camp Fees, Alphabetical Order (Camp Name).
- **Layout Toggle:**
  - Switch between three-column and two-column layouts.

### Organizer Dashboard (Private Route)

- **Organizer Profile:**

  - Manage name, image, and contact details.
  - "Update" button opens a form for editing profile information.

- **Add A Camp:**

  - Form to input camp details:
    - Camp Name, Image, Fees, Date & Time, Location, Healthcare Professional Name, Participant Count (starts at 0), and Description.
  - Validates input using Formik or React Hook Form and saves data to the database.

- **Manage Camps:**

  - Table displaying organizer's camps with:
    - Camp Name, Date & Time, Location, Healthcare Professional, and action buttons for Edit and Delete.
  - Update camp details via `/update-camp/:campId`.
  - Delete camps via `/delete-camp/:campId`.

- **Manage Registered Camps:**
  - Table displaying participants' data:
    - Camp Name, Fees, Participant Name, Payment Status, Confirmation Status, and Cancel button.
  - **Payment Status:** Displays "Paid" or "Unpaid."
  - **Confirmation Status:** Initially "Pending," updates to "Confirmed" upon payment.
  - **Cancellation:**
    - Disabled if payment is confirmed.
    - Removes registration data upon cancellation.

### Participant Dashboard (Private Route)

- **Analytics:**

  - Charts (using Recharts or similar) display participant-specific data, such as registered camps, fees, etc.

- **Participant Profile:**

  - Manage name, image, and contact details.
  - "Update" button opens a form for editing profile information.

- **Registered Camps:**

  - Table displaying participant's registered camps:
    - Camp Name, Fees, Participant Name, Payment Status, Confirmation Status, Feedback Button, and Cancel Button.
  - **Payment Status:**
    - "Pay" button redirects to Stripe for payment.
    - Updates to "Paid" with a transaction ID after successful payment.
  - **Confirmation Status:** Initially "Pending," updates to "Confirmed" upon organizer approval.
  - **Feedback Button:**
    - Visible after payment confirmation.
    - Collects feedback and ratings, which are displayed on the home page.
  - **Cancellation:**
    - Disabled after payment.
    - Removes registration data upon cancellation.

- **Payment History:**
  - Displays transaction history with:
    - Camp Name, Fees, Payment Status, and Confirmation Status.

### Authentication and Authorization

- **Join Us Page:**
  - Login form with a link to the Register page.
  - Includes social login option.
- **Registration and Login Pages:**
  - Uses react-hook-form for validation.
  - Email verification and password reset not enforced.

### Challenges and Enhancements

- **Pagination:**

  - Implemented at the footer of all tables (10 rows per page).

- **Search:**

  - Search bar added to all tables for filtering data by keywords (Camp Name, Date, Healthcare Professional Name).

- **JWT Authentication:**
  - Secures sensitive routes with JSON Web Token.
  - JWT managed using local storage.

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Sabuj-Chowdhury/CampFlow_Client.git
   ```
2. Clone the server repository:
   ```bash
   git clone https://github.com/Sabuj-Chowdhury/CampFlow_Server.git
   ```
3. Navigate to the project directory:
   ```bash
   cd camflow
   ```
4. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
5. Create a `.env.local` file in the root directory and add the following keys:
   ```env
   VITE_apiKey=
   VITE_authDomain=
   VITE_projectId=
   VITE_storageBucket=
   VITE_messagingSenderId=
   VITE_appId=
   VITE_URL=
   VITE_STRIPE_PUBLIC_KEY=
   VITE_imageBB_CLIENT_API_KEY=
   ```
6. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```
7. Open your browser and go to `http://localhost:3000` to see the application.

## Admin/Organizer Login Details

- **Email:** admin@gmail.com
- **Password:** BZm9AI2x

## Dependencies

```json
"dependencies": {
  "@heroicons/react": "^2.2.0",
  "@material-tailwind/react": "^2.1.10",
  "@react-icons/all-files": "^4.1.0",
  "@stripe/react-stripe-js": "^3.1.1",
  "@stripe/stripe-js": "^5.5.0",
  "@tanstack/react-query": "^5.64.1",
  "axios": "^1.7.9",
  "firebase": "^11.1.0",
  "prop-types": "^15.8.1",
  "react": "^18.3.1",
  "react-awesome-stars-rating": "^0.16.2",
  "react-dom": "^18.3.1",
  "react-fast-marquee": "^1.6.5",
  "react-helmet-async": "^2.0.5",
  "react-hook-form": "^7.54.2",
  "react-hot-toast": "^2.5.1",
  "react-icons": "^5.4.0",
  "react-lazyload": "^3.2.1",
  "react-rating-stars-component": "^2.2.0",
  "react-router-dom": "^7.1.1",
  "react-spinners": "^0.15.0",
  "recharts": "^2.15.0",
  "sweetalert2": "^11.15.10",
  "swiper": "^11.2.1"
}
```

## Technologies Used

- **React.js**: Component-based library for building the UI.
- **State Management:** React Context API.
- **React Router**: For navigation and routing.
- **Tailwind CSS**: For styling the application.
- **PropTypes**: For type-checking React props.
- **Firebase**: Backend as a Service for authentication and data storage.
- **Axios**: Promise-based HTTP client for API calls.
- **React Query**: For data fetching and state management.
- **Stripe.js**: For payment integration.
- **Recharts**: For data visualization.
- **Swiper.js**: For creating carousels and sliders.
- **SweetAlert2**: For creating beautiful and responsive popups.
- **React Hook Form**: For form handling and validation.
- **React Icons**: For adding icons in components.
- **React Lazyload**: For improving performance by lazy-loading components.
- **React Helmet Async**: For managing the document head dynamically.
- **Authentication:** Firebase, JWT.
- **Backend:** Express, MongoDB Atlas,nodemailer,morgan,cors,dotenv,json-web-token,strip

## Screenshots

### Home Page

![Home Page](/client/src/assets/Home.png)

### Popular Camps Cards

![Popular Camps](screenshots/popular-camps.png)

### Organizer Managing Dashboard

![Organizer Dashboard](screenshots/organizer-dashboard.png)

### Organizer Managing Registrations

![Manage Registrations](screenshots/manage-registrations.png)

### Participant Analytics Page

![Analytics Page](screenshots/analytics-page.png)

### Payment Page

![Payment Page](screenshots/payment-page.png)

### User Registration Page

![Registration Page](screenshots/registration-page.png)

## Future Improvements

- Add email verification and password reset features.
- Enhance analytics with more detailed participant and organizer insights.
- Integrate advanced search and filtering options.

---

This README serves as a comprehensive guide to the CampFlow project, detailing its features, functionality, and setup instructions. For further assistance, refer to the project documentation or contact the development team.
