import { useEffect, useState } from 'react';

const useCapitalized = (text: string) => {
    const [capitalizedText, setCapitalizedText] = useState('');

    useEffect(() => {
        if (text) {
            const words = text.split('_');
            const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
            const result = capitalizedWords.join(' ');
            setCapitalizedText(result);
        }
    }, [text]);

    return (capitalizedText)
};

export default useCapitalized;