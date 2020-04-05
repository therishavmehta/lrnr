

class LocalStorage {
    constructor(storageKey) {
        this.storageKey = storageKey;
    }

    

    setContentInState(storageItem, payload, key, parent) {
        if(Array.isArray(payload)) {
            storageItem[key] = payload;
            return storageItem;
        } 
    }

    setItem(payload) {
        let storageItem = JSON.parse(getItem('lrnr'));
        if(!storageItem) {
            localStorage.setItem(this.storageKey, payload);
        } else if(Object.keys(storageItem).includes(parent)) {
            if(Object.keys(storageItem.parent).includes()) {
                
            }
        }

    }
    getItem(key) {
        return localStorage.getItem(key);
    }
}