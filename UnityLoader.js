function createUnityInstance(e, t, r) {
    function n(e) {
        var t = "unhandledrejection" == e.type && "object" == typeof e.reason ? e.reason : "object" == typeof e.error ? e.error : null
          , r = t ? t.toString() : "string" == typeof e.message ? e.message : "string" == typeof e.reason ? e.reason : "";
        if (t && "string" == typeof t.stack && (r += "\n" + t.stack.substring(t.stack.lastIndexOf(r, 0) ? 0 : r.length).replace(/(^\n*|\n*$)/g, "")),
        r && f.stackTraceRegExp && f.stackTraceRegExp.test(r)) {
            var n = e instanceof ErrorEvent ? e.filename : t && "string" == typeof t.fileName ? t.fileName : t && "string" == typeof t.sourceURL ? t.sourceURL : ""
              , o = e instanceof ErrorEvent ? e.lineno : t && "number" == typeof t.lineNumber ? t.lineNumber : t && "number" == typeof t.line ? t.line : 0;
            i(r, n, o)
        }
    }
    function o(e) {
        e.preventDefault()
    }
    function a(e, t, r) {
        if (f.startupErrorHandler)
            return void f.startupErrorHandler(e, t, r);
        if (!(f.errorHandler && f.errorHandler(e, t, r) || (console.log("Invoking error handler due to\n" + e),
        "function" == typeof dump && dump("Invoking error handler due to\n" + e),
        e.indexOf("UnknownError") != -1 || e.indexOf("Program terminated with exit(0)") != -1 || a.didShowErrorMessage))) {
            var e = "An error occurred running the Unity content on this page. See your browser JavaScript console for more info. The error was:\n" + e;
            e.indexOf("DISABLE_EXCEPTION_CATCHING") != -1 ? e = "An exception has occurred, but exception handling has been disabled in this build. If you are the developer of this content, enable exceptions in your project WebGL player settings to be able to catch the exception or see the stack trace." : e.indexOf("Cannot enlarge memory arrays") != -1 ? e = "Out of memory. If you are the developer of this content, try allocating more memory to your WebGL build in the WebGL player settings." : e.indexOf("Invalid array buffer length") == -1 && e.indexOf("Invalid typed array length") == -1 && e.indexOf("out of memory") == -1 && e.indexOf("could not allocate memory") == -1 || (e = "The browser could not allocate enough memory for the WebGL content. If you are the developer of this content, try allocating less memory to your WebGL build in the WebGL player settings."),
            alert(e),
            a.didShowErrorMessage = !0
        }
    }
    function s(e, t) {
        var r = "(wasm-function\\[)(\\d+)(\\])"
          , n = new RegExp(r);
        return e.replace(new RegExp(r,"g"), function(e) {
            var r = e.match(n);
            return r[1] + (t[r[2]] ? t[r[2]] + "@" : "") + r[2] + r[3]
        })
    }
    function i(e, t, r) {
        f.symbols ? a(s(e, f.symbols), t, r) : f.symbolsUrl ? u("symbolsUrl").then(function(n) {
            for (var o = "", i = 0; i < n.length; i++)
                o += String.fromCharCode(n[i]);
            f.symbols = JSON.parse(o),
            a(s(e, f.symbols), t, r)
        }).catch(function(n) {
            a(e, t, r)
        }) : a(e, t, r)
    }
    function d(e, t) {
        if ("symbolsUrl" != e) {
            var n = f.downloadProgress[e];
            n || (n = f.downloadProgress[e] = {
                started: !1,
                finished: !1,
                lengthComputable: !1,
                total: 0,
                loaded: 0
            }),
            "object" != typeof t || "progress" != t.type && "load" != t.type || (n.started || (n.started = !0,
            n.lengthComputable = t.lengthComputable,
            n.total = t.total),
            n.loaded = t.loaded,
            "load" == t.type && (n.finished = !0));
            var o = 0
              , a = 0
              , s = 0
              , i = 0
              , d = 0;
            for (var e in f.downloadProgress) {
                var n = f.downloadProgress[e];
                if (!n.started)
                    return 0;
                s++,
                n.lengthComputable ? (o += n.loaded,
                a += n.total,
                i++) : n.finished || d++
            }
            var u = s ? (s - d - (a ? i * (a - o) / a : 0)) / s : 0;
            r(.9 * u)
        }
    }
    function u(e) {
        return new Promise(function(t, r) {
            d(e);
            var n = f.companyName && f.productName ? new f.XMLHttpRequest({
                companyName: f.companyName,
                productName: f.productName,
                cacheControl: f.cacheControl(f[e])
            }) : new XMLHttpRequest;
            n.open("GET", f[e]),
            n.responseType = "arraybuffer",
            n.addEventListener("progress", function(t) {
                d(e, t)
            }),
            n.addEventListener("load", function(r) {
                d(e, r),
                t(new Uint8Array(n.response))
            }),
            n.send()
        }
        )
    }
    function l() {
        return new Promise(function(e, t) {
            var r = document.createElement("script");
            r.src = f.frameworkUrl,
            r.onload = function() {
                var t = unityFramework;
                unityFramework = null,
                r.onload = null,
                e(t)
            }
            ,
            document.body.appendChild(r),
            f.deinitializers.push(function() {
                document.body.removeChild(r)
            })
        }
        )
    }
    function c() {
        l().then(function(e) {
            e(f)
        });
        var e = u("dataUrl");
        f.preRun.push(function() {
            f.addRunDependency("dataUrl"),
            e.then(function(e) {
                var t = new DataView(e.buffer,e.byteOffset,e.byteLength)
                  , r = 0
                  , n = "UnityWebData1.0\0";
                if (!String.fromCharCode.apply(null, e.subarray(r, r + n.length)) == n)
                    throw "unknown data format";
                r += n.length;
                var o = t.getUint32(r, !0);
                for (r += 4; r < o; ) {
                    var a = t.getUint32(r, !0);
                    r += 4;
                    var s = t.getUint32(r, !0);
                    r += 4;
                    var i = t.getUint32(r, !0);
                    r += 4;
                    var d = String.fromCharCode.apply(null, e.subarray(r, r + i));
                    r += i;
                    for (var u = 0, l = d.indexOf("/", u) + 1; l > 0; u = l,
                    l = d.indexOf("/", u) + 1)
                        f.FS_createPath(d.substring(0, u), d.substring(u, l - 1), !0, !0);
                    f.FS_createDataFile(d, null, e.subarray(a, a + s), !0, !0, !0)
                }
                f.removeRunDependency("dataUrl")
            })
        })
    }
    r = r || function() {}
    ;
    var f = {
        canvas: e,
        webglContextAttributes: {
            preserveDrawingBuffer: !1
        },
        cacheControl: function(e) {
            return e == f.dataUrl ? "must-revalidate" : "no-store"
        },
        streamingAssetsUrl: "StreamingAssets",
        downloadProgress: {},
        deinitializers: [],
        intervals: {},
        setInterval: function(e, t) {
            var r = window.setInterval(e, t);
            return this.intervals[r] = !0,
            r
        },
        clearInterval: function(e) {
            delete this.intervals[e],
            window.clearInterval(e)
        },
        preRun: [],
        postRun: [],
        print: function(e) {
            console.log(e)
        },
        printErr: function(e) {
            console.error(e)
        },
        locateFile: function(e) {
            return "build.wasm" == e ? this.codeUrl : e
        },
        disabledCanvasEvents: ["contextmenu", "dragstart"]
    };
    for (var p in t)
        f[p] = t[p];
    f.streamingAssetsUrl = new URL(f.streamingAssetsUrl,document.URL).href;
    var h = f.disabledCanvasEvents.slice();
    h.forEach(function(t) {
        e.addEventListener(t, o)
    }),
    window.addEventListener("error", n),
    window.addEventListener("unhandledrejection", n);
    var m = {
        Module: f,
        SetFullscreen: function() {
            return f.SetFullscreen ? f.SetFullscreen.apply(f, arguments) : void f.print("Failed to set Fullscreen mode: Player not loaded yet.")
        },
        SendMessage: function() {
            return f.SendMessage ? f.SendMessage.apply(f, arguments) : void f.print("Failed to execute SendMessage: Player not loaded yet.")
        },
        Quit: function() {
            return new Promise(function(t, r) {
                f.shouldQuit = !0,
                f.onQuit = t,
                h.forEach(function(t) {
                    e.removeEventListener(t, o)
                }),
                window.removeEventListener("error", n),
                window.removeEventListener("unhandledrejection", n)
            }
            )
        }
    };
    return f.SystemInfo = function() {
        function e(e, t, r) {
            return e = RegExp(e, "i").exec(t),
            e && e[r]
        }
        for (var t, r, n, o, a, s, i = navigator.userAgent + " ", d = [["Firefox", "Firefox"], ["OPR", "Opera"], ["Edg", "Edge"], ["SamsungBrowser", "Samsung Browser"], ["Trident", "Internet Explorer"], ["MSIE", "Internet Explorer"], ["Chrome", "Chrome"], ["CriOS", "Chrome on iOS Safari"], ["FxiOS", "Firefox on iOS Safari"], ["Safari", "Safari"]], u = 0; u < d.length; ++u)
            if (r = e(d[u][0] + "[/ ](.*?)[ \\)]", i, 1)) {
                t = d[u][1];
                break
            }
        "Safari" == t && (r = e("Version/(.*?) ", i, 1)),
        "Internet Explorer" == t && (r = e("rv:(.*?)\\)? ", i, 1) || r);
        for (var l = [["Windows (.*?)[;)]", "Windows"], ["Android ([0-9_.]+)", "Android"], ["iPhone OS ([0-9_.]+)", "iPhoneOS"], ["iPad.*? OS ([0-9_.]+)", "iPadOS"], ["FreeBSD( )", "FreeBSD"], ["OpenBSD( )", "OpenBSD"], ["Linux|X11()", "Linux"], ["Mac OS X ([0-9_.]+)", "macOS"], ["bot|google|baidu|bing|msn|teoma|slurp|yandex", "Search Bot"]], c = 0; c < l.length; ++c)
            if (o = e(l[c][0], i, 1)) {
                n = l[c][1],
                o = o.replace(/_/g, ".");
                break
            }
        var f = {
            "NT 5.0": "2000",
            "NT 5.1": "XP",
            "NT 5.2": "Server 2003",
            "NT 6.0": "Vista",
            "NT 6.1": "7",
            "NT 6.2": "8",
            "NT 6.3": "8.1",
            "NT 10.0": "10"
        };
        o = f[o] || o,
        a = document.createElement("canvas"),
        a && (gl = a.getContext("webgl2"),
        glVersion = gl ? 2 : 0,
        gl || (gl = a && a.getContext("webgl")) && (glVersion = 1),
        gl && (s = gl.getExtension("WEBGL_debug_renderer_info") && gl.getParameter(37446) || gl.getParameter(7937)));
        var p = "undefined" != typeof SharedArrayBuffer
          , h = "object" == typeof WebAssembly && "function" == typeof WebAssembly.compile;
        return {
            width: screen.width,
            height: screen.height,
            userAgent: i.trim(),
            browser: t || "Unknown browser",
            browserVersion: r || "Unknown version",
            mobile: /Mobile|Android|iP(ad|hone)/.test(navigator.appVersion),
            os: n || "Unknown OS",
            osVersion: o || "Unknown OS Version",
            gpu: s || "Unknown GPU",
            language: navigator.userLanguage || navigator.language,
            hasWebGL: glVersion,
            hasCursorLock: !!document.body.requestPointerLock,
            hasFullscreen: !!document.body.requestFullscreen,
            hasThreads: p,
            hasWasm: h,
            hasWasmThreads: function() {
                var e = h && p && new WebAssembly.Memory({
                    initial: 1,
                    maximum: 1,
                    shared: !0
                });
                return e && e.buffer instanceof SharedArrayBuffer
            }()
        }
    }(),
    f.abortHandler = function(e) {
        return i(e, "", 0),
        !0
    }
    ,
    Error.stackTraceLimit = Math.max(Error.stackTraceLimit || 0, 50),
    f.XMLHttpRequest = function() {
        function e(e) {
            console.log("[UnityCache] " + e)
        }
        function t(e) {
            return t.link = t.link || document.createElement("a"),
            t.link.href = e,
            t.link.href
        }
        function r(e) {
            var t = window.location.href.match(/^[a-z]+:\/\/[^\/]+/);
            return !t || e.lastIndexOf(t[0], 0)
        }
        function n() {
            function t(t) {
                if ("undefined" == typeof n.database)
                    for (n.database = t,
                    n.database || e("indexedDB database could not be opened"); n.queue.length; ) {
                        var r = n.queue.shift();
                        n.database ? n.execute.apply(n, r) : "function" == typeof r.onerror && r.onerror(new Error("operation cancelled"))
                    }
            }
            function r() {
                var e = o.open(s.name, s.version);
                e.onupgradeneeded = function(e) {
                    var t = e.target.result;
                    t.objectStoreNames.contains(d.name) || t.createObjectStore(d.name)
                }
                ,
                e.onsuccess = function(e) {
                    t(e.target.result)
                }
                ,
                e.onerror = function() {
                    t(null)
                }
            }
            var n = this;
            n.queue = [];
            try {
                var o = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
                  , a = o.open(s.name);
                a.onupgradeneeded = function(e) {
                    var t = e.target.result.createObjectStore(i.name, {
                        keyPath: "url"
                    });
                    ["version", "company", "product", "updated", "revalidated", "accessed"].forEach(function(e) {
                        t.createIndex(e, e)
                    })
                }
                ,
                a.onsuccess = function(e) {
                    var n = e.target.result;
                    n.version < s.version ? (n.close(),
                    r()) : t(n)
                }
                ,
                a.onerror = function() {
                    t(null)
                }
            } catch (e) {
                t(null)
            }
        }
        function o(e, t, r, n, o) {
            var a = {
                url: e,
                version: i.version,
                company: t,
                product: r,
                updated: n,
                revalidated: n,
                accessed: n,
                responseHeaders: {},
                xhr: {}
            };
            return o && (["Last-Modified", "ETag"].forEach(function(e) {
                a.responseHeaders[e] = o.getResponseHeader(e)
            }),
            ["responseURL", "status", "statusText", "response"].forEach(function(e) {
                a.xhr[e] = o[e]
            })),
            a
        }
        function a(t) {
            this.cache = {
                enabled: !1
            },
            t && (this.cache.control = t.cacheControl,
            this.cache.company = t.companyName,
            this.cache.product = t.productName),
            this.xhr = new XMLHttpRequest(t),
            this.xhr.addEventListener("load", function() {
                var t = this.xhr
                  , r = this.cache;
                r.enabled && !r.revalidated && (304 == t.status ? (r.result.revalidated = r.result.accessed,
                r.revalidated = !0,
                u.execute(i.name, "put", [r.result]),
                e("'" + r.result.url + "' successfully revalidated and served from the indexedDB cache")) : 200 == t.status ? (r.result = o(r.result.url, r.company, r.product, r.result.accessed, t),
                r.revalidated = !0,
                u.execute(i.name, "put", [r.result], function(t) {
                    e("'" + r.result.url + "' successfully downloaded and stored in the indexedDB cache")
                }, function(t) {
                    e("'" + r.result.url + "' successfully downloaded but not stored in the indexedDB cache due to the error: " + t)
                })) : e("'" + r.result.url + "' request failed with status: " + t.status + " " + t.statusText))
            }
            .bind(this))
        }
        var s = {
            name: "UnityCache",
            version: 2
        }
          , i = {
            name: "XMLHttpRequest",
            version: 1
        }
          , d = {
            name: "WebAssembly",
            version: 1
        };
        n.prototype.execute = function(e, t, r, n, o) {
            if (this.database)
                try {
                    var a = this.database.transaction([e], ["put", "delete", "clear"].indexOf(t) != -1 ? "readwrite" : "readonly").objectStore(e);
                    "openKeyCursor" == t && (a = a.index(r[0]),
                    r = r.slice(1));
                    var s = a[t].apply(a, r);
                    "function" == typeof n && (s.onsuccess = function(e) {
                        n(e.target.result)
                    }
                    ),
                    s.onerror = o
                } catch (e) {
                    "function" == typeof o && o(e)
                }
            else
                "undefined" == typeof this.database ? this.queue.push(arguments) : "function" == typeof o && o(new Error("indexedDB access denied"))
        }
        ;
        var u = new n;
        a.prototype.send = function(t) {
            var n = this.xhr
              , o = this.cache
              , a = arguments;
            return o.enabled = o.enabled && "arraybuffer" == n.responseType && !t,
            o.enabled ? void u.execute(i.name, "get", [o.result.url], function(t) {
                if (!t || t.version != i.version)
                    return void n.send.apply(n, a);
                if (o.result = t,
                o.result.accessed = Date.now(),
                "immutable" == o.control)
                    o.revalidated = !0,
                    u.execute(i.name, "put", [o.result]),
                    n.dispatchEvent(new Event("load")),
                    e("'" + o.result.url + "' served from the indexedDB cache without revalidation");
                else if (r(o.result.url) && (o.result.responseHeaders["Last-Modified"] || o.result.responseHeaders.ETag)) {
                    var s = new XMLHttpRequest;
                    s.open("HEAD", o.result.url),
                    s.onload = function() {
                        o.revalidated = ["Last-Modified", "ETag"].every(function(e) {
                            return !o.result.responseHeaders[e] || o.result.responseHeaders[e] == s.getResponseHeader(e)
                        }),
                        o.revalidated ? (o.result.revalidated = o.result.accessed,
                        u.execute(i.name, "put", [o.result]),
                        n.dispatchEvent(new Event("load")),
                        e("'" + o.result.url + "' successfully revalidated and served from the indexedDB cache")) : n.send.apply(n, a)
                    }
                    ,
                    s.send()
                } else
                    o.result.responseHeaders["Last-Modified"] ? (n.setRequestHeader("If-Modified-Since", o.result.responseHeaders["Last-Modified"]),
                    n.setRequestHeader("Cache-Control", "no-cache")) : o.result.responseHeaders.ETag && (n.setRequestHeader("If-None-Match", o.result.responseHeaders.ETag),
                    n.setRequestHeader("Cache-Control", "no-cache")),
                    n.send.apply(n, a)
            }, function(e) {
                n.send.apply(n, a)
            }) : n.send.apply(n, a)
        }
        ,
        a.prototype.open = function(e, r, n, a, s) {
            r = r.replace("https://dev-g-api.i-ready.com/", location.href);
            r = r.replace("https://g-api.i-ready.com/", location.href);

            return this.cache.result = o(t(r), this.cache.company, this.cache.product, Date.now()),
            this.cache.enabled = ["must-revalidate", "immutable"].indexOf(this.cache.control) != -1 && "GET" == e && this.cache.result.url.match("^https?://") && ("undefined" == typeof n || n) && "undefined" == typeof a && "undefined" == typeof s,
            this.cache.revalidated = !1,
            this.xhr.open.apply(this.xhr, arguments)
        }
        ,
        a.prototype.setRequestHeader = function(e, t) {
            return this.cache.enabled = !1,
            this.xhr.setRequestHeader.apply(this.xhr, arguments)
        }
        ;
        var l = new XMLHttpRequest;
        for (var c in l)
            a.prototype.hasOwnProperty(c) || !function(e) {
                Object.defineProperty(a.prototype, e, "function" == typeof l[e] ? {
                    value: function() {
                        return this.xhr[e].apply(this.xhr, arguments)
                    }
                } : {
                    get: function() {
                        return this.cache.revalidated && this.cache.result.xhr.hasOwnProperty(e) ? this.cache.result.xhr[e] : this.xhr[e]
                    },
                    set: function(t) {
                        this.xhr[e] = t
                    }
                })
            }(c);
        return a
    }(),
    new Promise(function(e, t) {
        f.SystemInfo.hasWebGL ? f.SystemInfo.hasWasm ? (1 == f.SystemInfo.hasWebGL && f.print('Warning: Your browser does not support "WebGL 2.0" Graphics API, switching to "WebGL 1.0"'),
        f.startupErrorHandler = t,
        r(0),
        f.postRun.push(function() {
            r(1),
            delete f.startupErrorHandler,
            e(m)
        }),
        c()) : t("Your browser does not support WebAssembly.") : t("Your browser does not support WebGL.")
    }
    )
}
