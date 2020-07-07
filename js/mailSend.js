const submitMail = (event)=>{
    try{
    event.preventDefault()
window.open('mailto:mario.esteban.ortega@gmail.com?subject=Queremos trabajar contigo&body=Hola Mario, nos gustaria contactarte por...');
    }
    catch(e){
        alert('Vuelva a intenarlo');
    }
}