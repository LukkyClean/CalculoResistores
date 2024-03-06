function calcular(){
    let value01 = document.getElementById('faixa1').value;
    let value02 = document.getElementById('faixa2').value;
    let conc = parseFloat(value01+value02);
    let valorResistencia = conc*parseFloat(document.getElementById('multi').value);
    let toleranciaMax = valorResistencia+(valorResistencia*parseFloat(document.getElementById("tolerancia").value));
    let toleranciaMin = valorResistencia-(valorResistencia*parseFloat(document.getElementById("tolerancia").value));
    toleranciaMax = toleranciaMax.toFixed(1);
    toleranciaMin = toleranciaMin.toFixed(1);
    if(valorResistencia >= 10**3 && valorResistencia < 10**6){
        valorResistencia = (valorResistencia/10**3)+"k";
        toleranciaMax = (toleranciaMax/10**3)+"k";
        toleranciaMin = (toleranciaMin/10**3)+"k";
    }else if(valorResistencia >= 10**6 && valorResistencia < 10**9){
        valorResistencia = (valorResistencia/10**6)+"M";
        toleranciaMax = (toleranciaMax/10**6)+"M";
        toleranciaMin = (toleranciaMin/10**6)+"M";
    }else if(valorResistencia >= 10**9 && valorResistencia < 10**12){
        valorResistencia = (valorResistencia/10**9)+"G";
        toleranciaMax = (toleranciaMax/10**9)+"G";
        toleranciaMin = (toleranciaMin/10**9)+"G";
    }else if(valorResistencia >= 10**12 && valorResistencia < 10**15){
        valorResistencia = (valorResistencia/10**12)+"T";
        toleranciaMax = (toleranciaMax/10**12)+"T";
        toleranciaMin = (toleranciaMin/10**12)+"T";
    }
    document.getElementById('valorResistencia').value = (valorResistencia+"Ω");
    document.getElementById('toler').value = (toleranciaMin+"Ω - "+toleranciaMax+"Ω");
 } 