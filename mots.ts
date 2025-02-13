/**
 * This module contains functions to count things in strings.
 * @module
*/


/**
 * Counts the number of sentences in a given string.
 * @param {string} str - The string to count sentences in.
 * @returns {number} - The number of sentences in the string.
*/
export function nbMots(str:string): number {
  // renvoie le nombre de mots d'une chaine de caractère
  return str.trim().split(/\s+/).length;
}


 /**
 * Counts the number of phrases in a given string.
 * @param {string} str - The string to count phrases in.
 * @returns {number} - The number of phrases in the string.
*/
export function nbPhrases(str:string): number {
  // renvoie le nombre de phrases d'une chaine de caractère
  return str.trim().split(/[.!?]/).length;
}


/**
 * Counts the number of letters in a given string.
 * @param {string} str - The string to count letters in.
 * @returns {number} - The number of letters in the string.
 */
export function nbLettres(str: string): number {
  // renvoie le nombre de lettres d'une chaine de caractère
  return str.replace(/\s/g, '').length;
}


/**
 * Counts the number of unique words in a given string.
 * @param {string} str - The string to count unique words in.
 * @returns {number} - The number of unique words in the string.
 */
export function nbRepetionsMots(str:string): number {
  // renvoie le nombre de répétitions de mots d'une chaine de caractère
  const mots = str.trim().split(/\s+/);
  const motsUniques = new Set(mots);
  return mots.length - motsUniques.size;
}


/**
 * Counts the number of unique letters in a given string.
 * @param {string} str - The string to count unique letters in.
 * @returns {number} - The number of unique letters in the string.
 */
export function nbRepetionsLettres(str:string): number {
  // renvoie le nombre de répétitions de lettres d'une chaine de caractère
  const lettres = str.replace(/\s/g, '');
  const lettresUniques = new Set(lettres);
  return lettres.length - lettresUniques.size;
}


/**
 * Counts the number of unique sentences in a given string.
 * @param {string} str - The string to count unique sentences in.
 * @returns {number} - The number of unique sentences in the string.
 */
export function nbRépetitionsSymbole(str: string): number {
  // renvoie le nombre de répétitions de symboles d'une chaine de caractère
  const symboles = str.match(/[^\w\s]/g) || [];
  const symbolesUniques = new Set(symboles);
  return symboles.length - symbolesUniques.size;
}
