import {randomWords} from '../constants';

export const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * randomWords.length);
    return randomWords[randomIndex];
}