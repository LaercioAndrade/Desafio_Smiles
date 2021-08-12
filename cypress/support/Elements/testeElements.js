class testeElements{

partindoDe = () => {return '#inputOrigin'}   
destino = () => {return '#inputDestination'}

clicarCalendario = () => {return '#_smilesflightsearchportlet_WAR_smilesbookingportlet_departure_date'}
selecionardataIda = () => {return '.ui-datepicker-group-first > .ui-datepicker-calendar > tbody >'}
selecionardataVolta = () => {return '.ui-datepicker-group-last > .ui-datepicker-calendar > tbody >'}
dataVoltaProximoMes = () => {return '.ui-datepicker-next'}
btnConfirmar = () => {return '.ui-datepicker-current'}
btnConfirmarVoo = ()=> {return '#submitFlightSearch'}

selecionarMilhasIda = () => {return '#firstFlights > .segmentsFlightsTemplate > .smiles__flight-search > #flightsArticle0 > :nth-child(4) > .column-miles > .miles > [style="position:relative"] > .checkbox > .flightlb'}
selecionarMilhasVolta = () => {return '#secondFlights > .segmentsFlightsTemplate > .smiles__flight-search > #flightsArticle0 > :nth-child(4) > .column-miles > .miles > [style="position:relative"] > .checkbox > .flightlb'}
valorBilheteIda = () => {return '#firstFlights > .segmentsFlightsTemplate > .smiles__flight-search > #flightsArticle0 > :nth-child(4) > .column-miles > .miles > [style="position:relative"] > .checkbox > .flightlb'}
valorBilheteVolta = () => {return '#secondFlights > .segmentsFlightsTemplate > .smiles__flight-search > #flightsArticle0 > :nth-child(4) > .column-miles > .miles > [style="position:relative"] > .checkbox > .flightlb'}
valorBilheteTotal = () => {return '.sub > tbody > :nth-child(1) > :nth-child(2)'}
selecionarTaxa = () => {return '#totalMiles'}
taxaDeEmbarque = () => {return '.summary-total-miles-fare-div'}
valorTotalDeMilhasDaReserva = () => {return '#summarytotalmilesId'}
checkBoxAceitoTermos = () => {return '.terms > label'}
btnConfirmarTeladaReserva = () => {return '.button > .btn'}
textoTelaDeAcesso = () => {return '.main-content > h3'}

}
export default testeElements;