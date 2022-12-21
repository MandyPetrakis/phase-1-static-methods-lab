class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }
  static titleize(string) {
    let split = string.split(" ");
    split.map((word) => {
      if ((word !== "the", "a", "an", "but", "of", "at", "by", "from")) {
        word.charAt(0).toUpperCase() + word.slice(1);
      }
    });
  }
}
