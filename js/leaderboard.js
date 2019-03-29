var scores = JSON.parse(localStorage.getItem('highScoreList'));

document.getElementById('highscore1').innerHTML = scores[0];
document.getElementById('highscore2').innerHTML = scores[1];
document.getElementById('highscore3').innerHTML = scores[2];
document.getElementById('highscore4').innerHTML = scores[3];
document.getElementById('highscore5').innerHTML = scores[4];
