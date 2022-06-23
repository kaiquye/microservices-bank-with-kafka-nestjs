import axios from 'axios';

export async function FindAddressUserCases(zipcode: number) {
  try {
    console.log(zipcode);
    const address = await axios.get(
      `https://viacep.com.br/ws/${zipcode}/json/`,
    );
    return address.data;
  } catch (error) {
    return 'invalid zipcode';
  }
}
