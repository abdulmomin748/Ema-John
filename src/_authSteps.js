/*
    1. create firebase project
    2. enable web
    3. enable sign in method
    4. install firebase
    5. get firebase config in your firebase.config.js file
    6. export app from firebase.config.js 
*/ 

/*
    1. crate UserContext (Auth Context):    UserContext ---> component name
    UserContext provides AuthContext
    2. create AuthContext 
    3. set AuthContext.Provider
    4. Make Sure you set the children
    5. export AuthContext to be used inside useContext hook
    6. get Form data
    7. getAuth in the UserContext 

*/ 


/*
Firebase Hosting
------------------
// One time in each computer
--
1. npm install -g firebase -tools
2. firebase login 


// for each project one time
--

3. firebase init 
Make sure: for public directory: you select: build
Single page application: y
Set up automatic builds and deploy with github: yes / no

// for every deploy
4. npm run build 
5. firebase deploy
*/