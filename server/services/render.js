exports.homeRoutes = (req, resp) => {
  resp.render("index");
};

exports.add_user = (req, resp) => {
  resp.render("add_user");
};
 
exports.update_user = (req, resp) => {
  resp.render("update_user");
};
