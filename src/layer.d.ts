/**
 * Date: 15/07/2024
 * Time: 4:35:00
 * Copyright (C) 2023-2024 Saifur Rahman
 */

/**
 * @link https://core.telegram.org/type/auth.SentCode
 */

export type AuthSentCode = AuthSentCode.authSentCode | AuthSentCode.authSentCodeSuccess

export namespace AuthSentCode{
  export type authSentCode = {
    _: 'auth.sentCode',
    flags?: number,
    type: AuthSentCodeType
    phone_code_hash: string,
    next_type?: AuthCodeType,
    timeout?: number,
    phone_number?: string
  };
  export type authSentCodeSuccess = {
    _: 'auth.sentCodeSuccess',
    authorization: AuthAuthorization
  }
}

/**
 * @link https://core.telegram.org/type/auth.Authorization
 */
export type AuthAuthorization = AuthAuthorization.authAuthorization | AuthAuthorization.authAuthorizationSignupRequired

export namespace AuthAuthorization {
  export type authAuthorization = {
    _: 'authAuthorization',
    flags?: number,
    pFlags?: Partial<{
      setup_password_required?: true
    }>,
    otherwise_relogin_days?: number,
    tmp_sessions?: number,
    future_auth_token?: Uint8Array,
    user: User
  }
  export type authAuthorizationSignupRequired = {
    _: 'authAuthorizationSignupRequired',
    flags?: number,
    terms_of_service?: HelpTermsOfService
  }
}

/**
 * @link https://core.telegram.org/type/help.TermsOfService
 */
export type HelpTermsOfService = HelpTermsOfService;
export namespace HelpTermsOfService {
  export type helpTermsOfService = {
    _: 'help.TermsOfService',
    flags?: number,
    pFlags?: Partial<{
      popup?: true
    }>,
    id: DataJSON,
    text: string,
    entities: Array<MessageEntity>
    min_age_confirm?: number
  }
}

/**
 * @link https://core.telegram.org/type/MessageEntity
 */
export type MessageEntity = MessageEntity.messageEntityUnknown |
  MessageEntity.messageEntityMention |
  MessageEntity.messageEntityHashtag |
  MessageEntity.messageEntityBotCommand |
  MessageEntity.messageEntityUrl |
  MessageEntity.messageEntityEmail |
  MessageEntity.messageEntityBold |
  MessageEntity.messageEntityItalic |
  MessageEntity.messageEntityCode |
  MessageEntity.messageEntityPre |
  MessageEntity.messageEntityTextUrl |
  MessageEntity.messageEntityMentionName |
  MessageEntity.inputMessageEntityMentionName |
  MessageEntity.messageEntityPhone |
  MessageEntity.messageEntityCashtag |
  MessageEntity.messageEntityUnderline |
  MessageEntity.messageEntityStrike |
  MessageEntity.messageEntityBankCard |
  MessageEntity.messageEntitySpoiler |
  MessageEntity.messageEntityCustomEmoji |
  MessageEntity.messageEntityBlockquote |
  MessageEntity.messageEntityEmoji |
  MessageEntity.messageEntityHighlight |
  MessageEntity.messageEntityLinebreak |
  MessageEntity.messageEntityCaret |
  MessageEntity.messageEntityTimestamp;

export namespace MessageEntity {
  export type messageEntityUnknown = {
    _: 'messageEntityUnknown',
    offset: number,
    length: number
  };
  export type messageEntityMention = {
    _: 'messageEntityMention',
    offset: number,
    length: number
  };
  export type messageEntityHashtag = {
    _: 'messageEntityHashtag',
    offset: number,
    length: number
  };
  export type messageEntityBotCommand = {
    _: 'messageEntityBotCommand',
    offset: number,
    length: number,
    unsafe?: boolean
  };
  export type messageEntityUrl = {
    _: 'messageEntityUrl',
    offset: number,
    length: number
  };
  export type messageEntityEmail = {
    _: 'messageEntityEmail',
    offset: number,
    length: number
  };
  export type messageEntityBold = {
    _: 'messageEntityBold',
    offset: number,
    length: number
  };
  export type messageEntityItalic = {
    _: 'messageEntityItalic',
    offset: number,
    length: number
  };
  export type messageEntityCode = {
    _: 'messageEntityCode',
    offset: number,
    length: number
  };
  export type messageEntityPre = {
    _: 'messageEntityMentionPre',
    offset: number,
    length: number,
    language: string
  };
  export type messageEntityTextUrl = {
    _: 'messageEntityTextUrl',
    offset: number,
    length: number
    url: string
  };
  export type messageEntityMentionName = {
    _: 'messageEntityMention',
    offset: number,
    user_id: string | number
  };
  export type inputMessageEntityMentionName = {
    _: 'inputMessageEntityMentionName',
    offset: number,
    length: number,
    user_id: InputUser
  };
  export type messageEntityPhone = {
    _: 'messageEntityPhone',
    offset: number,
    length: number
  };
  export type messageEntityCashtag = {
    _: 'messageEntityCashtag',
    offset: number,
    length: number
  };
  export type messageEntityStrike = {
    _: 'messageEntityStrike',
    offset: number,
    length: number
  };
  export type messageEntityBankCard = {
    _: 'messageEntityBankCard',
    offset: number,
    length: number
  };
  export type messageEntitySpoiler = {
    _: 'messageEntitySpoiler',
    offset: number,
    length: number
  };
  export type messageEntityCustomEmoji = {
    _: 'messageEntityCustomEmoji',
    offset: number,
    length: number
  };
  export type messageEntityBlockquote = {
    _: 'messageEntityMentionBlockquote',
    offset: number,
    length: number
  };
  export type messageEntityEmoji = {
    _: 'messageEntityMentionEmoji',
    offset: number,
    length: number
  };
  export type messageEntityHighlight = {
    _: 'messageEntityHighlight',
    offset?: number,
    length?: number
  };

