import { NTPClient } from './ntp-client';

async function main() {
  const client = new NTPClient('pool.ntp.org');
  try {
    const ntpDate = await client.getNTPTime();
    console.log(`Date et heure NTP : ${ntpDate.toISOString()}`);
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'heure NTP:', error);
  }
}

main();
