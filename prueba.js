function sanitise(x) {
    if (isNaN(x)) {
      return false;
    }
    return x;
  }


console.log(sanitise(10))