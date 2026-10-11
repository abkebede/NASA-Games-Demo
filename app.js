const NASA_DATA = [{"Time": "2017-09-06T00:00:00Z", "B_nT": 4.1, "Proton_Density_cm-3": 4.1, "Flow_Speed_km-s": 466, "Flow_Pressure_nPa": 1.54}, {"Time": "2017-09-06T01:00:00Z", "B_nT": 4.4, "Proton_Density_cm-3": 3.6, "Flow_Speed_km-s": 475, "Flow_Pressure_nPa": 1.41}, {"Time": "2017-09-06T02:00:00Z", "B_nT": 4.8, "Proton_Density_cm-3": 2.7, "Flow_Speed_km-s": 467, "Flow_Pressure_nPa": 1.07}, {"Time": "2017-09-06T03:00:00Z", "B_nT": 4.4, "Proton_Density_cm-3": 3.8, "Flow_Speed_km-s": 479, "Flow_Pressure_nPa": 1.56}, {"Time": "2017-09-06T04:00:00Z", "B_nT": 3.2, "Proton_Density_cm-3": 6.3, "Flow_Speed_km-s": 484, "Flow_Pressure_nPa": 2.52}, {"Time": "2017-09-06T05:00:00Z", "B_nT": 2.6, "Proton_Density_cm-3": 4.9, "Flow_Speed_km-s": 473, "Flow_Pressure_nPa": 1.9}, {"Time": "2017-09-06T06:00:00Z", "B_nT": 3.3, "Proton_Density_cm-3": 4.0, "Flow_Speed_km-s": 472, "Flow_Pressure_nPa": 1.58}, {"Time": "2017-09-06T07:00:00Z", "B_nT": 2.9, "Proton_Density_cm-3": 4.3, "Flow_Speed_km-s": 468, "Flow_Pressure_nPa": 1.67}, {"Time": "2017-09-06T08:00:00Z", "B_nT": 2.8, "Proton_Density_cm-3": 4.6, "Flow_Speed_km-s": 463, "Flow_Pressure_nPa": 1.69}, {"Time": "2017-09-06T09:00:00Z", "B_nT": 2.7, "Proton_Density_cm-3": 4.7, "Flow_Speed_km-s": 460, "Flow_Pressure_nPa": 1.71}, {"Time": "2017-09-06T10:00:00Z", "B_nT": 2.3, "Proton_Density_cm-3": 4.5, "Flow_Speed_km-s": 456, "Flow_Pressure_nPa": 1.59}, {"Time": "2017-09-06T11:00:00Z", "B_nT": 1.9, "Proton_Density_cm-3": 4.0, "Flow_Speed_km-s": 453, "Flow_Pressure_nPa": 1.41}, {"Time": "2017-09-06T12:00:00Z", "B_nT": 2.9, "Proton_Density_cm-3": 4.0, "Flow_Speed_km-s": 449, "Flow_Pressure_nPa": 1.38}, {"Time": "2017-09-06T13:00:00Z", "B_nT": 2.3, "Proton_Density_cm-3": 3.1, "Flow_Speed_km-s": 446, "Flow_Pressure_nPa": 1.06}, {"Time": "2017-09-06T14:00:00Z", "B_nT": 2.7, "Proton_Density_cm-3": 3.2, "Flow_Speed_km-s": 436, "Flow_Pressure_nPa": 1.04}, {"Time": "2017-09-06T15:00:00Z", "B_nT": 3.0, "Proton_Density_cm-3": 3.1, "Flow_Speed_km-s": 430, "Flow_Pressure_nPa": 0.99}, {"Time": "2017-09-06T16:00:00Z", "B_nT": 2.9, "Proton_Density_cm-3": 4.0, "Flow_Speed_km-s": 432, "Flow_Pressure_nPa": 1.29}, {"Time": "2017-09-06T17:00:00Z", "B_nT": 2.1, "Proton_Density_cm-3": 3.2, "Flow_Speed_km-s": 416, "Flow_Pressure_nPa": 0.95}, {"Time": "2017-09-06T18:00:00Z", "B_nT": 2.4, "Proton_Density_cm-3": 2.3, "Flow_Speed_km-s": 413, "Flow_Pressure_nPa": 0.68}, {"Time": "2017-09-06T19:00:00Z", "B_nT": 2.8, "Proton_Density_cm-3": 2.6, "Flow_Speed_km-s": 402, "Flow_Pressure_nPa": 0.73}, {"Time": "2017-09-06T20:00:00Z", "B_nT": 2.4, "Proton_Density_cm-3": 2.3, "Flow_Speed_km-s": 400, "Flow_Pressure_nPa": 0.64}, {"Time": "2017-09-06T21:00:00Z", "B_nT": 2.7, "Proton_Density_cm-3": 2.2, "Flow_Speed_km-s": 417, "Flow_Pressure_nPa": 0.66}, {"Time": "2017-09-06T22:00:00Z", "B_nT": 3.2, "Proton_Density_cm-3": 2.7, "Flow_Speed_km-s": 411, "Flow_Pressure_nPa": 0.79}, {"Time": "2017-09-06T23:00:00Z", "B_nT": 4.5, "Proton_Density_cm-3": 3.7, "Flow_Speed_km-s": 424, "Flow_Pressure_nPa": 1.16}, {"Time": "2017-09-07T00:00:00Z", "B_nT": 10.5, "Proton_Density_cm-3": 8.7, "Flow_Speed_km-s": 555, "Flow_Pressure_nPa": 4.94}, {"Time": "2017-09-07T01:00:00Z", "B_nT": 14.4, "Proton_Density_cm-3": 12.9, "Flow_Speed_km-s": 578, "Flow_Pressure_nPa": 8.2}, {"Time": "2017-09-07T02:00:00Z", "B_nT": 8.1, "Proton_Density_cm-3": 13.9, "Flow_Speed_km-s": 560, "Flow_Pressure_nPa": 8.68}, {"Time": "2017-09-07T03:00:00Z", "B_nT": 7.1, "Proton_Density_cm-3": 12.2, "Flow_Speed_km-s": 581, "Flow_Pressure_nPa": 8.47}, {"Time": "2017-09-07T04:00:00Z", "B_nT": 8.0, "Proton_Density_cm-3": 11.6, "Flow_Speed_km-s": 564, "Flow_Pressure_nPa": 6.13}, {"Time": "2017-09-07T05:00:00Z", "B_nT": 9.5, "Proton_Density_cm-3": 11.0, "Flow_Speed_km-s": 547, "Flow_Pressure_nPa": 6.02}, {"Time": "2017-09-07T06:00:00Z", "B_nT": 10.0, "Proton_Density_cm-3": 10.6, "Flow_Speed_km-s": 536, "Flow_Pressure_nPa": 5.76}, {"Time": "2017-09-07T07:00:00Z", "B_nT": 9.4, "Proton_Density_cm-3": 8.9, "Flow_Speed_km-s": 517, "Flow_Pressure_nPa": 4.34}, {"Time": "2017-09-07T08:00:00Z", "B_nT": 10.7, "Proton_Density_cm-3": 7.3, "Flow_Speed_km-s": 501, "Flow_Pressure_nPa": 3.33}];

