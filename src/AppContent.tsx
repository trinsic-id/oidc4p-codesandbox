import { useEffect, useRef, useState } from "react";
import { AuthService, defaultAuthSettings } from "./AuthService";
import { Token } from "./Token";

export const AppContent = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const getUser = async () => {
      const authService = new AuthService(window.OIDCSettings);
      const user = await authService.getUser();
      if (user === null) {
        console.error("Could not find user");
        return;
      }
      setToken(JSON.stringify(user.profile._vp_token, null, 2));
    };
    //getUser();
  }, []);

  return (
    <div id="oauth-frame" className="oauth">
      <button
        onClick={async () => {
          const authService = new AuthService(window.OIDCSettings);
          const user = await authService.signinSilent();
          if (user) setToken(JSON.stringify(user.profile._vp_token, null, 2));
        }}
      >
        Share Credential
      </button>
      <br />
      {token !== "" && <Token token={token} />}
    </div>
  );
};
