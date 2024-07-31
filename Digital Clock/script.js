const mostrarReloj = () => {
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours())
    let min = formatoHora(fecha.getMinutes())
    let seg = formatoHora(fecha.getSeconds())
    
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`
}
const formatoHora = (hora => {
    if(hora < 10) 
        hora = '0' + hora
    return hora
})

setInterval(mostrarReloj,1000)

const mostrarFecha = () => {

    let fecha = new Date();
    const meses = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    
    const dias = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    let diadesemana = dias[fecha.getDay()]
    let mesdelanio = meses[fecha.getMonth()]
    let dia = formatoFecha(fecha.getDate())
    let mes = formatoFecha(fecha.getMonth() + 1)
    let anio = formatoFecha(fecha.getFullYear())
    document.getElementById('fecha').innerHTML = `${mes}/${dia}/${anio}`
    document.getElementById('day').innerHTML = `${diadesemana},${mesdelanio}`

}
const formatoFecha = (fecha => {
    if(fecha < 10) 
        fecha = '0' + fecha
    return fecha
})

setInterval(mostrarFecha,1000)




