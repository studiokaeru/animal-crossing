export interface Item {
    sourceSheet:           Category;
    name:                  string;
    diy?:                  boolean;
    size?:                 Size;
    milesPrice?:           number | null;
    sourceNotes?:          null | string;
    versionAdded?:         Version;
    versionUnlocked?:      Version;
    catalog?:              boolean | CatalogEnum | null;
    buy:                   number;
    sell:                  number | null;
    translations:          ItemTranslations | null;
    variations?:           VariationElement[];
    styles?:               Style[];
    sources:               string[];
    themes?:               Theme[];
    recipe:                Recipe | null;
    closetImage?:          string;
    storageImage?:         null | string;
    variation?:            null;
    hhaBasePoints?:        number | null;
    seasonalAvailability?: SeasonalAvailability;
    mannequinPiece?:       boolean;
    sortOrder?:            number;
    villagerEquippable?:   boolean;
    filename?:             string;
    internalId?:           number;
    uniqueEntryId?:        string;
    variantTranslations?:  null;
    colors?:               Color[];
    image?:                string;
    bodyTitle?:            null | string;
    pattern?:              null | string;
    patternTitle?:         null | string;
    bodyCustomize?:        boolean;
    patternCustomize?:     boolean;
    kitCost?:              number | null;
    surface?:              boolean;
    interact?:             boolean | InteractEnum;
    tag?:                  null | string;
    outdoor?:              boolean;
    speakerType?:          SpeakerType | null;
    lightingType?:         LightingType | null;
    variantId?:            VariantID | null;
    patternTranslations?:  Translations | null;
    concepts?:             Concept[];
    set?:                  ItemSet | null;
    series?:               Series | null;
    customize?:            boolean;
    framedImage?:          null | string;
    albumImage?:           null | string;
    inventoryImage?:       null | string;
    stackSize?:            number;
    sizeCategory?:         SizeCategory;
    type?:                 Type;
    vfx?:                  boolean;
    doorDeco?:             boolean;
    vfxType?:              VfxType | null;
    windowType?:           WindowType | null;
    windowColor?:          WindowColor | null;
    paneType?:             PaneType | null;
    curtainType?:          CurtainType | null;
    curtainColor?:         null | string;
    ceilingType?:          CeilingType;
    uses?:                 number;
    primaryShape?:         PrimaryShape;
    secondaryShape?:       SecondaryShape;
    description?:          string[];
    museum?:               Museum;
    highResTexture?:       null;
    genuine?:              boolean;
    category?:             Category;
    realArtworkTitle?:     string;
    artist?:               string;
}

export enum CatalogEnum {
    ForSale = "For sale",
    NotForSale = "Not for sale",
}

export enum Category {
    Accessories = "Accessories",
    Art = "Art",
    Bags = "Bags",
    Bottoms = "Bottoms",
    ClothingOther = "Clothing Other",
    DressUp = "Dress-Up",
    Equipment = "Equipment",
    Fencing = "Fencing",
    Floors = "Floors",
    Fossils = "Fossils",
    Headwear = "Headwear",
    Housewares = "Housewares",
    Miscellaneous = "Miscellaneous",
    Music = "Music",
    Other = "Other",
    Photos = "Photos",
    Posters = "Posters",
    Rugs = "Rugs",
    Shoes = "Shoes",
    Socks = "Socks",
    Tools = "Tools",
    Tops = "Tops",
    Umbrellas = "Umbrellas",
    WallMounted = "Wall-mounted",
    Wallpaper = "Wallpaper",
}

export enum CeilingType {
    Cloth = "Cloth",
    Gold = "Gold",
    Plain = "Plain",
    Stone = "Stone",
    Tile = "Tile",
    Wood = "Wood",
}

export enum Color {
    Beige = "Beige",
    Black = "Black",
    Blue = "Blue",
    Brown = "Brown",
    Colorful = "Colorful",
    Gray = "Gray",
    Green = "Green",
    LightBlue = "Light blue",
    Orange = "Orange",
    Pink = "Pink",
    Purple = "Purple",
    Red = "Red",
    White = "White",
    Yellow = "Yellow",
}