const state = {
  analyzed:false,
  survivability:false,
  summary:null,
  hazard:null
};

function drawLine(canvasId, values, label, unit){
  const c=document.getElementById(canvasId), ctx=c.getContext('2d');
  const W=c.width,H=c.height,p=48;
  ctx.clearRect(0,0,W,H);
  ctx.fillStyle='#fff';ctx.fillRect(0,0,W,H);
  const min=Math.min(...values), max=Math.max(...values);
  ctx.strokeStyle='#111';ctx.lineWidth=1;
  ctx.beginPath();ctx.moveTo(p,p);ctx.lineTo(p,H-p);ctx.lineTo(W-p,H-p);ctx.stroke();
  ctx.font='14px Arial';ctx.fillStyle='#111';ctx.fillText(label, p, 22);
  ctx.fillText(unit, 8, p-12);
  ctx.fillText(min.toFixed(2), 8, H-p+4);ctx.fillText(max.toFixed(2), 8, p+4);
  ctx.strokeStyle='#174a72';ctx.lineWidth=2;ctx.beginPath();
  values.forEach((v,i)=>{
    const x=p+(W-2*p)*(i/(values.length-1||1));
    const y=H-p-(H-2*p)*((v-min)/(max-min||1));
    if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
  });
  ctx.stroke();
}

