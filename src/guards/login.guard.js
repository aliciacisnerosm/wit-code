export const requireLogin = (to, from, next) => {
  if (to.meta.auth) {
    if (isLoggedIn()) {
      next();
    }
    next.redirect("/wit-code/login");
  } else {
    next();
  }
};

function isLoggedIn(){
    let user = localStorage.getItem('user');
    if(user) {
        return true;
    }
    else {
        return false;
    }
}