export enum Concept {
    Bathroom = "bathroom",
    ChildSRoom = "child's room",
    Concert = "concert",
    Den = "den",
    Expensive = "expensive",
    Facility = "facility",
    Fancy = "fancy",
    Fitness = "fitness",
    FolkArt = "folk art",
    FreezingCold = "freezing cold",
    Garage = "garage",
    Garden = "garden",
    Horror = "horror",
    Kitchen = "kitchen",
    LivingRoom = "living room",
    Music = "music",
    None = "none",
    Ocean = "ocean",
    Office = "office",
    Outdoors = "outdoors",
    Party = "party",
    School = "school",
    Shop = "shop",
    Space = "space",
    ZenStyle = "zen-style",
}

export enum CurtainType {
    Curtains = "Curtains",
    RollerShades = "Roller Shades",
    SlattedBlinds = "Slatted Blinds",
}

export enum InteractEnum {
    Trash = "Trash",
    Wardrobe = "Wardrobe",
    Workbench = "Workbench",
}

export enum LightingType {
    Candle = "Candle",
    Emission = "Emission",
    Fluorescent = "Fluorescent",
    Monitor = "Monitor",
    Spotlight = "Spotlight",
}

export enum Museum {
    Room1 = "Room 1",
    Room2 = "Room 2",
    Room3 = "Room 3",
}

export enum PaneType {
    Glass = "Glass",
    Screen = "Screen",
}

export interface Translations {
    sourceSheet:        PatternTranslationsSourceSheet;
    variantId:          number;
    id:                 string;
    furnitureName:      string;
    english:            string;
    englishEurope:      string;
    german:             string;
    spanish:            string;
    spanishUs:          string;
    french:             string;
    frenchUs:           string;
    italian:            string;
    dutch:              string;
    chinese:            string;
    chineseTraditional: string;
    japanese:           string;
    korean:             string;
    russian:            string;
    plural:             boolean;
    internalIds:        number[];
}

export enum PatternTranslationsSourceSheet {
    FurniturePatterns = "Furniture Patterns",
    FurnitureVariants = "Furniture Variants",
}

export enum PrimaryShape {
    ALine = "A-line",
    ALong = "A-long",
    BLong = "B-long",
    Balloon = "Balloon",
    Box = "Box",
    Dress = "Dress",
    Kimono = "Kimono",
    Marinesuit = "Marinesuit",
    Overall = "Overall",
    Rib = "Rib",
    Robe = "Robe",
    Salopette = "Salopette",
}

export interface Recipe {
    sourceSheet:           RecipeSourceSheet;
    name:                  string;
    buy:                   number;
    sell:                  number;
    milesPrice:            number | null;
    sourceNotes:           null | string;
    versionAdded:          Version;
    versionUnlocked:       Version;
    recipesToUnlock:       number;
    category:              Category;
    craftedItemInternalId: number;
    cardColor:             CardColor | null;
    serialId:              number;
    internalId:            number;
    uniqueEntryId:         string;
    translations:          RecipeTranslations;
    materials:             { [key: string]: number };
    sources:               string[];
}

export enum CardColor {
    Beige = "beige",
    Blue = "blue",
    Brick = "brick",
    Brown = "brown",
    DarkGray = "dark gray",
    Gold = "gold",
    Green = "green",
    LightGray = "light gray",
    Orange = "orange",
    Pink = "pink",
    Red = "red",
    Silver = "silver",
    White = "white",
    Yellow = "yellow",
}

export enum RecipeSourceSheet {
    Recipes = "Recipes",
}

export interface RecipeTranslations {
    sourceSheet:        TranslationsSourceSheet;
    id:                 number | string;
    version:            Version;
    english:            string;
    englishEurope:      string;
    german:             string;
    spanish:            string;
    spanishUs:          string;
    french:             string;
    frenchUs:           string;
    italian:            string;
    dutch:              string;
    chinese:            string;
    chineseTraditional: string;
    japanese:           string;
    korean:             string;
    russian:            string;
    plural:             boolean;
    internalIds:        number[];
}

