// so gys try this at uout own ridsk not tried or teste4d didnt grty the components ot bioard yet this is thde sodtware that will lwt user interdface with the devboard components 

thd gps at first , the nrf stuff will be acde later as theres no script for referance yet, esp 32 can directlybe contrilled by flippwe 
//this nprimarily use pinos on flippwer to connect the devbiard , so no much errors there, as no wiring will ne needed and it should be put in scripots folder in flipper via flipper gui or app
this is suppoted for unleashed as officila is yrt to offer the custom support for most scripting functionalities based on js sdk on flipper , 

// try at your own risk caus not tested, https://github.com/Next-Flip/Momentum-Firmware/tree/dev/applications/system/js_app/examples/apps/Scripts/Examples
folow this for mlore ninfo original flipper

let eventLoop = require("event_loop");//lopp constant, loop makes sure continius comm betwn flipr and board bia gpio pins
let serial = require("serial");     
let gui = require("gui");           //render response like cordinate on flipr screen



let guiTextBox = gui.addTextBox(); // simple box bare minimun needed to display studf


let textBuffer = "Waiting for GPS data...";// this msg u can put any u like thus is initial text
gui.updateTextBox(guiTextBox, textBuffer);




const PORT = "usart";      // 'usart' used by flipper to talp to external devices via pins u can refer the edxamples i put in journazl the discord community for unleashed has more info for this
const BAUD = 230400;       // this eeds to change soeed of exchange betsween board flipper
const MAX_BUFFER = 512;   

serial.setup(PORT, BAUD); // sets port, initilizs the rate we put earlier will need change based on modules type used



let nmeaBuffer = "";       // This is a string to nhold data and store it
const NMEA_END = "\n";     // newline so nall data isnt ceramp in singl line



/**
this parseGGA tajkjes avove data from string and converts to kat, long and coordinates
checks length splits tesxt
 */
function parseGGA(sentence) {
    let parts = sentence.split(',');
    if (parts.length < 15 || parts[0] !== "$GPGGA") {
        return "Invalid GGA data.";
    }


    let time = parts[1];
    
    // maths for the conversion form nema to lat .\,long
    let lat = parseFloat(parts[2].substring(0, 2)) + parseFloat(parts[2].substring(2)) / 60;
    if (parts[3] === 'S') lat *= -1;

    let lon = parseFloat(parts[4].substring(0, 3)) + parseFloat(parts[4].substring(3)) / 60;
    if (parts[5] === 'W') lon *= -1; 

    let fix = parts[6];
    let sats = parts[7];
    let alt = parts[9];
    let fixStatus = "No Fix";
    if (fix === '1') fixStatus = "GPS Fix";
    else if (fix === '2') fixStatus = "DGPS";

// formats time
    let fmtTime = "N/A";
    if (time.length >= 6) {
        fmtTime = time.substring(0, 2) + ":" + time.substring(2, 4) + ":" + time.substring(4, 6);
    }

 // thsi take all together and dispolays it on the screen , 
    return `Time: ${fmtTime}\nLat: ${lat.toFixed(6)}\nLon: ${lon.toFixed(6)}\nFix: ${fixStatus} (${sats}s)\nAlt: ${alt}m`;
}



/**
this cjhecjs that daat sent to flipr is nema if not deals with it
 */
function processNMEA(sentence) {
    if (sentence.startsWith("$GPGGA") || sentence.startsWith("$GNGGA")) {
        textBuffer = parseGGA(sentence); // thisismain GPS data.
    } else if (sentence.startsWith("$GPRMC") || sentence.startsWith("$GNRMC")) {
        textBuffer = "RMC data (not parsed)";
    } else if (sentence.startsWith("$GPGSV") || sentence.startsWith("$GNGSV")) {
        textBuffer = "GSV data (not parsed)"; // Same for GSV.
    } else {
        textBuffer = "Unknown NMEA"; // If code doesnt recocgise the nema data thisa error
    }
    // Update the screen with the latest info.
    gui.updateTextBox(guiTextBox, textBuffer);
}




//loop for flippwer to continously listen
eventLoop.on("serial_rx_event", function() {
//read data sent by devboard
    let rxData = serial.readAny(10);
    if (rxData === undefined) return; // If no data, just stop here.


    nmeaBuffer += new TextDecoder().decode(rxData);

    let nlIdx;
    while ((nlIdx = nmeaBuffer.indexOf(NMEA_END)) !== -1) {
        let sentence = nmeaBuffer.substring(0, nlIdx).trim().replace(/\r$/, '');
        nmeaBuffer = nmeaBuffer.substring(nlIdx + NMEA_END.length);
        if (sentence.length > 0 && sentence.startsWith("$")) {
            processNMEA(sentence);
        }
    }

});

//loop ends
eventLoop.run();


// cleans resources so memory isnt fild flipper doesnt vctrash
eventLoop.on("stop", function() {
    serial.release(PORT); // Release the serial port.
    gui.removeTextBox(guiTextBox); // Get rid of the text box.
});
