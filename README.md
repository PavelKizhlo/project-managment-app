# Project-managment-app

### Deployment: https://proj-management-app.netlify.app

1. Task: https://github.com/rolling-scopes-school/js-fe-course-en/blob/main/tasks/angular/project-management-system.md
2. Screenshot:![image](https://user-images.githubusercontent.com/94629690/204133774-905f76da-4a6c-4d32-9a4b-c17c50973ae0.png)
3. Done 28.11.2022 / deadline 29.11.2022
4. Score: 620/620
5. Requirements:
- Welcome route - max 70 points
   - [x] The welcome page should contain general information about the developer, project, and course. 10 points (_the second page of the welcom route_)
   - [x] In the upper right corner there are 2 buttons: login and sign up. 10 points (_as the welcom route consists of several pages, the buttons are displaied on the last one_)
   - [x] If there is an unexpired token, the user should be redirected to the "Main route" of the application automatically. 20 points
   - [x] When the token expires - the user should be redirected to the "Welcome page" automatically. 20 points
   - [x] Pressing the Login / Sign up button redirects a user to the route with the Login / Sign up form. 10 points
- Login / Sign up - max 80 points
   - [x] Login/log out should be present on all pages 20 points (_as the welcom route consists of several pages, the buttons are displaied on the last one_)
   - [x] Form fields should be implemented according to the backend API. Validation should be implemented. 50 points
   - [x]  Upon successful login, the user should be redirected to "Main route" 10 points
- Main route - max 100 points (80 points)
   - [x] Board creation functionality 20 points
   - [x] Displays all created boards as a list 10 points
   - [x] Each board in the list is displayed with a small preview of available information (title, description, etc). By clicking an element the user navigates to the board item (Board route). There's also a button for board deletion. 10 points
   - [x] When trying to delete the board, we should receive a confirmation modal. The confirmation modal must be a generic component (one for the entire application). 10 points
   - [x] Global search: search for a task by a task number, name, users who participate in it, and by the text of the task description. 20 points
   - [x] The user profile editing functionality is implemented. 30 points
- Board route - max 260 points
   - [x] Button for column creation is displayed 10 points
   - [x] If a board contains at least one column - a button for task creation is displayed as well 10 points
   - [x] A modal window with form is displayed for column and task creation 30 points
   - [x] A vertical scrollbar is displayed in the column when overflowing with the number of column tasks 20 points
   - [x] The page itself on the current route doesn't have a vertical scrollbar 10 points
   - [x] With the help of drag-n-drop, we can swap columns. 30 points
   - [x] With the help of drag-n-drop, we can change the order of tasks within a column. 30 points
   - [x] With the help of drag-n-drop, we can change the task belonging to the column. 50 points
   - [x] by clicking on the task, we open a modal window with the edit task form. The requirements for the form and window are the same as everywhere else. 30 points
   - [x] The task must have a delete task button. On click: confirmation modal -> delete. 10 points
   - [x] The top of a column should always display the column title. By clicking the title the test should turn into a form with cancel and submit buttons. After typing a text into the input and clicking the submit button the tile of the column should be updated. 20 points
   - [x] The column should have a delete button. By clicking -> confirmation modal -> when approving -> deleting. 10 points
- General requirements - max 80 points
   - [x] Backend error handling - (Not found, unhandled rejection, etc) should be performed in a user-friendly way (toast, pop-up or anything else you implement). 50 points
   - [x] Localization 20 points
   - [x] Backend is deployed and publicly available 10 points
- Additiona functionality - 30 points
   - [x] Implemented additional functionality that is not provided for by current requirements 30 points (_upload/downlod files (images) functionality for tasks_)
