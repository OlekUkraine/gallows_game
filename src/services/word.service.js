
class WordService {
    createWordAndDescription(arrWords) {
        if (arrWords) {
            const countWord = Math.floor(Math.random() * arrWords.length);

            return arrWords[countWord];
        }
    }
}

export const wordService =new WordService();
