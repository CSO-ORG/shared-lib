export enum ACCOUNT_TYPE {
  USER = "user",
  MODERATOR = "moderator",
  ADMIN = "admin",
}

export enum PET_TYPE {
  cat = "cat",
  dog = "dog",
  bird = "bird",
  turtle = "turtle",
  rabbit = "rabbit",
  cow = "cow",
  horse = "horse",
  sheep = "sheep",
  goat = "goat",
  other = "other",
}

export enum ALERT_STATUS {
  IN_CREATION = "in_creation",
  PUBLISHED = "published",
  TERMINATED = "terminated",
}

export enum ALERT_CATEGORY {
  LOST_PET = "lost_pet",
  FOUND_PET = "found_pet",
}

export enum PET_CATEGORY {
  DOG = "dog",
  CAT = "cat",
}

export enum SEX_CATEGORY {
  MALE = "male",
  FEMALE = "female",
}

// Couleurs de chat
export enum COLOR_CAT {
    WHITE = 'White',
    BLACK = 'Black',
    GRAY = 'Gray',
    BROWN = 'Brown',
    ORANGE = 'Orange',
    CALICO = 'Calico',
    TABBY = 'Tabby',
    BLUE = 'Blue', // Ceci est en fait une couleur grise pour les chats va savoir pourquoi...
    TORTOISESHELL = 'Tortoiseshell',
    CREAM = 'Cream',
    SIAMESE = 'Siamese',
    GOLDEN = 'Golden'
}

// Couleurs de chiens
export enum COLOR_DOG {
    WHITE = 'White',
    BLACK = 'Black',
    GRAY = 'Gray',
    BROWN = 'Brown',
    TAN = 'Tan',
    BLUE = 'Blue',
    GOLDEN = 'Golden',
    BRINDLE = 'Brindle',
    RED = 'Red',
    FAWN = 'Fawn',
    MERLE = 'Merle'
}

// Race de chat
export enum CAT_BREEDS {
    PERSIAN = "Persian",
    MAINE_COON = "Maine Coon",
    SIAMESE = "Siamese",
    RAGDOLL = "Ragdoll",
    BENGAL = "Bengal",
    SPHYNX = "Sphynx",
    BRITISH_SHORTHAIR = "British Shorthair",
    AMERICAN_SHORTHAIR = "American Shorthair",
    SCOTTISH_FOLD = "Scottish Fold",
    BURMESE = "Burmese",
    ORIENTAL = "Oriental",
    ABYSSINIAN = "Abyssinian",
    NORWEGIAN_FOREST = "Norwegian Forest",
    SIBERIAN = "Siberian",
    EXOTIC_SHORTHAIR = "Exotic Shorthair",
    DEVON_REX = "Devon Rex",
    HIMALAYAN = "Himalayan",
    RUSSIAN_BLUE = "Russian Blue",
    TURKISH_ANGORA = "Turkish Angora",
    MANX = "Manx",
    CORNISH_REX = "Cornish Rex",
    BALINESE = "Balinese",
    SOMALI = "Somali",
    BIRMAN = "Birman",
    JAVANESE = "Javanese",
    OCICAT = "Ocicat",
    AMERICAN_BOBTAIL = "American Bobtail",
    HAVANA_BROWN = "Havana Brown",
    TONKINESE = "Tonkinese",
    EGYPTIAN_MAU = "Egyptian Mau",
    AMERICAN_CURL = "American Curl",
    SELKIRK_REX = "Selkirk Rex",
    COLORPOINT_SHORTHAIR = "Colorpoint Shorthair",
    JAPANESE_BOBTAIL = "Japanese Bobtail",
    CHARTREUX = "Chartreux",
    LAPERM = "LaPerm",
    SINGAPURA = "Singapura",
    PIXIEBOB = "Pixiebob",
    BOMBAY = "Bombay",
    KORAT = "Korat",
    BURMILLA = "Burmilla",
    CURLY = "Curly"
}

