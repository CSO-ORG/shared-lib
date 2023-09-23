export enum ACCOUNT_SERVICE_MESSAGE_PATTERN {
  SEND_VERIFICATION_EMAIL = "account-service.send-verification-email",
  SEND_PASSWORD_RESET_EMAIL = "account-service.send-password-reset-email",
  VERIFY_TOKEN = "account-service.verify-token",
  REGISTER = "account-service.register",
  LOGIN = "account-service.login",
  RESET_PASSWORD = "account-service.reset-password",
  WHOAMI = "account-service.whoami",
  LOGOUT = "account-service.logout",
  FIND_USER_BY_EMAIL = "account-service.find-user-by-email",
  REFRESH_TOKENS = "account-service.refresh-tokens",
  HEALTHCHECK = "account-service.healthcheck",
  UPLOAD_IMAGE = "account-service.upload-image",
  REMOVE_IMAGE = "account-service.remove-image",
  GET_USER_PROFILE = "account-service.get-user-profile",
  GET_PROFILE = "account-service.get-profile",
}

export enum ALERT_SERVICE_MESSAGE_PATTERN {
  HEALTHCHECK = "alert-service.healthcheck",
  CREATE_ALERT = "alert-service.create-alert",
  GET_ALL = "alert-service.get-all",
  IMPORT_ALERTS = "alert-service.import-alerts",
  CREATE_INDEX = "alert-service.create-index",
  INDEX_ALERT = "alert-service.index-alert",
  FULL_INDEX = "alert-service.full-index",
  SEARCH = "alert-service.search",
  GET_ALL_FROM_ELASTICSEARCH = "alert-service.get-all-from-elastic-search",
  GET_ALERT = "alert-service.get-alert",
  UPDATE_ALERT = "alert-service.update-alert",
  DELETE_ALERT = "alert-service.delete-alert",
  SET_MODERATION_STATUS = "alert-service.set-moderation-status",
  ADD_FAVORITE = "alert-service.create-favorite",
  GET_FAVORITES = "alert-service.get-favorite",
  DELETE_FAVORITE = "alert-service.delete-favorite",
  GET_ALL_COORDINATES = "alert-service.get-all-coordinates",
  GET_UNPUBLISHED_ALERTS = "alert-service.get-unpublished-alerts",
}
