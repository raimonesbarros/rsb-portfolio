import { fireStoreInstance } from "~/core";
import { doc, getDoc } from "~/modules";

export default class FirestoreService {
  static async getDocData(collection: string, docName: string): Promise<any> {
    const document = await getDoc(doc(fireStoreInstance, collection, docName));
    return document.data();
  }
}
