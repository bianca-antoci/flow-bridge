# Live Demo

The live version of this project is deployed on Firebase and can be accessed via this link:
https://flow-bridge-5cc5b.web.app

# How to Run the Project

- Make sure you have the Angular CLI installed.
- Clone this repo `git clone https://github.com/bianca-antoci/flow-bridge.git`.
- Navigate to the folder and then run `npm install`. Make sure there are no errors. In some cases you might have to try `npm install --force`
- Run the project by `ng serve`.

# Design Architecture

I opted for a side menu navigation to keep things straight to the point and easy to navigate. Each page covers specific content, making it simple for users to find what they need without feeling cluttered.

# Choice of Libraries

- Bootstrap because it’s a lifesaver for quickly creating responsive and attractive web pages. It comes with a bunch of ready-made styles and components that saves me a ton of time.
- AG Grid is my go-to for handling complex data tables. It’s super powerful and flexible, which is perfect for dealing with large datasets while keeping everything smooth and interactive.

# Potential Improvements

## Responsive UI Enhancements:

Although Bootstrap gets the job done, adding some custom styles can further polish the UI and make it look great on any device.

## Component Testing:

Incorporating tests with something like Jest could help catch bugs early. It’s all about ensuring each part of the app functions as it should.

## Pagination:

Load the data in smaller chunks and implement table pagination.
Currently UI thread is blocked a few frames every time the JSON is loaded in memory.
