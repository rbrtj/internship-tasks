export interface User {
    name: string;
    surname: string;
    email: string;
    diskUsage: number;
    diskCapacity: number;
    accountNames: {
        pl: string;
        fr: string;
        de: string;
        en: string;
    };
    expirationDate: string;
    userHash: string;
}