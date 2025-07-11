export default async function handler(req, res) {

    // Check for the POST request
    if (req.method !== "POST") {
        res
            .status(400)
            .json({ error: "Invalid HTTP Method.Only POST requess allowed." })
    }


    // Check for the secret Token
    if (req.query.secret !== process.env.CONTENTFUL_WEBHOOK_TOKEN) {
        return res.status(401).json({ message: 'Invalid token' })
    }

    try {
        // Check that body is not empty
        const body = req.body;

        if (!body) {
            res.status(400).send("Bad request, no body")
            return;
        }

        // get the slug to revalidate the body
        const slugToRevalidate = body.slugToRevalidate;
        if (slugToRevalidate) {
            await res.revalidate(`/works/${slugToRevalidate}`);
        }
        await res.revalidate(`/`);
        await res.revalidate(`/works`);
        return res.json({ revalidated: true })
    } catch (err) {
        // If there was an error, Next.js will continue
        // to show the last successfully generated page
        console.log(err)
        return res.status(500).send("Error Revalidating")
    }
}