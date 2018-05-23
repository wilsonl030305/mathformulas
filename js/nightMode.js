function nightMode( sheet ) {
    if (sheet === false) {
        document.getElementById('stylesheetLink').setAttribute('href', 'css/NightMode.css');
        document.getElementById('nightModeButton').innerHTML = 'Normal Mode';
        document.getElementById('nightModeButton').setAttribute('onclick', "nightMode(true)");
    } else {
        document.getElementById('stylesheetLink').setAttribute('href', 'css/Styles.css');
        document.getElementById('nightModeButton').innerHTML = 'Night Mode';
        document.getElementById('nightModeButton').setAttribute('onclick', "nightMode(false)")
    }
    
}