
class WordService {
    createWordAndDescription(arrWords) {
        if (arrWords.length) {
            const countWord = Math.floor(Math.random() * arrWords.length);

            return arrWords[countWord];
        }
    }
}

export const wordService =new WordService();
