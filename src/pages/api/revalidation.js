export default async function handler(req, res) {

    // Check for the POST request
    if (req.method !== "POST") {
        res
            .status(400)
            .json({ error: "Invalid HTTP Method.Only POST requess allowed." })
    }

    // Check for the secret Token
    if (req.query.secret !== "test") {
        return res.status(401).json({ message: 'Invalid token' })
    }

    try {
        // Check that body is not empty
        const body = req.body;
        console.log("start")
        if (!body) {
            res.status(400).send("Bad request, no body")
            return;
        }

        // get the slug to revalidate the body
        const slugToRevalidate = body.slugToRevalidate;
        console.log(slugToRevalidate)
        if (slugToRevalidate) {
            console.log("revalidating")
            await res.revalidate(`/works/${slugToRevalidate}`);
            return res.json({ revalidated: true })
        }
    } catch (err) {
        // If there was an error, Next.js will continue
        // to show the last successfully generated page
        return res.status(500).send("Error Revalidating")
    }
}