document.getElementById('analyzeBtn').addEventListener('click',()=>{
  const pressures=NASA_DATA.map(r=>Number(r.Flow_Pressure_nPa));
  const speeds=NASA_DATA.map(r=>Number(r['Flow_Speed_km-s']));
  const B=NASA_DATA.map(r=>Number(r.B_nT));
  const mean=a=>a.reduce((x,y)=>x+y,0)/a.length;
  state.summary={
    records:NASA_DATA.length,
    maxPressure:Math.max(...pressures),
    meanPressure:mean(pressures),
    maxSpeed:Math.max(...speeds),
    maxB:Math.max(...B)
  };
  state.analyzed=true;
  document.getElementById('records').textContent=state.summary.records;
  document.getElementById('pressure').textContent=state.summary.maxPressure.toFixed(2)+' nPa';
  document.getElementById('speed').textContent=state.summary.maxSpeed.toFixed(0)+' km/s';
  document.getElementById('bmag').textContent=state.summary.maxB.toFixed(1)+' nT';
  drawLine('pressureChart',pressures,'NASA OMNI2 flow pressure','nPa');
  document.getElementById('dataInterpretation').textContent=
    'The plotted pressure is calculated or archived from measured solar-wind quantities. The interval reaches a peak flow pressure of '+state.summary.maxPressure.toFixed(2)+' nPa.';
  document.getElementById('surviveBtn').disabled=false;
  document.getElementById('missionStatus').textContent='MISSION: DATA ANALYZED';
});

document.getElementById('surviveBtn').addEventListener('click',()=>{
  if(!state.analyzed)return;
  const s=state.summary;
  let eva='GO', hazard=0.25;
  if(s.maxPressure>=6 || s.maxSpeed>=550){eva='NO-GO';hazard=1.0;}
  else if(s.maxPressure>=3 || s.maxSpeed>=475){eva='CAUTION';hazard=.6;}
  const incidentRate=.2+.9*hazard;
  const shielding=.55;
  const shieldedRate=incidentRate*shielding;
  const hours=Array.from({length:13},(_,i)=>i);
  const dose=hours.map(h=>shieldedRate*h);
  const dose12=dose[dose.length-1];
  const health=Math.max(0,100-0.8*dose12);
  const recommendation=eva==='NO-GO'?'Enter Storm Shelter':eva==='CAUTION'?'Delay EVA':'Continue EVA';
  state.hazard={eva,hazard,dose12,health,recommendation};
  state.survivability=true;
  document.getElementById('eva').textContent=eva;
  document.getElementById('dose').textContent=dose12.toFixed(2);
  document.getElementById('health').textContent=health.toFixed(1)+'%';
  document.getElementById('recommendation').textContent=recommendation;
  drawLine('doseChart',dose,'Teaching cumulative radiation index','index');
  document.getElementById('survivalInterpretation').textContent=
    'The survivability calculation receives the analyzed space-weather state, applies the educational hazard rule and shielding factor, and propagates the result into cumulative exposure and system health.';
  document.querySelectorAll('.decision').forEach(b=>b.classList.toggle('recommended',b.dataset.choice===recommendation));
  document.getElementById('missionStatus').textContent='MISSION: DECISION REQUIRED';
});

document.querySelectorAll('.decision').forEach(btn=>btn.addEventListener('click',()=>{
  if(!state.survivability){
    document.getElementById('decisionResult').textContent='Complete the survivability calculation first.';
    return;
  }
  const choice=btn.dataset.choice;
  const rec=state.hazard.recommendation;
  const correct=choice===rec;
  let consequence='';
  if(choice==='Continue EVA') consequence='Crew and rover operations continue under the calculated environment.';
  if(choice==='Delay EVA') consequence='Surface activity is postponed while the mission team monitors the environment.';
  if(choice==='Enter Storm Shelter') consequence='Nonessential operations stop and the crew moves to the protected shelter configuration.';
  document.getElementById('decisionResult').textContent=
    (correct?'Decision is consistent with the current teaching-model recommendation. ':'Decision differs from the current teaching-model recommendation. ')+consequence;
  document.getElementById('missionStatus').textContent='MISSION: '+choice.toUpperCase();
}));
