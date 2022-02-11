import { NotificationInterface } from "./NotificationInterface";

class Notification {
    message: string;
    isOpen: boolean;
    type: 'success' | 'error' | 'warning';

    constructor(fields : NotificationInterface){
        this.message = fields.message;
        this.isOpen = fields.isOpen;
        this.type = fields.type;
    }
}

export default Notification;