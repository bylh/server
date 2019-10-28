export function deepClone(data) {
    if (data instanceof Array) {
        let newData = [];
        for (let i = 0, l = data.length; i < l; i++) {
            newData[i] = deepClone(data[i]);
        }
        return newData;
    }
    else if (data instanceof Object) {
        let newData = {};
        for (let i in data) {
            newData[i] = deepClone(data[i]);
        }
        return newData;
    }
    else {
        return data;
    }
}
