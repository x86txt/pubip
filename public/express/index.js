exports.getIp = (req, res) =>
{
	var ip = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || 
				req.connection.remoteAddress || 
				req.socket.remoteAddress || 
				req.connection.socket.remoteAddress;
	res.status(200).send('{"ip":"' + ip + '"}');
};
