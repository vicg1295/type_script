const skills:string[] = ['Dev', 'DevOps']
for (const skill of skills){
    console.log(skill);
}
const res = skills.filter((s:string)=>s!=='DevOps')
console.log(res);
