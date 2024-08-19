let score = JSON.parse(localStorage.getItem('score'))||{Wins:0,Losses:0,Ties:0}
let isAutoPlay = false
let autoPlayInterval = null;

document.querySelector('.score')
.innerHTML = `Wins:${score.Wins},Losses:${score.Losses},Ties:${score.Ties}`
function computerResult() {
    const randomValue = Math.random();
    if (randomValue < 1 / 3) return 'rock';
    if (randomValue < 2 /3) return 'paper';
    return 'scissors';
}
function getResult(playerMove, computerMove){
    if (playerMove === computerMove) return 'Tie';
    if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock')||
        (playerMove === 'scissors' && computerMove === 'paper')
    )return 'You Win';
    return 'You Lose';
}
function updateScore(result) {
    if (result === 'Tie') {
        score.Ties++;
    } else if (result === 'You Win') {
        score.Wins++;
    } else if (result === 'You Lose') {
        score.Losses++;
    }
    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.score').innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
}

function playGame(playerMove) {
    const computerMove = computerResult();
    const result = getResult(playerMove, computerMove); 
    console.log(`Player: ${playerMove}`,`Computer: ${computerMove}`,`Result: ${result}`);
    document.querySelector('.result').innerHTML = `${result}`
    document.querySelector('.move').innerHTML = `You-${playerMove} | ${computerMove}-Computer`
    updateScore(result);   
} 

function resetScore() {
    score = { Wins: 0, Losses: 0, Ties: 0 }; 
    localStorage.setItem('score', JSON.stringify(score));//注意
    document.querySelector('.score').innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
}

function autoPlay() {
    if(!isAutoPlay){
      autoPlayInterval =  setInterval(()=>{
        const playerMove = computerResult()
      playGame(playerMove)
      },1000);
      isAutoPlay = true;
    }else  {clearInterval(autoPlayInterval);
      isAutoPlay = false;}
  }
 
