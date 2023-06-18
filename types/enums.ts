export enum ACCOUNT_TYPE {
  BABY_SITTER = "baby_sitter",
  HOME_CARE_ASSISTANT = "home_care_assistant",
  CLIENT = "client",
}

export enum ACCOUNT_STATUS {
  APPROVED = "approved",
  BANNED = "banned",
  BLOCKED = "blocked",
  PENDING = "pending",
  PENDING_CONFIRMATION = "pending_confirmation",
}

export enum CHARACTERISTIC {
  RESPONSIBLE = "responsible",
  FUNNY = "funny",
  ATHLETIC = "athletic",
  CREATIVE = "creative",
  FRIENDLY = "friendly",
  TALKATIVE = "talkative",
  ENTHOUSIASTIC = "enthusiastic",
  CAREFUL = "careful",
  PATIENT = "patient",
  IMAGINATIVE = "imaginative",
}

export enum ADDITIONAL_CHARACTERISTIC {
  BAFA_CERTIFICATE = "bafa_certificate",
  FIRST_AID_CERTIFICATE = "first_aid_certificate", // formation psc1
  DRIVER_LICENSE = "driver_license",
  CAR_OWNER = "car_owner",
  SMOKER = "smoker",
  CREATIVE = "creative",
  PARENT = "parent",
}

export enum XP_TYPE {
  BABY = "baby",
  TODDLER = "toddler",
  PRESCHOOLER = "preschooler",
  GRADESCHOOLER = "gradeschooler",
  TEENAGER = "teenager",
  ALZHEIMER_PATIENT = "alzheimer_patient",
}

export enum PREFERED_WORKING_PLACE {
  CLIENT_HOME = "client_home",
  NO_PREFERENCE = "no_preference",
}

export enum TIMEFRAME {
  MORNING = "morning",
  AFTERNOON = "afternoon",
  EVENING = "evening",
  NIGHT = "night",
}

export enum ACADEMIC_LEVEL {
  NO_ACADEMIC_LEVEL = "no_academic_level",
  BREVET = "brevet",
  BACCALAUREAT = "baccalaureat",
  CAP = "cap",
  BAFA = "bafa",
  LICENSE = "licence",
  MASTER = "master",
  DIPLOME_UNIVERSITAIRE = "diplome_universitaire",
  FORMATION_TECHNIQUE = "formation_technique",
  OTHER = "other",
}

export enum PROPOSED_SERVICE {
  DRAWING = "drawing",
  READING = "reading",
  MUSIC = "music",
  LANGUAGES = "languages",
  COOKING = "cooking",
  HOMEWORK_HELP = "homework_help",
  OUTDOOR_ACTIVITIES_COMPANION = "outdoor_activities_companion",
  HOUSEWORK = "housework",
  LAUNDRY = "laundry",
  GROCERY_SHOPPING = "grocery_shopping",
  TOILET_SUPPORT = "toilet_support",
  MEALS_TAKING = "meals_taking",
  MEDICATION_TAKING = "medication_taking",
  ALZHEIMER_PATIENT_ASSISTANCE = "alzheimer_patient_assistance",
  ADMINISTRATIVE_HELP = "administrative_help",
}

export enum BADGE {
  PROFILE_COMPLETED = "profile_completed",
  KYC_COMPLETED = "kyc_completed",
  CRIMINAL_RECORD_DOCUMENT_UPLOADED = "criminal_record_document_uploaded",
  BAFA_CERTIFICATE_VERIFIED = "bafa_certificate_verified",
  FIRST_AID_CERTIFICATE_VERIFIED = "first_aid_certificate_verified",
}
