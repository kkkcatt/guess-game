const moves = ['rock', 'paper', 'scissors'];
let score = JSON.parse(localStorage.getItem('score'))||{Wins:0,Losses:0,Ties:0}
let result = '';
let isAutoPlay = false;
let autoPlayInterval =''


document.querySelector('.score')
.innerHTML = `Wins:${score.Wins},Losses:${score.Losses},Ties:${score.Ties}`
function playGame(playerMove){
    const randomNumber = Math.floor(Math.random() * 3); // 生成0到2之间的随机整数
    let computerMove = moves[randomNumber];//电脑随机出
    if (playerMove ==='paper') {
      if (computerMove === 'paper') {
      result = 'Tie'
    } else if (computerMove === 'rock') {
      result = 'You Win'
    } else if (computerMove === 'scissors') {
      result = 'You Lose'
    }
    }else if(playerMove ==='rock') {
      if (computerMove === 'rock') {
      result = 'Tie'
    } else if (computerMove === 'scissors') {
      result = 'You Win'
    } else if (computerMove === 'paper') {
      result = 'You Lose'
    }
    }else if(playerMove ==='scissors') {
        if (computerMove === 'scissors') {
        result = 'Tie'
      } else if (computerMove === 'paper') {
        result = 'You Win'
      } else if (computerMove === 'rock') {
        result = 'You Lose'
      }
      }
      document.querySelector('.result').innerHTML = `${result}`
      document.querySelector('.move') 
      .innerHTML = `You- ${playerMove} ${computerMove}-computer`
      scoreResult(result)//传递参数

  }

function scoreResult(){
   
    if (result ==='Tie'){
      score.Ties ++
    }else if (result === 'You Win'){
      score.Wins ++
    }else if (result === 'You Lose'){
      score.Losses ++
    }
    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector('.score')
    .innerHTML = `Wins:${score.Wins},Losses:${score.Losses},Ties:${score.Ties}`
}

function resetScore(){
  score.Wins = 0;
  score.Losses = 0;
  score.Ties = 0;
  localStorage.setItem('score', JSON.stringify(score));
  document.querySelector('.score').innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
}


function autoPlay() {
  if(!isAutoPlay){
    autoPlayInterval =  setInterval(()=>{
      const playerMove = moves[Math.floor(Math.random() * 3)]
    playGame(playerMove)
    },1000);
    isAutoPlay = true;
  }else  {clearInterval(autoPlayInterval);
    isAutoPlay = false;}
}