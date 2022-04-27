const hourHander = document.querySelector('.hander.hours')
const minutesHander = document.querySelector('.hander.minutes')
const secundsHander = document.querySelector('.hander.secunds')


const setRotation = (element, rotationPercentage) => {
    element.style.setProperty('--rotation', rotationPercentage * 360)
}

const setClock = () => {
    const currentDate = new Date()


    const secundsPercentage = currentDate.getSeconds() / 60
    const minutesPercentage = (secundsPercentage + currentDate.getMinutes()) / 60
    const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 60
  

    setRotation(secundsHander, secundsPercentage)
    setRotation(minutesHander, minutesPercentage)
    setRotation(hourHander, hoursPercentage)
}
setClock()
setInterval(setClock, 1000)