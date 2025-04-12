parent = {
    "callbackObj": null,
    GameLoaded: function (unityObj, cmd) {
        let config = {
            "settings": {
                "environment": "production",
                "apiServerUrl": "https://g-api.i-ready.com",
                "accountsUrl": "https://g-accounts.i-ready.com/#",
                "statscUrl": "https://g-statsc.i-ready.com",
                "logUrl": "https://hec.i-ready.com/services/collector",
                "iReadyLoginUrl": "https://login.i-ready.com/",
                "games": [
                    {
                        "id": "pizza",
                        "name": "Pizza"
                    },
                    {
                        "id": "cupcake",
                        "name": "Cupcake"
                    },
                    {
                        "id": "zoom",
                        "name": "Zoom"
                    },
                    {
                        "id": "hungryfish",
                        "name": "Hungry Fish"
                    },
                    {
                        "id": "match",
                        "name": "Match"
                    },
                    {
                        "id": "bounce",
                        "name": "Bounce",
                        "alias": "fractions"
                    },
                    {
                        "id": "hungryguppy",
                        "name": "Hungry Guppy"
                    },
                    {
                        "id": "cloudmachine",
                        "name": "Cloud Machine"
                    }
                ],
                "isDemo": false,
                "version": "4.7.0",
                "configBranch": "production"
            },
            "user": {
                "token": "0",
                "serverDataVersion": 2,
                "teacherId": "cateacher",
                "userId": "0",
                "userRole": "STUDENT",
                "firstName": document.querySelector("#fname").value,
                "lastName": document.querySelector("#lname").value,
                "gradeLevel": "7",
                "placementLevel": [],
                "onboardId": "0",
                "stateId": "NY",
                "schoolId": "0",
                "primarySchoolMathClasses": [
                    "0"
                ],
                "iReady": true,
                "isTeacher": false,
                "teacher": {
                    "first": "",
                    "last": "",
                    "id": "cateacher"
                },
                "sessionStartTime": 0
            },
            "analytics": {
                "sessionStartTime": 0,
                "loadTimeMillis": 0,
                "platform": "Chrome 135.0.0.0 on Windows 10 64-bit",
                "isRetina": false
            },
            "debug": false,
            "gradeLevel": "0",
            "containerVersion": "4.7.0"
        }

        if (document.querySelector("#debug").checked) {
            config.environment = "development";
            config.debug = true;
        }

        this.callbackObj = unityObj;

        instance.SendMessage(unityObj, cmd, JSON.stringify(config));
    },

    finishedLoadingStep () {
        instance.SendMessage(this.callbackObj, "InitiateGame")
    }
}