export default class Shipment {
  /**
   * remember to treat exceptions here
   * notify should not be async because all it does is event emitting  
   */
  update({ id, userName }) {
    console.log(`[${id}]: [shipment] will pack the user's order to [${userName}]`);
  }
}