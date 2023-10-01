const getUserByEmail = async(email) => {
    try {
        const resp = await fetch('/api/users?'+ new URLSearchParams({email:email}));
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

const deleteUser = async(email) => {
    console.log(`Delete user by email: ${email}`)
    try {
        const resp = await fetch('/api/users?'+ new URLSearchParams({email:email}), {
            method: 'DELETE',
        });
        if (resp.status !== 200) return false;
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}

module.exports = { getUserByEmail, updateUserData, registerUser, deleteUser }