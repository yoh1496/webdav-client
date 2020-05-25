const { handleResponseCode } = require("../response.js");
const { encodePath, joinURL, prepareRequestOptions, request } = require("../request.js");

function updateProperty(remotePath, options) {
    const requestOptions = {
        url: joinURL(options.remoteURL, encodePath(remotePath)),
        method: "PROPPATCH",
        responseType: "text"
    };
    prepareRequestOptions(requestOptions, options);
    return request(requestOptions).then(handleResponseCode);
}

module.exports = {
    updateProperty
};