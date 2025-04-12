( () => {
    "use strict";
    var e = {
        227: (e, t, n) => {
            function o(e, t, n, o) {
                return new (n = n || Promise)((function(r, i) {
                    function s(e) {
                        try {
                            a(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function l(e) {
                        try {
                            a(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        e.done ? r(e.value) : new n((function(t) {
                            t(e.value)
                        }
                        )).then(s, l)
                    }
                    a((o = o.apply(e, t || [])).next())
                }
                ))
            }
            var r, i, s, l, a, c;
            n.r(t),
            n.d(t, {
                platformConnectionFactory: () => g
            }),
            (c = r = r || {}).Call = "call",
            c.Reply = "reply",
            c.Syn = "syn",
            c.SynAck = "synAck",
            c.Ack = "ack",
            function(e) {
                e.Fulfilled = "fulfilled",
                e.Rejected = "rejected"
            }(i = i || {}),
            function(e) {
                e.ConnectionDestroyed = "ConnectionDestroyed",
                e.ConnectionTimeout = "ConnectionTimeout",
                e.NotInIframe = "NotInIframe",
                e.NoIframeSrc = "NoIframeSrc"
            }(s = s || {}),
            (l = l || {}).DataCloneError = "DataCloneError",
            (a = a || {}).Message = "message";
            const d = ({name: e, message: t, stack: n}) => ({
                name: e,
                message: t,
                stack: n
            });
            let u = 0;
            var p = (e, t, n, o) => {
                const {destroy: c, onDestroy: p} = n;
                return n => {
                    var g, f;
                    if (e instanceof RegExp ? e.test(n.origin) : "*" === e || e === n.origin)
                        return o("Child: Handshake - Received SYN-ACK, responding with ACK"),
                        g = "null" === n.origin ? "*" : n.origin,
                        f = {
                            penpal: r.Ack,
                            methodNames: Object.keys(t)
                        },
                        window.parent.postMessage(f, g),
                        g = ( (e, t, n) => {
                            const {localName: o, local: s, remote: c, originForSending: u, originForReceiving: p} = e;
                            let g = !1;
                            const f = e => {
                                if (e.source === c && e.data.penpal === r.Call)
                                    if (e.origin !== p)
                                        n(`${o} received message from origin ${e.origin} which did not match expected origin ` + p);
                                    else {
                                        const {methodName: s, args: a, id: p} = e.data;
                                        n(`${o}: Received ${s}() call`),
                                        e = e => t => {
                                            if (n(`${o}: Sending ${s}() reply`),
                                            g)
                                                n(`${o}: Unable to send ${s}() reply due to destroyed connection`);
                                            else {
                                                const n = {
                                                    penpal: r.Reply,
                                                    id: p,
                                                    resolution: e,
                                                    returnValue: t
                                                };
                                                e === i.Rejected && t instanceof Error && (n.returnValue = d(t),
                                                n.returnValueIsError = !0);
                                                try {
                                                    c.postMessage(n, u)
                                                } catch (e) {
                                                    throw e.name === l.DataCloneError && (t = {
                                                        penpal: r.Reply,
                                                        id: p,
                                                        resolution: i.Rejected,
                                                        returnValue: d(e),
                                                        returnValueIsError: !0
                                                    },
                                                    c.postMessage(t, u)),
                                                    e
                                                }
                                            }
                                        }
                                        ,
                                        new Promise((e => e(t[s].apply(t, a)))).then(e(i.Fulfilled), e(i.Rejected))
                                    }
                            }
                            ;
                            return s.addEventListener(a.Message, f),
                            () => {
                                g = !0,
                                s.removeEventListener(a.Message, f)
                            }
                        }
                        )(f = {
                            localName: "Child",
                            local: window,
                            remote: window.parent,
                            originForSending: g,
                            originForReceiving: n.origin
                        }, t, o),
                        p(g),
                        f = ( (e, t, n, o, l) => {
                            const {localName: c, local: d, remote: p, originForSending: g, originForReceiving: f} = t;
                            let h = !1;
                            return l(c + ": Connecting call sender"),
                            n.reduce(( (e, t) => {
                                var n;
                                return e[t] = (n = t,
                                (...e) => {
                                    let t;
                                    l(c + `: Sending ${n}() call`);
                                    try {
                                        p.closed && (t = !0)
                                    } catch (e) {
                                        t = !0
                                    }
                                    if (t && o(),
                                    h) {
                                        const e = new Error(`Unable to send ${n}() call due to destroyed connection`);
                                        throw e.code = s.ConnectionDestroyed,
                                        e
                                    }
                                    return new Promise(( (t, o) => {
                                        const s = ++u
                                          , h = e => {
                                            if (e.source === p && e.data.penpal === r.Reply && e.data.id === s)
                                                if (e.origin !== f)
                                                    l(`${c} received message from origin ${e.origin} which did not match expected origin ` + f);
                                                else {
                                                    e = e.data,
                                                    l(c + `: Received ${n}() reply`),
                                                    d.removeEventListener(a.Message, h);
                                                    let r = e.returnValue;
                                                    e.returnValueIsError && (r = (e => {
                                                        const t = new Error;
                                                        return Object.keys(e).forEach((n => t[n] = e[n])),
                                                        t
                                                    }
                                                    )(r)),
                                                    (e.resolution === i.Fulfilled ? t : o)(r)
                                                }
                                        }
                                        ;
                                        d.addEventListener(a.Message, h);
                                        var y = {
                                            penpal: r.Call,
                                            id: s,
                                            methodName: n,
                                            args: e
                                        };
                                        p.postMessage(y, g)
                                    }
                                    ))
                                }
                                ),
                                e
                            }
                            ), e),
                            () => {
                                h = !0
                            }
                        }
                        )(g = {}, f, n.data.methodNames, c, o),
                        p(f),
                        g;
                    o(`Child: Handshake - Received SYN-ACK from origin ${n.origin} which did not match expected origin ` + e)
                }
            }
            ;
            const g = () => {
                let e = () => {
                    throw new Error("onSplashScreenCompleted must be set.")
                }
                ;
                var t = (t = document.referrer && new URL(document.referrer)) ? t.protocol + "//" + t.host : /i-ready.com(:\d+)?$/;
                const n = ( (e={}) => {
                    const {parentOrigin: t="*", methods: n={}, timeout: o, debug: i=!1} = e
                      , l = (e => (...t) => {
                        e && console.log("[Penpal]", ...t)
                    }
                    )(i);
                    e = ( () => {
                        const e = [];
                        let t = !1;
                        return {
                            destroy(n) {
                                t = !0,
                                e.forEach((e => {
                                    e(n)
                                }
                                ))
                            },
                            onDestroy(n) {
                                t ? n() : e.push(n)
                            }
                        }
                    }
                    )();
                    const {destroy: c, onDestroy: d} = e
                      , u = (( () => {
                        if (window === window.top) {
                            const e = new Error("connectToParent() must be called within an iframe");
                            throw e.code = s.NotInIframe,
                            e
                        }
                    }
                    )(),
                    p(t, n, e, l));
                    return {
                        promise: new Promise(( (e, n) => {
                            const i = ( (e, t) => {
                                let n;
                                return void 0 !== e && (n = window.setTimeout(( () => {
                                    const n = new Error(`Connection timed out after ${e}ms`);
                                    n.code = s.ConnectionTimeout,
                                    t(n)
                                }
                                ), e)),
                                () => {
                                    clearTimeout(n)
                                }
                            }
                            )(o, c)
                              , p = t => {
                                ( () => {
                                    try {
                                        clearTimeout()
                                    } catch (e) {
                                        return !1
                                    }
                                    return !0
                                }
                                )() && t.source === parent && t.data && t.data.penpal === r.SynAck && (t = u(t)) && (window.removeEventListener(a.Message, p),
                                i(),
                                e(t))
                            }
                            ;
                            var g, f;
                            window.addEventListener(a.Message, p),
                            l("Child: Handshake - Sending SYN"),
                            g = {
                                penpal: r.Syn
                            },
                            f = t instanceof RegExp ? "*" : t,
                            window.parent.postMessage(g, f),
                            d((e => {
                                window.removeEventListener(a.Message, p),
                                e || ((e = new Error("Connection destroyed")).code = s.ConnectionDestroyed),
                                n(e)
                            }
                            ))
                        }
                        )),
                        destroy() {
                            c()
                        }
                    }
                }
                )({
                    parentOrigin: t,
                    methods: {
                        loaderCompleted() {
                            return o(this, void 0, void 0, (function*() {
                                e()
                            }
                            ))
                        }
                    }
                });
                return n.promise.catch(( () => console.error("disconnected from platform before making connection"))),
                {
                    preferences: {
                        fetch() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).preferencesFetch()
                            }
                            ))
                        },
                        update(e) {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).preferencesUpdate(e)
                            }
                            ))
                        }
                    },
                    settings: {
                        fetch() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).settingsFetch()
                            }
                            ))
                        }
                    },
                    stateStore: {
                        save(e) {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).stateStoreSave(e)
                            }
                            ))
                        },
                        fetch() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).stateStoreFetch()
                            }
                            ))
                        },
                        delete() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).stateStoreDelete()
                            }
                            ))
                        },
                        mark(e, t) {
                            return o(this, void 0, void 0, (function*() {
                                localStorage.setItem(e, JSON.stringify(t))
                            }
                            ))
                        },
                        jump(e) {
                            (e = localStorage.getItem(e)) && this.save(JSON.parse(e)).then(( () => window.location.reload()))
                        }
                    },
                    loader: {
                        setProgress(e) {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).loaderSetProgress(e)
                            }
                            ))
                        },
                        setCredits(e) {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).loaderSetCredits(e)
                            }
                            ))
                        },
                        onCompleted(t) {
                            e = t
                        }
                    },
                    student: {
                        fetch() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).studentFetch()
                            }
                            ))
                        }
                    },
                    activity: {
                        fetch() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).activityFetch()
                            }
                            ))
                        }
                    },
                    component: {
                        start() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).componentStart()
                            }
                            ))
                        },
                        pause() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).componentPause()
                            }
                            ))
                        },
                        resume() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).componentResume()
                            }
                            ))
                        },
                        close() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).componentClose()
                            }
                            ))
                        },
                        complete(e) {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).componentComplete(e)
                            }
                            ))
                        }
                    },
                    learnosity: {
                        start() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).learnosityStart()
                            }
                            ))
                        },
                        complete() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).learnosityComplete()
                            }
                            ))
                        },
                        close() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).learnosityClose()
                            }
                            ))
                        }
                    },
                    fluency: {
                        makeHttpRequest(e) {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).fluencyMakeHttpRequest(e)
                            }
                            ))
                        },
                        complete() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).fluencyComplete()
                            }
                            ))
                        },
                        close() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).fluencyClose()
                            }
                            ))
                        }
                    },
                    dataCapture: {
                        config() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).dataCaptureConfig()
                            }
                            ))
                        }
                    },
                    learningGames: {
                        close() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).learningGamesClose()
                            }
                            ))
                        }
                    },
                    remoteLogger: {
                        info(e) {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).remoteLoggerInfo(e)
                            }
                            ))
                        },
                        error(e) {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).remoteLoggerError(e)
                            }
                            ))
                        },
                        fatal(e) {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).remoteLoggerFatal(e)
                            }
                            ))
                        }
                    },
                    diagnosticItem: {
                        current() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).diagnosticItemCurrent()
                            }
                            ))
                        },
                        submit(e) {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).diagnosticItemSubmit(e)
                            }
                            ))
                        }
                    },
                    diagnosticWrapper: {
                        start(e) {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).diagnosticWrapperStart(e)
                            }
                            ))
                        }
                    },
                    diagnosticAnimation: {
                        done() {
                            return o(this, void 0, void 0, (function*() {
                                return (yield n.promise).diagnosticAnimationDone()
                            }
                            ))
                        }
                    },
                    ready() {
                        return o(this, void 0, void 0, (function*() {
                            yield n.promise
                        }
                        ))
                    },
                    close() {
                        try {
                            n.destroy()
                        } catch (e) {}
                    }
                }
            }
        }
        ,
        666: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const o = n(227);
            class r {
                constructor() {}
                static get Connection() {
                    if (this._connection)
                        return this._connection;
                    try {
                        this._connection = (0,
                        o.platformConnectionFactory)()
                    } catch (e) {
                        if (!this._errorMessageTriggered) {
                            this._errorMessageTriggered = !0;
                            const t = e instanceof Error ? e.message : e;
                            console.error(t)
                        }
                    }
                    return this._connection
                }
            }
            t.default = r,
            r._connection = null,
            r._errorMessageTriggered = !1
        }
        ,
        454: (e, t) => {
            var n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.LogType = void 0,
            (n = t.LogType || (t.LogType = {}))[n.Error = 0] = "Error",
            n[n.Assert = 1] = "Assert",
            n[n.Warning = 2] = "Warning",
            n[n.Log = 3] = "Log",
            n[n.Exception = 4] = "Exception",
            n[n.Debug = 5] = "Debug"
        }
        ,
        657: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.loadingSplashDismissed = t.initializeFluencySetupInfo = t.setActivityLoadProgress = void 0;
            const o = n(454)
              , r = n(83)
              , i = n(666)
              , s = n(6);
            class l {
                constructor() {
                    this.userTestMode = !1,
                    this.isDemoMode = !1,
                    this.loadingUnityStartedAt = new Date,
                    this.userTestActivityId = ""
                }
            }
            let a, c, d, u, p, g = !1, f = !1;
            function h() {}
            function y(e) {
                console.log(`Failed: ${e}`)
            }
            t.initializeFluencySetupInfo = function(e, t, n=!1, o=!1, r) {
                a = e,
                c = t,
                d = r,
                g = n,
                f = o
            }
            ,
            t.setActivityLoadProgress = function(e) {
                u = e
            }
            ,
            t.loadingSplashDismissed = function() {
                p && p()
            }
            ;
            const m = {
                ready: () => {
                    const e = new l;
                    return e.ireadyServerUrl = c,
                    e.environment = a.environment,
                    e.fluencyArtifactPath = a.fluencyArtifactPath,
                    e.fluencyPlayerArtifactPath = a.fluencyPlayerArtifactPath,
                    e.userTestMode = g,
                    e.isDemoMode = f,
                    e.loadingUnityStartedAt = d,
                    JSON.stringify(e)
                }
                ,
                requestFullscreen: () => {
                    s.requestFullscreen()
                }
                ,
                exitFullscreen: () => {
                    s.exitFullscreen()
                }
                ,
                toggleFullscreen: () => {
                    s.toggleFullscreen()
                }
                ,
                close: () => {
                    const e = i.default.Connection;
                    null != e ? e.fluency.close().then(h, y).catch((e => {}
                    )) : console.warn("PlatformConnection is not setup")
                }
                ,
                complete: () => {
                    const e = i.default.Connection;
                    null != e ? e.fluency.complete().then(h, y).catch((e => {}
                    )) : console.warn("PlatformConnection is not setup")
                }
                ,
                setLoadProgress: e => {
                    i.default.Connection,
                    u(e)
                }
                ,
                logEvent: e => {
                    const t = JSON.parse(e);
                    r.logger.updateApplicationState(t),
                    r.logger.logInfoEvent(t)
                }
                ,
                jsLogDump: function(e, t) {
                    switch (e = e.trim(),
                    t) {
                    case o.LogType.Error:
                        return void r.logger.error(`${e}, unityLogType=Error`, (new Error).stack);
                    case o.LogType.Assert:
                        return void r.logger.error(`${e}, unityLogType=Assert`, (new Error).stack);
                    case o.LogType.Exception:
                        return void r.logger.error(`${e}, unityLogType=Exception`, (new Error).stack);
                    case o.LogType.Warning:
                        return void console.warn(`${e}, unityLogType=Warning`);
                    case o.LogType.Log:
                        return void console.log(`${e}, unityLogType=Log`);
                    case o.LogType.Debug:
                        return;
                    default:
                        console.error(`Unknown console message type!\n${e}\ntype: ${t}`)
                    }
                },
                setLoadingSplashCallback: e => {
                    p = e
                }
            };
            window.activityBridge = m
        }
        ,
        129: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.loadUnityGame = void 0;
            const o = n(182)
              , r = n(83);
            t.loadUnityGame = (e, t) => new Promise(( (n, r) => {
                (0,
                o.default)(e.loaderUrl).then(( () => {
                    const o = Object.assign({}, e, {
                        startupErrorHandler: i,
                        errorHandler: s,
                        printErr: l,
                        print: a
                    });
                    (0,
                    self.createUnityInstance)(document.querySelector("#unity-canvas"), o, (e => {
                        t(e)
                    }
                    )).then((e => {
                        n(e)
                    }
                    )).catch((e => {
                        r(e)
                    }
                    ))
                }
                )).catch((e => {
                    r(e)
                }
                ))
            }
            ));
            const i = (e, t, n) => {
                const o = `Unity engine was not started. ${t}: ${n} message: ${e}`;
                return r.logger.logFatalEventAndShutdown(o, (new Error).stack),
                !0
            }
              , s = (e, t, n) => {
                const o = `Unity abortHandler called. filename: ${t}, lineno ${n}, message: ${e}`;
                return r.logger.logFatalEventAndShutdown(o, (new Error).stack),
                !0
            }
              , l = e => {
                console.warn("loader.js printErr " + e)
            }
              , a = e => {}
        }
        ,
        248: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.isCorsAllowed = t.addToCorsList = void 0;
            let n = [];
            function o(e) {
                for (let t = 0; t < n.length; t++) {
                    const o = n[t];
                    if (e.startsWith(o))
                        return !0
                }
                return !1
            }
            t.addToCorsList = function(e) {
                n.push(e)
            }
            ,
            t.isCorsAllowed = o;
            const r = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function(e, t) {
                const n = r.apply(this, arguments);
                return o(t) && (this.withCredentials = !0),
                n
            }
            ;
            const {fetch: i} = window;
            window.fetch = async (...e) => {
                let[t,n] = e;
                return n = null != n ? n : {},
                o(t.toString()) && (n.credentials = "include"),
                await i(t, n)
            }
        }
        ,
        428: (e, t) => {
            function n(e, t, n) {
                let o = e
                  , r = t;
                return e / t > n ? (o = t * n,
                r = t) : (o = e,
                r = e / n),
                [o, r]
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.bestFitRectangle = t.resizeUnity = void 0,
            t.resizeUnity = function() {
                let e = document.documentElement.clientWidth
                  , t = document.documentElement.clientHeight;
                const o = Math.min(Math.max(e / t, 4 / 3), 25 / 9);
                screen.orientation.type.startsWith("landscape") && ([e,t] = n(window.innerWidth, window.innerHeight, o),
                t < 200 && (t = 200,
                e = 200 * o));
                let r = document.getElementById("unity-canvas")
                  , i = document.getElementById("unity-container")
                  , s = document.getElementById("fluency-accessibility-wrapper");
                const l = e + "px"
                  , a = t + "px";
                r && (r.width = e * window.devicePixelRatio,
                r.height = t * window.devicePixelRatio,
                r.style.width = l,
                r.style.height = a),
                i && (i.style.width = l,
                i.style.height = a),
                s && (s.style.width = l,
                s.style.height = a)
            }
            ,
            t.bestFitRectangle = n
        }
        ,
        61: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.ApplicationState = void 0,
            t.ApplicationState = class {
                constructor(e, t, n) {
                    this.sessionId = null,
                    this.sessionType = null,
                    this.activityId = null,
                    this.activityType = null,
                    this.fluencyVersion = null,
                    this.assetGroupId = null,
                    this.scene = null,
                    this.activityState = null,
                    this.applicationState = null,
                    this.fluencyArtifactPath = e,
                    this.fluencyPlayerArtifactPath = t,
                    this.environment = n
                }
                updateApplicationState(e) {
                    this.sessionId = e.sessionId,
                    this.sessionType = e.sessionType,
                    this.activityId = e.activityId,
                    this.activityType = e.activityType,
                    this.fluencyVersion = e.fluencyVersion,
                    this.assetGroupId = e.assetGroupId,
                    this.scene = e.scene,
                    this.activityState = e.activityState,
                    this.applicationState = e.applicationState,
                    this.fluencyArtifactPath = e.fluencyArtifactPath,
                    this.fluencyPlayerArtifactPath = e.fluencyPlayerArtifactPath,
                    this.environment = e.environment
                }
            }
        }
        ,
        257: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.BuildInfo = void 0;
            const o = n(990);
            class r {
                static getBuildInfo(e) {
                    return fetch(`${e}/build-info.json`, {
                        method: "get"
                    }).then((e => e.json())).then((t => {
                        var n;
                        const o = null !== (n = t.config) && void 0 !== n ? n : {};
                        return t.config.loaderUrl = r.toHttpUrl("games/Fluency", o.loaderUrl),
                        t.config.dataUrl = r.toHttpUrl(e, o.dataUrl),
                        t.config.frameworkUrl = r.toHttpUrl(e, o.frameworkUrl),
                        t.config.codeUrl = r.toHttpUrl(e, o.codeUrl),
                        t.config.memoryUrl = r.toHttpUrl(e, o.memoryUrl),
                        t.config.symbolsUrl = null,
                        t.config.streamingAssetsUrl = r.toHttpUrl(e, o.streamingAssetsUrl),
                        t.config.dataUrl = r.toHttpUrl(e, o.dataUrl),
                        t
                    }
                    )).then((e => {
                        var t;
                        let n = (null !== (t = e.config) && void 0 !== t ? t : {}).symbolsUrl;
                        return null == n ? e : (0,
                        o.urlAvailable)(n).then((t => (t || (e.config.symbolsUrl = null),
                        e)))
                    }
                    ))
                }
                static toHttpUrl(e, t) {
                    return null == t || "" == t ? null : t.startsWith("http") ? t : `${e = e.endsWith("/") ? e.slice(0, -1) : e}/${t}`
                }
            }
            t.BuildInfo = r
        }
        ,
        627: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.dashboard = void 0;
            const o = n(666);
            class r {
                static closeWithFatal(e) {
                    const t = o.default.Connection
                      , n = r.prepareMessage(e);
                    null == t ? console.log(n) : t.remoteLogger.fatal(n)
                }
                static info(e) {
                    const t = r.prepareMessage(e)
                      , n = o.default.Connection;
                    null == n ? console.log(t) : n.remoteLogger.info(t)
                }
                static error(e) {
                    const t = r.prepareMessage(e)
                      , n = o.default.Connection;
                    null == n ? console.log(t) : n.remoteLogger.error(t)
                }
                static prepareMessage(e) {
                    let t = "";
                    if (Object.keys(e).includes("eventCode")) {
                        let n = [];
                        for (const [t,o] of Object.entries(e))
                            n.push(`${t}=${o}`);
                        t = `DUMMY_VALUE, ${n.join(", ")}, `
                    } else
                        t = JSON.stringify(e);
                    return t
                }
            }
            t.dashboard = r
        }
        ,
        6: (e, t) => {
            function n() {
                r() || document.documentElement.requestFullscreen().catch((e => console.log(e)))
            }
            function o() {
                r() && document.exitFullscreen().catch((e => console.log(e)))
            }
            function r() {
                return null != document.fullscreenElement
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.isFullscreen = t.toggleFullscreen = t.exitFullscreen = t.requestFullscreen = void 0,
            t.requestFullscreen = n,
            t.exitFullscreen = o,
            t.toggleFullscreen = function() {
                r() ? o() : n()
            }
            ,
            t.isFullscreen = r
        }
        ,
        990: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.findSubdomain = t.urlAvailable = void 0,
            t.urlAvailable = function(e) {
                return function(e) {
                    return new Promise((function(t, n) {
                        try {
                            let o = new XMLHttpRequest;
                            o.open("HEAD", e),
                            o.onload = function() {
                                t(this.status)
                            }
                            ,
                            o.onerror = function() {
                                n(this.status)
                            }
                            ,
                            o.send()
                        } catch (e) {
                            t(404)
                        }
                    }
                    ))
                }(e).then((e => e >= 200 && e < 300)).catch(( () => !1))
            }
            ,
            t.findSubdomain = function(e) {
                let t = new URL(e).hostname.split(".");
                if (t.length < 2)
                    return;
                let n = t.slice(0, t.length - 2);
                return null != n && n.length > 0 ? n.join(".").trim() : void 0
            }
        }
        ,
        534: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.getArtifactPath = t.getEnvironment = void 0;
            const o = n(990);
            function r(e, t) {
                var n = new RegExp(t + "+$");
                return e.replace(n, "")
            }
            t.getEnvironment = function(e) {
                let t = "prod"
                  , n = (0,
                o.findSubdomain)(e);
                return n && null != n && n.trim() && (t = n),
                t
            }
            ,
            t.getArtifactPath = function(e) {
                let t = new URL(e).pathname;
                if (null != t) {
                    var n, o;
                    n = t,
                    o = new RegExp("^/+"),
                    t = n.replace(o, ""),
                    t = r(t, "/");
                    var i = t.replace(/^.*[\\\/]/, "");
                    return i.indexOf(".") > -1 && (t = t.replace(i, ""),
                    t = r(t, "/")),
                    t
                }
            }
        }
        ,
        182: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = (e, t=!0, n="text/javascript") => new Promise(( (o, r) => {
                try {
                    const i = document.createElement("script")
                      , s = document.body;
                    i.type = n,
                    i.async = t,
                    i.src = e,
                    i.addEventListener("load", ( () => {
                        o()
                    }
                    )),
                    i.addEventListener("error", ( () => {
                        r(new Error(`Failed to load the script ${e}`))
                    }
                    )),
                    s.appendChild(i)
                } catch (e) {
                    r(e)
                }
            }
            ))
        }
        ,
        83: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.logger = void 0;
            const o = n(627);
            class r {
                static setBuildInfo(e) {
                    r._buildInfo = e
                }
                static setApplicationState(e) {
                    r._applicationState = e
                }
                static updateApplicationState(e) {
                    var t;
                    null === (t = r._applicationState) || void 0 === t || t.updateApplicationState(e)
                }
                static versioner() {
                    const e = r._buildInfo;
                    return null == e ? {} : [{
                        name: e.name,
                        version: e.version,
                        build: e.build,
                        git: {
                            sha: e.git.sha
                        },
                        config: {
                            symbolsUrl: "fluency.symbols.json"
                        }
                    }]
                }
                static error(e, t) {
                    if (null == r._applicationState)
                        return;
                    const n = r.findReason(e);
                    null == t && (t = r.getStack(e));
                    let o = r.eventInfo(r._applicationState, "LogError", n, t);
                    o = Object.assign({
                        exceptionCategory: "Unmanaged"
                    }, o),
                    r.logErrorViaDashboard(o)
                }
                static logFatalEventAndShutdown(e, t) {
                    if (null == r._applicationState)
                        return;
                    const n = r.findReason(e);
                    null == t && (t = r.getStack(e));
                    let i = r.eventInfo(r._applicationState, "LogFatal", n, t);
                    i = Object.assign({
                        exceptionCategory: "Unmanaged"
                    }, i),
                    o.dashboard.closeWithFatal(i)
                }
                static logInfoEvent(e) {
                    const t = e.exceptionCondition;
                    null == t ? r.logInfoViaDashboard(e) : this.hash(t).then((t => {
                        let n = r._globalExceptionCounter[t];
                        n = n ? n + 1 : 1,
                        r._globalExceptionCounter[t] = n;
                        let o = {};
                        o.exceptionCount = n,
                        e = Object.assign(o, e),
                        1 == n ? r.logInfoViaDashboard(e) : (console.warn(`dupe record ${n}`),
                        console.dir(e))
                    }
                    )).catch((e => {
                        console.error(e)
                    }
                    ))
                }
                static logInfoViaDashboard(e) {
                    o.dashboard.info(e)
                }
                static logErrorViaDashboard(e) {
                    o.dashboard.error(e)
                }
                static findReason(e) {
                    let t = null;
                    return e instanceof Error ? t = e.message : ("string" == typeof e || console.log("unexpected type " + typeof e),
                    t = e),
                    t
                }
                static getStack(e) {
                    var t, n, o;
                    let r = null;
                    return e instanceof Error ? r = null !== (t = e.stack) && void 0 !== t ? t : null : "string" == typeof e ? r = null !== (n = (new Error).stack) && void 0 !== n ? n : null : (console.log("unexpected type " + typeof e),
                    r = null !== (o = (new Error).stack) && void 0 !== o ? o : null),
                    r
                }
                static eventInfo(e, t, n, o) {
                    let r = JSON.parse(JSON.stringify(e));
                    return r.eventCode = t,
                    null != n && (r.exceptionCondition = n),
                    null != o && (r.stackTrace = o),
                    r
                }
                static hash(e) {
                    const t = (new TextEncoder).encode(e);
                    return crypto.subtle.digest("SHA-1", t).then((e => Array.from(new Uint8Array(e)).map((e => ("00" + e.toString(16)).slice(-2))).join("")))
                }
            }
            t.logger = r,
            r._buildInfo = null,
            r._applicationState = null,
            r._globalExceptionCounter = {}
        }
    }
      , t = {};
    function n(o) {
        var r = t[o];
        if (void 0 !== r)
            return r.exports;
        var i = t[o] = {
            exports: {}
        };
        return e[o](i, i.exports, n),
        i.exports
    }
    n.d = (e, t) => {
        for (var o in t)
            n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, {
                enumerable: !0,
                get: t[o]
            })
    }
    ,
    n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    n.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    ( () => {
        var e, t;
        const o = n(129)
          , r = n(657)
          , i = n(248)
          , s = n(428)
          , l = n(83);
        n(257);
        const a = n(257)
          , c = n(666)
          , d = n(534)
          , u = n(61)
          , p = new URLSearchParams(window.location.search)
          , g = "true" == p.get("userTestMode")
          , f = "true" == p.get("demoMode");
        let h = "https://cdn.i-ready.com/games/fluency/release-1.9.0/2";
        if (null == h) {
            const e = "query param 'fluencyArtifactFolderUrl' needs to be set";
            throw l.logger.logFatalEventAndShutdown(e),
            new Error(e)
        }
        h = h.endsWith("/") ? h.slice(0, -1) : h;
        let y = "https://login.i-ready.com";
        if (null == y) {
            const e = "query param 'ireadyServerUrl' needs to be set";
            throw l.logger.logFatalEventAndShutdown(e),
            new Error(e)
        }
        const m = c.default.Connection
          , v = (0,
        d.getEnvironment)(y)
          , w = null !== (e = (0,
        d.getArtifactPath)(h)) && void 0 !== e ? e : ""
          , S = null !== (t = (0,
        d.getArtifactPath)(window.location.href)) && void 0 !== t ? t : "";
        (0,
        i.addToCorsList)(y);
        let E = new u.ApplicationState(w,S,v);
        l.logger.setApplicationState(E);
        let b = l.logger.eventInfo(E, "EnteredFluency");
        l.logger.logInfoEvent(b),
        a.BuildInfo.getBuildInfo(h).then((e => {
            var t;
            l.logger.setBuildInfo(e),
            t = e.config,
            o.loadUnityGame(t, (e => {
                let t = e * C * 100;
                null == m || m.loader.setProgress(t)
            }
            )).then((e => {
                (0,
                s.resizeUnity)(),
                window.addEventListener("resize", (e => {
                    (0,
                    s.resizeUnity)()
                }
                ))
            }
            )).catch((e => {
                l.logger.logFatalEventAndShutdown(e)
            }
            ))
        }
        )).catch((e => {
            l.logger.logFatalEventAndShutdown(e)
        }
        )),
        r.initializeFluencySetupInfo(E, y, g, f, new Date);
        const C = .75;
        r.setActivityLoadProgress((e => {
            const t = c.default.Connection;
            let n = C + e * (1 - C);
            null == t || t.loader.setProgress(100 * n)
        }
        )),
        null == m || m.loader.onCompleted(( () => {
            let e = l.logger.eventInfo(E, "LaunchButtonClicked");
            l.logger.logInfoEvent(e),
            r.loadingSplashDismissed()
        }
        ))
    }
    )()
}
)();
