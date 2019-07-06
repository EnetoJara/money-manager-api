import App from './express';

const server = App();

/**
 * @param {number} port where the server listens
 * @param {callback} function server running
 */
server.listen(8080, function (): void {
	console.log("server running");
});

