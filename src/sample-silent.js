const Log = oidc.Log;
console.log("Hey3");
const UserManager = oidc.UserManager;

Log.setLogger(console);
Log.setLevel(Log.INFO);

function log() {
  document.getElementById("out").innerText = "";

  Array.prototype.forEach.call(arguments, function (msg) {
    if (msg instanceof Error) {
      msg = "Error: " + msg.message;
    } else if (typeof msg !== "string") {
      msg = JSON.stringify(msg, null, 2);
    }
    document.getElementById("out").innerHTML += msg + "\r\n";
  });
}

new UserManager(window.OIDCSettings)
  .signinSilentCallback()
  .then(function () {
    log("signin silent callback response success");
  })
  .catch(function (err) {
    console.error(err);
    log(err);
  });
