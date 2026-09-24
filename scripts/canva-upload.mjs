import fs from 'node:fs';
process.stdin.setRawMode?.(true);
process.stdout.write('Ready for upload JSON\n');
let input='';process.stdin.on('data',async chunk=>{input+=chunk.toString();if(!/[\r\n]/.test(input))return;process.stdin.pause();try{const jobs=JSON.parse(input.trim());for(const job of jobs){const r=await fetch(job.url,{method:'POST',headers:{'Content-Type':'application/octet-stream'},body:fs.readFileSync(job.path)});console.log(JSON.stringify({name:job.name,status:r.status,body:await r.text()}));}}catch(e){console.error(e.message);process.exitCode=1}process.exit();});

