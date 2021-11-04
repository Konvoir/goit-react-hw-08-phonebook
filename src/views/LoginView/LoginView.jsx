import { useState } from "react"

1 - 17 ***
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleChange = ({ target: { name, value } }) => {
    switch (name) {
        case 'email':
            return setEmail(value);
        case 'password':
            return setPassword(value);
        default:
            return;
    }
};

const HandleSubmit = e => {
    e.preventDefault();
    dispatch(authOperation.login({ email, password }));
    setEmail('');
    setPassword('');
};

return (
    <div>
        <h1>Login Page</h1>

        
    </div>
)