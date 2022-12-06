// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

/**
 * @public
 */
export class SignoutResponse {
    public readonly state: string | null;

    // error props
    /** @see {@link ErrorResponse.error} */
    public error: string | null;
    /** @see {@link ErrorResponse.error_description} */
    public error_description: string | null;
    /** @see {@link ErrorResponse.error_uri} */
    public error_uri: string | null;

    /** custom state data set during the initial signin request */
    public userState: unknown;

    public constructor(params: URLSearchParams) {
        this.state = params.get("state");

        this.error = params.get("error");
        this.error_description = params.get("error_description");
        this.error_uri = params.get("error_uri");
    }
}
