export function cri() {
    console.debug("currently ");
    let connected_users = {};
    const CLIENT_PACKET_TO_SERVER_TRAVEL_TIME = 0.1; // not going to worry about this 
    const SERVER_MAX_REQUESTS_PER_SECOND = 30000;
    const SERVER_AVG_REQUEST_PROCESS_TIME = 0.02;

    const markClientRequestInterval = function(requestOBJ) {
    
        if (requestOBJ.hasOwnProperty("clientRequestInterval")) {throw new Error();}
    
        requestOBJ.clientRequestInterval = {
            // how to update existing clients when new clients join
            interval: Object.keys(connected_users).length / SERVER_MAX_REQUESTS_PER_SECOND
        };
    
    };
};
