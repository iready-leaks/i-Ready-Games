// reserve 10 % loading for bootstrapping
var INITIAL_LOAD_PERCENT = 10;

var fileLoadErrors = [];
var initialized = false;

function initCAGame() {
    // without setting the domain here we will have CORS error when accessing the parents variables
    var arrDomain = location.hostname.split('.');
    if (arrDomain.length > 2 && !/amazonaws/.test(location.hostname) && !/(?:[0-9]{1,3}\.){3}[0-9]{1,3}/.test(location.hostname)) {
        arrDomain.shift();
        document.domain = arrDomain.join('.');
    }

    // set retry loader hook
    window.preloader = {};
    var fileCounter = 0;
    var files = ['../shared/lib/phaser.min.js', 'js/main.js'];
    var retries = parent.window.gameBridge ? parent.window.gameBridge.info.numberOfRetries : 1;
    var retriesRemaining = retries;

    var loadNext = function(_retriesRemaining) {
        if (++fileCounter < files.length) {
            loadJS(files[fileCounter], loadNext, _retriesRemaining);
        }
    }

    loadJS(files[fileCounter], loadNext, retries);
}

function testAudioDecoding() {
    const TEST_AUDIO = '7romps,v7h4km,8y6lhp,2t4w,8y6lhp,ud4ajt,dzs8yx,27wr28,s4thly,17k9nnk,wahpbh,l3561q,eta6w1,e7cdh4,dddlbo,tyuyi8,1im8aej,kofo99,biyc69,feztsp,zjtcmc,1luzhbt,1pekbj9,1l981wu,1xmvqzh,tviurq,1t8fs3e,1q6kwez,1jswwl7,nesq0w,1vgjg7d,itvp7x,1aklzf6,1883ecn,18rzr6x,1uqxfuc,1amykjz,1tztjq,1q1vxbg,1spnp3j,1qgesbh,ei9j7y,ndra8k,1kipc97,1nhk6xl,1oyoorh,gknpfh,q16ywr,1xlfbis,n8jabh,hh3qa7,6tmman,1h1fe76,1lo8mf3,h5fby4,18zr63y,1vliave,1lf60un,j8dsbk,1sxrdw4,3vvrh1,h5unbs,14f07q,8hjw12,1pjusn4,fg6o60,1tvrmhl,9td9ed,y5vkf2,7veddi,ehbauw,13avlbi,1nhsz92,si49nd,e2dbhy,1fh2uq8,yjwxn5,ff7fr0,1fmwhmu,jd0u5t,1wyujqa,11l2vhv,1y26vau,69dybj,1v38oto,a4jmir,101y5mo,o9fegw,vcqtjs,510zr,1a19c15,m5y,1y6n1ts,1lu8be7,1xx5og,1o36hti,4vp,vl9s00,ho8bev,11nd,0,25detb,qmcwzh,3j4cj,nuzvof,hqzh7u,4kc9k,pixmov,ymls6m,bv0kgf,1xxloc,1e308w1,tys8g,ux3g1z,3a,szg4fg,2s,0,0,tys5c,6g,1el4,74,0,0,1ekg,0,0,0,1ekg,0,0,0,cn4,0,0,0,0,0,0,0,jz6rm,r1ddtd,2z,sz0pjw,2s,3,0,0,1,0,o,0,0,75,1ekg,0,0,0,1ekg,0,0,0,cn4,0,0,0,walx5w,37,w0xkbg,38,0,1,13ydjs,1ekg,9zlds,t8qfmx,2p,syqu5c,2s,0,0,1bq25ts,13ydl0,7ns4i,0,u2p6p9,36,0,wl11j4,32,0,0,wl0v7k,qzqaum,s538tq,36,t92xoh,k8e,ud9d6o,ju0,0,0,t8q134,k8e,vqmby8,k85,0,74,vra4g0,6ek,74,wb6kg1,leq,wb70n4,jub,0,74,v704jk,j78,0,74,0,jz6rk,35s,j1xzpc,0,w0nh1c,msk,zio8ow,1goe8,zipn9d,hs70xs,l,5k8qo0,5k8qo0,znkiyt,nvcf0l,zisgkl,k1aps,8vn08w,w18vw3,0,jz6rk,jz6rk,5m9s,9zlds,9fm70g,7romps,rldz77,0,9zlds,9zlds,tys5c,9zlds,8vn08w,xz4n03,0,0,tys5c,1ixrls0,1k1pzb4,1dxyww,5jrvnk,uwmmpf,0,9zlds,c7i4u8,77pfy8,rv9ab7,1,u30goi,jz6rk,9zlds,1ekf,rbdwcg,m7b,ux7280,lf0,74,lc,74,rvga2o,j90,s54lc0,j90,0,ruxnuo,mlo,0,rv4i68,v6jejt,lf4,0,0,t6kkqo,4jkoc,1axjcow,4cj1w,rs04qo,3sw2p,1ekg,l35534,eteeld,f1jl14,ddc7ce';
    const promise = new Promise((resolve, reject) => {
        const arrayBuffer = Uint32Array.from(TEST_AUDIO.split(',').map(n => parseInt(n, 36))).buffer;
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioContext = new AudioContext();

        // Reference: https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData
        // Apple's trillions of dollars unforunately can't buy quality audio playback on the web even more than 10 years after they said we don't need Flash.
        try {
            // let's try the new promise syntax first
            audioContext
                .decodeAudioData(arrayBuffer)
                .then(() => {
                    resolve(true);
                })
                .catch((err) => {
                    // next syntax rejected meaining a decode error
                    resolve(false);
                });
        } catch (err) {
            // new promise syntax not supported, fallback to old

            audioContext
                .decodeAudioData(arrayBuffer, function() {
                        resolve(true);
                    },
                    function(e) {
                        // errorCallback if an error occurs when the audio data is being decoded.
                        resolve(false);
                    });
        }
    });

    return promise;
}