  export type messageEntityLinebreak = {
    _: 'messageEntityLinebreak',
    offset?: number,
    length?: number
  };

  export type messageEntityCaret = {
    _: 'messageEntityCaret',
    offset?: number,
    length?: number
  };

  export type messageEntityTimestamp = {
    _: 'messageEntityTimestamp',
    offset?: number,
    length?: number,
    time?: number,
    raw?: string
  };

}

/**
 * @link https://core.telegram.org/type/InputUser
 */
export type InputUser = InputUser.inputUserEmpty | InputUser.inputUserSelf | InputUser.inputUser | InputUser.inputUserFromMessage;

export namespace InputUser {
  export type inputUserEmpty = {
    _: 'inputUserEmpty'
  };

  export type inputUserSelf = {
    _: 'inputUserSelf'
  };

  export type inputUser = {
    _: 'inputUser',
    user_id: string | number,
    access_hash: string | number
  };
}

/**
 * @link https://core.telegram.org/type/DataJSON
 */
export type DataJSON = DataJSON
export namespace DataJSON {
  export type dataJSON = {
    _: 'dataJSON',
    data: string
  }
}



/**
 * @link https://core.telegram.org/type/User
 */
export type User = User.userEmpty | User.user
export namespace User {
  export type userEmpty = {
    _: 'userEmpty',
    id: string | number
  };

  export type user = {
    _: 'user',
    flags?: number,
    pFlags?: Partial<{
      self?: true,
      contact?: true,
      mutual_contact?: true,
      deleted?: true,
      bot?: true,
      bot_chat_history?: true,
      bot_nochats?: true,
      verified?: true,
      restricted?: true,
      min?: true,
      bot_iniln_geo?: true,
      support?: true,
      scam?: true,
      apply_min_photo?: true,
      fake?: true,
      bot_attach_menu?: true,
      premium?: true,
      attach_menu_enabled?: true,
      bot_can_edit?: true,
      close_friend?: true,
      stories_hiden?: true,
      stories_unavailable?: true,
      contact_require_premium?: true,
      bot_business?: true
    }>,
    flags2?: number,
    id: string | number,
    access_hash?: string | number,
    first_name?: string,
    last_name?: string,
    username?: string,
    phone?: string,
    photo?: UserProfilePhoto,
    status?: UserStatus,
    bot_info_version?: number,
    restriction_reason?: Array<RestrictionReason>,
    bot_inline_placeholder?: string,
    lang_code?: string,
    emoji_status?: EmojiStatus,
    usernames?: Array<Username>,
    stories_max_id?: number,
    color?: PeerColor,
    profile_color?: PeerColor,
    sortName?: string
  }
}
/**
 * @link httpts://core.telegram.org/type/PeerColor
 */
export type PeerColor = PeerColor
export namespace PeerColor  {
  export type peerColor = {
    _: 'peerColor',
    flags?: number,
    color?: number,
    background_emoji_id?: string | number
  }
}

/**
 * @link https://core.telegram.org/type/Username
 */
export type Username = Username
export namespace Username{
  export type username = {
    _: 'username',
    flags?: number,
    pFlags?: Partial<{
      editable?: true,
      active?: true
    }>,
    username: string
  }
}


/**
 * @link https://core.telegram.org/type/EmojiStatus
 */
export type EmojiStatus = EmojiStatus.emojiStatusEmpty | EmojiStatus.emojiStatus | EmojiStatus.emojiStatusUntil;

export namespace EmojiStatus {
  export type emojiStatusEmpty = {
    _: 'emojiStatusEmpty'
  };

  export type emojiStatus = {
    _: 'emojiStatus',
    document_id: string | number
  };

  export type emojiStatusUntil = {
    _: 'emojiStatusUntil',
    document_id: string | number,
    until: number
  };
}

/**
 * @link https://core.telegram.org/type/RestrictionReason
 */
export type RestrictionReason = RestrictionReason
export namespace RestrictionReason{
  export type restrtionReason = {
    _: 'restrictionReason',
    platform: string,
    reason: string,
    text: string
  }
}


/**
 * @link https://core.telegram.org/type/UserStatus
 */
export type UserStatus = UserStatus.userStatusEmpty | UserStatus.userStatusOnline | UserStatus.userStatusOffline | UserStatus.userStatusRecently | UserStatus.userStatusLastWeek | UserStatus.userStatusLastMonth;

