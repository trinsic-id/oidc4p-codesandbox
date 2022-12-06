import { UserManager } from "./sample-settings";
import { log } from "./sample";

new UserManager(window.OIDCSettings)
  .signoutPopupCallback(undefined, true)
  .then(function () {
    log("signout popup callback response success");
  })
  .catch(function (err) {
    console.error(err);
    log(err);
  });
