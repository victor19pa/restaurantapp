import app from 'firebase/compat/app'
import 'firebase/compat/firestore'

import firebaseConfig from './config'

class Firebase {
    constructor() {
        if(!app.apps.length) {
            app.initializeApp(firebaseConfig)
            app.firestore().settings({ 
                experimentalAutoDetectLongPolling: true,
                merge: true
            });            
        }
        this.db = app.firestore()
        //this.storage = app.storage()
    }
}

const firebase = new Firebase();
export default firebase;