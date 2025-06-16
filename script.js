function checkScore() {
    const scores = document.getElementById('scores');
    const show = document.getElementById('show');
    const songFail = document.getElementById('failSound');
    const songPass = document.getElementById('passSound');
    const songExcellent = document.getElementById('excellentAudio');

    const score = parseInt(scores.value);

    if (score >=0 && score < 45) {
        show.innerHTML = 'F - Fail';
        songFail.play();
    } else if (score >= 45 && score < 70) {
        show.innerHTML = 'B - Good';
        songPass.play();
    } else if (score >= 70 && score <= 100) {
        show.innerHTML = 'A - Excellent';
        songExcellent.play();
    }
}
