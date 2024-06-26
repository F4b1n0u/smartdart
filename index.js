const smartboard = require('./smartboard')();

const boardUuid = '2310b313636' // uni to my own board, check logs to see you own board uuid

const config = {
    smartboard_button_number: 0 // ??
}

// Start scanning for the board
smartboard.startScan();
// Register a connect callback, which will be called once board has been found, and connection has been established
smartboard.connect(boardUuid, (peripheral) => {
    // Initialize the board and register callbacks
    smartboard.initialize(peripheral, config.smartboard_button_number,
        (dart) => {
            // Dart throw callback
        },
        () => {
            // Button pressed callback
        }
    );
});