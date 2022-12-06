import { useEffect, useRef, useState } from "react";
import { AuthService, defaultAuthSettings } from "./AuthService";
import { Token } from "./Token";

export const AppContent = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const getUser = async () => {
      const authService = new AuthService(window.TrinsicSettings);
      const user = await authService.getUser();
      if (user === null) {
        console.error("Could not find user");
        return;
      }
      setToken(JSON.stringify(user.profile._vp_token, null, 2));
    };
    //getUser();
  }, []);

  const ref = useRef<any>();

  return (
    <div
      className="oauth"
      ref={(_ref) => {
        ref.current = _ref;
      }}
    >
      <button
        onClick={async () => {
          const authService = new AuthService(window.TrinsicSettings);
          const user = await authService.signinSilent(ref.current);
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
