# Login Page with Admin Panel

This is a web application that allows users to sign up, log in, and access a home page. The application also features an admin panel where the admin can manage user data, including performing searches, creating, deleting, and editing user information. The user data is stored in a MongoDB database, and authentication is handled using sessions and cookies.

## Features

- **User Authentication**:
  - User login with email and password.
  - User signup for account creation.
  - Login validation for authentication.
  
- **Admin Panel**:
  - Admin login for access control.
  - View and search user data.
  - Create, delete, and edit user profiles.
  
- **Session and Cookie Management**:
  - Proper handling of sessions and cookies to maintain user and admin logins.

## User Features

- **Signup**: Users can sign up by providing a username, email, and password.
- **Login**: Users can log in using their credentials (email and password).
- **Home Page**: After logging in, users will be redirected to the home page where they can see personalized content.
- **Logout**: Users can log out to end their session, which will invalidate the session cookie.
  
## Admin Features

- **Admin Login**: The admin can log in via a secure admin panel using a specific set of credentials.
- **View Users**: Admins can view a list of all registered users, displaying their names, emails, and account status.
- **Search Users**: Admins can search for users by name or email.
- **Create Users**: Admins can create new users directly from the admin panel.
- **Edit User Data**: Admins can edit existing user profiles (update email, username, etc.).
- **Delete Users**: Admins can delete user profiles from the database if necessary.
  
## Tech Stack

- **Frontend**:
  - HTML
  - CSS and boostrap
  - JavaScript 

- **Backend**:
  - Node.js
  - Express.js
  
- **Database**:
  - MongoDB (with Mongoose for database interaction)
  
- **Authentication**:
  - Sessions (using `express-session`)
  - Cookies
  
## Installation

Follow the steps below to set up and run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/AbhiramN-Mern/login-Page-With--Admin-Panel.git
cd login-Page-With--Admin-Panel
