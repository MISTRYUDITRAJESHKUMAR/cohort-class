async function registeruser() {
    //collect data(2s)
    await collectdata()

    alidationUserEmail()

    await insertDb()

    sendmail()

    sendPushNotification()
}
registeruser().then(() => console.log('done')).catch((err) => console.log('err hai bhai')
) 