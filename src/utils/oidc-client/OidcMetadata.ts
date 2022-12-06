/**
 * @public
 */
export interface OidcMetadata {
    issuer: string;
    authorization_endpoint: string;
    token_endpoint: string;
    token_endpoint_auth_methods_supported: string[];
    token_endpoint_auth_signing_alg_values_supported: string[];
    userinfo_endpoint: string;
    check_session_iframe: string;
    end_session_endpoint: string;
    jwks_uri: string;
    registration_endpoint: string;
    scopes_supported: string[];
    response_types_supported: string[];
    acr_values_supported: string[];
    subject_types_supported: string[];
    request_object_signing_alg_values_supported: string[];
    display_values_supported: string[];
    claim_types_supported: string[];
    claims_supported: string[];
    claims_parameter_supported: boolean;
    service_documentation: string;
    ui_locales_supported: string[];

    revocation_endpoint: string;
    introspection_endpoint: string;
    frontchannel_logout_supported: boolean;
    frontchannel_logout_session_supported: boolean;
    backchannel_logout_supported: boolean;
    backchannel_logout_session_supported: boolean;
    grant_types_supported: string[];
    response_modes_supported: string[];
    code_challenge_methods_supported: string[];
}
