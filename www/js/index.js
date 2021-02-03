document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    const inAppBrowserRef = cordova.InAppBrowser.open('http://site.com', '_blank', 'location=no,toolbar=no,hidden=yes');
    inAppBrowserRef.addEventListener('loadstop', () => {
        inAppBrowserRef.show();
        navigator.splashscreen.hide();
    });
    // setTimeout(function() {
    //     navigator.splashscreen.hide();
    // }, 5000);

    startPush();
    inAppBrowserRef.open();
};

function startPush() {
    window.plugins.OneSignal.setLogLevel({logLevel: 6, visualLevel: 0});
    
    window.plugins.OneSignal
        .startInit("a5ab63e0-dafa-41a3-b6a3-d98daa98e574")
        .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.Notification)
        .endInit();
};
