(function() {

  'use strict';

  angular
    .module('myapp')
    .controller('MemoryGameController', MemoryGameController);

  /** @ngInject */
  function MemoryGameController($timeout) {
    var vm = this;

    vm.hideCards = true;
    vm.hideOnePlayer =true;
    vm.hideTwoPlayers = true;
    vm.hideChooseName = true;
    vm.playersNames = {firstPlayerName:"", secondPlayerName:""};
    vm.required = "ture";
    vm.hideGameOver = true;
    var backSidePic = "backside4.jpg";
    var firstTurnIndex = -1;
    var turns = 1;
    var randomPicArray, foundCouples,players,i;
    var playerNamesArray = [vm.playersNames.firstPlayerName,vm.playersNames.secondPlayerName];


    vm.onePlayer = function () {
      players = "one";
      vm.hideCards = false;
      vm.hideOnePlayer = false;
      vm.hideTwoPlayers = true;
      vm.hideChooseName = true;
      vm.score = 0;
      newGame();
    }

    vm.twoPlayers = function () {
      players = "two";
      vm.hideOnePlayer = true;
      vm.hideTwoPlayers = true;
      vm.hideCards = true;
      vm.hideChooseName = false;
      vm.scorePlayerOne = 0;
      vm.scorePlayerTwo = 0;
      vm.twoPlayersTurn = randomNumBetween(0,1); // 0-first player 1- second player
      newGame();
    }

    var newGame = function () {
      vm.hideGameOver = true;
      vm.gameOverMsg = "Game Over!  ";
      firstTurnIndex = -1;
      turns = 1;
      var picArray1 = ["IMG_2476.JPG","IMG_4275.JPG","IMG_5009.JPG","IMG_4857.JPG","IMG_3176.JPG","IMG_5009.JPG","IMG_4275.JPG"
        ,"IMG_4860.JPG","IMG_4857.JPG","IMG_2476.JPG","IMG_3176.JPG","IMG_4860.JPG","IMG_5088.JPG","IMG_5088.JPG","IMG_5128.JPG"
        ,"IMG_5128.JPG","IMG_5153.JPG","IMG_5153.JPG","IMG_5928.JPG","IMG_5928.JPG","IMG_1111.JPG","IMG_1111.JPG","IMG_2222.jpg"
        ,"IMG_2222.jpg"];
      vm.picVarArray = [vm.pic0,vm.pic1,vm.pic2,vm.pic3,vm.pic4,vm.pic5,vm.pic6,vm.pic7,vm.pic8,vm.pic9,vm.pic10,vm.pic11,
        vm.pic12,vm.pic13,vm.pic14,vm.pic15,vm.pic16,vm.pic17,vm.pic18,vm.pic19,vm.pic20,vm.pic21,vm.pic22,vm.pic23];
      for(i=0;i<vm.picVarArray.length;i++){
        vm.picVarArray[i] = backSidePic;
      }
      foundCouples = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      randomPicArray = randomArray(picArray1);
    }

    var randomArray = function (array) {
      var i;
      for(i=0;i<array.length;i++){
        var randomIndex = randomNumBetween(i,array.length-1);
        var temp = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = temp;
      }
      return array;
    }

    var randomNumBetween = function randomIntFromInterval(min,max)
    {
      return Math.floor(Math.random()*(max-min+1)+min);
    }

    vm.switch = function (index) {
      if(foundCouples[index]==1){
        return;
      }
      if(turns == 1 ) {
        vm.picVarArray[index] = randomPicArray[index];
        firstTurnIndex = index;
        turns++;
      }else if(turns == 2 && vm.picVarArray[index] != randomPicArray[index]){
        turns = -1;
        vm.picVarArray[index] = randomPicArray[index];
        play(index);
      }
    }


     var play = function (index) {
      if(vm.picVarArray[firstTurnIndex] == vm.picVarArray[index]){
        foundMatch(index);
      }
      else{
        $timeout(turnCards,3000,true,index);
      }
    }

    var foundMatch = function (index) {
      scoreUp();
      foundCouples[index]=1;
      foundCouples[firstTurnIndex]=1;
      turns = 1;
      if(players == "one" && vm.score == vm.picVarArray.length/2) {
        vm.hideGameOver = false;
        vm.hideOnePlayer = true;
      //  winDialog();
      }
      if( players == "two" && vm.scorePlayerOne+vm.scorePlayerTwo == vm.picVarArray.length/2){
        vm.hideGameOver = false;
        vm.hideTwoPlayers = true;
        if(vm.scorePlayerOne == vm.scorePlayerTwo){
          vm.gameOverMsg += "   it's a tie";
        }
        else{
          vm.scorePlayerOne > vm.scorePlayerTwo ? vm.gameOverMsg += playerNamesArray[0] + " won":
            vm.gameOverMsg += playerNamesArray[1] + " won";
        }
      }
    }
    var turnCards = function (index) {
      if(players == "two"){
        vm.twoPlayersTurn = (vm.twoPlayersTurn+1)%2;
        vm.currentPlayer = playerNamesArray[vm.twoPlayersTurn];
      }
      vm.picVarArray[index] = backSidePic;
      vm.picVarArray[firstTurnIndex] = backSidePic;
      turns = 1;
    }

    var scoreUp = function () {
      if(players == "one") {
        vm.score++;
      }
      else {
        vm.twoPlayersTurn == 0 ? vm.scorePlayerOne++ : vm.scorePlayerTwo++;
          }
    }

    vm.chooseNames = function (playersNames) {
      vm.hideChooseName = true;
      vm.hideCards = false;
      vm.hideTwoPlayers = false;
      playerNamesArray[0]=angular.copy(playersNames.firstPlayerName);
      playerNamesArray[1]=angular.copy(playersNames.secondPlayerName);
      vm.currentPlayer = playerNamesArray[vm.twoPlayersTurn];
    }
  }

})();
