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

## Technology Stack

- **Frontend:** React, TailwindCSS, Recharts.
- **Backend:** Express, MongoDB Atlas.
- **Authentication:** Firebase, JWT.
- **Payment:** Stripe.
- **State Management:** React Context API.
- **Form Handling:** React Hook Form.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```
2. Navigate to the project directory:
   ```bash
   cd medical-camp-management
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure environment variables:
   - Create a `.env` file in the root directory and add:
     ```env
     MONGO_URI=<your-mongodb-uri>
     JWT_SECRET=<your-jwt-secret>
     STRIPE_SECRET_KEY=<your-stripe-secret-key>
     ```
5. Start the backend server:
   ```bash
   npm run server
   ```
6. Start the frontend:
   ```bash
   npm start
   ```

## Future Improvements

- Add email verification and password reset features.
- Enhance analytics with more detailed participant and organizer insights.
- Integrate advanced search and filtering options.

---

This README serves as a comprehensive guide to the CampFlow project, detailing its features, functionality, and setup instructions. For further assistance, refer to the project documentation or contact the development team.