function enableAlternateDecoder(av, ctx) {
    BaseAudioContext.prototype.decodeAudioData = function(arraybuffer, success, error) {
        var decode = function(resolve) {
            var asset = av.Asset.fromBuffer(arraybuffer);
            asset.decodeToBuffer(function(buffer) {
                const bufferLength = buffer.length;
                var channels = asset.format.channelsPerFrame;
                var samples = bufferLength / channels;
                var audiobuffer = ctx.createBuffer(channels, samples, asset.format.sampleRate);
                // https://github.com/audiocogs/aurora.js/issues/122#issuecomment-169372744
                var audioChans = [];
                for (var i = 0; i < channels; i++) {
                    audioChans.push(audiobuffer.getChannelData(i));
                }
                for (var i = 0; i < bufferLength; i++) {
                    audioChans[i % channels][Math.round(i / channels)] = buffer[i];
                }
                // console.info('decoded with aurora', asset);
                resolve(audiobuffer);
            });
        };

        if (typeof success === 'function') {
            // old callback style
            decode(success);
        } else {
            // newer Promise style
            return new Promise((resolve, reject) => {
                decode(resolve);
            });
        }
    };
}

function getTrimmedName(name, maxLength) {
    var nameEntry = name;
    if (nameEntry.length > maxLength) {
        nameEntry = nameEntry.substring(0, maxLength) + '…';
    }

    return nameEntry;
}

function loadJS(url, implementationCode, retriesRemaining) {
    var scriptTag = document.createElement('script');
    var onError = function() {
        console.warn('retrying load', url);
        if (retriesRemaining) {
            loadJS(url, implementationCode, --retriesRemaining);
        } else {
            console.error('unable to load', url);
        }
    }
    scriptTag.src = url;
    scriptTag.onerror = onError;
    scriptTag.onload = implementationCode;
    if (implementationCode) {
        scriptTag.onreadystatechange = implementationCode.bind(this, retriesRemaining);
    }

    document.getElementsByTagName('head')[0].appendChild(scriptTag);
};

function findScoreIndex(score, leaderboardText, scoreAttribute, studentId) {
    var scoreIndex = -1;
    var i;
    if (leaderboardText != null && leaderboardText[scoreAttribute] != null) {
        var len = leaderboardText[scoreAttribute].length;
        for (i = 0; i < len; i++) {
            if (leaderboardText[scoreAttribute][i].studentId === studentId && leaderboardText[scoreAttribute][i].score == score)
                scoreIndex = i;
        }
    }

    return scoreIndex;
}

initCAGame();

// retry hooks
function initRetryLoaders(game, context, cb) {
    var retries = parent.window.gameBridge ? parent.window.gameBridge.info.numberOfRetries : 1;
    game.load.onFileError.add(fileError, context);
    game.load.onLoadComplete.add(loadComplete.bind(context, cb, retries, game), context);
}

function fileError(key, file) {
    console.warn('file load error', key, file)
    fileLoadErrors.push(file);

}

