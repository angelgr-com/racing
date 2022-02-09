const changeScreen = (number) => {
    let screens = [
        'screen1',
        'screen2',
        'screen3',
        'screen4',
        'screen5'
    ];
    let next = 'screen' + number;

    // Removes next screen from the array
    screens = screens.filter((value) => !next.includes(value));

    // Show next screen and hide the rest
    document.getElementById(next).style.display = 'block';
    for (let element of screens) {
        document.getElementById(element).style.display = 'none';
    }
};