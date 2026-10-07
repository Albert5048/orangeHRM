# OrangeHRM Demo Site Playwright Test Plan

## Application Overview

OrangeHRM demo site is a public web application with a login flow, dashboard navigation, and admin/user-management actions. This plan defines a Playwright-based framework for validating the key business paths, validation rules, regression risks, and cross-browser coverage using a fresh-state browser setup.

## Test Scenarios

### 1. Authentication

**Seed:** `tests/seed.spec.ts`

#### 1.1. Login with valid credentials

**File:** `tests/auth/login-valid.spec.ts`

**Steps:**
  1. Open the OrangeHRM login page at https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
    - expect: The login page loads successfully and shows the username and password fields.
  2. Enter the valid credentials: username 'Admin' and password 'admin123'
    - expect: The form accepts the values without validation errors.
  3. Click the login button
    - expect: The user is redirected to the Dashboard page.
    - expect: The dashboard loads with the OrangeHRM side navigation visible.

#### 1.2. Login with invalid credentials

**File:** `tests/auth/login-invalid.spec.ts`

**Steps:**
  1. Open the login page on a fresh state
    - expect: The login form is ready for input.
  2. Enter an invalid username/password combination, such as 'Admin' and 'wrongpass'
    - expect: The form does not redirect the user.
  3. Submit the form
    - expect: A validation or error message is displayed.
    - expect: The user remains on the login page.

#### 1.3. Logout from dashboard

**File:** `tests/auth/logout.spec.ts`

**Steps:**
  1. Log in with valid admin credentials
    - expect: The dashboard page is visible.
  2. Open the user menu in the top-right area
    - expect: The user menu includes options such as About, Support, and Logout.
  3. Select Logout
    - expect: The session ends and the user returns to the login screen.

### 2. Dashboard and Navigation

**Seed:** `tests/seed.spec.ts`

#### 2.1. Dashboard widgets load without errors

**File:** `tests/navigation/dashboard.spec.ts`

**Steps:**
  1. Log in as Admin
    - expect: The Dashboard screen loads fully.
  2. Wait for the main cards and widgets to render
    - expect: At least the dashboard summary cards appear without broken layout or missing content.
    - expect: No critical JavaScript errors appear in the console.
  3. Refresh the page
    - expect: The dashboard remains accessible and the session is preserved.

#### 2.2. Side navigation links open expected screens

**File:** `tests/navigation/side-nav.spec.ts`

**Steps:**
  1. Log in as Admin
    - expect: The left navigation panel is visible.
  2. Click through the main menu items such as Admin, PIM, Leave, My Info, and Dashboard
    - expect: Each destination loads successfully.
    - expect: The URL changes to the expected module route.
    - expect: The page heading or module title matches the selected section.
  3. Return to Dashboard
    - expect: The user can navigate back without errors.

### 3. Admin and User Management

**Seed:** `tests/seed.spec.ts`

#### 3.1. Admin section loads and search works

**File:** `tests/admin/admin-search.spec.ts`

**Steps:**
  1. Log in as Admin and go to Admin > User Management
    - expect: The user management page loads with a search form and results grid.
  2. Search for a known user, such as 'Admin' or another demo user
    - expect: Matching results are returned.
    - expect: No empty-state error is shown when the record exists.
  3. Search with a non-existing username
    - expect: The results are empty or show 'No Records Found' depending on the UI behavior.

#### 3.2. Add a new user with valid data

**File:** `tests/admin/add-user.spec.ts`

**Steps:**
  1. Navigate to Admin > User Management > Add User
    - expect: The add-user form loads with required fields.
  2. Fill in valid employee, username, password, and role values
    - expect: All required validation passes.
  3. Save the new user
    - expect: A success message or saved record is displayed.
    - expect: The new user appears in the user list.

#### 3.3. Validation prevents invalid admin form submission

**File:** `tests/admin/admin-validation.spec.ts`

**Steps:**
  1. Open the add-user form and leave required fields blank
    - expect: The form shows validation errors before save.
  2. Enter mismatched password confirmation or invalid employee data
    - expect: The form blocks submission and highlights the invalid fields.
  3. Attempt to save
    - expect: The user remains on the form and does not create a record.
