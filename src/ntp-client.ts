import * as dgram from 'dgram';

export class NTPClient {
  private server: string;

  constructor(server: string) {
    this.server = server;
  }

  public async getNTPTime(): Promise<Date> {
    return new Promise((resolve, reject) => {
      const client = dgram.createSocket('udp4');
      const buffer = Buffer.alloc(48, 0);

      // Initialize the first byte of the NTP packet
      buffer[0] = 0x1b; // LI = 0, VN = 4, Mode = 3

      client.send(buffer, 0, buffer.length, 123, this.server, (err) => {
        if (err) {
          reject(err);
          return;
        }

        client.on('message', (msg, rinfo) => {
          client.close();

          const intPart = msg.readUInt32BE(40); // Seconds since 1900-01-01
          const fractPart = msg.readUInt32BE(44); // Fractional part

          const milliseconds = Math.floor(((intPart - 2208988800) * 1000) + (fractPart / 4294967296) * 1000);
          resolve(new Date(milliseconds));
        });
      });
    });
  }
}
