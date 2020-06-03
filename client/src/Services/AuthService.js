export default {
    login: user => {
        return fetch('/login', {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status === 200) {
                // console.log('data from AuthService /login response: ', res);
                return res.json().then(data => {
                    console.log('dis data: ', data);
                    return data;
                });
            } else {
                return res.json().then(data => {
                    return { isAuthenticated: false, user: { username: "", isAdmin: "" }, message: data.message };
                });
            }
        });
    },
    register: user => {
        return fetch('/signup', {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => data);
    },
    logout: () => {
        return fetch('/logout')
            .then(res => res.json())
            .then(data => data);
    },
    isAuthenticated: () => {
        return fetch('/authenticated')
            .then(res => {
                if (res.status !== 401) {
                    return res.json().then(data => data);
                } else {
                    return { isAuthenticated: false, user: { username: "", isAdmin: null } };
                }
            })
    }
}