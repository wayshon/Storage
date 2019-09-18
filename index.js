export default class Storage {
    static tryCount = 0;

    static async set({ key, value, age }) {
        if (!key || !value) {
            throw new TypeError('invalid params');
        }

        let item;
        try {
            item = JSON.stringify({
                value,
                age: typeof age === 'number' ? age * 1000 + Date.now() : undefined,
            })
        } catch (e) {
            throw new TypeError('invalid value');
        }

        Storage.tryCount = 0;
        await Storage.setItem(key, item);
    }

    static async setItem(key, item) {
        try {
            localStorage.setItem(key, item);
        } catch (e) {
            // 0 代表第一次存储，1代表已经清除后再存储，如果清除了还是存不进，就报错
            if (Storage.tryCount > 0) {
                throw e;
            }
            Storage.filterDeadline();
            Storage.tryCount++;
            Storage.setItem(key, item);
        }
    }

    static get(key) {
        if (!key) {
            return undefined;
        }
        const storeString = localStorage.getItem(key);
        if (!storeString) {
            return undefined;
        }
        const item = JSON.parse(storeString);
        return item.age < Date.now() ? undefined : item.value;
    }

    static filterDeadline() {
        for (let i = localStorage.length - 1; i >= 0; i--) {
            const key = localStorage.key(i);
            const storeString = localStorage.getItem(key);
            if (!storeString) {
                return undefined;
            }
            const item = JSON.parse(storeString);
            if (item.age < Date.now()) {
                localStorage.removeItem(key);
            }
        }
    }
}