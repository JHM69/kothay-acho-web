import firebase from '../util/firebase';

const db = firebase.ref('/Users');
const place_db = firebase.ref('/Places');
class FirebaseService {
  
  addCustomer = (customer) => {
    db.push(customer);
  };

  getAll(key) {
    return db.orderByChild("key").equalTo(key);
  }

  get(key) {
    return db.child(key);
  }

  getPlaces(id, t) {
    let time = t;
    let end = time - (time%86400000) + 86400000;
    let start = end-86400000;
    return place_db.child(id).orderByChild("timestamp").startAt(start).endAt(end).limitToLast(100);
  }


  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }
}

export default new FirebaseService();