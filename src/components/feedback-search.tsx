import React, { useCallback } from 'react';
import { twMerge } from "tailwind-merge";
import useFeedbackStore from "@/store";
import useSearchFeedbacks from '@/hooks/useSearchFeedbacks';

const FeedbackSearchForm = () => {
    const store = useFeedbackStore();
    const searchFeedbacks = useSearchFeedbacks();

    const onSearch = useCallback(
        async (query: string) => {
            await searchFeedbacks(query);
        },
        [searchFeedbacks]
    );

    return (
        <form onSubmit={e => {
            e.preventDefault();
            const query = new FormData(e.currentTarget).get('query');
            onSearch(query as string);
        }}>
            <div className="flex border rounded-lg my-4 px-2 py-3">
                <input
                    type="text"
                    name="query"
                    className="flex-grow border-none text-lg focus:outline-none"
                    placeholder="for search"
                />
                <button
                    type="submit"
                    disabled={store.page_loading}
                    className={twMerge(
                        "border-0 rounded-md w-28 h-10 cursor-pointer hover:bg-indigo-500",
                        store.page_loading
                            ? "bg-[#ccc] text-gray-800"
                            : "bg-indigo-600 text-white"
                    )}
                >
                    Search
                </button>
            </div>
        </form>
    );
};

export default FeedbackSearchForm;
