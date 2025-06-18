import { useState, useCallback, useEffect } from 'react';

export function useSuggestionApi(type = 'advice') {
  const [suggestion, setSuggestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSuggestion = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      let res, data;
      if (type === 'advice') {
        res = await fetch('https://api.adviceslip.com/advice');
        data = await res.json();
        setSuggestion(data.slip.advice);
      }
      
    } catch (err) {
      console.error(err);
      setError('Failed to fetch Advice.');
    } finally {
      setLoading(false);
    }
  }, [type]);

  // Optionally fetch initially on mount
  useEffect(() => {
    fetchSuggestion();
  }, [fetchSuggestion]);

  return { suggestion, fetchSuggestion, loading, error };
}
