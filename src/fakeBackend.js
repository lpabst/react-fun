const users = {
  "lorenpabst@gmail.com": {
    id: "1111-2222-3333-4444-555555555555",
    email: "lorenpabst@gmail.com",
    firstName: "Loren",
    lastName: "Pabst",
    password: "heyBigBoi",
  },
};

function login(email, password) {
  return new Promise((resolve, reject) => {
    const user = users[email];
    if (!user) {
      reject({
        status: 403,
        message: "Invalid username or password",
      });
    }

    if (user.password !== password) {
      reject({
        status: 403,
        message: "Invalid username or password",
      });
    }

    delete user.password;
    resolve({
      status: 200,
      data: {
        user,
      },
    });
  });
}

const fakeBackend = {
  login,
};

export default fakeBackend;
