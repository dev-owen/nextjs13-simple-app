import { getElasticClient } from "@/core/elastic";
import { NextApiRequest, NextApiResponse } from "next";
import { useCallback } from "react";

async function tasksSearchHandler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { q: query } = req.query;

    // validate the "q" query parameter exists and is a string
    if (!query || typeof query !== 'string') {
        return res.status(400).end();
    }

    const elastic = await getElasticClient();

    const result = await elastic.search({
        index: 'feedback*',
        query: {
            match: {
                text: query,
            },
        },
    });

    // we send back the list of documents found
    const feedbacks = result.hits.hits.map((item) => item._source);

    return res.json(feedbacks);
}