export namespace UserStatus {
  export type userStatusEmpty = {
    _: 'userStatusEmpty'
  };

  export type userStatusOnline = {
    _: 'userStatusOnline',
    expires: number
  };

  export type userStatusOffline = {
    _: 'userStatusOffline',
    was_online: number
  };

  export type userStatusRecently = {
    _: 'userStatusRecently',
    flags?: number,
    pFlags: Partial<{
      by_me?: true,
    }>
  };

  export type userStatusLastWeek = {
    _: 'userStatusLastWeek',
    flags?: number,
    pFlags: Partial<{
      by_me?: true,
    }>
  };

  export type userStatusLastMonth = {
    _: 'userStatusLastMonth',
    flags?: number,
    pFlags: Partial<{
      by_me?: true,
    }>
  };
}

/**
 * @link https://core.telegram.org/type/UserProfilePhoto
 */
export type UserProfilePhoto = UserProfilePhoto
export namespace UserProfilePhoto{
  export type userProfilePhotoEmpty = {
    _: 'userProfilePhotoEmpty'
  };

  export type userProfilePhoto = {
    _: 'userProfilePhoto',
    flags?: number,
    pFlags?: Partial<{
      has_video?: true,
      personal?: true
    }>,
    photo_id: string | number,
    stripped_thumb?: Uint8Array,
    dc_id: number
  }
}


/**
 * @link https://core.telegram.org/type/auth.CodeType
 */

export type AuthCodeType = AuthCodeType.authCodeTypeSms | AuthCodeType.authCodeTypeCall | AuthCodeType.authCodeTypeCall | AuthCodeType.authCodeTypeMissedCall | AuthCodeType.authCodeTypeFragmentSms

export namespace AuthCodeType {
  export type authCodeTypeSms = {
    _: 'auth.codeTypeSms'
  };
  
  export type authCodeTypeCall = {
    _: 'auth.codeTypeCall'
  };

  export type authCodeTypeFlashCall = {
    _: 'auth.codeTypeFlashCall'
  };

  export type authCodeTypeMissedCall = {
    _: 'auth.codeTypeMissedCall'
  };

  export type authCodeTypeFragmentSms = {
    _: 'auth.codeTypeFragmentSms'
  }
}

/**
 * @link https://core.telegram.org/type/auth.SentCodeType
 */
export type AuthSentCodeType =
  AuthSentCodeType.authSentCodeTypeApp |
  AuthSentCodeType.authSentCodeTypeSms |
  AuthSentCodeType.authSentCodeTypeCall |
  AuthSentCodeType.authSentCodeTypeFlashCall |
  AuthSentCodeType.authSentCodeTypeMissedCall |
  AuthSentCodeType.authSentCodeTypeEmailCode |
  AuthSentCodeType.authSentCodeTypeEmailRequired |
  AuthSentCodeType.authSentCodeTypeFragmentSms |
  AuthSentCodeType.authSentCodeTypeFirebaseSms |
  AuthSentCodeType.authSentCodeTypeSmsWord |
  AuthSentCodeType.authSentCodeTypeSmsPhrase

export namespace AuthSentCodeType {
  export type authSentCodeTypeApp = {
    _: 'auth.sentCodeTypeApp',
    length: number
  };

  export type authSentCodeTypeSms = {
    _: 'auth.sentCodeTypeSms',
    length: number
  };

  export type authSentCodeTypeCall = {
    _: 'auth.sentCodeTypeCall',
    length: number
  };
  export type authSentCodeTypeFlashCall = {
    _: 'auth.sentCodeTypeFlashCall',
    pattern: string
  };

  export type authSentCodeTypeMissedCall = {
    _: 'auth.sentCodeTypeMissedCall',
    prefix: string,
    length: number
  };
  export type authSentCodeTypeEmailCode = {
    _: 'auth.sentCodeTypeEmailCode',
    flags?: number,
    length: number,
    pFlags?: Partial<{
      applie_signin_allowed?: true;
      google_signin_allowed?: true;
    }>,
    email_pattern: string,
    length: number,
    reset_available_period?: number,
    reset_pending_date?: number
  };
  export type authSentCodeTypeEmailRequired = {
    _: 'auth.sentCodeTypeEmailRequired',
    flags?: number,
    pFlags?: Partial<{
      applie_signin_allowed?: true;
      google_signin_allowed?: true;
    }>,
  };

  export type authSentCodeTypeFragmentSms = {
    _: 'auth.sentCodeTypeFragmentSms',
    url: string,
    length: number
  };

  export type authSentCodeTypeFirebaseSms = {
    _: 'auth.sentCodeType',
    flags?: number,
    nonce?: Uint8Array,
    play_integrity_nonce?: Uint8Array,
    receipt?: string,
    push_timeout?: number,
    length: number
  };

  export type authSentCodeTypeSmsWord = {
    _: 'auth.sentCodeTypeSmsWord',
    flags?: number,
    begining?: string
  };

  export type authSentCodeTypeSmsPhrase = {
    _: 'auth.sentCodeTypeSmsPhrase',
    flags?: number,
    begining?: string
  };

}