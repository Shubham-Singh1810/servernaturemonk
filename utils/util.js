module.exports = {
    sendResponse: function (result, req, res) {
        if (result.err != undefined && result.err != null && result.err.length > 0) {
          res.status(400).send(result);
        } else {
          res.send(result);
        }
      },
}