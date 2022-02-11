import { createContext, ReactNode, useContext, useState } from "react";
import Notification from '../models/Notification/Notification';

interface NotificationProviderProps{
    children: ReactNode;
}

interface NotificationContextData{
    showMessage: (notificationInput : NotificationInput) => void;
    notification: Notification;
}

type NotificationInput = Omit<Notification, 'isOpen'>

const NotificationContext = createContext<NotificationContextData>(
    {} as NotificationContextData
);

export function NotificationProvider(props : NotificationProviderProps){

    const [ notification, setNotification ] = useState<Notification>({ message: '', type: 'warning', isOpen: false});

    async function showMessage(notificationInput : NotificationInput){
        setNotification({ 
              message: notificationInput.message, 
              type: notificationInput.type, 
              isOpen: true
        });
        await controlTimeOut(notificationInput);
    }

    function controlTimeOut(notificationInput : NotificationInput){
        return new Promise(resolve =>{
            let count = 0;
            const init = setInterval(() =>{
                count++;
                if(count === 4){
                    count = 0;
                    setNotification({...notificationInput, ['isOpen'] : false});
                    clearInterval(init);
                }
            }, 1000)
        });
    }

    return(
        <NotificationContext.Provider value={{ showMessage, notification }}>
            {props.children}
        </NotificationContext.Provider>
    );
}

export function useNotification(){
    const context = useContext(NotificationContext);
    return context;
}