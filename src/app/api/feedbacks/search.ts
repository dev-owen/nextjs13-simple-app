import { getElasticClient } from "@/core/elastic";
import { NextApiRequest, NextApiResponse } from "next";

export async function feedbacksSearchHandler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { q: query } = req.query;

    console.log('query', query);

    // validate the "q" query parameter exists and is a string
    if (!query || typeof query !== 'string') {
        return res.status(400).end();
    }

    const elastic = await getElasticClient();

    const result = await elastic.search({
        index: 'feedbacks',
        query: {
            match: {
                text: query,
            },
        },
    });

    console.log('result', result);

    // we send back the list of documents found
    const feedbacks = result.hits.hits.map((item) => item._source);

    return res.json(feedbacks);
}
