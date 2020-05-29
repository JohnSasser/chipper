export default {
    login: user => {
        return fetch('/login', {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status !== 401) {
                return res.json().then(data => data);
            } else {
                return { isAuthenticated: false, user: { username: "", role: "" } };
            }
        });
    },
    register: user => {
        console.log('user in authservice register:', user);
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
                    return { isAuthenticated: false, user: { username: "", role: "" } };
                }
            })
    }
}