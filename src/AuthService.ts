import { Log, User, UserManager } from "./utils/oidc-client";

const clientRoot: string = `${window.location.origin}/`;

export const defaultEcosystem = "hersh-test";
export const defaultSchema =
  "https://dev-schema.trinsic.cloud/hersh-test/zbettertemplate";

export const defaultAuthSettings = {
  authority: "https://localhost:7266/",
  client_id: "okie-dokie",
  redirect_uri: `${clientRoot}callback.html`,
  silent_redirect_uri: `${clientRoot}callback.html`,
  popup_redirect_uri: `${clientRoot}callback.html`,
  post_logout_redirect_uri: `${clientRoot}`,
  response_type: "code",
  scope: "openid",
  prompt: undefined,
  extraQueryParams: {
    "trinsic:ecosystem": defaultEcosystem,
    "trinsic:schema": defaultSchema,
  },
};

export class AuthService {
  public userManager: UserManager;
  public settings: typeof defaultAuthSettings | undefined;
  constructor(settings: typeof defaultAuthSettings) {
    this.settings = settings;
    this.userManager = new UserManager(this.settings);
    Log.setLogger(console);
  }

  public getUser(): Promise<User | null> {
    return this.userManager.getUser();
  }

  public login(): Promise<void> {
    return this.userManager.signinRedirect();
  }

  public renewToken(): Promise<User | null> {
    return this.userManager.signinSilent();
  }

  public logout(): Promise<void> {
    return this.userManager.signoutRedirect();
  }

  public async signinRedirect() {
    const user = await this.userManager.signinRedirectCallback();
    console.log("Logged in user", user);
  }
  public async signinPopup(): Promise<User | null> {
    const user = await this.userManager.signinPopup();
    return user;
  }
  public async signinPopupCallback() {
    await this.userManager.signinPopupCallback();
    // window.alert(user);
  }
  public signinSilent(_parent?: any) {
    //  window.alert(`AuthService ${_parent}`);
    return this.userManager.signinSilent(
      { silentRequestTimeoutInSeconds: 600 },
      _parent
    );
    // window.alert(user);
  }
  public async signinSilentCallback() {
    await this.userManager.signinSilentCallback();
    // window.alert(user);
  }
}
