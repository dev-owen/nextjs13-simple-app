"use client";

import { ToastContainer } from "react-toastify";
import useFeedbackStore from "@/store";
import FeedbackForm from "./feedback-form";
import FeedbackList from "./feedback-list";
import FeedbackStats from "./feedback-stats";
import { useCallback, useState } from "react";

export default function FeedbackComponents() {
  const store = useFeedbackStore();

    const useSearchFeedbacks = () => {
        return useCallback((query: string) => {
            return fetch(`/api/feedbacks/search?q=${query}`)
                .then(r => r.json());
        }, []);
    }

    const searchFeedbacks = useSearchFeedbacks();

    const onSearch = useCallback(
        async (query: string) => {
            const feedbacks = await searchFeedbacks(query);

            // TODO - store feedback 업데이트
            store.setFeedbackList(feedbacks);
        },
        [searchFeedbacks]
    );

  return (
    <>
      <main className="md:container mt-24 px-5">
        <FeedbackForm onSearch={onSearch} />
        <FeedbackStats />
        <FeedbackList />
      </main>
      {store.page_loading && (
        <div
          className="fixed top-5 left-5 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-yellow-400 border-r-transparent align-[-0.125em] text-warning motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      )}
      <ToastContainer />
    </>
  );
}