export enum TranslationsSourceSheet {
    Accessories = "Accessories",
    Art = "Art",
    Bags = "Bags",
    Bottoms = "Bottoms",
    BugsModels = "Bugs Models",
    Caps = "Caps",
    Craft = "Craft",
    Doorplates = "Doorplates",
    Dresses = "Dresses",
    Etc = "ETC",
    EventItems = "Event Items",
    Fence = "Fence",
    FishModels = "Fish Models",
    Floors = "Floors",
    Fossils = "Fossils",
    Furniture = "Furniture",
    KKAlbums = "K.K. Albums",
    MarineSuit = "Marine Suit",
    Masks = "Masks",
    Pictures = "Pictures",
    Plants = "Plants",
    Posters = "Posters",
    Rugs = "Rugs",
    Shells = "Shells",
    Shoes = "Shoes",
    Socks = "Socks",
    Tools = "Tools",
    Tops = "Tops",
    Umbrella = "Umbrella",
    Walls = "Walls",
}

export enum Version {
    The100 = "1.0.0",
    The110 = "1.1.0",
    The110A = "1.1.0a",
    The120 = "1.2.0",
    The120A = "1.2.0a",
    The120B = "1.2.0b",
    The121C = "1.2.1c",
    The130 = "1.3.0",
}

export enum SeasonalAvailability {
    AllYear = "All Year",
    Fall = "Fall",
    Spring = "Spring",
    Summer = "Summer",
    Winter = "Winter",
}

export enum SecondaryShape {
    H = "H",
    L = "L",
    N = "N",
}

export enum Series {
    Antique = "antique",
    Bamboo = "bamboo",
    BunnyDay = "Bunny Day",
    Cardboard = "cardboard",
    CherryBlossoms = "cherry blossoms",
    Cute = "cute",
    Diner = "diner",
    Festive = "festive",
    Flowers = "flowers",
    Frozen = "frozen",
    Fruits = "fruits",
    Golden = "golden",
    Iron = "iron",
    Ironwood = "ironwood",
    Log = "log",
    Mermaid = "mermaid",
    Motherly = "motherly",
    Mush = "mush",
    Pirate = "pirate",
    Rattan = "rattan",
    Shell = "shell",
    Stars = "stars",
    Throwback = "throwback",
    TreeSBountyOrLeaves = "tree's bounty or leaves ",
    Wedding = "wedding",
    Wooden = "wooden",
    WoodenBlock = "wooden block",
    Zen = "zen",
}

export enum ItemSet {
    ColorfulTools = "Colorful Tools",
    OutdoorTools = "Outdoor Tools",
    Panda = "panda",
    SportsRing = "sports ring",
    Stone = "stone",
}

export enum Size {
    Size1X05 = "1x0.5 ",
    Size1X1 = "1x1 ",
    Size1X15 = "1x1.5 ",
    Size1X2 = "1x2 ",
    Size2X1 = "2x1 ",
    Size2X15 = "2x1.5 ",
    Size2X2 = "2x2 ",
    Size3X2 = "3x2",
    Size3X3 = "3x3 ",
    Size4X3 = "4x3 ",
    The05X1 = "0.5x1 ",
    The15X15 = "1.5x1.5",
    The1X05 = "1x0.5",
    The1X1 = "1x1",
    The1X15 = "1x1.5",
    The1X2 = "1x2",
    The2X05 = "2x0.5",
    The2X1 = "2x1",
    The2X15 = "2x1.5",
    The2X2 = "2x2",
    The3X1 = "3x1",
    The3X2 = "3x2 ",
    The3X3 = "3x3",
    The4X3 = "4x3",
    The4X4 = "4x4 ",
    The5X5 = "5x5 ",
}

export enum SizeCategory {
    Large = "Large",
    Medium = "Medium",
    Small = "Small",
}

export enum SpeakerType {
    Cheap = "Cheap",
    HiFi = "Hi-fi",
    Phono = "Phono",
    Retro = "Retro",
}

