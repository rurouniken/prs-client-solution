import { isoStringToDate } from "@angular/common/src/i18n/format_date";

export class Request 
{
    id: number;
    userId: number;
    description: string;
    justification: string;
    rejectionReason: string;
    deliveryMode: string;
    submittedDate: string;
    status: string;
    total: number;

    constructor()
    {
        this.id = 0;
        this.userId = 0;
        this.description = '';
        this.justification = '';
        this.rejectionReason = '';
        this.deliveryMode = '';
        this.submittedDate = (new Date()).toISOString();
        this.status = "NEW";
        this.total = 0;
    }
}
