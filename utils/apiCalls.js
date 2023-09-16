const getUserById = async(id) => {
    try {
        const resp = await fetch('/api/users');
        if (resp.status !== 200) return null;
        return await resp.json(); 
    } catch (e) {
        console.log(e);
        return null;
    }
}

const updateUserData = async(data) => {
    try {
        const resp = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify(data)
        });
        if (resp.status !== 200) return null;
        return true; 
    } catch (e) {
        console.log(e);
        return false;
    }
}


module.exports = { getUserById, updateUserData }