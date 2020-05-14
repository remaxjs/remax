import http from 'http';

export const getAvailablePort = () => {
  return new Promise<number>((resolve, reject) => {
    const server = http.createServer();

    server.unref();
    server.listen(0);

    server.on('error', reject);

    server.on('listening', () => {
      const address = server.address();

      if (typeof address === 'object') {
        const port = address?.port;

        if (port) {
          server.close(() => {
            resolve(port);
          });
        }
      } else {
        reject();
      }
    });
  });
};
