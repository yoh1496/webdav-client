const joinURL = require("url-join");
const responseHandlers = require("../response.js");
const { encodePath, prepareRequestOptions, request } = require("../request.js");

function updateProperty(remotePath, options) {
    const requestOptions = {
        url: joinURL(options.remoteURL, encodePath(remotePath)),
        method: "PROPPATCH"
    };
    prepareRequestOptions(requestOptions, options);
    return request(requestOptions).then(responseHandlers.handleResponseCode);
}

module.exports = {
    updateProperty
};
