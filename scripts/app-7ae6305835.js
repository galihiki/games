!function(){"use strict";angular.module("myapp",["ngResource","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function e(e){var r=this;r.hideCards=!0,r.hideOnePlayer=!0,r.hideTwoPlayers=!0,r.hideChooseName=!0,r.playersNames={firstPlayerName:"",secondPlayerName:""},r.required="ture",r.hideGameOver=!0;var i,o,t,m,c="backside.jpg",s=-1,a=1,l=[r.playersNames.firstPlayerName,r.playersNames.secondPlayerName];r.onePlayer=function(){t="one",r.hideCards=!1,r.hideOnePlayer=!1,r.hideTwoPlayers=!0,r.hideChooseName=!0,r.score=0,n()},r.twoPlayers=function(){t="two",r.hideOnePlayer=!0,r.hideTwoPlayers=!0,r.hideCards=!0,r.hideChooseName=!1,r.scorePlayerOne=0,r.scorePlayerTwo=0,r.twoPlayersTurn=y(0,1),n()};var n=function(){r.hideGameOver=!0,r.gameOverMsg="Game Over!  ",s=-1,a=1;var e=["IMG_2476.JPG","IMG_4275.jpg","IMG_5009.JPG","IMG_4857.JPG","IMG_3176.JPG","IMG_5009.JPG","IMG_4275.jpg","IMG_4860.JPG","IMG_4857.JPG","IMG_2476.JPG","IMG_3176.JPG","IMG_4860.JPG","IMG_5088.JPG","IMG_5088.JPG","IMG_5128.JPG","IMG_5128.JPG","IMG_5153.JPG","IMG_5153.JPG","IMG_5928.JPG","IMG_5928.JPG","IMG_1111.JPG","IMG_1111.JPG","IMG_2222.jpg","IMG_2222.jpg"];for(r.picVarArray=[r.pic0,r.pic1,r.pic2,r.pic3,r.pic4,r.pic5,r.pic6,r.pic7,r.pic8,r.pic9,r.pic10,r.pic11,r.pic12,r.pic13,r.pic14,r.pic15,r.pic16,r.pic17,r.pic18,r.pic19,r.pic20,r.pic21,r.pic22,r.pic23],m=0;m<r.picVarArray.length;m++)r.picVarArray[m]=c;o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],i=p(e)},p=function(e){var r;for(r=0;r<e.length;r++){var i=y(r,e.length-1),o=e[r];e[r]=e[i],e[i]=o}return e},y=function(e,r){return Math.floor(Math.random()*(r-e+1)+e)};r["switch"]=function(e){1!=o[e]&&(1==a?(r.picVarArray[e]=i[e],s=e,a++):2==a&&r.picVarArray[e]!=i[e]&&(a=-1,r.picVarArray[e]=i[e],g(e)))};var g=function(i){r.picVarArray[s]==r.picVarArray[i]?d(i):e(h,3e3,!0,i)},d=function(e){u(),o[e]=1,o[s]=1,a=1,"one"==t&&r.score==r.picVarArray.length/2&&(r.hideGameOver=!1,r.hideOnePlayer=!0),"two"==t&&r.scorePlayerOne+r.scorePlayerTwo==r.picVarArray.length/2&&(r.hideGameOver=!1,r.hideTwoPlayers=!0,r.scorePlayerOne==r.scorePlayerTwo?r.gameOverMsg+="   it's a tie":r.scorePlayerOne>r.scorePlayerTwo?r.gameOverMsg+=l[0]+" won":r.gameOverMsg+=l[1]+" won")},h=function(e){"two"==t&&(r.twoPlayersTurn=(r.twoPlayersTurn+1)%2,r.currentPlayer=l[r.twoPlayersTurn]),r.picVarArray[e]=c,r.picVarArray[s]=c,a=1},u=function(){"one"==t?r.score++:0==r.twoPlayersTurn?r.scorePlayerOne++:r.scorePlayerTwo++};r.chooseNames=function(e){r.hideChooseName=!0,r.hideCards=!1,r.hideTwoPlayers=!1,l[0]=angular.copy(e.firstPlayerName),l[1]=angular.copy(e.secondPlayerName),r.currentPlayer=l[r.twoPlayersTurn]}}e.$inject=["$timeout"],angular.module("myapp").controller("MemoryGameController",e)}(),function(){"use strict";function e(e){var r=this;r.redirect=function(){r.greeting="working",e.go("memoryGame")}}e.$inject=["$state"],angular.module("myapp").controller("MainController",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("myapp").run(e)}(),function(){"use strict";function e(e,r){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),e.state("memoryGame",{url:"/memoryGame",templateUrl:"app/memoryGame/memoryGame.html",controller:"MemoryGameController",controllerAs:"memory"}),r.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("myapp").config(e)}(),function(){"use strict";angular.module("myapp").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,r){e.debugEnabled(!0),r.allowHtml=!0,r.timeOut=3e3,r.positionClass="toast-top-right",r.preventDuplicates=!0,r.progressBar=!0}e.$inject=["$logProvider","toastrConfig"],angular.module("myapp").config(e)}(),angular.module("myapp").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class=container ng-app=myapp><div class="jumbotron text-center" style="font-size: 30px;font-family: Dense, serif;letter-spacing: 4px"><h1>My Games App</h1></div><div ng-controller="MainController as main" style="font-size: 20px;font-family: Dense, serif;letter-spacing: 4px"><button class="btn btn-primary btn-lg btn-block" style="font-size: 20px;font-family: Dense, serif;letter-spacing: 4px" ng-click=main.redirect()>memory game</button></div></div>'),e.put("app/memoryGame/memoryGame.html",'<div ng-app=myapp><div ng-controller="MemoryGameController as memory"><nav style="background-color: #330000;color: #ffe6e6;font-size: 19px;font-family: Dense, serif"><div class=row><div class="col-md-2 col-sm-2" style="margin-left: 36%;margin-top: 10px;margin-bottom: 10px"><button style="background-color: #330000;letter-spacing: 4px" ng-click=memory.onePlayer()>One Player</button></div><div class="col-md-2 col-sm-2" style="margin-top: 10px;margin-bottom: 10px"><button style="background-color: #330000;letter-spacing: 4px" ng-click=memory.twoPlayers()>Two Players</button></div></div></nav><nav style="background-color: #D54D67;color: #ffe6e6;font-size: 17px;font-family: Dense, serif;letter-spacing: 4px"><div class=row><div class="col-md-5 col-sm-3" style="margin-top: 2px; margin-left: 8.3%"><p ng-hide=memory.hideOnePlayer>your score is: {{memory.score}}</p><p ng-hide=memory.hideTwoPlayers>{{memory.playersNames.firstPlayerName}}\'s score: {{memory.scorePlayerOne}}<br>{{memory.playersNames.secondPlayerName}}\'s score: {{memory.scorePlayerTwo}}</p><p ng-hide=memory.hideGameOver style=";font-size: 19px">{{memory.gameOverMsg}}</p></div><div class="col-md-5 col-sm-3 text-right" style="margin-top: 15px;font-size: 19px"><p ng-hide=memory.hideTwoPlayers>{{memory.currentPlayer}}\'s turn</p></div></div></nav><section ng-hide=memory.hideChooseName style="margin-left: 42%; margin-top: 5%;font-size: 17px;font-family: Dense, serif;letter-spacing: 4px"><form ng-submit=memory.chooseNames(memory.playersNames)>First player:<br><input type=text ng-model=memory.playersNames.firstPlayerName ng-required=memory.required><br>Second player:<br><input type=text ng-model=memory.playersNames.secondPlayerName ng-required=memory.required><br><input type=submit style="letter-spacing: 4px;background-color: #330000;color: #ffe6e6;font-size: 19px"></form></section><section class=container><div class=row ng-hide=memory.hideCards><div class="col-md-2 col-sm-3" style="margin-top: 10px"><img ng-src={{memory.picVarArray[0]}} style=width:174px;height:118px ng-click=memory.switch(0)></div><div class="col-md-2 col-sm-3" style="margin-top: 10px"><img ng-src={{memory.picVarArray[1]}} style=width:174px;height:118px ng-click=memory.switch(1)></div><div class="col-md-2 col-sm-3" style="margin-top: 10px"><img ng-src={{memory.picVarArray[2]}} style=width:174px;height:118px ng-click=memory.switch(2)></div><div class="col-md-2 col-sm-3" style="margin-top: 10px"><img ng-src={{memory.picVarArray[3]}} style=width:174px;height:118px ng-click=memory.switch(3)></div><div class="col-md-2 col-sm-3" style="margin-top: 10px"><img ng-src={{memory.picVarArray[4]}} style=width:174px;height:118px ng-click=memory.switch(4)></div><div class="col-md-2 col-sm-3" style="margin-top: 10px"><img ng-src={{memory.picVarArray[5]}} style=width:174px;height:118px ng-click=memory.switch(5)></div><div class="col-md-2 col-sm-3" style="margin-top: 10px"><img ng-src={{memory.picVarArray[6]}} style=width:174px;height:118px ng-click=memory.switch(6)></div><div class="col-md-2 col-sm-3" style="margin-top: 10px"><img ng-src={{memory.picVarArray[7]}} style=width:174px;height:118px ng-click=memory.switch(7)></div><div class="col-md-2 col-sm-3" style="margin-top: 10px"><img ng-src={{memory.picVarArray[8]}} style=width:174px;height:118px ng-click=memory.switch(8)></div><div class="col-md-2 col-sm-3" style="margin-top: 10px"><img ng-src={{memory.picVarArray[9]}} style=width:174px;height:118px ng-click=memory.switch(9)></div><div class="col-md-2 col-sm-3" style="margin-top: 10px"><img ng-src={{memory.picVarArray[10]}} style=width:174px;height:118px ng-click=memory.switch(10)></div><div class="col-md-2 col-sm-3" style="margin-top: 10px"><img ng-src={{memory.picVarArray[11]}} style=width:174px;height:118px ng-click=memory.switch(11)></div><div class="col-md-2 col-sm-3" style="margin-top: 10px"><img ng-src={{memory.picVarArray[12]}} style=width:174px;height:118px ng-click=memory.switch(12)></div><div class="col-md-2 col-sm-3" style="margin-top: 10px"><img ng-src={{memory.picVarArray[13]}} style=width:174px;height:118px ng-click=memory.switch(13)></div><div class="col-md-2 col-sm-3" style="margin-top: 10px"><img ng-src={{memory.picVarArray[14]}} style=width:174px;height:118px ng-click=memory.switch(14)></div><div class="col-md-2 col-sm-3" style="margin-top: 10px"><img ng-src={{memory.picVarArray[15]}} style=width:174px;height:118px ng-click=memory.switch(15)></div><div class="col-md-2 col-sm-3" style="margin-top: 10px"><img ng-src={{memory.picVarArray[16]}} style=width:174px;height:118px ng-click=memory.switch(16)></div><div class="col-md-2 col-sm-3" style="margin-top: 10px"><img ng-src={{memory.picVarArray[17]}} style=width:174px;height:118px ng-click=memory.switch(17)></div><div class="col-md-2 col-sm-3" style="margin-top: 10px"><img ng-src={{memory.picVarArray[18]}} style=width:174px;height:118px ng-click=memory.switch(18)></div><div class="col-md-2 col-sm-3" style="margin-top: 10px"><img ng-src={{memory.picVarArray[19]}} style=width:174px;height:118px ng-click=memory.switch(19)></div><div class="col-md-2 col-sm-3" style="margin-top: 10px"><img ng-src={{memory.picVarArray[20]}} style=width:174px;height:118px ng-click=memory.switch(20)></div><div class="col-md-2 col-sm-3" style="margin-top: 10px"><img ng-src={{memory.picVarArray[21]}} style=width:174px;height:118px ng-click=memory.switch(21)></div><div class="col-md-2 col-sm-3" style="margin-top: 10px"><img ng-src={{memory.picVarArray[22]}} style=width:174px;height:118px ng-click=memory.switch(22)></div><div class="col-md-2 col-sm-3" style="margin-top: 10px"><img ng-src={{memory.picVarArray[23]}} style=width:174px;height:118px ng-click=memory.switch(23)></div></div></section></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-7ae6305835.js.map
