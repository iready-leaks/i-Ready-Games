var swfobject = {};
swfobject.embedSWF = function(url, cont, width, height){
    var ruffle = window.RufflePlayer.newest(),
        player = Object.assign(document.getElementById(cont).appendChild(ruffle.createPlayer()), {
        width: width,
        height: height,
        style: 'width: ' + width + 'px; height: ' + height + 'px',
    });
            
    player.load({ url: url });
}

function playRewardGame(name) {
    document.getElementById("game-container").remove();
    let frame = document.createElement("iframe");
    frame.id = "unity-canvas";
    frame.src = "rewardGames/game-" + name + "/"
    frame.width = screen.width / 2;
    frame.height = screen.height / 2;

    document.body.append(frame);
}

function playFlashGame(name) {
    document.getElementById("game-container").remove();
    let container = document.createElement("div");
    container.id = "unity-canvas";

    container.width = screen.width / 2;
    container.height = screen.height / 2;

    document.body.append(container);

    swfobject.embedSWF("./flashGames/" + name + ".swf", "unity-canvas", 800, 600);
}

function playGame(name) {
    let serverURL = "games/" + name + "/" + name;
    var data = {
        dataUrl: serverURL + ".data",
        frameworkUrl: serverURL + ".framework.js",
        codeUrl: serverURL + ".wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "Curriculum Associates, Inc.",
        productName: "ass",
        productVersion: "1.0"
    };

    document.getElementById("game-container").remove();
    let canvas = document.createElement("canvas");
    canvas.id = "unity-canvas";

    canvas.width = screen.width / 2;
    canvas.height = screen.height / 2;

    document.body.append(canvas);

    createUnityInstance(canvas, data);
}
