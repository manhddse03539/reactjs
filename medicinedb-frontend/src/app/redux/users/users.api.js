// A mock function to mimic making an async request for data
export function fetchUser() {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: [{ name: 'felix', email: 'felix@gmail.com', password: 'password' }] }), 1000)
  );
}
