"use strict";
const skills = ['Dev', 'DevOps'];
for (const skill of skills) {
    console.log(skill);
}
const res = skills.filter((s) => s !== 'DevOps');
console.log(res);