export enum Style {
    Active = "Active",
    Cool = "Cool",
    Cute = "Cute",
    Elegant = "Elegant",
    Gorgeous = "Gorgeous",
    Simple = "Simple",
}

export enum Theme {
    Comfy = "comfy",
    Everyday = "everyday",
    FairyTale = "fairy tale",
    Formal = "formal",
    Goth = "goth",
    Outdoorsy = "outdoorsy",
    Party = "party",
    Sporty = "sporty",
    Theatrical = "theatrical",
    Vacation = "vacation",
    Work = "work",
}

export interface ItemTranslations {
    sourceSheet:        TranslationsSourceSheet;
    id:                 number | string;
    version:            Version;
    english:            string;
    englishEurope:      string;
    german:             string;
    spanish:            string;
    spanishUs:          string;
    french:             string;
    frenchUs:           string;
    italian:            string;
    dutch:              string;
    chinese:            string;
    chineseTraditional: string;
    japanese:           string;
    korean:             string;
    russian:            string;
    plural:             boolean;
    internalIds:        Array<number | string>;
}

export enum Type {
    AcceEyeMouth = "AcceEyeMouth",
    AccessoryEye = "AccessoryEye",
    AccessoryEyeMouth = "AccessoryEyeMouth",
    AccessoryEyeMouthInvisibleNose = "AccessoryEyeMouthInvisibleNose",
    AccessoryMouth = "AccessoryMouth",
    AccessoryMouthEarJaw = "AccessoryMouthEarJaw",
    AccessoryMouthInvisibleNose = "AccessoryMouthInvisibleNose",
    AccessoryOneEye = "AccessoryOneEye",
    HeadCap = "HeadCap",
    HeadFace = "HeadFace",
    HeadFullFace = "HeadFullFace",
    HeadHairOrnamentBack = "HeadHairOrnament_Back",
    HeadHairOrnamentFront = "HeadHairOrnament_Front",
    HeadHairOrnamentLeft = "HeadHairOrnament_Left",
    HeadHairOrnamentPeak = "HeadHairOrnament_Peak",
    HeadHairOrnamentTop = "HeadHairOrnament_Top",
    HeadgearHasBang = "Headgear_HasBang",
    HeadgearHasEar = "Headgear_HasEar",
    HeadgearNoEar = "Headgear_NoEar",
    HeadgearNoEarNoJaw = "Headgear_NoEarNoJaw",
}

export enum VariantID {
    The0_0 = "0_0",
    The0_1 = "0_1",
    The0_2 = "0_2",
    The0_3 = "0_3",
    The0_4 = "0_4",
    The0_5 = "0_5",
    The0_6 = "0_6",
    The0_7 = "0_7",
    The1_0 = "1_0",
    The1_1 = "1_1",
    The1_2 = "1_2",
    The1_3 = "1_3",
    The1_4 = "1_4",
    The1_5 = "1_5",
    The1_6 = "1_6",
    The1_7 = "1_7",
    The2_0 = "2_0",
    The2_1 = "2_1",
    The2_2 = "2_2",
    The2_3 = "2_3",
    The2_4 = "2_4",
    The2_5 = "2_5",
    The2_6 = "2_6",
    The2_7 = "2_7",
    The3_0 = "3_0",
    The3_1 = "3_1",
    The3_2 = "3_2",
    The3_3 = "3_3",
    The3_4 = "3_4",
    The3_5 = "3_5",
    The3_6 = "3_6",
    The3_7 = "3_7",
    The4_0 = "4_0",
    The4_1 = "4_1",
    The4_2 = "4_2",
    The4_3 = "4_3",
    The4_4 = "4_4",
    The4_5 = "4_5",
    The4_6 = "4_6",
    The4_7 = "4_7",
    The5_0 = "5_0",
    The5_1 = "5_1",
    The5_2 = "5_2",
    The5_3 = "5_3",
    The5_4 = "5_4",
    The5_5 = "5_5",
    The5_6 = "5_6",
    The5_7 = "5_7",
    The6_0 = "6_0",
    The6_1 = "6_1",
    The6_2 = "6_2",
    The6_3 = "6_3",
    The6_4 = "6_4",
    The6_5 = "6_5",
    The6_6 = "6_6",
    The6_7 = "6_7",
    The7_0 = "7_0",
    The7_1 = "7_1",
    The7_2 = "7_2",
    The7_3 = "7_3",
    The7_4 = "7_4",
    The7_5 = "7_5",
    The7_6 = "7_6",
    The7_7 = "7_7",
}

