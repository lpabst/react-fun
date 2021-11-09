const users = {
  "lorenpabst@gmail.com": {
    id: "11111111-2222-3333-4444-555555555555",
    email: "lorenpabst@gmail.com",
    firstName: "Loren",
    lastName: "Pabst",
    password: "heyBigBoi",
  },
  "stephenallen.garner@gmail.com": {
    id: "22222222-8888-4444-0000-454545454545",
    email: "stephenallen.garner@gmail.com",
    firstName: "Stephen",
    lastName: "Garner",
    password: "meGustaElQueso",
  },
};

function login(email, password) {
  return new Promise((resolve, reject) => {
    console.log("fake login called for: ", email, password);
    const user = users[email];
    if (!user) {
      console.log("no user found by that email");
      return reject({
        status: 403,
        message: "Invalid username or password",
      });
    }

    if (user.password !== password) {
      console.log("invalid password for that email");
      return reject({
        status: 403,
        message: "Invalid username or password",
      });
    }

    console.log("valid login, returning user");
    delete user.password;
    return resolve({
      status: 200,
      data: {
        user: JSON.parse(JSON.stringify(user)),
      },
    });
  });
}

const fakeBackend = {
  login,
};

export default fakeBackend;
