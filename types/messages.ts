export enum ACCOUNT_SERVICE_MESSAGE {
  VERIFICATION_EMAIL_NOT_SENT = "verification.email.not.sent",
  VERIFICATION_EMAIL_SENT = "verification.email.sent",
  PASSWORD_RESET_EMAIL_SENT = "password.reset.email.sent",
  PASSWORD_RESET_EMAIL_NOT_SENT = "password.reset.email.not.sent",
  TOKEN_VERIFIED = "token.verified",
  INVALID_TOKEN = "invalid.token",
  USER_REGISTERED = "user.registered",
  EMAIL_IN_USE = "email.in.used",
  USER_NOT_REGISTERED = "user.not.registered",
  USER_NOT_FOUND = "user.not.found",
  USER_NOT_UPDATED = "user.not.updated",
  TOKEN_EXPIRED = "token.expired",
  INCORRECT_CREDENTIALS = "incorrect.credentials",
  USER_LOGGED_IN = "user.logged.in",
  PASSWORD_RESET = "password.reset",
  PASSWORD_NOT_RESET = "password.not.reset",
  ACCESS_DENIED = "access.denied",
  USER_LOGGED_OUT = "user.logged.out",
  PROFILE_NOT_CREATED = "profile.not.created",
  IMAGE_NOT_UPLOADED = "image.not.uploaded",
  IMAGE_NOT_REMOVED = "image.not.removed",
  PROFILE_NOT_FOUND = "profile.not.found",
  PROFILE_UPDATED = "profile.updated",
  PROFILE_NOT_UPDATED = "profile.not.updated",
}

export enum GENERIC_MESSAGE {
  INTERNAL_SERVER_ERROR = "internal.server.error",
  MISSING_FIELDS = "missing.fields",
  RESOURCE_CREATED = "resource.created",
  RESOURCE_NOT_CREATED = "resource.not.created",
  RESOURCE_UPDATED = "resource.updated",
  RESOURCE_NOT_UPDATED = "resource.not.updated",
  RESOURCE_DELETED = "resource.deleted",
  RESOURCE_NOT_DELETED = "resource.not.deleted",
  RESOURCE_NOT_FOUND = "resource.not.found",
  RESOURCE_FOUND = "resource.found",
  RESOURCES_IMPORTED = "resources.imported",
  INDEX_CREATED = "index.created",
  INDEX_NOT_CREATED = "index.not.created",
  RESOURCE_INDEXED = "resource.indexed",
  RESOURCE_NOT_INDEXED = "resource.not.indexed",
  ACTION_NOT_AUTHORIZED = "action.not.authorized",
}
