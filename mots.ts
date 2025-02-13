export function nbMots(str:string): number {
  // renvoie le nombre de mots d'une chaine de caractère
  return str.trim().split(/\s+/).length;
}

export function nbPhrases(str:string): number {
  // renvoie le nombre de phrases d'une chaine de caractère
  return str.trim().split(/[.!?]/).length;
}

export function nbLettres(str: string): number {
  // renvoie le nombre de lettres d'une chaine de caractère
  return str.replace(/\s/g, '').length;
}

export function nbRepetionsMots(str:string): number {
  // renvoie le nombre de répétitions de mots d'une chaine de caractère
  const mots = str.trim().split(/\s+/);
  const motsUniques = new Set(mots);
  return mots.length - motsUniques.size;
}

export function nbRepetionsLettres(str:string): number {
  // renvoie le nombre de répétitions de lettres d'une chaine de caractère
  const lettres = str.replace(/\s/g, '');
  const lettresUniques = new Set(lettres);
  return lettres.length - lettresUniques.size;
}

export function nbRépetitionsSymbole(str: string): number {
  // renvoie le nombre de répétitions de symboles d'une chaine de caractère
  const symboles = str.match(/[^\w\s]/g) || [];
  const symbolesUniques = new Set(symboles);
  return symboles.length - symbolesUniques.size;
}
