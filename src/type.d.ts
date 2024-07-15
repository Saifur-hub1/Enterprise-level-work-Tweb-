/**
 * Date: 15/07/2024
 * Time: 4:35:00 PM
 * Copyright (C) 2023-2024 Saifur Rahman
 */

import { AuthSentCode } from './layer'

export type DcId = number;
export type TrueDcId = 1 | 2 | 3 | 4 | 5;

export type AuthState = AuthState.signIn
export namespace AuthState {
  export type signIn = {
    _: 'authStateSignIn'
  };

  export type signQr = {
    _: 'authStateSignQr'
  };

  export type authCode = {
    _: 'authStateAuthCode',
    sentCode: AuthSentCode.authSentCode
  };

  export type password = {
    _: 'authStatePassword'
  };

  export type signup = {
    _: 'authStateSignUp',
    authCode: {
      phone_number: string,
      phone_code_hash: string
    }
  };

  export type signedIn = {
    _: 'authSignedIn',
  };

  export type signImport = {
    _: 'authStateSignImport',
    data: {
      token: string,
      userId: UserId,
      dcId: DcId,
      isTest: boolean,
      tgAddr: string
    }
  }
}