function loadComplete(cb, retries, game) {
    if (fileLoadErrors.length) {
        console.warn("Load Complete w/ errors", retries, ' retries remaining');
        if (retries) {
            retryLoadFailures(cb, --retries, game);
        }
    } else {
        if (cb) {
            cb();
        }
    }
}

function retryLoadFailures(cb, retries, game) {
    loader = new Phaser.Loader(game);
    loader.onFileError.add(fileError, this);
    loader.onLoadComplete.add(loadComplete.bind(this, cb, retries, game), this);
    var timestamp = Date.now().toString();

    while (fileLoadErrors.length) {
        var file = fileLoadErrors.pop();
        var url = file.url + '?ts=' + timestamp
        console.log('retrying', file)
        if (file.type === 'spritesheet') {
            loader[file.type](file.key, url, file.frameWidth, file.frameHeight, file.frameMax);
        } else {
            loader[file.type](file.key, url);
        }
    };
    loader.start();
}

const monkeyPatches = {
    // The Touch events in Phaser v2.6.2 did not ensure that the event was `cancelable` before attempting to invoke
    // preventDefault.  The code below adds that check to the original event handlers which can be found at
    // https://github.com/photonstorm/phaser/blob/v2.6.2/src/input/Touch.js#L247-L441
    Touch: [
        /**
         * The internal method that handles the touchstart event from the browser.
         * @method Phaser.Touch#onTouchStart
         * @param {TouchEvent} event - The native event from the browser. This gets stored in Touch.event.
         */
        function onTouchStart(Touch) {
            Touch.prototype.onTouchStart = function(event) {
                var i = this.touchLockCallbacks.length;

                while (i--) {
                    var cb = this.touchLockCallbacks[i];

                    if (!cb.onEnd && cb.callback.call(cb.context, this, event)) {
                        this.touchLockCallbacks.splice(i, 1);
                    }
                }

                this.event = event;

                if (!this.game.input.enabled || !this.enabled) {
                    return;
                }

                if (this.touchStartCallback) {
                    this.touchStartCallback.call(this.callbackContext, event);
                }

                // PATCH due to https://github.com/photonstorm/phaser/issues/3915
                if (this.capture && event.cancelable) {
                    event.preventDefault();
                }

                //  event.targetTouches = list of all touches on the TARGET ELEMENT (i.e. game dom element)
                //  event.touches = list of all touches on the ENTIRE DOCUMENT, not just the target element
                //  event.changedTouches = the touches that CHANGED in this event, not the total number of them
                for (var i = 0; i < event.changedTouches.length; i++) {
                    this.game.input.startPointer(event.changedTouches[i]);
                }
            };
            return Touch;
        },


        /**
         * The handler for the touchend events.
         * @method Phaser.Touch#onTouchEnd
         * @param {TouchEvent} event - The native event from the browser. This gets stored in Touch.event.
         */
        function onTouchEnd(Touch) {
            Touch.prototype.onTouchEnd = function(event) {
                var i = this.touchLockCallbacks.length;

                while (i--) {
                    var cb = this.touchLockCallbacks[i];

                    if (cb.onEnd && cb.callback.call(cb.context, this, event)) {
                        this.touchLockCallbacks.splice(i, 1);
                    }
                }

                this.event = event;

                if (this.touchEndCallback) {
                    this.touchEndCallback.call(this.callbackContext, event);
                }

                // PATCH due to https://github.com/photonstorm/phaser/issues/3915
                if (this.capture && event.cancelable) {
                    event.preventDefault();
                }

                //  For touch end its a list of the touch points that have been removed from the surface
                //  https://developer.mozilla.org/en-US/docs/DOM/TouchList
                //  event.changedTouches = the touches that CHANGED in this event, not the total number of them
                for (var i = 0; i < event.changedTouches.length; i++) {
                    this.game.input.stopPointer(event.changedTouches[i]);
                }
            };
            return Touch;
        }
    ],
};

/**
 * Applies monkey patches for each key that an entry in the monkeyPatches mapping.
 * @param {Object} dependencies
 * @returns {Object} dependencies with monkey patches applied
 */
function applyMonkeyPatches(dependencies) {
    Object.keys(dependencies).forEach(dependency => {
        const patches = monkeyPatches[dependency];
        if (patches && patches.length) {
            patches.forEach(patch => (dependencies[dependency] = patch(dependencies[dependency])));
        }
    });
    return dependencies;
}