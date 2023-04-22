class UserSet {
    skills: string[];

    addSkill(skill: string): void;
    addSkill(skills: string[]): void;
    addSkill(skillOdSkills: string | string[]) {
        if (typeof skillOdSkills == 'string') {
            this.skills.push(skillOdSkills)
        } else {
            this.skills.concat(skillOdSkills)
        }
    }
}

