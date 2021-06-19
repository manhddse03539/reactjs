/* eslint-disable no-undef */

export const authService = {
  login(data) {
    window.sessionStorage.setItem('auth', JSON.stringify(data));
    this.currentUser = data;

    if (this.callback) {
      this.callback(data);
    }
  },
  getCurrentUser() {
    return this.currentUser;
  },
  logout() {
    delete this.currentUser;
    window.sessionStorage.clear();
    if (this.callback) {
      this.callback(undefined);
    }
  },
  subscribe(callback) {
    this.callback = callback;
    return () => {
      this.callback = undefined;
    };
  },
};
try {
  authService.currentUser = JSON.parse(window.sessionStorage.getItem('auth'));
} catch (e) {
  //
}
