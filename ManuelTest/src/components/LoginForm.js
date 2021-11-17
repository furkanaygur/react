import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { ThemeContext, useContext } from '../context/Theme';

const LoginForm = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [alert, setAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState('danger');
  const [alertContent, setAlertContent] = useState('');

  const [errors, setErrors] = useState({
    email: [],
    name: [],
    password: [],
    rePassword: [],
  });

  const validEmailRegex = (email) => {
    let re = /[a-z]+@[a-z]+\.[a-z]+/;
    return re.test(email);
  };

  const validNameRegex = (name) => {
    let re = /^[a-zA-Z0-9 +-]+$/i;
    return re.test(name);
  };

  const validPasswordRegex = (password) => {
    let re =
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\+\-]){1,})/gm;
    return re.test(password);
  };

  const validPasswordRepeatRegex = (password) => {
    let re = /^.*[0-9]{3,}.*?$/gm;
    return re.test(password);
  };

  const validPasswordsIsSame = (password, rePassword) => {
    return password == rePassword;
  };

  const setBulkError = () => {
    let emailMess = [];
    let nameMess = [];
    let passMess = [];
    let rePassMess = [];
    let status = true;
    if (!email) {
      emailMess.push('The Email could not be empty!');
      status = false;
    }

    if (!name) {
      nameMess.push('The Name could not be empty!');
      status = false;
    }

    if (!password) {
      passMess.push('The Password could not be empty!');
      status = false;
    }

    if (!rePassword) {
      rePassMess.push('The Re-Password could not be empty!');
      status = false;
    }

    if (!validPasswordsIsSame(password, rePassword)) {
      setRePassword('');
      setPassword('');
      rePassMess.push('Passwords are not matching');
      status = false;
    }

    setErrors(() => ({
      ...errors,
      email: emailMess,
      name: nameMess,
      password: passMess,
      rePassword: rePassMess,
    }));

    return status;
  };

  async function submitHandler(e) {
    e.preventDefault();
    const result = await setBulkError();

    if (
      result &&
      errors.email.length === 0 &&
      errors.name.length === 0 &&
      errors.password.length === 0 &&
      errors.rePassword.length === 0
    ) {
      setAlertVariant('success');
      setAlertContent('Registration completed successfully');
      setAlert(true);
      setInterval(() => setAlert(false), 7000);
    } else {
      setName('');
      setPassword('');
      setRePassword('');
      setAlertVariant('danger');
      setAlertContent('Registration failed!!!');
      setAlert(true);
      setInterval(() => setAlert(false), 5000);
    }
  }

  const emailHandleChange = (e) => {
    setEmail(e.target.value);
    const emailMessage = validEmailRegex(e.target.value)
      ? []
      : ['Email is not valid!'];
    setErrors({ ...errors, email: emailMessage });
  };

  const nameHandleChange = (e) => {
    setName(e.target.value);
    let nameMessage =
      e.target.value.length < 4
        ? ['Name must be longer than 4 characters!']
        : [];
    e.target.value.length > 16
      ? nameMessage.push('Name must be less than 16 characters')
      : null;
    validNameRegex(e.target.value)
      ? null
      : nameMessage.push('Name can contains a-Z 0-9 and only "+", "-"');
    setErrors({ ...errors, name: nameMessage });
  };

  const passwordHandleChange = (e) => {
    setPassword(e.target.value);
    let passMessage =
      e.target.value.length < 6
        ? ['Password must be longer than 6 characters!']
        : [];
    e.target.value.length > 16
      ? passMessage.push('Password must be less than 16 characters')
      : null;
    validPasswordRegex(e.target.value)
      ? null
      : passMessage.push(
          'The password must contain at least one a-Z 0-9 and only "+", "-" '
        );
    validPasswordRepeatRegex(e.target.value)
      ? passMessage.push('The Password must not contain repeated numbers')
      : null;
    setErrors({ ...errors, password: passMessage });
  };

  const rePasswordHandleChange = (e) => {
    setRePassword(e.target.value);
    let rePassMessage =
      e.target.value.length < 6
        ? ['Password must be longer than 6 characters!']
        : [];
    e.target.value.length > 16
      ? rePassMessage.push('Password must be less than 16 characters')
      : null;
    validPasswordRegex(e.target.value)
      ? null
      : rePassMessage.push(
          'The password must contain at least one a-Z 0-9 and only "+", "-" '
        );
    validPasswordRepeatRegex(e.target.value)
      ? rePassMessage.push('The Password must not contain repeated numbers')
      : null;
    setErrors({ ...errors, rePassword: rePassMessage });
  };

  return (
    <div style={{ padding: '20px' }} className="container">
      <Button
        style={{ float: 'right' }}
        onClick={changeTheme}
        variant="secondary"
      >
        Change Theme
      </Button>
      <br />
      <br />
      <h1 style={{ textAlign: 'center' }}>Login Form</h1>
      <div className="row">
        <div className="col-xs">
          <Form onSubmit={submitHandler} noValidate>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={emailHandleChange}
                type="email"
                placeholder="Enter a valid Email"
                name="email"
                value={email}
              />
              <Form.Text className="text-danger">
                {errors.email && (
                  <ul>
                    {errors.email.map((err) => (
                      <li>{err}</li>
                    ))}
                  </ul>
                )}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={nameHandleChange}
                type="text"
                placeholder="Enter Name"
                name="name"
                value={name}
              />
              <Form.Text className="text-danger">
                {errors.name && (
                  <ul>
                    {errors.name.map((err, index) => (
                      <li key={index}>{err}</li>
                    ))}
                  </ul>
                )}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={passwordHandleChange}
                type="password"
                placeholder="Password"
                name="password"
                value={password}
              />
              <Form.Text className="text-danger">
                {errors.password && (
                  <ul>
                    {errors.password.map((err, index) => (
                      <li key={index}>{err}</li>
                    ))}
                  </ul>
                )}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Re-Password</Form.Label>
              <Form.Control
                onChange={rePasswordHandleChange}
                type="password"
                placeholder="Re Password"
                name="re_password"
                value={rePassword}
              />
              <Form.Text className="text-danger">
                {errors.rePassword && (
                  <ul>
                    {errors.rePassword.map((err, index) => (
                      <li key={index}>{err}</li>
                    ))}
                  </ul>
                )}
              </Form.Text>
            </Form.Group>
            {alert && <Alert variant={alertVariant}>{alertContent}</Alert>}
            <Button variant="primary" type="submit">
              Sign In
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
