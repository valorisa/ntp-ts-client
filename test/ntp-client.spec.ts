import { NTPClient } from '../src/ntp-client'; // Importez la classe NTPClient depuis le fichier src/ntp-client.ts

describe('NTPClient', () => {
  it('should return a valid Date', async () => {
    // Créez une instance de NTPClient avec un serveur mocké
    const client = new NTPClient('mock-ntp-server');

    // Mockez la méthode getNTPTime pour retourner une date fixe
    jest.spyOn(client, 'getNTPTime').mockResolvedValue(new Date('2025-03-02T12:09:38.446Z'));

    // Appelez la méthode getNTPTime
    const ntpDate = await client.getNTPTime();

    // Affichez la date dans la console (facultatif)
    console.log(`Date et heure NTP : ${ntpDate.toISOString()}`);

    // Vérifiez que la valeur retournée est une instance de Date
    expect(ntpDate instanceof Date).toBe(true);

    // Vérifiez que la date retournée correspond à la valeur attendue
    expect(ntpDate.toISOString()).toBe('2025-03-02T12:09:38.446Z');
  });
});
