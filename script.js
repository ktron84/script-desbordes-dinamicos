const json = {"1.1":{"1":{"NORMAL":["0","4317221"],"VIP":["1","4317221"],"NEGOCIOS":["0","4317259"],"NEGOCIOS_MIXTOS":["0","4317259"]},"2":{"NORMAL":["0","4317359"],"VIP":["0","4317359"],"NEGOCIOS":["0","4317259"],"NEGOCIOS_MIXTOS":["0","4317259"]}},"1.2":{"1":{"NORMAL":["0","4317248"],"VIP":["0","4317248"],"NEGOCIOS":["0","4317248"],"NEGOCIOS_MIXTOS":["0","4317248"]},"2":{"VIP":["0","4317248"],"NORMAL":["0","4317248"],"NEGOCIOS":["1","4317248"],"NEGOCIOS_MIXTOS":["0","4317248"]}}};



/*for (const [key1, value1] of Object.entries(json)) {
  for (const [key2, value2] of Object.entries(value1)) {
    console.log(`Nivel: ${key1}, Region: ${key2}, Value: ${JSON.stringify(value2)}`);
  }
}*/

for (const [key1, value1] of Object.entries(json)) {
  for (const [key2, value2] of Object.entries(value1)) {
    for(const [key3, value3] of Object.entries(value2) ){      
      console.log(`Nivel: ${key1}, Region: ${key2} , Segmento: ${key3}, Desborde: ${value3[1]}, Desborde: ${value3[0] == "1" ? 'IVR': 'Agente'} `);
    }    
  }
}
