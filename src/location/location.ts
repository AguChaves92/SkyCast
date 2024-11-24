import { useContextProvider } from "../hooks/useMyContexthooks"
import { DICTIONARY } from "./dictionary"

type DictionaryKey = keyof typeof DICTIONARY;

export const t =(key:DictionaryKey)=>{
    const {language}= useContextProvider()
    if (!(key in DICTIONARY)) {
        return key;
    }

    const translations = DICTIONARY[key];
    return translations[language] || key
}