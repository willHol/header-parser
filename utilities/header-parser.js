module.exports = function(request) {
	let ipAddress = request.socket.remoteAddress;
	let software = request.headers['user-agent'].split(/[()]/)[1];
	let language = request.headers['accept-language'].split(',')[0];

	return [ipAddress, software, language];
}