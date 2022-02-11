export interface NotificationInterface{
    message: string;
    isOpen: boolean;
    type: 'success' | 'error' | 'warning';
}
