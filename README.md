# react-scaffolder

------

react-scaffolder is a scaffolder for React development,
including babel、JSX syntax transformation. What's more,
react-scaffolder use the simplest way to suport mock data.It uses webpack-dev-server to  intercept ajax or fetch request.

1.**install**


    git clone ...
    cd react-scaffolder
    npm install 
    npm run server
    
    

2.**configuration**

   (1) if you need to intercept local request(ajax or fetch) , you don't want to do anything.the mock data is stored in the file named "mock",you can see the file in the catalog.
   
   (2) if you need to request a remote url , for example，in testing environment. you should change the urlTarget in the webpack.config.js.
   
   

    var webpack=require('webpack');
    var path=require('path');
    var urlTarget='';

in the urlTarget variable quantity，change this to your url .

finally, in the cmd,restart the server : npm run server
