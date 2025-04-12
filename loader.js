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
    frame.src = "rewardGames/game-" + name + "/"
    frame.id = "reward-game-container"

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

let learningGamesURLs = {
    "Bounce": "/games/Bounce/release-4.7.0/2",
    "CloudMachine": "/games/CloudMachine/release-4.7.0/2",
    "Cupcake": "/games/Cupcake/release-4.7.0/2",
    "HungryFish": "/games/HungryFish/release-4.7.0/2",
    "HungryGuppy": "/games/HungryGuppy/release-4.7.0/2",
    "Match": "/games/Match/release-4.7.0/2",
    "Pizza": "/games/Pizza/release-4.7.0/2",
    "Zoom": "/games/Zoom/release-4.7.0/2"
}

let useIReadyServer = false;

function playGame(name) {

    let serverURL;

    if (useIReadyServer) {
        serverURL = "https://cdn.i-ready.com" + learningGamesURLs[name] + "/" + name;
    } else {
        serverURL = "games/" + name + "/" + name;
    }

    var data = {
        dataUrl: serverURL + ".data.br",
        frameworkUrl: serverURL + ".framework.js.br",
        codeUrl: serverURL + ".wasm.br",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "Curriculum Associates, Inc.",
        productName: name,
        productVersion: "1.0"
    };

    if (!useIReadyServer) {
        data.dataUrl = data.dataUrl.replace(".br", "");
        data.frameworkUrl = data.frameworkUrl.replace(".br", "");
        data.codeUrl = data.codeUrl.replace(".br", "");
    }

    document.getElementById("game-container").remove();
    let canvas = document.createElement("canvas");
    canvas.id = "unity-canvas";

    canvas.width = screen.width / 2;
    canvas.height = screen.height / 2;

    document.body.append(canvas);

    createUnityInstance(canvas, data).then((instance) => {
        window.instance = instance;
    });
}