export interface VariationElement {
    closetImage?:          string;
    storageImage?:         string;
    variation:             number | null | string;
    hhaBasePoints:         number;
    seasonalAvailability?: SeasonalAvailability;
    mannequinPiece?:       boolean | null;
    sortOrder?:            number;
    type?:                 Type;
    villagerEquippable?:   boolean;
    filename:              string;
    internalId:            number;
    uniqueEntryId:         string;
    variantTranslations:   Translations | null;
    colors:                Color[];
    image?:                string;
    pattern?:              null | string;
    patternTitle?:         PatternTitle | null;
    variantId?:            VariantID;
    patternTranslations?:  Translations | null;
    surface?:              boolean;
    concepts?:             Concept[];
    set?:                  VariationSet | null;
    series?:               Series | null;
    primaryShape?:         PrimaryShape;
    secondaryShape?:       SecondaryShape | null;
    doorDeco?:             boolean;
    uses?:                 number;
    stackSize?:            number;
}

export enum PatternTitle {
    AdvertisementPanel = "Advertisement panel",
    BassDrumHead = "Bass drum head",
    BedMat = "Bed mat",
    Bedding = "Bedding",
    Board = "Board",
    ClockFace = "Clock face",
    Cloth = "Cloth",
    Curtain = "Curtain",
    Cushion = "Cushion",
    Cushions = "Cushions",
    Design = "Design",
    DrawingPaper = "Drawing paper",
    DryingShirt = "Drying shirt",
    Fabric = "Fabric",
    FavoriteCard = "Favorite card",
    FavoriteUmbrella = "Favorite umbrella",
    Flag = "Flag",
    Flier = "Flier",
    Lamp = "Lamp",
    Lampshade = "Lampshade",
    Magazine = "Magazine",
    ManuscriptPaper = "Manuscript paper",
    Mat = "Mat",
    PanelDesign = "Panel design",
    Paper = "Paper",
    Pillow = "Pillow",
    Placemat = "Placemat",
    Placemats = "Placemats",
    Printout = "Printout",
    Ribbon = "Ribbon",
    Screen = "Screen",
    Seat = "Seat",
    Shawl = "Shawl",
    Shirt = "Shirt",
    Signature = "Signature",
    Sticker = "Sticker",
    StickerArea = "Sticker area",
    Table = "Table",
    Tablecloth = "Tablecloth",
    Towel = "Towel",
    Tray = "Tray",
}

export enum VariationSet {
    Apple = "apple",
    Bear = "bear",
    Birthday = "birthday",
    Cherry = "cherry",
    Den = "den",
    ImperialDining = "imperial dining",
    LectureHall = "lecture hall",
    Natural = "natural",
    Office = "office",
    Orange = "orange",
    Peach = "peach",
    Pear = "pear",
    Pet = "pet",
    School = "school",
    Standee = "standee",
    Study = "study",
}

export enum VfxType {
    LightOff = "LightOff",
    Random = "Random",
    Synchro = "Synchro",
}

export enum WindowColor {
    BlackMetal = "Black Metal",
    DarkWood = "Dark Wood",
    GreyMetal = "Grey Metal",
    GreyWood = "Grey Wood",
    LightWood = "Light Wood",
    NaturalWood = "Natural Wood",
    WhiteMetal = "White Metal",
    WhiteWood = "White Wood",
    Wood = "Wood",
}

export enum WindowType {
    Arch = "Arch",
    Circle = "Circle",
    FourPane = "Four Pane",
    SinglePane = "Single Pane",
    SlidingPane = "Sliding Pane",
}
