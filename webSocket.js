"use strict";

let wsUrl = "ws://demos.kaazing.com/echo";
let ws;

function wsBtn(info) {

    ws = new WebSocket(wsUrl);

    ws.onopen = function (event) {
        openConnect(info);
    };

    ws.onclose = function (event) {
        closeConnect(event);
    };

    ws.onmessage = function (event) {
        onMessage(event);
    };

    ws.onerror = function (event) {
        onError(event);
    };
}

function openConnect(info) {
    writeConsole("Connected!");
    let infoAjax = JSON.stringify(info);
    ws.send(infoAjax);
}

let closeConnect = () => writeConsole("Disconnected!");

function onMessage(event) {
    writeConsole("RESPONSE: " + event.data);
    let info = JSON.parse(event.data);
    for (let key in info) {
        console.log(key + ":" + info[key]);
    }
    ws.close();
}

let onError = (event) => writeConsole("ERROR " + event.data);

let writeConsole = (mess) => console.log(mess);