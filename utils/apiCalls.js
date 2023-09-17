const getUserByUserName = async(username) => {
    console.log(`Get user by username: ${username}`)
    try {
        const resp = await fetch('/api/users?'+ new URLSearchParams({username:username}));
        if (resp.status !== 200) return null;
        const parsedBody = await resp.json();
        return parsedBody.data;
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
        if (resp.status === 200) return true;
        return false; 
    } catch (e) {
        console.log(e);
        return false;
    }
}

const registerUser = async(data) => {
    try {
        const resp = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify(data)
        });
        if (resp.status === 200) return true;
        return false; 
    } catch (e) {
        console.log(e);
        return false;
    }
}

module.exports = { getUserByUserName, updateUserData, registerUser }