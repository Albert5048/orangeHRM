# OrangeHRM Playwright Automation

This project is a practical Playwright automation suite for the OrangeHRM demo application. It focuses on the core user journeys that matter most in a real web app: logging in, navigating the dashboard, and managing admin-related flows.

## What this project covers

The suite validates real browser behavior across a few key areas:

- successful and unsuccessful login attempts
- logout flow
- dashboard visibility and navigation
- side navigation for major HR modules
- admin search and user management actions
- add-user form behavior and validation checks

## Project approach

The implementation follows a page-object model, which keeps the browser logic organized and easier to maintain. The tests read more like user journeys than raw automation scripts, which makes the suite easier to follow and extend.

I also included a structured test plan for the OrangeHRM flows in [specs/orangehrm-test-plan.md](specs/orangehrm-test-plan.md). It maps the main scenarios and acts as a guide for the automated coverage in this project.

## Workflow and tooling

This project is built with Playwright and uses an AI-assisted workflow to help structure and accelerate the test design process. The focus remains on realistic browser behavior, so the testing stays aligned with actual user actions instead of just low-level UI interactions.

## Project structure

- `tests/` — automated test specs and page objects
- `tests/auth/` — authentication scenarios
- `tests/navigation/` — dashboard and navigation flows
- `tests/admin/` — admin and user-management scenarios
- `tests/pages/` — reusable page objects for login, dashboard, admin, and user forms
- `playwright.config.js` — browser configuration and project setup
- `specs/orangehrm-test-plan.md` — plan for the covered scenarios

## Why it’s useful

This project is a good example of a maintainable browser automation setup for a real application. It demonstrates how to separate page logic from test intent, validate core flows end-to-end, and expand coverage as new user journeys are added.

## Summary

This is a focused OrangeHRM automation project built to validate the most important user paths in the application. It combines Playwright automation, a clear page-object structure, and a documented test plan to support reliable and readable end-to-end testing.
