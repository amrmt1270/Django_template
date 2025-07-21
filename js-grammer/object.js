let game = {
    startTime: null,
    displayArea: document.getElementById('display-area'),
    timerId: null, // ← タイマー用のID

    Start: function () {
        game.startTime = Date.now();
        document.body.onkeypress = game.Stop;

        // タイマーを定期的に更新
        game.timerId = setInterval(function () {
            let currentTime = Date.now();
            let seconds = ((currentTime - game.startTime) / 1000).toFixed(2);
            game.displayArea.innerText = seconds + '秒 経過中...';
        }, 100); // 100msごとに更新
    },

    Stop: function () {
        let currentTime = Date.now();
        let seconds = ((currentTime - game.startTime) / 1000).toFixed(2);

        clearInterval(game.timerId); // ← タイマーを止める

        if (9.5 <= seconds && seconds <= 10.5) {
            game.displayArea.innerText = seconds + '秒でした！すごい!';
        } else {
            game.displayArea.innerText = seconds + '秒でした。残念...';
        }

        document.body.onkeypress = null; // イベントの解除（連続押し防止）
    }
};

if (confirm('OKを押して10秒だと思ったら何かキーを押してください')) {
    game.Start();
}
