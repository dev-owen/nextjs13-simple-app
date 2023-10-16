import { useCallback } from "react";

export default function useSearchFeedbacks() {
    return useCallback((query: string) => {
        return fetch(`/api/feedbacks/search?q=${query}`)
            .then(r => r.json());
    }, []);
}
