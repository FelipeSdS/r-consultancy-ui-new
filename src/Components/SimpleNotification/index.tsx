import React from 'react';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Notification from '../../models/Notification/Notification';


interface NotificationProps{
    notification: Notification;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const SimpleNotification = ( props : NotificationProps): JSX.Element =>{

    return(
        <Snackbar open={props.notification.isOpen} style={{display: 'block', margin: '0 auto'}}>
            <Alert severity={props.notification.type} sx={{ width: '100%'}}>
                {props.notification.message}
            </Alert>
        </Snackbar>
    );
}

export default SimpleNotification;