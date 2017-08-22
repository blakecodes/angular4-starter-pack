import { Injectable } from '@angular/core';

export interface ICompany {
    id: number;
    name: string;
    slug: string;
    typeId: number;
    companyType: number;
}

export class ICatalog {
    constructor(
        name: string = undefined,
        revisionNo: string = undefined,
        company: string = undefined,
        companyId: number = undefined,
        id: number = undefined,
        model: IModel = undefined,
        modelId: number = undefined,
        manufacturerId: number = undefined,
    ) { }
}

export class IPart {
    constructor(
        name: string = undefined,
        revisionNo: string = undefined,
        catalogEntry: string = undefined,
        chapterNo: number = undefined,
        company: string = undefined,
        companyId: number = undefined,
        companyPartNo: number = undefined,
        description: string = undefined,
        figure: string = undefined,
        fullDescription: string = undefined,
        id: number = undefined,
        imageDisplay: string = undefined,
        levelNo: string = undefined,
        model: Object = undefined,
        modelId: number = undefined,
        pageNo: string = undefined,
        partNo: string = undefined,
        sectionNo: number = undefined,
        subjectNo: number = undefined,
        unitsPerAssembly: number = undefined,
        replacementInterval: string = undefined,
        aircraftModelId: number = undefined,
        aircraftManufacturerId: number = undefined,
        engineModelId: number = undefined,
        engineManufacturerId: number = undefined,
    ) { }
}

export interface ICompanyAndClaims {
    id: number;
    slug: string;
    name: string;
    typeId: string;
    claims: IClaim[];
}

export interface IClaimDetails {
    id: number;
    claimNo: string;
    claimDate: Date;
    description: string;
    status: string;
    vendor: ICompany;
    parts: IPart[];
}

export interface IClaimAdjust {
    id: number;
    claimNo: string;
    claimDate: Date;
    description: string;
    fullDescription: string;
    vendorId: number;
    companyName: string;
    parts: IPart[];
    covered: IPart[];
    uncovered: IPart[];
}

export interface IClaimLabor {
    id: number;
    name: string;
    description: string;
    hours: number;
    overtimeHours: number;
    adjustedRate: number;
    adjustedOvertimeRate: number;
    adjustedHours: number;
    adjustedOvertimeHours: number;
}

export interface IClaimCoverage {
    id: number;
    partNo: string;
    description: string;
    fullDescription: string;
    partCoverageAmount: number;
    partLifeLimited: number;
    claimCoverageAmount: number;
    claimLifeLimited: number;
    adjustedCoverageAmount: number;
    adjustedLifeLimited: number; 
    uncoveredReason: string;
    overhaulLimit: number;
}

export interface IAnalystExpense {
    id: number;
    analystName: string;
    expenseDate: string;
    type: string;
    location: string;
    airport: string;
    vendorName: string;
    expenseAmount: number;
    comment: string;
}

export interface IAnalystBilling {
    id: number;
    analystName: string;
    activityDate: string;
    hours: number;
    rate: number;
}



export interface IInvoiceParts {
    invoiceNo: number;
    type: string;
    mpn: string;
    descriptoin: string;
    remarks: string;
    quantity: number;
    inhouseSubcontract: string;
    listPrice: number;
    listPriceTotal: number;
    handlingFee: number;
    total: number;
}

export interface IAircraftModel {
    id: number;
    name: string;
    manufacturerId: string;
    revisionNo: string;
    manufacturer: number;
}

export interface IEngineModel {
    id: number;
    name: string;
    manufacturerId: string;
    revisionNo: string;
    manufacturer: number;
}

export interface IModel {
    id: number;
    name: string;
    manufacturerId: number;
    revisionNo: string;
    manufacturer: IManufacturer;
}

export interface IManufacturer {
    id: number;
    name: string;
    manufacturerTypeId: number;
    manufacturerType: number;
}

export interface ILaborAndFees {
    
}

@Injectable()

export class IAccount {

    constructor(
        public id: number = undefined,
        public firstName: string = undefined,
        public lastName: string = undefined,
        public email: string = undefined,
        public phone: string = undefined
    ) { }
}

export class IClaim {
    hasErrors: boolean = undefined;
    claimNo: string = undefined;
    claimDate: string = undefined;
    companyId: number = undefined;
    aircraftYear: number = undefined;
    aircraftModelId: number = undefined;
    aircraftSerialNo: string = undefined;
    aircraftTotalTime: number = undefined;
    aircraftTotalCycles: number = undefined;
    aircraftTailNumber: string = undefined;
    engineModelId: number = undefined;
    engineSerialNo: string = undefined;
    engineTotalTime: number = undefined;
    engineTotalCycles: number = undefined;
    engineArea: string = undefined;
    contactFirstName: string = undefined;
    contactLastName: string = undefined;
    contactPhoneNo: string = undefined;
    contactStreetAddress: string = undefined;
    contactCity: string = undefined;
    contactState: string = undefined;
    contactPostalCode: string = undefined;
    contactCountry: string = undefined;
    insuranceContactFirstName: string = undefined;
    insuranceContactLastName: string = undefined;
    insuranceContactEmailAddress: string = undefined;
    insuranceContactPhoneNo: string = undefined;
    insuranceCompany: number = undefined;
    workDescription: string = undefined;
    timeSinceNew: number = undefined;
    cyclesSinceNew: number = undefined;
    flightHours: number = undefined;
    company: ICompany = undefined;
    aircraftModel: IAircraftModel = undefined;
    engineModel: IEngineModel = undefined;
    insuranceCompanyId: number = undefined;
    currencyId: number = undefined;
    aircraftRevisionNo: number = undefined;
    engineRevisionNo: number = undefined;
    incidentId: number = undefined;
    incident: IIncident = undefined;
    incidentAreas: Array<any> = undefined;
    claimIncidentAreas: Array<any> = undefined;
}

export interface IIncident {
    id: number;
    name: string;
}

export interface IIncidentArea {
    id: number;
    name: string;
    imageFileName: string;
    imageCoordinate: string;
}
