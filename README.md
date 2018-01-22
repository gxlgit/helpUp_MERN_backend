# HelpUp App
![helpUp Screenshot](https://github.com/gxlgit/helpUp/blob/master/helpUp_Screenshot.png "helpUp Screenshot")

### [Try it out here!](https://helpup-gxl.herokuapp.com/ "Deployed App")

### About
A full-stack app to help connect pop-up volunteer projects with volunteers.  This app uses nodeJS, express, mongoose on the backend.  The frontend is created through handlebars and uses Materialize as a framework.

### How to use
Organizations and individuals will signup and create a profile.  Once logged in they can see, post, update, and delete all **helpUp** volunteer opportunities.  Only the creator of the **helpUp** can edit it in any way, everyone else can see the details and *Take Part* in the **helpUp**.  Users can update their profile by adding extra information and a photo.  If the user decides to delete their profile, then any jobs they have created will also be removed. 

### Future fixes
+ On removing profile delete volunteer from any opportunities they are taking part in
+ upload photo files directly from the user's computer and host on S3
+ optimize for small screens
+ more validation on the forms
  + ~~users can't enter a date in the past~~
+ users warned about deleting
+ ~~a location to the volunteer opportunity~~
+ ~~a map showing the location~~
+ a user thumbnail on the navbar after login
+ separate accounts for organizations
+ finesse layout and styles
+ sorting jobs based on location, type, date, etc.
+ job calendar

