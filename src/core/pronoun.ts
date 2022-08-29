export interface Pronoun {
    /**
     * He/She
     */
    they: string; // he, they
    /**
     * Him/Her
     */
    them: string; // him, her, them
    /**
     * His/Her
     */
    their: string; // her, his, their
    /**
     * His/Hers
     */
    theirs: string; // hers, theirs
    /**
     * Himself/Herself
     */
    themself: string; // themself, hirself
}

export const he: Pronoun = {
    they: 'he',
    them: 'him',
    their: 'his',
    theirs: 'his',
    themself: 'himself',
};

export const she: Pronoun = {
    they: 'she',
    them: 'her',
    their: 'her',
    theirs: 'hers',
    themself: 'herself',
};

export const they: Pronoun = {
    they: 'they',
    them: 'them',
    their: 'their',
    theirs: 'theirs',
    themself: 'themself',
};

export const ze: Pronoun = {
    they: 'ze',
    them: 'hir',
    their: 'hir',
    theirs: 'hirs',
    themself: 'hirself',
};

export const me: Pronoun = {
    they: 'me',
    them: 'I',
    their: 'my',
    theirs: 'mine',
    themself: 'myself',
};

export const it: Pronoun = {
    they: 'it',
    them: 'it',
    their: 'its',
    theirs: 'its',
    themself: 'itself',
};

export const you: Pronoun = {
    they: 'you',
    them: 'you',
    their: 'your',
    theirs: 'yours',
    themself: 'yourself',
};
