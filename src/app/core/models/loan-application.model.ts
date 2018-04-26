export class Name {
  first: string;
  middle: string;
  last: string;
  suffix: string;
}

export class Address {
  streetAddress: string;
  postalCode: string;
  city: string;
  state: string;
}

export class BorrowerAddress extends Address {
  occupancyMode: number;
  numYears: number;
  numMonths: number;
}

export class ContactPreferences {
  email: string;
  homePhone: string;
  mobilePhone: string;
  workPhone: string;
  workPhoneExtension: string;
  contactEmail: boolean;
  contactHomePhone: boolean;
  contactMobilePhone: boolean;
  contactTextMessage: boolean;
  contactWorkPhone: boolean;
}

export class Employment {
  address: Address;
  employerName: string;
  employerPhone: string;
  jobTitle: string;
  partOwned: boolean;
  monthlyIncome: number;
  isPaidBase: boolean;
  isPaidHourly: boolean;
  isPaidOvertime: boolean;
  isPaidCommission: boolean;
  isPaidBonus: boolean;
  numYears: number;
  numMonths: number;
  employmentType: number;
  startDate: Date;
  endDate: Date;
}

export class OtherIncome {
  alimony: boolean;
  childSupport: boolean;
  dividend: boolean;
  interest: boolean;
  rental: boolean;
  pension: boolean;
  socialSecurity: boolean;
  annuity: boolean;
  other: boolean;
}

export class Declarations {
  hasJudgment: boolean;
  hasBankruptcy: boolean;
  hasForeclosure: boolean;
  hasLawsuit: boolean;
  hasOtherForeclosureJudgment: boolean;
  hasDelinquency: boolean;
  hasObligation: boolean;
  hasBorrowedDownpayment: boolean;
  hasCoMaker: boolean;
  isCitizen: boolean;
  isResidentAlien: boolean;
  isPrimaryResidence: boolean;
  hasPreviousOwnership: boolean;
  hasShortSale: boolean;
  everServed: boolean;
  recognizedTribe: boolean;
  electronicConsent: boolean;
}

export class GovernmentMonitoring {
  isOptOutRace: boolean;
  isOptOutEthnicity: boolean;
  isOptOutGender: boolean;
  isIndianAlaska: boolean;
  indianAlaska: string;
  isAsian: boolean;
  isAsianIndian: boolean;
  isChinese: boolean;
  isFilipino: boolean;
  isJapanese: boolean;
  isKorean: boolean;
  isVietnamese: boolean;
  isOtherAsian: boolean;
  otherAsian: string;
  isBlackAfrican: boolean;
  isHawaiianIslander: boolean;
  isNativeHawaiian: boolean;
  isGuamanianChamorro: boolean;
  isSamoan: boolean;
  isOtherPacificIslander: boolean;
  otherPacificIslander: string;
  isWhite: boolean;
  ethnicity: number;
  isMexican: boolean;
  isPuertoRican: boolean;
  isCuban: boolean;
  isOtherHispanicLatino: boolean;
  otherHispanicLatino: string;
  gender: number;
}

export class FicoScore {
  ficoScore: number;
  agency: string;
}

export class Borrower {
  name: Name;
  primaryAddress: BorrowerAddress;
  previousAddress: BorrowerAddress;
  isMailingAddressSame: boolean;
  mailingAddress: Address;
  contactPreferences: ContactPreferences;
  birthDate: Date;
  maritalStatus: number;
  yearsSchool: number;
  numDependents: number;
  agesOfDependents: number[];
  currentEmployment: Employment;
  previousEmployment: Employment;
  otherIncome: OtherIncome;
  employedMultiple: boolean;
  socialSecurityNumber: string;
  declarations: Declarations;
  governmentMonitoring: GovernmentMonitoring;
  ficoScores: FicoScore[];
  dti: number;
}

export class Asset {
  assetType: number;
  institutionName: string;
  balance: number;
  recordId: number;
  sequenceNumber: number;
}

export class Property {
  address: Address;
  propertyType: number;
  value: number;
  lienAmount: number;
  lender: string;
  monthlyRentalIncome: number;
  recordId: number;
  sequenceNumber: number;
}

export class LoanApplication {
  loanId: number;
  loanOfficerId: number;
  isCoBorrower: boolean;
  isCoBorrowerSameAddress: boolean;
  loanPurpose: number;
  borrower: Borrower;
  coBorrower: Borrower;
  assets: Asset[];
  properties: Property[];
  subjectProperty: Address;
  referredByMethod: number;
  referredByDescription: string;
  permissionToRunCredit: boolean;
}
