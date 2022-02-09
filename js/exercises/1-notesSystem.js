//Solução
function getNote(note){
    let highNote = note >=90 && note<=100
    let greatNote = note < 90 && note >= 80
    let mediumNote = note < 80 && note >= 70
    let badNote = note < 70 && note >= 60
    let worstNote = note <60 && note >=0
    let finalNote
    
    if(highNote) {
        finalNote = 'A'
    } else if(greatNote) {
        finalNote = 'B'
    }  else if(mediumNote) {
        finalNote = 'C'
    }else if(badNote) {
        finalNote = 'D'
    }else if(worstNote) {
        finalNote = 'F'
    }else{
        finalNote = 'Nota inválida'
    }
    
    return finalNote
    
    }
    console.log(getNote(90))
    console.log(getNote(80))
    console.log(getNote(70))
    console.log(getNote(60))
    console.log(getNote(50))
    console.log(getNote('A'))
    