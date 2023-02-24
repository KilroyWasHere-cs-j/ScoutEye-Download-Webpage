let eventKey = ""

function getEventId(){
    const Http = new XMLHttpRequest();
    const url='https://www.thebluealliance.com/api/v3/team/frc5687/events/2023/simple';
    const key="yj3WJMJc7W30bn24MLN92bW8oyCQ0VifWr7dCUA7oLPcWqrbPOCD6WFKRXhkC446";
    Http.open("GET", url);
    Http.setRequestHeader("X-TBA-Auth-Key",key);
    Http.send();

    Http.onreadystatechange = (e) => {
        response = Http.responseText
        const obj = JSON.parse(response)
        eventKey = obj[0].key
        document.getElementById("one").innerHTML = eventKey
    }
}

function getMatchData(){
    const Http = new XMLHttpRequest();
    const url='https://www.thebluealliance.com/api/v3/team/frc5687/event/' + eventKey.toString() + '/status'
    const key="yj3WJMJc7W30bn24MLN92bW8oyCQ0VifWr7dCUA7oLPcWqrbPOCD6WFKRXhkC446";
    Http.open("GET", url);
    Http.setRequestHeader("X-TBA-Auth-Key",key);
    Http.send();

    Http.onreadystatechange = (e) => {
        response = Http.responseText
        const obj = JSON.parse(response)
        document.getElementById("two").innerHTML = obj[0]
    }
}