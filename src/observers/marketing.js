export default class Marketing {
  /**
   * remember to treat exceptions here
   * notify should not be async because all it does is event emitting  
   */
  update({ id, userName }) {
    console.log(`[${id}]: [marketing] will offer discounts to the user [${userName}]`);
  }
}