// Races de chien
export enum DOG_BREEDS {
    LABRADOR_RETRIEVER = "Labrador Retriever",
    GERMAN_SHEPHERD = "German Shepherd",
    GOLDEN_RETRIEVER = "Golden Retriever",
    FRENCH_BULLDOG = "French Bulldog",
    BULLDOG = "Bulldog",
    POODLE = "Poodle",
    BEAGLE = "Beagle",
    ROTTWEILER = "Rottweiler",
    GERMAN_SHORTHAIRED_POINTER = "German Shorthaired Pointer",
    YORKSHIRE_TERRIER = "Yorkshire Terrier",
    BOXER = "Boxer",
    SIBERIAN_HUSKY = "Siberian Husky",
    DACHSHUND = "Dachshund",
    PEMBROKE_WELSH_CORGI = "Pembroke Welsh Corgi",
    DOBERMAN_PINSCHER = "Doberman Pinscher",
    GREAT_DANE = "Great Dane",
    SHIH_TZU = "Shih Tzu",
    MINIATURE_SCHNAUZER = "Miniature Schnauzer",
    AUSTRALIAN_SHEPHERD = "Australian Shepherd",
    CAVALIER_KING_CHARLES_SPANIEL = "Cavalier King Charles Spaniel",
    SHETLAND_SHEEPDOG = "Shetland Sheepdog",
    BOSTON_TERRIER = "Boston Terrier",
    PUG = "Pug",
    HAVANESE = "Havanese",
    MASTIFF = "Mastiff",
    BRITTANY = "Brittany",
    ENGLISH_SPRINGER_SPANIEL = "English Springer Spaniel",
    CHIHUAHUA = "Chihuahua",
    BERNARD = "Saint Bernard",
    AKITA = "Akita",
    BORDER_COLLIE = "Border Collie",
    BICHON_FRISE = "Bichon Frise",
    MALTESE = "Maltese",
    COCKER_SPANIEL = "Cocker Spaniel",
    CHOW_CHOW = "Chow Chow",
    COLLIE = "Collie",
    BASENJI = "Basenji",
    ALASKAN_MALAMUTE = "Alaskan Malamute",
    VIZSLA = "Vizsla",
    BLOODHOUND = "Bloodhound",
    WEST_HIGHLAND_WHITE_TERRIER = "West Highland White Terrier",
    CANE_CORSO = "Cane Corso",
    NEWFOUNDLAND = "Newfoundland",
    BULL_TERRIER = "Bull Terrier",
    DINGO = "Dingo",
    SHAR_PEI = "Shar Pei"
}


// Taille
export enum HEIGHT_CATEGORY {
  SHORT = "short",
  AVERAGE = "average",
  TALL = "tall",
}

// poids
export enum WEIGHT_CATEGORY {
  THIN = "thin",
  NORMAL = "normal",
  PLUMP = "plump",
}

// Types de poils
export enum HAIR_TYPE {
  SHORT = "short",
  LONG = "long",
  FRIZZY = "frizzy",
  SEMILONG = "semilong",
  STRAIGHT = "straight",
}

// Types de colliers
export enum COLLAR_TYPE {
    STANDARD = "Standard",
    MARTINGALE = "Martingale",
    CHOKE_CHAIN = "Choke Chain",
    PRONG_OR_PINCH = "Prong or Pinch",
    HEAD_COLLAR = "Head Collar",
    BREAKAWAY = "Breakaway",
    ELECTRONIC = "Electronic",
    VIBRATING = "Vibrating",
    PERSONALIZED = "Personalized",
    REFLECTIVE_OR_ILLUMINATED = "Reflective or Illuminated",
    FLEA = "Flea Collar"
}

// Matériels du collier
export enum COLLAR_MATERIAL {
    NYLON = "Nylon",
    LEATHER = "Leather",
    METAL = "Metal",
    HEMP = "Hemp",
    COTTON = "Cotton",
    RUBBER = "Rubber",
    NEOPRENE = "Neoprene",
    VINYL = "Vinyl"
}

// Couleurs du collier
export enum COLLAR_COLOR {
    BLACK = "Black",
    BROWN = "Brown",
    WHITE = "White",
    RED = "Red",
    BLUE = "Blue",
    GREEN = "Green",
    YELLOW = "Yellow",
    ORANGE = "Orange",
    PINK = "Pink",
    PURPLE = "Purple",
    GREY = "Grey",
    GOLD = "Gold",
    SILVER = "Silver",
    MULTICOLORED = "Multicolored"
}

export enum CONTACT_TYPE {
  PHONE = "phone",
  EMAIL = "email",
  WHATSAPP = "whatsapp",
}

export enum AGE_EXPRESSED_IN {
  MONTH = "month",
  YEAR = "year",
}
