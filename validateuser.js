module.exports = function validateUser(userName, password) {
    try {
        if (userName === 'admin' && password === 'admin') {
            return true;
        }
        return false;
    } catch (e) {
        return false;
    }
}