$( document ).ready(function(){
  
  var bigNum=Math.floor(Math.random()*101+19)
  
  $('#random_number').text(bigNum);
  
  var number1= Math.floor(Math.random()*11+1)
 
  var number2= Math.floor(Math.random()*11+1)
  
  var number3= Math.floor(Math.random()*11+1)
  
  var number4= Math.floor(Math.random()*11+1)
   
  var wins= 0;
  
  var losses = 0;
  
  var userSum= 0;
  
$('#numberOfWins').text(wins);

$('#numberOfLosses').text(losses);

function resetgame(){
      
    bigNum=Math.floor(Math.random()*101+19);
      
    console.log(bigNum)
      
    $('#random_number').text(bigNum);
      
    number1= Math.floor(Math.random()*11+1);
      
    number2= Math.floor(Math.random()*11+1);
      
    number3= Math.floor(Math.random()*11+1);
      
    number4= Math.floor(Math.random()*11+1);
      
    userSum= 0;
      
    $('#totalScore').text(userSum);
      
    } 

function winner(){
  
    wins++; 
  
    $('#numberOfWins').text(wins);
  
  resetgame();

}

function loser(){

  losses++;

  $('#numberOfLosses').text(losses);

  resetgame()

}

  $('#one').on ('click', function(){

    userSum = userSum + number1;

    console.log("New userSum= " + userSum);

    $('#totalScore').text(userSum); 

          if (userSum == bigNum){
          
            winner();
          
            }
        
          else if ( userSum > bigNum){
          
            loser();
        
           }   
  
  })  
  
  $('#two').on ('click', function(){
    
    userSum = userSum + number2;
    
    console.log("New userSum= " + userSum);
    
    $('#totalScore').text(userSum); 
        
        if (userSum == bigNum){
        
          winner();
        }
        
        else if ( userSum > bigNum){
        
          loser();
        
        } 
  
  })  
  
  $('#three').on ('click', function(){
    
    userSum = userSum + number3;
    
    console.log("New userSum= " + userSum);
    
    $('#totalScore').text(userSum);

          if (userSum == bigNum){
          
            winner();
           
            }
        
          else if ( userSum > bigNum){
          
          loser();
            
            } 
  })  
  
  $('#four').on ('click', function(){
    
    userSum = userSum + number4;
    
    console.log("New userSum= " + userSum);
    
    $('#totalScore').text(userSum); 
    

          if (userSum == bigNum){
           
            winner();
        
            }
        
          else if ( userSum > bigNum){
            
            loser();
        
        }
  
  });   

}); 