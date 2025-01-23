# Accessing the Deployed Project

The live version of this project is deployed on Firebase and can be accessed via this link:

# How to Run the Project

- Clone the Git Repository
- npm install
- ng serve

# Design Decisions and Choices

## Design Architecture

I opted for a side menu navigation to keep things straight to the point and easy to navigate. Each page covers specific content, making it simple for users to find what they need without feeling cluttered.

## Choice of Libraries

Bootstrap:
I chose Bootstrap because it’s a lifesaver for quickly creating responsive and attractive web pages. It comes with a bunch of ready-made styles and components that saved me a ton of time.

AG Grid:
AG Grid was my go-to for handling complex data tables. It’s super powerful and flexible, which is perfect for dealing with large datasets while keeping everything smooth and interactive.

# Potential Improvements

Responsive UI Enhancements:
Although Bootstrap gets the job done, adding some custom styles can further polish the UI and make it look great on any device.

Component Testing:
Incorporating tests with something like Jest could help catch bugs early. It’s all about ensuring each part of the app functions as it should.

Pagination Optimization:
Tuning the pagination to use async data fetching instead of blocking the UI thread would enhance the user experience a lot.
