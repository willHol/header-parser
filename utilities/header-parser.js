module.exports = (request) => {
  const ipAddress = request.socket.remoteAddress.split(':').slice(-1)[0];
  const software = request.headers['user-agent'].split(/[()]/)[1];
  const language = request.headers['accept-language'].split(',')[0];

  return [ipAddress, software, language];
};
