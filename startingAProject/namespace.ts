//namespaces are used so functions don't leak into the global namespace
//don't need to worry about this when it comes to file-based modules but can be used to group functions

namespace Utility {
    export function log(msg) {
        console.log(msg);
    }
    export function error(msg) {
        console.error(msg);
    }
}

// usage
Utility.log('Call me');
Utility.error('maybe!');