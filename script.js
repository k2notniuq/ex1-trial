function hideInstruction(event) {
    var instructions = document.getElementById("instructions");
    var plusIcon = document.getElementById("plusIcon");
    var trial = document.getElementById("trial");
    if (event.code === "Space") {
      instructions.style.display = "none";
      plusIcon.style.display = "flex";
      var randomValue = (Math.floor(Math.random() * 5) + 1) * 1000;
      console.log(randomValue);
      setTimeout(() => {
        plusIcon.style.display = "none";
        trial.style.display = "flex";
        userTrial(10);
      }, randomValue);
    }
  }
  
  function userTrial(totalQuestion) {
    
    var random = Math.floor(Math.random() * 4) + 1;
    console.log("random = " + random);
    document.getElementById("trialImage").src = random + ".png";
    var time1 = Date.now();
    var counter = 1;
    document.addEventListener("keydown", function (event) {
      var time2 = Date.now();
      var reactionTime = time2 - time1;
      if (random == 1 && event.code === "ArrowUp") {
        if (counter <= totalQuestion) {
          console.log("Up, user correct");
          console.log("Time to react: " + reactionTime);
        }
      } else if (random == 2 && event.code === "ArrowUp") {
        if (counter <= totalQuestion) {
          console.log("Up, user correct");
          console.log("Time to react: " + reactionTime);
        }
      } else if (random == 3 && event.code === "ArrowDown") {
        if (counter <= totalQuestion) {
          console.log("Down, user correct");
          console.log("Time to react: " + reactionTime);
        }
      } else if (random == 4 && event.code === "ArrowDown") {
        if (counter <= totalQuestion) {
          console.log("Down, user correct");
          console.log("Time to react: " + reactionTime);
        }
      } else if (random == 1 && event.code === "ArrowDown") {
        if (counter <= totalQuestion) {
          console.log("Down, user incorrect");
          console.log("Time to react: " + reactionTime);
        }
      } else if (random == 2 && event.code === "ArrowDown") {
        if (counter <= totalQuestion) {
          console.log("Down, user incorrect");
          console.log("Time to react: " + reactionTime);
        }
      } else if (random == 3 && event.code === "ArrowUp") {
        if (counter <= totalQuestion) {
          console.log("Down, user incorrect");
          console.log("Time to react: " + reactionTime);
        }
      } else if (random == 4 && event.code === "ArrowUp") {
        if (counter <= totalQuestion) {
          console.log("Down, user incorrect");
          console.log("Time to react: " + reactionTime);
        }
      }
  
      if (counter < totalQuestion) {
        counter++;
        var newRandom;
        do {
          newRandom = Math.floor(Math.random() * 4) + 1;
        } while (newRandom === random);
        random = newRandom;
        
        document.getElementById("trialImage").src = random + ".png";
        time1 = Date.now();
      } else {
        trial.style.display = "none";
        var nextInstruction = document.getElementById("nextInstruction");
         nextInstruction.style.display = 'flex';  
      }
    });
  }
  
  document.addEventListener("keydown", hideInstruction);